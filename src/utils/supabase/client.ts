import { createBrowserClient } from "@supabase/ssr";

import { Database } from "@/lib/types/supabase";

export function supabaseClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
