import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 bg-gray-100"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="text-gray-700 w-5" />
      </div>
    </div>
  );
};
