"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";

import NavigationLink from "@/app/(protected)/_components/navigation-link";
import {
  BarChartBig,
  CalendarCheck,
  FolderOpen,
  LayoutDashboard,
  NotebookPen,
  Route,
  SlidersHorizontal,
} from "lucide-react";

const containerVariants = {
  close: {
    width: "3.2rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "12rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [containerControls, isOpen, svgControls]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="bg-white flex flex-col z-10 gap-5 pt-16 pb-5 px-1 fixed top-0 left-0 h-full drop-shadow-md"
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <div className="w-10 h-10 rounded-full" />
          <button
            className="p-1 rounded-full flex"
            onClick={() => handleOpenClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 stroke-gray-700"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-3">
            <NavigationLink href="/dashboard" name="Overview">
              <LayoutDashboard className="min-w-8" />
            </NavigationLink>
            <NavigationLink href="/dashboard/schedule" name="Schedule">
              <CalendarCheck className="min-w-8" />
            </NavigationLink>
            <NavigationLink href="/dashboard/notes" name="Notes">
              <NotebookPen className="min-w-8" />
            </NavigationLink>
            <NavigationLink href="/dashboard/roadmap" name="Roadmap">
              <Route className="min-w-8" />
            </NavigationLink>
            <NavigationLink href="/dashboard/analytics" name="Analytics">
              <BarChartBig className="min-w-8" />
            </NavigationLink>
          </div>
          <div className="flex flex-col gap-3">
            <NavigationLink href="/dashboard/board/test" name="Work">
              <FolderOpen className="min-w-8" fill="#16a34a" />
            </NavigationLink>
            <NavigationLink href="/dashboard/board" name="Plans">
              <FolderOpen className="min-w-8" fill="#2563eb" />
            </NavigationLink>
            <NavigationLink href="/dashboard/board" name="Everyday">
              <FolderOpen className="min-w-8" fill="#d97706" />
            </NavigationLink>
            <NavigationLink href="/dashboard/board" name="Studies">
              <FolderOpen className="min-w-8" fill="#dc2626" />
            </NavigationLink>
          </div>
          <div>
            <NavigationLink href="/dashboard/settings" name="Settings">
              <SlidersHorizontal className="min-w-8" />
            </NavigationLink>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
