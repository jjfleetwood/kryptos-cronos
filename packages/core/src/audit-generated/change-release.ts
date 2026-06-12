import type { EpochConfig, StageConfig } from "../types";

export const changeReleaseEpoch: EpochConfig = {
  "id": "change-release",
  "name": "Change, Release & Configuration Management",
  "subtitle": "Agentic technical & privacy audit — Change, Release & Configuration Management",
  "description": "Audit Change, Release & Configuration Management end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🔁",
  "color": "Orange",
  "unlocked": true
};

export const changeReleaseStages: StageConfig[] = [
  {
    "epochId": "change-release",
    "id": "crc-01",
    "order": 1,
    "title": "Change approvals and SoD",
    "subtitle": "Agentic technical & privacy audit of the change approvals and sod control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Change approvals and SoD\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Change approvals and SoD\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM change tooling (ServiceNow); Release/deploy pipeline; Configuration baseline (CMDB)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the change approvals and sod control (from ITSM change tooling (ServiceNow))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ITSM change tooling (ServiceNow)",
        "Release/deploy pipeline",
        "Configuration baseline (CMDB)",
        "Change audit log"
      ],
      "dataOwner": [
        "Change Advisory Board / IT Ops",
        "Release management",
        "Application owners",
        "Security engineering"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-01-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Change approvals and SoD",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Change approvals and SoD\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the change approvals and sod control (from ITSM change tooling (ServiceNow))) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Change approvals and SoD\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the change approvals and sod control (from ITSM change tooling (ServiceNow)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Change approvals and SoD\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_change_approvals_and_sod_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM change tooling (ServiceNow) and Release/deploy pipeline (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_change_approvals_and_sod_mcp.py` to expose it to your agent — or `python 01_change_approvals_and_sod_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM change tooling (ServiceNow) · Release/deploy pipeline",
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
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Change approvals and SoD\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the change approvals and sod control (from ITSM change tooling (ServiceNow)).",
        "The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Change approvals and SoD\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the change approvals and sod control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-128 — Configuration Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "CIS Control 4 — Secure Configuration",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_change_approvals_and_sod_mcp.py",
          "url": "/audit-code/change-release/01_change_approvals_and_sod_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Change approvals and SoD\" (in-scope inventory for the change approvals and sod control (from itsm change tooling (servicenow))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Change approvals and SoD\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Change approvals and SoD\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the change approvals and sod control (from ITSM change tooling (ServiceNow)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM change tooling (ServiceNow) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM change tooling (ServiceNow) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM change tooling (ServiceNow); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Change approvals and SoD\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Change approvals and SoD\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — In-scope inventory for the change approvals and sod control (from ITSM change tooling (ServiceNow)))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Change approvals and SoD\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Change approvals and SoD\" control must cover\n# fragment: change_approvals_sod_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "change_approvals_sod_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Change approvals and SoD\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the change approvals and sod control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the change approvals and sod control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for change approvals and sod against comparable organisations in the sector",
            "Obtain evidence that the change approvals and sod control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Change approvals and SoD\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Change approvals and SoD\" control?",
          "options": [
            "A point-in-time screenshot of one system's change approvals and sod settings, captured during the walkthrough",
            "The In-scope inventory for the change approvals and sod control (from ITSM change tooling (ServiceNow)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the change approvals and sod control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's change approvals and sod capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Change approvals and SoD\"?",
          "options": [
            "From ITSM change tooling (ServiceNow) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how change approvals and sod works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM change tooling (ServiceNow)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Change approvals and SoD\"?",
          "options": [
            "The external audit firm, since it is the party examining the change approvals and sod control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the change approvals and sod data is shared, so the accountability sits with no one in particular",
            "Change Advisory Board / IT Ops, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change Advisory Board / IT Ops owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Change approvals and SoD\", which part stays with the human auditor?",
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
          "id": "crc-01-q7",
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
          "id": "crc-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Change approvals and SoD\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the change approvals and sod control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the change approvals and sod control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-01-q9",
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
          "id": "crc-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Change approvals and SoD\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind change approvals and sod, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-02",
    "order": 2,
    "title": "Emergency change process",
    "subtitle": "Agentic technical & privacy audit of the emergency change process control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Emergency change process\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Emergency change process\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM change tooling (ServiceNow); Release/deploy pipeline; Configuration baseline (CMDB)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the emergency change process control (from ITSM change tooling (ServiceNow))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ITSM change tooling (ServiceNow)",
        "Release/deploy pipeline",
        "Configuration baseline (CMDB)",
        "Change audit log"
      ],
      "dataOwner": [
        "Change Advisory Board / IT Ops",
        "Release management",
        "Application owners",
        "Security engineering"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-02-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Emergency change process",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Emergency change process\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the emergency change process control (from ITSM change tooling (ServiceNow))) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Emergency change process\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the emergency change process control (from ITSM change tooling (ServiceNow)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Emergency change process\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_emergency_change_process_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM change tooling (ServiceNow) and Release/deploy pipeline (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_emergency_change_process_mcp.py` to expose it to your agent — or `python 02_emergency_change_process_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM change tooling (ServiceNow) · Release/deploy pipeline",
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
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Emergency change process\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the emergency change process control (from ITSM change tooling (ServiceNow)).",
        "The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Emergency change process\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the emergency change process control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-128 — Configuration Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "CIS Control 4 — Secure Configuration",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_emergency_change_process_mcp.py",
          "url": "/audit-code/change-release/02_emergency_change_process_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Emergency change process\" (in-scope inventory for the emergency change process control (from itsm change tooling (servicenow))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Emergency change process\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Emergency change process\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the emergency change process control (from ITSM change tooling (ServiceNow)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM change tooling (ServiceNow) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM change tooling (ServiceNow) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM change tooling (ServiceNow); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Emergency change process\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Emergency change process\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — In-scope inventory for the emergency change process control (from ITSM change tooling (ServiceNow)))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Emergency change process\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Emergency change process\" control must cover\n# fragment: emergency_change_process_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "emergency_change_process_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Emergency change process\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the emergency change process control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the emergency change process control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for emergency change process against comparable organisations in the sector",
            "Obtain evidence that the emergency change process control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Emergency change process\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Emergency change process\" control?",
          "options": [
            "A point-in-time screenshot of one system's emergency change process settings, captured during the walkthrough",
            "The In-scope inventory for the emergency change process control (from ITSM change tooling (ServiceNow)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the emergency change process control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's emergency change process capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Emergency change process\"?",
          "options": [
            "From ITSM change tooling (ServiceNow) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how emergency change process works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM change tooling (ServiceNow)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Emergency change process\"?",
          "options": [
            "The external audit firm, since it is the party examining the emergency change process control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the emergency change process data is shared, so the accountability sits with no one in particular",
            "Change Advisory Board / IT Ops, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change Advisory Board / IT Ops owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Emergency change process\", which part stays with the human auditor?",
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
          "id": "crc-02-q7",
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
          "id": "crc-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Emergency change process\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the emergency change process control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the emergency change process control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-02-q9",
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
          "id": "crc-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Emergency change process\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind emergency change process, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-03",
    "order": 3,
    "title": "Release planning & backout",
    "subtitle": "Agentic technical & privacy audit of the release planning & backout control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Release planning & backout\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Release planning & backout\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM change tooling (ServiceNow); Release/deploy pipeline; Configuration baseline (CMDB)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the release planning & backout control (from ITSM change tooling (ServiceNow))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ITSM change tooling (ServiceNow)",
        "Release/deploy pipeline",
        "Configuration baseline (CMDB)",
        "Change audit log"
      ],
      "dataOwner": [
        "Change Advisory Board / IT Ops",
        "Release management",
        "Application owners",
        "Security engineering"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-03-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Release planning & backout",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Release planning & backout\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the release planning & backout control (from ITSM change tooling (ServiceNow))) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Release planning & backout\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the release planning & backout control (from ITSM change tooling (ServiceNow)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Release planning & backout\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_release_planning_backout_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM change tooling (ServiceNow) and Release/deploy pipeline (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_release_planning_backout_mcp.py` to expose it to your agent — or `python 03_release_planning_backout_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM change tooling (ServiceNow) · Release/deploy pipeline",
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
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Release planning & backout\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the release planning & backout control (from ITSM change tooling (ServiceNow)).",
        "The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Release planning & backout\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the release planning & backout control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-128 — Configuration Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "CIS Control 4 — Secure Configuration",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_release_planning_backout_mcp.py",
          "url": "/audit-code/change-release/03_release_planning_backout_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Release planning & backout\" (in-scope inventory for the release planning & backout control (from itsm change tooling (servicenow))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Release planning & backout\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Release planning & backout\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the release planning & backout control (from ITSM change tooling (ServiceNow)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM change tooling (ServiceNow) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM change tooling (ServiceNow) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM change tooling (ServiceNow); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Release planning & backout\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Release planning & backout\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — In-scope inventory for the release planning & backout control (from ITSM change tooling (ServiceNow)))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Release planning & backout\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Release planning & backout\" control must cover\n# fragment: release_planning_backout_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "release_planning_backout_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Release planning & backout\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the release planning & backout control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the release planning & backout control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for release planning & backout against comparable organisations in the sector",
            "Obtain evidence that the release planning & backout control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Release planning & backout\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Release planning & backout\" control?",
          "options": [
            "A point-in-time screenshot of one system's release planning & backout settings, captured during the walkthrough",
            "The In-scope inventory for the release planning & backout control (from ITSM change tooling (ServiceNow)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the release planning & backout control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's release planning & backout capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Release planning & backout\"?",
          "options": [
            "From ITSM change tooling (ServiceNow) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how release planning & backout works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM change tooling (ServiceNow)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Release planning & backout\"?",
          "options": [
            "The external audit firm, since it is the party examining the release planning & backout control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the release planning & backout data is shared, so the accountability sits with no one in particular",
            "Change Advisory Board / IT Ops, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change Advisory Board / IT Ops owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Release planning & backout\", which part stays with the human auditor?",
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
          "id": "crc-03-q7",
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
          "id": "crc-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Release planning & backout\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the release planning & backout control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the release planning & backout control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-03-q9",
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
          "id": "crc-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Release planning & backout\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind release planning & backout, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-04",
    "order": 4,
    "title": "Configuration management",
    "subtitle": "Agentic technical & privacy audit of the configuration management control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Configuration management\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Configuration management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM change tooling (ServiceNow); Release/deploy pipeline; Configuration baseline (CMDB)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the configuration management control (from ITSM change tooling (ServiceNow))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ITSM change tooling (ServiceNow)",
        "Release/deploy pipeline",
        "Configuration baseline (CMDB)",
        "Change audit log"
      ],
      "dataOwner": [
        "Change Advisory Board / IT Ops",
        "Release management",
        "Application owners",
        "Security engineering"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-04-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Configuration management",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Configuration management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the configuration management control (from ITSM change tooling (ServiceNow))) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Configuration management\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the configuration management control (from ITSM change tooling (ServiceNow)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Configuration management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_configuration_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM change tooling (ServiceNow) and Release/deploy pipeline (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_configuration_management_mcp.py` to expose it to your agent — or `python 04_configuration_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM change tooling (ServiceNow) · Release/deploy pipeline",
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
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Configuration management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the configuration management control (from ITSM change tooling (ServiceNow)).",
        "The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Configuration management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the configuration management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-128 — Configuration Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "CIS Control 4 — Secure Configuration",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_configuration_management_mcp.py",
          "url": "/audit-code/change-release/04_configuration_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Configuration management\" (in-scope inventory for the configuration management control (from itsm change tooling (servicenow))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Configuration management\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Configuration management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the configuration management control (from ITSM change tooling (ServiceNow)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM change tooling (ServiceNow) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM change tooling (ServiceNow) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM change tooling (ServiceNow); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Configuration management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Configuration management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — In-scope inventory for the configuration management control (from ITSM change tooling (ServiceNow)))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Configuration management\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Configuration management\" control must cover\n# fragment: configuration_management_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "configuration_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Configuration management\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the configuration management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the configuration management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for configuration management against comparable organisations in the sector",
            "Obtain evidence that the configuration management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Configuration management\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Configuration management\" control?",
          "options": [
            "A point-in-time screenshot of one system's configuration management settings, captured during the walkthrough",
            "The In-scope inventory for the configuration management control (from ITSM change tooling (ServiceNow)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the configuration management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's configuration management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Configuration management\"?",
          "options": [
            "From ITSM change tooling (ServiceNow) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how configuration management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM change tooling (ServiceNow)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Configuration management\"?",
          "options": [
            "The external audit firm, since it is the party examining the configuration management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the configuration management data is shared, so the accountability sits with no one in particular",
            "Change Advisory Board / IT Ops, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change Advisory Board / IT Ops owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Configuration management\", which part stays with the human auditor?",
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
          "id": "crc-04-q7",
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
          "id": "crc-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Configuration management\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the configuration management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the configuration management control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-04-q9",
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
          "id": "crc-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Configuration management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind configuration management, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-05",
    "order": 5,
    "title": "Baseline enforcement",
    "subtitle": "Agentic technical & privacy audit of the baseline enforcement control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Baseline enforcement\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Baseline enforcement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM change tooling (ServiceNow); Release/deploy pipeline; Configuration baseline (CMDB)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the baseline enforcement control (from ITSM change tooling (ServiceNow))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ITSM change tooling (ServiceNow)",
        "Release/deploy pipeline",
        "Configuration baseline (CMDB)",
        "Change audit log"
      ],
      "dataOwner": [
        "Change Advisory Board / IT Ops",
        "Release management",
        "Application owners",
        "Security engineering"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-05-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Baseline enforcement",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Baseline enforcement\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the baseline enforcement control (from ITSM change tooling (ServiceNow))) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Baseline enforcement\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the baseline enforcement control (from ITSM change tooling (ServiceNow)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Baseline enforcement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_baseline_enforcement_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM change tooling (ServiceNow) and Release/deploy pipeline (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_baseline_enforcement_mcp.py` to expose it to your agent — or `python 05_baseline_enforcement_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM change tooling (ServiceNow) · Release/deploy pipeline",
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
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Baseline enforcement\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the baseline enforcement control (from ITSM change tooling (ServiceNow)).",
        "The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Baseline enforcement\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the baseline enforcement control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-128 — Configuration Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "CIS Control 4 — Secure Configuration",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_baseline_enforcement_mcp.py",
          "url": "/audit-code/change-release/05_baseline_enforcement_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Baseline enforcement\" (in-scope inventory for the baseline enforcement control (from itsm change tooling (servicenow))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Baseline enforcement\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Baseline enforcement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the baseline enforcement control (from ITSM change tooling (ServiceNow)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM change tooling (ServiceNow) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM change tooling (ServiceNow) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM change tooling (ServiceNow); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Baseline enforcement\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Baseline enforcement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — In-scope inventory for the baseline enforcement control (from ITSM change tooling (ServiceNow)))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Baseline enforcement\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Baseline enforcement\" control must cover\n# fragment: baseline_enforcement_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "baseline_enforcement_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Baseline enforcement\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the baseline enforcement control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the baseline enforcement control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for baseline enforcement against comparable organisations in the sector",
            "Obtain evidence that the baseline enforcement control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Baseline enforcement\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Baseline enforcement\" control?",
          "options": [
            "A point-in-time screenshot of one system's baseline enforcement settings, captured during the walkthrough",
            "The In-scope inventory for the baseline enforcement control (from ITSM change tooling (ServiceNow)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the baseline enforcement control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's baseline enforcement capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Baseline enforcement\"?",
          "options": [
            "From ITSM change tooling (ServiceNow) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how baseline enforcement works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM change tooling (ServiceNow)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Baseline enforcement\"?",
          "options": [
            "The external audit firm, since it is the party examining the baseline enforcement control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the baseline enforcement data is shared, so the accountability sits with no one in particular",
            "Change Advisory Board / IT Ops, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change Advisory Board / IT Ops owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Baseline enforcement\", which part stays with the human auditor?",
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
          "id": "crc-05-q7",
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
          "id": "crc-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Baseline enforcement\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the baseline enforcement control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the baseline enforcement control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-05-q9",
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
          "id": "crc-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Baseline enforcement\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind baseline enforcement, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-06",
    "order": 6,
    "title": "Post-implementation review",
    "subtitle": "Agentic technical & privacy audit of the post-implementation review control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Post-implementation review\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Post-implementation review\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM change tooling (ServiceNow); Release/deploy pipeline; Configuration baseline (CMDB)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the post-implementation review control (from ITSM change tooling (ServiceNow))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ITSM change tooling (ServiceNow)",
        "Release/deploy pipeline",
        "Configuration baseline (CMDB)",
        "Change audit log"
      ],
      "dataOwner": [
        "Change Advisory Board / IT Ops",
        "Release management",
        "Application owners",
        "Security engineering"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-06-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Post-implementation review",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Post-implementation review\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the post-implementation review control (from ITSM change tooling (ServiceNow))) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Post-implementation review\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the post-implementation review control (from ITSM change tooling (ServiceNow)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Post-implementation review\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_post_implementation_review_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM change tooling (ServiceNow) and Release/deploy pipeline (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_post_implementation_review_mcp.py` to expose it to your agent — or `python 06_post_implementation_review_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM change tooling (ServiceNow) · Release/deploy pipeline",
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
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Post-implementation review\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the post-implementation review control (from ITSM change tooling (ServiceNow)).",
        "The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Post-implementation review\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the post-implementation review control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-128 — Configuration Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "CIS Control 4 — Secure Configuration",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_post_implementation_review_mcp.py",
          "url": "/audit-code/change-release/06_post_implementation_review_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Post-implementation review\" (in-scope inventory for the post-implementation review control (from itsm change tooling (servicenow))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Post-implementation review\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Post-implementation review\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the post-implementation review control (from ITSM change tooling (ServiceNow)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM change tooling (ServiceNow) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM change tooling (ServiceNow) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM change tooling (ServiceNow); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Post-implementation review\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Post-implementation review\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — In-scope inventory for the post-implementation review control (from ITSM change tooling (ServiceNow)))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Post-implementation review\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Post-implementation review\" control must cover\n# fragment: postimplementation_review_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "postimplementation_review_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Post-implementation review\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the post-implementation review control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the post-implementation review control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for post-implementation review against comparable organisations in the sector",
            "Obtain evidence that the post-implementation review control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Post-implementation review\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Post-implementation review\" control?",
          "options": [
            "A point-in-time screenshot of one system's post-implementation review settings, captured during the walkthrough",
            "The In-scope inventory for the post-implementation review control (from ITSM change tooling (ServiceNow)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the post-implementation review control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's post-implementation review capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Post-implementation review\"?",
          "options": [
            "From ITSM change tooling (ServiceNow) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how post-implementation review works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM change tooling (ServiceNow)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Post-implementation review\"?",
          "options": [
            "The external audit firm, since it is the party examining the post-implementation review control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the post-implementation review data is shared, so the accountability sits with no one in particular",
            "Change Advisory Board / IT Ops, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change Advisory Board / IT Ops owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Post-implementation review\", which part stays with the human auditor?",
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
          "id": "crc-06-q7",
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
          "id": "crc-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Post-implementation review\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the post-implementation review control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the post-implementation review control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-06-q9",
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
          "id": "crc-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Post-implementation review\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind post-implementation review, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-07",
    "order": 7,
    "title": "Business impact analysis",
    "subtitle": "Agentic technical & privacy audit of the business impact analysis control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Business impact analysis\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Business impact analysis\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM change tooling (ServiceNow); Release/deploy pipeline; Configuration baseline (CMDB)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the business impact analysis control (from ITSM change tooling (ServiceNow))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ITSM change tooling (ServiceNow)",
        "Release/deploy pipeline",
        "Configuration baseline (CMDB)",
        "Change audit log"
      ],
      "dataOwner": [
        "Change Advisory Board / IT Ops",
        "Release management",
        "Application owners",
        "Security engineering"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-07-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Business impact analysis",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Business impact analysis\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the business impact analysis control (from ITSM change tooling (ServiceNow))) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Business impact analysis\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the business impact analysis control (from ITSM change tooling (ServiceNow)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Business impact analysis\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_business_impact_analysis_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM change tooling (ServiceNow) and Release/deploy pipeline (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_business_impact_analysis_mcp.py` to expose it to your agent — or `python 07_business_impact_analysis_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM change tooling (ServiceNow) · Release/deploy pipeline",
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
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Business impact analysis\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the business impact analysis control (from ITSM change tooling (ServiceNow)).",
        "The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Business impact analysis\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the business impact analysis control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-128 — Configuration Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "CIS Control 4 — Secure Configuration",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_business_impact_analysis_mcp.py",
          "url": "/audit-code/change-release/07_business_impact_analysis_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Business impact analysis\" (in-scope inventory for the business impact analysis control (from itsm change tooling (servicenow))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Business impact analysis\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Business impact analysis\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the business impact analysis control (from ITSM change tooling (ServiceNow)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM change tooling (ServiceNow) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM change tooling (ServiceNow) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM change tooling (ServiceNow); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Business impact analysis\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Business impact analysis\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — In-scope inventory for the business impact analysis control (from ITSM change tooling (ServiceNow)))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Business impact analysis\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Business impact analysis\" control must cover\n# fragment: business_impact_analysis_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "business_impact_analysis_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Business impact analysis\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the business impact analysis control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the business impact analysis control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for business impact analysis against comparable organisations in the sector",
            "Obtain evidence that the business impact analysis control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Business impact analysis\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Business impact analysis\" control?",
          "options": [
            "A point-in-time screenshot of one system's business impact analysis settings, captured during the walkthrough",
            "The In-scope inventory for the business impact analysis control (from ITSM change tooling (ServiceNow)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the business impact analysis control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's business impact analysis capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Business impact analysis\"?",
          "options": [
            "From ITSM change tooling (ServiceNow) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how business impact analysis works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM change tooling (ServiceNow)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Business impact analysis\"?",
          "options": [
            "The external audit firm, since it is the party examining the business impact analysis control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the business impact analysis data is shared, so the accountability sits with no one in particular",
            "Change Advisory Board / IT Ops, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change Advisory Board / IT Ops owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Business impact analysis\", which part stays with the human auditor?",
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
          "id": "crc-07-q7",
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
          "id": "crc-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Business impact analysis\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the business impact analysis control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the business impact analysis control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-07-q9",
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
          "id": "crc-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Business impact analysis\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind business impact analysis, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-08",
    "order": 8,
    "title": "Version control",
    "subtitle": "Agentic technical & privacy audit of the version control control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Version control\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Version control\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM change tooling (ServiceNow); Release/deploy pipeline; Configuration baseline (CMDB)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the version control control (from ITSM change tooling (ServiceNow))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ITSM change tooling (ServiceNow)",
        "Release/deploy pipeline",
        "Configuration baseline (CMDB)",
        "Change audit log"
      ],
      "dataOwner": [
        "Change Advisory Board / IT Ops",
        "Release management",
        "Application owners",
        "Security engineering"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-08-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Version control",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Version control\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the version control control (from ITSM change tooling (ServiceNow))) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Version control\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the version control control (from ITSM change tooling (ServiceNow)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Version control\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_version_control_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM change tooling (ServiceNow) and Release/deploy pipeline (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_version_control_mcp.py` to expose it to your agent — or `python 08_version_control_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM change tooling (ServiceNow) · Release/deploy pipeline",
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
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Version control\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the version control control (from ITSM change tooling (ServiceNow)).",
        "The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Version control\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the version control control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-128 — Configuration Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "CIS Control 4 — Secure Configuration",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_version_control_mcp.py",
          "url": "/audit-code/change-release/08_version_control_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Version control\" (in-scope inventory for the version control control (from itsm change tooling (servicenow))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Version control\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Version control\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the version control control (from ITSM change tooling (ServiceNow)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM change tooling (ServiceNow) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM change tooling (ServiceNow) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM change tooling (ServiceNow); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Version control\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Version control\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — In-scope inventory for the version control control (from ITSM change tooling (ServiceNow)))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Version control\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Version control\" control must cover\n# fragment: version_control_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "version_control_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Version control\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the version control control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the version control control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for version control against comparable organisations in the sector",
            "Obtain evidence that the version control control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Version control\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Version control\" control?",
          "options": [
            "A point-in-time screenshot of one system's version control settings, captured during the walkthrough",
            "The In-scope inventory for the version control control (from ITSM change tooling (ServiceNow)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the version control control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's version control capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Version control\"?",
          "options": [
            "From ITSM change tooling (ServiceNow) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how version control works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM change tooling (ServiceNow)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Version control\"?",
          "options": [
            "The external audit firm, since it is the party examining the version control control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the version control data is shared, so the accountability sits with no one in particular",
            "Change Advisory Board / IT Ops, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change Advisory Board / IT Ops owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Version control\", which part stays with the human auditor?",
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
          "id": "crc-08-q7",
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
          "id": "crc-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Version control\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the version control control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the version control control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-08-q9",
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
          "id": "crc-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Version control\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind version control, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-09",
    "order": 9,
    "title": "Roles and responsibilities",
    "subtitle": "Agentic technical & privacy audit of the roles and responsibilities control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Roles and responsibilities\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Roles and responsibilities\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM change tooling (ServiceNow); Release/deploy pipeline; Configuration baseline (CMDB)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the roles and responsibilities control (from ITSM change tooling (ServiceNow))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ITSM change tooling (ServiceNow)",
        "Release/deploy pipeline",
        "Configuration baseline (CMDB)",
        "Change audit log"
      ],
      "dataOwner": [
        "Change Advisory Board / IT Ops",
        "Release management",
        "Application owners",
        "Security engineering"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-09-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Roles and responsibilities",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Roles and responsibilities\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the roles and responsibilities control (from ITSM change tooling (ServiceNow))) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Roles and responsibilities\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the roles and responsibilities control (from ITSM change tooling (ServiceNow)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Roles and responsibilities\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_roles_and_responsibilities_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM change tooling (ServiceNow) and Release/deploy pipeline (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_roles_and_responsibilities_mcp.py` to expose it to your agent — or `python 09_roles_and_responsibilities_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM change tooling (ServiceNow) · Release/deploy pipeline",
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
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Roles and responsibilities\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the roles and responsibilities control (from ITSM change tooling (ServiceNow)).",
        "The test: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Roles and responsibilities\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ITSM change tooling (ServiceNow), Release/deploy pipeline, Configuration baseline (CMDB)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the roles and responsibilities control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-128 — Configuration Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "CIS Control 4 — Secure Configuration",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_roles_and_responsibilities_mcp.py",
          "url": "/audit-code/change-release/09_roles_and_responsibilities_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Roles and responsibilities\" (in-scope inventory for the roles and responsibilities control (from itsm change tooling (servicenow))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Roles and responsibilities\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Roles and responsibilities\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the roles and responsibilities control (from ITSM change tooling (ServiceNow)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM change tooling (ServiceNow) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM change tooling (ServiceNow) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM change tooling (ServiceNow); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Roles and responsibilities\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Change, Release & Configuration Management policy/standard and flag every item where the \"Roles and responsibilities\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — In-scope inventory for the roles and responsibilities control (from ITSM change tooling (ServiceNow)))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Roles and responsibilities\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Roles and responsibilities\" control must cover\n# fragment: roles_responsibilities_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "roles_responsibilities_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Roles and responsibilities\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the roles and responsibilities control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the roles and responsibilities control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for roles and responsibilities against comparable organisations in the sector",
            "Obtain evidence that the roles and responsibilities control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Roles and responsibilities\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Roles and responsibilities\" control?",
          "options": [
            "A point-in-time screenshot of one system's roles and responsibilities settings, captured during the walkthrough",
            "The In-scope inventory for the roles and responsibilities control (from ITSM change tooling (ServiceNow)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the roles and responsibilities control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's roles and responsibilities capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Roles and responsibilities\"?",
          "options": [
            "From ITSM change tooling (ServiceNow) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how roles and responsibilities works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM change tooling (ServiceNow)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Roles and responsibilities\"?",
          "options": [
            "The external audit firm, since it is the party examining the roles and responsibilities control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the roles and responsibilities data is shared, so the accountability sits with no one in particular",
            "Change Advisory Board / IT Ops, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change Advisory Board / IT Ops owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Roles and responsibilities\", which part stays with the human auditor?",
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
          "id": "crc-09-q7",
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
          "id": "crc-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Roles and responsibilities\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the roles and responsibilities control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the roles and responsibilities control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-09-q9",
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
          "id": "crc-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Roles and responsibilities\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind roles and responsibilities, so there is no overlap",
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
