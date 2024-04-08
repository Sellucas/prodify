import { Settings } from "lucide-react";
import { CardSheet } from "@/components/dashboard/card-sheet";

export const BoardHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white mt-4 w-full h-8 py-4 lg:px-12 px-4">
      <h1 className="font-semibold text-2xl lg:text-3xl text-gray-700">
        Daily Tasks
      </h1>
      <div className="flex items-center gap-4">
        <CardSheet />
        <Settings className="text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};
