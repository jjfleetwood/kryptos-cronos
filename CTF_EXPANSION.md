# CTF Expansion Sprint

Goal: add a CTF to every stage where one is meaningful, and make CTFs **deeper, step-by-step, and more technical**. Started 2026-06-07.

## Quality bar — the `mkDeepCtf` factory
Deep CTFs are **3 technical steps** (recon → exploit → extract/verify), each an `extraCommand` that prints realistic terminal output and reveals a flag fragment, plus a `briefing.txt` and a readable artifact file (csv/json/yaml/log) for technicality. Fragments assemble to `FLAG{...}`. Canonical implementation: `packages/core/src/ai-ml-foundations.ts` (bottom).

## Per-epoch wiring checklist (do all 5 or it breaks)
1. In the epoch file: add `import type { ..., CtfConfig }`, the `mkDeepCtf` factory (or import a shared one), a `Record<stageId, CtfConfig>`, and a module-load loop that sets `challengeType="ctf"` + `ctf=config`.
2. `packages/core/src/stage-flags.ts` — add each stage's `FLAG{...}` (must equal the assembled fragments exactly).
3. `apps/web/src/app/.../stage-commands.ts` `LOADERS` — add `"<epochId>": [() => import("./<file>")]` (lazy extraCommands).
4. `npm run gen:meta -w @kryptos/core` (challengeType changed → stages-meta must regenerate; CI `check:meta` fails otherwise).
5. From `apps/web`: `node scripts/validate-ctf.mjs` (must be 0 problems) + `npx tsc -p tsconfig.json`.

## Candidate epochs (technical, currently quiz-only)
- [x] **ai-ml-foundations** (6) — DONE 2026-06-07 (membership inference, data poisoning, confusion-matrix backdoor, prompt injection, model extraction, cloud IAM escalation)
- [x] **sec-foundations** (13) — DONE 2026-06-07 (CSF mapping, honeypot/Stuxnet, CrowdStrike backout, OVHcloud DR, DigiNotar rogue-cert, Colonial MFA, GDPR PII, Twitter vishing sim, fiber/spine-leaf, 7-step triage, Uber report, Equifax ALE, SolarWinds pipeline). Factory extracted to shared `ctf-deep.ts`.
- [x] **computing-foundations** (10) — DONE 2026-06-07 (Ohm's-law hidden load, circuit break, transistor switch, NAND gate, binary decode, ALU overflow, memory remanence, fetch-execute trace, opcode injection, physical hardening)
- [x] **silicon-fab** (10) — DONE 2026-06-07 (substrate dopant trojan, cleanroom particle, litho overlay, EUV focus, implant-dose tamper, damascene etch defect, GAA cell trojan, counterfeit chiplet, yield/binning trojan screen, qubit coherence tamper)
- [x] **quantum-intro** (10) — DONE 2026-06-07 (quantum scale, superposition/Hadamard, measurement-collapse/QKD eavesdrop, double-slit which-path, amplitude interference, Bell/CHSH, qubit/Bloch, circuit build, Grover search, HNDL→PQC migration)
- [x] **quantum-deep** (10) — DONE 2026-06-07 (Stern-Gerlach spin, tunneling current, Pauli degeneracy, orbital quantum numbers, photoelectric threshold, decoherence isolation, Bell nonlocality/LHV, surface-code QEC, QFT field quanta, interpretations)
- [x] deep-tech epochs' 4 quiz stages each — DONE 2026-06-07: ot-sec, vehicle-sec-2, robot-sec-2, space-race-2, threat-frameworks (20 CTFs; appended a second mkDeepCtf record+loop per epoch; these epochs are now 100% CTF)
- [ ] first-journey 1/2/3 (30) — beginner cyber; gentle guided CTFs possible

## Out of scope (a hacking CTF is nonsensical)
baseball (150) · debate (80) · flag-football (30) · french/italian (40) · paris/milan travel (40) · nails/hair (40) · driving (24) · tapestry (12)

## Second axis — deepen EXISTING CTFs
The ~292 pre-existing CTFs mostly use the older 2-step `mkCtf`. Gradually upgrade high-traffic epochs to the 3-step `mkDeepCtf` depth. Not yet started.

## Status
371 CTFs total (was 292). 6 fundamentals epochs + 5 deep-tech epochs' quiz stages = 79 new CTFs. validate-ctf: 0 problems. Shared factory: `packages/core/src/ctf-deep.ts`.
