# Business Requirements Document — Kryptós CronOS

**Version:** v2.0.0
**Last Updated:** 2026-06-03
**Status:** Current

---

## 1. Executive Summary

Kryptós CronOS is a gamified cybersecurity and AI training platform — "Duolingo for cybersecurity." The platform delivers hands-on CTF challenges, AI-powered quizzes, and career-track curriculum to professionals seeking to validate skills and organizations seeking measurable workforce upskilling.

**Legal Entity:** Bolotin Enterprises, Inc. (Delaware C-Corp, incorporated May 23, 2026)
**Stage:** Pre-seed — seeking $1.5M seed round
**Live Product:** kryptoscronos.com

---

## 2. Stakeholders

| Stakeholder | Role | Primary Interest |
|---|---|---|
| Ajax Bolotin (CEO) | Founder + Product Owner | Revenue, investor readiness, curriculum quality |
| Individual Learners (B2C) | End users | Skill acquisition, career advancement, engagement |
| Enterprise Security Teams (B2B) | Organizational buyers | Team upskilling metrics, seat licensing, compliance |
| Seed Investors | Capital providers | TAM, growth trajectory, defensibility |
| Target Sponsors | CrowdStrike, AWS, SentinelOne, CompTIA, ISC² | Brand exposure, talent pipeline access |
| Cisco | Strategic partner target | Curriculum alignment, CyberOps exam mapping |

---

## 3. Business Goals

| ID | Goal | Target Metric | Timeline |
|---|---|---|---|
| BG-01 | Acquire paying Pro users | 500 active Pro subscribers | Q3 2026 |
| BG-02 | Close seed round | $1.5M at ≥ $8M pre-money | Q3 2026 |
| BG-03 | Land first B2B enterprise contract | $8/seat/mo, ≥50 seats | Q4 2026 |
| BG-04 | Secure first sponsor integration | $50K minimum deal | Q4 2026 |
| BG-05 | Achieve CAE recognition | CAE-CD or CAE-CO designation | 2027 |
| BG-06 | Align with Cisco CyberOps exam | Voucher redemption flow live | Q4 2026 |

---

## 4. Revenue Model

| Stream | Mechanism | Price | Status |
|---|---|---|---|
| B2C Pro Monthly | Stripe subscription | $13.99/mo | Live |
| B2C Pro Yearly | Stripe subscription | $99/yr (41% savings) | Live |
| B2B Enterprise | Seat licensing | $8/seat/mo | Planned Q4 2026 |
| Sponsor Integrations | CVE challenge drops, branded content | $50K+ deals | Planned |
| Hints Monetization | 30-second sponsor ad or Pro upgrade | CPM $50–200 | Planned |

**Trial:** 7-day free trial → ProPaywall → Stripe conversion funnel.

---

## 5. Functional Requirements

### 5.1 Authentication & Accounts

| ID | Requirement | Priority |
|---|---|---|
| FR-AUTH-01 | Users must be able to register with username, email, and password | Must Have |
| FR-AUTH-02 | Passwords hashed with PBKDF2-SHA256 (600k iterations, OWASP 2024) server-side; auto-rehash on login | Must Have |
| FR-AUTH-03 | Session maintained via HMAC-signed HttpOnly cookie (30-day expiry) | Must Have |
| FR-AUTH-04 | Logout must clear all session and admin cookies | Must Have |
| FR-AUTH-05 | Password reset via email link with 1-hour expiry token | Must Have |
| FR-AUTH-06 | Admin account distinguished by `ADMIN_USERNAME` env var | Must Have |
| FR-AUTH-07 | Admin access requires separate HMAC admin cookie (24h expiry) | Must Have |
| FR-AUTH-08 | Account lockout — 5 failed logins → 15-min lock per username | Must Have |
| FR-AUTH-09 | Mobile client authenticates via Supabase JWT (`Authorization: Bearer`), verified server-side via JWKS; API accepts cookie **or** bearer | Must Have |
| FR-AUTH-10 | Spoof-safe identity — bearer username resolved from verified email claim, never `user_metadata` | Must Have |

### 5.2 Curriculum & Stages

| ID | Requirement | Priority |
|---|---|---|
| FR-CUR-01 | Platform must offer 61 epochs containing 691 total stages | Must Have |
| FR-CUR-02 | Each stage is either a CTF challenge or a quiz | Must Have |
| FR-CUR-03 | CTF stages use a simulated terminal with filesystem commands | Must Have |
| FR-CUR-04 | CTF flags validated server-side; never exposed to client | Must Have |
| FR-CUR-05 | Quiz answers validated server-side | Must Have |
| FR-CUR-06 | Stages award XP and coins on first completion (deduplication enforced) | Must Have |
| FR-CUR-07 | Multi-step CTF fragment collection: all fragments required before flag assembly | Should Have |
| FR-CUR-08 | Stages display progressive hints (1 free; 2+ require Pro) | Should Have |
| FR-CUR-09 | ARIA AI chatbot available per stage (Socratic; never reveals flag) | Should Have |
| FR-CUR-10 | Stage completion emails sent via Resend | Should Have |

### 5.3 Progression & Gamification

