import { Settings } from "lucide-react";

import { AddCardBoard } from "@/components/dashboard/add-card-board";

export const BoardHeader = () => {
  return (
    <div className="flex justify-between bg-white mt-4 w-full h-8 py-4 lg:px-12 px-6">
      <div className="flex items-center font-semibold">
        <h1 className="lg:text-3xl text-2xl text-gray-700">Daily Tasks</h1>
      </div>
      <div className="flex items-center gap-4">
        <AddCardBoard />
        <Settings className="text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};
