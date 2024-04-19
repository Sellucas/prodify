import { useEffect, useState } from "react";

import { supabaseClient } from "@/utils/supabase/client";
import { Tables } from "@/lib/types/supabase";

export default function useUserBoards() {
  const [boards, setBoards] = useState<Tables<"boards">[] | null>(null);

  useEffect(() => {
    const fetchUserBoards = async () => {
      const supabase = supabaseClient();
      const { data } = await supabase.auth.getSession();

      if (data.session?.user) {
        const { data: userBoards, error } = await supabase
          .from("boards")
          .select("*")
          .eq("user_id", data.session.user.id);

        if (error) {
          console.error("Error fetching user boards:", error.message);
          return;
        }

        setBoards(userBoards ?? null); // Check if userBoards is null before setting state
      }
    };

    fetchUserBoards();
  }, []);

  return boards;
}
