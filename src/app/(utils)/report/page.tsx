"use client";

import { useSearchParams } from "next/navigation";
import { ReportSelector } from "@/components/report/selector";
import Header from "@/components/global/header";
import { useState } from "react";

export default function ReportPage() {
  const searchParams = useSearchParams();
  const [curretType, setType] = useState("");
  const type = searchParams.get("type");

  useState(() => {
    if (type) {
      setType(type);
    }
  });

  return (
    <main className="max-w-[1200px] mx-auto">
      <Header />
      <div className="flex mx-20 justify-between items-end mt-10">
        <h1 className="text-5xl font-bold">
          {curretType === "bugbounty" ? "Bug Bounty" : "Report"}
        </h1>
        <ReportSelector
          {...(type ? { defaultValue: type } : {})}
          onValueChange={(value) => {
            setType(value);
          }}
        />
      </div>
    </main>
  );
}
