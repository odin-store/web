import Header from "@/components/global/header";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import screenshot from "$/assets/main/screenshot.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로젝트 오딘",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main>
      <Header />
      <div className="relative h-[700px] flex overflow-hidden">
        <div className="w-[100%] h-[80%] flex flex-col items-center justify-center z-10">
          <Link
            href={"/"}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Join Us On Discord
          </Link>
          <h1 className="text-center font-extrabold text-2xl sm:text-5xl mt-5">
            Most Powerful Game Store
            <br />
            For Indie Gamers & Developers
          </h1>
          <p className="text-center mt-5 text-stone-400">
            오딘은 인디 게임을 위한 게이밍 플랫폼입니다.
            <br />
            누구나 쉽고 간편하게 인디 게임을 즐길 수 있어요.
          </p>
          <div className="mt-5 ">
            <Link
              href={"/download"}
              className={buttonVariants({ className: "mr-2" })}
            >
              다운로드
            </Link>
            <Link href={"/"} className={buttonVariants({ variant: "outline" })}>
              더 알아보기
            </Link>
          </div>
        </div>
        <Image
          className="absolute opacity-50 w-[900px] left-[50%] bottom-[-50px] sm:bottom-[-100px] md:bottom-[-200px] lg:bottom-[-200px] translate-x-[-50%]"
          src={screenshot}
          alt="screenshot"
        />
      </div>
      <div className="py-20 bg-slate-100 dark:bg-neutral-900">
        <h2 className="font-extrabold text-5xl text-center">Features</h2>
        <p className="text-center mt-5 text-stone-400">
          오딘은 인디 게임을 위한 많은 기능들을 가지고 있어요!
          <br />
          100% 무료로 모든 기능을 즐기실 수 있어요.
        </p>
        <div className="p-10 mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 ">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-12 w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">No Trackers</h3>
                <p className="text-sm text-muted-foreground break-keep">
                  사용자가 동의한 항목이 아닌 정보는 수집하지 않아요.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-12 w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Low Fees</h3>
                <p className="text-sm text-muted-foreground break-keep">
                  운영에 필요한 최소한의 수수료만 요구해요.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                className="h-12 w-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Subscribe</h3>
                <p className="text-sm text-muted-foreground break-keep">
                  마음에 드는 개발자를 구독해 무제한으로 즐길 수 있어요.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-12 w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Safety</h3>
                <p className="text-sm text-muted-foreground break-keep">
                  사용자의 개인정보를 무엇보다 중요하게 보호해요.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-12 w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Trustworthy</h3>
                <p className="text-sm text-muted-foreground break-keep">
                  게임들을 직접 검토해 바이러스와 불건전한 게임들을 차단해요.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-12 w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">More..</h3>
                <p className="text-sm text-muted-foreground break-keep">
                  이들을 제외하고도 다른 수많은 기능들을 가지고 있어요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 ">
        <h2 className="font-extrabold text-center text-2xl sm:text-5xl">
          Proudly Open Source
        </h2>
        <p className="text-center mt-10 text-xs sm:text-sm text-stone-400">
          오딘은 100% 오픈 소스 라이선스를 채택했어요!
          <br />
          <Link
            href={"https://github.com/odin-store/"}
            className="underline"
            target="_blank"
          >
            Github
          </Link>
          에서 소스 코드를 확인하실 수 있어요.
        </p>
      </div>
    </main>
  );
}
