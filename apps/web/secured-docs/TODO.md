# Kryptós CronOS — To-Do & Roadmap

**Last updated:** 2026-06-02 (deep content review)

---

## Content Review — 2026-06-02 (deep read of all 38 epochs)

Findings from a structural + sampled read of the curriculum. Ranked by leverage.

| # | Item | Effort | Priority | Notes |
|---|---|---|---|---|
| CR1 | **Decide the age-tier pipeline (finish vs cut)** | Decision + 1–3 days | P1 | ✅ **CUT — 2026-06-02** (commit bf006b8). Removed the `ancient` elementary/jhs/university variants (24 stages); recoverable from git history. NB: `first-journey-2/3.ts` are NOT age content — they're bt-11..30, the real onboarding epoch (kept). The age-tier idea is reborn as a **product angle** for the K-12→university school pipeline (added to investor docs, commit 3e3ebbb) — to be built there, not as hidden group-gating. |
| CR2 | **Content reformat grind (readability)** | Large | P1 | ✅ **DONE 2026-06-03.** All in-scope epochs reformatted to lead-sentence + bulleted-with-dialogue across the 3 briefing sections: every security/tech-audit/AI/quantum epoch + cisco-2/3/4/5 + umbrella + stages.ts (ancient + cisco-core) + first-journey ×3 (bt-01..30, light-touch). Tracker `CONTENT_REFORMAT.md` all ticked; detector `apps/web/scripts/scan-reformat.mjs`. Extended curriculum (~210 stages) remains OUT OF SCOPE. |
| CR3 | **Regroup scattered AI content** | ~2 hours | P2 | ✅ **Done 2026-06-02.** AI Security group now holds `mitre-atlas` + `owasp-llm` + `emerging-tech`; Threat Frameworks = `mitre` (ATT&CK) only; `emerging-tech` removed from Quantum Era. Updated `epochGroups` in `stages/page.tsx` + English group descriptions in `messages/en.json`. **Translation follow-up DONE 2026-06-03** — threatFrameworksDesc / aiSecurityDesc / quantumEraDesc updated in all 6 non-English locales (de/es/fr/hi/pt/pl) to match the regrouping. |
| CR4 | **Fix epoch theme color clashes** | ~1 hour | P2 | ✅ **Done 2026-06-02.** `quantum-4` emerald → indigo (rejoins quantum cool-family cyan/teal/sky/indigo; clears `first-journey` collision); `baseball-6` red → orange (clears `baseball-1` duplicate). `src/app/stages/epoch-theme.ts` (all 3 maps). |
| CR5 | **Make `first-journey` actually beginner-friendly** | Medium | P2 | ✅ **2026-06-02 — reassessed + light polish.** With the kid audience deferred to the school product (CR1), `first-journey`'s job is adult/teen-beginner onboarding — and at that level it's genuinely good (analogy-driven: Piraeus road-trip for networks, fishing-lure for phishing; incidents told plainly). Did a bounded polish (glossed BGP on first use). The true kid-level rewrite belongs in the school-pipeline product, not here. |
| CR6 | **Cert-mapping accuracy pass** | Large, judgment-heavy | P3 | ✅ **DONE 2026-06-04.** Diversified per-stage `cert-domains.ts` mappings for the 11 copy-paste epochs (152 stages): cisco-core/enterprise/secops/advanced (m01–m50), tech-audit-1/2/3/4, mitre, quantum-1/2/3. Each stage now maps to the domains its actual topic exercises (e.g. auth-bypass CVEs → Access Controls, DoS → Operations/Resilience + Incident, Mimikatz/credential → Cryptography, ATT&CK tactic-specific, PQC algorithm-specific) instead of an identical epoch-wide block; inline `//` topic comments added. Stayed within each stage's already-mapped certs (ring scope unchanged); validated 1839 domain refs (0 invalid) + every domain retains ≥1 stage. Already-varied epochs (atlas, llm, emerging, quantum-4, ancient, first-journey, umbrella) left as-is. |
| CR7 | **Fact-vet the extended tracks** | Medium | P3 | 🟡 **SPOT-CHECKED 2026-06-04.** Sampled all five extended families against known facts: **French** (tu/vous, greetings, the real 2016 "Bonjour" tourism guide) ✓ · **Italian** (Dante 1321 / Bembo 1525 / unification 1861, greetings) ✓ · **Driving** (CA permit 15½, DL 44C, 38/46 written test, 20/40 vision) ✓ · **Travel/Paris** (Navigo pricing, pneumatic lines 1/4/6/11/14, Châtelet-Les Halles, Metro opened 19 Jul 1900) ✓ · **Crafts/hair-color** (cuticle/cortex, ammonia alkaline lift, porosity) ✓. **Fixed 1 user-facing data bug**: `baseball-2.ts` timeline had a misplaced quote folding literal `, highlight: false` into the displayed event text (1941 Ted Williams row). The tracks are well-researched (not stubs); sampled facts hold up. NB: the new **debate-1…7** track (70 stages) joins the extended tracks and was authored with inline references; a deeper full read of crafts/nails/baseball historical timelines remains optional before a "learning platform" marketing push. |

