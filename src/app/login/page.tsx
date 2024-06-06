import { ModeToggle } from "@/components/global/darkmode-toggle";
import backgrond from "$/assets/login/background.png";
import backgrondWhite from "$/assets/login/background_white.png";
import React from "react";
import LoginForm from "@/components/login/form";
import Link from "next/link";
import ThemeImage from "@/components/global/theme-image";

export default function Home() {
  return (
    <main>
      <div className="absolute right-10 top-10 z-50">
        <ModeToggle />
      </div>
      <div className="flex w-[100%] h-[100vh] relative z-10">
        <div className="hidden lg:block  flex-1 relative h-[100vh]">
          <ThemeImage
            className="z-20 h-[100vh] object-center object-cover drag-none"
            light={backgrondWhite}
            dark={backgrond}
            alt="login-background"
          />
          <div className="z-30 absolute left-20 bottom-20">
            <p>
              오딘은 항상 최고의 사용자 경험을 제공하기 위해 노력하고 있어요
            </p>
            <h3 className="font-extrabold mt-3">Damie - 오딘 리드 개발자</h3>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-80">
            <LoginForm />
            <p className="text-center text-xs mt-5">
              계정이 없으신가요?{" "}
              <Link href={"/register"} className="underline">
                여기
              </Link>
              에서 가입하세요!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
