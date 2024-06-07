import { supabaseClient } from "@/utils/supabase/client";
import { TablesInsert } from "@/lib/types/supabase";

export async function addBoard(boardData: TablesInsert<"boards">) {
  try {
    const supabase = supabaseClient();
    const { data, error: insertError } = await supabase
      .from("boards")
      .insert([boardData]);

    if (insertError) {
      throw insertError;
    }

    return { data, error: null };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error inserting the board:", error);
      return { data: null, error };
    } else {
      console.error("Unknown error inserting the board:", error);
      return { data: null, error: new Error("Unknown error") };
    }
  }
}
