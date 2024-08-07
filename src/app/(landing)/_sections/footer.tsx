import Link from "next/link";

import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className="m-4 rounded-lg">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo />
          <ul className="z-10 mb-6 flex flex-wrap items-center text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <Link href="/" className="me-4 hover:underline md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="me-4 hover:underline md:me-6">
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
        <hr className="my-6 h-0.5 border-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent sm:mx-auto lg:my-8" />
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
