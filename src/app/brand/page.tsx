import Header from "@/components/global/header";
import Link from "next/link";
import Image from "next/image";

import logo from "$/assets/brand/brand-resource-center/logo.png";
import logoColor from "$/assets/brand/brand-resource-center/logo-color.png";

export default function Brand() {
  return (
    <main className="relative max-w-[1200px] mx-auto">
      <Header />
      <div className="pt-14 flex flex-col justify-center items-center">
        <Link
          href={"/"}
          className="rounded-2xl bg-muted px-4 py-1.5 text-xs font-medium mb-3 sm:text-sm sm:mb-0"
        >
          Project Odin
        </Link>
        <h1 className="sm:text-5xl text-center font-extrabold text-3xl">
          Brand Resource Center
        </h1>
        <p className="text-center mt-5 text-stone-400 text-xs sm:text-sm">
          오딘의 팀원들을 소개할게요.
          <br />
          모두 게임 문화의 혁신을 위해 열심히 노력하고 있어요
        </p>
      </div>
      <div className="sm:flex my-20 sm:justify-center">
        <div className="sm:sticky top-20 ml-10 flex flex-col">
          <h3 className="font-extrabold mb-5">브랜드 아이덴티티</h3>
          <a
            href="/brand#symbol-logo"
            className="text-stone-400 transition-colors hover:text-black hover:dark:text-white cursor-pointer"
          >
            심볼 로고
          </a>
          <a
            href="/brand#brand-color"
            className="text-stone-400 transition-colors hover:text-black hover:dark:text-white cursor-pointer"
          >
            브랜드 컬러
          </a>
        </div>
        <div className="px-10 mt-10 sm:ml-10 sm:px-0 sm:mt-0">
          <h3 id="symbol-logo" className="font-extrabold text-2xl mb-3">
            심볼 로고
          </h3>
          <p className="text-stone-500 dark:text-stone-200">
            프로젝트 오딘의 심볼 로고입니다. <br />
            색과 형태의 변형 등 임의의 수정 없이 사용해야 합니다.
          </p>
          <div className="my-5 md:flex text-white">
            <div className="bg-neutral-900 flex justify-center items-center relative p-16 rounded-lg w-[100%] md:w-fit">
              <p className="absolute left-5 top-5 font-extrabold">
                오딘 브랜드 로고
              </p>
              <Image className="w-32" src={logo} alt="logo" />
              <a
                className="flex text-[#F7C14C] absolute right-5 bottom-5 items-center"
                href="/assets/brand/brand-resource-center/logo.png"
                download={"logo.png"}
              >
                <svg
                  className="w-6 h-6 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                  />
                </svg>
                다운로드
              </a>
            </div>
            <div className="bg-neutral-900 flex justify-center items-center relative p-16 rounded-lg w-[100%] md:w-fit mt-3 md:ml-3 md:mt-0">
              <p className="absolute left-5 top-5 font-extrabold">
                오딘 브랜드 로고
              </p>
              <Image className="w-32" src={logoColor} alt="logo" />
              <a
                className="flex text-[#F7C14C] absolute right-5 bottom-5 items-center"
                href="/assets/brand/brand-resource-center/logo-color.png"
                download={"logo-color.png"}
              >
                <svg
                  className="w-6 h-6 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                  />
                </svg>
                다운로드
              </a>
            </div>
          </div>
          <h3 id="brand-color" className="font-extrabold text-2xl mb-3 mt-10">
            브랜드 컬러
          </h3>
          <p className="text-stone-500 dark:text-stone-200">
            프로젝트 오딘의 브랜드 컬러입니다.
            <br />
            색과 형태의 변형 등 임의의 수정 없이 사용해야 합니다.
          </p>
          <div className="bg-[#080808] text-white border-[1px] p-10 rounded-lg mt-5 border-[#080808] dark:border-white">
            <h3 className="font-extrabold">블랙</h3>
            <p>#080808</p>
            <p>RGB(8, 8, 8)</p>
            <p>HSL(0, 0%, 3%)</p>
            <p>HWB(0, 3%, 96%)</p>
          </div>
          <div className="bg-[#F7C14C] text-black border-[1px] p-10 rounded-lg mt-5 border-[#080808] dark:border-white">
            <h3 className="font-extrabold">골드</h3>
            <p>#F7C14C</p>
            <p>RGB(247, 193, 76)</p>
            <p>HSL(41, 91%, 63%)</p>
            <p>HWB(41, 29%, 3%)</p>
          </div>
        </div>
      </div>
    </main>
  );
}
