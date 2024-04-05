import { Plus } from "lucide-react";

import { Button } from "../ui/button";

export const AddCardBoard = () => {
  return (
    <Button size="sm" className="flex gap-1 bg-blue-600 rounded-xl">
      <Plus className="w-4" />
      <span className="hidden md:block">Add task</span>
    </Button>
  );
};
