# Kryptós CronOS — Claude Code Project Context

## What This Is

Gamified cybersecurity + AI training platform. 72 curriculum epochs, 801 CTF/quiz stages, live leaderboard, admin dashboard, 24 downloadable MCP server templates. Built with Next.js 16 / React 19 / TypeScript / Tailwind CSS / Upstash Redis / Resend.

**Live:** kryptoscronos.com  
**Repo:** github.com/jjfleetwood/kryptos-cronos  
**Current version:** v1.43.0 (as of 2026-06-06)

---

## Project Root — Turborepo monorepo (since 2026-06-03)

```
C:\Users\Ajax\Projects\cyberquest\
├── apps/
│   └── web/          ← the Next.js app + API (was app/) — most work happens here
├── packages/
│   ├── core/         ← @kryptos/core — ALL content data + types (was app/src/data)
│   └── api-client/   ← @kryptos/api-client — typed cross-platform API client (web + mobile)
├── docs/             ← Full documentation suite (synced → apps/web/secured-docs)
├── package.json      ← root: npm workspaces + turbo scripts
├── turbo.json
└── CLAUDE.md         ← This file
```

npm **workspaces** + **Turborepo**. App code lives in `apps/web/` (run app commands there, or use `turbo` from the root). Shared content/types live in `packages/core` and are imported as `@kryptos/core/<module>`. Vercel **Root Directory = `apps/web`**.

---

## Dev Commands

```bash
# From the repo root (turbo orchestrates the workspace):
cd C:\Users\Ajax\Projects\cyberquest
npm run build        # turbo run build (builds @kryptos/web)
npm run lint         # turbo run lint
npm run dev          # turbo run dev → localhost:3000

# Or from the app workspace directly:
cd C:\Users\Ajax\Projects\cyberquest\apps\web
npm run dev
npx tsc --noEmit --skipLibCheck -p tsconfig.json    # type check (CI uses -p apps/web/tsconfig.json from root)

# Deploy: prefer `git push origin master` (auto-deploys prod). Manual:
npx vercel --prod --project kryptos-cronos          # run from apps/web; needs Vercel Root Directory = apps/web
```

> ⚠️ The Vercel CLI may hit a 100 MB upload limit deploying from local — prefer `git push origin master` (git-clone build) for production.

---

## Dev → Prod Workflow

**Single branch: `master`** (the old `dev` branch was retired 2026-06-03 — the repo now has only `master`). Push to `master` → CI runs + Vercel auto-deploys production. For risky changes, push a short-lived feature branch first to get a Vercel **Preview** build, validate it, then fast-forward `master`.

CI runs on: pushes to `master` and PRs targeting `master`. Config: `.github/workflows/ci.yml` (runs from the workspace root: `npm ci` → lint/typecheck/build for `@kryptos/web`).

**GitHub repo secrets required for CI build:**
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

(All other env vars are stubbed with `ci-placeholder` in the workflow file for the build step.)

**Vercel (one-time, in dashboard):**
- Connect GitHub repo → auto-deploy `master` → production
- **Root Directory = `apps/web`** with “Include files outside the root directory” ON (needed for the workspace root lockfile)
- Production env has the real secrets; **Preview env does not have the Supabase vars** — which is why `supabaseAdmin` is lazily constructed (see Architecture)

---

## Architecture in One Page

**Stack:** Next.js 16 App Router (in `apps/web`) + Upstash Redis + Resend email; content/types in `@kryptos/core`  
**Middleware:** `apps/web/src/proxy.ts` — admin protection + per-request CSP nonce + CORS for `/api` (Next.js 16 Turbopack uses `proxy` export)  
**Admin:** HMAC cookie via `/api/admin-session`; `/admin/**` blocked at edge  
**Auth:** PBKDF2-SHA-256 (600k iterations), server-side; Supabase Auth parallel (v1.15.0+); user records in Redis. API routes accept **either** the HMAC `session_token` cookie (web) **or** an `Authorization: Bearer <supabase-jwt>` (mobile) via `getAuthedUsername()` — bearer identity resolved from the verified `email` claim → `email:{email}` index (not spoofable `user_metadata`)  
**Sessions:** HMAC-signed HttpOnly `session_token` cookie (30 days) + `admin_token` (24h)  
**Account lockout:** 5 failed logins → 15-min lock (`lockout:user:{username}`)  
**Leaderboard:** Upstash Redis sorted sets (`leaderboard`, `lb:d:YYYY-MM-DD`, `lb:w:YYYY-MM-DD`)  
**Progress:** Redis (`progress:<username>`) — XP computed server-side  
**Email:** Resend API for registration alerts + password reset  
**AI:** Claude Haiku (`claude-haiku-4-5`) for ARIA chatbot via `/api/hint`  
**Docs:** `apps/web/secured-docs/` — gated behind admin cookie via `/api/docs/[file]`  
**Audit log:** Redis list `audit:log` (max 1000 entries) — all mutating admin actions logged via `src/lib/audit.ts`  
**Vouchers:** `voucher:{CODE}` hash + `voucher:redeemers:{CODE}` set — atomic SADD dedup + HINCRBY supply  

---

## Navigation Flow

```
/           → homepage with 10 track marketing cards
/stages     → stage map hub: Security / Non-Security sections, epoch cards per track group
/stages/epoch/[epochId]   → per-epoch page: hero + stage grid + progress bar + cert/CyberOps banner
/stages/[stageId]         → individual stage (StageInfo → CTF/Quiz challenge)
/leaderboard              → XP rankings (daily / weekly / all-time) + PDF certificate download
/certs                    → CompTIA Security+ SY0-701 + ISC² CC readiness rings, per-domain progress
/resume                   → resume builder — skills auto-suggested from completed epochs, PDF export
/cyberops                 → Cisco CyberOps Associate (CBROPS 200-201) exam readiness dashboard
/pqc                      → PQC migration readiness tracker (NSA/CISA/NIST roadmap, 6 phases; framework, not a cert)
/shop                     → avatar item shop (🛒 Shop tab) + daily trophy showcase (💎 Treasures tab)
/trophies                 → owned trophy collection vault (admin: full library with supply counters)
/avatar                   → avatar customization — equip/unequip owned items
/account                  → user profile, tier status, voucher expiry, delete account
/survey                   → 9-question user survey; completion grants 30-day Pro to free/trial users
/downloads                → 24 Python MCP server templates; access gated per admin settings
/admin                    → admin dashboard (HMAC cookie required) — fixed left-nav sidebar
/attribution              → public legal attributions & licenses page
/terms                    → Terms of Service
/privacy                  → Privacy Policy
/demo                     → clickwrap NDA gate
```

Back navigation: `BackLink` uses `backHref` prop (passed from `StageContainer`) → always returns to epoch page.

---

## Epochs (Curriculum Tracks)

