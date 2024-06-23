"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { OdinAPI } from "@/utils/api";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(50),
});

export default function ReportForm() {
  const api = new OdinAPI();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <>
      <h1 className="scroll-m-20 text-2xl text-center mb-3 font-extrabold tracking-tight lg:text-xl">
        어드민 로그인
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@projectodin.store"
                    {...field}
                    type="text"
                  />
                </FormControl>
                <FormDescription>
                  계정의 이메일을 입력해 주세요.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} type="password" />
                </FormControl>
                <FormDescription>
                  계정의 비밀번호를 입력해 주세요.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button id="submit" className="w-[100%]" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
