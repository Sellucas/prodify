"use server";

import { TablesUpdate } from "@/lib/types/supabase";
import { supabaseServer } from "@/utils/supabase/server";

export async function updateCard(
  cardId: string,
  cardData: TablesUpdate<"cards">
) {
  try {
    const supabase = supabaseServer();
    const { data, error } = await supabase
      .from("cards")
      .update(cardData)
      .eq("card_id", cardId);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    throw error;
  }
}
