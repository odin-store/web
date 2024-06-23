"use client";

import { useSearchParams } from "next/navigation";
import { ReportSelector } from "@/components/report/selector";
import Header from "@/components/global/header";
import { useState, useEffect, Suspense } from "react";

interface SearchParamsComponentProps {
  setType: (type: string) => void;
}

function SearchParamsComponent({ setType }: SearchParamsComponentProps) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  useEffect(() => {
    if (type) {
      setType(type);
    }
  });

  return null;
}

export default function ReportPage() {
  const [curretType, setType] = useState("");

  return (
    <main className="max-w-[1200px] mx-auto">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsComponent setType={setType} />
      </Suspense>
      <div className="flex mx-20 justify-between items-end mt-10">
        <h1 className="text-5xl font-bold">
          {curretType === "bugbounty" ? "Bug Bounty" : "Report"}
        </h1>
        <ReportSelector
          {...(curretType ? { defaultValue: curretType } : {})}
          onValueChange={(value) => {
            setType(value);
          }}
        />
      </div>
    </main>
  );
}
