import { NextRequest, NextResponse } from "next/server";
import { getServerSession, bumpSessionEpoch, signSessionToken, sessionCookieOptions } from "@/lib/server-session";

// "Log out all other devices": bump the user's session epoch (invalidates every
// existing session token) and immediately re-issue a fresh one for THIS device,
// so the caller stays signed in while every other session is killed.
export async function POST(req: NextRequest) {
  const username = await getServerSession(req);
  if (!username) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  const newEpoch = await bumpSessionEpoch(username);
  const token = signSessionToken(username, newEpoch);
  const res = NextResponse.json({ ok: true });
  res.cookies.set("session_token", token, sessionCookieOptions());
  return res;
}
