import { Plus } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const CardForm = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button size="sm" className="rounded-xl bg-blue-600" asChild>
          <span className="flex gap-1">
            <Plus className="w-4" />
            <span className="hidden md:block">Add task</span>
          </span>
        </Button>   
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
