import Header from "@/components/global/header";
import Link from "next/link";
import Teammate from "@/components/teammates/teammate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teammate - Odin",
  description: "오딘의 팀원들을 소개할게요!",
};

export default function Team() {
  return (
    <main>
      <Header />
      <div className="pt-14 flex flex-col justify-center items-center">
        <Link
          href={"/recruit"}
          className="rounded-2xl bg-muted px-4 py-1.5 text-xs font-medium mb-3 sm:text-sm sm:mb-0"
        >
          Join Us
        </Link>
        <h1 className="sm:text-5xl text-center font-extrabold text-3xl">
          Odin Teammates
        </h1>
        <p className="text-center mt-5 text-stone-400 text-xs sm:text-sm">
          오딘의 팀원들을 소개할게요.
          <br />
          모두 게임 문화의 혁신을 위해 열심히 노력하고 있어요
        </p>
      </div>
      <div className="pt-10 grid justify-center gap-3 grid-cols-1 px-10 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 md:mx-auto md:p-10 mb-20">
        <Teammate
          name="이규연"
          insta="ekal_.index"
          url="damie.works"
          profile="/assets/teammates/leegyuyeon.jpg"
          fallback="GY"
          task={[
            "Project Leader",
            "Client Maintaier",
            "Web Maintainer",
            "Server Maintainer",
          ]}
        />
        {/* <Teammate
          name="이준서"
          insta="jse0._yo"
          profile="/assets/teammates/junseo.jpg"
          fallback="JS"
          task={["Frontend Developer", "Client Maintainer"]}
        />
        <Teammate
          name="최민호"
          insta="piz_know55"
          profile="/assets/teammates/minho.jpg"
          fallback="MH"
          task={["Backend Developer", "AI Maintainer"]}
        />
        <Teammate
          name="신민성"
          insta="minsung__25"
          profile="/assets/teammates/minsung.jpg"
          fallback="MS"
          task={["Backend Developer", "Server Maintainer"]}
        />
        <Teammate
          name="공연택"
          insta="motden_kong"
          profile="/assets/teammates/yeontaek.jpg"
          fallback="YT"
          task={["Backend Developer", "Updater Maintainer"]}
        /> */}
      </div>
    </main>
  );
}
