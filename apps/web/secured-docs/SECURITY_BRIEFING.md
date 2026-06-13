# Kryptós CronOS — Security Briefing
**Classification:** Internal  
**Version:** 5.9  
**Date:** 2026-06-08  
**Current version:** v1.46.0  ·  **Last reviewed:** 2026-06-13

---

## Changelog — v5.9 (2026-06-08) — Bundle-split perf pass, account-deletion flow, accuracy reconcile

**No new attack surface; net posture slightly improved.** The 2026-06-07 perf/polish run is client-architecture and UX, not new server surface. Re-audited against the live code:

- **Client-bundle hardening (improves posture).** `stages-meta` was decoupled from the heavy `stages.ts` content barrel and CTF `extraCommands` were made lazy per-epoch (`LOADERS` map). The practical security effect: the 10 MB content barrel — which transitively *could* pull stage `info`/`quiz`/command text into a route bundle — is now kept out of every route's first-load (`/stages/[stageId]` 10 MB → 0.9 MB). `stage-flags.ts` remains `import "server-only"` and is still never reachable from any client graph. No flag/answer data is shipped to the client.
- **Account deletion — 2-step retention flow.** The `/account` delete control now requires an explicit two-step confirm before calling `DELETE /api/delete-account`. The route is unchanged: still session/bearer-authed, still purges only the **caller's own** records (user/progress/streak/leaderboard/nda + email index) and the parallel Supabase auth account. No cross-user deletion path; identity is taken from the verified session, never a request body field.
- **CSP accuracy fix (this doc).** §3 below previously omitted `https://plausible.io`. The live `proxy.ts` CSP allowlists Plausible in **both** `script-src` and `connect-src` (privacy-friendly, cookieless analytics — the only third-party tag). §3 corrected to match the running config.
- **Dependency table refreshed** to the actually-installed versions and `npm audit` status reconciled (see §6/§7): **2 moderate transitive advisories (postcss / next), no high or critical.** Earlier "audit clean" wording was optimistic.
- **Stale references fixed**: `app/secured-docs` → `apps/web/secured-docs` (§4); "every push to dev and master" → **master only** (the `dev` branch was retired 2026-06-03) (§7).

### Posture note — OPEN_ACCESS launch flag (not a vulnerability, but security-relevant)

The platform currently runs with `OPEN_ACCESS = true` (in `apps/web/src/lib/access.ts` and the `/stages` page guard). While set, `getUserTier()` returns `"pro"` for every signed-in user and `canAccessStage()` returns `true` — i.e. **the paywall and per-tier gating are deliberately disabled** for the open-access growth phase. This is a business config, not a broken control: XP/flag validation, auth, admin gating, and rate limits are all unaffected. The only entitlement-bypass "risk" is intentional (everything is free right now). Re-gating at launch is a one-flag flip in two kept-in-sync files; the tier machinery (Stripe/RC/voucher multi-source entitlement) is fully built and dormant behind it. Tracked as a launch task, not a finding.

## Changelog — v5.8 (2026-06-06) — Deep-tech/analyst content sprint + imagery (v1.37.0–v1.43.0)

**No new attack surface.** This release is content, imagery, and documentation only:

- **5 new epochs + 30 CTF additions** are pure `@kryptos/core` stage-data files — no new API routes, no new Redis keys, no new env vars. New CTF flags live in `stage-flags.ts` (already `server-only`, never imported client-side); validation stays server-side via the existing `/api/check-flag` path.
- **29 new self-hosted images** under `public/img/` served same-origin by the existing static pipeline — no new third-party hotlinks; `img-src` unchanged.
- **New build-time script** `apps/web/scripts/fetch-stage-images.mjs` is a developer tool (not shipped to the client, not imported by any route).
- All existing controls (CSP nonce, HttpOnly/Secure cookies, admin gate, server-side XP/flag validation) unchanged.

## Changelog — v5.7 (2026-06-05) — Image self-hosting (external deps removed)

**Net attack surface: reduced.** All stage imagery moved from third-party hotlinks to first-party self-hosting:

- **214 external `upload.wikimedia.org` image URLs removed** from the stage data and replaced by 290 self-hosted assets in `public/` (served same-origin via the existing static pipeline). This eliminates the platform's last routine third-party image requests — no referrer leakage to Wikimedia, no dependency on an external host's availability, and no surface for a stale external URL to be repointed.
- **No new server surface.** The new `/exam/debate` route reuses the existing `/api/exam` engine (server-side grading, answer key never sent to the client, options shuffled); it adds only a `debate` mode to the question bank — no new auth path, env var, or Redis key.
- **CSP note.** `img-src` remains `'self' data: https:`. With external images now eliminated it could be tightened to `'self' data:` in a future pass, pending an audit of any remaining external image sources (e.g., OG/share images); left unchanged here to avoid breakage.