| # | Epoch ID | Display Name | Stages | Stage ID Pattern | Color |
|---|---|---|---|---|---|
| 1 | `first-journey` | Our First Journey | 30 | bt-01 → bt-30 | Emerald |
| 2 | `ancient` | Foundations | 12 | stage-01 → stage-12 | Amber |
| 3 | `cisco-core`       | Cisco: Core CVEs           | 12 | stage-m01 → stage-m12 | Blue   |
| 4 | `cisco-enterprise` | Cisco: Enterprise Attack   | 13 | stage-m13 → stage-m25 | Indigo |
| 5 | `cisco-secops`     | Cisco: Security Operations | 13 | stage-m26 → stage-m38 | Violet |
| 6 | `tech-audit-1` | Tech Audit: Foundations | 12 | audit-01 → audit-12 | Purple |
| 7 | `tech-audit-2` | Tech Audit: Technical | 12 | audit-t01 → audit-t12 | Violet |
| 8 | `tech-audit-3` | Tech Audit: Agentic | 12 | audit-a01 → audit-a12 | Indigo |
| 9 | `tech-audit-4` | Continuous Monitoring 2.0 | 12 | audit-cm01 → audit-cm12 | Rose |
| 10 | `mitre` | MITRE ATT&CK | 12 | mitre-01 → mitre-12 | Red |
| 11 | `mitre-atlas` | MITRE ATLAS | 12 | atlas-01 → atlas-12 | Fuchsia |
| 12 | `owasp-llm` | OWASP LLM Top 10 | 12 | llm-01 → llm-12 | Orange |
| 13 | `quantum-1` | Quantum Era: Threats | 10 | quantum-01 → quantum-10 | Cyan |
| 14 | `quantum-2` | Quantum Era: PQC | 10 | quantum-b01 → quantum-b10 | Teal |
| 15 | `quantum-3` | Quantum Era: QKD | 10 | quantum-c01 → quantum-c10 | Sky |
| 37 | `quantum-4` | Quantum Risk Management | 10 | quantum-d01 → quantum-d10 | Indigo |
| 39 | `quantum-5` | Quantum-Safe Migration Engineering | 10 | quantum-e01 → quantum-e10 | Blue |
| 40 | `quantum-intro` | Quantum for Curious Minds (beginner) | 10 | quantum-i01 → quantum-i10 | Purple |
| 41 | `quantum-deep` | Quantum, Deeper (intermediate physics) | 10 | quantum-x01 → quantum-x10 | Fuchsia |
| 42 | `computing-foundations` | How Computers Really Work (beginner) | 10 | cf-01 → cf-10 | Orange |
| 61 | `silicon-fab` | Silicon: Sand to Superchips (chip manufacturing) | 10 | si-01 → si-10 | Sky |
| 62 | `space-race` | Race Through Space (space systems hacking; 6 CTF + 4 quiz) | 10 | space-01 → space-10 | Violet |
| 63 | `vehicle-sec` | Wired & Autonomous (EV/vehicle security; 6 CTF + 4 quiz) | 10 | vehicle-01 → vehicle-10 | Lime |
| 64 | `robot-sec` | Robotics (robot/autonomous-systems security; 6 CTF + 4 quiz) | 10 | robot-01 → robot-10 | Orange |
| 67 | `ot-sec` | Operational Technology (ICS/SCADA security; 6 CTF + 4 quiz) | 10 | ot-01 → ot-10 | Amber |
| 68 | `vehicle-sec-2` | Wired & Autonomous II (SDV/Ethernet/V2X/EV/AV/fleet-API; 6 CTF + 4 quiz) | 10 | v2-01 → v2-10 | Lime |
| 69 | `robot-sec-2` | Robotics II (ROS2/DDS, AMR fleets, ag robots, swarms, cloud, nav-spoof, policy-poison; 6 CTF + 4 quiz) | 10 | r2-01 → r2-10 | Orange |
| 70 | `space-race-2` | Race Through Space II (uplink/downlink, GNSS, jamming, ground-segment, CubeSats, ISL, SSA/ASAT; 6 CTF + 4 quiz) | 10 | s2-01 → s2-10 | Violet |
| 71 | `threat-frameworks` | Threat Frameworks (Kill Chain, Diamond, ATT&CK, Pyramid of Pain, D3FEND, STIX/TAXII; 6 CTF + 4 quiz) | 10 | tf-01 → tf-10 | Rose |
| 65 | `flag-football-1` | Flag Football: Foundations (extended/sports) | 10 | flag-01 → flag-10 | Emerald |
| 66 | `flag-football-2` | Flag Football: Advanced Play (HS-level) | 10 | flag-11 → flag-20 | Teal |
| 67 | `flag-football-3` | Flag Football: Playbook & Competition | 10 | flag-21 → flag-30 | Green |
| 43 | `physics-of-hacking` | The Physics of Hacking (hardware/physical) | 10 | poh-01 → poh-10 | Pink |
| 38 | `emerging-tech` | Emerging Tech & Deep Learning Risk | 10 | emerging-01 → emerging-10 | Violet |
| 16 | `umbrella` | Cisco Umbrella / SASE | 10 | umbrella-01 → umbrella-10 | Green |
| 17 | `tapestry` | Tapestry | 12 | tapestry-01 → tapestry-12 | Yellow |
| 18 | `nails` | Nail Arts | 10 | nails-01 → nails-10 | Pink |
| 19 | `hair-color` | Hair Coloring | 10 | hair-color-01 → hair-color-10 | Rose |
| 20 | `hair-styling` | Hair Styling | 10 | hair-styling-01 → hair-styling-10 | Violet |
| 21 | `driving-1` | Road to Your License | 8 | driving-1-01 → driving-1-08 | Yellow |
| 22 | `driving-2` | First Miles | 8 | driving-2-01 → driving-2-08 | Lime |
| 23 | `driving-3` | Rules of the Road | 8 | driving-3-01 → driving-3-08 | Orange |
| 25 | `baseball-1` | Play Ball! | 10 | baseball-1-01 → baseball-1-10 | Red |
| 26 | `baseball-2` | The Art of Hitting | 10 | baseball-2-01 → baseball-2-10 | Blue |
| 27 | `baseball-3` | Advanced Mechanics | 10 | baseball-3-01 → baseball-3-10 | Violet |
| 28 | `baseball-4` | Elite Mastery | 10 | baseball-4-01 → baseball-4-10 | Amber |
| 29 | `baseball-5` | The Art of Pitching | 10 | baseball-5-01 → baseball-5-10 | Green |
| 30 | `baseball-6` | Pitch Arsenal | 10 | baseball-6-01 → baseball-6-10 | Red |
| 31 | `baseball-7` | Pitching Strategy | 10 | baseball-7-01 → baseball-7-10 | Indigo |
| 32 | `cisco-advanced` | Cisco: Advanced Defense | 12 | stage-m39 → stage-m50 | Cyan |
| 33 | `paris-july` | Paris in July | 20 | paris-01 → paris-20 | Blue |
| 34 | `milan-july` | Milan in July | 20 | milan-01 → milan-20 | Indigo |
| 35 | `french-basics` | French Basics | 20 | french-01 → french-20 | Sky |
| 36 | `italian-basics` | Italian Basics | 20 | italian-01 → italian-20 | Green |
| 44 | `debate-1` | Foundations of Debate | 10 | debate-1-01 → debate-1-10 | Sky |
| 45 | `debate-2` | Argumentation & Logic | 10 | debate-2-01 → debate-2-10 | Cyan |
| 46 | `debate-3` | The Formats | 10 | debate-3-01 → debate-3-10 | Teal |
| 47 | `debate-4` | Research & Case Construction | 10 | debate-4-01 → debate-4-10 | Emerald |
| 48 | `debate-5` | Clash | 10 | debate-5-01 → debate-5-10 | Amber |
| 49 | `debate-6` | Rhetoric, Delivery & Persuasion | 10 | debate-6-01 → debate-6-10 | Rose |
| 50 | `debate-7` | Competitive & Professional Mastery (+ certifications) | 10 | debate-7-01 → debate-7-10 | Indigo |
| 51 | `debate-8` | The Psychology of Debate | 10 | debate-8-01 → debate-8-10 | Purple |

