import { supabaseClient } from "@/utils/supabase/client";

export async function getAllBoards(userId: string) {
  try {
    const supabase = supabaseClient();
    const { data: userBoards, error } = await supabase
      .from("boards")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      throw error;
    }

    return userBoards ?? null;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching user boards:", error.message);
      throw error;
    } else {
      console.error("Unknown error fetching user boards:", error);
      throw new Error("Unknown error");
    }
  }
}
