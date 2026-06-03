import { NextResponse } from "next/server";

// Removed: this endpoint previously returned password hashes publicly.
// Login is now handled server-side via /api/auth/login.
export async function GET() {
  return NextResponse.json({ error: "not found" }, { status: 404 });
}
