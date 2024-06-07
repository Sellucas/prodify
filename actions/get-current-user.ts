import { IUserProfile } from "@/types";
import { supabaseClient } from "@/utils/supabase/client";

export async function getCurrentUser(): Promise<IUserProfile | null> {
  const supabase = supabaseClient();
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.error(sessionError);
    return null;
  }

  if (sessionData.session?.user) {
    const { data: userData, error: userError } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", sessionData.session.user.id)
      .single();

    if (userError) {
      throw new Error("Error fetching user profile: " + userError.message);
    }

    return userData;
  } else {
    throw new Error("Not authenticated");
  }
}
