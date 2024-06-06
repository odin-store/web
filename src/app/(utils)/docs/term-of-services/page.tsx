import Blockquote from "@/components/docs/Blockquote";
import Header from "@/components/global/header";
import Link from "next/link";

export const metadata = {
  title: "라이센스 - DPUS",
  description: "DPUS는 이런 라이센스 정책을 채용했어요.",
};

export default function License() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <Header />
      <div className="pt-14 flex flex-col justify-center items-center">
        <h1 className="sm:text-5xl text-center font-extrabold text-3xl">
          Term Of Services
        </h1>
        <p className="text-center mt-5 text-stone-400 text-xs sm:text-sm">
          오딘의 라이선스 정책을 소개할게요!
          <br />
          오딘은 오픈 소스 플랫폼으로서, 아래 정책을 준수해 주셔야 해요.
        </p>
      </div>
      <div className="docs-info max-w-[1200px] mx-auto mt-10 px-10">
        <h2>서비스 개요</h2>
        <p>
          프로젝트 오딘은 다양한 게임들을 다운로드하고 즐길 수 있는 게임물 유통
          플랫폼입니다.
          <br /> 유저는 프로젝트 오딘 클라이언트를 통해 게임 검색, 구매,
          다운로드, 설치 및 플레이가 가능합니다.
        </p>
        <h3>제1조 (약관의 효력)</h3>
        <p>
          본 이용약관은 프로젝트 오딘 서비스(이하 "서비스")를 이용하는 모든
          유저에게 적용됩니다
          <br /> 유저는 서비스를 이용함으로써 본 이용약관의 모든 내용에 동의하고
          준수하는 것으로 간주됩니다.
        </p>
        <h3>제2조 (서비스 이용)</h3>
        <ul>
          <li>만 14세 이상만이 서비스를 이용할 수 있습니다.</li>
          <li>
            유저는 서비스 이용에 필요한 모든 기기 및 통신망 연결 비용을
            자체적으로 부담해야 합니다.
          </li>
          <li>
            유저는 본인의 아이디와 비밀번호를 제3자에게 누설하지 않도록 주의해야
            합니다.
          </li>
          <li>
            유저는 다음과 같은 행위를 금지합니다:
            <ul>
              <li>타인의 명의를 도용하는 행위</li>
              <li>
                허위 정보를 제공하거나, 타인의 정보를 무단으로 사용하는 행위
              </li>
              <li>저작권, 상표권 등 지적 재산권을 침해하는 행위</li>
              <li>
                음란물, 폭력물, 비방 등 사회 일반에 해악을 끼치는 정보를
                유포하는 행위
              </li>
              <li>
                기타 프로젝트 오딘 서비스 이용을 방해하거나, 다른 유저에게
                피해를 주는 행위
              </li>
            </ul>
          </li>
          <li>
            프로젝트 오딘은 유저가 제4조를 위반할 경우, 유저의 서비스 이용을
            제한하거나, 계정을 삭제할 수 있습니다.
          </li>
        </ul>
        <h3>제3조 (게임 판매 및 이용)</h3>
        <ul>
          <li>
            프로젝트 오딘은 다양한 게임들을 판매하고 있습니다. 유저는 게임을
            구매하기 위해 프로젝트 오딘 계정에 결제 수단을 등록해야 합니다.
          </li>
          <li>
            구매된 게임은 프로젝트 오딘 클라이언트를 통해 다운로드하고 설치할 수
            있습니다.
          </li>
          <li>게임 이용료는 게임마다 다르며, 구매 시 지불해야 합니다.</li>
          <li>
            프로젝트 오딘은 게임 서비스의 원활한 제공을 위해 노력하지만, 인터넷
            연결 상태, 기기 성능 등으로 인해 서비스가 일시적으로 중단될 수
            있습니다.
          </li>
          <li>
            프로젝트 오딘은 게임 이용 중 발생하는 모든 문제에 대해 책임을 지지
            않습니다.
          </li>
        </ul>
        <h3>제4조 (지적 재산권)</h3>
        <p>프로젝트 오딘은 서비스와 관련된 모든 지적 재산권을 보유합니다.</p>

        <h3>제5조 (개인정보 처리)</h3>
        <p>
          프로젝트 오딘은 유저의 개인정보를 서비스 제공 및 개선, 마케팅, 계정
          관리 등의 목적으로 수집하고 이용합니다.
          <br /> 프로젝트 오딘은 유저의 동의 없이 개인정보를 제3자에게 제공하지
          않습니다.
          <br /> 유저는 자신의 개인정보를 열람, 수정, 삭제할 수 있습니다.
        </p>

        <h3>제6조 (서비스 변경 및 종료)</h3>
        <p>
          프로젝트 오딘은 사전 통지 없이 서비스를 변경하거나 종료할 수 있습니다.
          <br /> 서비스 변경 또는 종료로 인해 유저에게 발생하는 손해에 대해
          프로젝트 오딘은 책임을 지지 않습니다.
        </p>

        <h3>제7조 (준거법 및 관할법원)</h3>
        <p>
          본 이용약관은 대한민국 법률에 의해 해석되고 집행됩니다.
          <br /> 본 이용약관과 관련된 모든 분쟁은 서울중앙지법을 제1심 전속 관할
          법원으로 정합니다.
        </p>

        <h3>제8조 (기타)</h3>

        <p>본 이용약관은 2024년 5월 10일부터 시행됩니다.</p>
        <p>
          프로젝트 오딘은 본 이용약관을 언제든지 변경할 수 있으며, 변경 내용은
          프로젝트 오딘 홈페이지에 공지합니다.
        </p>
        <p>
          본 이용약관의 일부가 무효라도, 나머지 조항은 그 효력을 유지합니다.
        </p>
        <p>
          본 이용약관과 관련하여 궁금한 사항이 있으면 프로젝트 오딘 고객센터에
          문의하시기 바랍니다.
        </p>

        <h2>프로젝트 오딘 고객센터</h2>
        <ul>
          <li>
            이메일: <a href="mailTo:admin@damie.works">admin@damie.works</a>
          </li>
        </ul>

        <p className="mt-10">
          본 이용약관은 2024년 5월 10일 시행되었으며, 사전 통지 없이 변경될 수
          있습니다.
        </p>
      </div>
    </main>
  );
}