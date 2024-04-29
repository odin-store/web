import Header from "@/components/global/header";
import ReturnButton from "@/components/global/return";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Odin",
};

export default function NotFound() {
  return (
    <main>
      <Header />
      <div className="pt-14 flex flex-col justify-center items-center mb-10">
        <h1 className="sm:text-5xl text-center font-extrabold text-3xl">
          404: Not Found
        </h1>
        <p className="text-center mt-5 text-stone-400 text-xs sm:text-sm">
          페이지를 찾을 수 없었어요 :(
          <br />
          URL을 다시 한번 확인해 주세요.
        </p>
        <div className="mt-5 ">
          <ReturnButton>
            <p>이전 페이지로 돌아가기</p>
          </ReturnButton>
          <Link href={"/"} className={buttonVariants({ className: "ml-2" })}>
            홈으로
          </Link>
        </div>
      </div>
    </main>
  );
}
