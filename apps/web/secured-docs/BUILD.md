# Kryptós CronOS — Build Guide
**Version:** 4.0
**Date:** 2026-06-03

> Turborepo monorepo: **`apps/web`** (Next.js 16 + API, deployed) · **`apps/mobile`** (Expo, not deployed by Vercel) · **`packages/core`** (`@kryptos/core` — content + types) · **`packages/api-client`** (`@kryptos/api-client`). Always install from the **repo root** (npm workspaces).

---

## Prerequisites

| Tool | Version | Purpose |
|---|---|---|
| Node.js | 20.x+ (CI uses 24.x) | Runtime |
| npm | 10+ (bundled) | Package manager + workspaces |
| Git | any | Source control |
| eas-cli | latest (mobile only) | Expo build/submit (`npm i -g eas-cli`) |

---

## Local Development Setup

### 1. Clone + install (from the repo root)

```bash
git clone https://github.com/jjfleetwood/kryptos-cronos.git
cd kryptos-cronos
npm install          # installs ALL workspaces (web + mobile + packages)
```

### 2. Web env vars — `apps/web/.env.local` (never commit)

```env
# Redis (Upstash)
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
# Auth secrets (32+ char each; SESSION_SECRET separate from ADMIN_SECRET)
ADMIN_SECRET=...
SESSION_SECRET=...
ADMIN_USERNAME=...
ADMIN_EMAIL=...
# Email / AI
RESEND_API_KEY=...
ANTHROPIC_API_KEY=...
# Supabase (auth + mobile JWT verification)
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
# Stripe (web payments)
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
STRIPE_PRO_MONTHLY_PRICE_ID=...
STRIPE_PRO_YEARLY_PRICE_ID=...
# Mobile IAP webhook + cron
REVENUECAT_WEBHOOK_AUTH=...
CRON_SECRET=...
```
See `apps/web/.env.example` for the canonical list.

### 3. Run the web app

```bash
npm run dev                 # from repo root (turbo) → http://localhost:3000
# or: cd apps/web && npm run dev
```

### 4. Run the mobile app (optional)

```bash
cd apps/mobile
cp .env.example .env        # set EXPO_PUBLIC_SUPABASE_* (+ API base, RevenueCat keys)
npx expo start              # press w (browser), or use a dev build for a device
```
RevenueCat + push need a **dev build** (`eas build`), not Expo Go. See `apps/mobile/README.md`.

---

## Scripts

From the **repo root** (Turborepo orchestrates):

| Command | What it does |
|---|---|
| `npm run build` | `turbo run build` (builds `@kryptos/web`) |
| `npm run lint` | `turbo run lint` |
| `npm run dev` | `turbo run dev` |

Per-workspace: `npm run <script> -w @kryptos/web`. Type-check: `npx tsc --noEmit --skipLibCheck -p apps/web/tsconfig.json` (web) or `cd apps/mobile && npx tsc --noEmit`.

## Pre-push verification

```bash
npm run lint -w @kryptos/web
npx tsc --noEmit --skipLibCheck -p apps/web/tsconfig.json
npm run build                 # turbo build
npm audit --audit-level=high
```
A clean build shows `ƒ Proxy (Middleware)` — confirms `apps/web/src/proxy.ts` is active.

---

## Project Structure

```
kryptos-cronos/                ← repo root (npm workspaces + turbo.json)
├── apps/
│   ├── web/                   ← Next.js 16 app + API (deployed; Vercel Root Directory)
│   │   ├── src/proxy.ts       ← middleware (NOT middleware.ts) — admin gate + CSP + CORS
│   │   ├── src/app/           ← App Router: pages + /api routes
│   │   ├── src/lib/           ← server: auth, api-auth, supabase, supabase-jwt, redis, push, access
│   │   ├── secured-docs/      ← admin-only docs (gated via /api/docs)
│   │   └── next.config.ts     ← headers + transpilePackages + /api/v1 rewrite
│   └── mobile/                ← Expo / React Native app (auth, quiz, ARIA, push, IAP)
├── packages/
│   ├── core/                  ← @kryptos/core — all stage data (72 epochs) + types
│   └── api-client/            ← @kryptos/api-client — typed cross-platform client
├── docs/                      ← this documentation suite
├── package.json · turbo.json · package-lock.json
```

---

## CI/CD

- **Single branch: `master`.** `git push origin master` → GitHub Actions (`.github/workflows/ci.yml`: `npm ci` + lint + tsc + build + audit, from the workspace root) **and** Vercel auto-deploys production. For risky changes, push a short-lived branch → Vercel Preview → fast-forward `master`.
- **Vercel:** Root Directory = `apps/web`, "Include files outside root directory" ON (for the workspace lockfile). Deploy ~60–90s.
- **Mobile:** `eas build` / `eas submit` (separate from Vercel).

---

## Troubleshooting

- **Middleware not running:** file must be `apps/web/src/proxy.ts`; build output shows `ƒ Proxy (Middleware)`.
- **Auth failing:** confirm `UPSTASH_REDIS_*`, `ADMIN_SECRET`, `SESSION_SECRET`, `SUPABASE_*` set in Vercel.
- **Mobile dev server crash on `expo start`:** ensure `expo-router` is pinned to the version matching `@expo/cli` (see `apps/mobile/package.json`); Expo Go can't host SDK 56 → use a dev build.
- **ARIA down:** confirm `ANTHROPIC_API_KEY`; rate limit 15/IP/15min.
- **Build pulls mobile deps on Vercel:** expected (workspace install); harmless — only `apps/web` is built.
