"use server";

import { supabaseServer } from "@/utils/supabase/server";

export async function deleteBoard(boardId: string) {
  try {
    const supabase = supabaseServer();
    const { data, error } = await supabase
      .from("boards")
      .delete()
      .eq("board_id", boardId);

    if (error) {
      console.error("Supabase error:", error);
      return { error: error.message };
    }

    return { data };
  } catch (error: any) {
    return { error: error.message };
  }
}
