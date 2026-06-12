import type { EpochConfig, StageConfig } from "../types";

export const incidentMgmtEpoch: EpochConfig = {
  "id": "incident-mgmt",
  "name": "Incident Management",
  "subtitle": "Agentic technical & privacy audit — Incident Management",
  "description": "Audit Incident Management end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🚨",
  "color": "Red",
  "unlocked": true
};

export const incidentMgmtStages: StageConfig[] = [
  {
    "epochId": "incident-mgmt",
    "id": "inc-01",
    "order": 1,
    "title": "IR plan, playbooks, tabletop",
    "subtitle": "Agentic technical & privacy audit of the ir plan, playbooks, tabletop control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IR plan, playbooks, tabletop\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each Incident Management source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ir plan, playbooks, tabletop control (from SIEM / SOAR (Sentinel/Splunk))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SIEM / SOAR (Sentinel/Splunk)",
        "IR case management",
        "Forensics + evidence store",
        "On-call / paging (PagerDuty)"
      ],
      "dataOwner": [
        "Security operations / CSIRT",
        "IT operations",
        "Legal & Communications",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-01-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "IR plan, playbooks, tabletop",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"IR plan, playbooks, tabletop\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"IR plan, playbooks, tabletop\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that ir plan, playbooks, tabletop is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically SIEM / SOAR (Sentinel/Splunk), IR case management, Forensics + evidence store — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_ir_plan_playbooks_tabletop_mcp.py` exposes read-only tools that turn each Incident Management source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_ir_plan_playbooks_tabletop_mcp.py` to expose it to your agent — or `python 01_ir_plan_playbooks_tabletop_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SIEM / SOAR (Sentinel/Splunk) · IR case management",
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
          "year": 2017,
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"IR plan, playbooks, tabletop\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"IR plan, playbooks, tabletop\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "NIST SP 800-61 — Incident Handling",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "SANS Incident Handler's Handbook",
          "url": "https://www.sans.org/white-papers/33901/"
        },
        {
          "title": "ISO/IEC 27035 — Incident Management",
          "url": "https://www.iso.org/standard/78973.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_ir_plan_playbooks_tabletop_mcp.py",
          "url": "/audit-code/incident-mgmt/01_ir_plan_playbooks_tabletop_mcp.py",
          "description": "Runnable read-only MCP server: gathers Incident Management evidence for \"IR plan, playbooks, tabletop\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IR plan, playbooks, tabletop\" control for Incident Management at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. SIEM / SOAR (Sentinel/Splunk) is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"IR plan, playbooks, tabletop\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items from SIEM / SOAR (Sentinel/Splunk))\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"IR plan, playbooks, tabletop\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"IR plan, playbooks, tabletop\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"IR plan, playbooks, tabletop\" control must cover\n# fragment: ir_plan_playbooks_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "ir_plan_playbooks_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"IR plan, playbooks, tabletop\" sub-process of Incident Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ir plan, playbooks, tabletop control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "inc-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IR plan, playbooks, tabletop\" matter to the broader Incident Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "inc-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IR plan, playbooks, tabletop\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The IR plan, playbooks, tabletop evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "inc-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"IR plan, playbooks, tabletop\"?",
          "options": [
            "SIEM / SOAR (Sentinel/Splunk) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SIEM / SOAR (Sentinel/Splunk)) via read-only access."
        },
        {
          "id": "inc-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IR plan, playbooks, tabletop\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Security operations / CSIRT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / CSIRT owns the control data; the auditor independently verifies it."
        },
        {
          "id": "inc-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IR plan, playbooks, tabletop\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "inc-01-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "inc-01-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"IR plan, playbooks, tabletop\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "inc-01-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "inc-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IR plan, playbooks, tabletop\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "incident-mgmt",
    "id": "inc-02",
    "order": 2,
    "title": "Incident intake and triage",
    "subtitle": "Agentic technical & privacy audit of the incident intake and triage control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Incident intake and triage\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each Incident Management source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the incident intake and triage control (from SIEM / SOAR (Sentinel/Splunk))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SIEM / SOAR (Sentinel/Splunk)",
        "IR case management",
        "Forensics + evidence store",
        "On-call / paging (PagerDuty)"
      ],
      "dataOwner": [
        "Security operations / CSIRT",
        "IT operations",
        "Legal & Communications",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-02-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "Incident intake and triage",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Incident intake and triage\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"Incident intake and triage\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that incident intake and triage is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically SIEM / SOAR (Sentinel/Splunk), IR case management, Forensics + evidence store — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_incident_intake_and_triage_mcp.py` exposes read-only tools that turn each Incident Management source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_incident_intake_and_triage_mcp.py` to expose it to your agent — or `python 02_incident_intake_and_triage_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SIEM / SOAR (Sentinel/Splunk) · IR case management",
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
          "year": 2017,
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Incident intake and triage\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Incident intake and triage\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "NIST SP 800-61 — Incident Handling",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "SANS Incident Handler's Handbook",
          "url": "https://www.sans.org/white-papers/33901/"
        },
        {
          "title": "ISO/IEC 27035 — Incident Management",
          "url": "https://www.iso.org/standard/78973.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_incident_intake_and_triage_mcp.py",
          "url": "/audit-code/incident-mgmt/02_incident_intake_and_triage_mcp.py",
          "description": "Runnable read-only MCP server: gathers Incident Management evidence for \"Incident intake and triage\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Incident intake and triage\" control for Incident Management at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. SIEM / SOAR (Sentinel/Splunk) is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"Incident intake and triage\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items from SIEM / SOAR (Sentinel/Splunk))\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Incident intake and triage\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Incident intake and triage\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Incident intake and triage\" control must cover\n# fragment: incident_intake_triage_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "incident_intake_triage_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Incident intake and triage\" sub-process of Incident Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the incident intake and triage control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "inc-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Incident intake and triage\" matter to the broader Incident Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "inc-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Incident intake and triage\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Incident intake and triage evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "inc-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Incident intake and triage\"?",
          "options": [
            "SIEM / SOAR (Sentinel/Splunk) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SIEM / SOAR (Sentinel/Splunk)) via read-only access."
        },
        {
          "id": "inc-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Incident intake and triage\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Security operations / CSIRT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / CSIRT owns the control data; the auditor independently verifies it."
        },
        {
          "id": "inc-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Incident intake and triage\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "inc-02-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "inc-02-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Incident intake and triage\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "inc-02-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "inc-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Incident intake and triage\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "incident-mgmt",
    "id": "inc-03",
    "order": 3,
    "title": "Evidence handling and forensics",
    "subtitle": "Agentic technical & privacy audit of the evidence handling and forensics control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Evidence handling and forensics\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each Incident Management source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the evidence handling and forensics control (from SIEM / SOAR (Sentinel/Splunk))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SIEM / SOAR (Sentinel/Splunk)",
        "IR case management",
        "Forensics + evidence store",
        "On-call / paging (PagerDuty)"
      ],
      "dataOwner": [
        "Security operations / CSIRT",
        "IT operations",
        "Legal & Communications",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-03-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "Evidence handling and forensics",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Evidence handling and forensics\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"Evidence handling and forensics\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that evidence handling and forensics is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically SIEM / SOAR (Sentinel/Splunk), IR case management, Forensics + evidence store — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_evidence_handling_and_forensics_mcp.py` exposes read-only tools that turn each Incident Management source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_evidence_handling_and_forensics_mcp.py` to expose it to your agent — or `python 03_evidence_handling_and_forensics_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SIEM / SOAR (Sentinel/Splunk) · IR case management",
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
          "year": 2017,
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Evidence handling and forensics\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Evidence handling and forensics\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "NIST SP 800-61 — Incident Handling",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "SANS Incident Handler's Handbook",
          "url": "https://www.sans.org/white-papers/33901/"
        },
        {
          "title": "ISO/IEC 27035 — Incident Management",
          "url": "https://www.iso.org/standard/78973.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_evidence_handling_and_forensics_mcp.py",
          "url": "/audit-code/incident-mgmt/03_evidence_handling_and_forensics_mcp.py",
          "description": "Runnable read-only MCP server: gathers Incident Management evidence for \"Evidence handling and forensics\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Evidence handling and forensics\" control for Incident Management at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. SIEM / SOAR (Sentinel/Splunk) is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"Evidence handling and forensics\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items from SIEM / SOAR (Sentinel/Splunk))\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Evidence handling and forensics\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Evidence handling and forensics\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Evidence handling and forensics\" control must cover\n# fragment: evidence_handling_forensics_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "evidence_handling_forensics_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Evidence handling and forensics\" sub-process of Incident Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the evidence handling and forensics control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "inc-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Evidence handling and forensics\" matter to the broader Incident Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "inc-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Evidence handling and forensics\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Evidence handling and forensics evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "inc-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Evidence handling and forensics\"?",
          "options": [
            "SIEM / SOAR (Sentinel/Splunk) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SIEM / SOAR (Sentinel/Splunk)) via read-only access."
        },
        {
          "id": "inc-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Evidence handling and forensics\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Security operations / CSIRT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / CSIRT owns the control data; the auditor independently verifies it."
        },
        {
          "id": "inc-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Evidence handling and forensics\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "inc-03-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "inc-03-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Evidence handling and forensics\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "inc-03-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "inc-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Evidence handling and forensics\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "incident-mgmt",
    "id": "inc-04",
    "order": 4,
    "title": "Post-incident reviews / corrective",
    "subtitle": "Agentic technical & privacy audit of the post-incident reviews / corrective control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Post-incident reviews / corrective\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each Incident Management source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the post-incident reviews / corrective control (from SIEM / SOAR (Sentinel/Splunk))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SIEM / SOAR (Sentinel/Splunk)",
        "IR case management",
        "Forensics + evidence store",
        "On-call / paging (PagerDuty)"
      ],
      "dataOwner": [
        "Security operations / CSIRT",
        "IT operations",
        "Legal & Communications",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-04-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "Post-incident reviews / corrective",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Post-incident reviews / corrective\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"Post-incident reviews / corrective\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that post-incident reviews / corrective is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically SIEM / SOAR (Sentinel/Splunk), IR case management, Forensics + evidence store — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_post_incident_reviews_corrective_mcp.py` exposes read-only tools that turn each Incident Management source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_post_incident_reviews_corrective_mcp.py` to expose it to your agent — or `python 04_post_incident_reviews_corrective_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SIEM / SOAR (Sentinel/Splunk) · IR case management",
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
          "year": 2017,
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Post-incident reviews / corrective\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Post-incident reviews / corrective\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "NIST SP 800-61 — Incident Handling",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "SANS Incident Handler's Handbook",
          "url": "https://www.sans.org/white-papers/33901/"
        },
        {
          "title": "ISO/IEC 27035 — Incident Management",
          "url": "https://www.iso.org/standard/78973.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_post_incident_reviews_corrective_mcp.py",
          "url": "/audit-code/incident-mgmt/04_post_incident_reviews_corrective_mcp.py",
          "description": "Runnable read-only MCP server: gathers Incident Management evidence for \"Post-incident reviews / corrective\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Post-incident reviews / corrective\" control for Incident Management at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. SIEM / SOAR (Sentinel/Splunk) is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"Post-incident reviews / corrective\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items from SIEM / SOAR (Sentinel/Splunk))\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Post-incident reviews / corrective\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Post-incident reviews / corrective\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Post-incident reviews / corrective\" control must cover\n# fragment: postincident_reviews_corrective_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "postincident_reviews_corrective_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Post-incident reviews / corrective\" sub-process of Incident Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the post-incident reviews / corrective control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "inc-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Post-incident reviews / corrective\" matter to the broader Incident Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "inc-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Post-incident reviews / corrective\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Post-incident reviews / corrective evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "inc-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Post-incident reviews / corrective\"?",
          "options": [
            "SIEM / SOAR (Sentinel/Splunk) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SIEM / SOAR (Sentinel/Splunk)) via read-only access."
        },
        {
          "id": "inc-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Post-incident reviews / corrective\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Security operations / CSIRT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / CSIRT owns the control data; the auditor independently verifies it."
        },
        {
          "id": "inc-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Post-incident reviews / corrective\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "inc-04-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "inc-04-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Post-incident reviews / corrective\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "inc-04-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "inc-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Post-incident reviews / corrective\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "incident-mgmt",
    "id": "inc-05",
    "order": 5,
    "title": "External notifications / breach comms",
    "subtitle": "Agentic technical & privacy audit of the external notifications / breach comms control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"External notifications / breach comms\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each Incident Management source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the external notifications / breach comms control (from SIEM / SOAR (Sentinel/Splunk))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SIEM / SOAR (Sentinel/Splunk)",
        "IR case management",
        "Forensics + evidence store",
        "On-call / paging (PagerDuty)"
      ],
      "dataOwner": [
        "Security operations / CSIRT",
        "IT operations",
        "Legal & Communications",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-05-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "External notifications / breach comms",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"External notifications / breach comms\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"External notifications / breach comms\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that external notifications / breach comms is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically SIEM / SOAR (Sentinel/Splunk), IR case management, Forensics + evidence store — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_external_notifications_breach_comms_mcp.py` exposes read-only tools that turn each Incident Management source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_external_notifications_breach_comms_mcp.py` to expose it to your agent — or `python 05_external_notifications_breach_comms_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SIEM / SOAR (Sentinel/Splunk) · IR case management",
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
          "year": 2017,
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"External notifications / breach comms\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"External notifications / breach comms\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "NIST SP 800-61 — Incident Handling",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "SANS Incident Handler's Handbook",
          "url": "https://www.sans.org/white-papers/33901/"
        },
        {
          "title": "ISO/IEC 27035 — Incident Management",
          "url": "https://www.iso.org/standard/78973.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_external_notifications_breach_comms_mcp.py",
          "url": "/audit-code/incident-mgmt/05_external_notifications_breach_comms_mcp.py",
          "description": "Runnable read-only MCP server: gathers Incident Management evidence for \"External notifications / breach comms\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"External notifications / breach comms\" control for Incident Management at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. SIEM / SOAR (Sentinel/Splunk) is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"External notifications / breach comms\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items from SIEM / SOAR (Sentinel/Splunk))\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"External notifications / breach comms\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"External notifications / breach comms\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"External notifications / breach comms\" control must cover\n# fragment: external_notifications_breach_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "external_notifications_breach_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"External notifications / breach comms\" sub-process of Incident Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the external notifications / breach comms control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "inc-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"External notifications / breach comms\" matter to the broader Incident Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "inc-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"External notifications / breach comms\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The External notifications / breach comms evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "inc-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"External notifications / breach comms\"?",
          "options": [
            "SIEM / SOAR (Sentinel/Splunk) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SIEM / SOAR (Sentinel/Splunk)) via read-only access."
        },
        {
          "id": "inc-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"External notifications / breach comms\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Security operations / CSIRT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / CSIRT owns the control data; the auditor independently verifies it."
        },
        {
          "id": "inc-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"External notifications / breach comms\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "inc-05-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "inc-05-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"External notifications / breach comms\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "inc-05-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "inc-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"External notifications / breach comms\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "incident-mgmt",
    "id": "inc-06",
    "order": 6,
    "title": "Incident logging and monitoring",
    "subtitle": "Agentic technical & privacy audit of the incident logging and monitoring control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Incident logging and monitoring\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each Incident Management source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the incident logging and monitoring control (from SIEM / SOAR (Sentinel/Splunk))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SIEM / SOAR (Sentinel/Splunk)",
        "IR case management",
        "Forensics + evidence store",
        "On-call / paging (PagerDuty)"
      ],
      "dataOwner": [
        "Security operations / CSIRT",
        "IT operations",
        "Legal & Communications",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-06-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "Incident logging and monitoring",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Incident logging and monitoring\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"Incident logging and monitoring\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that incident logging and monitoring is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically SIEM / SOAR (Sentinel/Splunk), IR case management, Forensics + evidence store — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_incident_logging_and_monitoring_mcp.py` exposes read-only tools that turn each Incident Management source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_incident_logging_and_monitoring_mcp.py` to expose it to your agent — or `python 06_incident_logging_and_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SIEM / SOAR (Sentinel/Splunk) · IR case management",
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
          "year": 2017,
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Incident logging and monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Incident logging and monitoring\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "NIST SP 800-61 — Incident Handling",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "SANS Incident Handler's Handbook",
          "url": "https://www.sans.org/white-papers/33901/"
        },
        {
          "title": "ISO/IEC 27035 — Incident Management",
          "url": "https://www.iso.org/standard/78973.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_incident_logging_and_monitoring_mcp.py",
          "url": "/audit-code/incident-mgmt/06_incident_logging_and_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers Incident Management evidence for \"Incident logging and monitoring\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Incident logging and monitoring\" control for Incident Management at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. SIEM / SOAR (Sentinel/Splunk) is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"Incident logging and monitoring\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items from SIEM / SOAR (Sentinel/Splunk))\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Incident logging and monitoring\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Incident logging and monitoring\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Incident logging and monitoring\" control must cover\n# fragment: incident_logging_monitoring_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "incident_logging_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Incident logging and monitoring\" sub-process of Incident Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the incident logging and monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "inc-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Incident logging and monitoring\" matter to the broader Incident Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "inc-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Incident logging and monitoring\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Incident logging and monitoring evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "inc-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Incident logging and monitoring\"?",
          "options": [
            "SIEM / SOAR (Sentinel/Splunk) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SIEM / SOAR (Sentinel/Splunk)) via read-only access."
        },
        {
          "id": "inc-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Incident logging and monitoring\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Security operations / CSIRT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / CSIRT owns the control data; the auditor independently verifies it."
        },
        {
          "id": "inc-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Incident logging and monitoring\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "inc-06-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "inc-06-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Incident logging and monitoring\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "inc-06-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "inc-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Incident logging and monitoring\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "incident-mgmt",
    "id": "inc-07",
    "order": 7,
    "title": "Incident escalation",
    "subtitle": "Agentic technical & privacy audit of the incident escalation control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Incident escalation\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each Incident Management source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the incident escalation control (from SIEM / SOAR (Sentinel/Splunk))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SIEM / SOAR (Sentinel/Splunk)",
        "IR case management",
        "Forensics + evidence store",
        "On-call / paging (PagerDuty)"
      ],
      "dataOwner": [
        "Security operations / CSIRT",
        "IT operations",
        "Legal & Communications",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-07-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "Incident escalation",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Incident escalation\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"Incident escalation\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that incident escalation is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically SIEM / SOAR (Sentinel/Splunk), IR case management, Forensics + evidence store — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_incident_escalation_mcp.py` exposes read-only tools that turn each Incident Management source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_incident_escalation_mcp.py` to expose it to your agent — or `python 07_incident_escalation_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SIEM / SOAR (Sentinel/Splunk) · IR case management",
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
          "year": 2017,
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Incident escalation\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Incident escalation\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "NIST SP 800-61 — Incident Handling",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "SANS Incident Handler's Handbook",
          "url": "https://www.sans.org/white-papers/33901/"
        },
        {
          "title": "ISO/IEC 27035 — Incident Management",
          "url": "https://www.iso.org/standard/78973.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_incident_escalation_mcp.py",
          "url": "/audit-code/incident-mgmt/07_incident_escalation_mcp.py",
          "description": "Runnable read-only MCP server: gathers Incident Management evidence for \"Incident escalation\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Incident escalation\" control for Incident Management at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. SIEM / SOAR (Sentinel/Splunk) is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"Incident escalation\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items from SIEM / SOAR (Sentinel/Splunk))\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Incident escalation\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Incident escalation\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Incident escalation\" control must cover\n# fragment: incident_escalation_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "incident_escalation_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Incident escalation\" sub-process of Incident Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the incident escalation control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "inc-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Incident escalation\" matter to the broader Incident Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "inc-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Incident escalation\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Incident escalation evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "inc-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Incident escalation\"?",
          "options": [
            "SIEM / SOAR (Sentinel/Splunk) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SIEM / SOAR (Sentinel/Splunk)) via read-only access."
        },
        {
          "id": "inc-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Incident escalation\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Security operations / CSIRT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / CSIRT owns the control data; the auditor independently verifies it."
        },
        {
          "id": "inc-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Incident escalation\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "inc-07-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "inc-07-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Incident escalation\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "inc-07-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "inc-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Incident escalation\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  }
];
