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
- [x] first-journey 1/2/3 (30) — ALREADY 100% CTF (inline hand-authored); no work needed.

**✅ ADD-CTF GOAL COMPLETE (2026-06-07):** every technical/security stage now has a CTF. 79 new CTFs added this sprint (371 total). Non-technical extended tracks (baseball/debate/crafts/languages/travel/driving) correctly excluded. Plus a global dopamine/one-more-turn juice pass on the terminal + success modals.

## Out of scope (a hacking CTF is nonsensical)
baseball (150) · debate (80) · flag-football (30) · french/italian (40) · paris/milan travel (40) · nails/hair (40) · driving (24) · tapestry (12)

## Deepen axis — 2-step → 3-step (in progress)
Convert the ~292 pre-existing 2-step `mkCtf` CTFs to 3-step `mkDeepCtf`. **Trick: re-split each flag into the SAME total string across 3 fragments → flags stay byte-identical → no stage-flags.ts edits, validate-ctf still passes.** Per CTF: author a genuine middle recon/model step + `$ cmd` echoed technical output + an artifact file. The local `mkCtf` factory stays valid during conversion (mixed state compiles), remove it once all of an epoch's entries are converted.

- [x] **physics-of-hacking** (10) — DONE 2026-06-07 (side-channel, DPA, TEMPEST, timing, acoustic, Rowhammer, cold-boot, fault-injection, hw-implant, harden — each now 3 steps with recon→model/exploit→extract)
- [x] **ot-sec** (6 original) — DONE 2026-06-07 (PLC/ladder, Modbus coil, HMI hijack, DNP3 spoof, IT→OT pivot, ICS IDS). ot-sec now 100% 3-step.
- [x] **threat-frameworks** (6 original) — DONE 2026-06-07 (kill chain, Diamond, ATT&CK tag, Pyramid of Pain, D3FEND, STIX/TAXII). Now 100% 3-step.
- [x] **space-race-2** (6 original) — DONE 2026-06-07 (uplink hijack, downlink eavesdrop, GNSS spoof, jamming, ground breach, ISL pivot). Now 100% 3-step.
- [x] **robot-sec-2** (6 original) — DONE 2026-06-07 (DDS join, AMR fleet, tractor steer, cloud BOLA teleop, GPS spoof, policy poison). Now 100% 3-step.
- [x] **vehicle-sec-2** (6 original) — DONE 2026-06-07 (SOME/IP spoof, V2X ghost, TPMS spoof, relay key, ISO 15118 PnC, fleet-API BOLA). Now 100% 3-step.

**Deepened so far (7 epochs, 46 CTFs): physics-of-hacking, ot-sec, threat-frameworks, space-race-2, robot-sec-2, vehicle-sec-2** (+ first epoch physics). All shared `mkDeepCtf`, validate 371/0.
**✅ All 6 FACTORY-style epochs deepened** (physics-of-hacking, ot-sec, threat-frameworks, space-race-2, robot-sec-2, vehicle-sec-2 = 40 CTFs). These shared the local 2-step `mkCtf` record pattern — clean mechanical conversion.

**INLINE METHOD PROVEN (fast):** most inline CTFs already carry a BONUS recon command (e.g. scan-rf, scan-charger, list-ecus) that already flows "Next: <step2>". Promote it to a real 3rd fragment: edit only the `hints` + `fragments` (re-split the flag across it). 1 edit per CTF, flags identical. Where there's no bonus command, add one (like vehicle-02/03 got map-ids/analyze-algo).
- [x] **vehicle-sec** v1 (6 inline) — DONE 2026-06-07 (CAN, UDS, keyless relay, OCPP, telematics pivot, ADAS spoof). Now 100% 3-step.

**REMAINING use INLINE `ctf:{...}` objects** (no factory) — a different, heavier per-CTF conversion: each stage has an inline `ctf` with its own `fragments`/`files`/`extraCommands` functions written directly in the stage object. To deepen: in each inline `ctf`, re-split the flag across an added 3rd fragment, add a 3rd `extraCommands` entry + richer `$cmd` lines + (optionally) an artifact file. Flags stay byte-identical (re-split). Epochs: vehicle-sec/robot-sec/space-race v1 (6 each, e.g. vehicle-sec.ts l.172 fragments), cisco-2/3/4/5, mitre, mitre-atlas, owasp-llm, quantum-1/2/3/4/5, umbrella, tech-audit-2, emerging-tech, ancient/cisco-core (stages.ts), first-journey. ~15+ epochs, ~250 CTFs.

## Status
371 CTFs total (was 292). 6 fundamentals epochs + 5 deep-tech epochs' quiz stages = 79 new CTFs. validate-ctf: 0 problems. Shared factory: `packages/core/src/ctf-deep.ts`.
