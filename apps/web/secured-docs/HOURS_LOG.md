# Kryptós CronOS — Development Hours Log

**Tracking:** Founder development sessions using Claude Code (AI-assisted engineering)  
**Rate reference:** Senior contractor equivalent at $150/hr  
**AI cost reference:** Claude Max subscription ~$200/mo ÷ ~20 sessions/mo ≈ $10/session  
**Plan:** Claude Max (20x) — update if plan changes

---

## Summary (as of 2026-06-05)

| Metric | Value |
|---|---|
| **Total hours logged** | 92.5 h |
| **Sessions logged** | 15 |
| **Equivalent developer cost** | $13,875 (92.5h × $150/hr) |
| **Estimated AI cost to date** | ~$150 (15 sessions × $10/session) |
| **Estimated AI cost this month (June 2026)** | ~$60 (6 sessions × $10/session) |
| **AI leverage ratio** | ~93× (developer equivalent ÷ AI cost) |

---

## Session Log

| Date | Version | Hours | Summary | Cumulative |
|---|---|---|---|---|
| 2026-06-05 | v1.28.0 | 8.0 h | Debate Mastery practice exam (/exam/debate — 30 Qs from the 320-question debate pool, server-graded, same engine as cert/DMV). Platform-wide image self-hosting: Wikimedia killed on-demand thumbnail hotlinking (400 "use allowed sizes" + rate-limits), breaking all 214 stage images — sourced 290 self-hosted assets (77 per-stage debate keyed to each wonder + 213 other tracks) via Special:FilePath / Commons search API across throttled passes; STAGE_IMAGES map overrides config URLs + branded placeholder onError; recompressed 88MB→21MB with sharp; stripped all 214 dead URLs from configs. Homepage counts fixed (458→582, 6→11). Full /deploy. | 92.5 h |
| 2026-06-04 | v1.27.0 | 10.0 h | Debate & Speech track — 8 epochs / 80 stages / 320 quiz Qs (Foundations → Argumentation & Logic → The Formats → Research & Case Construction → Clash → Rhetoric/Delivery/Persuasion → Competitive & Professional Mastery incl. NSDA/Toastmasters/WUDC/WSDC/TOC certifications → The Psychology of Debate, research-grounded: Kahneman/Cialdini/McGuire/Damasio/Dweck). `/debate` skill-and-credential tracker (8 domains, NSDA-style degree ladder, real-credential reference cards; debate-domains.ts). ARIA hint monetization (`/api/hint` tier-gated: free 5/mission via persistent Redis count, Pro unlimited + adaptive cooldown; 402 upgrade flow in HintChatbot). Security hardening: centralized admin token → admin-token.ts (pure/Edge-safe v2 format, 8h expiry) + admin-auth.ts (requireAdmin + Redis revocation) replacing ~15 inline verifiers across the admin routes; admin-session takeover bypass + progress-forgery fixes; per-user rate limits + constant-time flag compare + neutralized bonus-XP timing. CR7 extended-track fact-vet + baseball-2 timeline bug fix. Full /deploy: tsc + eslint (0 err) + npm audit gates, doc reconciliation 458/38→582/50 (README/CURRICULUM/ARCHITECTURE/pitch decks), RELEASE_NOTES v1.27.0, SECURITY_BRIEFING v5.6, security audit, commit + push. | 84.5 h |
| 2026-06-03 | api-hardening | 2.0 h | API/auth hardening (3 backend TODOs). #7: local JWKS JWT verification (jose, cached) with getUser fallback in verifySupabaseJwt — drops the per-request network call, never less correct. #8: `/api/v1` namespace (next.config rewrite + @kryptos/api-client pinned) for a freezable mobile contract (future breaks → /api/v2). #9: multi-source entitlement (proStripe / rcProExpiry / voucherExpiry) — both revoke webhooks + getUserTier only downgrade when no other source is active, fixing the Stripe↔RevenueCat cross-downgrade. Branch → Vercel preview verified green → merged to master + branch deleted; prod verified (rewrite 401, bogus bearer 401). Also refreshed apps/mobile README. | 74.5 h |
| 2026-06-03 | monorepo+mobile | 12.0 h | Mobile roadmap Phases 2–6 + cross-platform foundation. **Phase 2:** Turborepo monorepo — relocated app→apps/web, extracted @kryptos/core (whole data layer, 91 refs rewired) + @kryptos/api-client (typed cross-platform client); Vercel root-dir cutover + merge to prod (lazy-supabaseAdmin build fix); single-branch collapse. **Phase 3:** RevenueCat webhook (/api/webhooks/revenuecat) + rcProExpiry entitlement; deployed. **Phases 4–6:** scaffolded Expo (SDK 56) app in monorepo — Supabase RN auth + bearer api-client, auth-gated tabs (stages/leaderboard/profile), interactive server-validated quiz, ARIA hint chat, push notifications (mobile + /api/push/* + streak-reminder cron + vercel.json), RevenueCat IAP paywall, EAS build config + store identifiers. Plus: live bearer-auth E2E verification on prod (throwaway account), delete-account hardening (email-index + Supabase cleanup), CLAUDE.md monorepo refresh, env reconciliation. All tsc/build green; merged phase-4-mobile→master (943f205, preview-verified) + prod healthy. Mobile NOT yet device-run. | 72.5 h |
| 2026-06-03 | v1.25.0 | 2.5 h | Mobile roadmap Phase 1 — multi-client token auth. New getAuthedUsername resolver (bearer Supabase JWT → session cookie) + verifySupabaseJwt (email-claim identity, not spoofable user_metadata) + POST /api/auth/bootstrap (provision Supabase-only accounts) + migrated 16 gameplay routes + origin-allowlisted CORS in proxy.ts. Caught + fixed a self-introduced metadata-spoofing takeover vector during review. Verified live (preflight/401/origin). Also authored MOBILE_ROADMAP.md (7-phase plan) earlier in the session. Deployed + dev/master | 60.5 h |
| 2026-06-03 | v1.24.0 | 2.0 h | AI cloud certifications on /certs — AWS Certified AI Practitioner (AIF-C01, 5 domains, rose) + Google Cloud Professional ML Engineer (PMLE, 6 domains, green). New aws-aip/gcp-pmle CertIds + domain defs + builders in cert-domains.ts; AI_PLATFORM_CERT_DOMAINS table (AWS→49 AI-native stages, GCP→~33 ML-lifecycle stages) merged into CERT_DOMAINS at load; practice exams auto-populate via getStagesForCert; allowlisted in exam route + exam page. Full /deploy: tsc+eslint+npm audit gates, vercel --prod, version bump, all docs stamped, security audit, commit + push dev | 58.0 h |
| 2026-05-30 | v1.23.0 | 6.0 h | Completed dual-mode quiz rollout — final 69 CTF stages across 6 batches (quantum-3 QKD, quantum-4 risk-mgmt, cisco-2..5, umbrella, ancient stages.ts), reaching 203/203 every CTF stage now Quiz+CTF; idempotent inject-quizzes.mjs tooling. New brand logo (guilloché watch dial, replaces 🛡️) + favicon; playable homepage mini-CTF hero; certs left-sidebar + CyberOps-first + Resume relocated; RichText backtick/single-quote highlighting + chilled lead colors. Full /deploy: tsc+eslint+npm audit gates, version bump, all docs updated, security audit, commit + push dev | 56.0 h |
| 2026-05-29 | v1.22.0 | 8.0 h | quantum-4 epoch (10 CTF stages — CBOM, HNDL, FIPS 203/204/205, CNSA 2.0, migration roadmap, sector risk, board briefing, hybrid crypto, quantum-safe arch, supply chain); emerging-tech epoch (10 quiz stages — adversarial ML, foundation model supply chain, FL gradient inversion, deepfakes, AI-augmented threats, edge AI, EU AI Act, agentic AI, quantum-AI, ERM); cert-domain AI+ merge fix; CLAUDE.md + RELEASE_NOTES + all UI/i18n/email counts updated (438→458, 36→38, 6 languages); deploy + security audit | 50.0 h |
| 2026-05-29 | v1.21.0 | 17.0 h | Full security stage rewrite sprint — all 8 epochs upgraded to HS/University standard (cisco-core, ancient, cisco-enterprise, cisco-secops, cisco-advanced, mitre, mitre-atlas, owasp-llm): 3-paragraph historically-grounded incidents with attribution, policy/regulatory aftermath, specific CVE mechanics; step-structured STEP/DETECTION/REMEDIATION code blocks. Fixed CI build (2 ESLint errors). Added CompTIA AI+ cert path (/certs): 5 domains, 67 stages mapped (atlas-01..12, llm-01..12, quantum epochs, XDR stages). ISACA CISA/CISM/CRISC and Network+/CySA+ cert expansions from prior session. | 42.0 h |
| 2026-05-29 | v1.19.x | 7.0 h | Full docs refresh (CLAUDE.md v1.18.1, RELEASE_NOTES 6 missing versions), harsh VC assessment v3.0, all-star tier removed, elementary redesign (all 30 bt stages rewritten for ages 5-10), deep security review + CSPRNG fix + survey size limit, cert expansion (Network+ N10-009, CySA+ CS0-003 added), FINANCIALS P&L integration | 25.0 h |
| 2026-05-28 | v1.17.0 | 3.0 h | Full OWASP Top 10 security audit — 9 vulnerabilities patched (admin route guards, rate limits, Stripe origin whitelist, voucher race conditions, account lockout, audit log, PBKDF2 600k) | 18.0 h |
| 2026-05-28 | v1.18.0 | 8.0 h | Multi-agent sprint — 154 stage images (baseball/driving/quantum/hair), /certs cert path dashboard (CompTIA Security+ & ISC² CC), /resume builder with PDF export, survey → 30-day Pro incentive, streak milestone bonuses, docs reconciled to v1.18.0 | 15.0 h |
| 2026-05-28 | v1.16.0 | 4.0 h | Voucher system — admin generation, /api/redeem, ProPaywall redeem input, expiry display, revoke button; Security/NC section headers, Paris/Milan images, i18n, survey, downloads | 7.0 h |
| 2026-05-28 | pre-session | 2.0 h | Session setup, context load, v1.15.x sprint review | 3.0 h |
| 2026-05-28 | baseline | 1.0 h | Infrastructure setup: CI/CD pipeline, Vercel config, GitHub secrets | 1.0 h |

---

## Notes

- Hours are estimated based on scope of changes (files modified, complexity, research involved)
- AI-assisted sessions compress 3–5× vs. solo development — logged hours reflect equivalent human-developer effort
- "Equivalent developer cost" is the market value of the work produced, not actual spend
- AI cost is the amortized Claude Max subscription cost per session (not per-token billing)
- Update the Summary block after each deploy session
