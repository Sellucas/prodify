"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";

import CardForm from "./card-form";
import { CardSchema } from "@/schemas";
import { addCard } from "@/actions/add-card";
import { ManageSheet } from "./manage-sheet";
import { useUser } from "@/context/user-context";

export const CardCreateForm = ({ boardId }: { boardId: string }) => {
  const { user, loading } = useUser();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSubmit = async (values: z.infer<typeof CardSchema>) => {
    try {
      if (!user) {
        throw new Error("User not found");
      }

      const cardData = {
        ...values,
        board_id: boardId,
        user_id: user.user_id,
      };

      await addCard(cardData);
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
      label={"New card"}
      title={"Add new card"}
      description={"Create a new card to add to the board."}
      isUpdate={false}
      isOpen={isSheetOpen}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      <CardForm onSubmit={handleSubmit} />
    </ManageSheet>
  );
};
