import { supabaseClient } from "@/utils/supabase/client";

export async function fetchCardsWithTags(boardId: string) {
  try {
    const supabase = supabaseClient();
    const { data, error } = await supabase
      .from("cards")
      .select(
        `
        *,
        card_tags (
          tag_id,
          name:tags(name)
        )
      `
      )
      .eq("board_id", boardId);

    if (error) {
      throw error;
    }

    return data ?? [];
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