## Changelog — v5.6 (2026-06-04) — Admin-token hardening, progress-forgery fix, ARIA hint monetization

**Net attack surface: reduced.** This release closes admin-session and gameplay-integrity gaps and adds a tier gate; the new content and tracker add no new server surface.

- **Centralized admin token with expiry + revocation.** The admin cookie was previously an HMAC over the username with **no expiry and no revocation**, verified by ~15 copy-pasted inline verifiers. It is now a single canonical primitive: `lib/admin-token.ts` (pure, Edge-safe — used by `proxy.ts`) mints/verifies a **v2 token** `v2.<user>.<issuedAtMs>.<hmac>` with an **8-hour server-side expiry**; `lib/admin-auth.ts` (`import "server-only"`) adds `requireAdmin()`, which layers a **per-user revocation epoch** (`admin:revokedBefore:<user>`) on top of signature + expiry. Legacy non-expiring tokens are no longer accepted (admins re-login once). `grant-admin` now calls `revokeAdminSessions(target)` when de-admining, so a demoted user's live admin cookie dies immediately. All admin-gated routes migrated to `requireAdmin`.
- **Admin-session takeover bypass — fixed.** `POST /api/admin-session` previously minted a valid admin cookie to anyone who POSTed `{ username: <ADMIN_USERNAME> }` with no credential. Identity is now derived from the verified `session_token` cookie (`getServerSession`), and the route additionally checks super-admin / `isAdmin` flag before issuing.
- **Progress forgery — fixed.** `POST /api/progress` now rejects stages that have a server-side flag (those must be solved via `/api/check-flag`), validates the stage exists, and grants only the stage's own `badge.id` — closing a path to self-award XP/badges for flag-gated stages.
- **Rate limits + timing.** Per-user (non-spoofable) + per-IP rate limits on ARIA hints, voucher redeem, and flag/answer checks; constant-time flag comparison; neutralized the bonus-XP timing side channel; centralized client-IP extraction and the Redis rate-limit helper.
- **ARIA hint monetization — no new surface.** `/api/hint` reads tier server-side (`getUserTier`) and caps free users at 5 hints/mission via the existing persistent Redis hint counter; it reuses the existing bearer/session auth and rate limits, writes no new user-controlled Redis keys, and returns a 402 with an upgrade prompt when spent.
- **Debate track + `/debate` tracker — data + read-only.** 8 new epochs are pure stage-data files (no new API routes, Redis keys, or env vars). The `/debate` page is a read-only client view over the existing `/api/progress`; `packages/core/debate-domains.ts` is static content.



**New authenticated surfaces — reviewed.** Building on v5.4's bearer auth, the mobile rollout adds:

- **`POST /api/webhooks/revenuecat`** (mobile IAP) — verified via a shared-secret `Authorization` header (`REVENUECAT_WEBHOOK_AUTH`); rejects missing/wrong auth with 401. Writes only `tier`/`rcProExpiry`; never trusts a request-supplied tier. `app_user_id` is set to the username by the app (`Purchases.logIn`).
- **Multi-source entitlement** — `getUserTier()` (`src/lib/access.ts`) treats `proStripe`, `rcProExpiry`, and `voucherExpiry` as independent sources and downgrades to `free` only when **none** is active. This prevents one platform's webhook (e.g. a Stripe cancellation) from stripping access a user still holds via mobile IAP. Each webhook writes only its own source field, then re-evaluates.
- **Push routes** — `POST/DELETE /api/push/register` require session/bearer auth and only touch the caller's own entry in the `push:tokens` hash. `GET /api/push/streak-reminder` is a Vercel Cron endpoint gated by a `CRON_SECRET` bearer (rejects without it) — not reachable by ordinary clients.
- **Bearer verification hardening** — `verifySupabaseJwt()` now verifies the token **locally against the Supabase project JWKS** (`jose`) with a `supabase.auth.getUser()` fallback, avoiding a network round-trip per request while preserving signature/expiry validation. Identity is still taken only from the verified `email` claim.
- **`/api/v1/*` namespace** — a next.config rewrite to `/api/*` for the mobile client; it adds no new handlers or auth bypass — the same route code and `getAuthedUsername()` gate apply.
- **Plausible analytics** — privacy-friendly, cookieless, no PII. The only third-party script tag on the site; allowlisted in the `proxy.ts` nonce CSP (`script-src` + `connect-src` for `https://plausible.io`). No first-party data shared beyond standard pageview telemetry.
- **Monorepo / single-branch** — code reorganized into Turborepo workspaces (`apps/web`, `apps/mobile`, `packages/*`); server-only modules remain confined to `apps/web` (or `import "server-only"`). The `dev` branch was retired; `master` is the single deploy source. No change to the runtime trust boundary.

