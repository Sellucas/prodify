import { supabaseClient } from "@/utils/supabase/client";

export async function updateCardStatus(
  cardId: string,
  status: "backlog" | "todo" | "doing" | "reviewing" | "done"
) {
  try {
    const supabase = supabaseClient();
    const { data, error } = await supabase
      .from("cards")
      .update({ status })
      .eq("card_id", cardId);

    if (error) {
      throw error;
    }

    return data ?? null;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error updating card status:", error.message);
      throw error;
    } else {
      console.error("Unknown error updating card status:", error);
      throw new Error("Unknown error");
    }
  }
}
