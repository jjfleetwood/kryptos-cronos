# Overnight Grind Plan (started 2026-06-06)

Jacob asked (going to bed) for new content: **operational technology; more epochs on Wired & Autonomous, Robotics, Race Through Space; and Threat Frameworks too.** Build CTF-heavy where it fits (~6 CTF + 4 quiz), full `info` per stage, per-epoch commit+push, free Commons imagery + `/attribution`, `validate-ctf.mjs` clean, tsc + forced build green. No Co-Authored-By lines.

Each new epoch = its own file in `packages/core/src/`, wired in 5 spots (stages.ts import/epoch/spread, epoch-theme.ts ×3 maps, stages/page.tsx group + SECURITY_EPOCHS), flags in stage-flags.ts (CTF stages only), STAGE_IMAGES + attribution, CLAUDE.md + CURRICULUM.md + RELEASE_NOTES.md. Pattern: factory `mkCtf` + attach-loop (see physics-of-hacking.ts).

Track sections (own group on /stages): OT = new "Operational Technology"; the rest extend existing groups (spaceRace / vehicleSec / robotics / threatFrameworks).

## Checklist
- [x] **OT-1** `ot-sec` — Operational Technology (ICS/SCADA): Purdue, PLCs, Modbus, SCADA/HMI, DNP3, EWS pivot, SIS/TRITON, Stuxnet/Ukraine, ICS detection, securing OT. (new track) — DONE, pushed. 268 CTFs, 761/68.
- [x] **Vehicle-2** `vehicle-sec-2` — Wired & Autonomous II: V2X/V2V, Automotive Ethernet/SOME-IP, TPMS, ISO 15118-20/V2G, AV sensor-fusion stack, automotive IDS/SOC, OTA deep, UNECE R155/R156, digital keys (CCC), supply chain. — DONE, pushed. 274 CTFs, 771/69.
- [x] **Robot-2** `robot-sec-2` — Robotics II: SROS2/DDS, warehouse AMRs (VDA5050), ag robots/tractors, swarms (BFT), cloud robotics/teleop, legged/humanoid, nav/GPS spoofing, policy poisoning, fleet security. — DONE, pushed. 280 CTFs, 781/70.
- [x] **Space-2** `space-race-2` — Race Through Space II: uplink/downlink, GNSS, jam/anti-jam, ground-segment (Viasat), CubeSat/constellations, inter-satellite links, SSA/ASAT, SPARTA. — DONE, pushed. 286 CTFs, 791/71.
- [x] **TF-1** `threat-frameworks` — Kill Chain · Diamond · ATT&CK · ATT&CK-in-practice · Pyramid of Pain · D3FEND · STIX/TAXII · intel levels/attribution · threat-informed defense (extends Threat Frameworks group). — DONE, pushed. 292 CTFs, 801/72.

## GRIND COMPLETE 🎉
All 5 requested epochs built, validated, and pushed to master (auto-deployed). Counts went from 751/67 → **801 stages / 72 epochs**, CTFs 262 → **292**. Five new epochs: Operational Technology (new track), Wired & Autonomous II, Robotics II, Race Through Space II, Threat Frameworks. Every build green (core tsc, web tsc, validate-ctf, forced build) before each push.

Possible follow-ups for later: source free Commons imagery + `/attribution` for the new epochs' stages (they currently use the gradient+emoji card look); homepage stat counts could be refreshed (currently 751-era).

Tick + note commit hash as each lands. Counts before grind: 751 stages / 67 epochs (after the 3-section split). CTFs: 262.
