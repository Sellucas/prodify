"use client";
import { toast } from "sonner";
import { useState } from "react";
import { Trash } from "lucide-react";

import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { ICard } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { deleteCard } from "@/app/(protected)/dashboard/board/[slug]/actions";

export const DialogDeleteCard = ({
  card,
  className,
}: {
  card: ICard;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteClick = async () => {
    try {
      const response = await deleteCard(card.card_id);
      if (response.error) {
        console.error("Failed to delete card:", response.error);
      } else {
        setIsOpen(false);
        toast.success("Card deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting the card:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className="flex cursor-pointer items-center gap-1 text-xs text-muted-foreground/75 hover:text-red-600"
        asChild
      >
        <Trash className={cn("size-3", className)} absoluteStrokeWidth />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this card?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button
            type="button"
            variant="destructive"
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
