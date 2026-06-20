# Agentic Audit Library — Extraction to a Separate, Owner-Only Deployment

**Branch:** `extract-audit-app` (off master) · **Started:** 2026-06-20 · **Why:** the Agentic Audit library is material the founder built to do his **Cisco job** better; it is **not part of the Kryptós product** and must be fully separated for IP/COI reasons (see `docs/legal/`, `docs/CISCO_DEBRAND.md`).

## Decisions (locked with founder)
- **Target:** a **separate deployable app** — new `apps/audit` workspace in the monorepo, deployed as its **own Vercel project on its own subdomain/URL**, fully off the main site.
- **Access:** **owner-only (admin / explicit username allowlist)** — no general user, even logged in, can reach it.
- The public `apps/web` product must end up with **zero** audit routes, links, assets, or counts.

## ⚠️ Critical findings
1. **Ungated downloadables in `public/`:** `apps/web/public/audit-code/**` (2.9 MB) and `apps/web/public/mcp-templates/audit-*.py` (part of 372 KB) are served by URL with **no gate at all**, regardless of `AuditGate`. These must move out of any public web root and behind the owner-only gate. **Highest-priority exposure.**
2. **Name collision — do NOT touch:** the **admin audit LOG** (`apps/web/src/lib/audit.ts`, Redis `audit:log`, `logAdminAction`, and the many `api/admin/*` routes that call it) is unrelated to the Agentic Audit *library*. Grep for `audit` hits both. Only move the items in the inventory below.

## Inventory — what moves to `apps/audit`
**Routes (apps/web/src/app/audit/):** `page.tsx`, `AuditGate.tsx`, `ranked/page.tsx`, `[domain]/page.tsx`, `[domain]/[module]/page.tsx`.
**Data (packages/core/src/):** `audit-registry.ts`, `audit-quiz-data.json`, `audit-generated/**`. *(Decide: move into `apps/audit` directly, or a new private `@kryptos/audit-core` package not imported by web. Simplest = move into `apps/audit/src/data/`.)*
**Public assets:** `apps/web/public/audit-code/**`, `apps/web/public/mcp-templates/audit-*.py` → served from `apps/audit` behind the gate (NOT a public folder; serve via a gated route or Vercel project that is itself owner-gated).
**Related guide:** `apps/web/src/app/guides/agent-risk-audit/page.tsx` + `secured-docs/AGENT_RISK_AUDIT_GUIDE.md` + `docs/AGENT_RISK_AUDIT_GUIDE.md` + the `outputFileTracingIncludes` entry in `next.config.ts` — move/remove from web.

## Strip from `apps/web` (the public product)
- Delete the `app/audit/*` routes after the move.
- Remove the **`/audit` link in `Nav.tsx`** and any audit entry in `stages/page.tsx`, `decks/page.tsx`, `api/export/pptx`, `certs/page.tsx`. (Verify each is the *library*, not the audit *log*.)
- Remove `audit-registry` / `audit-quiz-data` imports from web (`check-answer`, `check-flag`, `server-progress`, stage pages) — confirm whether audit stages are awardable in web; if audit is fully leaving web, drop those code paths.
- Remove the `guides/agent-risk-audit` route + its `outputFileTracingIncludes` entry.
- Remove audit `*.py` from `public/`; update the `/downloads` page so it no longer lists the audit MCP templates.
- Reconcile counts/docs (audit was already off public catalog/counts — verify nothing references it).

## `apps/audit` scaffold (mirror apps/web's Next 16 setup)
- `package.json` (`@kryptos/audit`), `tsconfig.json`, `next.config.ts` (`transpilePackages: ["@kryptos/core"]` only if still importing core; else none), `postcss`/`tailwind`, `next-env.d.ts`, `vercel.json`.
- **`src/proxy.ts`** (this project uses `proxy`, not `middleware`): block **every** route behind the admin/allowlist gate at the edge — verify the HMAC `admin_token` (reuse `lib/admin-token.ts` logic) OR an allowlisted session; otherwise 404/redirect. Owner-only.
- **`src/app/robots.ts`** → `Disallow: /` + `X-Robots-Tag: noindex` header for all routes. Never indexed.
- Minimal `layout.tsx` + move the audit routes under `src/app/` (now the app root, e.g. `/` or `/library`).
- Reuse `@kryptos/core` for shared types if convenient, or vendor the audit data in-app to keep web's bundle free of it.

## Infra handoff — FOUNDER must do (cannot be done from here)
1. **New Vercel project** → Root Directory = `apps/audit`, "Include files outside root" ON (workspace lockfile).
2. **Subdomain/URL:** add e.g. `audit.<yourdomain>` (or a separate domain) to that Vercel project; DNS CNAME.
3. **Env vars** on the audit project: `ADMIN_SECRET` (same signing secret to validate your admin_token) + `UPSTASH_REDIS_*` (for session/allowlist check) + an `AUDIT_ALLOWLIST` (comma-sep usernames) if used.
4. Keep it **out of the `apps/web` Vercel project** entirely.

## Verify before any push
- `apps/web`: `npx tsc --noEmit -p apps/web/tsconfig.json` + `npm run build` green with **no** audit references; grep `public/` for audit-* = none.
- `apps/audit`: builds; every route 401/404 without an owner token; robots noindex present.
- Do NOT push either branch until Jacob says (production auto-deploys on master).

## Status
- [x] Branch `extract-audit-app` created (off master, clean).
- [ ] Scaffold `apps/audit` (build-verified).
- [ ] Move routes/data/assets.
- [ ] Owner-only edge gate + robots noindex.
- [ ] Strip from `apps/web` + reconcile.
- [ ] Build-verify both; infra handoff to founder.
