import type { NextConfig } from "next";

// CSP is set dynamically per-request in src/proxy.ts (nonce-based).
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  transpilePackages: ["@kryptos/core", "@kryptos/ui"],
  outputFileTracingIncludes: {
    "/api/docs/(.*)": ["./secured-docs/**"],
    // The public Agent Risk Audit Guide renders the same markdown server-side.
    "/guides/agent-risk-audit": ["./secured-docs/AGENT_RISK_AUDIT_GUIDE.md"],
    "/guides/agent-fleet": ["./secured-docs/AGENTS_OVERVIEW.md"],
    // Studio (Pro-gated): the manuscript + both screenplays + the generated
    // audiobook MP3 must be bundled into these serverless functions (read from disk).
    "/api/studio": [
      "./secured-docs/SIEMPRE_SEGUNDO.md",
      "./secured-docs/SIEMPRE_SEGUNDO_SCREENPLAY.md",
      "./secured-docs/SIEMPRE_SEGUNDO_SCREENPLAY_SELL.md",
    ],
    "/api/studio/audio": ["./secured-docs/*.mp3", "./secured-docs/siempre-segundo.audio.txt", "./secured-docs/siempre-segundo.audio.json"],
  },
  // Versioned API namespace for clients that can't be force-updated (the mobile
  // app pins to /api/v1). /api/v1/* serves the same handlers as /api/* today; a
  // future breaking change ships under /api/v2 while /api/v1 stays frozen.
  async rewrites() {
    return [{ source: "/api/v1/:path*", destination: "/api/:path*" }];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
