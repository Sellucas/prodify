"use client";

import {
  Route,
  FolderOpen,
  BarChartBig,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import NavigationLink from "./navigation-link";

export const Navigation = () => {
  const navItemsTop = [
    { href: "/dashboard/board", name: "Projects", icon: FolderOpen },
    { href: "/dashboard/roadmap", name: "Roadmap", icon: Route },
    { href: "/dashboard/analytics", name: "Analytics", icon: BarChartBig },
    { href: "/dashboard/settings", name: "Settings", icon: SlidersHorizontal },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-full flex-col gap-5 overflow-hidden bg-background px-4 pb-16">
      <div className="flex flex-col gap-3">
        <Link href="/dashboard/board" className="mt-4">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
        </Link>
        {navItemsTop.map(({ href, name, icon: Icon }) => (
          <NavigationLink key={href} href={href} name={name}>
            <Icon className="w-5" absoluteStrokeWidth />
          </NavigationLink>
        ))}
      </div>
    </nav>
  );
};
