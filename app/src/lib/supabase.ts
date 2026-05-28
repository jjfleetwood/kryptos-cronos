import "server-only";
import { createClient } from "@supabase/supabase-js";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const url = () => {
  const v = process.env.SUPABASE_URL;
  if (!v) throw new Error("SUPABASE_URL not configured");
  return v;
};

const serviceKey = () => {
  const v = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!v) throw new Error("SUPABASE_SERVICE_ROLE_KEY not configured");
  return v;
};

const anonKey = () => {
  const v = process.env.SUPABASE_ANON_KEY;
  if (!v) throw new Error("SUPABASE_ANON_KEY not configured");
  return v;
};

// Service role client — privileged, never sent to browser.
// Use for: creating users, reading any user, setting app_metadata.
export const supabaseAdmin = createClient(url(), serviceKey(), {
  auth: { autoRefreshToken: false, persistSession: false },
});

// SSR client — reads and writes Supabase session cookies via next/headers.
// Use in API route handlers and Server Components to read the current session.
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  return createServerClient(url(), anonKey(), {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          cookieStore.set(name, value, options)
        );
      },
    },
  });
}

// Extract the authenticated username from a Supabase session, or null.
export async function getSupabaseUsername(): Promise<string | null> {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    return (user?.user_metadata?.username as string) ?? null;
  } catch {
    return null;
  }
}
