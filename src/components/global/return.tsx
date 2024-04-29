"use client";
import { buttonVariants } from "../ui/button";

export default function ReturnButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <a
      className={buttonVariants({
        variant: "outline",
        className: "cursor-pointer",
      })}
      onClick={() => {
        history.back();
      }}
    >
      {children}
    </a>
  );
}
