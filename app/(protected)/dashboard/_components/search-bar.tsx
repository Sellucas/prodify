import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative flex items-center w-full h-10 rounded-lg bg-white border-solid">
      <div className="ml-2 absolute text-gray-300">
        <Search />
      </div>

      <Input className="pl-10" placeholder="Search boards.." />
    </div>
  );
};
