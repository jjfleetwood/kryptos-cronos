# Kryptós CronOS — Documentation Index

**Live at:** kryptoscronos.com (web)
**GitHub:** github.com/jjfleetwood/kryptos-cronos
**Web version:** v1.30.0 · **Mobile app:** in development (Expo, pre-store)
**Last updated:** 2026-06-05

---

## What is Kryptós CronOS?

A gamified cybersecurity + AI training platform — learners progress through staged missions that simulate real attacks and defenses, choosing a multiple-choice **Quiz** or a hands-on **CTF** on every stage. **681 stages across 58 epochs and 11 tracks**, a live leaderboard, the **ARIA** AI hint chatbot, daily streaks, milestone badges, certification-readiness tracking for 10 industry certs, a resume builder, and admin tooling.

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
| [CURRICULUM.md](CURRICULUM.md) | Full stage catalog across all 58 epochs |
| [SECURITY_BRIEFING.md](SECURITY_BRIEFING.md) | Security posture, findings, remediation status |
| [RELEASE_NOTES.md](RELEASE_NOTES.md) | Version history and changelog |
| [BUSINESS_PROPOSAL_PRO.md](BUSINESS_PROPOSAL_PRO.md) · [BUSINESS_PROPOSAL_CASUAL.md](BUSINESS_PROPOSAL_CASUAL.md) | Investor pitch (formal / plain-language) |
| [PITCH_TARGETS.md](PITCH_TARGETS.md) · [VC_READINESS_ANALYSIS.md](VC_READINESS_ANALYSIS.md) | Investor targeting + readiness |
| [FINANCIALS.md](FINANCIALS.md) · [HOURS_LOG.md](HOURS_LOG.md) | P&L structure + dev hours/cost |
| [Architecture suite](ARCHITECTURE.md) | DATA_DIAGRAM, TECH_BOM, TECHNICAL_DESIGN, TECH_SPECIFICATIONS, ADR, TESTING_STRATEGY, USER_ACCEPTANCE_CRITERIA, BIZ_REQUIREMENTS |
| [TODO.md](TODO.md) | Open items and roadmap by priority |

---

## Quick Status

- **Curriculum:** 681 stages · 58 epochs · 11 tracks. Every CTF stage is dual-mode (Quiz + CTF). 10 cert paths on `/certs` (Security+, CySA+, Network+, ISC² CC, CompTIA AI+, ISACA CISA/CISM/CRISC, AWS AI Practitioner, Google Cloud PMLE) + a CyberOps Associate tracker.
- **Auth:** Web — PBKDF2-SHA-256 (600k) + HMAC-signed HttpOnly cookies; account lockout. Mobile — Supabase JWT sent as `Authorization: Bearer`, verified locally via JWKS (jose) with `getUser()` fallback; identity resolved from the verified email claim. `getAuthedUsername()` accepts either.
- **Access / monetization:** 7-day trial → Pro ($13.99/mo or $99/yr). **Stripe** (web checkout) + **RevenueCat** (mobile IAP), unified server-side entitlement (multi-source: Stripe / RevenueCat / voucher). Voucher redemption supported.
- **Mobile (in dev):** Expo SDK 56 + Expo Router; auth-gated tabs (Stages / Leaderboard / Profile), interactive quiz, ARIA chat, push notifications (streak nudges via Expo Push + Vercel cron), RevenueCat paywall. Needs device build (`eas build`) before store submission.
- **ARIA:** Claude Haiku, Socratic, stage-aware, rate-limited; adaptive cooldown for Pro.
- **API:** versioned `/api/v1/*` (rewrite → `/api/*`) for the mobile client; web calls `/api/*` directly.
- **Analytics:** Plausible (privacy-friendly). **Email:** Resend.
- **Security:** HSTS + nonce CSP (`proxy.ts`), CORS for `/api`, rate limiting, server-side XP + flag validation, admin HMAC cookie + audit log, secured-docs gated.
- **CI/CD:** GitHub Actions (lint + tsc + build + audit) on `master`; Vercel auto-deploys `master` to production (Root Directory `apps/web`).
- **Deployment:** `git push origin master` (auto-deploy) or `npx vercel --prod --project kryptos-cronos` from `apps/web`.
