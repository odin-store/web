"use client";

import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export default function ThemeImage(props: {
  light: StaticImageData;
  dark: StaticImageData;
  alt: string;
  className?: string;
}) {
  const { theme, resolvedTheme, forcedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(
      theme === "dark" || resolvedTheme === "dark" || forcedTheme === "dark"
    );
  }, [theme, resolvedTheme, forcedTheme]);

  useEffect(() => {
    const body = document.querySelector("html");
    setIsDark(body?.classList.contains("dark") ?? false);
  }, []);

  return (
    <Image
      className={props.className ? props.className : ""}
      src={isDark ? props.dark : props.light}
      alt={props.alt}
    />
  );
}
