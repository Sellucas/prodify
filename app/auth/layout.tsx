import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <div className="absolute top-8 left-8">
        <Link
          className=" text-sm flex items-center gap-2 py-2 px-4 bg-none hover:bg-[#1e1e1e] rounded-xl"
          href={"/"}
        >
          <ChevronLeft className="w-4" /> Back
        </Link>
      </div>
      {children}
      <div className="absolute top-0 h-full w-full bg-black -z-10">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(59,130,246,0.5)] opacity-50 blur-[80px]"></div>
      </div>
    </div>
  );
};

export default AuthLayout;