| ID | Requirement | Priority |
|---|---|---|
| FR-PROG-01 | XP computed server-side; client-submitted XP rejected | Must Have |
| FR-PROG-02 | Daily login streaks tracked and displayed | Must Have |
| FR-PROG-03 | Milestone badges awarded at XP and streak thresholds | Should Have |
| FR-PROG-04 | Global, daily, and weekly leaderboards powered by Redis sorted sets | Must Have |
| FR-PROG-05 | PDF progress certificate downloadable from leaderboard page | Nice to Have |

### 5.4 Pro Tier & Payments

| ID | Requirement | Priority |
|---|---|---|
| FR-PAY-01 | 7-day free trial based on account `createdAt` | Must Have |
| FR-PAY-02 | Trial expiry triggers ProPaywall for stage access | Must Have |
| FR-PAY-03 | Stripe checkout for monthly and yearly subscriptions (web) | Must Have |
| FR-PAY-04 | Stripe webhook sets Pro on successful payment (`proStripe`) | Must Have |
| FR-PAY-05 | Tier downgrades only when no Pro source remains (multi-source) | Must Have |
| FR-PAY-06 | Admin can manually set user tier (comp override) | Must Have |
| FR-PAY-07 | Mobile in-app purchases via RevenueCat (App Store / Play); webhook sets `rcProExpiry`; `app_user_id` = username | Must Have |
| FR-PAY-08 | Unified entitlement across web + mobile (`getUserTier()` — Stripe / RevenueCat / voucher) | Must Have |

### 5.5 Trophy & Shop System

| ID | Requirement | Priority |
|---|---|---|
| FR-SHOP-01 | 51 trophies across 8 supply tiers (Field 50k → Apex 1) | Must Have |
| FR-SHOP-02 | Daily rotating shop of 10 trophies per user (seeded shuffle) | Must Have |
| FR-SHOP-03 | Trophy purchase uses atomic Redis supply reservation | Must Have |
| FR-SHOP-04 | Owned trophies viewable in `/trophies` vault | Must Have |
| FR-SHOP-05 | Avatar item shop with equip/unequip at `/avatar` | Should Have |

### 5.6 Admin Dashboard

| ID | Requirement | Priority |
|---|---|---|
| FR-ADMIN-01 | User management table with XP, coins, tier, stages, streak | Must Have |
| FR-ADMIN-02 | Tier toggle per user (pro/free override) | Must Have |
| FR-ADMIN-03 | Age/skin toggle per user (standard/youth/mature) | Must Have |
| FR-ADMIN-04 | NDA management — send, track, list signatories | Should Have |
| FR-ADMIN-05 | Docs viewer for all secured internal documents | Must Have |
| FR-ADMIN-06 | Investor metrics panel (WAU, retention, funnel, per-epoch completion) | Should Have |
| FR-ADMIN-07 | CMS override for stage content per stageId | Nice to Have |

### 5.7 Legal & Compliance

| ID | Requirement | Priority |
|---|---|---|
| FR-LEGAL-01 | Terms of Service page live at `/terms` | Must Have |
| FR-LEGAL-02 | Privacy Policy accessible from footer | Must Have |
| FR-LEGAL-03 | Attribution page for all third-party IP at `/attribution` | Must Have |
| FR-LEGAL-04 | NDA gate at `/demo` for investor/partner access | Should Have |

---

## 6. Non-Functional Requirements

| ID | Requirement | Target |
|---|---|---|
| NFR-01 | Page load time (FCP) | < 2s on 4G connection |
| NFR-02 | API response time (P95) | < 500ms |
| NFR-03 | Uptime | 99.5% (Vercel SLA) |
| NFR-04 | Password hashing time | < 1s per PBKDF2 operation |
| NFR-05 | CTF flag validation | Zero false positives |
| NFR-06 | Mobile responsiveness | All pages usable on 375px viewport |
| NFR-07 | WCAG accessibility | AA compliance on core pages |
| NFR-08 | CI pipeline | All pushes to `master` (single branch) must pass lint + tsc + build + audit |
| NFR-09 | Cross-platform | Native iOS + Android client (Expo) sharing one API + curriculum (`@kryptos/core`) |
| NFR-10 | Analytics | Privacy-friendly product analytics (Plausible — no cookies/PII) |

---

## 7. Constraints & Assumptions

| Constraint | Detail |
|---|---|
| Serverless runtime | All API routes are Next.js serverless functions — no persistent in-memory state |
| Redis-only persistence | No SQL database; all state via Upstash Redis HTTP API |
| No web localStorage credentials | Web session tokens in HttpOnly cookies only; mobile uses Supabase bearer JWT (AsyncStorage on device) |
| Monorepo | Turborepo workspaces — `apps/web` (deployed), `apps/mobile` (Expo, EAS), `packages/core` + `packages/api-client` |
| TypeScript strict mode | No `any` types; all code must pass `tsc --noEmit` |
| Vercel hosting | Deployment target is Vercel; `proxy.ts` uses Next.js 16 Turbopack `proxy` export |
| No client-side XP | XP values submitted by clients are ignored; server recomputes from stage map |
| Secured docs | Internal documents live in `secured-docs/` and are never placed in `public/` |

---

## 8. Out of Scope (Current Phase)

- Real-time multiplayer challenges
- Video content delivery
- LMS integrations (Canvas, Moodle)
- SAML/SSO enterprise auth (planned with B2B expansion)

**Now in scope / shipped (previously out of scope):**
- ✅ Native mobile apps (iOS/Android) — Expo / React Native client, code-complete (pending store submission via EAS)
- ✅ Adaptive difficulty engine — shipped v1.12.0