New env vars: `REVENUECAT_WEBHOOK_AUTH`, `CRON_SECRET` (both server-side secrets). XP/flag validation remains server-side.

## Changelog — v5.4 (2026-06-03) — Multi-client bearer-token auth (v1.25.0)

**New authenticated surface — reviewed and hardened.** This release lets the API accept a Supabase JWT via `Authorization: Bearer` (for the planned mobile client) in addition to the HMAC session cookie. Security-relevant design decisions:

- **Identity is NOT derived from `user_metadata`.** Supabase `user_metadata` is user-editable (`auth.updateUser({ data })`), so trusting `user_metadata.username` would permit account takeover by metadata spoofing. Instead, `verifySupabaseJwt()` resolves identity from the token's **verified top-level `email` claim**, then maps it through the existing `email:{email}` reverse index. The email claim reflects `auth.users.email` and cannot change without Supabase re-verification.
- **Token verification** uses local JWKS signature verification (`jose`, against the Supabase project JWKS) with a `supabaseAdmin.auth.getUser(token)` fallback — validates signature/expiry/revocation. Invalid/expired/forged tokens resolve to null → 401 (verified live).
- **No privilege widening.** `getAuthedUsername()` is bearer → session-cookie only; it deliberately does NOT add an admin-cookie fallback. Routes that previously had an explicit `extractAdminUsername` fallback keep it explicitly. Admin and Stripe routes were not migrated.
- **`POST /api/auth/bootstrap`** is rate-limited (30/min/IP), requires a valid token, keys the new record to the verified email, enforces username uniqueness, and atomically claims the email→username binding with `SET NX`. First-write-wins — cannot overwrite an existing account.
- **CORS** (`proxy.ts`, `/api` only) is origin-allowlisted and **credential-less** (cross-origin clients authenticate with bearer tokens, never cookies), so it cannot be used to ride a victim's cookie session. Disallowed origins receive no `Access-Control-Allow-Origin` (verified live). The per-request nonce CSP for HTML pages is unchanged.
- No new env vars; XP/flag validation remains server-side; no new client-exposed secrets.

## Changelog — v5.3 (2026-06-03) — AWS AIP + GCP PMLE cert paths (v1.24.0)

No new attack surface. This release adds two certificate paths (AWS Certified AI Practitioner, Google Cloud Professional ML Engineer) by extending the existing `cert-domains.ts` data table and the `/certs` page config — render-only, no backend changes. The two new `CertId`s were added to the pre-existing `VALID_CERTS` allowlist in `POST /api/exam` and to the local `CERT_META` in the `/exam/cert/[certId]` page; the exam route's auth, grading, and answer-key isolation (`server-only` exam-banks pulling from full stage data) are unchanged. No new API routes, Redis keys, env vars, or client-exposed secrets. Practice-exam pools for the new certs are derived from existing stage quizzes already validated server-side.

## Changelog — v5.2 (2026-05-30) — Dual-mode quiz rollout + brand/UI refresh (v1.23.0)

No new attack surface. The quiz-rollout work adds only `stage.quiz` data blocks to existing stage files — answers are validated server-side by the pre-existing `POST /api/check-answer` route (no new routes, Redis keys, or env vars). The new client components (`HomeCtfDemo.tsx`, `Logo.tsx`) are static/presentational: the homepage mini-CTF is a self-contained simulation with no backend calls and no real flag (the displayed `FLAG{...}` is a demo string, not a server secret), and `Logo.tsx` is an inline SVG. `RichText.tsx` highlighting changes are render-only string tokenization (no `dangerouslySetInnerHTML`). All existing security controls unchanged.

---

## Changelog — v5.1 (2026-05-29) — Content expansion (v1.22.0)

No new attack surface. Two new epochs added (quantum-4, emerging-tech) — pure stage data files with no new API routes, no new Redis keys, no new env vars. Stage count: 438 → 458. All existing security controls unchanged.

---

## Changelog — v5.0 (2026-05-29) — Full Deep Security Review

Full manual audit of all API routes, auth flows, Redis key patterns, CSP configuration, and client-side exposure against OWASP Top 10. Two new medium findings; several accepted low/informational items documented.

