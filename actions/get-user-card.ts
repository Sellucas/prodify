import { supabaseClient } from "@/utils/supabase/client";
import { ICard } from "@/types";

export async function getAllCards(boardId: string): Promise<ICard[]> {
  try {
    const supabase = supabaseClient();
    const { data: filteredCards, error } = await supabase
      .from("cards")
      .select("*")
      .eq("board_id", boardId);

    if (error) {
      throw error;
    }

    return (filteredCards ?? []).map((card) => ({
      ...card,
      priority: card.priority as "high" | "medium" | "low",
      tag: card.tag as
        | "code"
        | "design"
        | "code review"
        | "research"
        | "bug"
        | "enchantment"
        | "documentation"
        | "testing"
        | "discussion"
        | "implementation"
        | "feedback"
        | "refactoring",
    }));
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
