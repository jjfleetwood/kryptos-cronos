# Kryptós CronOS — Cross-Platform / Mobile Roadmap

**Status:** Planning
**Created:** 2026-06-03
**Goal:** Take Kryptós CronOS from a web app to a real, sellable cross-platform product — Next.js web + Expo (React Native) mobile, sharing one backend, monetized via RevenueCat (mobile IAP) + Stripe (web).

> **Cardinal rule:** Do not build the mobile app until the backend can serve it cleanly (Phase 1). Each phase unblocks the next.

---

## Why this architecture (and not the cheaper options)

The good news: ~80% already exists. The backend (Next.js API routes + Upstash Redis + Supabase Auth + Anthropic + Stripe) is effectively a REST backend a mobile client can consume, and the 458 stages are structured TypeScript data that's reusable as-is.

- **PWA / Capacitor are stopgaps, not endgames.** PWA = no store presence, weak iOS. Capacitor (thin web wrapper) ages badly and risks Apple "thin wrapper" rejection; the CTF terminal's keyboard UX fights touch. Fine to *test* with, wrong to *build a company on*.
- **Retention is native.** A learning app lives on push-driven re-engagement (streak nudges, daily challenge). The gamification layer (XP, streaks, trophies) only pays off with native push — a website can't pull that lever well.
- **Store presence = trust + discoverability** for a paid product.

**Verdict:** Turborepo monorepo → shared backend → Next.js web stays → Expo mobile app → RevenueCat (mobile) + Stripe (web) → Supabase as the single identity system.

---

## Phase 0 — Decisions & accounts (before any code)

| Decision | Recommendation |
|---|---|
| Monetization model | Accept IAP on mobile via **RevenueCat**, keep **Stripe on web**. Steer high-intent users to web checkout (higher margin); let mobile impulse-buyers use IAP. |
| Auth source of truth | **Supabase** becomes the single identity system; retire reliance on HMAC cookies for cross-platform. (Already running Supabase in parallel — this is a finish, not a start.) |
| Analytics | Swap planned Plausible for **PostHog** — web + mobile, funnels, retention cohorts, feature flags from one SDK. |
| Store accounts | Enroll now (lead time): Apple Developer ($99/yr), Google Play ($25 once). Use **Bolotin Enterprises, Inc.** for an Organization account. |

**Exit:** model chosen, store accounts enrolled, RevenueCat + PostHog accounts created.

---

## Phase 1 — Make the backend multi-client (the keystone) · ~1–1.5 wks

API routes today assume a same-origin web client with cookies. Mobile is cross-origin and token-based.

- **Token auth:** make `getServerSession()` accept **either** the HMAC cookie **or** `Authorization: Bearer <supabase-jwt>`. This is the change that lets a phone talk to the existing API.
- **Freeze the API contract:** namespace (`/api/v1/*`) or lock response shapes. Mobile apps can't be force-updated; a breaking response breaks installed apps.
- **Confirm no cookie-only dependencies** in data routes (`/api/progress`, `/api/leaderboard`, `/api/check-flag`, `/api/check-answer`, `/api/hint`). Keep XP/flag validation server-side (never trust the mobile client either).
- **In-app account deletion** already exists (`/api/delete-account`) — Apple requires it.

**Exit:** every gameplay endpoint works with a bearer token, no cookie.

### Phase 1 — STATUS: shipped v1.25.0 (2026-06-03). Remaining follow-ups:

The core keystone is done and verified live (bearer→cookie resolver, email-claim identity, `/api/auth/bootstrap`, 16 routes migrated, CORS). Open items before Phase 1 is 100% closed:

