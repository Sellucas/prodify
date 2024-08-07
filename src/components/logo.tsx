import Link from "next/link";
import Image from "next/image";
import { Comfortaa } from "next/font/google";

const font = Comfortaa({ subsets: ["latin"] });

export const Logo = () => {
  return (
    <Link href={"/"} className="flex flex-row items-center gap-2">
      <Image src="/logo.png" width={"32"} height={"32"} alt={"Prodify"} />
      <h1 className={`text-xl font-bold tracking-tight ${font.className}`}>
        Prodify
      </h1>
    </Link>
  );
};
