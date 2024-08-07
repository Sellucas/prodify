import Link from "next/link";

import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className="rounded-lg m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 z-10">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
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
  );
};
