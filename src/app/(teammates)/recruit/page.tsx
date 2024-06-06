import Header from "@/components/global/header";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Recruit() {
  return (
    <main className="max-w-[1200px] m-auto">
      <Header />
      <div className="pt-14 flex flex-col justify-center items-center">
        <Link
          href={"/team"}
          className="rounded-2xl bg-muted px-4 py-1.5 text-xs font-medium mb-3 sm:text-sm sm:mb-0"
        >
          Our Teammates
        </Link>
        <h1 className="sm:text-5xl text-center font-extrabold text-3xl">
          Join Our Teammates
        </h1>
        <p className="text-center mt-5 text-stone-400 text-xs sm:text-sm">
          오딘의 팀원들과 함께해 보시는 건 어때요?
          <br />
          모두 게임 문화의 혁신을 위해 열심히 노력하고 있어요
        </p>
      </div>

      <div className="grid w-[90%] items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px] m-auto mt-10 mb-10">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            현재 채용중인 공고가 없어요!
          </h3>
          <p className="opacity-60">
            현재 어떠한 직무도 채용중이지 않아요.
            <br />
            조만간 새로운 채용 공고가 뜨길 기대해 봐요!
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-end">
          <div>
            <p className="text-xs opacity-40">
              뉴스레터를 구독하시면,
              <br />
              채용 알림을 받으실 수 있어요!
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            채용 알림 받기
          </Link>
        </div>
      </div>
    </main>
  );
}
