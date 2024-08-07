import Image from "next/image";

import { Cta } from "@/components/cta";
import Particles from "@/components/ui/particles";
import { AnimateView } from "@/components/animate-view";
import { BorderBeam } from "@/components/ui/border-beam";
import LinearGradient from "@/components/ui/linear-gradient";
import RadialGradient from "@/components/ui/radial-gradient";

export const HeroSection = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col gap-32 items-center mb-48 text-center">
        <div className="relative">
          <AnimateView direction="up">
            <span className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#272726] bg-black px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-3xl">
              <span className="bg-gradient-to-t from-[#fff] to-gray-800 bg-clip-text text-transparent">
                Start your free account today
              </span>
            </span>
          </AnimateView>
          <AnimateView direction="up">
            <h1 className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl">
              Simplify tasks, manage time for more efficient results.
            </h1>
          </AnimateView>
          <AnimateView direction="up" transition={{ delay: 0.4 }}>
            <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl">
              Organize your tasks, ensure completion of activities, and maintain{" "}
              <br />
              oversight to ensure your projects stay on track.
            </p>
          </AnimateView>
          <AnimateView direction="up" transition={{ delay: 0.6 }}>
            <Cta />
          </AnimateView>
        </div>
        <AnimateView
          direction="down"
          transition={{ delay: 0.8 }}
          className="relative z-10 aspect-video w-11/12 rounded-xl border-2 border-[#1e1e1e]"
        >
          <Image
            src={"/kanbanboard-hero.png"}
            alt="UI Representation of Dashboard Prodify"
            fill
            className="rounded-xl"
            priority
          />
          <BorderBeam />
        </AnimateView>
      </div>
      <RadialGradient />
      <LinearGradient className="absolute bottom-0 left-0 z-10" />
      <Particles className="absolute top-0 w-full" />
    </section>
  );
};
