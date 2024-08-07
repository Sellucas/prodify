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
    <div className="relative flex items-center w-full h-10">
      <div className="ml-2 absolute text-gray-300">
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
