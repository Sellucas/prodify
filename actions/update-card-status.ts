"use server";
import { supabaseServer } from "@/utils/supabase/server";

export async function updateCardStatus(
  cardId: string,
  status: "backlog" | "todo" | "doing" | "reviewing" | "done"
) {
  try {
    const supabase = supabaseServer();
    const { data, error } = await supabase
      .from("cards")
      .update({ status })
      .eq("card_id", cardId);

    if (error) {
      throw error;
    }

    return data ?? null;
  } catch (error) {
    throw error;
  }
}
