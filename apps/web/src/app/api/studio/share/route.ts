import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/admin-token";
import { studioShareToken } from "@/lib/studio-share";

// GET /api/studio/share — admin only. Returns the secret share link to hand to
// family/friends so they can read/listen without a Pro account.
export async function GET(req: NextRequest) {
  const admin = verifyAdminToken(req.cookies.get("admin_token")?.value ?? "");
  if (!admin) return NextResponse.json({ error: "admin" }, { status: 403 });

  const token = studioShareToken();
  const origin = process.env.APP_URL || req.nextUrl.origin;
  return NextResponse.json({
    token,
    url: `${origin}/studio/prose?s=${token}`,
  });
}
