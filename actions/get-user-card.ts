"use server";

import { ICard } from "@/types";
import { supabaseServer } from "@/utils/supabase/server";

export async function getAllCards(boardId: string): Promise<ICard[]> {
  try {
    const supabase = supabaseServer();
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
    throw error;
  }
}
