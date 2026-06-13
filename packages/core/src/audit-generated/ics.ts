import type { EpochConfig, StageConfig } from "../types";

export const icsEpoch: EpochConfig = {
  "id": "ics",
  "name": "Industrial Control Systems (ICS)",
  "subtitle": "Agentic technical & privacy audit — Industrial Control Systems (ICS)",
  "description": "Audit Industrial Control Systems (ICS) end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🏭",
  "color": "Amber",
  "unlocked": true
};

export const icsStages: StageConfig[] = [
  {
    "epochId": "ics",
    "id": "ics-01",
    "order": 1,
    "title": "ICS asset inventory",
    "subtitle": "Agentic technical & privacy audit of the ics asset inventory control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"ICS asset inventory\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the ICS asset inventory is complete + safe. PASS: a comprehensive OT asset inventory (controllers/HMI/EWS/historian with protocol + firmware) built via passive discovery, with criticality + process-impact mapping, reconciled to the physical plant, and maintained current. Exceptions: no/partial OT inventory (unknown devices controlling the process), inventory built by active scanning (risking ICS disruption), no criticality mapping, and a stale inventory.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (OT asset discovery (Claroty / Nozomi / Dragos — passive); OT asset inventory / CMDB; Process-criticality mapping) as tools — e.g. `OT/ICS asset inventory (PLC/RTU/DCS/IED, HMI, EWS, historian + protoco`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The OT/ICS asset inventory (every controller — PLC/RTU/DCS/IED, HMI, engineering workstation, historian, protocol + firmware version — built via passive discovery, not active scanning)",
        "Asset criticality + the cyber-physical impact mapping (which assets control safety/critical processes)",
        "Reconciliation completeness (inventory matches the physical plant; no unknown devices)",
        "Inventory maintenance (kept current as the OT environment changes)"
      ],
      "system": [
        "OT asset discovery (Claroty / Nozomi / Dragos — passive)",
        "OT asset inventory / CMDB",
        "Process-criticality mapping",
        "OT change tracking"
      ],
      "dataOwner": [
        "OT / ICS security",
        "Plant / process engineering",
        "Operations"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-01-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "ICS asset inventory",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"ICS asset inventory\" as a repeatable agentic workflow: pull the real evidence (The OT/ICS asset inventory (every controller — PLC/RTU/DCS/IED, HMI, engineering workstation, historian, protocol + firmware version — built via passive discovery, not active scanning)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"ICS asset inventory\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the OT/ICS asset inventory (every controller — PLC/RTU/DCS/IED, HMI, engineering workstation, historian, protocol + firmware version — built via passive discovery, not active scanning), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here OT asset discovery (Claroty / Nozomi / Dragos — passive), OT asset inventory / CMDB, Process-criticality mapping — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `OT/ICS asset inventory (PLC/RTU/DCS/IED, HMI, EWS, historian + protocol + firmwa` — read-only, against the systems of record.",
        "The test itself is specific. Verify the ICS asset inventory is complete + safe. PASS: a comprehensive OT asset inventory (controllers/HMI/EWS/historian with protocol + firmware) built via passive discovery, with criticality + process-impact mapping, reconciled to the physical plant, and maintained current. Exceptions: no/partial OT inventory (unknown devices controlling the process), inventory built by active scanning (risking ICS disruption), no criticality mapping, and a stale inventory. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_ics_asset_inventory_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from OT asset discovery (Claroty / Nozomi / Dragos — passive) and OT asset inventory / CMDB (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_ics_asset_inventory_mcp.py` to expose it to your agent — or `python 01_ics_asset_inventory_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull OT asset discovery (Claroty / Nozomi / Dragos — passive) · OT asset inventory / CMDB",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"ICS asset inventory\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "OT/ICS asset inventory (PLC/RTU/DCS/IED, HMI, EWS, historian + protocol + firmware — passive discovery)\nasset criticality + cyber-physical impact mapping (safety/critical-process control)\nreconciliation completeness (matches the physical plant)\ninventory kept current as OT changes"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The OT/ICS asset inventory (every controller — PLC/RTU/DCS/IED, HMI, engineering workstation, historian, protocol + firmware version — built via passive discovery, not active scanning).",
        "The test: Verify the ICS asset inventory is complete + safe.",
        "Reconcile the systems of record (OT asset discovery (Claroty / Nozomi / Dragos — passive), OT asset inventory / CMDB, Process-criticality mapping) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no OT asset inventory — no one has a complete list of the PLCs and controllers running the plant, their firmware, or which control safety-critical processes, making every other ICS control impossible to scope."
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443",
          "url": "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_ics_asset_inventory_mcp.py",
          "url": "/audit-code/ics/01_ics_asset_inventory_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"ICS asset inventory\" (the ot/ics asset inventory (every controller — plc/rtu/dcs/ied, hmi, engineering workstation, historian, protocol + firmware version — built via passive discovery, not active scanning)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"ICS asset inventory\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Verify the ICS asset inventory is complete + safe. PASS: a comprehensive OT asset inventory (controllers/HMI/EWS/historian with protocol + firmware) built via passive discovery, with criticality + process-impact mapping, reconciled to the physical plant, and maintained current. Exceptions: no/partial OT inventory (unknown devices controlling the process), inventory built by active scanning (risking ICS disruption), no criticality mapping, and a stale inventory. The evidence — The OT/ICS asset inventory (every controller — PLC/RTU/DCS/IED, HMI, engineering workstation, historian, protocol + firmware version — built via passive discovery, not active scanning) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live OT asset discovery (Claroty / Nozomi / Dragos — passive) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. OT asset discovery (Claroty / Nozomi / Dragos — passive) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from OT asset discovery (Claroty / Nozomi / Dragos — passive); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"ICS asset inventory\" Audit Evidence\n\nThe test:\nVerify the ICS asset inventory is complete + safe. PASS: a comprehensive OT asset inventory (controllers/HMI/EWS/historian with protocol + firmware) built via passive discovery, with criticality + process-impact mapping, reconciled to the physical plant, and maintained current. Exceptions: no/partial OT inventory (unknown devices controlling the process), inventory built by active scanning (risking ICS disruption), no criticality mapping, and a stale inventory.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — The OT/ICS asset inventory (every controller — PLC/RTU/DCS/IED, HMI, engineering workstation, historian, protocol + firmware version — built via passive discovery, not active scanning))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"ICS asset inventory\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"ICS asset inventory\" control must cover\n# fragment: ics_asset_inventory_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "ics_asset_inventory_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "ics-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"ICS asset inventory\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Deploy and operate the ics asset inventory control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ics asset inventory control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ics asset inventory against comparable organisations in the sector",
            "Obtain evidence that the ics asset inventory control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ics-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"ICS asset inventory\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Industrial Control Systems (ICS)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Industrial Control Systems (ICS) estate",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Industrial Control Systems (ICS) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ics-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"ICS asset inventory\" control?",
          "options": [
            "A point-in-time screenshot of one system's ics asset inventory settings, captured during the walkthrough",
            "The The OT/ICS asset inventory (every controller — PLC/RTU/DCS/IED, HMI, engineering workstation, historian, protocol + firmware version — built via passive discovery, not active scanning), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ics asset inventory control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ics asset inventory capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ics-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"ICS asset inventory\"?",
          "options": [
            "From OT asset discovery (Claroty / Nozomi / Dragos — passive) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ics asset inventory works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. OT asset discovery (Claroty / Nozomi / Dragos — passive)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ics-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"ICS asset inventory\"?",
          "options": [
            "The external audit firm, since it is the party examining the ics asset inventory control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ics asset inventory data is shared, so the accountability sits with no one in particular",
            "OT / ICS security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "OT / ICS security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ics-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"ICS asset inventory\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "ics-01-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "ics-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"ICS asset inventory\", which of these is a realistic reportable finding?",
          "options": [
            "There's no OT asset inventory — no one has a complete list of the PLCs and controllers running the plant, their firmware, or which control safety-critical processes, making every other ICS control impossible to scope.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no OT asset inventory — no one has a complete list of the PLCs and controllers running the plant, their firmware, or which control safety-critical processes, making every other ICS control impossible to scope. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ics-01-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "ics-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"ICS asset inventory\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ics asset inventory, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "ics",
    "id": "ics-02",
    "order": 2,
    "title": "Network segmentation",
    "subtitle": "Agentic technical & privacy audit of the network segmentation control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Network segmentation\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify ICS is segmented per a zone/conduit model. PASS: OT is segmented into zones with enforced conduits (IEC 62443/Purdue), an IT/OT DMZ brokers shared services, internal OT is segmented (control vs supervisory), and the segmentation is verified/enforced with no bypass. Exceptions: a flat OT network, IT directly connected to OT with no DMZ, unrestricted conduits between zones, and segmentation on paper but bypassed in practice.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (OT firewalls / data diodes; IT/OT DMZ; Zone/conduit (Purdue) design) as tools — e.g. `ICS zone + conduit model (IEC 62443/Purdue zones, IT/OT DMZ, intra-OT `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The ICS network segmentation / zone + conduit model (the Purdue/IEC 62443 zones, the DMZ between IT and OT, segmentation within OT — control vs supervisory)",
        "Enforced conduits between zones (firewalls/data diodes; only required, inspected flows; no flat OT network)",
        "The OT DMZ for shared services (historian replication, remote access, patching) so IT never touches OT directly",
        "Segmentation verification (the design is actually enforced, no bypass paths)"
      ],
      "system": [
        "OT firewalls / data diodes",
        "IT/OT DMZ",
        "Zone/conduit (Purdue) design",
        "Segmentation verification / NDR"
      ],
      "dataOwner": [
        "OT / ICS security + network",
        "Plant engineering",
        "Network security"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-02-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "Network segmentation",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Network segmentation\" as a repeatable agentic workflow: pull the real evidence (The ICS network segmentation / zone + conduit model (the Purdue/IEC 62443 zones, the DMZ between IT and OT, segmentation within OT — control vs supervisory)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"Network segmentation\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the ICS network segmentation / zone + conduit model (the Purdue/IEC 62443 zones, the DMZ between IT and OT, segmentation within OT — control vs supervisory), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here OT firewalls / data diodes, IT/OT DMZ, Zone/conduit (Purdue) design — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `ICS zone + conduit model (IEC 62443/Purdue zones, IT/OT DMZ, intra-OT segmentati` — read-only, against the systems of record.",
        "The test itself is specific. Verify ICS is segmented per a zone/conduit model. PASS: OT is segmented into zones with enforced conduits (IEC 62443/Purdue), an IT/OT DMZ brokers shared services, internal OT is segmented (control vs supervisory), and the segmentation is verified/enforced with no bypass. Exceptions: a flat OT network, IT directly connected to OT with no DMZ, unrestricted conduits between zones, and segmentation on paper but bypassed in practice. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_network_segmentation_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from OT firewalls / data diodes and IT/OT DMZ (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_network_segmentation_mcp.py` to expose it to your agent — or `python 02_network_segmentation_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull OT firewalls / data diodes · IT/OT DMZ",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Network segmentation\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "ICS zone + conduit model (IEC 62443/Purdue zones, IT/OT DMZ, intra-OT segmentation)\nenforced conduits (firewalls/data diodes; only required + inspected flows)\nOT DMZ for shared services (historian, remote access, patching) so IT never touches OT directly\nsegmentation actually enforced (no bypass paths)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The ICS network segmentation / zone + conduit model (the Purdue/IEC 62443 zones, the DMZ between IT and OT, segmentation within OT — control vs supervisory).",
        "The test: Verify ICS is segmented per a zone/conduit model.",
        "Reconcile the systems of record (OT firewalls / data diodes, IT/OT DMZ, Zone/conduit (Purdue) design) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The OT network is flat and directly bridged to corporate IT with no DMZ; a phishing compromise on the business side has an unobstructed path to the PLCs controlling the physical process — the Ukraine-grid and many ICS attacks' exact route."
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443 — Zones & Conduits",
          "url": "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_network_segmentation_mcp.py",
          "url": "/audit-code/ics/02_network_segmentation_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"Network segmentation\" (the ics network segmentation / zone + conduit model (the purdue/iec 62443 zones, the dmz between it and ot, segmentation within ot — control vs supervisory)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Network segmentation\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Verify ICS is segmented per a zone/conduit model. PASS: OT is segmented into zones with enforced conduits (IEC 62443/Purdue), an IT/OT DMZ brokers shared services, internal OT is segmented (control vs supervisory), and the segmentation is verified/enforced with no bypass. Exceptions: a flat OT network, IT directly connected to OT with no DMZ, unrestricted conduits between zones, and segmentation on paper but bypassed in practice. The evidence — The ICS network segmentation / zone + conduit model (the Purdue/IEC 62443 zones, the DMZ between IT and OT, segmentation within OT — control vs supervisory) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live OT firewalls / data diodes APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. OT firewalls / data diodes gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from OT firewalls / data diodes; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"Network segmentation\" Audit Evidence\n\nThe test:\nVerify ICS is segmented per a zone/conduit model. PASS: OT is segmented into zones with enforced conduits (IEC 62443/Purdue), an IT/OT DMZ brokers shared services, internal OT is segmented (control vs supervisory), and the segmentation is verified/enforced with no bypass. Exceptions: a flat OT network, IT directly connected to OT with no DMZ, unrestricted conduits between zones, and segmentation on paper but bypassed in practice.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — The ICS network segmentation / zone + conduit model (the Purdue/IEC 62443 zones, the DMZ between IT and OT, segmentation within OT — control vs supervisory))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Network segmentation\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Network segmentation\" control must cover\n# fragment: network_segmentation_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "network_segmentation_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "ics-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Network segmentation\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Deploy and operate the network segmentation control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the network segmentation control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for network segmentation against comparable organisations in the sector",
            "Obtain evidence that the network segmentation control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ics-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Network segmentation\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Industrial Control Systems (ICS)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Industrial Control Systems (ICS) estate",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Industrial Control Systems (ICS) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ics-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Network segmentation\" control?",
          "options": [
            "A point-in-time screenshot of one system's network segmentation settings, captured during the walkthrough",
            "The The ICS network segmentation / zone + conduit model (the Purdue/IEC 62443 zones, the DMZ between IT and OT, segmentation within OT — control vs supervisory), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the network segmentation control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's network segmentation capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ics-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Network segmentation\"?",
          "options": [
            "From OT firewalls / data diodes and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how network segmentation works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. OT firewalls / data diodes) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ics-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Network segmentation\"?",
          "options": [
            "The external audit firm, since it is the party examining the network segmentation control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the network segmentation data is shared, so the accountability sits with no one in particular",
            "OT / ICS security + network, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "OT / ICS security + network owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ics-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Network segmentation\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "ics-02-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "ics-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Network segmentation\", which of these is a realistic reportable finding?",
          "options": [
            "The OT network is flat and directly bridged to corporate IT with no DMZ; a phishing compromise on the business side has an unobstructed path to the PLCs controlling the physical process — the Ukraine-grid and many ICS attacks' exact route.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The OT network is flat and directly bridged to corporate IT with no DMZ; a phishing compromise on the business side has an unobstructed path to the PLCs controlling the physical process — the Ukraine-grid and many ICS attacks' exact route. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ics-02-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "ics-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Network segmentation\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind network segmentation, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "ics",
    "id": "ics-03",
    "order": 3,
    "title": "IT/OT asset boundary",
    "subtitle": "Agentic technical & privacy audit of the it/ot asset boundary control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IT/OT asset boundary\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the IT/OT boundary is controlled. PASS: a defined boundary (DMZ, reviewed firewall rules) brokers IT↔OT with data flowing OT→IT (no direct IT→controller), identity/access is separated across IT and OT, and boundary traffic is monitored + logged. Exceptions: direct IT-to-OT control paths, shared IT/OT identities (IT compromise = OT access), unreviewed boundary firewall rules, and no monitoring of cross-boundary traffic.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (IT/OT DMZ + firewalls; Boundary data-flow controls; Separate IT/OT identity domains) as tools — e.g. `IT/OT boundary controls (DMZ, reviewed firewall rules; data flows OT→I`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The IT/OT boundary controls (the secured interface where IT and OT meet — DMZ, firewall rules, data flows reviewed; data flows OT→IT, not IT→OT control)",
        "Control of data crossing the boundary (historian/data egress to IT done via the DMZ; no direct IT-to-controller paths)",
        "Identity/access separation across IT and OT (separate credentials/domains; an IT compromise doesn't grant OT access)",
        "Boundary monitoring (traffic across the IT/OT boundary is inspected + logged)"
      ],
      "system": [
        "IT/OT DMZ + firewalls",
        "Boundary data-flow controls",
        "Separate IT/OT identity domains",
        "Boundary monitoring"
      ],
      "dataOwner": [
        "OT / ICS security",
        "Network security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-03-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "IT/OT asset boundary",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"IT/OT asset boundary\" as a repeatable agentic workflow: pull the real evidence (The IT/OT boundary controls (the secured interface where IT and OT meet — DMZ, firewall rules, data flows reviewed; data flows OT→IT, not IT→OT control)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"IT/OT asset boundary\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the IT/OT boundary controls (the secured interface where IT and OT meet — DMZ, firewall rules, data flows reviewed; data flows OT→IT, not IT→OT control), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IT/OT DMZ + firewalls, Boundary data-flow controls, Separate IT/OT identity domains — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `IT/OT boundary controls (DMZ, reviewed firewall rules; data flows OT→IT not IT→c` — read-only, against the systems of record.",
        "The test itself is specific. Verify the IT/OT boundary is controlled. PASS: a defined boundary (DMZ, reviewed firewall rules) brokers IT↔OT with data flowing OT→IT (no direct IT→controller), identity/access is separated across IT and OT, and boundary traffic is monitored + logged. Exceptions: direct IT-to-OT control paths, shared IT/OT identities (IT compromise = OT access), unreviewed boundary firewall rules, and no monitoring of cross-boundary traffic. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_it_ot_asset_boundary_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IT/OT DMZ + firewalls and Boundary data-flow controls (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_it_ot_asset_boundary_mcp.py` to expose it to your agent — or `python 03_it_ot_asset_boundary_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull IT/OT DMZ + firewalls · Boundary data-flow controls",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"IT/OT asset boundary\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "IT/OT boundary controls (DMZ, reviewed firewall rules; data flows OT→IT not IT→control)\ncontrol of data crossing the boundary (historian egress via DMZ; no direct IT-to-controller paths)\nidentity/access separation across IT and OT (separate credentials/domains)\nboundary traffic inspected + logged"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The IT/OT boundary controls (the secured interface where IT and OT meet — DMZ, firewall rules, data flows reviewed; data flows OT→IT, not IT→OT control).",
        "The test: Verify the IT/OT boundary is controlled.",
        "Reconcile the systems of record (IT/OT DMZ + firewalls, Boundary data-flow controls, Separate IT/OT identity domains) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. OT shares the corporate Active Directory, so a domain-admin compromise on IT grants direct access to the engineering workstations and PLCs; data flows both ways across an unmonitored boundary with no DMZ."
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443",
          "url": "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_it_ot_asset_boundary_mcp.py",
          "url": "/audit-code/ics/03_it_ot_asset_boundary_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"IT/OT asset boundary\" (the it/ot boundary controls (the secured interface where it and ot meet — dmz, firewall rules, data flows reviewed; data flows ot→it, not it→ot control)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IT/OT asset boundary\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Verify the IT/OT boundary is controlled. PASS: a defined boundary (DMZ, reviewed firewall rules) brokers IT↔OT with data flowing OT→IT (no direct IT→controller), identity/access is separated across IT and OT, and boundary traffic is monitored + logged. Exceptions: direct IT-to-OT control paths, shared IT/OT identities (IT compromise = OT access), unreviewed boundary firewall rules, and no monitoring of cross-boundary traffic. The evidence — The IT/OT boundary controls (the secured interface where IT and OT meet — DMZ, firewall rules, data flows reviewed; data flows OT→IT, not IT→OT control) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IT/OT DMZ + firewalls APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IT/OT DMZ + firewalls gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IT/OT DMZ + firewalls; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"IT/OT asset boundary\" Audit Evidence\n\nThe test:\nVerify the IT/OT boundary is controlled. PASS: a defined boundary (DMZ, reviewed firewall rules) brokers IT↔OT with data flowing OT→IT (no direct IT→controller), identity/access is separated across IT and OT, and boundary traffic is monitored + logged. Exceptions: direct IT-to-OT control paths, shared IT/OT identities (IT compromise = OT access), unreviewed boundary firewall rules, and no monitoring of cross-boundary traffic.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — The IT/OT boundary controls (the secured interface where IT and OT meet — DMZ, firewall rules, data flows reviewed; data flows OT→IT, not IT→OT control))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"IT/OT asset boundary\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"IT/OT asset boundary\" control must cover\n# fragment: itot_asset_boundary_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "itot_asset_boundary_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "ics-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"IT/OT asset boundary\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Deploy and operate the it/ot asset boundary control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the it/ot asset boundary control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for it/ot asset boundary against comparable organisations in the sector",
            "Obtain evidence that the it/ot asset boundary control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ics-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IT/OT asset boundary\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Industrial Control Systems (ICS)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Industrial Control Systems (ICS) estate",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Industrial Control Systems (ICS) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ics-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IT/OT asset boundary\" control?",
          "options": [
            "A point-in-time screenshot of one system's it/ot asset boundary settings, captured during the walkthrough",
            "The The IT/OT boundary controls (the secured interface where IT and OT meet — DMZ, firewall rules, data flows reviewed; data flows OT→IT, not IT→OT control), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the it/ot asset boundary control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's it/ot asset boundary capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ics-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"IT/OT asset boundary\"?",
          "options": [
            "From IT/OT DMZ + firewalls and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how it/ot asset boundary works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. IT/OT DMZ + firewalls) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ics-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IT/OT asset boundary\"?",
          "options": [
            "The external audit firm, since it is the party examining the it/ot asset boundary control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the it/ot asset boundary data is shared, so the accountability sits with no one in particular",
            "OT / ICS security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "OT / ICS security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ics-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IT/OT asset boundary\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "ics-03-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "ics-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IT/OT asset boundary\", which of these is a realistic reportable finding?",
          "options": [
            "OT shares the corporate Active Directory, so a domain-admin compromise on IT grants direct access to the engineering workstations and PLCs; data flows both ways across an unmonitored boundary with no DMZ.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. OT shares the corporate Active Directory, so a domain-admin compromise on IT grants direct access to the engineering workstations and PLCs; data flows both ways across an unmonitored boundary with no DMZ. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ics-03-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "ics-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IT/OT asset boundary\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind it/ot asset boundary, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "ics",
    "id": "ics-04",
    "order": 4,
    "title": "IAM (ICS)",
    "subtitle": "Agentic technical & privacy audit of the iam (ics) control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IAM (ICS)\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify ICS access is controlled. PASS: named role-based accounts (no shared operator logins), least privilege across engineer/operator/view roles, strong auth (MFA for remote/engineering, no default/shared controller passwords), controlled + logged privileged engineering access, and OT access reviews/JML incl. vendors. Exceptions: shared/generic HMI logins, default controller passwords, no MFA on remote engineering access, anyone able to change PLC logic, and no access review (orphaned vendor accounts).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (OT IAM + HMI/EWS accounts; MFA / privileged-access for OT; Controller credential management) as tools — e.g. `ICS access control (named accounts, role-based, least privilege: engin`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Access control for the ICS environment (named accounts on HMIs/EWS — not shared operator logins; role-based access; least privilege for engineering vs operator vs view-only)",
        "Authentication strength appropriate to OT (MFA for remote/engineering access; managed credentials — no default/shared controller passwords)",
        "Privileged-access control for engineering functions (who can change PLC logic/setpoints; approval + logging)",
        "Access review + joiner/mover/leaver for OT (contractors + vendors especially)"
      ],
      "system": [
        "OT IAM + HMI/EWS accounts",
        "MFA / privileged-access for OT",
        "Controller credential management",
        "OT access review"
      ],
      "dataOwner": [
        "OT / ICS security + IAM",
        "Plant engineering",
        "Operations"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-04-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "IAM (ICS)",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"IAM (ICS)\" as a repeatable agentic workflow: pull the real evidence (Access control for the ICS environment (named accounts on HMIs/EWS — not shared operator logins; role-based access; least privilege for engineering vs operator vs view-only)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"IAM (ICS)\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me access control for the ICS environment (named accounts on HMIs/EWS — not shared operator logins; role-based access; least privilege for engineering vs operator vs view-only), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here OT IAM + HMI/EWS accounts, MFA / privileged-access for OT, Controller credential management — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `ICS access control (named accounts, role-based, least privilege: engineer/operat` — read-only, against the systems of record.",
        "The test itself is specific. Verify ICS access is controlled. PASS: named role-based accounts (no shared operator logins), least privilege across engineer/operator/view roles, strong auth (MFA for remote/engineering, no default/shared controller passwords), controlled + logged privileged engineering access, and OT access reviews/JML incl. vendors. Exceptions: shared/generic HMI logins, default controller passwords, no MFA on remote engineering access, anyone able to change PLC logic, and no access review (orphaned vendor accounts). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_iam_ics_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from OT IAM + HMI/EWS accounts and MFA / privileged-access for OT (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_iam_ics_mcp.py` to expose it to your agent — or `python 04_iam_ics_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull OT IAM + HMI/EWS accounts · MFA / privileged-access for OT",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"IAM (ICS)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "ICS access control (named accounts, role-based, least privilege: engineer/operator/view)\nauthentication strength (MFA for remote/engineering; no default/shared controller passwords)\nprivileged-access control for engineering (PLC logic/setpoint changes: approval + logging)\nOT access review + JML (contractors/vendors especially)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Access control for the ICS environment (named accounts on HMIs/EWS — not shared operator logins; role-based access; least privilege for engineering vs operator vs view-only).",
        "The test: Verify ICS access is controlled.",
        "Reconcile the systems of record (OT IAM + HMI/EWS accounts, MFA / privileged-access for OT, Controller credential management) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Operators share a single generic HMI login, the PLCs still have their default vendor passwords, remote engineering access has no MFA, and disabled-contractor accounts remain active — anyone with access can alter control logic untraced."
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443",
          "url": "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_iam_ics_mcp.py",
          "url": "/audit-code/ics/04_iam_ics_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"IAM (ICS)\" (access control for the ics environment (named accounts on hmis/ews — not shared operator logins; role-based access; least privilege for engineering vs operator vs view-only)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IAM (ICS)\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Verify ICS access is controlled. PASS: named role-based accounts (no shared operator logins), least privilege across engineer/operator/view roles, strong auth (MFA for remote/engineering, no default/shared controller passwords), controlled + logged privileged engineering access, and OT access reviews/JML incl. vendors. Exceptions: shared/generic HMI logins, default controller passwords, no MFA on remote engineering access, anyone able to change PLC logic, and no access review (orphaned vendor accounts). The evidence — Access control for the ICS environment (named accounts on HMIs/EWS — not shared operator logins; role-based access; least privilege for engineering vs operator vs view-only) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live OT IAM + HMI/EWS accounts APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. OT IAM + HMI/EWS accounts gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from OT IAM + HMI/EWS accounts; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"IAM (ICS)\" Audit Evidence\n\nThe test:\nVerify ICS access is controlled. PASS: named role-based accounts (no shared operator logins), least privilege across engineer/operator/view roles, strong auth (MFA for remote/engineering, no default/shared controller passwords), controlled + logged privileged engineering access, and OT access reviews/JML incl. vendors. Exceptions: shared/generic HMI logins, default controller passwords, no MFA on remote engineering access, anyone able to change PLC logic, and no access review (orphaned vendor accounts).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — Access control for the ICS environment (named accounts on HMIs/EWS — not shared operator logins; role-based access; least privilege for engineering vs operator vs view-only))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"IAM (ICS)\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"IAM (ICS)\" control must cover\n# fragment: iam_ics_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "iam_ics_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "ics-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"IAM (ICS)\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Deploy and operate the iam (ics) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the iam (ics) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for iam (ics) against comparable organisations in the sector",
            "Obtain evidence that the iam (ics) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ics-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IAM (ICS)\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Industrial Control Systems (ICS)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Industrial Control Systems (ICS) estate",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Industrial Control Systems (ICS) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ics-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IAM (ICS)\" control?",
          "options": [
            "A point-in-time screenshot of one system's iam (ics) settings, captured during the walkthrough",
            "The Access control for the ICS environment (named accounts on HMIs/EWS — not shared operator logins; role-based access; least privilege for engineering vs operator vs view-only), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the iam (ics) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's iam (ics) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ics-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"IAM (ICS)\"?",
          "options": [
            "From OT IAM + HMI/EWS accounts and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how iam (ics) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. OT IAM + HMI/EWS accounts) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ics-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IAM (ICS)\"?",
          "options": [
            "The external audit firm, since it is the party examining the iam (ics) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the iam (ics) data is shared, so the accountability sits with no one in particular",
            "OT / ICS security + IAM, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "OT / ICS security + IAM owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ics-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IAM (ICS)\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "ics-04-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "ics-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IAM (ICS)\", which of these is a realistic reportable finding?",
          "options": [
            "Operators share a single generic HMI login, the PLCs still have their default vendor passwords, remote engineering access has no MFA, and disabled-contractor accounts remain active — anyone with access can alter control logic untraced.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Operators share a single generic HMI login, the PLCs still have their default vendor passwords, remote engineering access has no MFA, and disabled-contractor accounts remain active — anyone with access can alter control logic untraced. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ics-04-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "ics-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IAM (ICS)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind iam (ics), so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "ics",
    "id": "ics-05",
    "order": 5,
    "title": "Patch and vulnerability management (ICS)",
    "subtitle": "Agentic technical & privacy audit of the patch and vulnerability management (ics) control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Patch and vulnerability management (ICS)\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify ICS vulnerabilities are managed within OT constraints. PASS: OT vulnerabilities are tracked (ICS-CERT/vendor advisories) + risk-prioritised, compensating controls (segmentation, virtual patching, hardening) cover what can't be patched, patchable assets follow a tested/vendor-approved/maintenance-window process with rollback, and unpatchable/EOL assets are tracked with controls. Exceptions: no OT vulnerability awareness, IT-style forced patching risking process disruption, unpatchable assets with no compensating controls, and untracked legacy/EOL OT exposure.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (ICS-CERT / vendor advisory tracking; OT vuln prioritisation; Virtual patching / IPS + segmentation) as tools — e.g. `OT vuln awareness (ICS-CERT/vendor advisories) + risk-based prioritisa`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "OT vulnerability management adapted to ICS constraints (vulnerability awareness via vendor advisories/ICS-CERT, risk-based prioritisation since patching is constrained by uptime/safety)",
        "The compensating-controls approach where patching isn't possible (segmentation, virtual patching/IPS, hardening — because many ICS devices can't be patched/rebooted freely)",
        "The controlled OT patching process (tested in a lab/maintenance window, vendor-approved, with rollback) for what can be patched",
        "Tracking of unpatchable/legacy/EOL OT assets + their compensating controls"
      ],
      "system": [
        "ICS-CERT / vendor advisory tracking",
        "OT vuln prioritisation",
        "Virtual patching / IPS + segmentation",
        "OT patch process + EOL register"
      ],
      "dataOwner": [
        "OT / ICS security",
        "Plant / control engineering",
        "Vendor coordination"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-05-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "Patch and vulnerability management (ICS)",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Patch and vulnerability management (ICS)\" as a repeatable agentic workflow: pull the real evidence (OT vulnerability management adapted to ICS constraints (vulnerability awareness via vendor advisories/ICS-CERT, risk-based prioritisation since patching is constrained by uptime/safety)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"Patch and vulnerability management (ICS)\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me oT vulnerability management adapted to ICS constraints (vulnerability awareness via vendor advisories/ICS-CERT, risk-based prioritisation since patching is constrained by uptime/safety), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ICS-CERT / vendor advisory tracking, OT vuln prioritisation, Virtual patching / IPS + segmentation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `OT vuln awareness (ICS-CERT/vendor advisories) + risk-based prioritisation (upti` — read-only, against the systems of record.",
        "The test itself is specific. Verify ICS vulnerabilities are managed within OT constraints. PASS: OT vulnerabilities are tracked (ICS-CERT/vendor advisories) + risk-prioritised, compensating controls (segmentation, virtual patching, hardening) cover what can't be patched, patchable assets follow a tested/vendor-approved/maintenance-window process with rollback, and unpatchable/EOL assets are tracked with controls. Exceptions: no OT vulnerability awareness, IT-style forced patching risking process disruption, unpatchable assets with no compensating controls, and untracked legacy/EOL OT exposure. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_patch_and_vulnerability_management_ics_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ICS-CERT / vendor advisory tracking and OT vuln prioritisation (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_patch_and_vulnerability_management_ics_mcp.py` to expose it to your agent — or `python 05_patch_and_vulnerability_management_ics_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ICS-CERT / vendor advisory tracking · OT vuln prioritisation",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Patch and vulnerability management (ICS)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "OT vuln awareness (ICS-CERT/vendor advisories) + risk-based prioritisation (uptime/safety constrained)\ncompensating controls where patching isn't possible (segmentation, virtual patching/IPS, hardening)\ncontrolled OT patching (lab-tested, vendor-approved, maintenance window, rollback)\nunpatchable/legacy/EOL OT tracking + compensating controls"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: OT vulnerability management adapted to ICS constraints (vulnerability awareness via vendor advisories/ICS-CERT, risk-based prioritisation since patching is constrained by uptime/safety).",
        "The test: Verify ICS vulnerabilities are managed within OT constraints.",
        "Reconcile the systems of record (ICS-CERT / vendor advisory tracking, OT vuln prioritisation, Virtual patching / IPS + segmentation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. OT vulnerabilities are neither tracked nor compensated — controllers run years-old firmware with public exploits, patching is deemed 'too risky' so nothing is done, and there are no compensating controls like segmentation or virtual patching."
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "CISA ICS Advisories",
          "url": "https://www.cisa.gov/news-events/cybersecurity-advisories"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_patch_and_vulnerability_management_ics_mcp.py",
          "url": "/audit-code/ics/05_patch_and_vulnerability_management_ics_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"Patch and vulnerability management (ICS)\" (ot vulnerability management adapted to ics constraints (vulnerability awareness via vendor advisories/ics-cert, risk-based prioritisation since patching is constrained by uptime/safety)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Patch and vulnerability management (ICS)\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Verify ICS vulnerabilities are managed within OT constraints. PASS: OT vulnerabilities are tracked (ICS-CERT/vendor advisories) + risk-prioritised, compensating controls (segmentation, virtual patching, hardening) cover what can't be patched, patchable assets follow a tested/vendor-approved/maintenance-window process with rollback, and unpatchable/EOL assets are tracked with controls. Exceptions: no OT vulnerability awareness, IT-style forced patching risking process disruption, unpatchable assets with no compensating controls, and untracked legacy/EOL OT exposure. The evidence — OT vulnerability management adapted to ICS constraints (vulnerability awareness via vendor advisories/ICS-CERT, risk-based prioritisation since patching is constrained by uptime/safety) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ICS-CERT / vendor advisory tracking APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ICS-CERT / vendor advisory tracking gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ICS-CERT / vendor advisory tracking; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"Patch and vulnerability management (ICS)\" Audit Evidence\n\nThe test:\nVerify ICS vulnerabilities are managed within OT constraints. PASS: OT vulnerabilities are tracked (ICS-CERT/vendor advisories) + risk-prioritised, compensating controls (segmentation, virtual patching, hardening) cover what can't be patched, patchable assets follow a tested/vendor-approved/maintenance-window process with rollback, and unpatchable/EOL assets are tracked with controls. Exceptions: no OT vulnerability awareness, IT-style forced patching risking process disruption, unpatchable assets with no compensating controls, and untracked legacy/EOL OT exposure.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — OT vulnerability management adapted to ICS constraints (vulnerability awareness via vendor advisories/ICS-CERT, risk-based prioritisation since patching is constrained by uptime/safety))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Patch and vulnerability management (ICS)\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Patch and vulnerability management (ICS)\" control must cover\n# fragment: patch_vulnerability_management_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"EXCEPTIONS\"\n}\n# fragment: exceptions}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "patch_vulnerability_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "exceptions}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "ics-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Patch and vulnerability management (ICS)\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Deploy and operate the patch and vulnerability management (ics) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the patch and vulnerability management (ics) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for patch and vulnerability management (ics) against comparable organisations in the sector",
            "Obtain evidence that the patch and vulnerability management (ics) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ics-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Patch and vulnerability management (ICS)\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Industrial Control Systems (ICS)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Industrial Control Systems (ICS) estate",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Industrial Control Systems (ICS) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ics-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Patch and vulnerability management (ICS)\" control?",
          "options": [
            "A point-in-time screenshot of one system's patch and vulnerability management (ics) settings, captured during the walkthrough",
            "The OT vulnerability management adapted to ICS constraints (vulnerability awareness via vendor advisories/ICS-CERT, risk-based prioritisation since patching is constrained by uptime/safety), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the patch and vulnerability management (ics) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's patch and vulnerability management (ics) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ics-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Patch and vulnerability management (ICS)\"?",
          "options": [
            "From ICS-CERT / vendor advisory tracking and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how patch and vulnerability management (ics) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ICS-CERT / vendor advisory tracking) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ics-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Patch and vulnerability management (ICS)\"?",
          "options": [
            "The external audit firm, since it is the party examining the patch and vulnerability management (ics) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the patch and vulnerability management (ics) data is shared, so the accountability sits with no one in particular",
            "OT / ICS security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "OT / ICS security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ics-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Patch and vulnerability management (ICS)\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "ics-05-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "ics-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Patch and vulnerability management (ICS)\", which of these is a realistic reportable finding?",
          "options": [
            "OT vulnerabilities are neither tracked nor compensated — controllers run years-old firmware with public exploits, patching is deemed 'too risky' so nothing is done, and there are no compensating controls like segmentation or virtual patching.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. OT vulnerabilities are neither tracked nor compensated — controllers run years-old firmware with public exploits, patching is deemed 'too risky' so nothing is done, and there are no compensating controls like segmentation or virtual patching. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ics-05-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "ics-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Patch and vulnerability management (ICS)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind patch and vulnerability management (ics), so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "ics",
    "id": "ics-06",
    "order": 6,
    "title": "ICS security governance",
    "subtitle": "Agentic technical & privacy audit of the ics security governance control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"ICS security governance\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify ICS security is governed. PASS: an OT security program with OT-specific policies + defined ownership, OT risk assessment tied to safety/operational impact, alignment to IEC 62443/NIST 800-82 with a roadmap, and security coordinated with safety + operations. Exceptions: no OT security program/ownership (IT policies assumed to cover OT), risk assessed only as IT data-risk (ignoring physical/safety consequence), no ICS-framework alignment, and security changes made without safety coordination.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (OT security program + policies; OT risk assessment (safety-linked); IEC 62443 / NIST 800-82 alignment) as tools — e.g. `OT security program + governance (OT-specific policies, ownership/role`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The OT/ICS security program + governance (OT-specific policies, defined OT security ownership/roles, the IT-OT-engineering-safety governance structure)",
        "OT risk assessment tied to safety + operational impact (not just IT-style data risk — process safety, physical consequence)",
        "Alignment to an ICS framework (IEC 62443, NIST 800-82) + a maturity/roadmap",
        "OT security integrated with safety + operations (security changes don't undermine safety; coordinated)"
      ],
      "system": [
        "OT security program + policies",
        "OT risk assessment (safety-linked)",
        "IEC 62443 / NIST 800-82 alignment",
        "OT-safety governance"
      ],
      "dataOwner": [
        "OT / ICS security leadership",
        "Plant management + process safety",
        "Risk + IT security"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-06-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "ICS security governance",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"ICS security governance\" as a repeatable agentic workflow: pull the real evidence (The OT/ICS security program + governance (OT-specific policies, defined OT security ownership/roles, the IT-OT-engineering-safety governance structure)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"ICS security governance\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the OT/ICS security program + governance (OT-specific policies, defined OT security ownership/roles, the IT-OT-engineering-safety governance structure), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here OT security program + policies, OT risk assessment (safety-linked), IEC 62443 / NIST 800-82 alignment — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `OT security program + governance (OT-specific policies, ownership/roles, IT-OT-e` — read-only, against the systems of record.",
        "The test itself is specific. Verify ICS security is governed. PASS: an OT security program with OT-specific policies + defined ownership, OT risk assessment tied to safety/operational impact, alignment to IEC 62443/NIST 800-82 with a roadmap, and security coordinated with safety + operations. Exceptions: no OT security program/ownership (IT policies assumed to cover OT), risk assessed only as IT data-risk (ignoring physical/safety consequence), no ICS-framework alignment, and security changes made without safety coordination. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_ics_security_governance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from OT security program + policies and OT risk assessment (safety-linked) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_ics_security_governance_mcp.py` to expose it to your agent — or `python 06_ics_security_governance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull OT security program + policies · OT risk assessment (safety-linked)",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"ICS security governance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "OT security program + governance (OT-specific policies, ownership/roles, IT-OT-engineering-safety structure)\nOT risk assessment tied to safety + operational/physical impact\nalignment to IEC 62443 / NIST 800-82 + maturity/roadmap\nOT security integrated + coordinated with safety + operations"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The OT/ICS security program + governance (OT-specific policies, defined OT security ownership/roles, the IT-OT-engineering-safety governance structure).",
        "The test: Verify ICS security is governed.",
        "Reconcile the systems of record (OT security program + policies, OT risk assessment (safety-linked), IEC 62443 / NIST 800-82 alignment) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no OT security program — IT policies are assumed to cover the plant, no one owns OT security, risk has never been assessed in terms of physical or safety consequence, and the environment is unaligned to any ICS framework."
      ],
      "references": [
        {
          "title": "IEC 62443",
          "url": "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards"
        },
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_ics_security_governance_mcp.py",
          "url": "/audit-code/ics/06_ics_security_governance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"ICS security governance\" (the ot/ics security program + governance (ot-specific policies, defined ot security ownership/roles, the it-ot-engineering-safety governance structure)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"ICS security governance\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Verify ICS security is governed. PASS: an OT security program with OT-specific policies + defined ownership, OT risk assessment tied to safety/operational impact, alignment to IEC 62443/NIST 800-82 with a roadmap, and security coordinated with safety + operations. Exceptions: no OT security program/ownership (IT policies assumed to cover OT), risk assessed only as IT data-risk (ignoring physical/safety consequence), no ICS-framework alignment, and security changes made without safety coordination. The evidence — The OT/ICS security program + governance (OT-specific policies, defined OT security ownership/roles, the IT-OT-engineering-safety governance structure) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live OT security program + policies APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. OT security program + policies gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from OT security program + policies; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"ICS security governance\" Audit Evidence\n\nThe test:\nVerify ICS security is governed. PASS: an OT security program with OT-specific policies + defined ownership, OT risk assessment tied to safety/operational impact, alignment to IEC 62443/NIST 800-82 with a roadmap, and security coordinated with safety + operations. Exceptions: no OT security program/ownership (IT policies assumed to cover OT), risk assessed only as IT data-risk (ignoring physical/safety consequence), no ICS-framework alignment, and security changes made without safety coordination.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — The OT/ICS security program + governance (OT-specific policies, defined OT security ownership/roles, the IT-OT-engineering-safety governance structure))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"ICS security governance\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"ICS security governance\" control must cover\n# fragment: ics_security_governance_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "ics_security_governance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "ics-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"ICS security governance\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Deploy and operate the ics security governance control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ics security governance control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ics security governance against comparable organisations in the sector",
            "Obtain evidence that the ics security governance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ics-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"ICS security governance\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Industrial Control Systems (ICS)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Industrial Control Systems (ICS) estate",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Industrial Control Systems (ICS) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ics-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"ICS security governance\" control?",
          "options": [
            "A point-in-time screenshot of one system's ics security governance settings, captured during the walkthrough",
            "The The OT/ICS security program + governance (OT-specific policies, defined OT security ownership/roles, the IT-OT-engineering-safety governance structure), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ics security governance control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ics security governance capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ics-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"ICS security governance\"?",
          "options": [
            "From OT security program + policies and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ics security governance works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. OT security program + policies) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ics-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"ICS security governance\"?",
          "options": [
            "The external audit firm, since it is the party examining the ics security governance control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ics security governance data is shared, so the accountability sits with no one in particular",
            "OT / ICS security leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "OT / ICS security leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ics-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"ICS security governance\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "ics-06-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "ics-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"ICS security governance\", which of these is a realistic reportable finding?",
          "options": [
            "There's no OT security program — IT policies are assumed to cover the plant, no one owns OT security, risk has never been assessed in terms of physical or safety consequence, and the environment is unaligned to any ICS framework.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no OT security program — IT policies are assumed to cover the plant, no one owns OT security, risk has never been assessed in terms of physical or safety consequence, and the environment is unaligned to any ICS framework. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ics-06-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "ics-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"ICS security governance\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ics security governance, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "ics",
    "id": "ics-07",
    "order": 7,
    "title": "ICS monitoring and IR",
    "subtitle": "Agentic technical & privacy audit of the ics monitoring and ir control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"ICS monitoring and IR\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify ICS is monitored + has cyber-physical IR. PASS: passive OT monitoring/IDS baselines ICS traffic + detects anomalous commands/known ICS malware/lateral movement, OT IR playbooks account for safety + physical impact (fail-safe/manual decisions) coordinated with operations, and IR is tested + SOC-integrated. Exceptions: no OT monitoring (ICS attacks invisible), no ICS-specific detections, IT IR playbooks that ignore physical/safety consequence, and no OT incident exercises with operations.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (OT IDS / monitoring (Dragos / Nozomi / Claroty); OT detection use-cases + SIEM; OT IR playbooks (safety-aware)) as tools — e.g. `OT monitoring (passive IDS — Dragos/Nozomi/Claroty — baselining ICS tr`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "OT-specific security monitoring (passive OT network monitoring/IDS — Dragos/Nozomi/Claroty — baselining normal ICS traffic, detecting anomalous commands/protocol abuse, rogue devices)",
        "OT detection use-cases (unauthorised PLC programming, unusual setpoint changes, known ICS-malware — TRITON/Industroyer/Stuxnet-style — IT-to-OT lateral movement)",
        "OT/ICS incident response (playbooks accounting for safety + the cyber-physical impact; coordinated with operations; the decision to fail-safe/manual)",
        "OT incident response tested + integrated with the SOC + plant operations"
      ],
      "system": [
        "OT IDS / monitoring (Dragos / Nozomi / Claroty)",
        "OT detection use-cases + SIEM",
        "OT IR playbooks (safety-aware)",
        "OT-SOC-operations integration"
      ],
      "dataOwner": [
        "OT / ICS security + SOC",
        "Plant operations + safety",
        "Incident response"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-07-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "ICS monitoring and IR",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"ICS monitoring and IR\" as a repeatable agentic workflow: pull the real evidence (OT-specific security monitoring (passive OT network monitoring/IDS — Dragos/Nozomi/Claroty — baselining normal ICS traffic, detecting anomalous commands/protocol abuse, rogue devices)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"ICS monitoring and IR\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me oT-specific security monitoring (passive OT network monitoring/IDS — Dragos/Nozomi/Claroty — baselining normal ICS traffic, detecting anomalous commands/protocol abuse, rogue devices), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here OT IDS / monitoring (Dragos / Nozomi / Claroty), OT detection use-cases + SIEM, OT IR playbooks (safety-aware) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `OT monitoring (passive IDS — Dragos/Nozomi/Claroty — baselining ICS traffic, ano` — read-only, against the systems of record.",
        "The test itself is specific. Verify ICS is monitored + has cyber-physical IR. PASS: passive OT monitoring/IDS baselines ICS traffic + detects anomalous commands/known ICS malware/lateral movement, OT IR playbooks account for safety + physical impact (fail-safe/manual decisions) coordinated with operations, and IR is tested + SOC-integrated. Exceptions: no OT monitoring (ICS attacks invisible), no ICS-specific detections, IT IR playbooks that ignore physical/safety consequence, and no OT incident exercises with operations. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_ics_monitoring_and_ir_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from OT IDS / monitoring (Dragos / Nozomi / Claroty) and OT detection use-cases + SIEM (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_ics_monitoring_and_ir_mcp.py` to expose it to your agent — or `python 07_ics_monitoring_and_ir_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull OT IDS / monitoring (Dragos / Nozomi / Claroty) · OT detection use-cases + SIEM",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"ICS monitoring and IR\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "OT monitoring (passive IDS — Dragos/Nozomi/Claroty — baselining ICS traffic, anomalous commands, rogue devices)\nOT detections (unauthorised PLC programming, setpoint changes, ICS malware — TRITON/Industroyer — IT-to-OT lateral movement)\nOT/ICS IR (safety + cyber-physical impact; fail-safe/manual decision; coordinated with operations)\nOT IR tested + integrated with SOC + plant operations"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: OT-specific security monitoring (passive OT network monitoring/IDS — Dragos/Nozomi/Claroty — baselining normal ICS traffic, detecting anomalous commands/protocol abuse, rogue devices).",
        "The test: Verify ICS is monitored + has cyber-physical IR.",
        "Reconcile the systems of record (OT IDS / monitoring (Dragos / Nozomi / Claroty), OT detection use-cases + SIEM, OT IR playbooks (safety-aware)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no OT monitoring, so an attacker reprogramming a PLC or moving from IT into OT would be invisible; the IR plan is IT-centric with no consideration of process safety or a fail-safe-to-manual decision, and has never been exercised with plant operations."
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "MITRE ATT&CK for ICS",
          "url": "https://attack.mitre.org/matrices/ics/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_ics_monitoring_and_ir_mcp.py",
          "url": "/audit-code/ics/07_ics_monitoring_and_ir_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"ICS monitoring and IR\" (ot-specific security monitoring (passive ot network monitoring/ids — dragos/nozomi/claroty — baselining normal ics traffic, detecting anomalous commands/protocol abuse, rogue devices)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"ICS monitoring and IR\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Verify ICS is monitored + has cyber-physical IR. PASS: passive OT monitoring/IDS baselines ICS traffic + detects anomalous commands/known ICS malware/lateral movement, OT IR playbooks account for safety + physical impact (fail-safe/manual decisions) coordinated with operations, and IR is tested + SOC-integrated. Exceptions: no OT monitoring (ICS attacks invisible), no ICS-specific detections, IT IR playbooks that ignore physical/safety consequence, and no OT incident exercises with operations. The evidence — OT-specific security monitoring (passive OT network monitoring/IDS — Dragos/Nozomi/Claroty — baselining normal ICS traffic, detecting anomalous commands/protocol abuse, rogue devices) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live OT IDS / monitoring (Dragos / Nozomi / Claroty) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. OT IDS / monitoring (Dragos / Nozomi / Claroty) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from OT IDS / monitoring (Dragos / Nozomi / Claroty); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"ICS monitoring and IR\" Audit Evidence\n\nThe test:\nVerify ICS is monitored + has cyber-physical IR. PASS: passive OT monitoring/IDS baselines ICS traffic + detects anomalous commands/known ICS malware/lateral movement, OT IR playbooks account for safety + physical impact (fail-safe/manual decisions) coordinated with operations, and IR is tested + SOC-integrated. Exceptions: no OT monitoring (ICS attacks invisible), no ICS-specific detections, IT IR playbooks that ignore physical/safety consequence, and no OT incident exercises with operations.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — OT-specific security monitoring (passive OT network monitoring/IDS — Dragos/Nozomi/Claroty — baselining normal ICS traffic, detecting anomalous commands/protocol abuse, rogue devices))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"ICS monitoring and IR\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"ICS monitoring and IR\" control must cover\n# fragment: ics_monitoring_ir_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "ics_monitoring_ir_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "ics-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"ICS monitoring and IR\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Deploy and operate the ics monitoring and ir control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ics monitoring and ir control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ics monitoring and ir against comparable organisations in the sector",
            "Obtain evidence that the ics monitoring and ir control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ics-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"ICS monitoring and IR\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Industrial Control Systems (ICS)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Industrial Control Systems (ICS) estate",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Industrial Control Systems (ICS) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ics-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"ICS monitoring and IR\" control?",
          "options": [
            "A point-in-time screenshot of one system's ics monitoring and ir settings, captured during the walkthrough",
            "The OT-specific security monitoring (passive OT network monitoring/IDS — Dragos/Nozomi/Claroty — baselining normal ICS traffic, detecting anomalous commands/protocol abuse, rogue devices), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ics monitoring and ir control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ics monitoring and ir capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ics-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"ICS monitoring and IR\"?",
          "options": [
            "From OT IDS / monitoring (Dragos / Nozomi / Claroty) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ics monitoring and ir works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. OT IDS / monitoring (Dragos / Nozomi / Claroty)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ics-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"ICS monitoring and IR\"?",
          "options": [
            "The external audit firm, since it is the party examining the ics monitoring and ir control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ics monitoring and ir data is shared, so the accountability sits with no one in particular",
            "OT / ICS security + SOC, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "OT / ICS security + SOC owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ics-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"ICS monitoring and IR\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "ics-07-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "ics-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"ICS monitoring and IR\", which of these is a realistic reportable finding?",
          "options": [
            "There's no OT monitoring, so an attacker reprogramming a PLC or moving from IT into OT would be invisible; the IR plan is IT-centric with no consideration of process safety or a fail-safe-to-manual decision, and has never been exercised with plant operations.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no OT monitoring, so an attacker reprogramming a PLC or moving from IT into OT would be invisible; the IR plan is IT-centric with no consideration of process safety or a fail-safe-to-manual decision, and has never been exercised with plant operations. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ics-07-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "ics-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"ICS monitoring and IR\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ics monitoring and ir, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "ics",
    "id": "ics-08",
    "order": 8,
    "title": "Physical access and security",
    "subtitle": "Agentic technical & privacy audit of the physical access and security control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Physical access and security\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify ICS physical security is enforced. PASS: control rooms, plant floor, cabinets, and field devices have controlled + logged physical access, engineering workstations + control infra are physically restricted (no open USB), OT-space access is logged with contractor escort, and remote/unmanned sites have tamper/intrusion protection. Exceptions: open access to control rooms/controller cabinets, engineering workstations physically exposed with open USB, no logging of OT-space entry, and unmanned sites with no physical/tamper protection.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (Physical access control (OT spaces); Cabinet / device physical security; EWS physical / USB lockdown) as tools — e.g. `physical security of ICS assets (control rooms, plant floor, RTU/subst`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Physical security of ICS assets (controlled access to control rooms, plant floor, RTU/substation cabinets, field devices — locks, badge access, the controller cabinet itself)",
        "Protection of engineering workstations + control infrastructure from physical access (locked, restricted, no open USB)",
        "Physical access control + logging for OT spaces (who enters control rooms/critical-asset areas, contractors escorted)",
        "Protection of remote/unmanned sites (substations, pumping stations, field RTUs — tamper, intrusion detection)"
      ],
      "system": [
        "Physical access control (OT spaces)",
        "Cabinet / device physical security",
        "EWS physical / USB lockdown",
        "Remote-site intrusion / tamper detection"
      ],
      "dataOwner": [
        "Physical security + OT / ICS",
        "Plant / facilities",
        "Operations"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-08-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "Physical access and security",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Physical access and security\" as a repeatable agentic workflow: pull the real evidence (Physical security of ICS assets (controlled access to control rooms, plant floor, RTU/substation cabinets, field devices — locks, badge access, the controller cabinet itself)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"Physical access and security\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me physical security of ICS assets (controlled access to control rooms, plant floor, RTU/substation cabinets, field devices — locks, badge access, the controller cabinet itself), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Physical access control (OT spaces), Cabinet / device physical security, EWS physical / USB lockdown — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `physical security of ICS assets (control rooms, plant floor, RTU/substation cabi` — read-only, against the systems of record.",
        "The test itself is specific. Verify ICS physical security is enforced. PASS: control rooms, plant floor, cabinets, and field devices have controlled + logged physical access, engineering workstations + control infra are physically restricted (no open USB), OT-space access is logged with contractor escort, and remote/unmanned sites have tamper/intrusion protection. Exceptions: open access to control rooms/controller cabinets, engineering workstations physically exposed with open USB, no logging of OT-space entry, and unmanned sites with no physical/tamper protection. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_physical_access_and_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Physical access control (OT spaces) and Cabinet / device physical security (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_physical_access_and_security_mcp.py` to expose it to your agent — or `python 08_physical_access_and_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Physical access control (OT spaces) · Cabinet / device physical security",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Physical access and security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "physical security of ICS assets (control rooms, plant floor, RTU/substation cabinets, field devices)\nengineering workstations + control infra protected from physical access (locked, restricted, no open USB)\nphysical access control + logging for OT spaces (entry logged, contractors escorted)\nremote/unmanned sites protected (substations, pumping stations, RTUs — tamper/intrusion detection)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Physical security of ICS assets (controlled access to control rooms, plant floor, RTU/substation cabinets, field devices — locks, badge access, the controller cabinet itself).",
        "The test: Verify ICS physical security is enforced.",
        "Reconcile the systems of record (Physical access control (OT spaces), Cabinet / device physical security, EWS physical / USB lockdown) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Controller cabinets and engineering workstations are physically open on the plant floor with active USB ports, control-room entry isn't logged, and remote substations are unlocked with no intrusion detection — a Stuxnet-style USB or physical-access attack is wide open."
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443",
          "url": "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_physical_access_and_security_mcp.py",
          "url": "/audit-code/ics/08_physical_access_and_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"Physical access and security\" (physical security of ics assets (controlled access to control rooms, plant floor, rtu/substation cabinets, field devices — locks, badge access, the controller cabinet itself)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Physical access and security\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Verify ICS physical security is enforced. PASS: control rooms, plant floor, cabinets, and field devices have controlled + logged physical access, engineering workstations + control infra are physically restricted (no open USB), OT-space access is logged with contractor escort, and remote/unmanned sites have tamper/intrusion protection. Exceptions: open access to control rooms/controller cabinets, engineering workstations physically exposed with open USB, no logging of OT-space entry, and unmanned sites with no physical/tamper protection. The evidence — Physical security of ICS assets (controlled access to control rooms, plant floor, RTU/substation cabinets, field devices — locks, badge access, the controller cabinet itself) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Physical access control (OT spaces) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Physical access control (OT spaces) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Physical access control (OT spaces); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"Physical access and security\" Audit Evidence\n\nThe test:\nVerify ICS physical security is enforced. PASS: control rooms, plant floor, cabinets, and field devices have controlled + logged physical access, engineering workstations + control infra are physically restricted (no open USB), OT-space access is logged with contractor escort, and remote/unmanned sites have tamper/intrusion protection. Exceptions: open access to control rooms/controller cabinets, engineering workstations physically exposed with open USB, no logging of OT-space entry, and unmanned sites with no physical/tamper protection.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — Physical security of ICS assets (controlled access to control rooms, plant floor, RTU/substation cabinets, field devices — locks, badge access, the controller cabinet itself))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Physical access and security\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Physical access and security\" control must cover\n# fragment: physical_access_security_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "physical_access_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "ics-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Physical access and security\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Deploy and operate the physical access and security control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the physical access and security control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for physical access and security against comparable organisations in the sector",
            "Obtain evidence that the physical access and security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ics-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Physical access and security\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Industrial Control Systems (ICS)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Industrial Control Systems (ICS) estate",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Industrial Control Systems (ICS) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ics-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Physical access and security\" control?",
          "options": [
            "A point-in-time screenshot of one system's physical access and security settings, captured during the walkthrough",
            "The Physical security of ICS assets (controlled access to control rooms, plant floor, RTU/substation cabinets, field devices — locks, badge access, the controller cabinet itself), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the physical access and security control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's physical access and security capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ics-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Physical access and security\"?",
          "options": [
            "From Physical access control (OT spaces) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how physical access and security works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Physical access control (OT spaces)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ics-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Physical access and security\"?",
          "options": [
            "The external audit firm, since it is the party examining the physical access and security control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the physical access and security data is shared, so the accountability sits with no one in particular",
            "Physical security + OT / ICS, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Physical security + OT / ICS owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ics-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Physical access and security\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "ics-08-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "ics-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Physical access and security\", which of these is a realistic reportable finding?",
          "options": [
            "Controller cabinets and engineering workstations are physically open on the plant floor with active USB ports, control-room entry isn't logged, and remote substations are unlocked with no intrusion detection — a Stuxnet-style USB or physical-access attack is wide open.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Controller cabinets and engineering workstations are physically open on the plant floor with active USB ports, control-room entry isn't logged, and remote substations are unlocked with no intrusion detection — a Stuxnet-style USB or physical-access attack is wide open. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ics-08-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "ics-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Physical access and security\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind physical access and security, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "ics",
    "id": "ics-09",
    "order": 9,
    "title": "Vendor physical and remote access",
    "subtitle": "Agentic technical & privacy audit of the vendor physical and remote access control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor physical and remote access\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify vendor OT access is controlled. PASS: vendor remote access to OT is brokered (jump host/DMZ, MFA, time-bound + approved + recorded sessions), vendor physical access is escorted + logged + scoped, legacy always-on paths (modems, persistent VPNs) are removed, and vendor sessions are monitored + logged. Exceptions: always-on vendor VPN/modem access into OT, vendor remote access with no MFA/approval/recording, unescorted/unlogged vendor physical access, and dual-homed vendor laptops bridging internet to OT.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (Secured remote-access broker / jump host (MFA); Vendor session recording / monitoring; Vendor physical-access process) as tools — e.g. `vendor remote access brokered (jump host/DMZ, MFA, time-bound + approv`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Control of vendor/integrator remote access to OT (brokered through a secured jump host/DMZ with MFA; time-bound, approved, monitored/recorded sessions — not always-on vendor VPNs/modems)",
        "Vendor physical access control (escorted, logged, scoped to the work; equipment/media checked)",
        "Removal of legacy always-on vendor access paths (dial-up modems, persistent vendor VPNs, dual-homed vendor laptops)",
        "Monitoring + logging of all vendor OT sessions (recorded; reviewed)"
      ],
      "system": [
        "Secured remote-access broker / jump host (MFA)",
        "Vendor session recording / monitoring",
        "Vendor physical-access process",
        "Legacy-access removal"
      ],
      "dataOwner": [
        "OT / ICS security",
        "Vendor management",
        "Physical security + operations"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-09-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "Vendor physical and remote access",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor physical and remote access\" as a repeatable agentic workflow: pull the real evidence (Control of vendor/integrator remote access to OT (brokered through a secured jump host/DMZ with MFA; time-bound, approved, monitored/recorded sessions — not always-on vendor VPNs/modems)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"Vendor physical and remote access\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me control of vendor/integrator remote access to OT (brokered through a secured jump host/DMZ with MFA; time-bound, approved, monitored/recorded sessions — not always-on vendor VPNs/modems), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Secured remote-access broker / jump host (MFA), Vendor session recording / monitoring, Vendor physical-access process — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `vendor remote access brokered (jump host/DMZ, MFA, time-bound + approved + recor` — read-only, against the systems of record.",
        "The test itself is specific. Verify vendor OT access is controlled. PASS: vendor remote access to OT is brokered (jump host/DMZ, MFA, time-bound + approved + recorded sessions), vendor physical access is escorted + logged + scoped, legacy always-on paths (modems, persistent VPNs) are removed, and vendor sessions are monitored + logged. Exceptions: always-on vendor VPN/modem access into OT, vendor remote access with no MFA/approval/recording, unescorted/unlogged vendor physical access, and dual-homed vendor laptops bridging internet to OT. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_vendor_physical_and_remote_access_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Secured remote-access broker / jump host (MFA) and Vendor session recording / monitoring (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_vendor_physical_and_remote_access_mcp.py` to expose it to your agent — or `python 09_vendor_physical_and_remote_access_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Secured remote-access broker / jump host (MFA) · Vendor session recording / monitoring",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor physical and remote access\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "vendor remote access brokered (jump host/DMZ, MFA, time-bound + approved + recorded sessions; no always-on)\nvendor physical access (escorted, logged, scoped; equipment/media checked)\nremoval of legacy always-on paths (dial-up modems, persistent VPNs, dual-homed laptops)\nmonitoring + logging of all vendor OT sessions"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Control of vendor/integrator remote access to OT (brokered through a secured jump host/DMZ with MFA; time-bound, approved, monitored/recorded sessions — not always-on vendor VPNs/modems).",
        "The test: Verify vendor OT access is controlled.",
        "Reconcile the systems of record (Secured remote-access broker / jump host (MFA), Vendor session recording / monitoring, Vendor physical-access process) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Multiple OT vendors have always-on VPNs and a legacy dial-up modem directly into the control network with no MFA, approval, or session recording — the same persistent-vendor-access pattern behind several major ICS intrusions."
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443",
          "url": "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_vendor_physical_and_remote_access_mcp.py",
          "url": "/audit-code/ics/09_vendor_physical_and_remote_access_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"Vendor physical and remote access\" (control of vendor/integrator remote access to ot (brokered through a secured jump host/dmz with mfa; time-bound, approved, monitored/recorded sessions — not always-on vendor vpns/modems)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor physical and remote access\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Verify vendor OT access is controlled. PASS: vendor remote access to OT is brokered (jump host/DMZ, MFA, time-bound + approved + recorded sessions), vendor physical access is escorted + logged + scoped, legacy always-on paths (modems, persistent VPNs) are removed, and vendor sessions are monitored + logged. Exceptions: always-on vendor VPN/modem access into OT, vendor remote access with no MFA/approval/recording, unescorted/unlogged vendor physical access, and dual-homed vendor laptops bridging internet to OT. The evidence — Control of vendor/integrator remote access to OT (brokered through a secured jump host/DMZ with MFA; time-bound, approved, monitored/recorded sessions — not always-on vendor VPNs/modems) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Secured remote-access broker / jump host (MFA) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Secured remote-access broker / jump host (MFA) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Secured remote-access broker / jump host (MFA); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"Vendor physical and remote access\" Audit Evidence\n\nThe test:\nVerify vendor OT access is controlled. PASS: vendor remote access to OT is brokered (jump host/DMZ, MFA, time-bound + approved + recorded sessions), vendor physical access is escorted + logged + scoped, legacy always-on paths (modems, persistent VPNs) are removed, and vendor sessions are monitored + logged. Exceptions: always-on vendor VPN/modem access into OT, vendor remote access with no MFA/approval/recording, unescorted/unlogged vendor physical access, and dual-homed vendor laptops bridging internet to OT.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — Control of vendor/integrator remote access to OT (brokered through a secured jump host/DMZ with MFA; time-bound, approved, monitored/recorded sessions — not always-on vendor VPNs/modems))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor physical and remote access\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor physical and remote access\" control must cover\n# fragment: vendor_physical_remote_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "vendor_physical_remote_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "ics-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor physical and remote access\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Deploy and operate the vendor physical and remote access control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vendor physical and remote access control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vendor physical and remote access against comparable organisations in the sector",
            "Obtain evidence that the vendor physical and remote access control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ics-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor physical and remote access\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Industrial Control Systems (ICS)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Industrial Control Systems (ICS) estate",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Industrial Control Systems (ICS) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ics-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor physical and remote access\" control?",
          "options": [
            "A point-in-time screenshot of one system's vendor physical and remote access settings, captured during the walkthrough",
            "The Control of vendor/integrator remote access to OT (brokered through a secured jump host/DMZ with MFA; time-bound, approved, monitored/recorded sessions — not always-on vendor VPNs/modems), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vendor physical and remote access control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vendor physical and remote access capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ics-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vendor physical and remote access\"?",
          "options": [
            "From Secured remote-access broker / jump host (MFA) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vendor physical and remote access works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Secured remote-access broker / jump host (MFA)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ics-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor physical and remote access\"?",
          "options": [
            "The external audit firm, since it is the party examining the vendor physical and remote access control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vendor physical and remote access data is shared, so the accountability sits with no one in particular",
            "OT / ICS security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "OT / ICS security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ics-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor physical and remote access\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "ics-09-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "ics-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor physical and remote access\", which of these is a realistic reportable finding?",
          "options": [
            "Multiple OT vendors have always-on VPNs and a legacy dial-up modem directly into the control network with no MFA, approval, or session recording — the same persistent-vendor-access pattern behind several major ICS intrusions.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Multiple OT vendors have always-on VPNs and a legacy dial-up modem directly into the control network with no MFA, approval, or session recording — the same persistent-vendor-access pattern behind several major ICS intrusions. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ics-09-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "ics-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor physical and remote access\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vendor physical and remote access, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "ics",
    "id": "ics-10",
    "order": 10,
    "title": "Supply chain integrity",
    "subtitle": "Agentic technical & privacy audit of the supply chain integrity control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Supply chain integrity\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify ICS supply-chain integrity. PASS: controllers/firmware/software come from authorised channels with verified/signed integrity, ICS vendors/integrators are security-assured (secure-by-design, their supply chain), delivered firmware/updates are signature-verified before loading, and counterfeit/tampered devices are detected. Exceptions: firmware/software from unverified sources loaded without signature checks, no vendor security assurance (blind trust), counterfeit-risk parts/spares, and no integrity verification on updates (a firmware-implant path).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (ICS component provenance / sourcing; Firmware signature verification; Vendor / integrator assurance) as tools — e.g. `ICS supply-chain integrity (controller/firmware/software provenance; a`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "ICS supply-chain integrity (controller/firmware/software provenance — components sourced from authorised channels, firmware integrity verified/signed, no counterfeit or tampered devices)",
        "Vendor/integrator security assurance (the ICS vendors' security practices, secure-by-design, their own supply chain — the SolarWinds/firmware-implant risk)",
        "Integrity verification of delivered/updated firmware + software (signatures checked before loading onto controllers)",
        "Counterfeit + tampered-device detection (especially for critical controllers + spares)"
      ],
      "system": [
        "ICS component provenance / sourcing",
        "Firmware signature verification",
        "Vendor / integrator assurance",
        "Counterfeit detection"
      ],
      "dataOwner": [
        "OT / ICS security + supply chain",
        "Procurement",
        "Plant engineering"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-10-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "Supply chain integrity",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Supply chain integrity\" as a repeatable agentic workflow: pull the real evidence (ICS supply-chain integrity (controller/firmware/software provenance — components sourced from authorised channels, firmware integrity verified/signed, no counterfeit or tampered devices)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"Supply chain integrity\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me iCS supply-chain integrity (controller/firmware/software provenance — components sourced from authorised channels, firmware integrity verified/signed, no counterfeit or tampered devices), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ICS component provenance / sourcing, Firmware signature verification, Vendor / integrator assurance — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `ICS supply-chain integrity (controller/firmware/software provenance; authorised ` — read-only, against the systems of record.",
        "The test itself is specific. Verify ICS supply-chain integrity. PASS: controllers/firmware/software come from authorised channels with verified/signed integrity, ICS vendors/integrators are security-assured (secure-by-design, their supply chain), delivered firmware/updates are signature-verified before loading, and counterfeit/tampered devices are detected. Exceptions: firmware/software from unverified sources loaded without signature checks, no vendor security assurance (blind trust), counterfeit-risk parts/spares, and no integrity verification on updates (a firmware-implant path). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_supply_chain_integrity_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ICS component provenance / sourcing and Firmware signature verification (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_supply_chain_integrity_mcp.py` to expose it to your agent — or `python 10_supply_chain_integrity_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ICS component provenance / sourcing · Firmware signature verification",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Supply chain integrity\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "ICS supply-chain integrity (controller/firmware/software provenance; authorised channels; no counterfeit/tampered)\nvendor/integrator security assurance (secure-by-design, their own supply chain)\nintegrity verification of delivered/updated firmware + software (signatures checked before loading)\ncounterfeit + tampered-device detection (critical controllers + spares)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: ICS supply-chain integrity (controller/firmware/software provenance — components sourced from authorised channels, firmware integrity verified/signed, no counterfeit or tampered devices).",
        "The test: Verify ICS supply-chain integrity.",
        "Reconcile the systems of record (ICS component provenance / sourcing, Firmware signature verification, Vendor / integrator assurance) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Firmware and controllers are sourced from third-party resellers with no provenance or signature verification, ICS vendors are trusted blindly with no security assurance, and updates are loaded onto controllers without checking integrity — a direct firmware-implant supply-chain path."
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_supply_chain_integrity_mcp.py",
          "url": "/audit-code/ics/10_supply_chain_integrity_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"Supply chain integrity\" (ics supply-chain integrity (controller/firmware/software provenance — components sourced from authorised channels, firmware integrity verified/signed, no counterfeit or tampered devices)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Supply chain integrity\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Verify ICS supply-chain integrity. PASS: controllers/firmware/software come from authorised channels with verified/signed integrity, ICS vendors/integrators are security-assured (secure-by-design, their supply chain), delivered firmware/updates are signature-verified before loading, and counterfeit/tampered devices are detected. Exceptions: firmware/software from unverified sources loaded without signature checks, no vendor security assurance (blind trust), counterfeit-risk parts/spares, and no integrity verification on updates (a firmware-implant path). The evidence — ICS supply-chain integrity (controller/firmware/software provenance — components sourced from authorised channels, firmware integrity verified/signed, no counterfeit or tampered devices) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ICS component provenance / sourcing APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ICS component provenance / sourcing gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ICS component provenance / sourcing; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"Supply chain integrity\" Audit Evidence\n\nThe test:\nVerify ICS supply-chain integrity. PASS: controllers/firmware/software come from authorised channels with verified/signed integrity, ICS vendors/integrators are security-assured (secure-by-design, their supply chain), delivered firmware/updates are signature-verified before loading, and counterfeit/tampered devices are detected. Exceptions: firmware/software from unverified sources loaded without signature checks, no vendor security assurance (blind trust), counterfeit-risk parts/spares, and no integrity verification on updates (a firmware-implant path).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — ICS supply-chain integrity (controller/firmware/software provenance — components sourced from authorised channels, firmware integrity verified/signed, no counterfeit or tampered devices))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Supply chain integrity\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Supply chain integrity\" control must cover\n# fragment: supply_chain_integrity_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"EXCEPTIONS\"\n}\n# fragment: exceptions}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "supply_chain_integrity_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "exceptions}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "ics-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Supply chain integrity\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Deploy and operate the supply chain integrity control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the supply chain integrity control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for supply chain integrity against comparable organisations in the sector",
            "Obtain evidence that the supply chain integrity control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ics-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Supply chain integrity\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Industrial Control Systems (ICS)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Industrial Control Systems (ICS) estate",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Industrial Control Systems (ICS) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ics-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Supply chain integrity\" control?",
          "options": [
            "A point-in-time screenshot of one system's supply chain integrity settings, captured during the walkthrough",
            "The ICS supply-chain integrity (controller/firmware/software provenance — components sourced from authorised channels, firmware integrity verified/signed, no counterfeit or tampered devices), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the supply chain integrity control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's supply chain integrity capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ics-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Supply chain integrity\"?",
          "options": [
            "From ICS component provenance / sourcing and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how supply chain integrity works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ICS component provenance / sourcing) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ics-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Supply chain integrity\"?",
          "options": [
            "The external audit firm, since it is the party examining the supply chain integrity control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the supply chain integrity data is shared, so the accountability sits with no one in particular",
            "OT / ICS security + supply chain, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "OT / ICS security + supply chain owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ics-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Supply chain integrity\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "ics-10-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "ics-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Supply chain integrity\", which of these is a realistic reportable finding?",
          "options": [
            "Firmware and controllers are sourced from third-party resellers with no provenance or signature verification, ICS vendors are trusted blindly with no security assurance, and updates are loaded onto controllers without checking integrity — a direct firmware-implant supply-chain path.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Firmware and controllers are sourced from third-party resellers with no provenance or signature verification, ICS vendors are trusted blindly with no security assurance, and updates are loaded onto controllers without checking integrity — a direct firmware-implant supply-chain path. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ics-10-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "ics-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Supply chain integrity\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind supply chain integrity, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  }
];