### New Findings — v5.0

| Severity | Location | Finding | Resolution |
|---|---|---|---|
| **Medium** | `POST /api/admin/vouchers` — `randomSegment()` | Voucher codes use `Math.random()` (not CSPRNG). With 32 chars × 8 positions, the space is ~1.1 trillion codes, but predictable sequences are possible given VM timing. | **Fix below**: replace `Math.random()` with `crypto.randomBytes()` |
| **Low** | `POST /api/survey` | No per-field size limit on survey body. A malicious user could submit 1 MB+ field values and fill Redis indefinitely. | **Fix below**: add `BODY_LIMIT_BYTES = 10_000` check |
| **Low** | `POST /api/feedback` | `username` field accepted directly from request body without session verification. Attacker can submit feedback claiming to be any user. Email-content only — no access impact. | Accepted. Add note in code to treat this as unverified. |
| **Low** | `POST /api/hint` | Rate limiting is IP-only. A determined user with multiple IPs or a VPN can exceed the 15/15min global limit. | Accepted for AI tutor. Pro/free distinction is the primary gate. |
| **Info** | `check-flag` admin flag log | `admin:flag-log` stores actual correct flag values alongside submissions. This is intentional for auditing but means admin Redis contains all flag answers. | Accepted. `audit.ts` is server-only. Threat model: Redis compromise is assumed catastrophic regardless. |
| **Info** | CSP `connect-src` | Missing `https://*.supabase.co` from CSP connect-src. Supabase is called server-side only; no client-side direct calls detected. | Accepted. Monitor if any client-side Supabase SDKs are added. |
| **Info** | `timeTakenMs` client-supplied | `check-flag` accepts client-reported time for penalty calculation (capped at 20% XP penalty). Cannot be used to gain XP — only to reduce it — so client manipulation is self-punishing. | Accepted by design. |

### Voucher Code CSPRNG Fix (Medium)

Replaced `Math.random()` with `crypto.randomBytes()` in `randomSegment()`:

### Survey Body Size Fix (Low)

Added `SURVEY_BODY_LIMIT = 10_000` bytes check to POST handler.

---

## Changelog — v4.1 (2026-05-28) — Deferred Items Resolved

Three previously-accepted low findings closed:

| Finding | Fix |
|---|---|
| **PBKDF2 iterations below OWASP 2024** | Increased from 310,000 → 600,000 in `crypto-utils.ts`. Auto-rehash on login upgrades all existing users transparently. |
| **No account-level lockout** | Added per-username lockout in `login` route: 5 failed attempts → 15-min lock via `lockout:user:{username}` Redis key. Lock cleared on successful auth. Complements existing IP rate limit (5/15min). |
| **No admin action audit log** | New `src/lib/audit.ts` — `logAdminAction(admin, action, target)` appends JSON entries to `audit:log` Redis list (capped at 1,000 entries). Wired into: `set-tier`, `set-skin`, `set-group`, `award-stage`, `grant-admin`, `revoke-admin`, `create-vouchers`, `revoke-voucher`, `downloads-set-mode`, `downloads-grant/revoke`, `cms-stage-save/delete`. |

---

## Changelog — v4.0 (2026-05-28) — Full OWASP Top 10 Audit

Deep security review against OWASP Top 10 (2021). All confirmed findings remediated in this pass.

### Findings Resolved in v4.0

| Severity | Route | Finding | Fix |
|---|---|---|---|
| **Critical** | `POST /api/admin/downloads-access` | Only checked session cookie — any logged-in user could modify the downloads feature flag and allowlist | Added admin HMAC token verification (same pattern as `set-tier`) |
| **Critical** | `GET /api/auth/login` | Admin username bypassed IP rate limiting entirely | Removed exemption; rate limit now applies to all users including admin |
| **High** | `GET /api/survey` | Zero auth check — any unauthenticated caller could read all survey responses (usernames, open comments) | Added admin token verification |
| **High** | `GET /api/admin/downloads-access` | Only checked session cookie — any logged-in user could read allowlist config | Covered by admin guard added above |
| **Medium** | `POST /api/stripe/checkout` | `origin` header taken from request without validation — attacker could spoof Origin to redirect post-checkout to arbitrary domain | Whitelisted to `kryptoscronos.com` and `localhost:3000`; all other origins fall back to production domain |
| **Medium** | `GET /api/leaderboard` | No rate limiting on endpoint that makes 51 Redis calls per request | Added 30 req/min/IP limit |
| **Medium** | `POST /api/vouchers` (admin) | Admin route only checked session, not HMAC admin token | Fixed in v1.16.0 voucher sprint; documented here |
| **Medium** | `POST /api/redeem` | `usesLeft` check and decrement not atomic — concurrent requests could over-redeem | Fixed in v1.16.0: SADD atomic dedup + optimistic decrement with rollback |
| **Medium** | Stripe webhook | `voucherExpiry` not cleared on Stripe Pro grant — Stripe subscribers downgraded when old voucher expired | Fixed in v1.16.0: webhook clears `voucherExpiry: ""` on checkout completion |

