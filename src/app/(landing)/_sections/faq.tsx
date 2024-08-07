import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateView } from "@/components/animate-view";

const faq = [
  {
    value: "item-1",
    title: "How do I get started with Prodify?",
    description:
      "To get started with Prodify, simply visit our website to sign up for an account. Once registered, you can start organizing your tasks, appointments, goals, and knowledge efficiently using the app's intuitive interface.",
  },
  {
    value: "item-2",
    title: "What are the key features?",
    description:
      "Prodify provides essential tools for personal organization and productivity, including a Kanban board for task management, integrated calendar for appointments and reminders, progress roadmap for long-term goals, and a note-taking feature for quick jotting and easy access.",
  },
  {
    value: "item-3",
    title: "Is there any cost associated with using the app?",
    description:
      "No, Prodify is currently free to use for all users. We aim to provide essential personal planning and productivity tools accessible to everyone.",
  },
  {
    value: "item-4",
    title: "Can I access my data on different devices?",
    description:
      "Yes, you can access your data on different devices seamlessly. Prodify offers synchronization across multiple platforms, allowing you to access your tasks, appointments, goals, and notes from anywhere, at any time.",
  },
  {
    value: "item-5",
    title: "How do I contact technical support in case of issues?",
    description:
      "If you encounter any technical issues or have questions about using Prodify, you can reach out to our technical support team through the app's built-in support feature. Simply navigate to the support section within the app, and our team will assist you promptly.",
  },
  {
    value: "item-6",
    title: "Does the app support multiple languages?",
    description:
      "Yes, Prodify currently supports English, but we're working on adding support for multiple languages soon.",
  },
];

export const FaqSection = () => {
  return (
    <section className="mb-48">
      <div className="mb-12 space-y-4 text-center">
        <AnimateView direction="up">
          <h1 className="text-balance text-center text-4xl font-medium leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Frequently Asked Questions
          </h1>
        </AnimateView>
        <AnimateView direction="up" transition={{ delay: 0.4 }}>
          <p className="pt-4 text-sm tracking-tight text-gray-400 md:text-base">
            Quick answers to questions you may have about Prodify. Can&apos;t
            find <br /> what you&apos;re looking for?{" "}
            <Link className="underline" href={"/"}>
              Contact Us
            </Link>
          </p>
        </AnimateView>
      </div>
      <AnimateView direction="down" transition={{ delay: 0.6 }}>
        <Accordion type="single" collapsible className="mx-auto max-w-4xl">
          {faq.map(({ value, title, description }, index) => (
            <AccordionItem key={index} value={value}>
              <AccordionTrigger className="text-lg">{title}</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimateView>
    </section>
  );
};
