import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { UserProvider } from "@/context/user-context";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prodify - Personal Planner",
  description:
    "Maximize productivity with Prodify, designed to streamline your personal organization and task management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <UserProvider>
          <Navbar />
          <div className="w-full h-full relative flex items-center justify-center bg-black">
            {children}
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