### Findings Accepted / Low-Risk

| Severity | Area | Finding | Rationale |
|---|---|---|---|
| Low | PBKDF2 iterations | 310,000 iterations is below OWASP 2024 recommendation of 600,000 | Still industry-competitive; auto-rehash on login will upgrade existing users when we increase the constant. No action blocking. |
| Low | Cookie `sameSite: "lax"` | Session and admin cookies use `lax` not `strict` | Strict would break OAuth redirect flows. `lax` + HMAC-signed cookies + no CSRF-sensitive state-change via GET is sufficient. |
| Low | No audit log for admin actions | Admin destructive actions (set-tier, award-stage, etc.) have no server-side log | Accepted for pre-seed stage; Redis append-only audit log is the right long-term fix. |
| Low | Leaderboard N+1 Redis calls | `buildPlayers` issues one `hgetall` per player — 51 calls per leaderboard load | Upstash serverless latency is low; pipeline optimization deferred. |
| Info | `feedback` rate limit | v3.0 listed `/api/feedback` as open — it already has 5/hour/IP rate limiting | Closed — was already resolved. |

---

## Changelog — v3.0 (2026-05-28)

New `/api/survey` route: POST stores survey responses to Redis under `survey:{ts}:{username}` with a `survey:index` sorted set; GET returns all responses (admin use only — auth guard added in v4.0). `dangerouslySetInnerHTML` in `layout.tsx` verified: value is the static anti-FOUC script string, not user input; nonce applied correctly. New `/downloads` page is public static content with no data handling. New `/survey` page has no session requirement by design (unauthenticated survey responses stored as anonymous). No new env vars, no new third-party integrations. UI/content changes (i18n, images, section headers, overview font) have no security implications.

---

## Changelog — v2.9 (2026-05-28)

New Redis key namespace `diff:<username>:*` introduced for adaptive difficulty signals. All keys are namespaced with lowercase username (matching existing progress key convention) and carry 48 h TTL. Keys are written only after session verification — no unauthenticated write path. No new API routes exposed publicly. `difficulty.ts` is marked `"server-only"` — cannot be imported by client components. The `/api/hint` route now reads `getServerSession()` to associate hints with a user; unauthenticated hint calls still work but do not persist signal data. `computeStageScore` and `getRecommendedNext` are pure functions with no Redis access. No new env vars, no new third-party integrations, no new attack surface.

---

## Changelog — v2.8 (2026-05-25)

No new attack surface. v1.10.0 is a content expansion: 4 travel epochs (418 quiz stages total), run-cyberquest Playwright dev skill. No new API routes, Redis keys, env vars, or third-party integrations. The run-cyberquest skill uses `playwright` as a dev dependency only — not shipped to production. Quiz stages are static data (TypeScript files), not user-generated content.

---

## Changelog — v2.7 (2026-05-23)

No new attack surface. v1.9.0 is a positioning, pricing, and legal formation release. Changes: Brief functionality removed (reduces client-side state), admin canAccessStage bypass added (no new routes), Terms of Service page added at `/terms` (static, no data handling), business email `hello@kryptoscronos.com` wired in (Cloudflare forwarding, no server-side change), Crafts/Baseball/Driving hidden from public nav (no data access change), pricing updated ($13.99/mo, $99/yr). No new API routes, Redis keys, env vars, or third-party integrations.

---

## Changelog — v2.5 (2026-05-23)

Login rate limit tightened to 5 attempts/15 min. Nonce-based CSP documented — `script-src` uses per-request nonces with no `unsafe-inline`. ESLint clean (0 errors). GitHub CI secrets set; CI fully green on master.

---

## Changelog — v2.4 (2026-05-20)

Closes CTF flag visibility finding. `stages-meta.ts` introduced as client-safe listing metadata module (no `ctf`, `quiz`, or `info`); both listing pages (`/stages` and `/stages/epoch/[epochId]`) now import from it instead of the full `stages.ts`. Section 5 updated to document final architecture. Section 9 corrected to reflect v1.3.0 auth migration (no credentials in localStorage). No new API routes, Redis keys, or env vars.

---