**What's already strong (no action):** the security core — `ancient`, `cisco-*`, `mitre`, `mitre-atlas`, `owasp-llm`, `tech-audit-*`, `quantum-*` — reads at genuine HS/university level with named incidents, attribution, and runnable code. `stage-01` is the canonical template.

---

## New Items — Added 2026-05-29

| # | Item | Effort | Priority | Status |
|---|---|---|---|---|
| G | **Analytics — install Plausible or PostHog** | 2 hours | P1 | ✅ **DONE 2026-06-03 — Plausible installed.** Privacy-friendly, GDPR-compliant. Closes the "can't pitch without user data" gap. |
| H | **83(b) election filing** | Legal | P1 | ✅ Likely **FILED ~2026-05-30** (tracking …40418197); founder election reviewed 2026-06-03, complete per §1.83-2(e). Confirm USPS receipt. (30-day clock from the 2026-05-27 transfer → ~June 26.) |
| I | **Public launch campaign** | 1 day | P1 | r/netsec, DEF CON Discord, HackerNews Show HN, security Twitter/LinkedIn. First 1,000 MAU is the only thing that makes this fundable. |
| J | **First paying user** | At launch | P1 | Even $13.99/mo from one real user changes the conversation from "$0 revenue" to "revenue exists." |
| K | **Named advisor** | 1–3 conversations | P2 | A CISO, security researcher, or recognized practitioner willing to be named publicly. Changes single-founder risk perception for investors. |
| L | **One enterprise pilot conversation** | 2–4 weeks outreach | P2 | A community college cybersecurity program, regional MSSP, or corporate SOC team willing to pilot. Even an LOI counts. |
| M | **Cross-platform / mobile app** | ~3 months | P2 | 🟡 **Code-complete, in dev (branch merged to master).** Phases 1–6 + IAP done: Turborepo monorepo, Supabase bearer auth, Expo app (auth/quiz/ARIA/push/RevenueCat paywall), EAS build config. See `MOBILE_ROADMAP.md`. **Remaining (yours):** device run, `eas init` + `eas build`, RevenueCat dashboard, store listings, Vercel envs (CRON_SECRET, REVENUECAT_WEBHOOK_AUTH). Dev server runs (`expo start` → web `w`); Expo Go can't host SDK 56 → phone needs a dev build. |

## Completed Items — Added 2026-05-28, Done 2026-05-29

| # | Item | Status |
|---|---|---|
| A | **Elementary section redesign (5-10 yr perspective)** | 🔲 OPEN (correction 2026-05-29) — previously marked Done in error; bt-01–bt-30 are still at HS/adult reading level. The ages 5–10 "Junior Cyber Agent Academy" rewrite has not been done. |
| B | **Incentive system to drive stage completion** | ✅ Done (v1.18.0) — survey → 30-day Pro; streak milestones → coin bonuses |
| C | **Certificate paths (Cisco CyberOps / CompTIA / ISC²)** | ✅ Done (v1.18.0) — /certs page, CompTIA Security+ + ISC² CC, 230+ stage mappings |
| D | **Resume building module** | ✅ Done (v1.18.0) — /resume with PDF export, epoch-based skill suggestions |
| E | **Images for all stage briefing pages** | ✅ Done (v1.18.0) — 154 new images: baseball (70), driving (24), quantum (30), nails/hair (30) |
| F | **Update docs to current facts** | ✅ Done (v1.18.0 + v1.18.1 session) — CLAUDE.md v1.18.1, RELEASE_NOTES updated, VC_READINESS_ANALYSIS v3.0, TODO.md refreshed |

---

## Priority 1 — Before Production Scale

