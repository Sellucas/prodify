"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BadgeCheck,
  Brush,
  CalendarClock,
  FileSearch,
  Laptop,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/logo";
import RadialGradient from "@/components/ui/radial-gradient";
import { BorderBeam } from "@/components/ui/border-beam";
import LinearGradient from "@/components/ui/linear-gradient";
import Particles from "@/components/ui/particles";
import { Cta } from "@/components/cta";
import { Pricing } from "@/components/pricing";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const HomePage = () => {
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

  return (
    <div className="bg-black grow cursor-default">
      <div className="z-10 pt-40">
        <section className="relative">
          <div className="container flex flex-col gap-32 items-center mb-48 text-center">
            <div className="relative">
              <span className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#272726] bg-black px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-3xl">
                <span className="bg-gradient-to-t from-[#fff] to-gray-800 bg-clip-text text-transparent">
                  Start your free account today
                </span>
              </span>
              <h1 className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl">
                Simplify tasks, manage time for more efficient results.
              </h1>
              <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl">
                Organize your tasks, ensure completion of activities, and
                maintain <br />
                oversight to ensure your projects stay on track.
              </p>
              <Cta />
            </div>
            <div className="relative z-10 aspect-video w-11/12 rounded-xl border-2 border-[#1e1e1e]">
              <Image
                src={"/holder.jpg"}
                alt="UI Representation of Dashboard Prodify"
                fill
                className="rounded-xl"
              />
              <BorderBeam />
            </div>
          </div>
          <RadialGradient />
          <LinearGradient className="absolute bottom-0 left-0 z-10" />
          <Particles className="absolute top-0 w-full" />
        </section>
        <section className="container flex flex-col justify-center items-center lg:gap-12 mb-48">
          <div className="text-center space-y-2">
            <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text  text-transparent font-bold uppercase text-sm tracking-wider">
              Benefit Features
            </span>
            <h2 className="text-center text-4xl font-medium leading-none tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Powerful personal planner to boost your conversion rate.
            </h2>
          </div>
          <Cta />
          <div className="container">
            <HoverEffect items={benefits} />
          </div>
        </section>
        <section className="container flex flex-col justify-center items-center lg:gap-12 mb-48">
          <div className="text-center space-y-2">
            <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text  text-transparent font-bold uppercase text-sm tracking-wider">
              Pricing
            </span>
            <h2 className="text-center text-4xl font-medium leading-none tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              it&apos;s easy to Get started
            </h2>
            <p className="text-sm tracking-tight text-gray-400 md:text-base pt-4">
              Choose a plan tailored to your needs
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-16 mt-12">
            <Pricing title="Starter" price="0.00">
              <li className="flex gap-2 items-center">
                <BadgeCheck className="text-blue-400 w-4 h-4" />
                <span>2 Projects</span>
              </li>
              <li className="flex gap-2 items-center">
                <BadgeCheck className="text-blue-400 w-4 h-4" />
                <span>Unlimited Tasks</span>
              </li>
              <li className="flex gap-2 items-center text-gray-400">
                <BadgeCheck className="w-4 h-4" />
                <span>Roadmap feature</span>
              </li>
              <li className="flex gap-2 items-center text-gray-400">
                <BadgeCheck className="w-4 h-4" />
                <span>Access to all features</span>
              </li>
              <li className="flex gap-2 items-center text-gray-400">
                <BadgeCheck className="w-4 h-4" />
                <span>Full support</span>
              </li>
            </Pricing>
            <Pricing className="scale-110" title="Premium" price="7.99">
              <li className="flex gap-2 items-center">
                <BadgeCheck className="text-blue-400 w-4 h-4" />
                <span>Many Projects</span>
              </li>
              <li className="flex gap-2 items-center">
                <BadgeCheck className="text-blue-400 w-4 h-4" />
                <span>Unlimited Tasks</span>
              </li>
              <li className="flex gap-2 items-center">
                <BadgeCheck className="text-blue-400 w-4 h-4" />
                <span>Roadmap feature</span>
              </li>
              <li className="flex gap-2 items-center">
                <BadgeCheck className="text-blue-400 w-4 h-4" />
                <span>Access to all features</span>
              </li>
              <li className="flex gap-2 items-center text-gray-400">
                <BadgeCheck className="w-4 h-4" />
                <span>Full support</span>
              </li>
            </Pricing>
            <Pricing title="Ultimate" price="49.99">
              <li className="flex gap-2 items-center">
                <BadgeCheck className="text-blue-400 w-4 h-4" />
                <span>Many Projects</span>
              </li>
              <li className="flex gap-2 items-center">
                <BadgeCheck className="text-blue-400 w-4 h-4" />
                <span>Unlimited Tasks</span>
              </li>
              <li className="flex gap-2 items-center">
                <BadgeCheck className="text-blue-400 w-4 h-4" />
                <span>Roadmap feature</span>
              </li>
              <li className="flex gap-2 items-center">
                <BadgeCheck className="text-blue-400 w-4 h-4" />
                <span>Access to all features</span>
              </li>
              <li className="flex gap-2 items-center">
                <BadgeCheck className="text-blue-400 w-4 h-4" />
                <span>Full support</span>
              </li>
            </Pricing>
          </div>
        </section>
        <section className="mb-48">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-center text-4xl font-medium leading-none tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Frequently Asked Questions
            </h1>
            <p className="text-sm tracking-tight text-gray-400 md:text-base pt-4">
              Quick answers to questions you may have about Prodify. Can&apos;t
              find <br /> what you&apos;re looking for?{" "}
              <Link className="underline" href={"/"}>
                Contact Us
              </Link>
            </p>
          </div>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {faq.map(({ value, title, description }, index) => (
              <AccordionItem key={index} value={value}>
                <AccordionTrigger className="text-lg">{title}</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section className="relative">
          <div className="flex flex-col items-center gap-8 text-center mb-48">
            <Image
              src={"/logo.png"}
              alt="Prodify Logo"
              width={96}
              height={96}
              className="z-10"
            />
            <h1 className="text-center text-4xl font-medium leading-none tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl z-10">
              Get started with <br /> Prodify now.
            </h1>
            <Link
              className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-xl bg-[#111111] px-4 text-neutral-50 text-sm z-10"
              href="/auth/login"
            >
              <span className="absolute h-0 w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:h-56 group-hover:w-32"></span>
              <span className="relative">Try for free</span>
            </Link>
          </div>
          <div className="absolute top-0 h-full w-full bg-black">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(59,130,246,0.5)] opacity-50 blur-[80px]"></div>
          </div>
        </section>
        <footer className="rounded-lg m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <Logo />
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 z-10">
                <li>
                  <Link href="#" className="hover:underline me-4 md:me-6">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline me-4 md:me-6">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline me-4 md:me-6">
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="my-6 sm:mx-auto lg:my-8 bg-gradient-to-r from-transparent via-gray-400 to-transparent border-0 h-0.5" />
            <span className="block text-sm text-gray-500 sm:text-center">
              © 2024{" "}
              <Link href="/" className="hover:underline">
                Prodify™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
