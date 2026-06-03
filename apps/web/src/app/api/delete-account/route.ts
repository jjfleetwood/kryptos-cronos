import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getAuthedUsername } from "@/lib/api-auth";
import { supabaseAdmin } from "@/lib/supabase";

// Best-effort deletion of the parallel Supabase auth account for this email, so a
// self-service account deletion is complete (privacy) and leaves no record that
// could still mint a token. We don't persist the Supabase uid in Redis, so we
// look it up by email. TODO: store the uid at register/bootstrap to make this
// O(1) instead of a list scan (fine at current scale, < perPage users).
async function deleteSupabaseUserByEmail(email: string): Promise<void> {
  try {
    const { data } = await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1000 });
    const user = data?.users.find((u) => u.email?.toLowerCase() === email);
    if (user) await supabaseAdmin.auth.admin.deleteUser(user.id);
  } catch {
    // Non-fatal: Redis is the source of truth for app access; the Supabase
    // account without a Redis record cannot authenticate into the app anyway.
  }
}

export async function DELETE(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const lower = username.toLowerCase();

  // Look up email to clean up the email→username index, NDA record (email-keyed),
  // and the Supabase auth account.
  const userData = await redis.hgetall(`user:${lower}`) as Record<string, string> | null;
  const email = userData?.email?.toLowerCase();

  await Promise.all([
    redis.del(`user:${lower}`),
    redis.del(`progress:${lower}`),
    redis.del(`streak:${lower}`),
    redis.zrem("leaderboard", lower),
    ...(email ? [redis.del(`nda:${email}`), redis.del(`email:${email}`)] : []),
  ]);

  if (email) await deleteSupabaseUserByEmail(email);

  const response = NextResponse.json({ ok: true });
  response.cookies.set("session_token", "", { maxAge: 0, path: "/" });
  response.cookies.set("admin_token", "", { maxAge: 0, path: "/" });
  return response;
}
