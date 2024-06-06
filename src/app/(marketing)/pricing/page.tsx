import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/global/header";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Price() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <Header />
      <Tabs className="p-10" defaultValue="free">
        <div className="flex items-end justify-between mb-10">
          <h1 className="font-bold text-5xl">Pricing</h1>
          <TabsList>
            <TabsTrigger value="free">Free</TabsTrigger>
            <TabsTrigger value="pro">Pro</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="free">
          <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
            <div className="grid gap-6">
              <h3 className="text-xl font-bold sm:text-2xl">
                What&apos;s included in the Free plan
              </h3>
              <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="flex items-center">Unlimited Downloads</li>
                <li className="flex items-center">Game File Management</li>
                <li className="flex items-center">Free Open Source</li>
                <li className="flex items-center">Discord-RPC Support</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-center md:text-end">
              <div>
                <h4 className="text-7xl font-bold mb-5">$0</h4>
              </div>
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Get Started
              </Link>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="pro">
          <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
            <div className="grid gap-6">
              <h3 className="text-xl font-bold sm:text-2xl">
                What&apos;s included in the PRO plan
              </h3>
              <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="flex items-center">Everything In Free Plan</li>
                <li className="flex items-center">
                  Free Games For Every Month
                </li>
                <li className="flex items-center">Community For Pro Members</li>
                <li className="flex items-center">Access to Discord</li>
                <li className="flex items-center">Premium Support</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-center md:text-end">
              <div>
                <h4 className="text-7xl font-bold mb-5">$27</h4>
                <p className="text-sm font-medium text-muted-foreground">
                  Per Month
                </p>
              </div>
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Get Started
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <Table className="w-[90%] m-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[30%]">Features</TableHead>
            <TableHead className="w-[35%]">Free</TableHead>
            <TableHead className="w-[35%]">Pro</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Free</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableHead className="w-[30%]">Total</TableHead>
            <TableHead className="w-[35%]">Free</TableHead>
            <TableHead className="w-[35%]">Pro</TableHead>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
}