| # | Item | Effort | Status | Notes |
|---|---|---|---|---|
| 1 | **Production auth migration** | — | ✅ Done | PBKDF2 + HMAC-signed HttpOnly `session_token` cookie (30d). SessionStorage only caches username for UI rendering — no credentials client-side. Current posture is production-ready. Supabase migration deferred until OAuth or email-verification features are needed. |
| 2 | **Signed JWT / server-side sessions** | — | ✅ Done | `server-session.ts` issues HMAC-signed `u:{username}:{hmac}` tokens verified server-side on every request. Functionally equivalent to signed JWT. |
| 3 | **Server-side flag validation** | — | ✅ Done | `stage-flags.ts` has `import "server-only"` — cannot be bundled to client. `/api/check-flag` reads flags exclusively from this file. |
| 4 | **CI pipeline** | — | ✅ Done | `.github/workflows/ci.yml` — lint + tsc + build + `npm audit --audit-level=high` on every push to master. |
| 5 | **Redis backup** | — | ✅ Done | Daily backups enabled in Upstash console. |

---

## Priority 2 — Curriculum Gaps

All documented Cisco curriculum gaps have been addressed in `cisco-advanced` epoch (v1.8.0).

| # | Item | Effort | Status | Notes |
|---|---|---|---|---|
| 6 | **Cisco Firepower / FTD stages** | 2–3 days | ✅ Done | m39 (NGIPS fragmentation evasion CTF), m40 (FMC architecture quiz), m41 (CVE-2022-20927 SSL VPN DoS CTF) |
| 7 | **Cisco SecureX / XDR stages** | 1–2 days | ✅ Done | m42 (XDR threat hunt CTF), m43 (XDR architecture quiz), m44 (DNA Center API CTF) |
| 8 | **Cisco DevNet stages** | 1–2 days | ✅ Done | m45 (NETCONF/YANG/gRPC quiz), m46 (CyberOps kill chain CTF) |
| 9 | **CyberOps Associate stages** | 2 days | ✅ Done | m47 (CBROPS 200-201 domains quiz), m46 (SOC kill chain CTF) |
| — | **Cisco Silicon One & Quantum-Safe** | — | ✅ Done | m48 (Silicon One MACsec/gRPC telemetry CTF), m49 (P4 programmability quiz), m50 (IKEv2 hybrid PQC / ML-KEM-768 CTF) |

---

## Priority 3 — Product & UX

