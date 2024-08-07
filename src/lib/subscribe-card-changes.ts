import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import { supabaseClient } from "@/utils/supabase/client";
import { ICard } from "@/types";

export const subscribeToCardChanges = (
  boardId: string,
  handleCardChange: (payload: RealtimePostgresChangesPayload<ICard>) => void
) => {
  const supabase = supabaseClient();

  const channel = supabase
    .channel(`public:cards_board_${boardId}`)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "cards",
        filter: `board_id=eq.${boardId}`,
      },
      handleCardChange
    )
    .subscribe();

  return {
    unsubscribe: () => {
      channel.unsubscribe();
    },
  };
};