- [ ] **Positive-path E2E test with a real Supabase JWT** — only the negative path (bogus token → 401), CORS preflight, and origin-allowlist were verified live. Still need: sign in via Supabase SDK with a test account → call a gameplay endpoint with the live token → confirm identity resolves + `bootstrap` provisions a new Supabase-only user. Needs a throwaway test account (or mint one via the service-role key).
- [ ] **`getUser()` → local JWKS verification** — currently one network call to Supabase Auth per authenticated request (~50–100 ms latency, and subject to Supabase Auth rate limits at scale). Optimize to local JWT signature verification against the project JWKS (`{SUPABASE_URL}/auth/v1/.well-known/jwks.json`) once we confirm the project's signing key type. Keep `getUser()` as fallback.
- [ ] **API contract freeze / `/api/v1`** — deferred. Response shapes are stable but not namespaced/versioned. Do before the app ships (installed apps can't be force-updated; a breaking response change breaks them).
- [x] **Env var reconciliation** — ✅ done 2026-06-03. Confirmed the code reads only `SUPABASE_URL` / `SUPABASE_ANON_KEY` / `SUPABASE_SERVICE_ROLE_KEY` (server-side; no `NEXT_PUBLIC_SUPABASE_*` and no browser Supabase client). Fixed CLAUDE.md's env list and added the (previously missing) Supabase block to `app/.env.example`. ⚠️ Verify the same names are set in Vercel.
- [ ] **Document the mobile auth handshake** (for Phase 4): app does Supabase `signUp({ email, password, options: { data: { username }}})` → `signInWithPassword` → `POST /api/auth/bootstrap` with the bearer token → thereafter send `Authorization: Bearer <access_token>` on every API call; refresh the token via the Supabase SDK before expiry (~1 h).
- [ ] **Token revocation note** — a Supabase access token stays valid until expiry; the server cannot cheaply revoke a single JWT. Acceptable for short-lived tokens; revisit if longer-lived tokens are used. (Logout is client-side: drop the token + Supabase `signOut`.)

---

## Phase 2 — Monorepo extraction · ~1–1.5 wks

```
apps/
  web/        ← current app/ moves here (web client + the API stays here)
  mobile/     ← Expo app (Phase 4)
packages/
  core/       ← types, stage DATA, cert-domains, difficulty, client-safe access logic
  api-client/ ← one typed fetch layer both apps import
```

- Use **Turborepo**.
- **Critical boundary:** server-only modules (`stage-flags.ts`, `crypto-utils.ts`, `redis.ts`) stay in `apps/web` — they must NEVER land in `packages/core` (would leak flags to clients). Mirror the existing `stages.ts` (full) vs `stages-meta.ts` (client-safe) split exactly.

**Exit:** web builds/deploys unchanged from the monorepo; `packages/core` imports cleanly with zero server-only leakage.

---

## Phase 3 — Unify subscriptions · ~1 wk

So "is this user Pro?" has one answer regardless of where they paid.

- Mirror the two Stripe products ($13.99/mo, $99/yr) as App Store + Play products in RevenueCat.
- Add a **RevenueCat webhook** that writes `tier=pro/free` to Redis — exactly like the existing Stripe `checkout.session.completed` webhook.
- Make `getUserTier()` the single reconciler (Stripe entitlement OR RevenueCat entitlement OR active voucher), keyed by Supabase user id.

**Exit:** buy on web → Pro on phone; buy on phone → Pro on web; restore purchases works.

---

## Phase 4 — Mobile MVP (Expo) · ~3–4 wks

- Scaffold `apps/mobile` with **Expo + Expo Router** (file-based routing — same mental model as the App Router). **Supabase RN SDK** for auth; tokens in `expo-secure-store`.
- **Ship Quiz-mode first, defer the CTF terminal.** Every stage already has an 8-question quiz (v1.23.0) and quizzes are natively touch-friendly. The CTF terminal is keyboard/desktop-shaped — keep it on web/tablet for v1.
- MVP surface: auth → stage map → stage briefing (render the structured `overview` / `technical` / `incident` / `takeaways`) → **quiz** → leaderboard → profile/XP/streak. **ARIA tutor** ports almost free (chat UI over `/api/hint`).

**Exit:** a real user can sign up, complete quiz stages, earn XP, and appear on the leaderboard — entirely on a phone.

---

## Phase 5 — Native retention layer · ~1.5 wks

- **Push notifications** (Expo Notifications): streak-expiry nudges, daily challenge, new-content alerts. The core reason mobile beats web for a learning app.
- Offline caching of stage content, deep links, app icon/splash reusing the `Logo.tsx` watch-dial mark.

**Exit:** streak reminders measurably lift D1/D7 retention in PostHog.

---

## Phase 6 — Store launch · ~1–1.5 wks (incl. review latency)

- Review prep: privacy nutrition labels, in-app account deletion (have it), reviewer demo account, screenshots. Expo's native UI sidesteps "thin wrapper" rejection.
- **EAS Build/Submit** wired into CI (extends existing GitHub Actions). Phased rollout.
- Fires TODO items **I (launch campaign)** and **J (first paying user)**.

**Exit:** live in both stores.

---

## Phase 7 — B2B track (parallel, stays on web)

The `$8/seat` enterprise model is a **web** product: seat management, SSO (Google Workspace / SAML), admin dashboards. Mobile is the consumer channel; enterprise buyers never wanted an app. Run independently whenever a pilot (TODO item L) materializes.

---

## Cross-cutting (every phase)

- **Sentry** error monitoring on both clients.
- **PostHog** events from day one of the app.
- Keep the **content-reformat grind (CR2)** running in parallel — content quality, independent of app work, improves both clients at once.

## Timeline (solo, AI-assisted)

**~3 months to a store-launched MVP.** Critical path: Phases 1→2→3 (~3–4 wks) are prerequisites, then the app (4→5→6, ~6–7 wks). Phase 7 is opportunistic.

## Explicit non-goals

- ❌ Capacitor/PWA as the endgame (fine as a throwaway test).
- ❌ Porting the web UI to React Native — web stays Next.js.
- ❌ Building the app before Phase 1 (token auth). Everything downstream depends on it.

## Strategic note

The moat is the **content + cert-readiness mapping + AI tutor**, not the app shell — the app is distribution. The business is split: B2C (mobile retention shines) vs B2B (web admin/SSO). Build mobile *alongside* web, never *instead of* it.
