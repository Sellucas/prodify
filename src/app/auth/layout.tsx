import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute left-8 top-8">
        <Link
          className="flex items-center gap-2 rounded-xl bg-none px-4 py-2 text-sm hover:bg-[#1e1e1e]"
          href={"/"}
        >
          <ChevronLeft className="w-4" /> Back
        </Link>
      </div>
      {children}
      <div className="absolute top-0 -z-10 h-full w-full bg-black">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(59,130,246,0.5)] opacity-50 blur-[80px]"></div>
      </div>
    </div>
  );
};

export default AuthLayout;
