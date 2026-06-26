# Kryptós CronOS — Documentation Index

**Live at:** kryptoscronos.com (web)
**GitHub:** github.com/jjfleetwood/kryptos-cronos
**Web version:** v1.30.0 · **Mobile app:** in development (Expo, pre-store)
**Last updated:** 2026-06-05

---

## What is Kryptós CronOS?

A gamified cybersecurity + AI training platform — learners progress through staged missions that simulate real attacks and defenses, choosing a multiple-choice **Quiz** or a hands-on **CTF** on every stage. **811 stages across 80 epochs and 16 tracks**, a live leaderboard, the **ARIA** AI hint chatbot, daily streaks, milestone badges, certification-readiness tracking for 12 industry certs, a resume builder, and admin tooling.

> **Positioning — two products, one engine.** Kryptós CronOS is the **cybersecurity career product**: the public experience is security-only — *Learn → Certify → Prove → Get hired*. The same `@kryptos/core` engine also drives a diverse set of non-security learning tracks (debate, sports, languages, driving, crafts), which demonstrate that the engine generalizes to any structured skill. **For now these stay in the same app** on a separate, low-prominence route (`/explore`) rather than a second deployment, and are framed as a separate consumer/licensing brand. Cyber investors see the focused cyber product; the diverse catalog is optionality, not the pitch. See `VC_READINESS_ANALYSIS.md` Part 2.5.

**Now cross-platform.** The codebase is a **Turborepo monorepo**:
- **`apps/web`** — the Next.js 16 web app + API (production at kryptoscronos.com).
- **`apps/mobile`** — an Expo / React Native iOS + Android app (in development), consuming the same API.
- **`packages/core`** — shared content (all stage data) + types (`@kryptos/core`).
- **`packages/api-client`** — a typed cross-platform API client (`@kryptos/api-client`).

Stack: Next.js 16 · React 19 · TypeScript · Tailwind 4 · Upstash Redis · Supabase Auth · Stripe + RevenueCat · Resend · Anthropic (Claude Haiku) · Plausible · Vercel.

---

## Documentation Map

| Document | Purpose |
|---|---|
| [ARCHITECTURE.md](ARCHITECTURE.md) | System design, monorepo layout, data layer, API routes |
| [MOBILE_ROADMAP.md](MOBILE_ROADMAP.md) | Cross-platform/mobile plan (Phases 1–6) + current status |
| [BUILD.md](BUILD.md) | Local dev setup (monorepo), build process |
| [CICD_PIPELINE.md](CICD_PIPELINE.md) | Branch strategy, GitHub Actions, Vercel, deploy |
| [OPS.md](OPS.md) | Operations runbook: env vars, services, monitoring |
| [PARTNERS.md](PARTNERS.md) | Companies, services, and APIs supporting the build |
| [API_REFERENCE.md](API_REFERENCE.md) | API route specifications |
| [CURRICULUM.md](CURRICULUM.md) | Full stage catalog across all 80 epochs |
| [SECURITY_BRIEFING.md](SECURITY_BRIEFING.md) | Security posture, findings, remediation status |
| [RELEASE_NOTES.md](RELEASE_NOTES.md) | Version history and changelog |
| [BUSINESS_PROPOSAL_PRO.md](BUSINESS_PROPOSAL_PRO.md) · [BUSINESS_PROPOSAL_CASUAL.md](BUSINESS_PROPOSAL_CASUAL.md) | Investor pitch (formal / plain-language) |
| [PITCH_TARGETS.md](PITCH_TARGETS.md) · [VC_READINESS_ANALYSIS.md](VC_READINESS_ANALYSIS.md) | Investor targeting + readiness |
| [FINANCIALS.md](FINANCIALS.md) · [HOURS_LOG.md](HOURS_LOG.md) | P&L structure + dev hours/cost |
| [Architecture suite](ARCHITECTURE.md) | DATA_DIAGRAM, TECH_BOM, TECHNICAL_DESIGN, TECH_SPECIFICATIONS, ADR, TESTING_STRATEGY, USER_ACCEPTANCE_CRITERIA, BIZ_REQUIREMENTS |
| [TODO.md](TODO.md) | Open items and roadmap by priority |

---

## Quick Status

- **Curriculum:** 811 stages · 80 epochs · 16 tracks. Every CTF stage is dual-mode (Quiz + CTF). 12 cert paths on `/certs` (Security+, CySA+, Network+, ISC² CC, CompTIA AI+, ISACA CISA/CISM/CRISC, ISACA AAIA/AAISM, AWS AI Practitioner, Google Cloud PMLE) + CyberOps Associate & PQC-migration trackers.
- **Auth:** Web — PBKDF2-SHA-256 (600k) + HMAC-signed HttpOnly cookies with a **per-user epoch (revocable sessions)**; account lockout. Mobile — Supabase JWT sent as `Authorization: Bearer`, verified locally via JWKS (jose) with `getUser()` fallback; identity resolved from the verified email claim. `getAuthedUsername()` accepts either.
- **Passwords:** strong policy (12+, 3-of-4 character classes, common/username blocklist) + **HaveIBeenPwned breach check**, enforced on register + reset. A password reset invalidates all prior sessions; "log out other devices" available. Soft email verification (banner-only).
- **Access / monetization:** 7-day trial → Pro ($13.99/mo or $99/yr). **Stripe** (web checkout) + **RevenueCat** (mobile IAP), unified server-side entitlement (multi-source: Stripe / RevenueCat / voucher). Voucher redemption supported.
- **Mobile (in dev):** Expo SDK 56 + Expo Router; auth-gated tabs (Stages / Leaderboard / Profile), interactive quiz, ARIA chat, push notifications (streak nudges via Expo Push + Vercel cron), RevenueCat paywall. Needs device build (`eas build`) before store submission.
- **ARIA:** Claude Haiku, Socratic, stage-aware, rate-limited; adaptive cooldown for Pro.
- **API:** versioned `/api/v1/*` (rewrite → `/api/*`) for the mobile client; web calls `/api/*` directly.
- **Analytics:** Plausible (privacy-friendly). **Email:** Resend.
- **Security:** HSTS + nonce CSP (`proxy.ts`), CORS for `/api`, rate limiting, server-side XP + flag validation, admin HMAC cookie + audit log, secured-docs gated. (2FA deferred — admin-only TOTP is the documented future trigger; see SECURITY_BRIEFING v6.0.)
- **CI/CD:** GitHub Actions (lint + tsc + build + audit) on `master`; Vercel auto-deploys `master` to production (Root Directory `apps/web`).
- **Deployment:** `git push origin master` (auto-deploy) or `npx vercel --prod --project kryptos-cronos` from `apps/web`.
