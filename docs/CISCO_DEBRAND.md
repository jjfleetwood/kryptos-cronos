# Cisco De-brand / Risk-Prune — Working Tracker

**Branch:** `debrand-cisco` (off master) · **Started:** 2026-06-20 · **Why:** founder employed at Cisco (CA); remove Cisco trademark + Cisco-product + Cisco-cert risk from the product before any rollout. See `docs/legal/`.

## Decisions (locked)
- **De-brand & KEEP curriculum** for the 4 security epochs — rename vendor-neutral, scrub *branding-level* Cisco framing (titles/descriptions/track marketing). **Keep** in-stage lessons that cite real, public Cisco CVEs as examples (same policy as incidental refs).
- **DELETE entirely:** `umbrella` (Cisco Umbrella/SASE — a Cisco product), the `/cyberops` cert tracker + `cyberops-domains.ts` (Cisco CyberOps CBROPS — a Cisco cert), and Cisco-cert mappings/counts.
- **Leave incidental public-CVE references** in non-Cisco epochs (mitre/owasp/quantum/etc.) untouched.
- **Internal epoch IDs** stay `cisco-core/-enterprise/-secops/-advanced` for now (slugs only; low risk; renaming IDs is a separate, higher-blast-radius change). De-brand every *displayed* surface. Revisit slug rename if counsel wants.

## Rename map (display names; IDs unchanged)
| Epoch ID | Old display | New display |
|---|---|---|
| cisco-core | Cisco: Core CVEs | Core CVEs |
| cisco-enterprise | Cisco: Enterprise Attack | Enterprise Attack |
| cisco-secops | Cisco: Security Operations | Security Operations |
| cisco-advanced | Cisco: Advanced Defense | Advanced Defense |

## Checklist
- [ ] **C1 — Delete `/cyberops` tracker** (source): `apps/web/src/app/cyberops/page.tsx`, `packages/core/src/cyberops-domains.ts`, refs in `certs/page.tsx`, `page.tsx` (homepage), `resume/page.tsx`, `api/resume/generate/route.ts`, `admin/_panels.tsx`, `StageInfo.tsx`, `epoch/[epochId]/page.tsx`. Drop cert count 12→11.
- [ ] **C2 — Delete `umbrella` epoch** (source): `packages/core/src/umbrella.ts` + `apps/web/scripts/quiz-data/umbrella.json`; de-wire from `stages.ts`, `stage-flags.ts`, `stage-commands.ts`, `content-flags.ts`, `cert-domains.ts`, `track-data.ts`, `epoch-theme.ts`. Drop 10 stages / 1 epoch.
- [ ] **C3 — De-brand the 4 epochs**: display name + epoch overview/description framing in `cisco-2/3/4/5.ts` and the cisco-core source (in `stages.ts`); homepage card, certs page, i18n track label/desc (`stages.tracks.enterprise*`).
- [ ] **C4 — Scrub UI Cisco strings**: homepage, certs, resume, admin, terms, attribution, survey, all 7 `messages/*.json` (remove cyberops/umbrella UI keys; de-Cisco visible strings).
- [ ] **C5 — Translations (scripted)**: strip umbrella + cyberops + CyberOps-cert keys/entries from `packages/core/src/translations/*` (meta-*, ctf-quiz-*, batches) and de-brand cisco epoch meta. Then `npm run gen:meta -w @kryptos/core`.
- [ ] **C6 — Reconcile counts**: 831→821 stages, 75→74 epochs, 16 tracks (enterprise track stays), 12→11 cert paths, 292 CTFs→(umbrella CTFs removed) recompute. Update homepage stats, OG/Twitter meta, account/survey/emails + all 7 locales.
- [ ] **C7 — Verify**: `npx tsc --noEmit -p apps/web/tsconfig.json` + core tsc + `npm run build` + `validate-ctf.mjs` + `check:meta`. Screenshot /stages + an enterprise epoch.
- [ ] **C8 — Commit per checkpoint; do NOT push until Jacob says.**

## Notes
- Working tree was clean at branch creation. `docs/legal/` is untracked (gitignored) — fine.
- Progress is keyed by stage IDs (`stage-m01…`, `umbrella-01…`), not epoch IDs — renaming epochs won't drop user progress; deleting umbrella orphans umbrella-* completions (acceptable).
