"use client";
import Header from "@/components/global/header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import capture from "$/assets/download/capture.png";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export default function Download() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <Header />
      <div className="flex justify-center py-20 flex-col md:flex-row">
        <div className="mx-10  rounded-lg overflow-hidden  md:w-[50%]">
          <AspectRatio ratio={16 / 9}>
            <Image
              className="w-[100%] h-[100%] object-cover"
              src={capture}
              alt="capture"
            />
          </AspectRatio>
        </div>
        <div className="p-10 text-center md:text-left">
          <h1 className="font-extrabold text-3xl mb-3">오딘 런처 다운로드</h1>
          <p className="mb-3 text-xs">
            오딘 런처는 사용자의 환경에서 게임을 효율적으로 관리할 수 있는
            <br />
            게임 관리 및 다운로드 도구에요.
          </p>
          <AlertDialog>
            <AlertDialogTrigger>
              <p className={buttonVariants({ className: "cursor-pointer" })}>
                다운로드
              </p>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>오딘 런처를 다운로드할까요?</AlertDialogTitle>
                <AlertDialogDescription>
                  오딘 런처를 다운로드할 시,{" "}
                  <Link href={"/docs/privacy"} className="underline">
                    개인정보처리방침
                  </Link>
                  과{" "}
                  <Link href={"/docs/privacy"} className="underline">
                    서비스 이용약관
                  </Link>
                  에 <br />
                  동의하는 것으로 간주될 거에요.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <a href="/assets/download/capture.png" download="capture">
                    Download
                  </a>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </main>
  );
}
