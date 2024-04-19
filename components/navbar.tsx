"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { Logo } from "./logo";
import { Button } from "./ui/button";
import { UserDetails } from "./user-details";
import useCurrentUser from "@/hooks/use-current-user";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const user = useCurrentUser();
  const pathname = usePathname();

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Why Prodify" },
    { id: 2, text: "How it works" },
    { id: 3, text: "Pricing" },
  ];

  return (
    <div className="fixed top-0 py-2 h-12 z-20 flex justify-between items-center w-full px-4 bg-white border-b-[1px] border-gray-200">
      <Logo />

      {user && pathname !== "/auth/login" && pathname !== "/" && (
        <div className="flex items-center">
          <UserDetails />
        </div>
      )}

      {pathname === "/" && (
        <>
          <nav className="hidden md:flex justify-between w-full ml-16">
            <div className="flex gap-4 items-center tracking-tight">
              {navItems.map((item) => (
                <Button key={item.id} variant={"link"} size={"sm"} asChild>
                  <Link href="/">{item.text}</Link>
                </Button>
              ))}
            </div>
            <div className="flex gap-4 items-center tracking-tight">
              <Button variant={"link"} size={"sm"} asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button className="rounded-full px-4" size={"sm"} asChild>
                <Link href="/auth/login">Try for free</Link>
              </Button>
            </div>
          </nav>

          <div onClick={handleNav} className="block md:hidden">
            {nav ? <X /> : <Menu />}
          </div>

          <nav
            className={`fixed md:hidden left-0 top-0 w-[60%] flex flex-col justify-between h-screen py-2 border-r border-r-gray-700 bg-white ease-in-out duration-500 ${
              nav ? "" : "left-[-100%]"
            }`}
          >
            <div className="flex flex-col items-start gap-6 tracking-tight">
              {navItems.map((item) => (
                <Button
                  className="text-xl"
                  key={item.id}
                  variant={"link"}
                  size={"sm"}
                  asChild
                >
                  <Link href="/">{item.text}</Link>
                </Button>
              ))}
            </div>
            <div className="flex gap-4 items-center tracking-tight">
              <Button variant={"link"} size={"sm"} asChild>
                <Link className="text-xl" href="/auth/login">
                  Login
                </Link>
              </Button>
              <Button className="rounded-full px-4" size={"sm"} asChild>
                <Link className="text-xl" href="/auth/login">
                  Try for free
                </Link>
              </Button>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};
