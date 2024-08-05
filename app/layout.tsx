import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
        <main className="w-full h-full relative flex items-center justify-center">
          {children}
        </main>
        <Toaster richColors />
      </body>
    </html>
  );
}
