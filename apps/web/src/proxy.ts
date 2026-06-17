import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/admin-token";

// Cross-origin clients (mobile web / Expo dev) reach the API with bearer tokens,
// not cookies — so CORS here is credential-less and origin-allowlisted. Native
// apps don't enforce CORS; same-origin web never triggers it.
const ALLOWED_API_ORIGINS = new Set([
  "https://kryptoscronos.com",
  "https://www.kryptoscronos.com",
  "http://localhost:3000",
  "http://localhost:8081",   // Expo web (default)
  "http://localhost:19006",  // Expo web (legacy)
]);

function applyCors(req: NextRequest, res: NextResponse): NextResponse {
  const origin = req.headers.get("origin");
  if (origin && ALLOWED_API_ORIGINS.has(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
    res.headers.set("Vary", "Origin");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Authorization, Content-Type");
    res.headers.set("Access-Control-Max-Age", "86400");
  }
  return res;
}

export function proxy(req: NextRequest) {
  // API routes: handle CORS (bearer-token auth) and skip the page CSP/nonce logic.
  if (req.nextUrl.pathname.startsWith("/api")) {
    if (req.method === "OPTIONS") {
      return applyCors(req, new NextResponse(null, { status: 204 }));
    }
    return applyCors(req, NextResponse.next());
  }

  // Admin route protection
  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!verifyAdminToken(req.cookies.get("admin_token")?.value)) {
      return NextResponse.redirect(new URL("/stages", req.url));
    }
  }

  // Per-request nonce for script-src CSP
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://plausible.io`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "media-src 'self' https://*.public.blob.vercel-storage.com",
    "font-src 'self'",
    "connect-src 'self' https://api.resend.com https://plausible.io",
    "frame-ancestors 'none'",
  ].join("; ");

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-nonce", nonce);

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  res.headers.set("Content-Security-Policy", csp);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
