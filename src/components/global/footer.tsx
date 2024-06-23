import logo from "$/assets/brand/logo.png";
import logoDark from "$/assets/brand/logo_dark.png";
import Link from "next/link";
import ThemeImage from "./theme-image";

export default function Footer() {
  const date = new Date();

  return (
    <div className="w-[100%] max-w-[1200px] mx-auto p-0 py-10 lg:p-10">
      <div className="flex px-0 lg:px-5 justify-between mb-10 flex-col lg:flex-row items-center">
        <Link href={"/"} className="mb-10">
          <ThemeImage
            light={logoDark}
            dark={logo}
            className="w-24"
            alt="logo"
          />
        </Link>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-0">
          <div className="flex flex-col lg:ml-10">
            <h5 className="mb-3 font-extrabold">서비스</h5>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"/advertise"}
            >
              광고 문의
            </Link>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"/"}
            >
              개발자 센터
            </Link>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"/"}
            >
              개발자 문서
            </Link>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"/brand"}
            >
              브랜드 리소스 센터
            </Link>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"/"}
            >
              서버 상태 확인
            </Link>
          </div>
          <div className="flex flex-col lg:ml-10">
            <h5 className="mb-3 font-extrabold">지원</h5>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"https://meow.damie.works"}
            >
              고객센터
            </Link>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"mailTo:admin@odinus.shop"}
            >
              이메일
            </Link>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"/report?type=copyright"}
            >
              저작권 침해 신고
            </Link>
          </div>
          <div className="flex flex-col lg:ml-10">
            <h5 className="mb-3 font-extrabold">법적 고지</h5>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"/docs/term-of-services"}
            >
              서비스 이용 약관
            </Link>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"/docs/privacy"}
            >
              개인정보 처리방침
            </Link>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"/docs/license"}
            >
              라이선스
            </Link>
          </div>
          <div className="flex flex-col lg:ml-10">
            <h5 className="mb-3 font-extrabold">팀</h5>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"/recruit"}
            >
              채용 정보
            </Link>
            <Link
              className="font-extralight text-sm transition-opacity opacity-50 hover:opacity-100"
              href={"/team"}
            >
              팀 정보
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-xs">
        Copyright © {date.getFullYear()}{" "}
        <Link href={"/"} className="underline">
          Project Odin
        </Link>
        . All Right Reserved
      </p>
    </div>
  );
}
