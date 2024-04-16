"use client";

import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import {
  AlarmClockCheck,
  CalendarClock,
  FileSearch,
  Laptop,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/logo";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const HomePage = () => {
  const benefits = [
    {
      icon: <Laptop size={48} />,
      title: "Work from anywhere",
      description:
        "Keep information accessible. Your notes sync automatically across all your devices.",
    },
    {
      icon: <CalendarClock size={48} />,
      title: "Recall everything",
      description:
        "Enhance your notes with dynamic content for comprehensive management.",
    },
    {
      icon: <FileSearch size={48} />,
      title: "Discover swiftly",
      description:
        "Access what you require, precisely when you need it, with robust and flexible search capabilities.",
    },
    {
      icon: <AlarmClockCheck size={48} />,
      title: "Convert to completion",
      description:
        "Unify your notes, tasks, and schedules to accomplish tasks more efficiently.",
    },
  ];

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

  return (
    <>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
      <div className="max-w-7xl z-10 pt-40 mx-auto">
        <section className="flex flex-col gap-12 items-center mb-48">
          <div className="text-3xl md:text-5xl lg:text-7xl leading-snug">
            <h1 className="flex gap-3">
              Your hub for
              <span className="text-blue-600">
                <Typewriter
                  options={{
                    strings: ["Notes.", "Tasks.", "Schedule.", "Roadmap."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <h1>all integrated in one app</h1>
          </div>
          <p className="text-base md:text-xl text-center text-gray-700">
            Unlock your potential: powerful personal <br /> management at your
            fingertips.
          </p>
          <p>
            <Button className="text-lg font-normal px-16 py-8" asChild>
              <Link href={"/auth/login"}>Try for free</Link>
            </Button>
          </p>
          <p className="text-base md:text-xl mb-6 ">
            Already have an account?
            <Button variant={"ghost"}>
              <Link
                className="text-base md:text-xl underline"
                href={"/auth/login"}
              >
                Log in now
              </Link>
            </Button>
          </p>
          <div className="aspect-video w-full relative drop-shadow-2xl border-solid border-2 border-gray-300">
            <Image
              src={"/prodify-test.png"}
              alt="UI Representation of Dashboard Prodify"
              fill
            />
          </div>
        </section>
        <section className="flex flex-col lg:flex-row lg:gap-2 mb-48">
          {benefits.map(({ icon, title, description }, index) => (
            <CardContainer key={index} className="inter-var py-6">
              <CardBody className="bg-white relative group/card border-gray-300 text-gray-700 space-y-4 w-auto h-auto rounded-xl p-6 border drop-shadow-lg">
                <CardItem
                  translateZ="20"
                  className="text-xl font-bold dark:text-white"
                >
                  {icon}
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold dark:text-white"
                >
                  {title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="max-w-sm mt-2">
                  {description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </section>
        <section className="mb-48">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-700">
              Quick answers to questions you may have about Prodify. Can&apos;t
              find <br /> what you&apos;re looking for?{" "}
              <Button variant={"ghost"} className="underline">
                <Link className="text-lg" href={"/"}>
                  Contact Us
                </Link>
              </Button>
            </p>
          </div>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {faq.map(({ value, title, description }, index) => (
              <AccordionItem key={index} value={value}>
                <AccordionTrigger className="text-xl">{title}</AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700">
                  {description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section className="flex flex-col items-center gap-8 text-center mb-48">
          <Logo />
          <h1 className="text-xl md:text-2xl lg:text-4xl text-blue-600">
            Get started with Prodify now!
          </h1>
          <p className="text-xl text-gray-700">
            Unlock your potential: powerful personal <br /> management at your
            fingertips.
          </p>
          <div className="flex gap-4">
            <Button size={"lg"} className="text-lg font-normal">
              <Link href={"/auth/login"}>Try it now - for free</Link>
            </Button>
            <Button variant={"outline"} size={"lg"} className="text-lg">
              <Link href={"/"}>Contact Us</Link>
            </Button>
          </div>
        </section>
        <footer className="bg-white rounded-lg m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <Logo />
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
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
            <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
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
    </>
  );
};

export default HomePage;
