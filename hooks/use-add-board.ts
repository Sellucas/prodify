import { useState } from "react";
import { supabaseClient } from "@/utils/supabase/client";
import { TablesInsert } from "@/lib/types/supabase";

export default function useAddBoard() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const insertNewBoard = async (boardData: TablesInsert<"boards">) => {
    setIsLoading(true);
    setError(null);

    try {
      const supabase = supabaseClient();
      const { data, error: insertError } = await supabase
        .from("boards")
        .insert([boardData]);

      if (insertError) {
        throw insertError;
      }

      console.log("Board inserted successfully:", data);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error inserting the board:", error);
        setError(error);
      } else {
        console.error("Unknown error inserting the board:", error);
        setError(new Error("Unknown error"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { insertNewBoard, isLoading, error };
}
