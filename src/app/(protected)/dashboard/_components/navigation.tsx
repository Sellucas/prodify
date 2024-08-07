"use client";

import {
  Route,
  FolderOpen,
  BarChartBig,
  NotebookPen,
  CalendarCheck,
  SlidersHorizontal,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

import NavigationLink from "@/app/(protected)/dashboard/board/_components/navigation-link";

const containerVariants = {
  close: {
    width: "2.8rem",
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

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    const state = isOpen ? "open" : "close";
    containerControls.start(state);
    svgControls.start(state);
  }, [isOpen, containerControls, svgControls]);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const navItemsTop = [
    { href: "/dashboard/board", name: "Projects", icon: FolderOpen },
    { href: "/dashboard/analytics", name: "Analytics", icon: BarChartBig },
    { href: "/dashboard/schedule", name: "Schedule", icon: CalendarCheck },
    { href: "/dashboard/notes", name: "Notes", icon: NotebookPen },
    { href: "/dashboard/roadmap", name: "Roadmap", icon: Route },
  ];

  const navItemsBottom = [
    { href: "/dashboard/settings", name: "Settings", icon: SlidersHorizontal },
  ];

  return (
    <motion.nav
      variants={containerVariants}
      animate={containerControls}
      initial="close"
      className="fixed left-0 top-0 z-50 mt-[55px] flex h-full flex-col gap-5 overflow-hidden border-r border-muted bg-background2 px-1.5 pb-16"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mt-2 flex h-full flex-col justify-between">
        <div className="flex flex-col gap-3">
          {navItemsTop.map(({ href, name, icon: Icon }) => (
            <NavigationLink key={href} href={href} name={name} isOpen={isOpen}>
              <Icon className="min-w-5 max-w-5" absoluteStrokeWidth />
            </NavigationLink>
          ))}
        </div>
        <div>
          {navItemsBottom.map(({ href, name, icon: Icon }) => (
            <NavigationLink key={href} href={href} name={name} isOpen={isOpen}>
              <Icon className="min-w-5 max-w-5" absoluteStrokeWidth />
            </NavigationLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
