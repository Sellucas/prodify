"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";

import { CardSchema } from "@/schemas";
import { addCard } from "@/actions/add-card";
import { useUser } from "@/context/user-context";
import CardForm from "@/app/(protected)/dashboard/_components/card-form";
import { ManageSheet } from "@/app/(protected)/dashboard/_components/manage-sheet";

export const CardCreateForm = ({ boardId }: { boardId: string }) => {
  const { user } = useUser();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSubmit = async (values: z.infer<typeof CardSchema>) => {
    try {
      if (!user) {
        throw new Error("User not found");
      }

      const { ...cardData } = values;

      const cardPayload = {
        ...cardData,
        board_id: boardId,
        user_id: user.user_id,
      };

      await addCard(cardPayload);
      setIsSheetOpen(false);
      toast.success("Card created successfully");
    } catch (error) {
      console.error("Error inserting the card:", error);
    }
  };

  const handleOpen = () => setIsSheetOpen(true);
  const handleClose = () => setIsSheetOpen(false);

  return (
    <ManageSheet
      label={"New task"}
      title={"Add new task"}
      description={"Create a new task to add to the board."}
      isUpdate={false}
      isOpen={isSheetOpen}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      <CardForm onSubmit={handleSubmit} />
    </ManageSheet>
  );
};
