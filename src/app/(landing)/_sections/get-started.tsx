import Link from "next/link";
import Image from "next/image";

import { AnimateView } from "@/components/animate-view";

export const GetStartedSection = () => {
  return (
    <section className="relative">
      <div className="flex flex-col items-center gap-8 text-center mb-48">
        <AnimateView direction="up">
          <Image
            src={"/logo.png"}
            alt="Prodify Logo"
            width={96}
            height={96}
            className="z-10"
          />
        </AnimateView>
        <AnimateView direction="up" transition={{ delay: 0.4 }}>
          <h1 className="text-center text-4xl font-medium leading-none tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl z-10">
            Get started with <br /> Prodify now.
          </h1>
        </AnimateView>
        <AnimateView direction="up" transition={{ delay: 0.6 }}>
          <Link
            className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-xl bg-[#111111] px-4 text-neutral-50 text-sm z-10"
            href="/auth/login"
          >
            <span className="absolute h-0 w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:h-56 group-hover:w-32"></span>
            <span className="relative">Try for free</span>
          </Link>
        </AnimateView>
      </div>
      <div className="absolute top-0 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(59,130,246,0.5)] opacity-50 blur-[80px]"></div>
      </div>
    </section>
  );
};