## Executive Summary

Kryptós CronOS is a Next.js 16 / Turborepo application (`apps/web` + `@kryptos/core`) with serverless API routes, Upstash Redis persistence, and dual web (HMAC cookie) / mobile (Supabase bearer JWT) auth. The overall risk rating is **LOW**. A full OWASP Top 10 audit was completed in v4.0; all critical and high findings have been remediated, and every release since (through v1.46.0 / briefing v5.9) has been re-audited for new surface — the content, mobile, monorepo, and perf sprints added none. Remaining items are accepted low-risk trade-offs documented below.

One business-config caveat for any reviewer: the platform currently ships with `OPEN_ACCESS = true`, which intentionally disables the paywall/tier gate (everything is free during the growth phase). This is the only deliberate entitlement bypass; all integrity controls (auth, server-side XP/flag validation, admin gating, rate limits, audit log) remain fully active. See the v5.9 posture note.

---

## OWASP Top 10 (2021) — Status Matrix

| # | Category | Status | Notes |
|---|---|---|---|
| A01 | Broken Access Control | ✅ Resolved | All admin routes now require HMAC `admin_token` cookie. Session-only routes verified to not perform privileged actions. |
| A02 | Cryptographic Failures | ✅ Resolved | PBKDF2-SHA256 600k iterations (OWASP 2024); HMAC-signed session + admin cookies; HttpOnly/Secure/SameSite; Supabase JWT verified via JWKS; no plaintext secrets. |
| A03 | Injection | ✅ No issues | All Redis keys use fixed prefixes + lowercase user input. No eval/exec/dangerouslySetInnerHTML. |
| A04 | Insecure Design | ✅ Resolved | Voucher race condition fixed; Stripe origin header whitelisted; rate limits on all write endpoints. |
| A05 | Security Misconfiguration | ✅ Resolved | Leaderboard rate-limited; nonce-based CSP; HSTS + security headers; Stripe success/cancel URLs whitelisted. |
| A06 | Vulnerable Components | ✅ Current | next 16.2.6, react 19.2.4, stripe ^22.1.1, @anthropic-ai/sdk ^0.98.0, @supabase/supabase-js ^2.106.2, @supabase/ssr ^0.10.3, jose ^6.2.3. `npm audit`: **2 moderate transitive advisories (postcss / next), 0 high, 0 critical** — accepted, no fix-forward available without a Next minor bump; tracked. |
| A07 | Auth Failures | ✅ Resolved | Rate limit now covers admin user; HMAC-signed sessions; timing-safe password comparison; constant-time dummy hash on unknown usernames. |
| A08 | Software & Data Integrity | ✅ Resolved | Stripe webhook uses `stripe.webhooks.constructEvent()` signature verification. Server-only flag store. |
| A09 | Logging & Monitoring | ✅ Resolved | Admin actions logged to `audit:log` Redis list. Account lockout tracks repeated auth failures per username. |
| A10 | SSRF | ✅ No issues | All `fetch()` targets are hardcoded service URLs (Resend, Anthropic, Stripe). No user-supplied URLs. |

---

## 1. Authentication & Session Management

### 1.1 Password Hashing — ✅ RESOLVED (v0.2.0)

**Status:** PBKDF2-SHA-256 with 600,000 iterations (OWASP 2024) and a 16-byte random salt via Web Crypto API. Transparent re-hash on login upgrades existing users (legacy 100k/310k) to the current iteration count.

```typescript
const keyMaterial = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt: encoder.encode(salt), iterations: 600_000, hash: "SHA-256" }, keyMaterial, 256);
```

### 1.2 Admin Authentication — ✅ RESOLVED (v0.4.1)

**Status:** Admin cookie (`admin_token`) is HMAC-signed (`ADMIN_SECRET`), HttpOnly, Secure, SameSite=Lax. All `/admin/**` routes blocked at `proxy.ts` before reaching route handlers. All `/api/admin/*` routes independently verify `admin_token` via `verifyAdminToken()`. No session-only path to admin actions.

### 1.3 Client-Side Credential Storage — ✅ RESOLVED (v1.3.0)

**Status:** No credentials in localStorage or sessionStorage. `auth.ts` stores only the username string in sessionStorage as a write-through UI cache. The authoritative session is the HMAC-signed HttpOnly `session_token` cookie verified server-side on every API call.

### 1.4 Session Tokens — ✅ RESOLVED (v1.3.0)

**Status:** HMAC-signed tokens in format `u:{username}:{hmac-sha256}`, verified via `getServerSession()` on every protected route. HttpOnly, Secure, SameSite=Lax, 30-day maxAge.

