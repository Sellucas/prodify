"use server";

import { supabaseServer } from "@/utils/supabase/server";

export async function deleteCard(cardId: string) {
  try {
    const supabase = supabaseServer();
    const { data, error } = await supabase
      .from("cards")
      .delete()
      .eq("card_id", cardId);

    if (error) {
      console.error("Supabase error:", error);
      return { error: error.message };
    }

    return { data };
  } catch (error: any) {
    return { error: error.message };
  }
}
