import { supabaseClient } from "@/utils/supabase/client";

export async function deleteCard(cardId: string) {
  try {
    const supabase = supabaseClient();
    const { data, error: deleteError } = await supabase
      .from("cards")
      .delete()
      .eq("card_id", cardId);

    if (deleteError) {
      throw deleteError;
    }

    return { data, error: null };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error deleting the card:", error);
      return { data: null, error };
    } else {
      console.error("Unknown error deleting the card:", error);
      return { data: null, error: new Error("Unknown error") };
    }
  }
}
