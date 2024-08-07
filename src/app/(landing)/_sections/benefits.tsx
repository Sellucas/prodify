import {
  Brush,
  CalendarClock,
  FileSearch,
  Laptop,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

import { Cta } from "@/components/cta";
import { AnimateView } from "@/components/animate-view";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const benefits = [
  {
    title: "Work from anywhere",
    description:
      "Keep information accessible. Your notes sync automatically across all your devices.",
    link: "https://stripe.com",
    icon: <Laptop className="text-blue-400" size={28} />,
  },
  {
    title: "Recall everything",
    description:
      "Enhance your notes with dynamic content for comprehensive management.",
    link: "https://netflix.com",
    icon: <CalendarClock className="text-blue-400" size={28} />,
  },
  {
    title: "Discover swiftly",
    description:
      "Access what you require, precisely when you need it, with robust and flexible search capabilities.",
    link: "https://google.com",
    icon: <FileSearch className="text-blue-400" size={28} />,
  },
  {
    title: "Secure & Private",
    description:
      "Your data is encrypted and stored securely, ensuring privacy and protection.",
    link: "https://meta.com",
    icon: <ShieldCheck className="text-blue-400" size={28} />,
  },
  {
    title: "Customize Freely",
    description:
      "Personalize your notes with various themes, fonts, and formatting options to suit your style.",
    link: "https://amazon.com",
    icon: <Brush className="text-blue-400" size={28} />,
  },
  {
    title: "Boost Productivity",
    description:
      "Leverage advanced tools and integrations to enhance your workflow and productivity.",
    link: "https://microsoft.com",
    icon: <Lightbulb className="text-blue-400" size={28} />,
  },
];

export const BenefitsSection = () => {
  return (
    <section className="container flex flex-col justify-center items-center lg:gap-12 mb-48">
      <div className="text-center space-y-2">
        <AnimateView direction="up">
          <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text  text-transparent font-bold uppercase text-sm tracking-wider">
            Benefit Features
          </span>
        </AnimateView>
        <AnimateView direction="up" transition={{ delay: 0.4 }}>
          <h2 className="text-center text-4xl font-medium leading-none tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Powerful personal planner to boost your conversion rate.
          </h2>
        </AnimateView>
      </div>
      <AnimateView direction="up" transition={{ delay: 0.6 }}>
        <Cta />
      </AnimateView>
      <div className="container">
        <AnimateView direction="down" transition={{ delay: 0.8 }}>
          <HoverEffect items={benefits} />
        </AnimateView>
      </div>
    </section>
  );
};
