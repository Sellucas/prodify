import { ICard } from "@/types";
import { z } from "zod";
import { CardSchema } from "@/schemas";
import { updateCard } from "@/actions/update-card";
import CardForm from "./card-form";

type CardUpdateFormProps = {
  card: ICard;
};

const CardUpdateForm = ({ card }: CardUpdateFormProps) => {
  const handleSubmit = async (values: z.infer<typeof CardSchema>) => {
    try {
      await updateCard(card.card_id, values);
    } catch (error) {
      console.error("Error updating the card:", error);
    }
  };

  return (
    <CardForm
      onSubmit={handleSubmit}
      defaultValues={{
        title: card.title,
        description: card.description,
        status: card.status,
        position: card.position,
      }}
    />
  );
};

export default CardUpdateForm;
