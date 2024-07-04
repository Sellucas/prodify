"use client";

import { useUser } from "@/context/user-context";
import { addCard } from "@/actions/add-card";
import { z } from "zod";
import { CardSchema } from "@/schemas";
import CardForm from "./card-form";

export const CardCreateForm = ({ boardId }: { boardId: string }) => {
  const { user, loading } = useUser();

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
    } catch (error) {
      console.error("Error inserting the card:", error);
    }
  };

  return <CardForm onSubmit={handleSubmit} />;
};
