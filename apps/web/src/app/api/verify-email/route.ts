import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

// Click-target for the verification email. Marks the account verified and bounces
// to /account with a status flag. Soft flow — nothing is gated on this.
export async function GET(req: NextRequest) {
  const baseUrl = process.env.APP_URL || "https://www.kryptoscronos.com";
  const token = new URL(req.url).searchParams.get("token");
  if (!token) return NextResponse.redirect(`${baseUrl}/account?verify=invalid`);

  const username = await redis.get<string>(`emailverify:${token}`);
  if (!username) return NextResponse.redirect(`${baseUrl}/account?verify=invalid`);

  await redis.hset(`user:${String(username).toLowerCase()}`, { emailVerified: "true" });
  await redis.del(`emailverify:${token}`);
  return NextResponse.redirect(`${baseUrl}/account?verify=success`);
}