| # | Item | Effort | Status | Notes |
|---|---|---|---|---|
| 10 | **Stage count audit** | — | ✅ Done | Fixed 338 → 346 across homepage (hero, stats, CTA, pricing); per-track numbers updated; "Nine tracks" → "Ten tracks"; stages/page.tsx description updated. |
| 11 | **Pro tier gating** | 3–5 days | ✅ Done | `tier` field on user Redis hash. `src/lib/access.ts` (server-only) gates all non-free stages. Free: bt-01/02/03. `ProPaywall` component with Stripe Checkout (monthly $5.99 / yearly $55.99). Webhook handler for `checkout.session.completed` + `customer.subscription.deleted`. Requires env vars: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRO_MONTHLY_PRICE_ID`, `STRIPE_PRO_YEARLY_PRICE_ID`. |
| 12 | **Hints monetization** | 2–3 days | Deferred | Tied to Stripe (#11 done). Ready to implement. |
| 13 | **User progress export** | — | ✅ Done | `GET /api/progress/certificate` generates PDF via @react-pdf/renderer: username, coins, stages, badges, streak, per-epoch breakdown. "Download Progress Report" button on Leaderboard page (logged-in users only). |
| 14 | **Mobile responsiveness audit** | — | ✅ Done | Leaderboard table: responsive grid (3-col mobile, 6-col sm+), secondary stats shown inline on mobile; FeedbackWidget: added `touch-action: none` on drag handle; CTF terminal: confirmed 100dvh, scrollIntoView on focus, sm: breakpoints. Stage map: confirmed 1→2→3 col grid. |

---

## Priority 4 — Business & Go-To-Market

| # | Item | Notes |
|---|---|---|
| 15 | **Investor outreach — Tier 1** | ForgePoint Capital, SYN Ventures, ClearSky Security, Owl Ventures, Reach Capital, Cisco Investments. See `PITCH_TARGETS.md` (updated: 358 stages, 32 epochs, 10 tracks). |
| 16 | **Sponsor integration conversations** | CrowdStrike, AWS, SentinelOne, CompTIA, ISC². Contextual ad/sponsorship model aligned to stage topic. |
| 17 | **B2B enterprise motion** | $8/seat/mo targeting internal audit teams, SOC training programs, university cybersecurity programs. CAE advisory doc (`PITCH_CAE_CONTINUOUS_MONITORING.md`) is the lead asset. `BUSINESS_PROPOSAL_PRO.md` and `BUSINESS_PROPOSAL_CASUAL.md` updated to v1.8.0 stats. |
| 18 | ~~**kryptoscronos.com marketing site**~~ | ✅ Done — kryptoscronos.com IS the app. `src/app/page.tsx` updated to 358 stages, 32 epochs, 10 tracks. |

---

## Known Tech Debt

| # | Item | Notes |
|---|---|---|
| 19 | ~~**`sync-user` route**~~ | ✅ Audited — route deleted, no client code references it. Stale `.next` cache was the only source of the phantom type error. |
| 20 | ~~**`unsafe-inline` CSP**~~ | ✅ Fixed — `src/proxy.ts` generates per-request nonce, sets dynamic `Content-Security-Policy` header with `nonce-{nonce}` in script-src. `next.config.ts` no longer sets static CSP. `layout.tsx` made async; reads `x-nonce` from request headers and applies to anti-FOUC script tag. (Next.js 16 Turbopack uses `proxy.ts` with `proxy` export, not `middleware.ts`.) |
| 21 | ~~**`any` cast in DocsViewer**~~ | ✅ Fixed — made `children` optional in all component prop types to match react-markdown's `Components` type. `as any` removed; tsc clean. |

---

## Completed (Recent)

- ✅ v1.8.0 — `cisco-advanced` epoch (32nd epoch): 12 stages (m39–m50) covering Firepower NGIPS/FTD, Cisco XDR, DNA Center API, NETCONF/YANG/gRPC, CyberOps Associate, Silicon One P4/MACsec, and IKEv2 hybrid PQC (ML-KEM-768/RFC 9370). Wired into stages.ts, epoch-theme.ts, stage map, CLAUDE.md. Stage count 346 → 358.
- ✅ v1.7.5 — Nonce-based CSP: `src/middleware.ts` generates per-request nonce; `next.config.ts` static CSP removed; `layout.tsx` async with `nonce=` on anti-FOUC script
- ✅ v1.7.5 — Priority 4 docs: `PITCH_TARGETS.md` updated (346 stages, 10 tracks); `PARTNERS.md` v3.1 (Resend email types, @react-pdf/renderer, CSP note corrections); `BUSINESS_PROPOSAL_PRO.md` + `BUSINESS_PROPOSAL_CASUAL.md` updated to v1.7.4 stats (346 stages, 31 epochs, 10 tracks, new live features)
- ✅ v1.7.3 — `/attribution` page: full legal notices for all third-party IP (MITRE, OWASP, ISACA/COBIT, CIS, ITIL, PCI DSS, Anthropic/MCP, HashiCorp Vault, STIX/TAXII, NIST, CVE/NVD)
- ✅ v1.7.4 — Stage completion emails: fire-and-forget on every new capture; XP, badge, streak, next-stage link (via Resend in `server-progress.ts`)
- ✅ v1.7.4 — `GET /api/progress/certificate`: server-rendered PDF via @react-pdf/renderer; "Download Progress Report" button on leaderboard
- ✅ v1.7.4 — Mobile audit: leaderboard responsive grid, FeedbackWidget touch-action, stage count corrected (346), "Ten tracks" everywhere
- ✅ v1.7.3 — `content-flags.ts`: per-epoch IP risk registry (risk level, license, attribution text) for 20+ epochs
- ✅ v1.7.2 — `adminOnly` shop items: server-side filter + purchase block; Medallion of Amazement hidden from regular users
- ✅ v1.7.2 — Nav cleanup: Avatar/Trophies/Shop as icon-only (👤 🏆 🛒) on desktop with title tooltips; full labels in mobile drawer
- ✅ v1.7.2 — `/avatar` page: equip/unequip owned items; added as nav link for logged-in users
- ✅ v1.7.2 — Shop restructured: single scrollable page (avatar items → divider → Today's Showcase); no tab UI
- ✅ v1.7.2 — `/trophies` is now collection vault only (user sees owned trophies; admin sees full library); trophy purchases moved to Shop
- ✅ v1.7.2 — Trophy system: 51 trophies, 8 tiers, daily rotating showcase of 10/user; atomic Redis supply reservation
- ✅ v1.7.1 — `GET /api/progress` fixed: was requiring `?username=` query param (never passed); now reads from session cookie
- ✅ v1.7.1 — CTF localStorage state scoped by username (`ctf-state:{username}:{stageId}`); old unscoped keys swept on page load
- ✅ v1.7.0 — Sports track renamed to Baseball across stage map and homepage
- ✅ v1.6.3 — CAE continuous monitoring advisory doc in admin viewer
- ✅ v1.6.2 — Draggable feedback widget with localStorage persistence
- ✅ v1.6.1 — Docs consolidation: `docs/` single source of truth, auto-sync to `secured-docs/`
- ✅ v1.6.0 — 18 epochs, per-epoch pages, breadcrumb nav, first-journey rename, Crafts track
