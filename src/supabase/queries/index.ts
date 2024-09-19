import { supabaseClient } from "../client";

export async function getCurrentUser() {
  const supabase = supabaseClient();
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;

    if (!userId) throw new Error("Not authenticated");

    const { data: userData, error: userError } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (userError)
      throw new Error("Error fetching user profile: " + userError.message);

    return userData;
  } catch (error) {
    throw new Error("Not authenticated");
  }
}

export async function getAllBoards() {
  const supabase = supabaseClient();
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;

    if (!userId) throw new Error("Not authenticated");

    const { data: userBoards, error } = await supabase
      .from("boards")
      .select("*")
      .eq("user_id", userId);

    if (error) throw new Error(`Error fetching boards: ${error.message}`);

    return userBoards ?? [];
  } catch (error: any) {
    throw new Error(`Failed to get boards: ${error.message}`);
  }
}

export async function getAllCards(boardId: string) {
  const supabase = supabaseClient();
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;

    if (!userId) throw new Error("Not authenticated");

    const { data: filteredCards, error } = await supabase
      .from("cards")
      .select("*")
      .eq("board_id", boardId)
      .eq("user_id", userId); // Verifica se o user_id coincide

    if (error) throw new Error(`Error fetching cards: ${error.message}`);

    return (filteredCards ?? []).map((card) => ({
      ...card,
      priority: card.priority as "high" | "medium" | "low",
      tag: card.tag as
        | "code"
        | "design"
        | "code review"
        | "research"
        | "bug"
        | "enchantment"
        | "documentation"
        | "testing"
        | "discussion"
        | "implementation"
        | "feedback"
        | "refactoring",
    }));
  } catch (error: any) {
    throw new Error(`Failed to get cards: ${error.message}`);
  }
}

export async function getFlow() {
  const supabase = supabaseClient();
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;

    if (!userId) throw new Error("Not authenticated");

    const { data: flowData, error } = await supabase
      .from("flow")
      .select("*")
      .eq("user_id", userId);

    if (error) throw new Error(`Error fetching flow: ${error.message}`);

    return flowData ?? [];
  } catch (error: any) {
    throw new Error(`Failed to get flow: ${error.message}`);
  }
}
