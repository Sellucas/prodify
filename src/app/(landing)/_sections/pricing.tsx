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
  <section className="container flex flex-col justify-center items-center lg:gap-12 mb-48">
    <div className="text-center space-y-2">
      <AnimateView direction="up">
        <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent font-bold uppercase text-sm tracking-wider">
          Pricing
        </span>
      </AnimateView>
      <AnimateView direction="up" transition={{ delay: 0.4 }}>
        <h2 className="text-center text-4xl font-medium leading-none tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          It&apos;s easy to get started
        </h2>
      </AnimateView>
      <AnimateView direction="up" transition={{ delay: 0.6 }}>
        <p className="text-sm tracking-tight text-gray-400 md:text-base pt-4">
          Choose a plan tailored to your needs
        </p>
      </AnimateView>
    </div>
    <AnimateView direction="down" transition={{ delay: 0.8 }}>
      <div className="flex flex-col xl:flex-row gap-16 mt-12">
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
                className={`flex gap-2 items-center ${
                  !feature.available && "text-gray-400"
                }`}
              >
                <BadgeCheck
                  className={`w-4 h-4 ${
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
