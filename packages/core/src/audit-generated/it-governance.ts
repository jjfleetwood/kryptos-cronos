import type { EpochConfig, StageConfig } from "../types";

export const itGovernanceEpoch: EpochConfig = {
  "id": "it-governance",
  "name": "Information Technology (IT) Governance",
  "subtitle": "Agentic technical & privacy audit — Information Technology (IT) Governance",
  "description": "Audit Information Technology (IT) Governance end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "📋",
  "color": "Sky",
  "unlocked": true
};

export const itGovernanceStages: StageConfig[] = [
  {
    "epochId": "it-governance",
    "id": "gov-01",
    "order": 1,
    "title": "Policy and standard lifecycle",
    "subtitle": "Agentic technical & privacy audit of the policy and standard lifecycle control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Policy and standard lifecycle\" control for Information Technology (IT) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Policy and standard lifecycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Information Technology (IT) Governance systems of record (GRC platform; Policy + standard repository; Risk register) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the policy and standard lifecycle control (from GRC platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GRC platform",
        "Policy + standard repository",
        "Risk register",
        "Metrics / KRI dashboard"
      ],
      "dataOwner": [
        "CISO / IT risk",
        "Policy owners",
        "Internal audit",
        "Executive / board"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Information Technology (IT) Governance controls."
      }
    },
    "badge": {
      "id": "gov-01-badge",
      "name": "Information Technology (IT) Governance Auditor",
      "emoji": "📋"
    },
    "wonder": {
      "name": "Policy and standard lifecycle",
      "location": "Information Technology (IT) Governance",
      "era": "Present Day",
      "emoji": "📋"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Policy and standard lifecycle\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the policy and standard lifecycle control (from GRC platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Information Technology (IT) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Policy and standard lifecycle\" sub-process is one of the controls an auditor must verify for Information Technology (IT) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the policy and standard lifecycle control (from GRC platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GRC platform, Policy + standard repository, Risk register — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Policy and standard lifecycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_policy_and_standard_lifecycle_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GRC platform and Policy + standard repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_policy_and_standard_lifecycle_mcp.py` to expose it to your agent — or `python 01_policy_and_standard_lifecycle_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Risk accepted by no one, tracked by nobody",
        "when": "Recurring",
        "where": "Security governance programs",
        "impact": "Without policy lifecycle, a live risk register, and metrics, security decisions are invisible — and accountability evaporates when something fails.",
        "body": [
          "Governance gaps are quiet until an incident: stale policies, risks with no owner or expiry, exceptions that never close, and no metrics to show the program's state.",
          "Auditors verify policy/standard lifecycle, risk assessment and tracking, security metrics/reporting, exception management, and awareness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Information Technology (IT) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GRC platform · Policy + standard repository",
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
          "year": 2024,
          "event": "NIST CSF 2.0 adds a Govern function — accountability as a control",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC rules require governance + risk-management disclosure"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Policy and standard lifecycle\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the policy and standard lifecycle control (from GRC platform).",
        "The test: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Policy and standard lifecycle\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GRC platform, Policy + standard repository, Risk register) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the policy and standard lifecycle control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Cybersecurity Framework 2.0 — Govern",
          "url": "https://www.nist.gov/cyberframework"
        },
        {
          "title": "COBIT 2019",
          "url": "https://www.isaca.org/resources/cobit"
        },
        {
          "title": "ISO/IEC 27001 — ISMS",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_policy_and_standard_lifecycle_mcp.py",
          "url": "/audit-code/it-governance/01_policy_and_standard_lifecycle_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Information Technology (IT) Governance evidence for \"Policy and standard lifecycle\" (in-scope inventory for the policy and standard lifecycle control (from grc platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Policy and standard lifecycle\" control for Information Technology (IT) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Policy and standard lifecycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the policy and standard lifecycle control (from GRC platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GRC platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GRC platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GRC platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Information Technology (IT) Governance: \"Policy and standard lifecycle\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Policy and standard lifecycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- it-governance_inventory.json   (in-scope items — In-scope inventory for the policy and standard lifecycle control (from GRC platform))\n- it-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Policy and standard lifecycle\",\n  \"domain\": \"Information Technology (IT) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{gov_",
        "/evidence/it-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"CISO / IT risk\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Policy and standard lifecycle\" control must cover\n# fragment: policy_standard_lifecycle_",
        "/evidence/it-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "it-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "it-governance_state.json",
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
          "value": "FLAG{gov_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/it-governance_inventory.json",
          "value": "policy_standard_lifecycle_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/it-governance_state.json",
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
          "id": "gov-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Policy and standard lifecycle\" sub-process of Information Technology (IT) Governance?",
          "options": [
            "Deploy and operate the policy and standard lifecycle control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the policy and standard lifecycle control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for policy and standard lifecycle against comparable organisations in the sector",
            "Obtain evidence that the policy and standard lifecycle control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "gov-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Policy and standard lifecycle\" matter to the broader Information Technology (IT) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Information Technology (IT) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Information Technology (IT) Governance estate",
            "It is a control other Information Technology (IT) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Information Technology (IT) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "gov-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Policy and standard lifecycle\" control?",
          "options": [
            "A point-in-time screenshot of one system's policy and standard lifecycle settings, captured during the walkthrough",
            "The In-scope inventory for the policy and standard lifecycle control (from GRC platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the policy and standard lifecycle control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's policy and standard lifecycle capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "gov-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Policy and standard lifecycle\"?",
          "options": [
            "From GRC platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how policy and standard lifecycle works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GRC platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "gov-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Policy and standard lifecycle\"?",
          "options": [
            "The external audit firm, since it is the party examining the policy and standard lifecycle control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the policy and standard lifecycle data is shared, so the accountability sits with no one in particular",
            "CISO / IT risk, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "CISO / IT risk owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "gov-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Policy and standard lifecycle\", which part stays with the human auditor?",
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
          "id": "gov-01-q7",
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
          "id": "gov-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Policy and standard lifecycle\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the policy and standard lifecycle control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the policy and standard lifecycle control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "gov-01-q9",
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
          "id": "gov-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Policy and standard lifecycle\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind policy and standard lifecycle, so there is no overlap",
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
    "epochId": "it-governance",
    "id": "gov-02",
    "order": 2,
    "title": "Risk assessment and tracking",
    "subtitle": "Agentic technical & privacy audit of the risk assessment and tracking control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Risk assessment and tracking\" control for Information Technology (IT) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Risk assessment and tracking\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Information Technology (IT) Governance systems of record (GRC platform; Policy + standard repository; Risk register) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the risk assessment and tracking control (from GRC platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GRC platform",
        "Policy + standard repository",
        "Risk register",
        "Metrics / KRI dashboard"
      ],
      "dataOwner": [
        "CISO / IT risk",
        "Policy owners",
        "Internal audit",
        "Executive / board"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Information Technology (IT) Governance controls."
      }
    },
    "badge": {
      "id": "gov-02-badge",
      "name": "Information Technology (IT) Governance Auditor",
      "emoji": "📋"
    },
    "wonder": {
      "name": "Risk assessment and tracking",
      "location": "Information Technology (IT) Governance",
      "era": "Present Day",
      "emoji": "📋"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Risk assessment and tracking\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the risk assessment and tracking control (from GRC platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Information Technology (IT) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Risk assessment and tracking\" sub-process is one of the controls an auditor must verify for Information Technology (IT) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the risk assessment and tracking control (from GRC platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GRC platform, Policy + standard repository, Risk register — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Risk assessment and tracking\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_risk_assessment_and_tracking_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GRC platform and Policy + standard repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_risk_assessment_and_tracking_mcp.py` to expose it to your agent — or `python 02_risk_assessment_and_tracking_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Risk accepted by no one, tracked by nobody",
        "when": "Recurring",
        "where": "Security governance programs",
        "impact": "Without policy lifecycle, a live risk register, and metrics, security decisions are invisible — and accountability evaporates when something fails.",
        "body": [
          "Governance gaps are quiet until an incident: stale policies, risks with no owner or expiry, exceptions that never close, and no metrics to show the program's state.",
          "Auditors verify policy/standard lifecycle, risk assessment and tracking, security metrics/reporting, exception management, and awareness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Information Technology (IT) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GRC platform · Policy + standard repository",
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
          "year": 2024,
          "event": "NIST CSF 2.0 adds a Govern function — accountability as a control",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC rules require governance + risk-management disclosure"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Risk assessment and tracking\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the risk assessment and tracking control (from GRC platform).",
        "The test: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Risk assessment and tracking\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GRC platform, Policy + standard repository, Risk register) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the risk assessment and tracking control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Cybersecurity Framework 2.0 — Govern",
          "url": "https://www.nist.gov/cyberframework"
        },
        {
          "title": "COBIT 2019",
          "url": "https://www.isaca.org/resources/cobit"
        },
        {
          "title": "ISO/IEC 27001 — ISMS",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_risk_assessment_and_tracking_mcp.py",
          "url": "/audit-code/it-governance/02_risk_assessment_and_tracking_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Information Technology (IT) Governance evidence for \"Risk assessment and tracking\" (in-scope inventory for the risk assessment and tracking control (from grc platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Risk assessment and tracking\" control for Information Technology (IT) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Risk assessment and tracking\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the risk assessment and tracking control (from GRC platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GRC platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GRC platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GRC platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Information Technology (IT) Governance: \"Risk assessment and tracking\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Risk assessment and tracking\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- it-governance_inventory.json   (in-scope items — In-scope inventory for the risk assessment and tracking control (from GRC platform))\n- it-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Risk assessment and tracking\",\n  \"domain\": \"Information Technology (IT) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{gov_",
        "/evidence/it-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"CISO / IT risk\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Risk assessment and tracking\" control must cover\n# fragment: risk_assessment_tracking_",
        "/evidence/it-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "it-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "it-governance_state.json",
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
          "value": "FLAG{gov_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/it-governance_inventory.json",
          "value": "risk_assessment_tracking_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/it-governance_state.json",
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
          "id": "gov-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Risk assessment and tracking\" sub-process of Information Technology (IT) Governance?",
          "options": [
            "Deploy and operate the risk assessment and tracking control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the risk assessment and tracking control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for risk assessment and tracking against comparable organisations in the sector",
            "Obtain evidence that the risk assessment and tracking control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "gov-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Risk assessment and tracking\" matter to the broader Information Technology (IT) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Information Technology (IT) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Information Technology (IT) Governance estate",
            "It is a control other Information Technology (IT) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Information Technology (IT) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "gov-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Risk assessment and tracking\" control?",
          "options": [
            "A point-in-time screenshot of one system's risk assessment and tracking settings, captured during the walkthrough",
            "The In-scope inventory for the risk assessment and tracking control (from GRC platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the risk assessment and tracking control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's risk assessment and tracking capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "gov-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Risk assessment and tracking\"?",
          "options": [
            "From GRC platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how risk assessment and tracking works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GRC platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "gov-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Risk assessment and tracking\"?",
          "options": [
            "The external audit firm, since it is the party examining the risk assessment and tracking control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the risk assessment and tracking data is shared, so the accountability sits with no one in particular",
            "CISO / IT risk, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "CISO / IT risk owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "gov-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Risk assessment and tracking\", which part stays with the human auditor?",
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
          "id": "gov-02-q7",
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
          "id": "gov-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Risk assessment and tracking\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the risk assessment and tracking control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the risk assessment and tracking control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "gov-02-q9",
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
          "id": "gov-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Risk assessment and tracking\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind risk assessment and tracking, so there is no overlap",
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
    "epochId": "it-governance",
    "id": "gov-03",
    "order": 3,
    "title": "Security metrics and reporting",
    "subtitle": "Agentic technical & privacy audit of the security metrics and reporting control",
    "category": "cybersecurity",
    "xp": 120,
    "easeScore": 8,
    "valueScore": 6,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Security metrics and reporting\" control for Information Technology (IT) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Security metrics and reporting\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Information Technology (IT) Governance systems of record (GRC platform; Policy + standard repository; Risk register) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the security metrics and reporting control (from GRC platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GRC platform",
        "Policy + standard repository",
        "Risk register",
        "Metrics / KRI dashboard"
      ],
      "dataOwner": [
        "CISO / IT risk",
        "Policy owners",
        "Internal audit",
        "Executive / board"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 6/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Information Technology (IT) Governance controls."
      }
    },
    "badge": {
      "id": "gov-03-badge",
      "name": "Information Technology (IT) Governance Auditor",
      "emoji": "📋"
    },
    "wonder": {
      "name": "Security metrics and reporting",
      "location": "Information Technology (IT) Governance",
      "era": "Present Day",
      "emoji": "📋"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Security metrics and reporting\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the security metrics and reporting control (from GRC platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Information Technology (IT) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Security metrics and reporting\" sub-process is one of the controls an auditor must verify for Information Technology (IT) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the security metrics and reporting control (from GRC platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GRC platform, Policy + standard repository, Risk register — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Security metrics and reporting\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_security_metrics_and_reporting_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GRC platform and Policy + standard repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_security_metrics_and_reporting_mcp.py` to expose it to your agent — or `python 03_security_metrics_and_reporting_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Risk accepted by no one, tracked by nobody",
        "when": "Recurring",
        "where": "Security governance programs",
        "impact": "Without policy lifecycle, a live risk register, and metrics, security decisions are invisible — and accountability evaporates when something fails.",
        "body": [
          "Governance gaps are quiet until an incident: stale policies, risks with no owner or expiry, exceptions that never close, and no metrics to show the program's state.",
          "Auditors verify policy/standard lifecycle, risk assessment and tracking, security metrics/reporting, exception management, and awareness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Information Technology (IT) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GRC platform · Policy + standard repository",
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
          "year": 2024,
          "event": "NIST CSF 2.0 adds a Govern function — accountability as a control",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC rules require governance + risk-management disclosure"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Security metrics and reporting\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the security metrics and reporting control (from GRC platform).",
        "The test: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Security metrics and reporting\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GRC platform, Policy + standard repository, Risk register) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the security metrics and reporting control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Cybersecurity Framework 2.0 — Govern",
          "url": "https://www.nist.gov/cyberframework"
        },
        {
          "title": "COBIT 2019",
          "url": "https://www.isaca.org/resources/cobit"
        },
        {
          "title": "ISO/IEC 27001 — ISMS",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_security_metrics_and_reporting_mcp.py",
          "url": "/audit-code/it-governance/03_security_metrics_and_reporting_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Information Technology (IT) Governance evidence for \"Security metrics and reporting\" (in-scope inventory for the security metrics and reporting control (from grc platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security metrics and reporting\" control for Information Technology (IT) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Security metrics and reporting\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the security metrics and reporting control (from GRC platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GRC platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GRC platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GRC platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Information Technology (IT) Governance: \"Security metrics and reporting\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Security metrics and reporting\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- it-governance_inventory.json   (in-scope items — In-scope inventory for the security metrics and reporting control (from GRC platform))\n- it-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Security metrics and reporting\",\n  \"domain\": \"Information Technology (IT) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{gov_",
        "/evidence/it-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"CISO / IT risk\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Security metrics and reporting\" control must cover\n# fragment: security_metrics_reporting_",
        "/evidence/it-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "it-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "it-governance_state.json",
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
          "value": "FLAG{gov_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/it-governance_inventory.json",
          "value": "security_metrics_reporting_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/it-governance_state.json",
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
          "id": "gov-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Security metrics and reporting\" sub-process of Information Technology (IT) Governance?",
          "options": [
            "Deploy and operate the security metrics and reporting control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the security metrics and reporting control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for security metrics and reporting against comparable organisations in the sector",
            "Obtain evidence that the security metrics and reporting control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "gov-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Security metrics and reporting\" matter to the broader Information Technology (IT) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Information Technology (IT) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Information Technology (IT) Governance estate",
            "It is a control other Information Technology (IT) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Information Technology (IT) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "gov-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Security metrics and reporting\" control?",
          "options": [
            "A point-in-time screenshot of one system's security metrics and reporting settings, captured during the walkthrough",
            "The In-scope inventory for the security metrics and reporting control (from GRC platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the security metrics and reporting control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's security metrics and reporting capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "gov-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Security metrics and reporting\"?",
          "options": [
            "From GRC platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how security metrics and reporting works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GRC platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "gov-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Security metrics and reporting\"?",
          "options": [
            "The external audit firm, since it is the party examining the security metrics and reporting control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the security metrics and reporting data is shared, so the accountability sits with no one in particular",
            "CISO / IT risk, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "CISO / IT risk owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "gov-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Security metrics and reporting\", which part stays with the human auditor?",
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
          "id": "gov-03-q7",
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
          "id": "gov-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Security metrics and reporting\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the security metrics and reporting control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the security metrics and reporting control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "gov-03-q9",
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
          "id": "gov-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Security metrics and reporting\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind security metrics and reporting, so there is no overlap",
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
    "epochId": "it-governance",
    "id": "gov-04",
    "order": 4,
    "title": "Exception management",
    "subtitle": "Agentic technical & privacy audit of the exception management control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Exception management\" control for Information Technology (IT) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Exception management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Information Technology (IT) Governance systems of record (GRC platform; Policy + standard repository; Risk register) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the exception management control (from GRC platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GRC platform",
        "Policy + standard repository",
        "Risk register",
        "Metrics / KRI dashboard"
      ],
      "dataOwner": [
        "CISO / IT risk",
        "Policy owners",
        "Internal audit",
        "Executive / board"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Information Technology (IT) Governance controls."
      }
    },
    "badge": {
      "id": "gov-04-badge",
      "name": "Information Technology (IT) Governance Auditor",
      "emoji": "📋"
    },
    "wonder": {
      "name": "Exception management",
      "location": "Information Technology (IT) Governance",
      "era": "Present Day",
      "emoji": "📋"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Exception management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the exception management control (from GRC platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Information Technology (IT) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Exception management\" sub-process is one of the controls an auditor must verify for Information Technology (IT) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the exception management control (from GRC platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GRC platform, Policy + standard repository, Risk register — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Exception management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_exception_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GRC platform and Policy + standard repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_exception_management_mcp.py` to expose it to your agent — or `python 04_exception_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Risk accepted by no one, tracked by nobody",
        "when": "Recurring",
        "where": "Security governance programs",
        "impact": "Without policy lifecycle, a live risk register, and metrics, security decisions are invisible — and accountability evaporates when something fails.",
        "body": [
          "Governance gaps are quiet until an incident: stale policies, risks with no owner or expiry, exceptions that never close, and no metrics to show the program's state.",
          "Auditors verify policy/standard lifecycle, risk assessment and tracking, security metrics/reporting, exception management, and awareness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Information Technology (IT) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GRC platform · Policy + standard repository",
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
          "year": 2024,
          "event": "NIST CSF 2.0 adds a Govern function — accountability as a control",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC rules require governance + risk-management disclosure"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Exception management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the exception management control (from GRC platform).",
        "The test: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Exception management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GRC platform, Policy + standard repository, Risk register) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the exception management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Cybersecurity Framework 2.0 — Govern",
          "url": "https://www.nist.gov/cyberframework"
        },
        {
          "title": "COBIT 2019",
          "url": "https://www.isaca.org/resources/cobit"
        },
        {
          "title": "ISO/IEC 27001 — ISMS",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_exception_management_mcp.py",
          "url": "/audit-code/it-governance/04_exception_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Information Technology (IT) Governance evidence for \"Exception management\" (in-scope inventory for the exception management control (from grc platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Exception management\" control for Information Technology (IT) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Exception management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the exception management control (from GRC platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GRC platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GRC platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GRC platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Information Technology (IT) Governance: \"Exception management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Exception management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- it-governance_inventory.json   (in-scope items — In-scope inventory for the exception management control (from GRC platform))\n- it-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Exception management\",\n  \"domain\": \"Information Technology (IT) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{gov_",
        "/evidence/it-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"CISO / IT risk\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Exception management\" control must cover\n# fragment: exception_management_",
        "/evidence/it-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "it-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "it-governance_state.json",
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
          "value": "FLAG{gov_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/it-governance_inventory.json",
          "value": "exception_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/it-governance_state.json",
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
          "id": "gov-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Exception management\" sub-process of Information Technology (IT) Governance?",
          "options": [
            "Deploy and operate the exception management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the exception management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for exception management against comparable organisations in the sector",
            "Obtain evidence that the exception management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "gov-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Exception management\" matter to the broader Information Technology (IT) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Information Technology (IT) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Information Technology (IT) Governance estate",
            "It is a control other Information Technology (IT) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Information Technology (IT) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "gov-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Exception management\" control?",
          "options": [
            "A point-in-time screenshot of one system's exception management settings, captured during the walkthrough",
            "The In-scope inventory for the exception management control (from GRC platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the exception management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's exception management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "gov-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Exception management\"?",
          "options": [
            "From GRC platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how exception management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GRC platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "gov-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Exception management\"?",
          "options": [
            "The external audit firm, since it is the party examining the exception management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the exception management data is shared, so the accountability sits with no one in particular",
            "CISO / IT risk, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "CISO / IT risk owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "gov-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Exception management\", which part stays with the human auditor?",
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
          "id": "gov-04-q7",
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
          "id": "gov-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Exception management\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the exception management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the exception management control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "gov-04-q9",
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
          "id": "gov-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Exception management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind exception management, so there is no overlap",
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
    "epochId": "it-governance",
    "id": "gov-05",
    "order": 5,
    "title": "Security awareness program",
    "subtitle": "Agentic technical & privacy audit of the security awareness program control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Security awareness program\" control for Information Technology (IT) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Security awareness program\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Information Technology (IT) Governance systems of record (GRC platform; Policy + standard repository; Risk register) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the security awareness program control (from GRC platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GRC platform",
        "Policy + standard repository",
        "Risk register",
        "Metrics / KRI dashboard"
      ],
      "dataOwner": [
        "CISO / IT risk",
        "Policy owners",
        "Internal audit",
        "Executive / board"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Information Technology (IT) Governance controls."
      }
    },
    "badge": {
      "id": "gov-05-badge",
      "name": "Information Technology (IT) Governance Auditor",
      "emoji": "📋"
    },
    "wonder": {
      "name": "Security awareness program",
      "location": "Information Technology (IT) Governance",
      "era": "Present Day",
      "emoji": "📋"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Security awareness program\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the security awareness program control (from GRC platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Information Technology (IT) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Security awareness program\" sub-process is one of the controls an auditor must verify for Information Technology (IT) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the security awareness program control (from GRC platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GRC platform, Policy + standard repository, Risk register — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Security awareness program\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_security_awareness_program_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GRC platform and Policy + standard repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_security_awareness_program_mcp.py` to expose it to your agent — or `python 05_security_awareness_program_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Risk accepted by no one, tracked by nobody",
        "when": "Recurring",
        "where": "Security governance programs",
        "impact": "Without policy lifecycle, a live risk register, and metrics, security decisions are invisible — and accountability evaporates when something fails.",
        "body": [
          "Governance gaps are quiet until an incident: stale policies, risks with no owner or expiry, exceptions that never close, and no metrics to show the program's state.",
          "Auditors verify policy/standard lifecycle, risk assessment and tracking, security metrics/reporting, exception management, and awareness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Information Technology (IT) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GRC platform · Policy + standard repository",
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
          "year": 2024,
          "event": "NIST CSF 2.0 adds a Govern function — accountability as a control",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC rules require governance + risk-management disclosure"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Security awareness program\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the security awareness program control (from GRC platform).",
        "The test: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Security awareness program\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GRC platform, Policy + standard repository, Risk register) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the security awareness program control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Cybersecurity Framework 2.0 — Govern",
          "url": "https://www.nist.gov/cyberframework"
        },
        {
          "title": "COBIT 2019",
          "url": "https://www.isaca.org/resources/cobit"
        },
        {
          "title": "ISO/IEC 27001 — ISMS",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_security_awareness_program_mcp.py",
          "url": "/audit-code/it-governance/05_security_awareness_program_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Information Technology (IT) Governance evidence for \"Security awareness program\" (in-scope inventory for the security awareness program control (from grc platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security awareness program\" control for Information Technology (IT) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Security awareness program\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the security awareness program control (from GRC platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GRC platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GRC platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GRC platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Information Technology (IT) Governance: \"Security awareness program\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Information Technology (IT) Governance policy/standard and flag every item where the \"Security awareness program\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- it-governance_inventory.json   (in-scope items — In-scope inventory for the security awareness program control (from GRC platform))\n- it-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Security awareness program\",\n  \"domain\": \"Information Technology (IT) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{gov_",
        "/evidence/it-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"CISO / IT risk\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Security awareness program\" control must cover\n# fragment: security_awareness_program_",
        "/evidence/it-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "it-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "it-governance_state.json",
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
          "value": "FLAG{gov_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/it-governance_inventory.json",
          "value": "security_awareness_program_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/it-governance_state.json",
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
          "id": "gov-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Security awareness program\" sub-process of Information Technology (IT) Governance?",
          "options": [
            "Deploy and operate the security awareness program control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the security awareness program control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for security awareness program against comparable organisations in the sector",
            "Obtain evidence that the security awareness program control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "gov-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Security awareness program\" matter to the broader Information Technology (IT) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Information Technology (IT) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Information Technology (IT) Governance estate",
            "It is a control other Information Technology (IT) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Information Technology (IT) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "gov-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Security awareness program\" control?",
          "options": [
            "A point-in-time screenshot of one system's security awareness program settings, captured during the walkthrough",
            "The In-scope inventory for the security awareness program control (from GRC platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the security awareness program control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's security awareness program capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "gov-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Security awareness program\"?",
          "options": [
            "From GRC platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how security awareness program works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GRC platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "gov-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Security awareness program\"?",
          "options": [
            "The external audit firm, since it is the party examining the security awareness program control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the security awareness program data is shared, so the accountability sits with no one in particular",
            "CISO / IT risk, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "CISO / IT risk owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "gov-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Security awareness program\", which part stays with the human auditor?",
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
          "id": "gov-05-q7",
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
          "id": "gov-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Security awareness program\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the security awareness program control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the security awareness program control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "gov-05-q9",
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
          "id": "gov-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Security awareness program\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind security awareness program, so there is no overlap",
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