**Track groups (stages page — public):** Core Security (+ computing-foundations) · Tech Audit · Threat Frameworks · AI Security · Quantum Era (quantum-intro + quantum-deep + quantum-1/2/3/4/5) · Defend the Enterprise (+ physics-of-hacking)  
**Extended curriculum (curious group only):** Crafts · Driving · Baseball · Travel · Debate & Speech (debate-1…7)  
**Hidden from public nav (accessible via direct URL):** all extended tracks

---

## Key Files

> Paths: shared content/types live in **`packages/core/src/`** (imported as `@kryptos/core/<module>`); everything else is under **`apps/web/`**.

**`packages/core` (`@kryptos/core`) — content + types:**

| File | Why it matters |
|---|---|
| `packages/core/src/stages.ts` | Epoch registry + stage array — imports all epoch files; NOT for "use client" listing pages. Import as `@kryptos/core/stages` |
| `packages/core/src/stages-meta.ts` | Client-safe listing metadata (no ctf/quiz/info) — import this in "use client" listing pages |
| `packages/core/src/stage-flags.ts` | Server-only flag store (`import "server-only"`) — used only by `/api/check-flag`. NEVER barrel-export from core |
| `packages/core/src/cert-domains.ts` | Security+/ISC² CC/Network+/CySA+/AI+/CISA/CISM/CRISC + AWS AIP + GCP PMLE domain mappings; AI-cloud certs in `AI_PLATFORM_CERT_DOMAINS` (merged into `CERT_DOMAINS` at load); `computeCertReadiness()` |
| `packages/core/src/cyberops-domains.ts` | Cisco CBROPS 200-201 domain mappings; `computeCyberOpsReadiness()` |
| `packages/core/src/content-flags.ts` | Per-epoch IP risk registry — drives epoch-page banners |
| `packages/core/src/trophies.ts` | 51 trophies across 8 tiers; `dailyShopTrophies()` seeded Fisher-Yates shuffle |
| `packages/core/src/types.ts` | Shared `StageConfig` / `EpochConfig` / `QuizQuestion` types |

**`packages/api-client` (`@kryptos/api-client`):** framework-agnostic `createApiClient({ baseUrl, getToken, fetch })` — bearer (mobile) or cookie (web) auth; typed methods (getMe, bootstrap, getProgress, awardStage, leaderboard, checkFlag/Answer, getHint). Mobile is the first consumer (Phase 4).

**`apps/web` — the Next.js app + API:**

