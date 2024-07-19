import { supabaseClient } from "@/utils/supabase/client";
import { TablesUpdate } from "@/lib/types/supabase";

export async function updateCard(
  cardId: string,
  cardData: TablesUpdate<"cards">
) {
  try {
    const supabase = supabaseClient();
    const { data, error } = await supabase
      .from("cards")
      .update(cardData)
      .eq("card_id", cardId);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error updating the card:", error);
    throw error;
  }
}