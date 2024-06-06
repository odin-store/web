"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export default function Teammate(props: {
  name: string;
  profile: string;
  url?: string;
  fallback: string;
  insta: string;
  task: string[];
}) {
  return (
    <div className=" relative overflow-hidden rounded-lg border bg-background p-2">
      <Avatar className="w-24 h-24 mt-10 mb-4 mx-auto">
        <AvatarImage src={props.profile} alt={props.name} />
        <AvatarFallback>{props.fallback}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-between rounded-md pb-6 items-center">
        <h3 className="font-bold">{props.name}</h3>
        <Link href={"https://instagram.com/" + props.insta} target="_blank">
          <p className="text-xs mb-2 text-muted-foreground">@{props.insta}</p>
        </Link>
        <div className="space-y-2 w-[100%]">
          <div className="text-sm text-muted-foreground break-keep px-5 mt-5">
            {props.url ? (
              <HoverCard>
                <HoverCardTrigger>
                  <Link
                    href={`https://${props.url}/`}
                    target="_blank"
                    className={cn(
                      buttonVariants({
                        class: "w-[100%]",
                      })
                    )}
                  >
                    {props.url}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-sm">클릭 시 해당 페이지로 이동해요!</p>
                </HoverCardContent>
              </HoverCard>
            ) : (
              <></>
            )}
            {props.task.map((task, i) => {
              return (
                <div
                  className="px-5 py-2 text-center text-sm my-2 rounded-md bg-slate-200 dark:bg-neutral-900"
                  key={i}
                >
                  {task}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
