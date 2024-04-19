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

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="bg-white flex flex-col z-10 gap-5 pt-16 pb-5 px-1 fixed top-0 left-0 h-full border-r-[1px] border-gray-200"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-3">
            <NavigationLink href="/dashboard" name="Overview">
              <LayoutDashboard className="min-w-8" />
            </NavigationLink>
            <NavigationLink href="/dashboard/analytics" name="Analytics">
              <BarChartBig className="min-w-8" />
            </NavigationLink>
            <hr className="mx-2 bg-gray-500 h-[1px]" />
            <NavigationLink href="/dashboard/schedule" name="Schedule">
              <CalendarCheck className="min-w-8" />
            </NavigationLink>
            <NavigationLink href="/dashboard/notes" name="Notes">
              <NotebookPen className="min-w-8" />
            </NavigationLink>
            <NavigationLink href="/dashboard/roadmap" name="Roadmap">
              <Route className="min-w-8" />
            </NavigationLink>
            <hr className="mx-2 bg-gray-500 h-[1px]" />
            <NavigationLink href="/dashboard/board" name="Projects">
              <FolderOpen className="min-w-8" />
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
