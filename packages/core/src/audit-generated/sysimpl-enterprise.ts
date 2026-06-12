import type { EpochConfig, StageConfig } from "../types";

export const sysimplEnterpriseEpoch: EpochConfig = {
  "id": "sysimpl-enterprise",
  "name": "System Implementation — Enterprise",
  "subtitle": "Agentic technical & privacy audit — System Implementation — Enterprise",
  "description": "Audit System Implementation — Enterprise end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🏛️",
  "color": "Indigo",
  "unlocked": true
};

export const sysimplEnterpriseStages: StageConfig[] = [
  {
    "epochId": "sysimpl-enterprise",
    "id": "sie-01",
    "order": 1,
    "title": "Program & project mgmt (PMO)",
    "subtitle": "Agentic technical & privacy audit of the program & project mgmt (pmo) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Program & project mgmt (PMO)\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Program & project mgmt (PMO)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the program & project mgmt (pmo) control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-01-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Program & project mgmt (PMO)",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Program & project mgmt (PMO)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the program & project mgmt (pmo) control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Program & project mgmt (PMO)\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the program & project mgmt (pmo) control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Program & project mgmt (PMO)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_program_project_mgmt_pmo_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_program_project_mgmt_pmo_mcp.py` to expose it to your agent — or `python 01_program_project_mgmt_pmo_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Program & project mgmt (PMO)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the program & project mgmt (pmo) control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Program & project mgmt (PMO)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the program & project mgmt (pmo) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_program_project_mgmt_pmo_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/01_program_project_mgmt_pmo_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Program & project mgmt (PMO)\" (in-scope inventory for the program & project mgmt (pmo) control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Program & project mgmt (PMO)\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Program & project mgmt (PMO)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the program & project mgmt (pmo) control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Program & project mgmt (PMO)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Program & project mgmt (PMO)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the program & project mgmt (pmo) control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Program & project mgmt (PMO)\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Program & project mgmt (PMO)\" control must cover\n# fragment: program_project_mgmt_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "program_project_mgmt_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Program & project mgmt (PMO)\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the program & project mgmt (pmo) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the program & project mgmt (pmo) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for program & project mgmt (pmo) against comparable organisations in the sector",
            "Obtain evidence that the program & project mgmt (pmo) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Program & project mgmt (PMO)\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Program & project mgmt (PMO)\" control?",
          "options": [
            "A point-in-time screenshot of one system's program & project mgmt (pmo) settings, captured during the walkthrough",
            "The In-scope inventory for the program & project mgmt (pmo) control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the program & project mgmt (pmo) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's program & project mgmt (pmo) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Program & project mgmt (PMO)\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how program & project mgmt (pmo) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Program & project mgmt (PMO)\"?",
          "options": [
            "The external audit firm, since it is the party examining the program & project mgmt (pmo) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the program & project mgmt (pmo) data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Program & project mgmt (PMO)\", which part stays with the human auditor?",
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
          "id": "sie-01-q7",
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
          "id": "sie-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Program & project mgmt (PMO)\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the program & project mgmt (pmo) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the program & project mgmt (pmo) control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-01-q9",
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
          "id": "sie-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Program & project mgmt (PMO)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind program & project mgmt (pmo), so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-02",
    "order": 2,
    "title": "Enterprise architecture",
    "subtitle": "Agentic technical & privacy audit of the enterprise architecture control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 4,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Enterprise architecture\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Enterprise architecture\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the enterprise architecture control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 4/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-02-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Enterprise architecture",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Enterprise architecture\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the enterprise architecture control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Enterprise architecture\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the enterprise architecture control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Enterprise architecture\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_enterprise_architecture_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_enterprise_architecture_mcp.py` to expose it to your agent — or `python 02_enterprise_architecture_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Enterprise architecture\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the enterprise architecture control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Enterprise architecture\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the enterprise architecture control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_enterprise_architecture_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/02_enterprise_architecture_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Enterprise architecture\" (in-scope inventory for the enterprise architecture control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Enterprise architecture\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Enterprise architecture\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the enterprise architecture control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Enterprise architecture\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Enterprise architecture\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the enterprise architecture control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Enterprise architecture\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Enterprise architecture\" control must cover\n# fragment: enterprise_architecture_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "enterprise_architecture_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Enterprise architecture\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the enterprise architecture control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the enterprise architecture control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for enterprise architecture against comparable organisations in the sector",
            "Obtain evidence that the enterprise architecture control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Enterprise architecture\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Enterprise architecture\" control?",
          "options": [
            "A point-in-time screenshot of one system's enterprise architecture settings, captured during the walkthrough",
            "The In-scope inventory for the enterprise architecture control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the enterprise architecture control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's enterprise architecture capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Enterprise architecture\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how enterprise architecture works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Enterprise architecture\"?",
          "options": [
            "The external audit firm, since it is the party examining the enterprise architecture control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the enterprise architecture data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Enterprise architecture\", which part stays with the human auditor?",
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
          "id": "sie-02-q7",
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
          "id": "sie-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Enterprise architecture\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the enterprise architecture control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the enterprise architecture control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-02-q9",
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
          "id": "sie-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Enterprise architecture\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind enterprise architecture, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-03",
    "order": 3,
    "title": "Development",
    "subtitle": "Agentic technical & privacy audit of the development control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Development\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Development\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the development control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-03-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Development",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Development\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the development control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Development\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the development control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Development\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_development_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_development_mcp.py` to expose it to your agent — or `python 03_development_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Development\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the development control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Development\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the development control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_development_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/03_development_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Development\" (in-scope inventory for the development control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Development\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Development\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the development control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Development\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Development\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the development control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Development\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Development\" control must cover\n# fragment: development_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "development_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Development\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the development control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the development control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for development against comparable organisations in the sector",
            "Obtain evidence that the development control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Development\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Development\" control?",
          "options": [
            "A point-in-time screenshot of one system's development settings, captured during the walkthrough",
            "The In-scope inventory for the development control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the development control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's development capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Development\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how development works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Development\"?",
          "options": [
            "The external audit firm, since it is the party examining the development control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the development data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Development\", which part stays with the human auditor?",
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
          "id": "sie-03-q7",
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
          "id": "sie-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Development\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the development control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the development control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-03-q9",
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
          "id": "sie-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Development\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind development, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-04",
    "order": 4,
    "title": "Testing & QA (E2E)",
    "subtitle": "Agentic technical & privacy audit of the testing & qa (e2e) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Testing & QA (E2E)\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Testing & QA (E2E)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the testing & qa (e2e) control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-04-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Testing & QA (E2E)",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Testing & QA (E2E)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the testing & qa (e2e) control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Testing & QA (E2E)\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the testing & qa (e2e) control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Testing & QA (E2E)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_testing_qa_e2e_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_testing_qa_e2e_mcp.py` to expose it to your agent — or `python 04_testing_qa_e2e_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Testing & QA (E2E)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the testing & qa (e2e) control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Testing & QA (E2E)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the testing & qa (e2e) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_testing_qa_e2e_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/04_testing_qa_e2e_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Testing & QA (E2E)\" (in-scope inventory for the testing & qa (e2e) control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Testing & QA (E2E)\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Testing & QA (E2E)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the testing & qa (e2e) control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Testing & QA (E2E)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Testing & QA (E2E)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the testing & qa (e2e) control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Testing & QA (E2E)\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Testing & QA (E2E)\" control must cover\n# fragment: testing_qa_e2e_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "testing_qa_e2e_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Testing & QA (E2E)\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the testing & qa (e2e) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the testing & qa (e2e) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for testing & qa (e2e) against comparable organisations in the sector",
            "Obtain evidence that the testing & qa (e2e) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Testing & QA (E2E)\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Testing & QA (E2E)\" control?",
          "options": [
            "A point-in-time screenshot of one system's testing & qa (e2e) settings, captured during the walkthrough",
            "The In-scope inventory for the testing & qa (e2e) control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the testing & qa (e2e) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's testing & qa (e2e) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Testing & QA (E2E)\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how testing & qa (e2e) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Testing & QA (E2E)\"?",
          "options": [
            "The external audit firm, since it is the party examining the testing & qa (e2e) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the testing & qa (e2e) data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Testing & QA (E2E)\", which part stays with the human auditor?",
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
          "id": "sie-04-q7",
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
          "id": "sie-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Testing & QA (E2E)\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the testing & qa (e2e) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the testing & qa (e2e) control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-04-q9",
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
          "id": "sie-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Testing & QA (E2E)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind testing & qa (e2e), so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-05",
    "order": 5,
    "title": "Implement (go-live, phased)",
    "subtitle": "Agentic technical & privacy audit of the implement (go-live, phased) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Implement (go-live, phased)\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Implement (go-live, phased)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the implement (go-live, phased) control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-05-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Implement (go-live, phased)",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Implement (go-live, phased)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the implement (go-live, phased) control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Implement (go-live, phased)\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the implement (go-live, phased) control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Implement (go-live, phased)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_implement_go_live_phased_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_implement_go_live_phased_mcp.py` to expose it to your agent — or `python 05_implement_go_live_phased_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Implement (go-live, phased)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the implement (go-live, phased) control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Implement (go-live, phased)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the implement (go-live, phased) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_implement_go_live_phased_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/05_implement_go_live_phased_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Implement (go-live, phased)\" (in-scope inventory for the implement (go-live, phased) control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Implement (go-live, phased)\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Implement (go-live, phased)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the implement (go-live, phased) control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Implement (go-live, phased)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Implement (go-live, phased)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the implement (go-live, phased) control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Implement (go-live, phased)\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Implement (go-live, phased)\" control must cover\n# fragment: implement_golive_phased_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "implement_golive_phased_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Implement (go-live, phased)\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the implement (go-live, phased) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the implement (go-live, phased) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for implement (go-live, phased) against comparable organisations in the sector",
            "Obtain evidence that the implement (go-live, phased) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Implement (go-live, phased)\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Implement (go-live, phased)\" control?",
          "options": [
            "A point-in-time screenshot of one system's implement (go-live, phased) settings, captured during the walkthrough",
            "The In-scope inventory for the implement (go-live, phased) control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the implement (go-live, phased) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's implement (go-live, phased) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Implement (go-live, phased)\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how implement (go-live, phased) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Implement (go-live, phased)\"?",
          "options": [
            "The external audit firm, since it is the party examining the implement (go-live, phased) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the implement (go-live, phased) data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Implement (go-live, phased)\", which part stays with the human auditor?",
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
          "id": "sie-05-q7",
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
          "id": "sie-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Implement (go-live, phased)\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the implement (go-live, phased) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the implement (go-live, phased) control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-05-q9",
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
          "id": "sie-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Implement (go-live, phased)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind implement (go-live, phased), so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-06",
    "order": 6,
    "title": "Cutover",
    "subtitle": "Agentic technical & privacy audit of the cutover control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cutover\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Cutover\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the cutover control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-06-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Cutover",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cutover\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the cutover control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Cutover\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the cutover control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Cutover\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_cutover_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_cutover_mcp.py` to expose it to your agent — or `python 06_cutover_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cutover\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the cutover control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Cutover\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the cutover control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_cutover_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/06_cutover_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Cutover\" (in-scope inventory for the cutover control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cutover\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Cutover\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the cutover control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Cutover\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Cutover\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the cutover control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cutover\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cutover\" control must cover\n# fragment: cutover_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "cutover_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cutover\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the cutover control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the cutover control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for cutover against comparable organisations in the sector",
            "Obtain evidence that the cutover control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cutover\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cutover\" control?",
          "options": [
            "A point-in-time screenshot of one system's cutover settings, captured during the walkthrough",
            "The In-scope inventory for the cutover control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the cutover control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's cutover capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Cutover\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how cutover works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cutover\"?",
          "options": [
            "The external audit firm, since it is the party examining the cutover control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the cutover data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cutover\", which part stays with the human auditor?",
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
          "id": "sie-06-q7",
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
          "id": "sie-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cutover\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the cutover control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the cutover control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-06-q9",
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
          "id": "sie-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cutover\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind cutover, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-07",
    "order": 7,
    "title": "Data conversion and migration",
    "subtitle": "Agentic technical & privacy audit of the data conversion and migration control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 3,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data conversion and migration\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Data conversion and migration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data conversion and migration control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 3/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-07-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Data conversion and migration",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data conversion and migration\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data conversion and migration control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Data conversion and migration\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data conversion and migration control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Data conversion and migration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_data_conversion_and_migration_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_data_conversion_and_migration_mcp.py` to expose it to your agent — or `python 07_data_conversion_and_migration_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data conversion and migration\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data conversion and migration control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Data conversion and migration\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data conversion and migration control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_data_conversion_and_migration_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/07_data_conversion_and_migration_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Data conversion and migration\" (in-scope inventory for the data conversion and migration control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data conversion and migration\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Data conversion and migration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data conversion and migration control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Data conversion and migration\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Data conversion and migration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the data conversion and migration control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data conversion and migration\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data conversion and migration\" control must cover\n# fragment: data_conversion_migration_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "data_conversion_migration_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data conversion and migration\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the data conversion and migration control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data conversion and migration control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data conversion and migration against comparable organisations in the sector",
            "Obtain evidence that the data conversion and migration control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data conversion and migration\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data conversion and migration\" control?",
          "options": [
            "A point-in-time screenshot of one system's data conversion and migration settings, captured during the walkthrough",
            "The In-scope inventory for the data conversion and migration control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data conversion and migration control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data conversion and migration capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data conversion and migration\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data conversion and migration works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data conversion and migration\"?",
          "options": [
            "The external audit firm, since it is the party examining the data conversion and migration control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data conversion and migration data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data conversion and migration\", which part stays with the human auditor?",
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
          "id": "sie-07-q7",
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
          "id": "sie-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data conversion and migration\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the data conversion and migration control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data conversion and migration control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-07-q9",
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
          "id": "sie-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data conversion and migration\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data conversion and migration, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-08",
    "order": 8,
    "title": "Post-implementation support / hypercare",
    "subtitle": "Agentic technical & privacy audit of the post-implementation support / hypercare control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Post-implementation support / hypercare\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Post-implementation support / hypercare\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the post-implementation support / hypercare control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-08-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Post-implementation support / hypercare",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Post-implementation support / hypercare\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the post-implementation support / hypercare control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Post-implementation support / hypercare\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the post-implementation support / hypercare control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Post-implementation support / hypercare\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_post_implementation_support_hypercare_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_post_implementation_support_hypercare_mcp.py` to expose it to your agent — or `python 08_post_implementation_support_hypercare_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Post-implementation support / hypercare\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the post-implementation support / hypercare control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Post-implementation support / hypercare\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the post-implementation support / hypercare control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_post_implementation_support_hypercare_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/08_post_implementation_support_hypercare_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Post-implementation support / hypercare\" (in-scope inventory for the post-implementation support / hypercare control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Post-implementation support / hypercare\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Post-implementation support / hypercare\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the post-implementation support / hypercare control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Post-implementation support / hypercare\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Post-implementation support / hypercare\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the post-implementation support / hypercare control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Post-implementation support / hypercare\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Post-implementation support / hypercare\" control must cover\n# fragment: postimplementation_support_hypercare_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "postimplementation_support_hypercare_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Post-implementation support / hypercare\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the post-implementation support / hypercare control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the post-implementation support / hypercare control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for post-implementation support / hypercare against comparable organisations in the sector",
            "Obtain evidence that the post-implementation support / hypercare control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Post-implementation support / hypercare\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Post-implementation support / hypercare\" control?",
          "options": [
            "A point-in-time screenshot of one system's post-implementation support / hypercare settings, captured during the walkthrough",
            "The In-scope inventory for the post-implementation support / hypercare control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the post-implementation support / hypercare control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's post-implementation support / hypercare capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Post-implementation support / hypercare\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how post-implementation support / hypercare works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Post-implementation support / hypercare\"?",
          "options": [
            "The external audit firm, since it is the party examining the post-implementation support / hypercare control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the post-implementation support / hypercare data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Post-implementation support / hypercare\", which part stays with the human auditor?",
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
          "id": "sie-08-q7",
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
          "id": "sie-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Post-implementation support / hypercare\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the post-implementation support / hypercare control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the post-implementation support / hypercare control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-08-q9",
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
          "id": "sie-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Post-implementation support / hypercare\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind post-implementation support / hypercare, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-09",
    "order": 9,
    "title": "Executive governance / steering",
    "subtitle": "Agentic technical & privacy audit of the executive governance / steering control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Executive governance / steering\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Executive governance / steering\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the executive governance / steering control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-09-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Executive governance / steering",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Executive governance / steering\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the executive governance / steering control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Executive governance / steering\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the executive governance / steering control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Executive governance / steering\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_executive_governance_steering_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_executive_governance_steering_mcp.py` to expose it to your agent — or `python 09_executive_governance_steering_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Executive governance / steering\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the executive governance / steering control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Executive governance / steering\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the executive governance / steering control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_executive_governance_steering_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/09_executive_governance_steering_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Executive governance / steering\" (in-scope inventory for the executive governance / steering control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Executive governance / steering\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Executive governance / steering\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the executive governance / steering control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Executive governance / steering\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Executive governance / steering\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the executive governance / steering control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Executive governance / steering\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Executive governance / steering\" control must cover\n# fragment: executive_governance_steering_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "executive_governance_steering_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Executive governance / steering\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the executive governance / steering control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the executive governance / steering control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for executive governance / steering against comparable organisations in the sector",
            "Obtain evidence that the executive governance / steering control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Executive governance / steering\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Executive governance / steering\" control?",
          "options": [
            "A point-in-time screenshot of one system's executive governance / steering settings, captured during the walkthrough",
            "The In-scope inventory for the executive governance / steering control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the executive governance / steering control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's executive governance / steering capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Executive governance / steering\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how executive governance / steering works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Executive governance / steering\"?",
          "options": [
            "The external audit firm, since it is the party examining the executive governance / steering control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the executive governance / steering data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Executive governance / steering\", which part stays with the human auditor?",
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
          "id": "sie-09-q7",
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
          "id": "sie-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Executive governance / steering\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the executive governance / steering control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the executive governance / steering control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-09-q9",
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
          "id": "sie-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Executive governance / steering\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind executive governance / steering, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-10",
    "order": 10,
    "title": "Audit and compliance involvement",
    "subtitle": "Agentic technical & privacy audit of the audit and compliance involvement control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Audit and compliance involvement\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Audit and compliance involvement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the audit and compliance involvement control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-10-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Audit and compliance involvement",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Audit and compliance involvement\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the audit and compliance involvement control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Audit and compliance involvement\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the audit and compliance involvement control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Audit and compliance involvement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_audit_and_compliance_involvement_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_audit_and_compliance_involvement_mcp.py` to expose it to your agent — or `python 10_audit_and_compliance_involvement_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Audit and compliance involvement\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the audit and compliance involvement control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Audit and compliance involvement\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the audit and compliance involvement control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_audit_and_compliance_involvement_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/10_audit_and_compliance_involvement_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Audit and compliance involvement\" (in-scope inventory for the audit and compliance involvement control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Audit and compliance involvement\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Audit and compliance involvement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the audit and compliance involvement control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Audit and compliance involvement\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Audit and compliance involvement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the audit and compliance involvement control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Audit and compliance involvement\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Audit and compliance involvement\" control must cover\n# fragment: audit_compliance_involvement_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "audit_compliance_involvement_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Audit and compliance involvement\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the audit and compliance involvement control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the audit and compliance involvement control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for audit and compliance involvement against comparable organisations in the sector",
            "Obtain evidence that the audit and compliance involvement control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Audit and compliance involvement\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Audit and compliance involvement\" control?",
          "options": [
            "A point-in-time screenshot of one system's audit and compliance involvement settings, captured during the walkthrough",
            "The In-scope inventory for the audit and compliance involvement control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the audit and compliance involvement control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's audit and compliance involvement capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Audit and compliance involvement\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how audit and compliance involvement works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Audit and compliance involvement\"?",
          "options": [
            "The external audit firm, since it is the party examining the audit and compliance involvement control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the audit and compliance involvement data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Audit and compliance involvement\", which part stays with the human auditor?",
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
          "id": "sie-10-q7",
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
          "id": "sie-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Audit and compliance involvement\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the audit and compliance involvement control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the audit and compliance involvement control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-10-q9",
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
          "id": "sie-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Audit and compliance involvement\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind audit and compliance involvement, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-11",
    "order": 11,
    "title": "Vendor selection",
    "subtitle": "Agentic technical & privacy audit of the vendor selection control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor selection\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Vendor selection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the vendor selection control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-11-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Vendor selection",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor selection\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the vendor selection control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Vendor selection\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the vendor selection control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Vendor selection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_vendor_selection_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_vendor_selection_mcp.py` to expose it to your agent — or `python 11_vendor_selection_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor selection\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the vendor selection control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Vendor selection\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the vendor selection control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_vendor_selection_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/11_vendor_selection_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Vendor selection\" (in-scope inventory for the vendor selection control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor selection\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Vendor selection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the vendor selection control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Vendor selection\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Vendor selection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the vendor selection control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor selection\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor selection\" control must cover\n# fragment: vendor_selection_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "vendor_selection_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor selection\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the vendor selection control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vendor selection control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vendor selection against comparable organisations in the sector",
            "Obtain evidence that the vendor selection control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor selection\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor selection\" control?",
          "options": [
            "A point-in-time screenshot of one system's vendor selection settings, captured during the walkthrough",
            "The In-scope inventory for the vendor selection control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vendor selection control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vendor selection capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vendor selection\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vendor selection works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor selection\"?",
          "options": [
            "The external audit firm, since it is the party examining the vendor selection control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vendor selection data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor selection\", which part stays with the human auditor?",
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
          "id": "sie-11-q7",
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
          "id": "sie-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor selection\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the vendor selection control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the vendor selection control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-11-q9",
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
          "id": "sie-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor selection\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vendor selection, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-12",
    "order": 12,
    "title": "Contract, SLA, commercial risk",
    "subtitle": "Agentic technical & privacy audit of the contract, sla, commercial risk control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Contract, SLA, commercial risk\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Contract, SLA, commercial risk\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the contract, sla, commercial risk control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-12-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Contract, SLA, commercial risk",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Contract, SLA, commercial risk\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the contract, sla, commercial risk control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Contract, SLA, commercial risk\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the contract, sla, commercial risk control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Contract, SLA, commercial risk\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_contract_sla_commercial_risk_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_contract_sla_commercial_risk_mcp.py` to expose it to your agent — or `python 12_contract_sla_commercial_risk_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Contract, SLA, commercial risk\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the contract, sla, commercial risk control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Contract, SLA, commercial risk\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the contract, sla, commercial risk control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_contract_sla_commercial_risk_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/12_contract_sla_commercial_risk_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Contract, SLA, commercial risk\" (in-scope inventory for the contract, sla, commercial risk control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Contract, SLA, commercial risk\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Contract, SLA, commercial risk\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the contract, sla, commercial risk control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Contract, SLA, commercial risk\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Contract, SLA, commercial risk\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the contract, sla, commercial risk control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Contract, SLA, commercial risk\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Contract, SLA, commercial risk\" control must cover\n# fragment: contract_sla_commercial_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "contract_sla_commercial_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Contract, SLA, commercial risk\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the contract, sla, commercial risk control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the contract, sla, commercial risk control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for contract, sla, commercial risk against comparable organisations in the sector",
            "Obtain evidence that the contract, sla, commercial risk control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Contract, SLA, commercial risk\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Contract, SLA, commercial risk\" control?",
          "options": [
            "A point-in-time screenshot of one system's contract, sla, commercial risk settings, captured during the walkthrough",
            "The In-scope inventory for the contract, sla, commercial risk control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the contract, sla, commercial risk control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's contract, sla, commercial risk capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Contract, SLA, commercial risk\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how contract, sla, commercial risk works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Contract, SLA, commercial risk\"?",
          "options": [
            "The external audit firm, since it is the party examining the contract, sla, commercial risk control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the contract, sla, commercial risk data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Contract, SLA, commercial risk\", which part stays with the human auditor?",
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
          "id": "sie-12-q7",
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
          "id": "sie-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Contract, SLA, commercial risk\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the contract, sla, commercial risk control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the contract, sla, commercial risk control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-12-q9",
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
          "id": "sie-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Contract, SLA, commercial risk\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind contract, sla, commercial risk, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-13",
    "order": 13,
    "title": "Escrow agreement for source code",
    "subtitle": "Agentic technical & privacy audit of the escrow agreement for source code control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Escrow agreement for source code\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Escrow agreement for source code\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the escrow agreement for source code control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-13-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Escrow agreement for source code",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Escrow agreement for source code\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the escrow agreement for source code control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Escrow agreement for source code\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the escrow agreement for source code control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Escrow agreement for source code\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_escrow_agreement_for_source_code_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_escrow_agreement_for_source_code_mcp.py` to expose it to your agent — or `python 13_escrow_agreement_for_source_code_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Escrow agreement for source code\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the escrow agreement for source code control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Escrow agreement for source code\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the escrow agreement for source code control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_escrow_agreement_for_source_code_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/13_escrow_agreement_for_source_code_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Escrow agreement for source code\" (in-scope inventory for the escrow agreement for source code control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Escrow agreement for source code\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Escrow agreement for source code\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the escrow agreement for source code control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Escrow agreement for source code\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Escrow agreement for source code\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the escrow agreement for source code control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Escrow agreement for source code\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Escrow agreement for source code\" control must cover\n# fragment: escrow_agreement_source_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "escrow_agreement_source_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Escrow agreement for source code\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the escrow agreement for source code control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the escrow agreement for source code control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for escrow agreement for source code against comparable organisations in the sector",
            "Obtain evidence that the escrow agreement for source code control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Escrow agreement for source code\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Escrow agreement for source code\" control?",
          "options": [
            "A point-in-time screenshot of one system's escrow agreement for source code settings, captured during the walkthrough",
            "The In-scope inventory for the escrow agreement for source code control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the escrow agreement for source code control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's escrow agreement for source code capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Escrow agreement for source code\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how escrow agreement for source code works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Escrow agreement for source code\"?",
          "options": [
            "The external audit firm, since it is the party examining the escrow agreement for source code control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the escrow agreement for source code data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Escrow agreement for source code\", which part stays with the human auditor?",
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
          "id": "sie-13-q7",
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
          "id": "sie-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Escrow agreement for source code\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the escrow agreement for source code control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the escrow agreement for source code control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-13-q9",
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
          "id": "sie-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Escrow agreement for source code\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind escrow agreement for source code, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-14",
    "order": 14,
    "title": "Business case, ROI",
    "subtitle": "Agentic technical & privacy audit of the business case, roi control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Business case, ROI\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Business case, ROI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the business case, roi control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-14-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Business case, ROI",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Business case, ROI\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the business case, roi control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Business case, ROI\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the business case, roi control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Business case, ROI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_business_case_roi_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 14_business_case_roi_mcp.py` to expose it to your agent — or `python 14_business_case_roi_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Business case, ROI\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the business case, roi control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Business case, ROI\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the business case, roi control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "14_business_case_roi_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/14_business_case_roi_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Business case, ROI\" (in-scope inventory for the business case, roi control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Business case, ROI\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Business case, ROI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the business case, roi control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Business case, ROI\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Business case, ROI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the business case, roi control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Business case, ROI\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Business case, ROI\" control must cover\n# fragment: business_case_roi_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "business_case_roi_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-14-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Business case, ROI\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the business case, roi control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the business case, roi control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for business case, roi against comparable organisations in the sector",
            "Obtain evidence that the business case, roi control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Business case, ROI\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Business case, ROI\" control?",
          "options": [
            "A point-in-time screenshot of one system's business case, roi settings, captured during the walkthrough",
            "The In-scope inventory for the business case, roi control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the business case, roi control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's business case, roi capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Business case, ROI\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how business case, roi works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Business case, ROI\"?",
          "options": [
            "The external audit firm, since it is the party examining the business case, roi control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the business case, roi data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Business case, ROI\", which part stays with the human auditor?",
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
          "id": "sie-14-q7",
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
          "id": "sie-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Business case, ROI\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the business case, roi control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the business case, roi control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-14-q9",
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
          "id": "sie-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Business case, ROI\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind business case, roi, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-15",
    "order": 15,
    "title": "Training, change mgmt, knowledge transfer",
    "subtitle": "Agentic technical & privacy audit of the training, change mgmt, knowledge transfer control",
    "category": "cybersecurity",
    "xp": 120,
    "easeScore": 7,
    "valueScore": 6,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Training, change mgmt, knowledge transfer\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Training, change mgmt, knowledge transfer\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the training, change mgmt, knowledge transfer control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 6/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-15-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Training, change mgmt, knowledge transfer",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Training, change mgmt, knowledge transfer\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the training, change mgmt, knowledge transfer control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Training, change mgmt, knowledge transfer\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the training, change mgmt, knowledge transfer control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Training, change mgmt, knowledge transfer\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_training_change_mgmt_knowledge_transfer_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 15_training_change_mgmt_knowledge_transfer_mcp.py` to expose it to your agent — or `python 15_training_change_mgmt_knowledge_transfer_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Training, change mgmt, knowledge transfer\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the training, change mgmt, knowledge transfer control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Training, change mgmt, knowledge transfer\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the training, change mgmt, knowledge transfer control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "15_training_change_mgmt_knowledge_transfer_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/15_training_change_mgmt_knowledge_transfer_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Training, change mgmt, knowledge transfer\" (in-scope inventory for the training, change mgmt, knowledge transfer control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Training, change mgmt, knowledge transfer\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Training, change mgmt, knowledge transfer\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the training, change mgmt, knowledge transfer control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Training, change mgmt, knowledge transfer\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Training, change mgmt, knowledge transfer\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the training, change mgmt, knowledge transfer control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Training, change mgmt, knowledge transfer\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Training, change mgmt, knowledge transfer\" control must cover\n# fragment: training_change_mgmt_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "training_change_mgmt_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-15-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Training, change mgmt, knowledge transfer\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the training, change mgmt, knowledge transfer control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the training, change mgmt, knowledge transfer control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for training, change mgmt, knowledge transfer against comparable organisations in the sector",
            "Obtain evidence that the training, change mgmt, knowledge transfer control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-15-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Training, change mgmt, knowledge transfer\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-15-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Training, change mgmt, knowledge transfer\" control?",
          "options": [
            "A point-in-time screenshot of one system's training, change mgmt, knowledge transfer settings, captured during the walkthrough",
            "The In-scope inventory for the training, change mgmt, knowledge transfer control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the training, change mgmt, knowledge transfer control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's training, change mgmt, knowledge transfer capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-15-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Training, change mgmt, knowledge transfer\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how training, change mgmt, knowledge transfer works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-15-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Training, change mgmt, knowledge transfer\"?",
          "options": [
            "The external audit firm, since it is the party examining the training, change mgmt, knowledge transfer control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the training, change mgmt, knowledge transfer data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-15-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Training, change mgmt, knowledge transfer\", which part stays with the human auditor?",
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
          "id": "sie-15-q7",
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
          "id": "sie-15-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Training, change mgmt, knowledge transfer\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the training, change mgmt, knowledge transfer control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the training, change mgmt, knowledge transfer control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-15-q9",
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
          "id": "sie-15-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Training, change mgmt, knowledge transfer\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind training, change mgmt, knowledge transfer, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-16",
    "order": 16,
    "title": "Data governance and MDM",
    "subtitle": "Agentic technical & privacy audit of the data governance and mdm control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data governance and MDM\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Data governance and MDM\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data governance and mdm control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-16-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Data governance and MDM",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data governance and MDM\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data governance and mdm control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Data governance and MDM\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data governance and mdm control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Data governance and MDM\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `16_data_governance_and_mdm_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 16_data_governance_and_mdm_mcp.py` to expose it to your agent — or `python 16_data_governance_and_mdm_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data governance and MDM\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data governance and mdm control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Data governance and MDM\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data governance and mdm control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "16_data_governance_and_mdm_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/16_data_governance_and_mdm_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Data governance and MDM\" (in-scope inventory for the data governance and mdm control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data governance and MDM\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Data governance and MDM\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data governance and mdm control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Data governance and MDM\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Data governance and MDM\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the data governance and mdm control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data governance and MDM\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data governance and MDM\" control must cover\n# fragment: data_governance_mdm_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "data_governance_mdm_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-16-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data governance and MDM\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the data governance and mdm control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data governance and mdm control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data governance and mdm against comparable organisations in the sector",
            "Obtain evidence that the data governance and mdm control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-16-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data governance and MDM\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-16-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data governance and MDM\" control?",
          "options": [
            "A point-in-time screenshot of one system's data governance and mdm settings, captured during the walkthrough",
            "The In-scope inventory for the data governance and mdm control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data governance and mdm control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data governance and mdm capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-16-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data governance and MDM\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data governance and mdm works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-16-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data governance and MDM\"?",
          "options": [
            "The external audit firm, since it is the party examining the data governance and mdm control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data governance and mdm data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-16-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data governance and MDM\", which part stays with the human auditor?",
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
          "id": "sie-16-q7",
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
          "id": "sie-16-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data governance and MDM\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the data governance and mdm control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data governance and mdm control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-16-q9",
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
          "id": "sie-16-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data governance and MDM\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data governance and mdm, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-17",
    "order": 17,
    "title": "Security and access control design",
    "subtitle": "Agentic technical & privacy audit of the security and access control design control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Security and access control design\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Security and access control design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the security and access control design control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-17-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Security and access control design",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Security and access control design\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the security and access control design control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Security and access control design\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the security and access control design control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Security and access control design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `17_security_and_access_control_design_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 17_security_and_access_control_design_mcp.py` to expose it to your agent — or `python 17_security_and_access_control_design_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Security and access control design\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the security and access control design control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Security and access control design\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the security and access control design control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "17_security_and_access_control_design_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/17_security_and_access_control_design_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Security and access control design\" (in-scope inventory for the security and access control design control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security and access control design\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Security and access control design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the security and access control design control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Security and access control design\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Security and access control design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the security and access control design control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Security and access control design\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Security and access control design\" control must cover\n# fragment: security_access_control_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "security_access_control_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-17-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Security and access control design\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the security and access control design control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the security and access control design control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for security and access control design against comparable organisations in the sector",
            "Obtain evidence that the security and access control design control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-17-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Security and access control design\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-17-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Security and access control design\" control?",
          "options": [
            "A point-in-time screenshot of one system's security and access control design settings, captured during the walkthrough",
            "The In-scope inventory for the security and access control design control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the security and access control design control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's security and access control design capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-17-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Security and access control design\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how security and access control design works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-17-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Security and access control design\"?",
          "options": [
            "The external audit firm, since it is the party examining the security and access control design control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the security and access control design data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-17-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Security and access control design\", which part stays with the human auditor?",
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
          "id": "sie-17-q7",
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
          "id": "sie-17-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Security and access control design\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the security and access control design control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the security and access control design control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-17-q9",
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
          "id": "sie-17-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Security and access control design\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind security and access control design, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-18",
    "order": 18,
    "title": "Business continuity / resilience",
    "subtitle": "Agentic technical & privacy audit of the business continuity / resilience control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Business continuity / resilience\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Business continuity / resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the business continuity / resilience control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-18-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Business continuity / resilience",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Business continuity / resilience\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the business continuity / resilience control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Business continuity / resilience\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the business continuity / resilience control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Business continuity / resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `18_business_continuity_resilience_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 18_business_continuity_resilience_mcp.py` to expose it to your agent — or `python 18_business_continuity_resilience_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Business continuity / resilience\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the business continuity / resilience control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Business continuity / resilience\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the business continuity / resilience control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "18_business_continuity_resilience_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/18_business_continuity_resilience_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Business continuity / resilience\" (in-scope inventory for the business continuity / resilience control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Business continuity / resilience\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Business continuity / resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the business continuity / resilience control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Business continuity / resilience\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Business continuity / resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the business continuity / resilience control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Business continuity / resilience\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Business continuity / resilience\" control must cover\n# fragment: business_continuity_resilience_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "business_continuity_resilience_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-18-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Business continuity / resilience\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the business continuity / resilience control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the business continuity / resilience control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for business continuity / resilience against comparable organisations in the sector",
            "Obtain evidence that the business continuity / resilience control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-18-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Business continuity / resilience\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-18-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Business continuity / resilience\" control?",
          "options": [
            "A point-in-time screenshot of one system's business continuity / resilience settings, captured during the walkthrough",
            "The In-scope inventory for the business continuity / resilience control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the business continuity / resilience control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's business continuity / resilience capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-18-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Business continuity / resilience\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how business continuity / resilience works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-18-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Business continuity / resilience\"?",
          "options": [
            "The external audit firm, since it is the party examining the business continuity / resilience control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the business continuity / resilience data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-18-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Business continuity / resilience\", which part stays with the human auditor?",
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
          "id": "sie-18-q7",
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
          "id": "sie-18-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Business continuity / resilience\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the business continuity / resilience control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the business continuity / resilience control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-18-q9",
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
          "id": "sie-18-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Business continuity / resilience\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind business continuity / resilience, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-19",
    "order": 19,
    "title": "Regulatory / compliance alignment",
    "subtitle": "Agentic technical & privacy audit of the regulatory / compliance alignment control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Regulatory / compliance alignment\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Regulatory / compliance alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the regulatory / compliance alignment control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-19-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Regulatory / compliance alignment",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Regulatory / compliance alignment\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the regulatory / compliance alignment control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Regulatory / compliance alignment\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the regulatory / compliance alignment control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Regulatory / compliance alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `19_regulatory_compliance_alignment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 19_regulatory_compliance_alignment_mcp.py` to expose it to your agent — or `python 19_regulatory_compliance_alignment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Regulatory / compliance alignment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the regulatory / compliance alignment control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Regulatory / compliance alignment\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the regulatory / compliance alignment control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "19_regulatory_compliance_alignment_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/19_regulatory_compliance_alignment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Regulatory / compliance alignment\" (in-scope inventory for the regulatory / compliance alignment control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Regulatory / compliance alignment\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Regulatory / compliance alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the regulatory / compliance alignment control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Regulatory / compliance alignment\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Regulatory / compliance alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the regulatory / compliance alignment control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Regulatory / compliance alignment\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Regulatory / compliance alignment\" control must cover\n# fragment: regulatory_compliance_alignment_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "regulatory_compliance_alignment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-19-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Regulatory / compliance alignment\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the regulatory / compliance alignment control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the regulatory / compliance alignment control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for regulatory / compliance alignment against comparable organisations in the sector",
            "Obtain evidence that the regulatory / compliance alignment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-19-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Regulatory / compliance alignment\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-19-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Regulatory / compliance alignment\" control?",
          "options": [
            "A point-in-time screenshot of one system's regulatory / compliance alignment settings, captured during the walkthrough",
            "The In-scope inventory for the regulatory / compliance alignment control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the regulatory / compliance alignment control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's regulatory / compliance alignment capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-19-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Regulatory / compliance alignment\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how regulatory / compliance alignment works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-19-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Regulatory / compliance alignment\"?",
          "options": [
            "The external audit firm, since it is the party examining the regulatory / compliance alignment control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the regulatory / compliance alignment data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-19-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Regulatory / compliance alignment\", which part stays with the human auditor?",
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
          "id": "sie-19-q7",
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
          "id": "sie-19-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Regulatory / compliance alignment\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the regulatory / compliance alignment control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the regulatory / compliance alignment control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-19-q9",
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
          "id": "sie-19-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Regulatory / compliance alignment\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind regulatory / compliance alignment, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-20",
    "order": 20,
    "title": "Infra and capacity planning",
    "subtitle": "Agentic technical & privacy audit of the infra and capacity planning control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Infra and capacity planning\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Infra and capacity planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the infra and capacity planning control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-20-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Infra and capacity planning",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Infra and capacity planning\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the infra and capacity planning control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Infra and capacity planning\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the infra and capacity planning control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Infra and capacity planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `20_infra_and_capacity_planning_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 20_infra_and_capacity_planning_mcp.py` to expose it to your agent — or `python 20_infra_and_capacity_planning_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Infra and capacity planning\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the infra and capacity planning control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Infra and capacity planning\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the infra and capacity planning control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "20_infra_and_capacity_planning_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/20_infra_and_capacity_planning_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Infra and capacity planning\" (in-scope inventory for the infra and capacity planning control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Infra and capacity planning\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Infra and capacity planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the infra and capacity planning control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Infra and capacity planning\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"Infra and capacity planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the infra and capacity planning control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Infra and capacity planning\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Infra and capacity planning\" control must cover\n# fragment: infra_capacity_planning_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "infra_capacity_planning_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-20-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Infra and capacity planning\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the infra and capacity planning control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the infra and capacity planning control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for infra and capacity planning against comparable organisations in the sector",
            "Obtain evidence that the infra and capacity planning control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-20-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Infra and capacity planning\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-20-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Infra and capacity planning\" control?",
          "options": [
            "A point-in-time screenshot of one system's infra and capacity planning settings, captured during the walkthrough",
            "The In-scope inventory for the infra and capacity planning control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the infra and capacity planning control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's infra and capacity planning capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-20-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Infra and capacity planning\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how infra and capacity planning works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-20-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Infra and capacity planning\"?",
          "options": [
            "The external audit firm, since it is the party examining the infra and capacity planning control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the infra and capacity planning data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-20-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Infra and capacity planning\", which part stays with the human auditor?",
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
          "id": "sie-20-q7",
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
          "id": "sie-20-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Infra and capacity planning\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the infra and capacity planning control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the infra and capacity planning control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-20-q9",
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
          "id": "sie-20-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Infra and capacity planning\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind infra and capacity planning, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-21",
    "order": 21,
    "title": "PIR / lessons learned",
    "subtitle": "Agentic technical & privacy audit of the pir / lessons learned control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"PIR / lessons learned\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"PIR / lessons learned\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; Enterprise architecture repository; Test management (E2E/UAT)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the pir / lessons learned control (from PPM / PMO tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "PPM / PMO tooling",
        "Enterprise architecture repository",
        "Test management (E2E/UAT)",
        "Vendor + contract management"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Enterprise architecture",
        "Business process owners",
        "Procurement / Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-21-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "PIR / lessons learned",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"PIR / lessons learned\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the pir / lessons learned control (from PPM / PMO tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"PIR / lessons learned\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the pir / lessons learned control (from PPM / PMO tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"PIR / lessons learned\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `21_pir_lessons_learned_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and Enterprise architecture repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 21_pir_lessons_learned_mcp.py` to expose it to your agent — or `python 21_pir_lessons_learned_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · Enterprise architecture repository",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"PIR / lessons learned\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the pir / lessons learned control (from PPM / PMO tooling).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"PIR / lessons learned\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (PPM / PMO tooling, Enterprise architecture repository, Test management (E2E/UAT)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the pir / lessons learned control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA — project assurance / IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "21_pir_lessons_learned_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/21_pir_lessons_learned_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"PIR / lessons learned\" (in-scope inventory for the pir / lessons learned control (from ppm / pmo tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"PIR / lessons learned\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"PIR / lessons learned\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the pir / lessons learned control (from PPM / PMO tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"PIR / lessons learned\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Enterprise policy/standard and flag every item where the \"PIR / lessons learned\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — In-scope inventory for the pir / lessons learned control (from PPM / PMO tooling))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"PIR / lessons learned\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"PIR / lessons learned\" control must cover\n# fragment: pir_lessons_learned_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "pir_lessons_learned_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-21-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"PIR / lessons learned\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the pir / lessons learned control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the pir / lessons learned control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for pir / lessons learned against comparable organisations in the sector",
            "Obtain evidence that the pir / lessons learned control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-21-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"PIR / lessons learned\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-21-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"PIR / lessons learned\" control?",
          "options": [
            "A point-in-time screenshot of one system's pir / lessons learned settings, captured during the walkthrough",
            "The In-scope inventory for the pir / lessons learned control (from PPM / PMO tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the pir / lessons learned control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's pir / lessons learned capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-21-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"PIR / lessons learned\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how pir / lessons learned works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-21-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"PIR / lessons learned\"?",
          "options": [
            "The external audit firm, since it is the party examining the pir / lessons learned control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the pir / lessons learned data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-21-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"PIR / lessons learned\", which part stays with the human auditor?",
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
          "id": "sie-21-q7",
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
          "id": "sie-21-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"PIR / lessons learned\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the pir / lessons learned control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the pir / lessons learned control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-21-q9",
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
          "id": "sie-21-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"PIR / lessons learned\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind pir / lessons learned, so there is no overlap",
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
