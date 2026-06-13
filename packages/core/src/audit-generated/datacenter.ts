import type { EpochConfig, StageConfig } from "../types";

export const datacenterEpoch: EpochConfig = {
  "id": "datacenter",
  "name": "Datacenter / Lab / Colocation (CoLo)",
  "subtitle": "Agentic technical & privacy audit — Datacenter / Lab / Colocation (CoLo)",
  "description": "Audit Datacenter / Lab / Colocation (CoLo) end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🏢",
  "color": "Stone",
  "unlocked": true
};

export const datacenterStages: StageConfig[] = [
  {
    "epochId": "datacenter",
    "id": "dcr-01",
    "order": 1,
    "title": "Physical security controls",
    "subtitle": "Agentic technical & privacy audit of the physical security controls control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Physical security controls\" control for Datacenter / Lab / Colocation (CoLo) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify physical access to the facility is least-privilege, layered, and logged. PASS: badge access to the DC/lab/cage is least-privilege with documented justification; access is provisioned on approval + revoked on leaver/role-change/term; layered controls (perimeter → mantrap → cage/cabinet) plus CCTV exist; and visitors/vendors are logged + escorted. Exceptions: people with access and no business need, leaver/contractor badges still active, tailgating-prone single-door entry (no mantrap/anti-passback), unmonitored or short-retention CCTV, and unescorted visitors.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Datacenter / Lab / Colocation (CoLo) systems of record (PACS / badge system (access list + logs); CCTV / video retention; Visitor-management system) as tools — e.g. `PACS access export: who can enter the DC/lab/cage + justification (lea`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The physical-access-control records (badge/PACS access list to the data center/lab/cage) + who has access + their justification",
        "Access provisioning/deprovisioning evidence (granted on approval; revoked on leaver/role-change/contract-end)",
        "Layered physical controls evidence (perimeter, mantrap/anti-passback, cage/cabinet locks, CCTV, guards)",
        "Visitor + vendor access logs + escort policy"
      ],
      "system": [
        "PACS / badge system (access list + logs)",
        "CCTV / video retention",
        "Visitor-management system",
        "HR / contract feed (for deprovisioning)"
      ],
      "dataOwner": [
        "Facilities / Physical security",
        "Datacenter operations",
        "HR (leaver feed)"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Datacenter / Lab / Colocation (CoLo) controls."
      }
    },
    "badge": {
      "id": "dcr-01-badge",
      "name": "Datacenter / Lab / Colocation (CoLo) Auditor",
      "emoji": "🏢"
    },
    "wonder": {
      "name": "Physical security controls",
      "location": "Datacenter / Lab / Colocation (CoLo)",
      "era": "Present Day",
      "emoji": "🏢"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Physical security controls\" as a repeatable agentic workflow: pull the real evidence (The physical-access-control records (badge/PACS access list to the data center/lab/cage) + who has access + their justification) with read-only agents, run the test against policy, and issue a defensible opinion on the Datacenter / Lab / Colocation (CoLo) control.",
      "year": 2025,
      "overview": [
        "The \"Physical security controls\" sub-process is one of the controls an auditor must verify for Datacenter / Lab / Colocation (CoLo). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the physical-access-control records (badge/PACS access list to the data center/lab/cage) + who has access + their justification, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PACS / badge system (access list + logs), CCTV / video retention, Visitor-management system — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `PACS access export: who can enter the DC/lab/cage + justification (least-privile` — read-only, against the systems of record.",
        "The test itself is specific. Verify physical access to the facility is least-privilege, layered, and logged. PASS: badge access to the DC/lab/cage is least-privilege with documented justification; access is provisioned on approval + revoked on leaver/role-change/term; layered controls (perimeter → mantrap → cage/cabinet) plus CCTV exist; and visitors/vendors are logged + escorted. Exceptions: people with access and no business need, leaver/contractor badges still active, tailgating-prone single-door entry (no mantrap/anti-passback), unmonitored or short-retention CCTV, and unescorted visitors. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_physical_security_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PACS / badge system (access list + logs) and CCTV / video retention (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_physical_security_controls_mcp.py` to expose it to your agent — or `python 01_physical_security_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Physical access and environmental failure",
        "when": "Recurring",
        "where": "Datacenters / labs / colocation",
        "impact": "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.",
        "body": [
          "The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.",
          "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Datacenter / Lab / Colocation (CoLo) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PACS / badge system (access list + logs) · CCTV / video retention",
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
          "event": "OVHcloud Strasbourg fire — facility resilience as a continuity risk",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Datacenter cooling failures cause regional cloud outages in heatwaves"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Physical security controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "PACS access export: who can enter the DC/lab/cage + justification (least-privilege?)\nreconcile badge access vs active employees/contractors (orphaned/leaver badges)\nlayered controls: perimeter, mantrap/anti-passback, cage/cabinet locks, CCTV coverage + retention\nvisitor + vendor logs + escort-policy adherence"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The physical-access-control records (badge/PACS access list to the data center/lab/cage) + who has access + their justification.",
        "The test: Verify physical access to the facility is least-privilege, layered, and logged.",
        "Reconcile the systems of record (PACS / badge system (access list + logs), CCTV / video retention, Visitor-management system) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The badge list grants DC access to 40 people with no current need including several leavers and ex-contractors, there's no mantrap (single badge-in door, easy tailgating), and CCTV retention is 7 days."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 PE (Physical & Environmental)",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "ISO/IEC 27001 A.7",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_physical_security_controls_mcp.py",
          "url": "/audit-code/datacenter/01_physical_security_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Datacenter / Lab / Colocation (CoLo) evidence for \"Physical security controls\" (the physical-access-control records (badge/pacs access list to the data center/lab/cage) + who has access + their justification), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Physical security controls\" control for Datacenter / Lab / Colocation (CoLo) at AcmeCorp. THE TEST: Verify physical access to the facility is least-privilege, layered, and logged. PASS: badge access to the DC/lab/cage is least-privilege with documented justification; access is provisioned on approval + revoked on leaver/role-change/term; layered controls (perimeter → mantrap → cage/cabinet) plus CCTV exist; and visitors/vendors are logged + escorted. Exceptions: people with access and no business need, leaver/contractor badges still active, tailgating-prone single-door entry (no mantrap/anti-passback), unmonitored or short-retention CCTV, and unescorted visitors. The evidence — The physical-access-control records (badge/PACS access list to the data center/lab/cage) + who has access + their justification — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PACS / badge system (access list + logs) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PACS / badge system (access list + logs) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PACS / badge system (access list + logs); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Datacenter / Lab / Colocation (CoLo): \"Physical security controls\" Audit Evidence\n\nThe test:\nVerify physical access to the facility is least-privilege, layered, and logged. PASS: badge access to the DC/lab/cage is least-privilege with documented justification; access is provisioned on approval + revoked on leaver/role-change/term; layered controls (perimeter → mantrap → cage/cabinet) plus CCTV exist; and visitors/vendors are logged + escorted. Exceptions: people with access and no business need, leaver/contractor badges still active, tailgating-prone single-door entry (no mantrap/anti-passback), unmonitored or short-retention CCTV, and unescorted visitors.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- datacenter_inventory.json   (in-scope items — The physical-access-control records (badge/PACS access list to the data center/lab/cage) + who has access + their justification)\n- datacenter_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Physical security controls\",\n  \"domain\": \"Datacenter / Lab / Colocation (CoLo)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dcr_",
        "/evidence/datacenter_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Facilities / Datacenter operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Physical security controls\" control must cover\n# fragment: physical_security_controls_",
        "/evidence/datacenter_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "datacenter_inventory.json",
            "isDir": false
          },
          {
            "name": "datacenter_state.json",
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
          "value": "FLAG{dcr_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/datacenter_inventory.json",
          "value": "physical_security_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/datacenter_state.json",
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
          "id": "dcr-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Physical security controls\" sub-process of Datacenter / Lab / Colocation (CoLo)?",
          "options": [
            "Deploy and operate the physical security controls control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the physical security controls control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for physical security controls against comparable organisations in the sector",
            "Obtain evidence that the physical security controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dcr-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Physical security controls\" matter to the broader Datacenter / Lab / Colocation (CoLo) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Datacenter / Lab / Colocation (CoLo)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Datacenter / Lab / Colocation (CoLo) estate",
            "It is a control other Datacenter / Lab / Colocation (CoLo) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Datacenter / Lab / Colocation (CoLo) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dcr-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Physical security controls\" control?",
          "options": [
            "A point-in-time screenshot of one system's physical security controls settings, captured during the walkthrough",
            "The The physical-access-control records (badge/PACS access list to the data center/lab/cage) + who has access + their justification, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the physical security controls control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's physical security controls capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dcr-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Physical security controls\"?",
          "options": [
            "From PACS / badge system (access list + logs) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how physical security controls works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PACS / badge system (access list + logs)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dcr-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Physical security controls\"?",
          "options": [
            "The external audit firm, since it is the party examining the physical security controls control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the physical security controls data is shared, so the accountability sits with no one in particular",
            "Facilities / Physical security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Facilities / Physical security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dcr-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Physical security controls\", which part stays with the human auditor?",
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
          "id": "dcr-01-q7",
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
          "id": "dcr-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Physical security controls\", which of these is a realistic reportable finding?",
          "options": [
            "The badge list grants DC access to 40 people with no current need including several leavers and ex-contractors, there's no mantrap (single badge-in door, easy tailgating), and CCTV retention is 7 days.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The badge list grants DC access to 40 people with no current need including several leavers and ex-contractors, there's no mantrap (single badge-in door, easy tailgating), and CCTV retention is 7 days. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dcr-01-q9",
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
          "id": "dcr-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Physical security controls\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind physical security controls, so there is no overlap",
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
    "epochId": "datacenter",
    "id": "dcr-02",
    "order": 2,
    "title": "Environmental controls",
    "subtitle": "Agentic technical & privacy audit of the environmental controls control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Environmental controls\" control for Datacenter / Lab / Colocation (CoLo) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify environmental controls keep the facility running. PASS: power (UPS + generator, dual feeds) and cooling are redundant (N+1+) with monitoring + alerting on temperature/humidity/power/leak; generators + UPS are load-tested on cadence; and there's capacity headroom. Exceptions: a single power feed or no generator, no cooling redundancy, no environmental monitoring/alerting, untested generators/UPS (fail when needed), and power/cooling at the capacity limit (no headroom).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Datacenter / Lab / Colocation (CoLo) systems of record (DCIM / building-management system (BMS); UPS + generators + PDUs; HVAC / CRAC units) as tools — e.g. `power design: UPS + generator + dual utility feed + N+1; cooling redun`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The environmental-controls design + monitoring (power: UPS + generator + dual feed; cooling/HVAC redundancy; temperature/humidity monitoring; water/leak detection)",
        "Redundancy of power + cooling (N+1 or better) + the maintenance/test records (generator load tests, UPS battery health)",
        "Environmental-alerting evidence (alarms on temp/humidity/power/leak)",
        "Capacity headroom (power + cooling vs current + projected load)"
      ],
      "system": [
        "DCIM / building-management system (BMS)",
        "UPS + generators + PDUs",
        "HVAC / CRAC units",
        "Environmental sensors (temp/humidity/leak)"
      ],
      "dataOwner": [
        "Facilities / Datacenter operations",
        "Critical-environment engineers",
        "Infrastructure"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Datacenter / Lab / Colocation (CoLo) controls."
      }
    },
    "badge": {
      "id": "dcr-02-badge",
      "name": "Datacenter / Lab / Colocation (CoLo) Auditor",
      "emoji": "🏢"
    },
    "wonder": {
      "name": "Environmental controls",
      "location": "Datacenter / Lab / Colocation (CoLo)",
      "era": "Present Day",
      "emoji": "🏢"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Environmental controls\" as a repeatable agentic workflow: pull the real evidence (The environmental-controls design + monitoring (power: UPS + generator + dual feed; cooling/HVAC redundancy; temperature/humidity monitoring; water/leak detection)) with read-only agents, run the test against policy, and issue a defensible opinion on the Datacenter / Lab / Colocation (CoLo) control.",
      "year": 2025,
      "overview": [
        "The \"Environmental controls\" sub-process is one of the controls an auditor must verify for Datacenter / Lab / Colocation (CoLo). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the environmental-controls design + monitoring (power: UPS + generator + dual feed; cooling/HVAC redundancy; temperature/humidity monitoring; water/leak detection), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DCIM / building-management system (BMS), UPS + generators + PDUs, HVAC / CRAC units — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `power design: UPS + generator + dual utility feed + N+1; cooling redundancy` — read-only, against the systems of record.",
        "The test itself is specific. Verify environmental controls keep the facility running. PASS: power (UPS + generator, dual feeds) and cooling are redundant (N+1+) with monitoring + alerting on temperature/humidity/power/leak; generators + UPS are load-tested on cadence; and there's capacity headroom. Exceptions: a single power feed or no generator, no cooling redundancy, no environmental monitoring/alerting, untested generators/UPS (fail when needed), and power/cooling at the capacity limit (no headroom). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_environmental_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DCIM / building-management system (BMS) and UPS + generators + PDUs (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_environmental_controls_mcp.py` to expose it to your agent — or `python 02_environmental_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Physical access and environmental failure",
        "when": "Recurring",
        "where": "Datacenters / labs / colocation",
        "impact": "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.",
        "body": [
          "The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.",
          "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Datacenter / Lab / Colocation (CoLo) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DCIM / building-management system (BMS) · UPS + generators + PDUs",
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
          "event": "OVHcloud Strasbourg fire — facility resilience as a continuity risk",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Datacenter cooling failures cause regional cloud outages in heatwaves"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Environmental controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "power design: UPS + generator + dual utility feed + N+1; cooling redundancy\ngenerator + UPS test records (load tests, battery health)\nenvironmental monitoring + alerting (temp / humidity / power / leak)\ncapacity headroom: power + cooling vs current + projected load"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The environmental-controls design + monitoring (power: UPS + generator + dual feed; cooling/HVAC redundancy; temperature/humidity monitoring; water/leak detection).",
        "The test: Verify environmental controls keep the facility running.",
        "Reconcile the systems of record (DCIM / building-management system (BMS), UPS + generators + PDUs, HVAC / CRAC units) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The data center has a single utility feed and no generator (only batteries), the CRAC units are non-redundant, and there's no leak detection — a single power or cooling failure takes everything down."
      ],
      "references": [
        {
          "title": "Uptime Institute Tier Standard",
          "url": "https://uptimeinstitute.com/tiers"
        },
        {
          "title": "ANSI/TIA-942",
          "url": "https://tiaonline.org/products-and-services/tia942certification/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_environmental_controls_mcp.py",
          "url": "/audit-code/datacenter/02_environmental_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Datacenter / Lab / Colocation (CoLo) evidence for \"Environmental controls\" (the environmental-controls design + monitoring (power: ups + generator + dual feed; cooling/hvac redundancy; temperature/humidity monitoring; water/leak detection)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Environmental controls\" control for Datacenter / Lab / Colocation (CoLo) at AcmeCorp. THE TEST: Verify environmental controls keep the facility running. PASS: power (UPS + generator, dual feeds) and cooling are redundant (N+1+) with monitoring + alerting on temperature/humidity/power/leak; generators + UPS are load-tested on cadence; and there's capacity headroom. Exceptions: a single power feed or no generator, no cooling redundancy, no environmental monitoring/alerting, untested generators/UPS (fail when needed), and power/cooling at the capacity limit (no headroom). The evidence — The environmental-controls design + monitoring (power: UPS + generator + dual feed; cooling/HVAC redundancy; temperature/humidity monitoring; water/leak detection) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DCIM / building-management system (BMS) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DCIM / building-management system (BMS) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DCIM / building-management system (BMS); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Datacenter / Lab / Colocation (CoLo): \"Environmental controls\" Audit Evidence\n\nThe test:\nVerify environmental controls keep the facility running. PASS: power (UPS + generator, dual feeds) and cooling are redundant (N+1+) with monitoring + alerting on temperature/humidity/power/leak; generators + UPS are load-tested on cadence; and there's capacity headroom. Exceptions: a single power feed or no generator, no cooling redundancy, no environmental monitoring/alerting, untested generators/UPS (fail when needed), and power/cooling at the capacity limit (no headroom).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- datacenter_inventory.json   (in-scope items — The environmental-controls design + monitoring (power: UPS + generator + dual feed; cooling/HVAC redundancy; temperature/humidity monitoring; water/leak detection))\n- datacenter_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Environmental controls\",\n  \"domain\": \"Datacenter / Lab / Colocation (CoLo)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dcr_",
        "/evidence/datacenter_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Facilities / Datacenter operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Environmental controls\" control must cover\n# fragment: environmental_controls_",
        "/evidence/datacenter_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "datacenter_inventory.json",
            "isDir": false
          },
          {
            "name": "datacenter_state.json",
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
          "value": "FLAG{dcr_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/datacenter_inventory.json",
          "value": "environmental_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/datacenter_state.json",
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
          "id": "dcr-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Environmental controls\" sub-process of Datacenter / Lab / Colocation (CoLo)?",
          "options": [
            "Deploy and operate the environmental controls control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the environmental controls control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for environmental controls against comparable organisations in the sector",
            "Obtain evidence that the environmental controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dcr-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Environmental controls\" matter to the broader Datacenter / Lab / Colocation (CoLo) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Datacenter / Lab / Colocation (CoLo)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Datacenter / Lab / Colocation (CoLo) estate",
            "It is a control other Datacenter / Lab / Colocation (CoLo) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Datacenter / Lab / Colocation (CoLo) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dcr-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Environmental controls\" control?",
          "options": [
            "A point-in-time screenshot of one system's environmental controls settings, captured during the walkthrough",
            "The The environmental-controls design + monitoring (power: UPS + generator + dual feed; cooling/HVAC redundancy; temperature/humidity monitoring; water/leak detection), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the environmental controls control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's environmental controls capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dcr-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Environmental controls\"?",
          "options": [
            "From DCIM / building-management system (BMS) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how environmental controls works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. DCIM / building-management system (BMS)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dcr-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Environmental controls\"?",
          "options": [
            "The external audit firm, since it is the party examining the environmental controls control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the environmental controls data is shared, so the accountability sits with no one in particular",
            "Facilities / Datacenter operations, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Facilities / Datacenter operations owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dcr-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Environmental controls\", which part stays with the human auditor?",
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
          "id": "dcr-02-q7",
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
          "id": "dcr-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Environmental controls\", which of these is a realistic reportable finding?",
          "options": [
            "The data center has a single utility feed and no generator (only batteries), the CRAC units are non-redundant, and there's no leak detection — a single power or cooling failure takes everything down.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The data center has a single utility feed and no generator (only batteries), the CRAC units are non-redundant, and there's no leak detection — a single power or cooling failure takes everything down. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dcr-02-q9",
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
          "id": "dcr-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Environmental controls\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind environmental controls, so there is no overlap",
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
    "epochId": "datacenter",
    "id": "dcr-03",
    "order": 3,
    "title": "Safety controls",
    "subtitle": "Agentic technical & privacy audit of the safety controls control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Safety controls\" control for Datacenter / Lab / Colocation (CoLo) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify life-safety + fire controls are in place + maintained. PASS: fire detection + suppression (clean-agent or pre-action, not just wet-pipe over equipment), alarms, and EPO exist + are inspected/tested on cadence; the facility meets fire/electrical/occupancy codes with current certificates; emergency procedures + drills are documented; and hazard controls (arc-flash, lab hazards) are managed. Exceptions: inadequate/uninspected fire suppression, expired safety certificates, no emergency procedures/drills, and unmanaged electrical/lab safety hazards.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Datacenter / Lab / Colocation (CoLo) systems of record (Fire detection / suppression + alarm systems; Safety inspection / certification records; Emergency procedures + drill records) as tools — e.g. `fire detection + suppression (clean-agent / pre-action) + EPO + alarm `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The life-safety + fire-suppression systems (detection, suppression — clean-agent / pre-action, EPO, alarms) + their inspection/test records",
        "Compliance with safety codes (fire, electrical, occupancy) + current inspection certificates",
        "Emergency procedures (evacuation, EPO use, first-aid) + drills",
        "Hazard controls (electrical/arc-flash safety, lab-specific hazards)"
      ],
      "system": [
        "Fire detection / suppression + alarm systems",
        "Safety inspection / certification records",
        "Emergency procedures + drill records"
      ],
      "dataOwner": [
        "Facilities / Safety (EHS)",
        "Datacenter operations",
        "Fire / safety authorities (inspections)"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Datacenter / Lab / Colocation (CoLo) controls."
      }
    },
    "badge": {
      "id": "dcr-03-badge",
      "name": "Datacenter / Lab / Colocation (CoLo) Auditor",
      "emoji": "🏢"
    },
    "wonder": {
      "name": "Safety controls",
      "location": "Datacenter / Lab / Colocation (CoLo)",
      "era": "Present Day",
      "emoji": "🏢"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Safety controls\" as a repeatable agentic workflow: pull the real evidence (The life-safety + fire-suppression systems (detection, suppression — clean-agent / pre-action, EPO, alarms) + their inspection/test records) with read-only agents, run the test against policy, and issue a defensible opinion on the Datacenter / Lab / Colocation (CoLo) control.",
      "year": 2025,
      "overview": [
        "The \"Safety controls\" sub-process is one of the controls an auditor must verify for Datacenter / Lab / Colocation (CoLo). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the life-safety + fire-suppression systems (detection, suppression — clean-agent / pre-action, EPO, alarms) + their inspection/test records, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Fire detection / suppression + alarm systems, Safety inspection / certification records, Emergency procedures + drill records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `fire detection + suppression (clean-agent / pre-action) + EPO + alarm test/inspe` — read-only, against the systems of record.",
        "The test itself is specific. Verify life-safety + fire controls are in place + maintained. PASS: fire detection + suppression (clean-agent or pre-action, not just wet-pipe over equipment), alarms, and EPO exist + are inspected/tested on cadence; the facility meets fire/electrical/occupancy codes with current certificates; emergency procedures + drills are documented; and hazard controls (arc-flash, lab hazards) are managed. Exceptions: inadequate/uninspected fire suppression, expired safety certificates, no emergency procedures/drills, and unmanaged electrical/lab safety hazards. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_safety_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Fire detection / suppression + alarm systems and Safety inspection / certification records (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_safety_controls_mcp.py` to expose it to your agent — or `python 03_safety_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Physical access and environmental failure",
        "when": "Recurring",
        "where": "Datacenters / labs / colocation",
        "impact": "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.",
        "body": [
          "The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.",
          "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Datacenter / Lab / Colocation (CoLo) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Fire detection / suppression + alarm systems · Safety inspection / certification records",
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
          "event": "OVHcloud Strasbourg fire — facility resilience as a continuity risk",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Datacenter cooling failures cause regional cloud outages in heatwaves"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Safety controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "fire detection + suppression (clean-agent / pre-action) + EPO + alarm test/inspection records\nsafety-code compliance + current inspection certificates (fire / electrical / occupancy)\nemergency procedures (evacuation / EPO / first-aid) + drill records\nhazard controls (arc-flash, lab-specific)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The life-safety + fire-suppression systems (detection, suppression — clean-agent / pre-action, EPO, alarms) + their inspection/test records.",
        "The test: Verify life-safety + fire controls are in place + maintained.",
        "Reconcile the systems of record (Fire detection / suppression + alarm systems, Safety inspection / certification records, Emergency procedures + drill records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The data center relies on a wet-pipe sprinkler over live equipment (no clean-agent), the fire-suppression inspection lapsed two years ago, and no evacuation drill has ever been run."
      ],
      "references": [
        {
          "title": "NFPA 75 / 76",
          "url": "https://www.nfpa.org/"
        },
        {
          "title": "ISO/IEC 27001 A.7",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_safety_controls_mcp.py",
          "url": "/audit-code/datacenter/03_safety_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Datacenter / Lab / Colocation (CoLo) evidence for \"Safety controls\" (the life-safety + fire-suppression systems (detection, suppression — clean-agent / pre-action, epo, alarms) + their inspection/test records), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Safety controls\" control for Datacenter / Lab / Colocation (CoLo) at AcmeCorp. THE TEST: Verify life-safety + fire controls are in place + maintained. PASS: fire detection + suppression (clean-agent or pre-action, not just wet-pipe over equipment), alarms, and EPO exist + are inspected/tested on cadence; the facility meets fire/electrical/occupancy codes with current certificates; emergency procedures + drills are documented; and hazard controls (arc-flash, lab hazards) are managed. Exceptions: inadequate/uninspected fire suppression, expired safety certificates, no emergency procedures/drills, and unmanaged electrical/lab safety hazards. The evidence — The life-safety + fire-suppression systems (detection, suppression — clean-agent / pre-action, EPO, alarms) + their inspection/test records — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Fire detection / suppression + alarm systems APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Fire detection / suppression + alarm systems gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Fire detection / suppression + alarm systems; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Datacenter / Lab / Colocation (CoLo): \"Safety controls\" Audit Evidence\n\nThe test:\nVerify life-safety + fire controls are in place + maintained. PASS: fire detection + suppression (clean-agent or pre-action, not just wet-pipe over equipment), alarms, and EPO exist + are inspected/tested on cadence; the facility meets fire/electrical/occupancy codes with current certificates; emergency procedures + drills are documented; and hazard controls (arc-flash, lab hazards) are managed. Exceptions: inadequate/uninspected fire suppression, expired safety certificates, no emergency procedures/drills, and unmanaged electrical/lab safety hazards.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- datacenter_inventory.json   (in-scope items — The life-safety + fire-suppression systems (detection, suppression — clean-agent / pre-action, EPO, alarms) + their inspection/test records)\n- datacenter_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Safety controls\",\n  \"domain\": \"Datacenter / Lab / Colocation (CoLo)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dcr_",
        "/evidence/datacenter_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Facilities / Datacenter operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Safety controls\" control must cover\n# fragment: safety_controls_",
        "/evidence/datacenter_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "datacenter_inventory.json",
            "isDir": false
          },
          {
            "name": "datacenter_state.json",
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
          "value": "FLAG{dcr_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/datacenter_inventory.json",
          "value": "safety_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/datacenter_state.json",
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
          "id": "dcr-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Safety controls\" sub-process of Datacenter / Lab / Colocation (CoLo)?",
          "options": [
            "Deploy and operate the safety controls control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the safety controls control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for safety controls against comparable organisations in the sector",
            "Obtain evidence that the safety controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dcr-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Safety controls\" matter to the broader Datacenter / Lab / Colocation (CoLo) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Datacenter / Lab / Colocation (CoLo)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Datacenter / Lab / Colocation (CoLo) estate",
            "It is a control other Datacenter / Lab / Colocation (CoLo) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Datacenter / Lab / Colocation (CoLo) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dcr-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Safety controls\" control?",
          "options": [
            "A point-in-time screenshot of one system's safety controls settings, captured during the walkthrough",
            "The The life-safety + fire-suppression systems (detection, suppression — clean-agent / pre-action, EPO, alarms) + their inspection/test records, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the safety controls control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's safety controls capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dcr-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Safety controls\"?",
          "options": [
            "From Fire detection / suppression + alarm systems and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how safety controls works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Fire detection / suppression + alarm systems) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dcr-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Safety controls\"?",
          "options": [
            "The external audit firm, since it is the party examining the safety controls control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the safety controls data is shared, so the accountability sits with no one in particular",
            "Facilities / Safety (EHS), with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Facilities / Safety (EHS) owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dcr-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Safety controls\", which part stays with the human auditor?",
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
          "id": "dcr-03-q7",
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
          "id": "dcr-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Safety controls\", which of these is a realistic reportable finding?",
          "options": [
            "The data center relies on a wet-pipe sprinkler over live equipment (no clean-agent), the fire-suppression inspection lapsed two years ago, and no evacuation drill has ever been run.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The data center relies on a wet-pipe sprinkler over live equipment (no clean-agent), the fire-suppression inspection lapsed two years ago, and no evacuation drill has ever been run. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dcr-03-q9",
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
          "id": "dcr-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Safety controls\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind safety controls, so there is no overlap",
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
    "epochId": "datacenter",
    "id": "dcr-04",
    "order": 4,
    "title": "Asset inventory mgmt",
    "subtitle": "Agentic technical & privacy audit of the asset inventory mgmt control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Asset inventory mgmt\" control for Datacenter / Lab / Colocation (CoLo) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify physical assets are inventoried + tracked. PASS: a physical-asset inventory maps every device to its location/owner/status and reconciles to a physical audit (the CMDB matches the racks); equipment entry/exit is logged; and decommissioned assets are securely removed + media-sanitised. Exceptions: an inaccurate inventory (ghost/unknown devices in racks), no physical reconciliation, untracked equipment movement, and decommissioned data-bearing assets removed with no media sanitisation.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Datacenter / Lab / Colocation (CoLo) systems of record (ITAM / DCIM (physical inventory); Asset tagging; Equipment in/out logging) as tools — e.g. `physical-asset inventory per DC/cage: device, location, owner, status`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The physical-asset inventory (servers, network, storage, media) per DC/cage with location, owner, status",
        "Reconciliation of the inventory vs a physical walk/audit (does the CMDB match the racks?)",
        "Asset tagging + tracking (entry/exit logging of equipment)",
        "Decommissioned-asset handling (secure removal + media sanitisation)"
      ],
      "system": [
        "ITAM / DCIM (physical inventory)",
        "Asset tagging",
        "Equipment in/out logging",
        "Media-sanitisation process"
      ],
      "dataOwner": [
        "Datacenter operations / IT asset management",
        "Security",
        "Facilities"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Datacenter / Lab / Colocation (CoLo) controls."
      }
    },
    "badge": {
      "id": "dcr-04-badge",
      "name": "Datacenter / Lab / Colocation (CoLo) Auditor",
      "emoji": "🏢"
    },
    "wonder": {
      "name": "Asset inventory mgmt",
      "location": "Datacenter / Lab / Colocation (CoLo)",
      "era": "Present Day",
      "emoji": "🏢"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Asset inventory mgmt\" as a repeatable agentic workflow: pull the real evidence (The physical-asset inventory (servers, network, storage, media) per DC/cage with location, owner, status) with read-only agents, run the test against policy, and issue a defensible opinion on the Datacenter / Lab / Colocation (CoLo) control.",
      "year": 2025,
      "overview": [
        "The \"Asset inventory mgmt\" sub-process is one of the controls an auditor must verify for Datacenter / Lab / Colocation (CoLo). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the physical-asset inventory (servers, network, storage, media) per DC/cage with location, owner, status, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITAM / DCIM (physical inventory), Asset tagging, Equipment in/out logging — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `physical-asset inventory per DC/cage: device, location, owner, status` — read-only, against the systems of record.",
        "The test itself is specific. Verify physical assets are inventoried + tracked. PASS: a physical-asset inventory maps every device to its location/owner/status and reconciles to a physical audit (the CMDB matches the racks); equipment entry/exit is logged; and decommissioned assets are securely removed + media-sanitised. Exceptions: an inaccurate inventory (ghost/unknown devices in racks), no physical reconciliation, untracked equipment movement, and decommissioned data-bearing assets removed with no media sanitisation. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_asset_inventory_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITAM / DCIM (physical inventory) and Asset tagging (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_asset_inventory_mgmt_mcp.py` to expose it to your agent — or `python 04_asset_inventory_mgmt_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Physical access and environmental failure",
        "when": "Recurring",
        "where": "Datacenters / labs / colocation",
        "impact": "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.",
        "body": [
          "The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.",
          "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Datacenter / Lab / Colocation (CoLo) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITAM / DCIM (physical inventory) · Asset tagging",
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
          "event": "OVHcloud Strasbourg fire — facility resilience as a continuity risk",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Datacenter cooling failures cause regional cloud outages in heatwaves"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Asset inventory mgmt\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "physical-asset inventory per DC/cage: device, location, owner, status\nreconcile the inventory vs a physical walk (does the CMDB match the racks?)\nequipment entry/exit logging (tracked movement)\ndecommission: secure removal + media sanitisation (NIST 800-88) records"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The physical-asset inventory (servers, network, storage, media) per DC/cage with location, owner, status.",
        "The test: Verify physical assets are inventoried + tracked.",
        "Reconcile the systems of record (ITAM / DCIM (physical inventory), Asset tagging, Equipment in/out logging) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A physical walk found a dozen powered, networked servers in the racks that aren't in any inventory (unknown, unowned), and decommissioned drives were sent to recycling with no sanitisation records."
      ],
      "references": [
        {
          "title": "NIST SP 800-88 Media Sanitisation",
          "url": "https://csrc.nist.gov/pubs/sp/800/88/r1/final"
        },
        {
          "title": "ISO/IEC 27001 A.5.9 / A.7",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_asset_inventory_mgmt_mcp.py",
          "url": "/audit-code/datacenter/04_asset_inventory_mgmt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Datacenter / Lab / Colocation (CoLo) evidence for \"Asset inventory mgmt\" (the physical-asset inventory (servers, network, storage, media) per dc/cage with location, owner, status), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Asset inventory mgmt\" control for Datacenter / Lab / Colocation (CoLo) at AcmeCorp. THE TEST: Verify physical assets are inventoried + tracked. PASS: a physical-asset inventory maps every device to its location/owner/status and reconciles to a physical audit (the CMDB matches the racks); equipment entry/exit is logged; and decommissioned assets are securely removed + media-sanitised. Exceptions: an inaccurate inventory (ghost/unknown devices in racks), no physical reconciliation, untracked equipment movement, and decommissioned data-bearing assets removed with no media sanitisation. The evidence — The physical-asset inventory (servers, network, storage, media) per DC/cage with location, owner, status — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITAM / DCIM (physical inventory) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITAM / DCIM (physical inventory) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITAM / DCIM (physical inventory); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Datacenter / Lab / Colocation (CoLo): \"Asset inventory mgmt\" Audit Evidence\n\nThe test:\nVerify physical assets are inventoried + tracked. PASS: a physical-asset inventory maps every device to its location/owner/status and reconciles to a physical audit (the CMDB matches the racks); equipment entry/exit is logged; and decommissioned assets are securely removed + media-sanitised. Exceptions: an inaccurate inventory (ghost/unknown devices in racks), no physical reconciliation, untracked equipment movement, and decommissioned data-bearing assets removed with no media sanitisation.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- datacenter_inventory.json   (in-scope items — The physical-asset inventory (servers, network, storage, media) per DC/cage with location, owner, status)\n- datacenter_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Asset inventory mgmt\",\n  \"domain\": \"Datacenter / Lab / Colocation (CoLo)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dcr_",
        "/evidence/datacenter_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Facilities / Datacenter operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Asset inventory mgmt\" control must cover\n# fragment: asset_inventory_mgmt_",
        "/evidence/datacenter_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "datacenter_inventory.json",
            "isDir": false
          },
          {
            "name": "datacenter_state.json",
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
          "value": "FLAG{dcr_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/datacenter_inventory.json",
          "value": "asset_inventory_mgmt_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/datacenter_state.json",
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
          "id": "dcr-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Asset inventory mgmt\" sub-process of Datacenter / Lab / Colocation (CoLo)?",
          "options": [
            "Deploy and operate the asset inventory mgmt control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the asset inventory mgmt control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for asset inventory mgmt against comparable organisations in the sector",
            "Obtain evidence that the asset inventory mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dcr-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Asset inventory mgmt\" matter to the broader Datacenter / Lab / Colocation (CoLo) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Datacenter / Lab / Colocation (CoLo)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Datacenter / Lab / Colocation (CoLo) estate",
            "It is a control other Datacenter / Lab / Colocation (CoLo) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Datacenter / Lab / Colocation (CoLo) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dcr-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Asset inventory mgmt\" control?",
          "options": [
            "A point-in-time screenshot of one system's asset inventory mgmt settings, captured during the walkthrough",
            "The The physical-asset inventory (servers, network, storage, media) per DC/cage with location, owner, status, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the asset inventory mgmt control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's asset inventory mgmt capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dcr-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Asset inventory mgmt\"?",
          "options": [
            "From ITAM / DCIM (physical inventory) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how asset inventory mgmt works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITAM / DCIM (physical inventory)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dcr-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Asset inventory mgmt\"?",
          "options": [
            "The external audit firm, since it is the party examining the asset inventory mgmt control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the asset inventory mgmt data is shared, so the accountability sits with no one in particular",
            "Datacenter operations / IT asset management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Datacenter operations / IT asset management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dcr-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Asset inventory mgmt\", which part stays with the human auditor?",
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
          "id": "dcr-04-q7",
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
          "id": "dcr-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Asset inventory mgmt\", which of these is a realistic reportable finding?",
          "options": [
            "A physical walk found a dozen powered, networked servers in the racks that aren't in any inventory (unknown, unowned), and decommissioned drives were sent to recycling with no sanitisation records.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A physical walk found a dozen powered, networked servers in the racks that aren't in any inventory (unknown, unowned), and decommissioned drives were sent to recycling with no sanitisation records. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dcr-04-q9",
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
          "id": "dcr-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Asset inventory mgmt\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind asset inventory mgmt, so there is no overlap",
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
    "epochId": "datacenter",
    "id": "dcr-05",
    "order": 5,
    "title": "Maintenance and vendor mgmt",
    "subtitle": "Agentic technical & privacy audit of the maintenance and vendor mgmt control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Maintenance and vendor mgmt\" control for Datacenter / Lab / Colocation (CoLo) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify facility maintenance + vendor access are controlled. PASS: critical infrastructure (UPS/gen/HVAC/fire) gets preventive maintenance on cadence with records; maintenance vendors/contractors are vetted, escorted, time-bound, and logged; infra changes go through change control; and vendor support SLAs are in place. Exceptions: lapsed preventive maintenance (equipment fails when needed), unescorted/unvetted vendor access, physical-infra changes outside change control, and no support SLA for critical infra.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Datacenter / Lab / Colocation (CoLo) systems of record (CMMS / maintenance records; Vendor-access controls (PACS + escort); Change management) as tools — e.g. `preventive-maintenance schedule + records for UPS/gen/HVAC/fire (done `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The maintenance schedule + records for critical infrastructure (UPS, generators, HVAC, fire systems) — preventive maintenance done on cadence",
        "The vendor/contractor physical-access controls (escort, vetting, time-bound access, logging)",
        "Maintenance change control (physical-infra changes go through change management)",
        "Vendor SLAs for critical-infra support + response"
      ],
      "system": [
        "CMMS / maintenance records",
        "Vendor-access controls (PACS + escort)",
        "Change management",
        "Vendor contracts / SLAs"
      ],
      "dataOwner": [
        "Facilities / Datacenter operations",
        "Physical security (vendor access)",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Datacenter / Lab / Colocation (CoLo) controls."
      }
    },
    "badge": {
      "id": "dcr-05-badge",
      "name": "Datacenter / Lab / Colocation (CoLo) Auditor",
      "emoji": "🏢"
    },
    "wonder": {
      "name": "Maintenance and vendor mgmt",
      "location": "Datacenter / Lab / Colocation (CoLo)",
      "era": "Present Day",
      "emoji": "🏢"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Maintenance and vendor mgmt\" as a repeatable agentic workflow: pull the real evidence (The maintenance schedule + records for critical infrastructure (UPS, generators, HVAC, fire systems) — preventive maintenance done on cadence) with read-only agents, run the test against policy, and issue a defensible opinion on the Datacenter / Lab / Colocation (CoLo) control.",
      "year": 2025,
      "overview": [
        "The \"Maintenance and vendor mgmt\" sub-process is one of the controls an auditor must verify for Datacenter / Lab / Colocation (CoLo). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the maintenance schedule + records for critical infrastructure (UPS, generators, HVAC, fire systems) — preventive maintenance done on cadence, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here CMMS / maintenance records, Vendor-access controls (PACS + escort), Change management — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `preventive-maintenance schedule + records for UPS/gen/HVAC/fire (done on cadence` — read-only, against the systems of record.",
        "The test itself is specific. Verify facility maintenance + vendor access are controlled. PASS: critical infrastructure (UPS/gen/HVAC/fire) gets preventive maintenance on cadence with records; maintenance vendors/contractors are vetted, escorted, time-bound, and logged; infra changes go through change control; and vendor support SLAs are in place. Exceptions: lapsed preventive maintenance (equipment fails when needed), unescorted/unvetted vendor access, physical-infra changes outside change control, and no support SLA for critical infra. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_maintenance_and_vendor_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from CMMS / maintenance records and Vendor-access controls (PACS + escort) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_maintenance_and_vendor_mgmt_mcp.py` to expose it to your agent — or `python 05_maintenance_and_vendor_mgmt_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Physical access and environmental failure",
        "when": "Recurring",
        "where": "Datacenters / labs / colocation",
        "impact": "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.",
        "body": [
          "The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.",
          "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Datacenter / Lab / Colocation (CoLo) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull CMMS / maintenance records · Vendor-access controls (PACS + escort)",
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
          "event": "OVHcloud Strasbourg fire — facility resilience as a continuity risk",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Datacenter cooling failures cause regional cloud outages in heatwaves"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Maintenance and vendor mgmt\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "preventive-maintenance schedule + records for UPS/gen/HVAC/fire (done on cadence?)\nvendor/contractor access: vetted, escorted, time-bound, logged?\nare physical-infra changes under change control?\nvendor support SLAs for critical infrastructure"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The maintenance schedule + records for critical infrastructure (UPS, generators, HVAC, fire systems) — preventive maintenance done on cadence.",
        "The test: Verify facility maintenance + vendor access are controlled.",
        "Reconcile the systems of record (CMMS / maintenance records, Vendor-access controls (PACS + escort), Change management) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Generator and UPS preventive maintenance lapsed (the generator failed to start in the last power test), and HVAC contractors badge in with unescorted, non-time-bound access to the equipment floor."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 MA (Maintenance) / PE",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Uptime Institute",
          "url": "https://uptimeinstitute.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_maintenance_and_vendor_mgmt_mcp.py",
          "url": "/audit-code/datacenter/05_maintenance_and_vendor_mgmt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Datacenter / Lab / Colocation (CoLo) evidence for \"Maintenance and vendor mgmt\" (the maintenance schedule + records for critical infrastructure (ups, generators, hvac, fire systems) — preventive maintenance done on cadence), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Maintenance and vendor mgmt\" control for Datacenter / Lab / Colocation (CoLo) at AcmeCorp. THE TEST: Verify facility maintenance + vendor access are controlled. PASS: critical infrastructure (UPS/gen/HVAC/fire) gets preventive maintenance on cadence with records; maintenance vendors/contractors are vetted, escorted, time-bound, and logged; infra changes go through change control; and vendor support SLAs are in place. Exceptions: lapsed preventive maintenance (equipment fails when needed), unescorted/unvetted vendor access, physical-infra changes outside change control, and no support SLA for critical infra. The evidence — The maintenance schedule + records for critical infrastructure (UPS, generators, HVAC, fire systems) — preventive maintenance done on cadence — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live CMMS / maintenance records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. CMMS / maintenance records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from CMMS / maintenance records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Datacenter / Lab / Colocation (CoLo): \"Maintenance and vendor mgmt\" Audit Evidence\n\nThe test:\nVerify facility maintenance + vendor access are controlled. PASS: critical infrastructure (UPS/gen/HVAC/fire) gets preventive maintenance on cadence with records; maintenance vendors/contractors are vetted, escorted, time-bound, and logged; infra changes go through change control; and vendor support SLAs are in place. Exceptions: lapsed preventive maintenance (equipment fails when needed), unescorted/unvetted vendor access, physical-infra changes outside change control, and no support SLA for critical infra.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- datacenter_inventory.json   (in-scope items — The maintenance schedule + records for critical infrastructure (UPS, generators, HVAC, fire systems) — preventive maintenance done on cadence)\n- datacenter_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Maintenance and vendor mgmt\",\n  \"domain\": \"Datacenter / Lab / Colocation (CoLo)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dcr_",
        "/evidence/datacenter_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Facilities / Datacenter operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Maintenance and vendor mgmt\" control must cover\n# fragment: maintenance_vendor_mgmt_",
        "/evidence/datacenter_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "datacenter_inventory.json",
            "isDir": false
          },
          {
            "name": "datacenter_state.json",
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
          "value": "FLAG{dcr_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/datacenter_inventory.json",
          "value": "maintenance_vendor_mgmt_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/datacenter_state.json",
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
          "id": "dcr-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Maintenance and vendor mgmt\" sub-process of Datacenter / Lab / Colocation (CoLo)?",
          "options": [
            "Deploy and operate the maintenance and vendor mgmt control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the maintenance and vendor mgmt control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for maintenance and vendor mgmt against comparable organisations in the sector",
            "Obtain evidence that the maintenance and vendor mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dcr-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Maintenance and vendor mgmt\" matter to the broader Datacenter / Lab / Colocation (CoLo) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Datacenter / Lab / Colocation (CoLo)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Datacenter / Lab / Colocation (CoLo) estate",
            "It is a control other Datacenter / Lab / Colocation (CoLo) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Datacenter / Lab / Colocation (CoLo) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dcr-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Maintenance and vendor mgmt\" control?",
          "options": [
            "A point-in-time screenshot of one system's maintenance and vendor mgmt settings, captured during the walkthrough",
            "The The maintenance schedule + records for critical infrastructure (UPS, generators, HVAC, fire systems) — preventive maintenance done on cadence, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the maintenance and vendor mgmt control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's maintenance and vendor mgmt capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dcr-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Maintenance and vendor mgmt\"?",
          "options": [
            "From CMMS / maintenance records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how maintenance and vendor mgmt works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. CMMS / maintenance records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dcr-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Maintenance and vendor mgmt\"?",
          "options": [
            "The external audit firm, since it is the party examining the maintenance and vendor mgmt control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the maintenance and vendor mgmt data is shared, so the accountability sits with no one in particular",
            "Facilities / Datacenter operations, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Facilities / Datacenter operations owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dcr-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Maintenance and vendor mgmt\", which part stays with the human auditor?",
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
          "id": "dcr-05-q7",
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
          "id": "dcr-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Maintenance and vendor mgmt\", which of these is a realistic reportable finding?",
          "options": [
            "Generator and UPS preventive maintenance lapsed (the generator failed to start in the last power test), and HVAC contractors badge in with unescorted, non-time-bound access to the equipment floor.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Generator and UPS preventive maintenance lapsed (the generator failed to start in the last power test), and HVAC contractors badge in with unescorted, non-time-bound access to the equipment floor. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dcr-05-q9",
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
          "id": "dcr-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Maintenance and vendor mgmt\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind maintenance and vendor mgmt, so there is no overlap",
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
    "epochId": "datacenter",
    "id": "dcr-06",
    "order": 6,
    "title": "Business continuity planning",
    "subtitle": "Agentic technical & privacy audit of the business continuity planning control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Business continuity planning\" control for Datacenter / Lab / Colocation (CoLo) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org can survive losing the facility. PASS: a facility-loss scenario (fire/flood/power/denied-access) is in the BCP/DR with a recovery strategy; critical workloads have geographic redundancy or an alternate site; the scenario is tested; and single-facility concentration risk is assessed + mitigated. Exceptions: no facility-loss plan, all critical workloads in one facility with no alternate (single-facility SPOF), the scenario never tested, and unmitigated concentration in one DC/cage.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Datacenter / Lab / Colocation (CoLo) systems of record (The facility BCP/DR plan; Alternate site / geographic redundancy; The BIA (facility dependency)) as tools — e.g. `facility-loss scenario in the BCP/DR (fire / flood / power / denied-ac`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The facility-level BCP/DR (what happens if the DC/cage is lost — fire, flood, power, denied access) + the recovery strategy",
        "Geographic redundancy / alternate-site strategy for the facility's workloads",
        "The facility-loss scenario in the org's BIA/DR plan + its test",
        "Concentration risk (how much depends on a single facility)"
      ],
      "system": [
        "The facility BCP/DR plan",
        "Alternate site / geographic redundancy",
        "The BIA (facility dependency)"
      ],
      "dataOwner": [
        "Business continuity / DR",
        "Datacenter operations",
        "Infrastructure"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Datacenter / Lab / Colocation (CoLo) controls."
      }
    },
    "badge": {
      "id": "dcr-06-badge",
      "name": "Datacenter / Lab / Colocation (CoLo) Auditor",
      "emoji": "🏢"
    },
    "wonder": {
      "name": "Business continuity planning",
      "location": "Datacenter / Lab / Colocation (CoLo)",
      "era": "Present Day",
      "emoji": "🏢"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Business continuity planning\" as a repeatable agentic workflow: pull the real evidence (The facility-level BCP/DR (what happens if the DC/cage is lost — fire, flood, power, denied access) + the recovery strategy) with read-only agents, run the test against policy, and issue a defensible opinion on the Datacenter / Lab / Colocation (CoLo) control.",
      "year": 2025,
      "overview": [
        "The \"Business continuity planning\" sub-process is one of the controls an auditor must verify for Datacenter / Lab / Colocation (CoLo). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the facility-level BCP/DR (what happens if the DC/cage is lost — fire, flood, power, denied access) + the recovery strategy, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The facility BCP/DR plan, Alternate site / geographic redundancy, The BIA (facility dependency) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `facility-loss scenario in the BCP/DR (fire / flood / power / denied-access) + re` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org can survive losing the facility. PASS: a facility-loss scenario (fire/flood/power/denied-access) is in the BCP/DR with a recovery strategy; critical workloads have geographic redundancy or an alternate site; the scenario is tested; and single-facility concentration risk is assessed + mitigated. Exceptions: no facility-loss plan, all critical workloads in one facility with no alternate (single-facility SPOF), the scenario never tested, and unmitigated concentration in one DC/cage. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_business_continuity_planning_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The facility BCP/DR plan and Alternate site / geographic redundancy (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_business_continuity_planning_mcp.py` to expose it to your agent — or `python 06_business_continuity_planning_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Physical access and environmental failure",
        "when": "Recurring",
        "where": "Datacenters / labs / colocation",
        "impact": "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.",
        "body": [
          "The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.",
          "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Datacenter / Lab / Colocation (CoLo) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull The facility BCP/DR plan · Alternate site / geographic redundancy",
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
          "event": "OVHcloud Strasbourg fire — facility resilience as a continuity risk",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Datacenter cooling failures cause regional cloud outages in heatwaves"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Business continuity planning\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "facility-loss scenario in the BCP/DR (fire / flood / power / denied-access) + recovery strategy\ngeographic redundancy / alternate-site for the facility's critical workloads\nis the facility-loss scenario tested?\nconcentration risk: how much depends on a single facility?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The facility-level BCP/DR (what happens if the DC/cage is lost — fire, flood, power, denied access) + the recovery strategy.",
        "The test: Verify the org can survive losing the facility.",
        "Reconcile the systems of record (The facility BCP/DR plan, Alternate site / geographic redundancy, The BIA (facility dependency)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Every critical workload runs in one colocation cage with no alternate site or geographic redundancy, and the BCP has no facility-loss scenario — a fire or extended power loss at that one site would halt the business indefinitely."
      ],
      "references": [
        {
          "title": "ISO 22301",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_business_continuity_planning_mcp.py",
          "url": "/audit-code/datacenter/06_business_continuity_planning_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Datacenter / Lab / Colocation (CoLo) evidence for \"Business continuity planning\" (the facility-level bcp/dr (what happens if the dc/cage is lost — fire, flood, power, denied access) + the recovery strategy), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Business continuity planning\" control for Datacenter / Lab / Colocation (CoLo) at AcmeCorp. THE TEST: Verify the org can survive losing the facility. PASS: a facility-loss scenario (fire/flood/power/denied-access) is in the BCP/DR with a recovery strategy; critical workloads have geographic redundancy or an alternate site; the scenario is tested; and single-facility concentration risk is assessed + mitigated. Exceptions: no facility-loss plan, all critical workloads in one facility with no alternate (single-facility SPOF), the scenario never tested, and unmitigated concentration in one DC/cage. The evidence — The facility-level BCP/DR (what happens if the DC/cage is lost — fire, flood, power, denied access) + the recovery strategy — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The facility BCP/DR plan APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The facility BCP/DR plan gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The facility BCP/DR plan; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Datacenter / Lab / Colocation (CoLo): \"Business continuity planning\" Audit Evidence\n\nThe test:\nVerify the org can survive losing the facility. PASS: a facility-loss scenario (fire/flood/power/denied-access) is in the BCP/DR with a recovery strategy; critical workloads have geographic redundancy or an alternate site; the scenario is tested; and single-facility concentration risk is assessed + mitigated. Exceptions: no facility-loss plan, all critical workloads in one facility with no alternate (single-facility SPOF), the scenario never tested, and unmitigated concentration in one DC/cage.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- datacenter_inventory.json   (in-scope items — The facility-level BCP/DR (what happens if the DC/cage is lost — fire, flood, power, denied access) + the recovery strategy)\n- datacenter_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Business continuity planning\",\n  \"domain\": \"Datacenter / Lab / Colocation (CoLo)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dcr_",
        "/evidence/datacenter_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Facilities / Datacenter operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Business continuity planning\" control must cover\n# fragment: business_continuity_planning_",
        "/evidence/datacenter_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "datacenter_inventory.json",
            "isDir": false
          },
          {
            "name": "datacenter_state.json",
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
          "value": "FLAG{dcr_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/datacenter_inventory.json",
          "value": "business_continuity_planning_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/datacenter_state.json",
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
          "id": "dcr-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Business continuity planning\" sub-process of Datacenter / Lab / Colocation (CoLo)?",
          "options": [
            "Deploy and operate the business continuity planning control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the business continuity planning control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for business continuity planning against comparable organisations in the sector",
            "Obtain evidence that the business continuity planning control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dcr-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Business continuity planning\" matter to the broader Datacenter / Lab / Colocation (CoLo) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Datacenter / Lab / Colocation (CoLo)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Datacenter / Lab / Colocation (CoLo) estate",
            "It is a control other Datacenter / Lab / Colocation (CoLo) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Datacenter / Lab / Colocation (CoLo) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dcr-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Business continuity planning\" control?",
          "options": [
            "A point-in-time screenshot of one system's business continuity planning settings, captured during the walkthrough",
            "The The facility-level BCP/DR (what happens if the DC/cage is lost — fire, flood, power, denied access) + the recovery strategy, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the business continuity planning control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's business continuity planning capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dcr-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Business continuity planning\"?",
          "options": [
            "From The facility BCP/DR plan and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how business continuity planning works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The facility BCP/DR plan) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dcr-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Business continuity planning\"?",
          "options": [
            "The external audit firm, since it is the party examining the business continuity planning control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the business continuity planning data is shared, so the accountability sits with no one in particular",
            "Business continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dcr-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Business continuity planning\", which part stays with the human auditor?",
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
          "id": "dcr-06-q7",
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
          "id": "dcr-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Business continuity planning\", which of these is a realistic reportable finding?",
          "options": [
            "Every critical workload runs in one colocation cage with no alternate site or geographic redundancy, and the BCP has no facility-loss scenario — a fire or extended power loss at that one site would halt the business indefinitely.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Every critical workload runs in one colocation cage with no alternate site or geographic redundancy, and the BCP has no facility-loss scenario — a fire or extended power loss at that one site would halt the business indefinitely. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dcr-06-q9",
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
          "id": "dcr-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Business continuity planning\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind business continuity planning, so there is no overlap",
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
