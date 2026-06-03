# Architecture Decision Records — Kryptós CronOS

**Version:** v2.0.0
**Last Updated:** 2026-06-03
**Status:** Current

Each ADR records a significant technical decision: what was decided, why, what was rejected, and what constraints it creates going forward. Ordered most recent first.

---

## ADR-014 — Turborepo Monorepo (apps/web + apps/mobile + packages)

**Date:** 2026-06-03
**Status:** Accepted

### Decision
Restructure the single Next.js app into a **Turborepo monorepo** with npm workspaces: `apps/web` (Next.js + API, deployed), `apps/mobile` (Expo / React Native), `packages/core` (`@kryptos/core` — all curriculum content + types, formerly `app/src/data`), and `packages/api-client` (`@kryptos/api-client` — a framework-agnostic typed API client used by both web and mobile).

### Rationale
- A native mobile client needs to share curriculum content, types, and API calls with web — duplicating them would guarantee drift
- `packages/core` makes content the single source of truth for both platforms
- Turborepo caches build/lint/typecheck across workspaces
- Vercel deploys only `apps/web` (Root Directory = `apps/web`, "Include files outside root" ON for the workspace lockfile)

### Constraints
- Server-only modules (redis, supabase, crypto-utils, api-auth, stage-flags, audit) must stay in `apps/web` (or be `import "server-only"`) — never into `@kryptos/core`'s client-reachable graph
- `transpilePackages: ["@kryptos/core"]` required in `next.config.ts`
- Install from the repo root; app commands run via `turbo` or `-w @kryptos/web`

---

## ADR-013 — Dual-Client Auth: Supabase Bearer JWT (mobile) alongside HMAC cookie (web)

**Date:** 2026-06-01
**Status:** Accepted — **supersedes ADR-009**

### Decision
Adopt **Supabase Auth** as the identity provider for the **mobile** client. API gameplay/user routes accept **either** the HMAC `session_token` cookie (web) **or** an `Authorization: Bearer <supabase-jwt>` (mobile), resolved by a single `getAuthedUsername()` helper. Bearer tokens are verified **locally against the project JWKS** (`jose`) with a `supabase.auth.getUser()` fallback. Routes are also exposed under a versioned `/api/v1/*` namespace.

### Rationale
- Mobile cannot use HttpOnly web cookies; a bearer token is the native pattern
- Supabase already ran parallel to PBKDF2 (ADR-009 era) — promoting it to the mobile identity source avoids a second auth system
- Local JWKS verification avoids a network round-trip to Supabase on every request
- **Spoof-safe identity:** username is resolved from the token's verified **email** claim → `email:{email}` index, never the user-editable `user_metadata`

### Constraints
- A verified-email claim is required; mobile-only accounts are provisioned in Redis via `POST /api/auth/bootstrap` (`SET NX`)
- CORS for `/api` must allow the mobile origin (origin-allowlisted, credential-less) in `proxy.ts`
- The `/api/v1` rewrite must stay in sync with the canonical `/api` routes

---

## ADR-012 — Multi-Source Pro Entitlement (Stripe + RevenueCat + Voucher)

**Date:** 2026-06-01
**Status:** Accepted

### Decision
Pro tier is derived from **multiple independent sources**: `proStripe` (web Stripe subscription), `rcProExpiry` (mobile RevenueCat IAP), and `voucherExpiry` (voucher/survey reward). `getUserTier()` grants Pro if **any** source is active and only revokes to `free` when **none** remain. RevenueCat handles App Store / Play IAP, with `app_user_id` = username so it reconciles with Stripe.

### Rationale
- A user may pay on web (Stripe) and also be entitled via mobile IAP — a webhook from one platform must never strip access granted by another
- App Store / Play billing rules require IAP on mobile; Stripe Checkout is not allowed in-app

### Constraints
- Every webhook (`/api/webhooks/stripe`, `/api/webhooks/revenuecat`) must write only its own source field and then re-evaluate, never hard-set `tier=free`
- `REVENUECAT_WEBHOOK_AUTH` guards the RevenueCat webhook

---

## ADR-011 — Single-Branch (`master`) Workflow

**Date:** 2026-06-03
**Status:** Accepted

### Decision
Retire the long-lived `dev` branch. `master` is the single source of truth: push to `master` → CI + Vercel auto-deploy to production. Risky changes use a short-lived feature branch validated on a Vercel Preview, then fast-forwarded into `master`.

### Rationale
- Solo/small-team velocity — the dev→master PR ceremony added latency without catching issues that Preview builds don't
- Vercel Preview per feature branch already provides pre-merge validation when needed

### Constraints
- CI runs on `master` push + PR; there is no separate integration branch
- Discipline required: most pushes go straight to production, so local CI gates matter

---

## ADR-010 — Mermaid.js for Documentation Diagrams (Client-Side Only)

