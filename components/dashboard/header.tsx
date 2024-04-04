import { SearchBar } from "@/components/dashboard/search-bar";
import { UserDetails } from "@/components/dashboard/user-details";
import { Bell } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-center w-full h-14 py-2 px-20 border-b-2 border-solid border-gray-300 relative">
      <SearchBar />
      <div className="absolute inset-y-0 right-0 mr-9 flex items-center">
        <Bell className="mr-4 cursor-pointer text-gray-700" />
        <UserDetails />
      </div>
    </div>
  );
};
