import { NextRequest, NextResponse } from "next/server";
import { getAuthedUsername } from "@/lib/api-auth";
import { verifyAdminToken } from "@/lib/admin-token";
import { getUserTier } from "@/lib/access";
import fs from "fs";
import path from "path";

// GET /api/studio — serves the "Siempre Segundo" manuscript to Pro users (and
// admins). Not public: free/anonymous callers get 401/403 so the prose never
// leaves the server for non-Pro users. The /studio page renders what this returns.
export async function GET(req: NextRequest) {
  const admin = verifyAdminToken(req.cookies.get("admin_token")?.value ?? "");
  const username = (await getAuthedUsername(req)) ?? admin;

  if (!username) {
    return NextResponse.json({ error: "signin" }, { status: 401 });
  }
  // Admins always have access; everyone else must be Pro. (In dev OPEN_ACCESS,
  // getUserTier returns "pro" for any signed-in user; at launch this narrows to
  // genuine Pro subscribers.)
  if (!admin) {
    const tier = await getUserTier(username);
    if (tier !== "pro") {
      return NextResponse.json({ error: "pro" }, { status: 403 });
    }
  }

  try {
    const filePath = path.join(process.cwd(), "secured-docs", "SIEMPRE_SEGUNDO.md");
    const content = fs.readFileSync(filePath, "utf-8");
    return new NextResponse(content, {
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
}
