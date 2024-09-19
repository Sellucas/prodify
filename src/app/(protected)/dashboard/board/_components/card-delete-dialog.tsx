"use client";

import { toast } from "sonner";
import { useState } from "react";

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
import { deleteCard } from "@/app/(protected)/dashboard/board/[slug]/actions";

export const DialogDeleteCard = ({
  card,
  trigger,
  onDeleteSuccess,
}: {
  card: ICard | ICard[];
  trigger: React.ReactNode;
  onDeleteSuccess?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = async () => {
    setIsDeleting(true);
    try {
      if (Array.isArray(card)) {
        for (const singleCard of card) {
          const response = await deleteCard(singleCard.card_id);
          if (response.error) {
            console.error("Failed to delete card:", response.error);
            return;
          }
        }
      } else {
        const response = await deleteCard(card.card_id);
        if (response.error) {
          console.error("Failed to delete card:", response.error);
          return;
        }
      }

      setIsOpen(false);
      onDeleteSuccess && onDeleteSuccess();
      toast.success("Card deleted successfully");
    } catch (error) {
      console.error("Error deleting the card:", error);
      toast.error("Failed to delete card(s)");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="cursor-pointer" asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this card
            {Array.isArray(card) ? "s" : ""}?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button
            type="button"
            variant="destructive"
            onClick={handleDeleteClick}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
