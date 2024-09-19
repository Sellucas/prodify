"use server";

import { supabaseServer } from "@/supabase/server";
import { TablesInsert, TablesUpdate } from "@/supabase/types/supabase";

export async function addCard(cardData: TablesInsert<"cards">) {
  try {
    const supabase = supabaseServer();
    const { data, error } = await supabase.from("cards").insert([cardData]);

    if (error) throw new Error(error.message);

    return { data };
  } catch (error: any) {
    console.error("Error adding card:", error.message);
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

    if (error) throw new Error(error.message);

    return { data };
  } catch (error: any) {
    console.error("Error deleting card:", error.message);
    return { error: error.message };
  }
}

export async function updateCardPositions(
  cards: { card_id: string; position: number }[],
) {
  try {
    const supabase = supabaseServer();
    const updates = cards.map(async (card) => {
      const { error } = await supabase
        .from("cards")
        .update({ position: card.position })
        .eq("card_id", card.card_id);

      if (error) throw new Error(error.message);
    });

    await Promise.all(updates);
    return { data: cards };
  } catch (error: any) {
    console.error("Error updating card positions:", error.message);
    return { error: error.message };
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

    if (error) throw new Error(error.message);

    return { data };
  } catch (error: any) {
    console.error("Error updating card status:", error.message);
    return { error: error.message };
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

    if (error) throw new Error(error.message);

    return { data };
  } catch (error: any) {
    console.error("Error updating card:", error.message);
    return { error: error.message };
  }
}
