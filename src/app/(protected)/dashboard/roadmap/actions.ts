"use server";

import { TablesInsert } from "@/supabase/types/supabase";
import { supabaseServer } from "@/supabase/server";

export async function saveFlow(flowData: TablesInsert<"flow">) {
  try {
    const supabase = supabaseServer();

    if (!flowData.user_id) {
      return { error: "user_id is required." };
    }

    const { data: existingFlow, error: fetchError } = await supabase
      .from("flow")
      .select("*")
      .eq("user_id", flowData.user_id)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      console.error("Erro ao buscar flow existente:", fetchError);
      return { error: fetchError.message };
    }

    let result;
    if (existingFlow) {
      const { data, error } = await supabase
        .from("flow")
        .update({ metadata: flowData.metadata })
        .eq("user_id", flowData.user_id);

      if (error) {
        console.error("Erro ao atualizar flow:", error);
        return { error: error.message };
      }
      result = { data };
    } else {
      const { data, error } = await supabase.from("flow").insert(flowData);

      if (error) {
        console.error("Erro ao criar novo flow:", error);
        return { error: error.message };
      }
      result = { data };
    }

    return result;
  } catch (error: any) {
    console.error("Erro no catch:", error);
    return { error: error.message };
  }
}
