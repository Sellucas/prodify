import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import { supabaseClient } from "@/utils/supabase/client";
import { IBoard } from "@/types";

export const subscribeToBoardChanges = (
  userId: string,
  handleBoardChange: (payload: RealtimePostgresChangesPayload<IBoard>) => void
) => {
  const supabase = supabaseClient();

  const channel = supabase
    .channel(`public:boards_user_${userId}`)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "boards",
        filter: `user_id=eq.${userId}`,
      },
      handleBoardChange
    )
    .subscribe();

  return {
    unsubscribe: () => {
      channel.unsubscribe();
    },
  };
};
