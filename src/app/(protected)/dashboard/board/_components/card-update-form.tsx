import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";

import { ICard } from "@/types";
import { CardSchema } from "@/schemas";
import { updateCard } from "@/app/(protected)/dashboard/board/[slug]/actions";
import CardForm from "@/app/(protected)/dashboard/board/_components/card-form";
import { ManageSheet } from "@/app/(protected)/dashboard/board/_components/manage-sheet";

type CardUpdateFormProps = {
  card: ICard;
};

const CardUpdateForm = ({ card }: CardUpdateFormProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSubmit = async (values: z.infer<typeof CardSchema>) => {
    try {
      await updateCard(card.card_id, values);
      setIsSheetOpen(false);
      toast.success("Card updated successfully");
    } catch (error) {
      console.error("Error updating the card:", error);
      toast.error("Error updating the card");
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
          tag: card.tag,
          priority: card.priority,
        }}
      />
    </ManageSheet>
  );
};

export default CardUpdateForm;
