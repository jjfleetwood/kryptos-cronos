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
### ⚑ REVISED (2026-06-20): founder chose to DELETE all 4 cisco epochs + umbrella outright (content is wall-to-wall Cisco-product, not incidental). Real counts via gen:meta (docs "831/75" was drifted): now **811 stages / 80 epochs**, cert paths **11**.
- [x] **C1 — Delete `/cyberops` tracker** (commit 09b10ce; tsc green).
- [x] **Homepage Cisco strings scrubbed** (commit f2298f8; incl. Cisco removed from target-sponsor list).
- [x] **C2/C3 — DELETE all 4 cisco epochs + umbrella** (commit ee55dce): deleted cisco-2/3/4/5.ts, umbrella.ts + quiz-data; excised stages.ts (imports/spreads/epoch entries + the inline cisco-core ~6300-line block); removed cisco/umbrella loaders from stage-commands.ts; enterprise track group → physics-of-hacking only; homepage track card repurposed. gen:meta = 811/80; **core + web tsc both green**.
- [ ] **C4 — Scrub remaining UI Cisco strings**: certs, resume, admin, terms, attribution, survey, all 7 `messages/*.json` (remove cyberops/umbrella UI keys; de-Cisco visible strings incl. `home.trackDesc.cisco` + `stages.tracks.enterprise*`). Homepage done.
- [ ] **C-orphans — Remove now-dead cisco/umbrella entries** (tsc-safe but still contain Cisco strings/IDs): `cert-domains.ts` (stage-m*/umbrella-* maps), `content-flags.ts` (cisco/umbrella epoch entries + trademark text), `stage-flags.ts` (stage-m*/umbrella-* flags), `epoch-theme.ts` (cisco-*/umbrella accents). None break the build; clean for completeness + legal.
- [ ] **C5 — Translations (scripted)**: strip umbrella + cyberops + CyberOps-cert keys/entries from `packages/core/src/translations/*` (meta-*, ctf-quiz-*, batches) and de-brand cisco epoch meta. Then `npm run gen:meta -w @kryptos/core`.
- [ ] **C6 — Reconcile counts**: 831→811 stages, 75→80 epochs, 16 tracks (enterprise track stays), 12→11 cert paths, 292 CTFs→(umbrella CTFs removed) recompute. Update homepage stats, OG/Twitter meta, account/survey/emails + all 7 locales.
- [ ] **C7 — Verify**: `npx tsc --noEmit -p apps/web/tsconfig.json` + core tsc + `npm run build` + `validate-ctf.mjs` + `check:meta`. Screenshot /stages + an enterprise epoch.
- [ ] **C8 — Commit per checkpoint; do NOT push until Jacob says.**

## Notes
- Working tree was clean at branch creation. `docs/legal/` is untracked (gitignored) — fine.
- Progress is keyed by stage IDs (`stage-m01…`, `umbrella-01…`), not epoch IDs — renaming epochs won't drop user progress; deleting umbrella orphans umbrella-* completions (acceptable).
