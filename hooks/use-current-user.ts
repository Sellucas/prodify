import { useEffect, useState } from "react";

import { supabaseClient } from "@/utils/supabase/client";
import { Tables } from "@/lib/types/supabase";

export default function useCurrentUser() {
  const [user, setUser] = useState<Tables<"profiles"> | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const supabase = supabaseClient();
      const { data } = await supabase.auth.getSession();

      if (data.session?.user) {
        const { data: userData, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", data.session.user.id)
          .single();

        if (error) {
          console.error("Error fetching user profile:", error.message);
          return;
        }

        setUser(userData ?? null); // Check if userData is null before setting state
      }
    };

    fetchUserProfile();
  }, []);

  return user;
}
