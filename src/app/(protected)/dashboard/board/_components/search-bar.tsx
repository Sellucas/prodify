import { Search } from "lucide-react";
import { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  return (
    <div className="relative flex h-10 w-full items-center">
      <div className="absolute ml-2 text-gray-300">
        <Search />
      </div>
      <Input
        className="pl-10"
        placeholder="Search boards.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