| File | Why it matters |
|---|---|
| `apps/web/src/proxy.ts` | Active Turbopack proxy — admin protection + nonce-based CSP + CORS for `/api` (`proxy` export) |
| `apps/web/src/lib/auth.ts` | Client-side session cache (sessionStorage) |
| `apps/web/src/lib/server-session.ts` | HMAC session token sign/verify; `getServerSession()` (sync, cookie-only — for SSR pages) |
| `apps/web/src/lib/api-auth.ts` | Multi-client resolver `getAuthedUsername(req)` — bearer Supabase JWT → session cookie; `extractAdminUsername(req)`. Used by gameplay API routes |
| `apps/web/src/lib/supabase-jwt.ts` | `verifySupabaseJwt()` — validates a Supabase token via `getUser()`; identity from verified **email** claim → `email:{email}` index (NOT `user_metadata`) |
| `apps/web/src/lib/supabase.ts` | Supabase clients — **`supabaseAdmin` is a lazy Proxy** (constructed on first use, so `next build` doesn't need Supabase env); `createSupabaseServerClient()` |
| `apps/web/src/lib/crypto-utils.ts` | PBKDF2-SHA256 (600k iterations); auto-rehash on login |
| `apps/web/src/lib/redis.ts` | Upstash client — needs `UPSTASH_REDIS_*` env vars |
| `apps/web/src/lib/audit.ts` | Admin audit log — `logAdminAction()` → `audit:log` Redis list |
| `apps/web/src/lib/access.ts` | Server-only tier gate — `getUserTier()`, `canAccessStage()` |
| `apps/web/src/lib/difficulty.ts` | Adaptive difficulty engine — `computeStageScore()`, `computeBonusXp()`, `getRecommendedNext()` |
| `apps/web/src/app/api/progress/route.ts` | GET reads identity from auth (not query param); POST awards stage in Redis |
| `apps/web/src/app/api/auth/bootstrap/route.ts` | Provisions a Redis record for Supabase-only (mobile) accounts; email-keyed, `SET NX` |
| `apps/web/src/app/api/redeem/route.ts` | POST redeem voucher — atomic SADD dedup + HINCRBY supply |
| `apps/web/src/app/certs/page.tsx` | Cert readiness rings (10 certs), per-domain progress |
| `apps/web/src/app/admin/page.tsx` | Admin dashboard — fixed left-nav sidebar; anchored sections |
| `apps/web/next.config.ts` | Static security headers + secured-docs file tracing + `transpilePackages: ["@kryptos/core"]`. CSP set dynamically in middleware |
| `apps/web/secured-docs/` | Admin-only docs — never move to public/ |

---

## Adding a New Epoch — Checklist

1. Create `packages/core/src/<epoch-id>.ts` — export `<name>Epoch: EpochConfig` and `<name>Stages: StageConfig[]` (import types from `./types`)
2. Add import + epoch entry + stage spread to `packages/core/src/stages.ts`
3. Add `epochAccent`, `cardBorder`, `cardEmojiBg` entries to `apps/web/src/app/stages/epoch-theme.ts`
4. Add epoch ID to the appropriate group in `epochGroups` in `apps/web/src/app/stages/page.tsx`
5. **Regenerate client metadata:** `npm run gen:meta -w @kryptos/core` (rebuilds `packages/core/src/stages-meta.generated.ts` — the client-safe metadata; CI `check:meta` fails if you forget). Client/listing pages read `@kryptos/core/stages-meta`, NEVER the heavy `stages.ts` barrel.
6. **If the epoch defines CTF `extraCommands`:** add an `epochId → () => import("./<file>")` entry to `LOADERS` in `packages/core/src/stage-commands.ts` (lazy per-epoch loader). Without it, the CTF terminal's extra commands silently won't resolve. (This is what keeps the play page first-load free of the content barrel.)
7. From repo root: `npm run build` (turbo) + `npx tsc --noEmit --skipLibCheck -p apps/web/tsconfig.json`

---

## Environment Variables (Required)

Set in Vercel → Project → Settings → Environment Variables:

```
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
RESEND_API_KEY
ADMIN_EMAIL
ADMIN_USERNAME
ADMIN_SECRET              ← 32+ char random string for HMAC cookie signing
SESSION_SECRET            ← 32+ char random string for session token signing (separate from ADMIN_SECRET)
ANTHROPIC_API_KEY         ← Claude Haiku for ARIA chatbot
STRIPE_SECRET_KEY         ← Stripe secret key (sk_live_... or sk_test_...)
STRIPE_WEBHOOK_SECRET     ← Stripe webhook signing secret (whsec_...)
STRIPE_PRO_MONTHLY_PRICE_ID  ← Stripe price ID for $13.99/mo
STRIPE_PRO_YEARLY_PRICE_ID   ← Stripe price ID for $99/yr
SUPABASE_URL              ← Supabase project URL (server-side; read in src/lib/supabase.ts)
SUPABASE_ANON_KEY         ← Supabase anon key (server-side; used by the SSR client)
SUPABASE_SERVICE_ROLE_KEY ← Supabase service role key (server-side only; privileged)
REVENUECAT_WEBHOOK_AUTH   ← shared secret for the RevenueCat (mobile IAP) webhook; matches the RC dashboard Authorization header
CRON_SECRET               ← Vercel Cron bearer for /api/push/streak-reminder (daily streak push)
```

Local dev: `.env.local` in `app/` (gitignored).

---

## API Routes

| Route | Purpose |
|---|---|
| `POST /api/auth/register` | Server-side PBKDF2 registration; sets session + admin cookies; parallel Supabase account |
| `POST /api/auth/bootstrap` | Provisions a Redis user record for Supabase-only (mobile) accounts; keyed to verified email; idempotent, `SET NX` username claim; rate-limited 30/min/IP |
| `POST /api/auth/login` | PBKDF2 login with 5-attempt lockout (15 min); auto-rehash to 600k iterations; Supabase parallel |
| `DELETE /api/auth/session` | Clear session cookie (logout); Supabase signOut |
| `GET /api/auth/me` | Returns `{ username, email, isAdmin }` from session cookie |
| `POST /api/admin-session` | Issue admin HMAC cookie |
| `GET /api/docs/[file]` | Serve secured-docs (admin only) |
| `POST /api/forgot-password` | Send reset email (rate: 3/IP/15min) |
| `GET/POST /api/progress` | Fetch/update Redis progress |
| `GET /api/progress/certificate` | Server-rendered PDF via @react-pdf/renderer |
| `GET /api/leaderboard` | Top XP rankings (daily/weekly/alltime); rate limited 30 req/min/IP |
| `POST /api/feedback` | Store user feedback |
| `POST /api/check-flag` | Validate CTF flag server-side |
| `POST /api/check-answer` | Validate quiz answer server-side |
| `POST /api/hint` | ARIA AI hint (Claude Haiku, adaptive cooldown for Pro) |
| `POST /api/nda` | Record NDA acceptance; GET returns admin list |
| `GET /api/trophies` | Admin: full library + claimed counts. User: daily 10 shop rotation + owned |
| `POST /api/trophies` | Buy trophy — atomic Redis INCR supply check |
| `POST /api/stripe/checkout` | Create Stripe checkout session (monthly/yearly); returns `{ url }` |
| `GET /api/stripe/portal` | Redirect to Stripe customer portal |
| `POST /api/webhooks/stripe` | `checkout.session.completed` → tier=pro; `subscription.deleted` → tier=free; clears voucherExpiry |
| `POST /api/webhooks/revenuecat` | Mobile IAP (RevenueCat) — auth-header verified; grant events → tier=pro + rcProExpiry; EXPIRATION → tier=free. `app_user_id` = username |
| `POST/DELETE /api/push/register` | Store/clear the caller's Expo push token in `push:tokens` hash (auth required) |
| `GET /api/push/streak-reminder` | Vercel Cron (daily, `CRON_SECRET` bearer) — pushes streak-at-risk nudges via Expo Push API; `apps/web/vercel.json` schedules it |
| `GET /api/admin/users` | Admin: list all users with tier, coins, stages, badges, streak |
| `POST /api/admin/set-tier` | Admin: set tier (pro/free/all-star); audit logged |
| `POST /api/admin/set-group` | Admin: set user group (career/curious); audit logged |
| `POST /api/admin/set-skin` | Admin: set user avatar skin; audit logged |
| `POST /api/admin/grant-admin` | Admin: promote user to admin; audit logged |
| `POST /api/admin/award-stage` | Admin: manually award stage completion; audit logged |
| `GET /api/admin/cms/stage/[stageId]` | Admin: get CMS override for a stage |
| `POST /api/admin/cms/stage/[stageId]` | Admin: save CMS override for a stage |
| `GET /api/admin/vouchers` | Admin: list all voucher codes (requires admin token) |
| `POST /api/admin/vouchers` | Admin: generate voucher codes (requires admin token); audit logged |
| `PATCH /api/admin/vouchers` | Admin: revoke a voucher code; audit logged |
| `POST /api/redeem` | Redeem voucher — atomic SADD dedup + HINCRBY; sets tier=pro + voucherExpiry |
| `GET /api/admin/downloads-access` | Admin: get downloads access setting |
| `POST /api/admin/downloads-access` | Admin: set downloads access (Off/Allowlist/All); per-user toggles (requires admin token) |
| `POST /api/survey` | Store survey response in Redis; awards 30-day Pro to free/trial users (one-time) |
| `POST /api/resume/generate` | Generate PDF resume with epoch-based skills; returns PDF buffer |
| `DELETE /api/delete-account` | Purge user from Redis (user/progress/streak/leaderboard/nda + email index) and delete the parallel Supabase auth account |

---

## Security Posture (v1.17.0+)

- Passwords: PBKDF2-SHA256, **600k iterations** (OWASP 2024); auto-rehash on login upgrades legacy users
- Sessions: HMAC-signed HttpOnly cookies (session_token 30d, admin_token 24h)
- **Account lockout:** 5 failed login attempts → 15-min lock per username (`lockout:user:{username}`)
- No credentials in localStorage — eliminated entirely
- All flag/answer/XP validation server-side
- Rate limiting on all auth + email endpoints; leaderboard rate-limited (30 req/min/IP)
- Admin routes require HMAC `admin_token` (not just session cookie) — vouchers, downloads-access, etc.
- HSTS, X-Frame-Options, X-Content-Type-Options set in `next.config.ts`
- Nonce-based CSP (per-request) — `src/proxy.ts` generates nonce; no `unsafe-inline` in script-src
- **Admin audit log** — all mutating admin actions (set-tier, grant-admin, vouchers, award-stage, CMS, etc.) written to Redis `audit:log`
- Stripe checkout origin-whitelisted to kryptoscronos.com + localhost
- Survey GET admin-token guarded; downloads-access admin-token guarded
- Login: admin username no longer exempt from IP rate limiting

---

## Supporting Services

| Service | Role |
|---|---|
| **Vercel** | Hosting, CDN, serverless |
| **Upstash** | Serverless Redis (progress, leaderboard, sessions, survey, audit log, vouchers) |
| **Resend** | Transactional email |
| **GitHub** | Source control + CI (Actions: lint + tsc + build) |
| **Anthropic** | Claude Haiku for ARIA AI chatbot |
| **Stripe** | Payment processing — Pro subscriptions (monthly/yearly); voucher expiry cleared on subscription.deleted |
| **Supabase** | Parallel auth (parallel PBKDF2 migration; v1.15.0+) |

---

## Business Context

- **Stage:** Pre-seed, seeking $1.5M seed round
- **Legal entity:** Bolotin Enterprises, Inc. — Delaware C-Corp (incorporated May 23, 2026)
- **Domain:** kryptoscronos.com
- **Model:** B2C 7-day free trial → Pro ($13.99/mo or $99/yr) + B2B enterprise ($8/seat/mo) + sponsor integrations + voucher distribution
- **Target sponsors:** CrowdStrike, AWS, SentinelOne, CompTIA, ISC²

---

## What's Shipped (v1.43.0)

- ✅ **Deep-tech & analyst content sprint — 5 new epochs (50 stages).** Added **`ot-sec` Operational Technology** (ICS/SCADA — new top-level track), **`vehicle-sec-2` Wired & Autonomous II**, **`robot-sec-2` Robotics II**, **`space-race-2` Race Through Space II**, and **`threat-frameworks` Threat Frameworks** (Kill Chain · Diamond · ATT&CK · Pyramid of Pain · D3FEND · STIX/TAXII). Each is 6 CTF + 4 quiz with full briefings.
- ✅ **CTFs added to 30 existing quiz stages** (physics-of-hacking, emerging-tech, quantum-5) — terminal CTF + flag each, quizzes kept as half-clear. `validate-ctf.mjs` = **292 CTFs, 0 problems**.
- ✅ **Race Through Space / Wired & Autonomous / Robotics split into their own `/stages` track sections** (out of "Defend the Enterprise"); renamed the robotics epoch "Machines That Move" → **Robotics**.
- ✅ **Counts:** **801 stages · 72 epochs · 16 tracks · 12 cert paths.** Homepage stats, OG/Twitter meta, and account page refreshed; added an OT card to the homepage domain grid.
- ✅ **Imagery:** 29 free-licensed self-hosted hero photos for the new OT/Vehicle-II/Robotics-II/Space-II stages (credited on `/attribution`); conceptual stages keep the deterministic `GeneratedCover`. Reusable fetcher at `apps/web/scripts/fetch-stage-images.mjs`.

## What's Shipped (v1.36.0)

- ✅ **Flag Football split into 3 epochs.** The 20-stage `flag-football` epoch was split into **`flag-football-1` Foundations** (flag-01–10) and **`flag-football-2` Advanced Play** (flag-11–20) — stage ids/images/progress preserved, only epoch + order remapped (via slice/map in `flag-football.ts`). Added a third, **`flag-football-3` Playbook & Competition** (10 new quiz stages, flag-21–30): building/calling a playbook, red-zone & no-run-zone scoring, beating the blitz, trick plays, designed defensive pressure, scouting/film, practice design, season conditioning/periodization, and tournament/championship play. All three sit in the "Flag Football" extended track (emerald/teal/green). 10 new free-licensed Commons photos credited on `/attribution`. Counts 741→751 stages / 65→67 epochs.

## What's Shipped (v1.35.0)

- ✅ **New epoch `flag-football` — "Flag Football"** (20 quiz stages, flag-01→flag-20, emerald; new **"Flag Football"** extended track, own group on `/stages`). Foundations (1–10: rules, field, flag-pulling, throwing, catching, routes, offense/defense basics, agility) then deep **high-school level** (11–20: formations & motion, QB reads, receiver craft, route concepts, defensive coverages, the 7-yd pass rush, misdirection, defensive strategy, athletic development, game IQ + the LA 2028 Olympic pathway). Category "sports", 4-question quizzes, ASCII field/route/coverage diagrams. New i18n keys (stages.tracks.flagFootball/Desc) + TRACK_STYLE (🏈). 20 free-licensed Commons photos, credited on `/attribution`. Counts 721→741 stages / 64→65 epochs.

## What's Shipped (v1.34.0)

- ✅ **New epoch `robot-sec` — "Machines That Move"** (10 stages, robot-01→robot-10, orange; *Defend the Enterprise* track). Robotics/robot security, **6 CTF + 4 quiz**, completing the 2-epoch cyber-physical arc (with vehicle-sec). CTFs: ROS/DDS graph injection (02), industrial robot-arm/HMI takeover (03), drone MAVLink hijack (04), teleoperation channel seizure (05), adversarial-patch perception attack (06), firmware/supply-chain backdoor (09). Quizzes: robot anatomy (01), humanoid/service robots & backdoors (07), functional safety / when security breaks safety (08), securing autonomous systems (10). Real anchors (ROS exposure, Rogue Robots, MAVLink, Raven II telesurgery, adversarial patches, Unitree backdoor, ISO 10218/15066, IEC 62443, RVD). 6 flags in `stage-flags.ts`; all CTFs pass `validate-ctf.mjs` (232 CTFs, 0 problems). 10 free-licensed Commons photos, credited on `/attribution`. Counts 711→721 stages / 63→64 epochs.

## What's Shipped (v1.33.0)

- ✅ **New epoch `vehicle-sec` — "Wired & Autonomous"** (10 stages, vehicle-01→vehicle-10, lime; *Defend the Enterprise* track). EV/connected/self-driving vehicle security, **6 CTF + 4 quiz**, first of a 2-epoch cyber-physical arc (robotics next). CTFs: CAN-bus injection (02), UDS seed-key brute (03), keyless relay/RollJam (04), EV-charging OCPP hijack (05), telematics→CAN remote pivot / Jeep-style (07), ADAS sensor-spoof phantom brake (08). Quizzes: connected-car architecture (01), the BMS (06), OTA & supply chain (09), fleet APIs & defense (10). Real anchors (CAN, UDS, RollJam, OCPP/ISO 15118, 2015 Jeep hack, Keen Lab/Phantom ADAS spoofing, Sam Curry's auto-API research). 6 flags in `stage-flags.ts`; all CTFs pass `validate-ctf.mjs` (226 CTFs, 0 problems). 10 free-licensed Commons photos, credited on `/attribution`. Counts 701→711 stages / 62→63 epochs.

## What's Shipped (v1.32.0)

- ✅ **New epoch `space-race` — "Race Through Space"** (10 stages, space-01→space-10, violet; in the *Defend the Enterprise* track beside physics-of-hacking). Deep-tech space-systems hacking themed on the current space race: **6 CTF + 4 quiz**. CTFs: Viasat/AcidRain ground-segment wiper (space-02), GNSS spoofing (space-03), telecommand link takeover (space-04), CCSDS telemetry decoding (space-05), ground-station supply-chain pivot (space-06), MIL-STD-1553 onboard-bus injection (space-07). Quizzes: orbits/links/segments (01), Starlink & user terminals (08), counterspace/ASAT/Kessler (09), securing the constellation era (10). 6 flags added to `stage-flags.ts`; fragments assemble to each flag; all CTFs pass `scripts/validate-ctf.mjs` (220 CTFs, 0 problems). Real NASA/ESA public-domain + CC imagery (10 photos) self-hosted, credited on `/attribution`. Counts 691→701 stages / 61→62 epochs.

## What's Shipped (v1.31.0)

- ✅ **Silicon manufacturing epoch — `silicon-fab` "Silicon: Sand to Superchips"** (10 quiz stages, si-01→si-10, sky; in the Core Security track beside computing-foundations). The end-to-end story of how modern GPU and quantum chips are made: sand→9N silicon & the Czochralski boule, wafers & the cleanroom, photolithography, EUV (tin-plasma 13.5 nm), doping & ion implantation, deposition/etch & copper damascene, FinFET→gate-all-around (the "nm" myth), giant AI GPUs (reticle limit, chiplets, HBM, CoWoS 2.5D/3D packaging), yield/binning/fab economics, and quantum-chip fabrication (superconducting/trapped-ion/silicon-spin, decoherence, post-quantum link). Light hardware-trust/supply-chain security seeds throughout. Counts 681→691 stages / 60→61 epochs (the true registered totals; prior docs had drifted to 683/55 and 681/58).

## What's Shipped (v1.30.0)

- ✅ **Certification coverage audit.** Validated all 12 cert paths against official exam objectives and closed objective-level gaps with 2 new epochs (19 stages), each cert-mapped: **Security Foundations** (13 — controls/frameworks, physical security, change mgmt, BCDR, crypto, IAM, data protection, awareness, network media/troubleshooting, SOC reporting, quantitative risk, SDLC) and **AI & ML Foundations** (6 — ML fundamentals, data prep, training/eval, generative AI/foundation models, MLOps, cloud AI platforms). Every cert domain now has ≥5 stages. Audit tracked in docs/CERT_COVERAGE_AUDIT.md. Counts 662→681 stages / 56→58 epochs.

## What's Shipped (v1.29.1)

- ✅ **Baseball position exemplars → Dodgers.** Reworked each new position epoch's hall-of-fame anchor to a Dodgers great (Catcher → Mike Piazza, 1B → Freddie Freeman, 2B → Jackie Robinson, 3B → Adrián Beltré, LF → Zack Wheat, RF → Mookie Betts), with accuracy-preserving rewrites of incidents, timelines, venues, and quizzes. SS (Ozzie Smith) and CF (Ken Griffey Jr.) kept by request; Pitcher already Dodgers (Kershaw/Koufax).

## What's Shipped (v1.29.0)

- ✅ **Baseball position curriculum.** One full epoch per position. Added 8 new 10-stage epochs — Catcher, First Base, Second Base, Third Base, Shortstop, Left Field, Center Field, Right Field (80 stages / 320 quiz Qs) — each on how to play the spot, practice, body/footwork, reading the play, cutoffs/relays, and backups/positioning for every situation, anchored by a hall-of-fame exemplar.
- ✅ **Pitcher consolidation (non-destructive).** Merged the 3 pitcher epochs (Art of Pitching + Pitch Arsenal + Pitching Strategy) into one 30-stage **Pitcher** epoch (`baseball-5`); stage ids/images/progress preserved, `epochId`+`order` remapped 1→30, content-flags collapsed.
- ✅ **Counts:** 582 → **662 stages**, 50 → **56 epochs** (merge −2, new +8), 11 tracks. Homepage stat updated. Full /deploy (tsc + web lint + audit gates).

## What's Shipped (v1.28.0)

- ✅ **Debate Mastery exam (`/exam/debate`)** — 30 randomized Qs from the 320-question debate pool (all 8 domains), 30-min timer, 75% pass, server-graded; same engine as the cert/DMV exams. "Exam" CTA on the `/debate` tracker. New `debate` mode in `exam-banks.ts` + `api/exam`.
- ✅ **Platform-wide image self-hosting** — Wikimedia killed on-demand thumbnail hotlinking, breaking all stage images. Migrated to **290 self-hosted assets** in `public/` (77 per-stage debate + 213 other tracks), driven by `STAGE_IMAGES` (`apps/web/src/lib/stage-images.ts`) which overrides the old config URLs; `StageInfo` falls back to a branded placeholder (`/stage-placeholder.svg`) on error. Recompressed with sharp **88 MB → 21 MB**; stripped all 214 dead `image:` URLs from the configs.
- ✅ **Homepage stats** corrected to 582 stages / 11 tracks.

## What's Shipped (v1.27.0)

- ✅ **Debate & Speech track — 8 epochs / 80 stages / 320 quiz questions** (`debate-1`…`debate-8`): Foundations · Argumentation & Logic · The Formats · Research & Case Construction · Clash · Rhetoric, Delivery & Persuasion · Competitive & Professional Mastery (NSDA degrees, Toastmasters, WUDC/WSDC, the TOC) · The Psychology of Debate (Kahneman/Cialdini/McGuire/Damasio/Dweck). New "Debate & Speech" extended track group on `/stages`
- ✅ **`/debate` skill-and-credential tracker** — `/certs`-style per-domain progress + an NSDA-style degree ladder (Merit→Premier Distinction, by stages completed) + real-credential reference cards (NSDA/Academic All American, Toastmasters Pathways/DTM, NDT/CEDA/NPDA/AFA, WUDC/WSDC, TOC). `packages/core/debate-domains.ts`; banner on every debate epoch page
- ✅ **ARIA hint monetization** — `/api/hint` gates by tier: free = 5 hints/mission (persistent Redis count, refresh-proof) + fixed cooldown; Pro/trial = unlimited + adaptive cooldown. `402 {upgrade}` + `hintsRemaining`; `HintChatbot` shows remaining count + Upgrade CTA. Dormant under `OPEN_ACCESS`
- ✅ **Security hardening** — centralized admin token into `lib/admin-token.ts` (pure/Edge-safe) + `lib/admin-auth.ts` (`requireAdmin`, Redis revocation); **v2 token** `v2.<user>.<iatMs>.<hmac>` with 8h expiry replacing ~15 inline verifiers; `grant-admin` revokes live cookies on de-admin. Plus fixes: admin-session takeover bypass (session-derived identity), progress forgery (rejects stageFlags stages), hint/redeem/check-flag rate limits, constant-time flag compare, neutralized bonus-XP timing, centralized client-IP/rate-limit helpers
- ✅ **CR7 extended-track spot-check** — fact-vetted French/Italian/Driving/Travel/Crafts; fixed a `baseball-2` timeline bug (literal `, highlight: false` shown in event text)
- ✅ Counts: **50 epochs / 582 stages**; docs reconciled (README/CURRICULUM/ARCHITECTURE/pitch decks) from the stale 458/38 figure

## What's Shipped (v1.26.0)

- ✅ **Cross-platform.** Turborepo monorepo (`apps/web` + `apps/mobile` + `packages/core` + `packages/api-client`); native Expo/RN app (Supabase login, stages, quiz, ARIA, upgrade) authing via bearer JWT against `/api/v1`
- ✅ **JWKS bearer verification** (`jose`, local verify + `getUser()` fallback); identity from verified email claim
- ✅ **Mobile billing & multi-source entitlement** — RevenueCat IAP + `/api/webhooks/revenuecat`; `getUserTier()` grants Pro from any of `proStripe`/`rcProExpiry`/`voucherExpiry`, revokes only when none active
- ✅ **Push** — `/api/push/register` (Expo tokens) + `/api/push/streak-reminder` Vercel Cron (`CRON_SECRET`)
- ✅ **Single-branch workflow** (`dev` retired) + **Plausible analytics** (cookieless, CSP-allowlisted)
- ✅ New env vars: `REVENUECAT_WEBHOOK_AUTH`, `CRON_SECRET`

## What's Shipped (v1.25.0)

- ✅ **Mobile roadmap Phase 1 — multi-client token auth (backend).** API now accepts `Authorization: Bearer <supabase-jwt>` (mobile) alongside the HMAC session cookie (web), via new `getAuthedUsername()` (`src/lib/api-auth.ts`)
- ✅ **Spoof-safe identity** — `verifySupabaseJwt()` resolves the username from the token's verified **email** claim → `email:{email}` index, never from user-editable `user_metadata`
- ✅ **`POST /api/auth/bootstrap`** — provisions Redis records for Supabase-only (mobile) accounts; idempotent, email-keyed, `SET NX` username claim, rate-limited
- ✅ **16 gameplay routes migrated** to the bearer-aware resolver; admin + Stripe routes unchanged. **CORS** for `/api` (origin-allowlisted, credential-less, OPTIONS preflight) in `proxy.ts`
- ✅ Verified live: preflight 204 + CORS headers; bogus bearer → 401; disallowed origin not reflected. Plan: `MOBILE_ROADMAP.md`

## What's Shipped (v1.24.0)

- ✅ **AI cloud certifications on `/certs`** — added AWS Certified AI Practitioner (AIF-C01, 5 domains, rose card) and Google Cloud Professional ML Engineer (PMLE, 6 domains, green card); tracked-cert count now 10 + CyberOps tracker
- ✅ **AWS AIP mapped to 49 AI-native stages** — all MITRE ATLAS, OWASP LLM, Emerging Tech, Agentic AI audit, plus Cisco AI-security m42/m43/m50; **GCP PMLE mapped to ~33 ML-lifecycle stages** across ATLAS/LLM/Emerging + agentic/continuous-monitoring audit
- ✅ **`AI_PLATFORM_CERT_DOMAINS`** — new `aws-aip`/`gcp-pmle` `CertId`s + domain defs + builder fns in `cert-domains.ts`; mappings in a self-contained table merged into `CERT_DOMAINS` at module load (additive, leaves the security-cert table untouched); quantum/crypto + pure-security stages excluded for ring credibility
- ✅ **Practice exams auto-populate** — both certs draw pools from mapped stages' quizzes via `getStagesForCert`; allowlisted in `api/exam/route.ts` + `exam/cert/[certId]/page.tsx`; no new API routes/Redis keys/env vars

## What's Shipped (v1.23.0)

- ✅ **Dual-mode quiz rollout COMPLETE — 203/203 CTF stages.** Every `challengeType: "ctf"` stage now has an 8-question MCQ `stage.quiz` alongside the CTF (Quiz = cosmetic half-clear / 0 XP / no unlock; CTF = full clear). Final 69 stages shipped this release: quantum-3 (c01–c10), quantum-4 (d01–d10), cisco-2 (m13–m25), cisco-3 (m26/m28/m30), cisco-4 (m34/m36/m37), cisco-5 (m39/m41/m42/m44/m46/m48/m50), umbrella (01–10), ancient stages.ts (stage-01–12 + stage-m12). Authored via idempotent `app/scripts/inject-quizzes.mjs`; tracker at repo-root `QUIZ_ROLLOUT.md`
- ✅ **New brand logo** (`src/components/Logo.tsx`) — guilloché watch-dial mark (4:21 hands, cyan→indigo gradient, dark-purple ring + cyan bezel); replaces 🛡️ emoji in Nav/footer/login/onboarding + favicon (`src/app/icon.svg`); gradients use `gradientUnits="userSpaceOnUse"`
- ✅ **Playable homepage hero** (`src/components/HomeCtfDemo.tsx`) — interactive mini-CTF terminal (ls → cat → submit flag) with `hint` command + suggestion chips; replaces static terminal
- ✅ **Certs UX** — sticky left-sidebar jump-nav, CyberOps first/featured, `max-w-6xl`, Resume moved into certs "Career" section (removed from top nav)
- ✅ **Content formatting** — `RichText.tsx` renders backtick `` `code` `` → cyan mono pills and `'single-quoted'` → restrained amber pills; `RichParagraph` lead colors chilled (sky/pink 80%); bulleted-with-dialogue reformat begun on tech-audit-3 (audit-a07/a01) — see `CONTENT_REFORMAT.md`

## What's Shipped (v1.22.0)

- ✅ **quantum-4 epoch — Quantum Risk Management** (10 CTF stages, quantum-d01..d10, emerald): CBOM / Cryptographic Bill of Materials, Harvest Now Decrypt Later (HNDL) threat assessment, NIST FIPS 203/204/205 deployment, CNSA 2.0 NSS mandate, CISA migration roadmap (5-phase), sector risk (finance/healthcare/SCADA/blockchain), board briefing + SEC disclosure, hybrid cryptography (X25519+ML-KEM-768), quantum-safe architecture (crypto agility, Let's Encrypt model), third-party quantum supply chain risk
- ✅ **emerging-tech epoch — Emerging Tech & Deep Learning Risk** (10 quiz stages, emerging-01..10, violet): adversarial examples + physical-world attacks, foundation model supply chain (BadNets, pickle RCE), federated learning gradient inversion + DP-SGD, deepfakes + C2PA + $25M Hong Kong fraud, AI-augmented threat actors (nation-state LLM use), edge AI model extraction + TEE defense, EU AI Act + NIST AI RMF + CFPB ECOA governance, agentic AI + MCP prompt injection, quantum-AI convergence (NISQ era + CRQC HNDL risk to models), ERM integration (WEF #1 risk, scenario planning, KRIs)
- ✅ **cert-domains** — quantum-d01..d10 and emerging-01..10 mapped to CISA/CISM/CRISC/AI+; quantum-01..10 and quantum-b01..b10 merged with CompTIA AI+ domains (eliminated duplicate section); AI+ stage count now 97 stages
- ✅ 458 stages total, 38 epochs (now **502 / 42** by runtime count: + quantum-5, quantum-intro, quantum-deep, computing-foundations, physics-of-hacking; prior headline figures were slightly stale — verified via transpiled stages-meta)

## What's Shipped (v1.21.0)

- ✅ **Full security stage rewrite sprint** — 8 epochs upgraded to HS/University standard: cisco-enterprise (m13–m25), cisco-secops (m26–m38), cisco-advanced (m39–m50), mitre (mitre-01..12), mitre-atlas (atlas-01..12), owasp-llm (llm-01..12); 3-paragraph historically-grounded incidents with attribution, STEP/DETECTION/REMEDIATION code blocks
- ✅ **CompTIA AI+ cert path (/certs)** — sky-blue card, 5 domains (AI Security 30%, Data Science 20%, AI Models 20%, AI Concepts 15%, AI Infrastructure 15%), 67 stages mapped: all atlas-01..12, all llm-01..12, all 30 quantum stages, cisco-advanced m42/m43/m50
- ✅ Fixed CI build — removed dead `adminUser` variable in login route, excluded fix scripts from ESLint flat config; 0 errors

## What's Shipped (v1.20.0)

- ✅ **cisco-core (m01–m12) + ancient (01–12) stage rewrites** — all 24 stages rewritten to HS/University standard: 3-paragraph historically-grounded overviews, exact exploit mechanics, incident sections with nation-state attribution (GRU, NSA/Shadow Brokers, Iranian APT, Chinese APT)
- ✅ **ISACA cert paths (/certs)** — CISA (5 domains, yellow), CISM (4 domains, purple), CRISC (4 domains, teal); salary ranges $95k–$175k; all security stages mapped
- ✅ Group system simplified to `["career", "curious"]` — DEFAULT_GROUPS = both; all users see security + extended curriculum
- ✅ StageInfo code comment dimming — `#`, `//`, `/*` lines render at 38% opacity vs 100% for code

## What's Shipped (v1.19.0)

- ✅ Docs full refresh — CLAUDE.md corrected to v1.18.1 facts; RELEASE_NOTES recovered 6 missing versions (v1.12.1 through v1.18.1)
- ⚠️ Elementary redesign — logged as shipped in error; bt-01..bt-30 remain HS/adult-level and still need the ages 5–10 rewrite (open — see Genuine Remaining Work)
- ✅ Network+ N10-009 and CySA+ CS0-003 cert paths added to /certs; all security stages remapped
- ✅ Deep security review — CSPRNG fix, survey payload size limit, harsh VC assessment v3.0
- ✅ All-star tier removed from admin panel and tier logic

## What's Shipped (v1.18.1)

- ✅ HOURS_LOG.md added — session hours + cost tracking; wired into admin docs panel (⏱ Hours & Cost tab); deploy skill updated with step 10 (log hours + cost after every session)

## What's Shipped (v1.18.0)

- ✅ **Images for all stages** — 154 new Wikimedia Commons images: baseball (70 stages, all 7 epochs), driving (24 stages), quantum (30 stages — Bloch sphere, IBM Q, BB84, lattice diagrams), nails/hair (30 stages — nail anatomy, hair microscopy, styling tools)
- ✅ **Certificate paths (/certs)** — `src/data/cert-domains.ts`: 230+ stages mapped to CompTIA Security+ SY0-701 (6 domains) + ISC² CC (5 domains); dual readiness rings, per-domain progress bars, salary ranges, exam CTAs; banner on /stages + security epoch pages
- ✅ **Resume builder (/resume)** — multi-section form: personal info, headline, summary, skills, experience, education; skills auto-suggested from completed training epochs; `POST /api/resume/generate` → PDF via @react-pdf/renderer with Kryptós achievements
- ✅ **Incentive system** — survey completion → 30-day Pro access (idempotent via `survey:rewarded:{user}` key); survey success screen shows "Pro Unlocked!"; streak milestone coin bonuses: 3-day +50🪙, 7-day +150🪙, 30-day +500🪙 (awarded once per milestone)
- ✅ Docs updated to v1.17.0 facts — BUSINESS_PROPOSAL_PRO/CASUAL, PITCH_TARGETS, FINANCIALS

## What's Shipped (v1.17.0)

- ✅ **OWASP Top 10 hardening audit** — downloads-access + survey GET admin-token guarded; login admin username no longer exempt from rate limiting; Stripe checkout origin-whitelisted; leaderboard rate-limited (30/min/IP)
- ✅ **Voucher fixes** — admin voucher routes require HMAC admin_token; redeem race condition fixed (SADD atomic dedup + optimistic HINCRBY with rollback); Stripe webhook clears voucherExpiry; revoke endpoint (PATCH); 365-day + 500-use options added
- ✅ **PBKDF2 600k iterations** (OWASP 2024); auto-rehash upgrades existing users on login
- ✅ **Account lockout** — 5 failed login attempts → 15-min lock per username (`lockout:user:{username}`)
- ✅ **Admin audit log** — `src/lib/audit.ts`; all mutating admin actions written to Redis `audit:log` list (max 1000 entries); displayed in admin dashboard
- ✅ Account page shows voucher expiry date for voucher-based Pro users
- ✅ Security briefing updated to v4.1

## What's Shipped (v1.16.3)

- ✅ Admin dashboard — fixed left-nav sidebar (always visible); anchor IDs on all sections for direct linking
- ✅ Voucher list — no-flicker on page refresh (SSR-safe)

## What's Shipped (v1.16.2)

- ✅ **Voucher code system** — `KRYPTOS-XXXX-XXXX` format; admin generate/list/revoke; `POST /api/redeem` for user redemption; atomic Redis SADD dedup + HINCRBY supply reservation; ProPaywall redeem input field; voucher expiry check in `getUserTier()`

## What's Shipped (v1.16.1)

- ✅ Downloads access control — admin radio (Off/Allowlist/All) + per-user toggles; `/downloads` page gated by `GET /api/admin/downloads-access`

## What's Shipped (v1.16.0)

- ✅ Security/Non-Security section headers on stages page; `/downloads` page for 24 Python MCP templates; `/survey` page with 9-question user survey + Redis storage
- ✅ Full i18n for section themes (Attack Chain / Technical Deep-Dive / Real-World Incident) in all 6 languages; FeedbackWidget fully translated
- ✅ AttackDiagram category-aware labels (STEP N for non-security); RichText `context` prop disables security highlights for arts/travel/sports
- ✅ Overview section: single font (boldLead=false); lead colors darkened (sky-400 / pink-400); module titles link to real-world incident section
- ✅ BackLink fix: StageContainer passes backHref to StageInfo reliably; admin username column widened
- ✅ Paris stages 9–20 and Milan stages 9–20: Wikimedia Commons images added
- ✅ content-flags.ts: cisco-advanced, paris-july, milan-july, french-basics, italian-basics entries added
- ✅ Docs: BUSINESS_PROPOSAL_PRO/CASUAL, PITCH_TARGETS, FINANCIALS corrected to v1.16.0 facts

## What's Shipped (v1.15.1)

- ✅ RichParagraph: boldLead=false in overview (one consistent font); sky-400/pink-400 lead colors in tech/incident sections

## What's Shipped (v1.15.0)

- ✅ Supabase Auth migration — parallel auth; register/login/logout/forgot-password/reset-password all wired to Supabase; PBKDF2 fallback + transparent migration; all existing sessions unchanged

## What's Shipped (v1.14.0–v1.14.1)

- ✅ DocuSign NDA removed — clickwrap at /demo retained; lib, routes, admin send form all cleaned
- ✅ `/cyberops` — CyberOps Associate exam readiness dashboard; `cyberops-domains.ts` maps 50 Cisco/Umbrella stages to CBROPS 200-201 domains

## What's Shipped (v1.13.0–v1.13.1)

- ✅ StageInfo visual redesign — wonder hero, CVSS bar, pull-quote overview, section color identities, numbered takeaway badges, gradient CTA
- ✅ Category-aware section labels — 5 category themes with distinct icons and colors
- ✅ RichText auto-highlighter — CVEs, quoted terms, figures, versions, CVSS, SQL, file paths, IPs

## What's Shipped (v1.12.0)

- ✅ Adaptive difficulty engine (`src/lib/difficulty.ts`) — score-based XP bonus (+20% for clean solves ≥80); adaptive ARIA cooldown for Pro; Recommended Next stage in FlagSuccessModal; wrong attempt + hint usage tracking in Redis

## Trophy System Notes

- Redis key `trophy:claimed:{id}` — atomic INCR/DECR for supply reservation
- Daily shop: seeded Fisher-Yates shuffle using `hashString(username + dayNumber)`; 10 trophies, refreshes at UTC midnight
- Admin bypasses daily rotation check on purchase
- Tier supply curve: Field 50k · Enlisted 10k · Commended 2.5k · Decorated 500 · Distinguished 100 · Elite 25 · Legendary 5 · Apex 1

## Voucher System Notes

- Code format: `KRYPTOS-XXXX-XXXX` (8 alphanumeric, avoids O/0/I/1 confusion)
- Redis: `voucher:{CODE}` hash, `voucher:redeemers:{CODE}` set, `voucher:index` sorted set
- Atomic redemption: SADD dedup → HINCRBY supply decrement → rollback if negative
- Stripe webhook (`subscription.deleted`) clears `voucherExpiry` to prevent downgrade conflicts
- Use cases: sponsor integrations, partner promotions, enterprise seat distribution

## Genuine Remaining Work

1. **Elementary section redesign** — bt-01–bt-30 content too advanced for 5-10 yr olds; needs kid-friendly rewrite (TODO item A — open, not started)

---

## Coding Conventions

- TypeScript strict mode — no `any` types
- Tailwind CSS for all styling — no external CSS frameworks
- Components in `apps/web/src/components/`, pages in `apps/web/src/app/`; shared content/types in `packages/core/src/` (import via `@kryptos/core/...`)
- Server-only modules (`redis`, `supabase`, `crypto-utils`, `server-session`, `api-auth`, `stage-flags`, `audit`) stay in `apps/web` (or are import-`"server-only"`); never let them into a client bundle or into `@kryptos/core`'s client-reachable graph
- REST conventions for API routes under `/api/`
- No comments unless the WHY is non-obvious
- No Co-Authored-By lines in git commits
- When editing docs, always sync `docs/` → `apps/web/secured-docs/` for updated files (`cp docs/*.md apps/web/secured-docs/`)
- New `.md` docs require: API allowlist entry in `apps/web/src/app/api/docs/[file]/route.ts` + DocsViewer tab in `apps/web/src/components/DocsViewer.tsx` + file placed in `apps/web/secured-docs/`
