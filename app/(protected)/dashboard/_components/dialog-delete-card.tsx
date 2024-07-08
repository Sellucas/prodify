"use client";
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
import { deleteCard } from "@/actions/delete-card";

export const DialogDeleteCard = ({ card }: { card: ICard }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteClick = async () => {
    try {
      const response = await deleteCard(card.card_id);
      if (response.error) {
        console.error("Failed to delete card:", response.error);
      } else {
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Error deleting the card:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className="flex items-center gap-1 text-xs text-muted-foreground/75 cursor-pointer hover:text-red-600"
        asChild
      >
        <Trash className="w-3" absoluteStrokeWidth />
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
