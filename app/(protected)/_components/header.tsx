import { Bell } from "lucide-react";

import { UserDetails } from "@/components/user-details";
import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <div className="flex items-center justify-between z-20 bg-white w-full h-14 py-2 px-6 border-b-2 border-solid border-gray-300 relative">
      <Logo />
      <div className="flex items-center">
        <Bell className="mr-4 cursor-pointer text-gray-700" />
        <UserDetails />
      </div>
    </div>
  );
};
