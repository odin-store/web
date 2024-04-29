import Header from "@/components/global/header";
import Link from "next/link";

export default function Recruit() {
  return (
    <main>
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
    </main>
  );
}
