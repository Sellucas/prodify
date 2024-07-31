"use server";

import { TablesInsert } from "@/lib/types/supabase";
import { supabaseServer } from "@/utils/supabase/server";

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
