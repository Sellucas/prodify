"use server";

import { TablesUpdate } from "@/lib/types/supabase";
import { supabaseServer } from "@/utils/supabase/server";

export async function updateUser(
  userId: string,
  userData: TablesUpdate<"profiles">,
) {
  try {
    const supabase = supabaseServer();
    const { data, error } = await supabase
      .from("profiles")
      .update(userData)
      .eq("user_id", userId);

    if (error) {
      console.error("Supabase error:", error);
      return { error: error.message };
    }

    return { data };
  } catch (error: any) {
    return { error: error.message };
  }
}