**Date:** 2026-05-26
**Status:** Accepted

### Decision
Use the `mermaid` npm package (v11) for rendering architecture diagrams in the admin docs viewer. Diagrams are rendered client-side in the browser, not at build time or server-side.

### Rationale
- Zero build-time overhead — mermaid is dynamically imported and never in the server bundle
- Dark theme support matches the admin UI aesthetic
- Diagrams are defined as plain text in markdown files — editable without tooling
- Mermaid supports all required diagram types: ERD, flowchart, sequence, graph

### Rejected Alternatives
- **rehype-mermaid (server-side):** Requires a headless Chromium instance at build time; incompatible with Vercel's serverless build environment
- **Excalidraw / draw.io embeds:** External service dependency; not embeddable in markdown without an iframe
- **Static SVG files:** Not maintainable — diagrams drift from the code; markdown source is the single source of truth

### Constraints
- Diagrams render only in the browser — server-rendered or SSR contexts will show the raw code block
- The `MermaidDiagram.tsx` component must be a `"use client"` component
- Mermaid library is loaded lazily per-diagram — first render has a small delay

---

## ADR-009 — Auth Migration Deferred (Redis → Supabase Auth)

**Date:** 2026-05-22
**Status:** ~~Accepted (deferred)~~ **Superseded by ADR-013 (2026-06-01)**

> **Update:** This deferral was revisited when the mobile client was built. Supabase Auth was adopted as the **mobile** identity source (bearer JWT) while the web client keeps the HMAC cookie. PBKDF2 was also raised to 600k iterations. See **ADR-013**. The text below is retained for historical context.

### Decision
The current PBKDF2 + HMAC cookie auth system remains in place for the MVP and early growth phase. Migration to Supabase Auth or Lucia is planned but explicitly deferred.

### Rationale for deferral
- Current auth system is functionally correct and secure for the scale
- Migration risk at pre-seed stage outweighs the incremental security benefit
- PBKDF2-SHA256 with 100k iterations meets NIST SP 800-132 requirements
- The HMAC session approach is stateless and performant

### Migration triggers (when to revisit)
- B2B enterprise requirement for SAML/SSO
- SOC 2 Type II certification requirement for formal session management
- User volume exceeding 100k accounts where Redis user key space becomes unmanageable

### Constraints until migration
- No OAuth / social login
- No multi-device session management
- No session revocation without user-side cookie deletion

---

## ADR-008 — Tailwind CSS Only (No Component Library)

**Date:** 2026-05-08
**Status:** Accepted

### Decision
Use Tailwind CSS v4 for all styling. No external component library (shadcn/ui, MUI, Chakra, etc.).

### Rationale
- Full control over the cyberpunk aesthetic — no library defaults to override
- Smaller bundle (only the utility classes actually used, tree-shaken by Tailwind)
- TypeScript types are sufficient for component props — no library-specific prop APIs to learn

### Rejected Alternatives
- **shadcn/ui:** Good choice for business apps, but fighting the default aesthetic for a terminal-themed platform
- **Radix UI primitives:** Would add value for accessibility; revisit when prioritizing WCAG compliance
- **Framer Motion:** Not yet needed; Tailwind transitions cover current animation needs

---

## ADR-007 — Upstash Atomic Trophy Supply Reservation

**Date:** 2026-05-19
**Status:** Accepted

### Decision
Use Redis `INCR trophy:claimed:{id}` as the atomic reservation step for trophy purchases. Roll back with `DECR` if supply is exceeded.

### Rationale
- `INCR` is atomic in Redis — no race conditions between concurrent purchases
- No distributed lock needed; the compare-and-rollback pattern handles contention
- Works correctly with Upstash's serverless model (no connection state between requests)

### Constraints
- Under extreme contention (many buyers hitting Apex supply = 1 simultaneously), multiple buyers increment and then all but one must decrement — this is correct behavior but adds latency
- `claimedCount` in the UI may briefly show +1 before rollback — acceptable for the trophy use case

---

## ADR-006 — Nonce-Based Content Security Policy

**Date:** 2026-05-19
**Status:** Accepted

### Decision
Generate a cryptographic nonce per request in `proxy.ts`. Apply the nonce to the `script-src` CSP directive. No `unsafe-inline` in script-src.

### Rationale
- Prevents XSS via inline script injection
- `strict-dynamic` propagates trust to dynamically loaded scripts
- Per-request nonce rotation means a stolen nonce from one response is useless for another

### Implementation
- `proxy.ts` generates nonce via `crypto.getRandomValues()`
- Passes nonce as `x-nonce` response header
- `layout.tsx` reads the header and applies it to the anti-FOUC inline script
- CSP header includes `nonce-{nonce}` in script-src

### Constraints
- Any new inline script added to the app must use the nonce — hardcoded scripts without the nonce will be blocked
- Third-party scripts loaded from CDNs must be in `connect-src` or loaded via the existing trusted script tags

