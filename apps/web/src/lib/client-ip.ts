import type { NextRequest } from "next/server";

/**
 * Best-effort client IP for rate limiting. On Vercel (our host) `x-real-ip` and
 * `x-forwarded-for` are populated by the platform edge and reflect the true
 * connecting client. These headers are spoofable on non-Vercel deployments, so
 * for sensitive AUTHENTICATED endpoints prefer keying rate limits on the verified
 * username instead of the IP returned here.
 */
export function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}
