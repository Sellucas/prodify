"use server";

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