### 1.5 Login Rate Limiting — ✅ RESOLVED (v4.0)

**Status:** 5 attempts/15 min/IP, applied universally including the admin account. Previously admin was exempt — fixed in v4.0.

---

## 2. API Security

### 2.1 Rate Limiting — ✅ RESOLVED

| Endpoint | Limit | Key |
|---|---|---|
| `POST /api/auth/login` | 5/IP/15min | `rate:login:<ip>` |
| `POST /api/forgot-password` | 3/IP/15min | `rl:forgot:<ip>` |
| `POST /api/notify-registration` | 5/IP/hour | `rl:notify:<ip>` |
| `POST /api/feedback` | 5/IP/hour | `rate:feedback:<ip>` |
| `POST /api/nda` | 5/IP/hour | `rate:nda:<ip>` |
| `POST /api/hint` | 15/IP/15min | `rl:hint:<ip>` |
| `GET /api/leaderboard` | 30/IP/min | `rate:lb:<ip>` — added v4.0 |

### 2.2 Server-Side XP Computation — ✅ RESOLVED (v0.6.0)

**Status:** XP computed server-side in `/api/progress` from a hardcoded `STAGE_XP` map. Client-submitted XP ignored.

### 2.3 Password Reset — ✅ RESOLVED (v0.5.0)

**Status:** Reset tokens are random, stored in Redis with 1-hour TTL, deleted on use. Response returns only username, never email.

### 2.4 Voucher System — ✅ RESOLVED (v1.16.0)

**Status:** 
- Per-user deduplication uses Redis `SADD` (atomic) — no race condition possible on duplicate redemption.
- `usesLeft` decrement is optimistic with rollback: `HINCRBY -1` then check if negative; roll back both SADD and HINCRBY if over-redeemed.
- All admin voucher endpoints require HMAC `admin_token`.
- Stripe webhook clears `voucherExpiry` on checkout completion to prevent Stripe Pro users being downgraded by stale voucher timestamp.

---

## 3. HTTP Security Headers — ✅ RESOLVED

All headers applied via `next.config.ts`:

| Header | Value | Status |
|---|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | ✅ |
| `X-Frame-Options` | `DENY` | ✅ |
| `X-Content-Type-Options` | `nosniff` | ✅ |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | ✅ |
| `Permissions-Policy` | `camera=(), microphone=(), getelocation=()` | ✅ |
| `Content-Security-Policy` | Nonce-based, per-request (see below) | ✅ |

**CSP** (set dynamically per-request in `apps/web/src/proxy.ts`):
```
default-src 'self';
script-src 'self' 'nonce-{per-request-nonce}' https://plausible.io;
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
font-src 'self';
connect-src 'self' https://api.resend.com https://plausible.io;
frame-ancestors 'none'
```

`style-src` retains `unsafe-inline` — required for Tailwind/React inline styles. Script injection via inline JS eliminated by the per-request nonce requirement. `https://plausible.io` is the single third-party origin (cookieless, no-PII analytics), allowlisted in `script-src` + `connect-src`. `/api/*` requests are handled before the CSP/nonce block (CORS-only path); the page CSP applies to HTML routes only.

> **`img-src` tightening (deferred, low priority).** With all stage imagery now self-hosted (v5.7), `img-src` could be narrowed from `'self' data: https:` to `'self' data:`. Left wide pending an audit of OG/share-image and any remaining external image origins; tracked as hardening, not a finding.

---

## 4. Internal Documents — ✅ RESOLVED (v0.6.0)

All internal documents in `apps/web/secured-docs/` (monorepo path since 2026-06-03; never in `public/`). Served only via `/api/docs/[file]`, which requires a valid admin HMAC cookie and reads from an explicit filename allowlist (no path traversal). `outputFileTracingIncludes` in `next.config.ts` ensures Vercel bundles the folder without exposing it as static assets.

---

## 5. CTF Flag Visibility — ✅ RESOLVED (v1.7.1)

- `packages/core/src/stage-flags.ts` — `import "server-only"` — never sent to any client.
- `/api/check-flag` — validates server-side; returns only `{ correct: true/false }`.
- `stages-meta.ts` — client-safe listing metadata with no `ctf`, `quiz`, or `info` fields.
- Client-side CTF commands that reveal flags are an accepted mechanic — the canonical flag store is server-only, and all submission validation is server-side.

---

## 6. XSS — ✅ NO ISSUES

- All user content rendered via React JSX (HTML-escaped by default).
- No `dangerouslySetInnerHTML` in user-facing paths. `layout.tsx` usage is a static string literal with nonce applied.
- CTF terminal input displayed as plain text React nodes.

