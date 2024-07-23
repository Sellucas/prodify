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
import { Button } from "@/components/ui/button";
import { deleteBoard } from "@/actions/delete-board";

export const DialogDeleteBoard = ({ boardId }: { boardId: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteClick = async () => {
    try {
      const response = await deleteBoard(boardId);
      if (response.error) {
        console.error("Failed to delete board:", response.error);
      } else {
        setIsOpen(false);
        toast.success("Board deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting the board:", error);
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
            Are you sure you want to delete this board?
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
