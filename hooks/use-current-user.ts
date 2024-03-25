import { useEffect, useState } from "react";

import { supabaseClient } from "@/utils/supabase/client";

export default function useCurrentUser() {
  const [user, setUser] = useState<{
    created_at: string;
    display_name: string | null;
    email: string;
    id: string;
    image_url: string | null;
  } | null>(null);

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
