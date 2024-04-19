import { ReactNode } from "react";
import { Plus } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface CardSheetProps {
  children: ReactNode;
  title: String;
  label: String;
}

export const CardSheet = ({ children, title, label }: CardSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button size="sm" className="rounded-xl h-10 bg-blue-600" asChild>
          <span className="flex gap-1">
            <Plus className="w-4" />
            <span className="hidden md:block">{label}</span>
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="mb-4 text-left">
          <SheetTitle className="text-2xl">{title}</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
