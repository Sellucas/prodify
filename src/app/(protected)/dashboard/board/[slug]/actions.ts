"use server";

import { ICard } from "@/types";
import { supabaseServer } from "@/utils/supabase/server";
import { TablesInsert, TablesUpdate } from "@/lib/types/supabase";

export async function addCard(cardData: TablesInsert<"cards">) {
  try {
    const supabase = supabaseServer();

    const { data, error } = await supabase.from("cards").insert([cardData]);

    if (error) {
      console.error("Supabase error:", error);
      return { error: error.message };
    }

    return { data };
  } catch (error: any) {
    return { error: error.message };
  }
}

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

export async function updateCardPositions(
  cards: { card_id: string; position: number }[],
) {
  try {
    const supabase = supabaseServer();

    for (const card of cards) {
      const { error } = await supabase
        .from("cards")
        .update({ position: card.position })
        .eq("card_id", card.card_id);

      if (error) {
        throw error;
      }
    }

    return cards;
  } catch (error) {
    throw error;
  }
}

export async function updateCardStatus(
  cardId: string,
  status: "backlog" | "todo" | "doing" | "reviewing" | "done",
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

export async function updateCard(
  cardId: string,
  cardData: TablesUpdate<"cards">,
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
