import Header from "@/components/global/header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Advertise() {
  return (
    <main className="max-w-[1200px] m-auto">
      <Header />
      <div className="pt-14 flex flex-col justify-center items-center">
        <h1 className="sm:text-5xl text-center font-extrabold text-3xl">
          Advertise With Odin
        </h1>
        <p className="text-center mt-5 text-stone-400 text-xs sm:text-sm">
          오딘 스토어에 마케팅을 의뢰해 보세요!
          <br />
          커스텀 상품 페이지, 배너 등 수많은 것들을 지원해드려요.
        </p>
      </div>
      <div className="grid w-[90%] items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px] m-auto mt-10 mb-10">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            광고 기능은 아직 출시되지 않았어요!
          </h3>
          <p className="opacity-60">
            광고 기능은 2025년 중 출시될 예정이에요.
            <br />
            더욱 쾌적한 서비스를 위함이니, 조금만 기다려 주세요!
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-end">
          <div>
            <p className="text-xs opacity-40">
              뉴스레터를 구독하시면,
              <br />
              업데이트 알림을 받으실 수 있어요!
            </p>
          </div>
          <Link
            href="https://projectodin.substack.com/about"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            업데이트 알림 받기
          </Link>
        </div>
      </div>
    </main>
  );
}
