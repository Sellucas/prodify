"use client";

import { z } from "zod";
import { useState } from "react";

import { ICard } from "@/types";
import CardForm from "./card-form";
import { CardSchema } from "@/schemas";
import { ManageSheet } from "./manage-sheet";
import { updateCard } from "@/actions/update-card";

type CardUpdateFormProps = {
  card: ICard;
};

const CardUpdateForm = ({ card }: CardUpdateFormProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSubmit = async (values: z.infer<typeof CardSchema>) => {
    try {
      await updateCard(card.card_id, values);
      setIsSheetOpen(false);
    } catch (error) {
      console.error("Error updating the card:", error);
    }
  };

  const handleOpen = () => setIsSheetOpen(true);
  const handleClose = () => setIsSheetOpen(false);

  return (
    <ManageSheet
      title={"Edit the form below to update the card"}
      description={"Update the card details to reflect the changes."}
      isUpdate
      isOpen={isSheetOpen}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      <CardForm
        onSubmit={handleSubmit}
        defaultValues={{
          title: card.title,
          description: card.description,
          status: card.status,
          position: card.position,
        }}
      />
    </ManageSheet>
  );
};

export default CardUpdateForm;
