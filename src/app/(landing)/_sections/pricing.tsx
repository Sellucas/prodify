import { BadgeCheck } from "lucide-react";

import { Pricing } from "@/components/pricing";
import { AnimateView } from "@/components/animate-view";

const pricingPlans = [
  {
    title: "Starter",
    price: "0.00",
    features: [
      { text: "2 Projects", available: true },
      { text: "Unlimited Tasks", available: true },
      { text: "Roadmap feature", available: false },
      { text: "Access to all features", available: false },
      { text: "Full support", available: false },
    ],
  },
  {
    title: "Premium",
    price: "4.99",
    features: [
      { text: "Many Projects", available: true },
      { text: "Unlimited Tasks", available: true },
      { text: "Roadmap feature", available: true },
      { text: "Access to all features", available: true },
      { text: "Full support", available: false },
    ],
    className: "scale-110",
  },
  {
    title: "Ultimate",
    price: "19.99",
    features: [
      { text: "Many Projects", available: true },
      { text: "Unlimited Tasks", available: true },
      { text: "Roadmap feature", available: true },
      { text: "Access to all features", available: true },
      { text: "Full support", available: true },
    ],
  },
];

export const PricingSection = () => (
  <section className="container mb-48 flex flex-col items-center justify-center lg:gap-12">
    <div className="space-y-2 text-center">
      <AnimateView direction="up">
        <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-sm font-bold uppercase tracking-wider text-transparent">
          Pricing
        </span>
      </AnimateView>
      <AnimateView direction="up" transition={{ delay: 0.4 }}>
        <h2 className="text-balance text-center text-4xl font-medium leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          It&apos;s easy to get started
        </h2>
      </AnimateView>
      <AnimateView direction="up" transition={{ delay: 0.6 }}>
        <p className="pt-4 text-sm tracking-tight text-gray-400 md:text-base">
          Choose a plan tailored to your needs
        </p>
      </AnimateView>
    </div>
    <AnimateView direction="down" transition={{ delay: 0.8 }}>
      <div className="mt-12 flex flex-col gap-16 xl:flex-row">
        {pricingPlans.map((plan, index) => (
          <Pricing
            key={index}
            title={plan.title}
            price={plan.price}
            className={plan.className}
          >
            {plan.features.map((feature, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-2 ${
                  !feature.available && "text-gray-400"
                }`}
              >
                <BadgeCheck
                  className={`h-4 w-4 ${
                    feature.available ? "text-blue-400" : ""
                  }`}
                />
                <span>{feature.text}</span>
              </li>
            ))}
          </Pricing>
        ))}
      </div>
    </AnimateView>
  </section>
);
