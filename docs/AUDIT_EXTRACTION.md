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

## ⚠️ ENTANGLEMENT FINDING (2026-06-20) — bigger than a file move
The Advanced Audit library is **woven into the gameplay engine**, not just the `/audit` routes.
`audit-registry` / `audit-quiz-data` / `audit-generated` are imported by:
`api/check-answer`, `api/check-flag`, `api/export/pptx`, `app/decks/page.tsx`,
`app/stages/[stageId]/page.tsx`, and `lib/server-progress.ts` — i.e. audit modules are
registered as **playable stages** (answer-checking, progress awards, deck export all touch them).
So the strip-from-web step must **untangle these integrations**, not just delete routes. This is a
real refactor and the risky part (apps/web auto-deploys prod). Do it in a focused, build-verified pass.
Name-collision reminder still applies: the admin audit LOG (`lib/audit.ts`/`audit:log`) is unrelated.

## Status
- [x] Branch `extract-audit-app` created (off master, clean).
- [x] **Scaffold `apps/audit` — DONE + tsc-green** (12 files: package.json/tsconfig/next.config/
  postcss/vercel.json/next-env, `src/proxy.ts` owner-only gate via shared `admin_token`+`ADMIN_SECRET`
  (+ optional `AUDIT_ALLOWLIST`, unauth→404), `src/app/robots.ts` noindex + `X-Robots-Tag`, layout/
  globals/placeholder page, `src/lib/admin-token.ts`, README). Additive — apps/web untouched.
- [x] **Untangle audit library from apps/web — DONE (commits c4d466b, 3e0a1fe; web tsc green throughout):**
  - Deleted `app/audit/*` routes; removed `getAuditStage` fallback + import from check-answer/check-flag/server-progress; dropped the audit-domain branch from `decks` + `export/pptx`; removed `/audit` links (Nav, stages page). **apps/web imports ZERO audit-registry/generated/epochs.** (tech-audit *curriculum* `audit-quiz-data` correctly stays.)
  - **EXPOSURE FIXED:** `git mv` `public/audit-code` + `public/mcp-templates` → `apps/audit/public`; deleted `/downloads` page + `/api/downloads`; removed the two `/downloads` links. **apps/web/public is audit-free.**
- [x] **Brought current with master (2026-06-22):** merged master in (the Cisco-deleted base + Studio work + the guide-deck feature). One conflict (`api/export/pptx/route.ts`) resolved — kept `buildGuideDeck`, dropped the dead `audit-registry` import. apps/web re-verified: ZERO audit-registry refs, no `public/audit-code`/`mcp-templates`, no `/audit` or `/downloads` routes.
- [x] **Build-verify BOTH apps — GREEN (2026-06-22):** `npm run build` → `2 successful, 2 total` (`@kryptos/web` + `@kryptos/audit`). apps/audit renders the library landing (`auditEpochs` + `auditStagesForEpoch`).
- [x] **Deep per-module rendering — DONE (2026-06-22, shared `@kryptos/ui` package):**
  - New workspace **`packages/ui`** (`@kryptos/ui`) holds the presentational briefing renderer: `StageInfo` + 8 sub-components (AttackDiagram/BackLink/GaugeBar/GeneratedCover/MermaidDiagram/RichText/StageFrontierBanner/ZoomableImage), the `stage-images` map, and an app-agnostic `locale` context (provider takes `messages` as a prop). `git mv`'d from apps/web so history is preserved.
  - **apps/web**: `contexts/LocaleContext.tsx` is now a thin shim over `@kryptos/ui/locale` (injects web's 7 message bundles + cookie persistence) so its ~dozens of `useLocale` callers are untouched; the 6 importers of the moved components repointed to `@kryptos/ui/*`. `transpilePackages` + dep added. **No styling regression** — added `@source "../../../../packages/ui/src"` to globals.css (Tailwind v4 doesn't auto-scan workspace pkgs).
  - **apps/audit**: new `[domain]/[module]/page.tsx` renders the audit card (objective/approach/artifacts/system/owner) + scores + runnable code + the full `StageInfo` briefing in **reference mode** (`onStart` made optional → no gameplay CTA; the CTF/quiz engine stays in apps/web). Landing links each module to it. Layout wraps `<LocaleProvider>` with a copied `en.json`. Same `@source` added.
  - **Both apps: `tsc` clean + `npm run build` = 2 successful.** `@kryptos/ui` Tailwind utilities confirmed in the audit CSS bundle.
- [ ] **Remaining (non-exposure, non-breaking) follow-ups:**
  - **Remove the inert admin downloads-access panel** — `DownloadsAccessPanel` (`admin/_panels.tsx` L76–208) + its import/render in `admin/page.tsx` (L11, L1180) + `/api/admin/downloads-access`. Dead (the `/downloads` page it gated is gone) but harmless; left to avoid big-admin-page surgery in this pass.
  - **Decide on `guides/agent-risk-audit`** — it's a companion to the tech-audit *curriculum* (which STAYS in the product) and now has a deck-export button; arguably product content, not library. Keep on web OR move to apps/audit — founder call.
- [ ] **Founder infra (cannot be done here):** new Vercel project (root=apps/audit) + subdomain + env (see `apps/audit/README.md`). apps/audit is unreachable until this is done.
