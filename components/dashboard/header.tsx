import { Bell } from "lucide-react";
import { FaChartSimple } from "react-icons/fa6";
import Link from "next/link";

import { UserDetails } from "@/components/dashboard/user-details";

export const Header = () => {
  return (
    <div className="flex items-center justify-between z-20 bg-white w-full h-14 py-2 px-6 border-b-2 border-solid border-gray-300 relative">
      <Link href="/dashboard" className="flex flex-row gap-2">
        <FaChartSimple className="h-6 w-6 text-blue-500" />
        <h1 className="hidden md:block text-xl text-gray-700 font-semibold">
          Prodify
        </h1>
      </Link>
      <div className="flex items-center">
        <Bell className="mr-4 cursor-pointer text-gray-700" />
        <UserDetails />
      </div>
    </div>
  );
};
