"use server";

import { TablesInsert } from "@/lib/types/supabase";
import { supabaseServer } from "@/utils/supabase/server";

export async function addBoard(boardData: TablesInsert<"boards">) {
  try {
    const supabase = supabaseServer();
    const { data, error } = await supabase.from("boards").insert([boardData]);

    if (error) {
      console.error("Supabase error:", error);
      return { error: error.message };
    }

    return { data };
  } catch (error: any) {
    console.error("Catch error:", error);
    return { error: error.message };
  }
}
