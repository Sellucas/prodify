import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border-gray-300 border-solid border-2">
      <div className="grid place-items-center h-full w-12 text-gray-300">
        <Search />
      </div>

      <input
        className="h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search projects.."
      />
    </div>
  );
};
