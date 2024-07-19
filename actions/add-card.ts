import { TablesInsert } from "@/lib/types/supabase";
import { supabaseClient } from "@/utils/supabase/client";

export async function addCard(cardData: TablesInsert<"cards">) {
  try {
    const supabase = supabaseClient();

    const { data: card, error: insertError } = await supabase
      .from("cards")
      .insert([cardData]);

    if (insertError) {
      throw insertError;
    }

    return { data: card, error: null };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error inserting the card:", error);
      return { data: null, error };
    } else {
      console.error("Unknown error inserting the card:", error);
      return { data: null, error: new Error("Unknown error") };
    }
  }
}
