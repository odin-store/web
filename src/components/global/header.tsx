import Link from "next/link";
import { ModeToggle } from "./darkmode-toggle";
import ThemeImage from "./theme-image";

import logo from "$/assets/brand/logo.png";
import logoDark from "$/assets/brand/logo_dark.png";

export default function Header(props: {
  className?: string;
  disabledToggle?: boolean;
}) {
  return (
    <div
      className={
        "flex justify-between p-5 max-w-[1200px] mx-auto " + props.className
      }
    >
      <div className="flex items-center">
        <Link href={"/"} className="flex text-xl mr-10 mt-[-4px]">
          <ThemeImage
            light={logoDark}
            dark={logo}
            className="w-24"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <Link className="text-xs font-extralight mr-5" href={"/pricing"}>
          <p>가격</p>
        </Link>
        <Link className="text-xs font-extralight mr-5" href={"/download"}>
          <p>다운로드</p>
        </Link>
        <Link className="text-xs font-extralight mr-3" href={"/login"}>
          <p>로그인</p>
        </Link>
        <div className="ml-5">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
