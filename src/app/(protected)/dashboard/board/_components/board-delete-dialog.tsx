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
import { deleteBoard } from "@/app/(protected)/dashboard/board/actions";

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
        className="flex items-center gap-2 cursor-pointer text-red-600 hover:text-red-700"
        asChild
      >
        <p>
          <Trash className="w-4 h-4" absoluteStrokeWidth /> Delete
        </p>
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
