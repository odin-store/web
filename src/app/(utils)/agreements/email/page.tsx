import Header from "@/components/global/header";

export default function EmailAgreeMents() {
  return (
    <main>
      <Header />
      <div className="pt-14 flex flex-col justify-center items-center">
        <h1 className="sm:text-5xl text-center font-extrabold text-3xl">
          Email Receipt Agreement
        </h1>
        <p className="text-center mt-5 text-stone-400 text-xs sm:text-sm">
          오딘은 사용자의 이메일을 수집하고, 유저에게 필요한 정보들을 전송하고
          있어요.
        </p>
      </div>
      <div className="docs-info max-w-[1200px] w-[80%] mx-auto mt-10 px-10">
        <p>
          저희는 사용자의 이메일을 수집하여 다양한 용도로 사용하고 있습니다.
          <br />
          이메일은 주로 사용자 인증, 계정 복구, 중요한 공지사항 전달, 그리고
          <br />
          뉴스레터 발송 등의 목적으로 활용됩니다.
        </p>
        <br />
        <p>
          특히, 뉴스레터는 최신 소식, 이벤트 정보, 특별 할인 등의 유용한 정보를
          <br />
          제공하기 위해 발송됩니다. 뉴스레터 수신을 원하시는 경우, 별도의 동의
          <br />
          절차를 거쳐야 합니다. 동의하지 않으신 경우, 뉴스레터는 발송되지
          <br />
          않으며, 다른 중요한 공지사항만 이메일로 전달됩니다.
        </p>
        <br />
        <p>
          저희는 사용자의 개인정보 보호를 최우선으로 생각하며, 수집된 이메일은
          <br />
          안전하게 관리됩니다. 이메일 수집 및 사용에 대한 자세한 내용은 개인정보
          <br />
          처리방침을 참고해주시기 바랍니다.
        </p>
      </div>
    </main>
  );
}
