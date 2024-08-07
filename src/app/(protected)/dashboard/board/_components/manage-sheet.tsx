import { ReactNode } from "react";
import { ExternalLink, Plus } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface ManageSheetProps {
  children: ReactNode;
  title?: String;
  description?: String;
  label?: String;
  isUpdate?: boolean;
  isOpen?: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ManageSheet = ({
  children,
  title,
  description,
  label,
  isUpdate,
  isOpen,
  onOpen,
  onClose,
}: ManageSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={(open) => (open ? onOpen() : onClose())}>
      <SheetTrigger>
        {isUpdate ? (
          <ExternalLink className="w-4 hover:text-white" absoluteStrokeWidth />
        ) : (
          <Button
            size="sm"
            className="rounded-xl h-10 text-white bg-blue-500 font-semibold relative overflow-hidden px-5 py-2.5 transition-all duration-300 hover:bg-blue-600 hover:ring-2 hover:ring-blue-500 hover:ring-offset-2"
            asChild
          >
            <span className="flex gap-1 relative">
              <Plus className="w-4" strokeWidth={3} />
              <span className="hidden md:block">{label}</span>
            </span>
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="mb-4 text-left">
          <SheetTitle className="text-2xl">{title}</SheetTitle>
          <SheetDescription className="text-sm text-muted-foreground">
            {description}
          </SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
