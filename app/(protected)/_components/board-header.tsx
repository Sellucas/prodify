import { Settings } from "lucide-react";

import { CardSheet } from "@/app/(protected)/_components/card-sheet";

export const BoardHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white w-full py-6 lg:px-12 px-4">
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
