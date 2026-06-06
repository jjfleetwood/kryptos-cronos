# Overnight Grind Plan (started 2026-06-06)

Jacob asked (going to bed) for new content: **operational technology; more epochs on Wired & Autonomous, Robotics, Race Through Space; and Threat Frameworks too.** Build CTF-heavy where it fits (~6 CTF + 4 quiz), full `info` per stage, per-epoch commit+push, free Commons imagery + `/attribution`, `validate-ctf.mjs` clean, tsc + forced build green. No Co-Authored-By lines.

Each new epoch = its own file in `packages/core/src/`, wired in 5 spots (stages.ts import/epoch/spread, epoch-theme.ts ×3 maps, stages/page.tsx group + SECURITY_EPOCHS), flags in stage-flags.ts (CTF stages only), STAGE_IMAGES + attribution, CLAUDE.md + CURRICULUM.md + RELEASE_NOTES.md. Pattern: factory `mkCtf` + attach-loop (see physics-of-hacking.ts).

Track sections (own group on /stages): OT = new "Operational Technology"; the rest extend existing groups (spaceRace / vehicleSec / robotics / threatFrameworks).

## Checklist
- [x] **OT-1** `ot-sec` — Operational Technology (ICS/SCADA): Purdue, PLCs, Modbus, SCADA/HMI, DNP3, EWS pivot, SIS/TRITON, Stuxnet/Ukraine, ICS detection, securing OT. (new track) — DONE, pushed. 268 CTFs, 761/68.
- [x] **Vehicle-2** `vehicle-sec-2` — Wired & Autonomous II: V2X/V2V, Automotive Ethernet/SOME-IP, TPMS, ISO 15118-20/V2G, AV sensor-fusion stack, automotive IDS/SOC, OTA deep, UNECE R155/R156, digital keys (CCC), supply chain. — DONE, pushed. 274 CTFs, 771/69.
- [ ] **Robot-2** `robot-sec-2` — Robotics II: SROS2 hands-on, surgical/medical robots, warehouse AMRs, agricultural robots, swarms, cloud robotics, legged robots, robot fleet mgmt, space robotics, defense/UGV.
- [ ] **Space-2** `space-race-2` — Race Through Space II: GNSS deep, SATCOM jam/anti-jam, ground-segment deep, CubeSat/smallsat, inter-satellite laser links, space situational awareness, launch systems, SPARTA/Space-ISAC deep, deep-space/DSN, space policy/norms.
- [ ] **TF-1** `threat-frameworks` — Cyber Kill Chain · Diamond Model · Pyramid of Pain · MITRE ATT&CK Navigator/D3FEND · STIX/TAXII · intelligence lifecycle (extends Threat Frameworks group).

Tick + note commit hash as each lands. Counts before grind: 751 stages / 67 epochs (after the 3-section split). CTFs: 262.
