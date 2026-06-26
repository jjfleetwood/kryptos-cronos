import { NextResponse } from "next/server";

// Logout only. (A former POST handler minted a session from a client-supplied
// password *hash* — a pass-the-hash hole (CWE-836) with no caller — and was
// removed. Sessions are issued solely by register / login / reset-password.)
export async function DELETE() {
  // Sign out from Supabase (clears JWT cookies)
  try {
    const { createSupabaseServerClient } = await import("@/lib/supabase");
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  } catch { /* best effort */ }

  const res = NextResponse.json({ ok: true });
  // Domain must match sessionCookieOptions() or the subdomain-scoped cookie won't clear.
  res.cookies.delete({
    name: "session_token",
    domain: process.env.NODE_ENV === "production" ? ".kryptoscronos.com" : undefined,
    path: "/",
  });
  return res;
}
