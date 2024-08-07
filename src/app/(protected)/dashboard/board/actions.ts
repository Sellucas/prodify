"use server";

import { TablesInsert } from "@/lib/types/supabase";
import { supabaseServer } from "@/utils/supabase/server";

export async function getAllBoards(userId: string) {
  const supabase = supabaseServer();
  const { data: userBoards, error } = await supabase
    .from("boards")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    throw new Error(`Error fetching boards: ${error.message}`);
  }

  return userBoards ?? [];
}

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
