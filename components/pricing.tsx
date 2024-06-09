import Link from "next/link";

import ShineBorder from "./ui/shine-border";
import { cn } from "@/lib/utils";

interface PricingProps {
  children: React.ReactNode;
  price: string;
  title: string;
  className?: string;
}

export const Pricing = ({
  children,
  price,
  title,
  className,
}: PricingProps) => {
  return (
    <ShineBorder
      className={cn("p-8 w-80", className)}
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <h2 className="text-2xl font-light mb-2">{title}</h2>
      <h1>
        <span className="text-5xl font-light">${price}</span>
        <span className="text-gray-400 tracking-wider">/ month</span>
      </h1>
      <hr className="border-0 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8" />
      <div>
        <ul className="space-y-4">{children}</ul>
        <div className="mt-8">
          <Link
            href={"/auth/login"}
            className="w-full group relative inline-flex h-12 items-center justify-center overflow-hidden bg-[#111111] px-4 text-neutral-50 rounded-[8px]"
          >
            <span className="absolute h-0 w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:h-56 group-hover:w-full"></span>
            <span className="relative">Get started</span>
          </Link>
        </div>
      </div>
    </ShineBorder>
  );
};
