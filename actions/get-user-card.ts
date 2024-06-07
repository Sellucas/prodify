import { supabaseClient } from "@/utils/supabase/client";

export async function getAllCards(boardId: string) {
  try {
    const supabase = supabaseClient();
    const { data: filteredCards, error } = await supabase
      .from("cards")
      .select("*")
      .eq("board_id", boardId);

    if (error) {
      throw error;
    }

    return filteredCards ?? null;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching cards:", error.message);
      throw error;
    } else {
      console.error("Unknown error fetching cards:", error);
      throw new Error("Unknown error");
    }
  }
}
