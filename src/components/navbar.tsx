"use client";

import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { AnimateView } from "@/components/animate-view";

export const Navbar = () => {
  return (
    <AnimateView
      direction="up"
      transition={{ delay: 1 }}
      className="fixed top-0 z-50 bg-black/95 border-b-[0.1px] border-[#1e1e1e] h-14 w-full "
    >
      <div className="container flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>

        <div className="flex gap-4 items-center tracking-tight">
          <Button variant={"link"} size={"sm"} asChild>
            <Link href="/auth/login">Log in</Link>
          </Button>
          <Link
            className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-xl bg-[#111111] px-4 text-neutral-50 text-sm"
            href="/auth/login"
          >
            <span className="absolute h-0 w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:h-56 group-hover:w-32"></span>
            <span className="relative">Try for free</span>
          </Link>
        </div>
      </div>
    </AnimateView>
  );
};
