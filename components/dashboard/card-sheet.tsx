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
import { CardForm } from "./card-form";

export const CardSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button size="sm" className="rounded-xl bg-blue-600" asChild>
          <span className="flex gap-1">
            <Plus className="w-4" />
            <span className="hidden md:block">Add card</span>
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-2xl">Add a new card</SheetTitle>
        </SheetHeader>
        <CardForm />
      </SheetContent>
    </Sheet>
  );
};
