"use client";

import { appConfig } from "@/app-config";
import { Navbar } from "@/components/navbar";

import { Footer } from "@/app/(landing)/_sections/footer";
import { FaqSection } from "@/app/(landing)/_sections/faq";
import { HeroSection } from "@/app/(landing)/_sections/hero";
import { PricingSection } from "@/app/(landing)/_sections/pricing";
import { BenefitsSection } from "@/app/(landing)/_sections/benefits";
import { GetStartedSection } from "@/app/(landing)/_sections/get-started";

const HomePage = () => {
  if (appConfig.mode === "maintenance") {
    return (
      <div>
        <h1>Under Maintenance</h1>
      </div>
    );
  }
  return (
    <div className="bg-black cursor-default w-full">
      <Navbar />
      <div className="pt-40">
        <HeroSection />
        <BenefitsSection />
        <PricingSection />
        <FaqSection />
        <GetStartedSection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
