import { supabaseClient } from "@/utils/supabase/client";

export async function deleteBoard(boardId: string) {
  try {
    const supabase = supabaseClient();
    const { data, error: deleteError } = await supabase
      .from("boards")
      .delete()
      .eq("board_id", boardId);

    if (deleteError) {
      throw deleteError;
    }

    return { data, error: null };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error deleting the board:", error);
      return { data: null, error };
    } else {
      console.error("Unknown error deleting the board:", error);
      return { data: null, error: new Error("Unknown error") };
    }
  }
}
