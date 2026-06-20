import type { NextConfig } from "next";

// This is the PRIVATE Agentic Audit deployment — a separate Vercel project on
// its own subdomain, owner-only. It must never be indexed and is not part of the
// public Kryptós product. Access is gated at the edge in src/proxy.ts.
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Hard no-index, no-follow on every route — never surfaces in search.
  { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet" },
];

const nextConfig: NextConfig = {
  transpilePackages: ["@kryptos/core"],
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
