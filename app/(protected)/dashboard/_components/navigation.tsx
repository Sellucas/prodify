"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import {
  BarChartBig,
  CalendarCheck,
  FolderOpen,
  LayoutDashboard,
  NotebookPen,
  Route,
  SlidersHorizontal,
} from "lucide-react";

import NavigationLink from "@/app/(protected)/dashboard/_components/navigation-link";

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

const Navigation = () => {
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
      className="bg-background2 flex flex-col z-50 gap-5 mt-[55px] pb-16 px-1 fixed top-0 left-0 h-full border-r border-muted"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col justify-between h-full mt-2">
        <div className="flex flex-col gap-3">
          {navItemsTop.map(({ href, name, icon: Icon }) => (
            <NavigationLink key={href} href={href} name={name}>
              <Icon className="min-w-6" absoluteStrokeWidth />
            </NavigationLink>
          ))}
        </div>
        <div>
          {navItemsBottom.map(({ href, name, icon: Icon }) => (
            <NavigationLink key={href} href={href} name={name}>
              <Icon className="min-w-6" absoluteStrokeWidth />
            </NavigationLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
