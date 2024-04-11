import Link from "next/link";
import { FaChartSimple } from "react-icons/fa6";
import { Comfortaa } from "next/font/google";

const font = Comfortaa({ subsets: ["latin"] });

export const Logo = () => {
  return (
    <Link href={"/"} className="flex flex-row items-center gap-2">
      <FaChartSimple className="h-6 w-6 text-blue-500" />
      <h1 className={`text-2xl font-bold tracking-tight ${font.className}`}>
        Prodify
      </h1>
    </Link>
  );
};