---

## 7. Dependency Security

| Package | Version (pinned/range in `apps/web/package.json`) |
|---|---|
| next | 16.2.6 |
| react / react-dom | 19.2.4 |
| @upstash/redis | ^1.38.0 |
| stripe | ^22.1.1 |
| @anthropic-ai/sdk | ^0.98.0 |
| @supabase/supabase-js | ^2.106.2 |
| @supabase/ssr | ^0.10.3 |
| jose (Supabase JWKS verify) | ^6.2.3 |
| @react-pdf/renderer | ^4.5.1 |
| react-markdown / remark-gfm | ^10.1.0 / ^4.0.1 |

`npm audit` runs in CI on every push to **`master`** (the only branch since the `dev` branch was retired 2026-06-03) and on PRs targeting it. Current status: **2 moderate transitive advisories (postcss, next), 0 high, 0 critical** — no production-reachable exploit path; accepted and tracked pending a Next minor bump.

---

## 8. Secrets in Source Code — ✅ CLEAN

No API keys, tokens, or credentials committed. `.gitignore` excludes `.env*`. All secrets in Vercel environment variables.

---

## 9. Data Privacy

| Data | Storage | Notes |
|---|---|---|
| Username | sessionStorage (UI cache) + Redis | |
| Email | Redis only | |
| Password hash + salt | Redis only | Never in localStorage |
| XP / progress | Redis | Server-computed only |
| Session token | HttpOnly cookie | Not accessible via JS |
| Survey responses | Redis (`survey:{ts}:{username}`) | Admin-only GET endpoint, auth-gated as of v4.0 |
| NDA records | Redis (`nda:{email}`) | Admin-only GET, HMAC-verified |

---

## 10. Remediation Status Summary

| Finding | Severity | Status |
|---|---|---|
| Admin credentials in source code | Critical | ✅ Resolved v0.4.1 |
| Internal docs in public/ | High | ✅ Resolved v0.6.0 |
| Missing HSTS | Medium | ✅ Resolved v0.6.0 |
| Client-supplied XP accepted | Medium | ✅ Resolved v0.6.0 |
| No rate limiting on email endpoints | Medium | ✅ Resolved v0.6.0 |
| sync-user allows overwrite | Medium | ✅ Resolved v0.6.0 |
| admin-session accepts empty secret | Medium | ✅ Resolved v0.6.0 |
| Password reset leaks email | Low | ✅ Resolved v0.6.0 |
| Client-side auth storage | High | ✅ Resolved v1.3.0 |
| No signed session tokens | Low | ✅ Resolved v1.3.0 |
| CTF flags in client bundle | Low | ✅ Resolved v1.7.1 — `stage-flags.ts` server-only |
| downloads-access POST open to all users | Critical | ✅ Resolved v4.0 |
| Admin login rate-limit bypass | Critical | ✅ Resolved v4.0 |
| survey GET unauthenticated | High | ✅ Resolved v4.0 |
| Stripe checkout origin header not whitelisted | Medium | ✅ Resolved v4.0 |
| Leaderboard no rate limit | Medium | ✅ Resolved v4.0 |
| Voucher admin routes session-only | Medium | ✅ Resolved v1.16.0 |
| Voucher redemption race condition | Medium | ✅ Resolved v1.16.0 |
| Stripe Pro downgraded by stale voucherExpiry | Medium | ✅ Resolved v1.16.0 |
| `/api/feedback` missing rate limit | Low | ✅ Confirmed already resolved — was incorrect in v3.0 |
| No audit log for admin actions | Low | ✅ Resolved v4.1 — `audit:log` Redis list, wired to 11 admin action types |
| PBKDF2 iterations below OWASP 2024 (600k) | Low | ✅ Resolved v4.1 — increased to 600k; auto-rehash upgrades existing users |
| No account-level lockout | Low | ✅ Resolved v4.1 — 5 failed attempts → 15-min lock per username |

---

## 11. Production Readiness Gaps

| Item | Status |
|---|---|
| Server-side flag validation | ✅ `stage-flags.ts` uses `server-only` |
| Signed JWT sessions | ✅ HMAC-signed `session_token` cookie |
| CI pipeline (lint, tsc, audit) | ✅ `.github/workflows/ci.yml` |
| Redis backup / point-in-time recovery | ✅ Enabled in Upstash console |
| Admin action audit log | ✅ `audit:log` Redis list, capped at 1,000 entries |
| Account-level lockout | ✅ 5 failed attempts → 15-min lockout per username |