---

## ADR-005 — `server-only` Flag Store

**Date:** 2026-05-16
**Status:** Accepted

### Decision
CTF flag values live in `packages/core/src/stage-flags.ts` (formerly `src/data/stage-flags.ts`) which has `import "server-only"` at the top. This causes a Next.js build error if the module is accidentally imported in a client component.

### Rationale
- Zero possibility of flag values reaching the browser bundle
- Build-time enforcement — not a runtime check
- `server-only` is the Next.js recommended pattern for this use case

### Constraints
- Flag values cannot be used in client-side code under any circumstances
- Adding a new CTF stage requires adding the flag to `stage-flags.ts` AND the stage config to the appropriate epoch data file

---

## ADR-004 — Server-Side XP Computation

**Date:** 2026-05-15
**Status:** Accepted

### Decision
XP values are computed server-side using a static `STAGE_XP` map. Any XP value submitted by the client is ignored.

### Rationale
- Prevents client-side score manipulation
- Single source of truth for XP values — the `STAGE_XP` map in the API
- Simple to audit — no complex server-side validation of a client-submitted number

### Rejected Alternatives
- **Trust client XP:** Never acceptable for a competitive leaderboard
- **Validate client XP against server map:** Same result but unnecessary round-trip

### Constraints
- Changing an XP value requires a code deploy
- Historical XP awards are not retroactively updated when XP values change

---

## ADR-003 — HMAC Cookie Sessions (No JWT, No Session Store)

**Date:** 2026-05-15
**Status:** Accepted

### Decision
Implement sessions as HMAC-SHA256 signed cookies. No JWT. No Redis session store.

**Token format:** `{username}:{HMAC-SHA256(username, secret)}`

### Rationale
- Stateless verification — no Redis lookup needed to authenticate a request
- Simpler than JWT (no library, no expiry encoded in payload — expiry is the cookie's `Max-Age`)
- HMAC is faster to verify than JWT signature validation
- `timingSafeEqual` comparison prevents timing attacks

### Rejected Alternatives
- **JWT:** Adds complexity (signing algorithm choice, expiry in payload, revocation problem); overkill for username-based sessions
- **Redis session store:** Adds a Redis read on every authenticated request; the stateless HMAC approach is faster
- **NextAuth.js:** Adds library overhead and abstracts session control away from the codebase

### Constraints
- Tokens cannot be revoked before expiry (session invalidation requires cookie deletion client-side — no server-side blacklist)
- Username changes would invalidate existing tokens (username changes not supported)
- Two separate secrets required: `SESSION_SECRET` and `ADMIN_SECRET`
- **Web only:** the mobile client uses a Supabase bearer JWT instead of this cookie (see ADR-013). "No JWT" applies to the web session scheme, not the platform as a whole.

---

## ADR-002 — Next.js 16 App Router

**Date:** 2026-05-08
**Status:** Accepted

### Decision
Use Next.js 16 with the App Router (not Pages Router) for all routing, API routes, and server components.

### Rationale
- App Router enables React Server Components — reduces client bundle size for content-heavy pages
- Co-located API routes avoid a separate Express/Fastify backend
- Vercel's first-party integration means zero-config deployment
- TypeScript and Tailwind integration are first-class

### Rejected Alternatives
- **Remix:** Less mature Vercel integration at project start; unfamiliar framework
- **SvelteKit:** TypeScript/component ecosystem less established for the target audience
- **Create React App + Express:** Two-repo complexity; no SSR

### Constraints
- `proxy.ts` must use the Next.js 16 Turbopack `proxy` export — not `middleware.ts` — for edge middleware
- Server components cannot use browser APIs; client components must be marked `"use client"`
- API routes are serverless functions — no long-running processes

---

## ADR-001 — Redis as the Sole Data Store

**Date:** 2026-05-08
**Status:** Accepted

### Decision
Use Upstash Redis (serverless HTTP) as the only persistent data store. No relational database.

### Rationale
- Serverless functions (Vercel) cannot maintain persistent database connections efficiently — Redis's HTTP client has no connection overhead
- Upstash's serverless Redis model has no idle cost and scales with usage
- The data model (user hashes, sorted sets for leaderboard, sets for trophies) maps cleanly to Redis primitives
- Pre-seed stage: simplicity over query power

### Rejected Alternatives
- **Supabase Postgres:** Better for relational queries, but connection pooling complexity in serverless; overkill for current schema
- **PlanetScale MySQL:** Same concerns; migration path also more complex
- **DynamoDB:** Vendor lock-in to AWS; more complex pricing

### Constraints
- No complex joins — all relationships resolved in application code
- Schema changes require data migration scripts or dual-read logic
- No full-text search without a separate service
- See ADR-009 for planned future migration path
