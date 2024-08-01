import { supabaseClient } from "@/utils/supabase/client";

export async function updateCardPositions(
  cards: { card_id: string; position: number }[]
) {
  try {
    const supabase = supabaseClient();

    for (const card of cards) {
      const { error } = await supabase
        .from("cards")
        .update({ position: card.position })
        .eq("card_id", card.card_id);

      if (error) {
        throw error;
      }
    }

    return cards;
  } catch (error) {
    throw error;
  }
}
