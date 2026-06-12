import type { EpochConfig, StageConfig } from "../types";

export const resiliencyEpoch: EpochConfig = {
  "id": "resiliency",
  "name": "Resiliency & Redundancy",
  "subtitle": "Agentic technical & privacy audit — Resiliency & Redundancy",
  "description": "Audit Resiliency & Redundancy end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "♻️",
  "color": "Green",
  "unlocked": true
};

export const resiliencyStages: StageConfig[] = [
  {
    "epochId": "resiliency",
    "id": "res-01",
    "order": 1,
    "title": "BCP, BIA, ITDR",
    "subtitle": "Agentic technical & privacy audit of the bcp, bia, itdr control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"BCP, BIA, ITDR\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"BCP, BIA, ITDR\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the bcp, bia, itdr control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-01-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "BCP, BIA, ITDR",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"BCP, BIA, ITDR\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the bcp, bia, itdr control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"BCP, BIA, ITDR\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the bcp, bia, itdr control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"BCP, BIA, ITDR\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_bcp_bia_itdr_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_bcp_bia_itdr_mcp.py` to expose it to your agent — or `python 01_bcp_bia_itdr_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"BCP, BIA, ITDR\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the bcp, bia, itdr control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"BCP, BIA, ITDR\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the bcp, bia, itdr control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_bcp_bia_itdr_mcp.py",
          "url": "/audit-code/resiliency/01_bcp_bia_itdr_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"BCP, BIA, ITDR\" (in-scope inventory for the bcp, bia, itdr control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"BCP, BIA, ITDR\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"BCP, BIA, ITDR\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the bcp, bia, itdr control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"BCP, BIA, ITDR\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"BCP, BIA, ITDR\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the bcp, bia, itdr control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"BCP, BIA, ITDR\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"BCP, BIA, ITDR\" control must cover\n# fragment: bcp_bia_itdr_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "bcp_bia_itdr_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"BCP, BIA, ITDR\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the bcp, bia, itdr control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the bcp, bia, itdr control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for bcp, bia, itdr against comparable organisations in the sector",
            "Obtain evidence that the bcp, bia, itdr control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"BCP, BIA, ITDR\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"BCP, BIA, ITDR\" control?",
          "options": [
            "A point-in-time screenshot of one system's bcp, bia, itdr settings, captured during the walkthrough",
            "The In-scope inventory for the bcp, bia, itdr control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the bcp, bia, itdr control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's bcp, bia, itdr capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"BCP, BIA, ITDR\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how bcp, bia, itdr works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"BCP, BIA, ITDR\"?",
          "options": [
            "The external audit firm, since it is the party examining the bcp, bia, itdr control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the bcp, bia, itdr data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"BCP, BIA, ITDR\", which part stays with the human auditor?",
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
          "id": "res-01-q7",
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
          "id": "res-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"BCP, BIA, ITDR\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the bcp, bia, itdr control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the bcp, bia, itdr control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-01-q9",
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
          "id": "res-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"BCP, BIA, ITDR\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind bcp, bia, itdr, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-02",
    "order": 2,
    "title": "Supplier and vendor resilience",
    "subtitle": "Agentic technical & privacy audit of the supplier and vendor resilience control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Supplier and vendor resilience\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Supplier and vendor resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the supplier and vendor resilience control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-02-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Supplier and vendor resilience",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Supplier and vendor resilience\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the supplier and vendor resilience control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Supplier and vendor resilience\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the supplier and vendor resilience control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Supplier and vendor resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_supplier_and_vendor_resilience_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_supplier_and_vendor_resilience_mcp.py` to expose it to your agent — or `python 02_supplier_and_vendor_resilience_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Supplier and vendor resilience\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the supplier and vendor resilience control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Supplier and vendor resilience\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the supplier and vendor resilience control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_supplier_and_vendor_resilience_mcp.py",
          "url": "/audit-code/resiliency/02_supplier_and_vendor_resilience_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Supplier and vendor resilience\" (in-scope inventory for the supplier and vendor resilience control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Supplier and vendor resilience\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Supplier and vendor resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the supplier and vendor resilience control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Supplier and vendor resilience\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Supplier and vendor resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the supplier and vendor resilience control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Supplier and vendor resilience\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Supplier and vendor resilience\" control must cover\n# fragment: supplier_vendor_resilience_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "supplier_vendor_resilience_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Supplier and vendor resilience\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the supplier and vendor resilience control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the supplier and vendor resilience control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for supplier and vendor resilience against comparable organisations in the sector",
            "Obtain evidence that the supplier and vendor resilience control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Supplier and vendor resilience\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Supplier and vendor resilience\" control?",
          "options": [
            "A point-in-time screenshot of one system's supplier and vendor resilience settings, captured during the walkthrough",
            "The In-scope inventory for the supplier and vendor resilience control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the supplier and vendor resilience control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's supplier and vendor resilience capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Supplier and vendor resilience\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how supplier and vendor resilience works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Supplier and vendor resilience\"?",
          "options": [
            "The external audit firm, since it is the party examining the supplier and vendor resilience control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the supplier and vendor resilience data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Supplier and vendor resilience\", which part stays with the human auditor?",
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
          "id": "res-02-q7",
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
          "id": "res-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Supplier and vendor resilience\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the supplier and vendor resilience control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the supplier and vendor resilience control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-02-q9",
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
          "id": "res-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Supplier and vendor resilience\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind supplier and vendor resilience, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-03",
    "order": 3,
    "title": "Tabletop and BCP/DR testing",
    "subtitle": "Agentic technical & privacy audit of the tabletop and bcp/dr testing control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Tabletop and BCP/DR testing\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Tabletop and BCP/DR testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the tabletop and bcp/dr testing control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-03-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Tabletop and BCP/DR testing",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Tabletop and BCP/DR testing\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the tabletop and bcp/dr testing control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Tabletop and BCP/DR testing\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the tabletop and bcp/dr testing control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Tabletop and BCP/DR testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_tabletop_and_bcp_dr_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_tabletop_and_bcp_dr_testing_mcp.py` to expose it to your agent — or `python 03_tabletop_and_bcp_dr_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Tabletop and BCP/DR testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the tabletop and bcp/dr testing control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Tabletop and BCP/DR testing\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the tabletop and bcp/dr testing control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_tabletop_and_bcp_dr_testing_mcp.py",
          "url": "/audit-code/resiliency/03_tabletop_and_bcp_dr_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Tabletop and BCP/DR testing\" (in-scope inventory for the tabletop and bcp/dr testing control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Tabletop and BCP/DR testing\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Tabletop and BCP/DR testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the tabletop and bcp/dr testing control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Tabletop and BCP/DR testing\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Tabletop and BCP/DR testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the tabletop and bcp/dr testing control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Tabletop and BCP/DR testing\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Tabletop and BCP/DR testing\" control must cover\n# fragment: tabletop_bcpdr_testing_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "tabletop_bcpdr_testing_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Tabletop and BCP/DR testing\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the tabletop and bcp/dr testing control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the tabletop and bcp/dr testing control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for tabletop and bcp/dr testing against comparable organisations in the sector",
            "Obtain evidence that the tabletop and bcp/dr testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Tabletop and BCP/DR testing\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Tabletop and BCP/DR testing\" control?",
          "options": [
            "A point-in-time screenshot of one system's tabletop and bcp/dr testing settings, captured during the walkthrough",
            "The In-scope inventory for the tabletop and bcp/dr testing control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the tabletop and bcp/dr testing control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's tabletop and bcp/dr testing capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Tabletop and BCP/DR testing\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how tabletop and bcp/dr testing works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Tabletop and BCP/DR testing\"?",
          "options": [
            "The external audit firm, since it is the party examining the tabletop and bcp/dr testing control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the tabletop and bcp/dr testing data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Tabletop and BCP/DR testing\", which part stays with the human auditor?",
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
          "id": "res-03-q7",
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
          "id": "res-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Tabletop and BCP/DR testing\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the tabletop and bcp/dr testing control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the tabletop and bcp/dr testing control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-03-q9",
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
          "id": "res-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Tabletop and BCP/DR testing\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind tabletop and bcp/dr testing, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-04",
    "order": 4,
    "title": "DR site strategy",
    "subtitle": "Agentic technical & privacy audit of the dr site strategy control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"DR site strategy\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"DR site strategy\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the dr site strategy control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-04-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "DR site strategy",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"DR site strategy\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the dr site strategy control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"DR site strategy\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the dr site strategy control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"DR site strategy\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_dr_site_strategy_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_dr_site_strategy_mcp.py` to expose it to your agent — or `python 04_dr_site_strategy_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"DR site strategy\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the dr site strategy control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"DR site strategy\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the dr site strategy control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_dr_site_strategy_mcp.py",
          "url": "/audit-code/resiliency/04_dr_site_strategy_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"DR site strategy\" (in-scope inventory for the dr site strategy control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"DR site strategy\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"DR site strategy\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the dr site strategy control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"DR site strategy\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"DR site strategy\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the dr site strategy control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"DR site strategy\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"DR site strategy\" control must cover\n# fragment: dr_site_strategy_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "dr_site_strategy_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"DR site strategy\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the dr site strategy control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the dr site strategy control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for dr site strategy against comparable organisations in the sector",
            "Obtain evidence that the dr site strategy control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"DR site strategy\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"DR site strategy\" control?",
          "options": [
            "A point-in-time screenshot of one system's dr site strategy settings, captured during the walkthrough",
            "The In-scope inventory for the dr site strategy control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the dr site strategy control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's dr site strategy capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"DR site strategy\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how dr site strategy works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"DR site strategy\"?",
          "options": [
            "The external audit firm, since it is the party examining the dr site strategy control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the dr site strategy data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"DR site strategy\", which part stays with the human auditor?",
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
          "id": "res-04-q7",
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
          "id": "res-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"DR site strategy\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the dr site strategy control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the dr site strategy control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-04-q9",
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
          "id": "res-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"DR site strategy\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind dr site strategy, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-05",
    "order": 5,
    "title": "Failover and fallback procedures",
    "subtitle": "Agentic technical & privacy audit of the failover and fallback procedures control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Failover and fallback procedures\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Failover and fallback procedures\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the failover and fallback procedures control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-05-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Failover and fallback procedures",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Failover and fallback procedures\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the failover and fallback procedures control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Failover and fallback procedures\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the failover and fallback procedures control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Failover and fallback procedures\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_failover_and_fallback_procedures_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_failover_and_fallback_procedures_mcp.py` to expose it to your agent — or `python 05_failover_and_fallback_procedures_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Failover and fallback procedures\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the failover and fallback procedures control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Failover and fallback procedures\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the failover and fallback procedures control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_failover_and_fallback_procedures_mcp.py",
          "url": "/audit-code/resiliency/05_failover_and_fallback_procedures_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Failover and fallback procedures\" (in-scope inventory for the failover and fallback procedures control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Failover and fallback procedures\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Failover and fallback procedures\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the failover and fallback procedures control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Failover and fallback procedures\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Failover and fallback procedures\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the failover and fallback procedures control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Failover and fallback procedures\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Failover and fallback procedures\" control must cover\n# fragment: failover_fallback_procedures_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "failover_fallback_procedures_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Failover and fallback procedures\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the failover and fallback procedures control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the failover and fallback procedures control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for failover and fallback procedures against comparable organisations in the sector",
            "Obtain evidence that the failover and fallback procedures control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Failover and fallback procedures\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Failover and fallback procedures\" control?",
          "options": [
            "A point-in-time screenshot of one system's failover and fallback procedures settings, captured during the walkthrough",
            "The In-scope inventory for the failover and fallback procedures control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the failover and fallback procedures control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's failover and fallback procedures capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Failover and fallback procedures\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how failover and fallback procedures works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Failover and fallback procedures\"?",
          "options": [
            "The external audit firm, since it is the party examining the failover and fallback procedures control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the failover and fallback procedures data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Failover and fallback procedures\", which part stays with the human auditor?",
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
          "id": "res-05-q7",
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
          "id": "res-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Failover and fallback procedures\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the failover and fallback procedures control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the failover and fallback procedures control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-05-q9",
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
          "id": "res-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Failover and fallback procedures\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind failover and fallback procedures, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-06",
    "order": 6,
    "title": "Data and service replication",
    "subtitle": "Agentic technical & privacy audit of the data and service replication control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data and service replication\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Data and service replication\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data and service replication control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-06-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Data and service replication",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data and service replication\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data and service replication control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Data and service replication\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data and service replication control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Data and service replication\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_data_and_service_replication_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_data_and_service_replication_mcp.py` to expose it to your agent — or `python 06_data_and_service_replication_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data and service replication\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data and service replication control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Data and service replication\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data and service replication control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_data_and_service_replication_mcp.py",
          "url": "/audit-code/resiliency/06_data_and_service_replication_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Data and service replication\" (in-scope inventory for the data and service replication control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data and service replication\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Data and service replication\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data and service replication control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Data and service replication\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Data and service replication\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the data and service replication control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data and service replication\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data and service replication\" control must cover\n# fragment: data_service_replication_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "data_service_replication_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data and service replication\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the data and service replication control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data and service replication control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data and service replication against comparable organisations in the sector",
            "Obtain evidence that the data and service replication control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data and service replication\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data and service replication\" control?",
          "options": [
            "A point-in-time screenshot of one system's data and service replication settings, captured during the walkthrough",
            "The In-scope inventory for the data and service replication control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data and service replication control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data and service replication capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data and service replication\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data and service replication works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data and service replication\"?",
          "options": [
            "The external audit firm, since it is the party examining the data and service replication control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data and service replication data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data and service replication\", which part stays with the human auditor?",
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
          "id": "res-06-q7",
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
          "id": "res-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data and service replication\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the data and service replication control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data and service replication control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-06-q9",
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
          "id": "res-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data and service replication\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data and service replication, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-07",
    "order": 7,
    "title": "Network redundancy",
    "subtitle": "Agentic technical & privacy audit of the network redundancy control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Network redundancy\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Network redundancy\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the network redundancy control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-07-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Network redundancy",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Network redundancy\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the network redundancy control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Network redundancy\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the network redundancy control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Network redundancy\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_network_redundancy_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_network_redundancy_mcp.py` to expose it to your agent — or `python 07_network_redundancy_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Network redundancy\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the network redundancy control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Network redundancy\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the network redundancy control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_network_redundancy_mcp.py",
          "url": "/audit-code/resiliency/07_network_redundancy_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Network redundancy\" (in-scope inventory for the network redundancy control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Network redundancy\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Network redundancy\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the network redundancy control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Network redundancy\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Network redundancy\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the network redundancy control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Network redundancy\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Network redundancy\" control must cover\n# fragment: network_redundancy_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "network_redundancy_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Network redundancy\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the network redundancy control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the network redundancy control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for network redundancy against comparable organisations in the sector",
            "Obtain evidence that the network redundancy control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Network redundancy\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Network redundancy\" control?",
          "options": [
            "A point-in-time screenshot of one system's network redundancy settings, captured during the walkthrough",
            "The In-scope inventory for the network redundancy control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the network redundancy control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's network redundancy capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Network redundancy\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how network redundancy works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Network redundancy\"?",
          "options": [
            "The external audit firm, since it is the party examining the network redundancy control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the network redundancy data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Network redundancy\", which part stays with the human auditor?",
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
          "id": "res-07-q7",
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
          "id": "res-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Network redundancy\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the network redundancy control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the network redundancy control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-07-q9",
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
          "id": "res-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Network redundancy\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind network redundancy, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-08",
    "order": 8,
    "title": "Multi-region / AZ deployment",
    "subtitle": "Agentic technical & privacy audit of the multi-region / az deployment control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Multi-region / AZ deployment\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Multi-region / AZ deployment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the multi-region / az deployment control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-08-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Multi-region / AZ deployment",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Multi-region / AZ deployment\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the multi-region / az deployment control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Multi-region / AZ deployment\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the multi-region / az deployment control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Multi-region / AZ deployment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_multi_region_az_deployment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_multi_region_az_deployment_mcp.py` to expose it to your agent — or `python 08_multi_region_az_deployment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Multi-region / AZ deployment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the multi-region / az deployment control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Multi-region / AZ deployment\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the multi-region / az deployment control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_multi_region_az_deployment_mcp.py",
          "url": "/audit-code/resiliency/08_multi_region_az_deployment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Multi-region / AZ deployment\" (in-scope inventory for the multi-region / az deployment control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Multi-region / AZ deployment\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Multi-region / AZ deployment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the multi-region / az deployment control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Multi-region / AZ deployment\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Multi-region / AZ deployment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the multi-region / az deployment control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Multi-region / AZ deployment\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Multi-region / AZ deployment\" control must cover\n# fragment: multiregion_az_deployment_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "multiregion_az_deployment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Multi-region / AZ deployment\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the multi-region / az deployment control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the multi-region / az deployment control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for multi-region / az deployment against comparable organisations in the sector",
            "Obtain evidence that the multi-region / az deployment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Multi-region / AZ deployment\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Multi-region / AZ deployment\" control?",
          "options": [
            "A point-in-time screenshot of one system's multi-region / az deployment settings, captured during the walkthrough",
            "The In-scope inventory for the multi-region / az deployment control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the multi-region / az deployment control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's multi-region / az deployment capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Multi-region / AZ deployment\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how multi-region / az deployment works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Multi-region / AZ deployment\"?",
          "options": [
            "The external audit firm, since it is the party examining the multi-region / az deployment control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the multi-region / az deployment data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Multi-region / AZ deployment\", which part stays with the human auditor?",
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
          "id": "res-08-q7",
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
          "id": "res-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Multi-region / AZ deployment\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the multi-region / az deployment control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the multi-region / az deployment control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-08-q9",
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
          "id": "res-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Multi-region / AZ deployment\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind multi-region / az deployment, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-09",
    "order": 9,
    "title": "Infrastructure as code",
    "subtitle": "Agentic technical & privacy audit of the infrastructure as code control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Infrastructure as code\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Infrastructure as code\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the infrastructure as code control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-09-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Infrastructure as code",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Infrastructure as code\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the infrastructure as code control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Infrastructure as code\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the infrastructure as code control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Infrastructure as code\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_infrastructure_as_code_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_infrastructure_as_code_mcp.py` to expose it to your agent — or `python 09_infrastructure_as_code_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Infrastructure as code\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the infrastructure as code control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Infrastructure as code\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the infrastructure as code control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_infrastructure_as_code_mcp.py",
          "url": "/audit-code/resiliency/09_infrastructure_as_code_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Infrastructure as code\" (in-scope inventory for the infrastructure as code control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Infrastructure as code\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Infrastructure as code\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the infrastructure as code control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Infrastructure as code\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Infrastructure as code\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the infrastructure as code control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Infrastructure as code\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Infrastructure as code\" control must cover\n# fragment: infrastructure_as_code_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "infrastructure_as_code_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Infrastructure as code\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the infrastructure as code control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the infrastructure as code control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for infrastructure as code against comparable organisations in the sector",
            "Obtain evidence that the infrastructure as code control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Infrastructure as code\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Infrastructure as code\" control?",
          "options": [
            "A point-in-time screenshot of one system's infrastructure as code settings, captured during the walkthrough",
            "The In-scope inventory for the infrastructure as code control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the infrastructure as code control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's infrastructure as code capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Infrastructure as code\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how infrastructure as code works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Infrastructure as code\"?",
          "options": [
            "The external audit firm, since it is the party examining the infrastructure as code control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the infrastructure as code data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Infrastructure as code\", which part stays with the human auditor?",
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
          "id": "res-09-q7",
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
          "id": "res-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Infrastructure as code\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the infrastructure as code control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the infrastructure as code control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-09-q9",
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
          "id": "res-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Infrastructure as code\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind infrastructure as code, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-10",
    "order": 10,
    "title": "Vendor lock-in risk",
    "subtitle": "Agentic technical & privacy audit of the vendor lock-in risk control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor lock-in risk\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Vendor lock-in risk\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the vendor lock-in risk control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-10-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Vendor lock-in risk",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor lock-in risk\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the vendor lock-in risk control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Vendor lock-in risk\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the vendor lock-in risk control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Vendor lock-in risk\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_vendor_lock_in_risk_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_vendor_lock_in_risk_mcp.py` to expose it to your agent — or `python 10_vendor_lock_in_risk_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor lock-in risk\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the vendor lock-in risk control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Vendor lock-in risk\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the vendor lock-in risk control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_vendor_lock_in_risk_mcp.py",
          "url": "/audit-code/resiliency/10_vendor_lock_in_risk_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Vendor lock-in risk\" (in-scope inventory for the vendor lock-in risk control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor lock-in risk\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Vendor lock-in risk\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the vendor lock-in risk control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Vendor lock-in risk\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Vendor lock-in risk\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the vendor lock-in risk control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor lock-in risk\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor lock-in risk\" control must cover\n# fragment: vendor_lockin_risk_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "vendor_lockin_risk_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor lock-in risk\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the vendor lock-in risk control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vendor lock-in risk control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vendor lock-in risk against comparable organisations in the sector",
            "Obtain evidence that the vendor lock-in risk control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor lock-in risk\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor lock-in risk\" control?",
          "options": [
            "A point-in-time screenshot of one system's vendor lock-in risk settings, captured during the walkthrough",
            "The In-scope inventory for the vendor lock-in risk control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vendor lock-in risk control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vendor lock-in risk capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vendor lock-in risk\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vendor lock-in risk works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor lock-in risk\"?",
          "options": [
            "The external audit firm, since it is the party examining the vendor lock-in risk control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vendor lock-in risk data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor lock-in risk\", which part stays with the human auditor?",
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
          "id": "res-10-q7",
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
          "id": "res-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor lock-in risk\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the vendor lock-in risk control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the vendor lock-in risk control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-10-q9",
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
          "id": "res-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor lock-in risk\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vendor lock-in risk, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-11",
    "order": 11,
    "title": "Secret and certificate mgmt",
    "subtitle": "Agentic technical & privacy audit of the secret and certificate mgmt control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secret and certificate mgmt\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Secret and certificate mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the secret and certificate mgmt control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-11-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Secret and certificate mgmt",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secret and certificate mgmt\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the secret and certificate mgmt control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Secret and certificate mgmt\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the secret and certificate mgmt control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Secret and certificate mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_secret_and_certificate_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_secret_and_certificate_mgmt_mcp.py` to expose it to your agent — or `python 11_secret_and_certificate_mgmt_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secret and certificate mgmt\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the secret and certificate mgmt control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Secret and certificate mgmt\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the secret and certificate mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_secret_and_certificate_mgmt_mcp.py",
          "url": "/audit-code/resiliency/11_secret_and_certificate_mgmt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Secret and certificate mgmt\" (in-scope inventory for the secret and certificate mgmt control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secret and certificate mgmt\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Secret and certificate mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the secret and certificate mgmt control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Secret and certificate mgmt\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Secret and certificate mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the secret and certificate mgmt control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secret and certificate mgmt\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secret and certificate mgmt\" control must cover\n# fragment: secret_certificate_mgmt_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "secret_certificate_mgmt_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secret and certificate mgmt\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the secret and certificate mgmt control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the secret and certificate mgmt control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for secret and certificate mgmt against comparable organisations in the sector",
            "Obtain evidence that the secret and certificate mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secret and certificate mgmt\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secret and certificate mgmt\" control?",
          "options": [
            "A point-in-time screenshot of one system's secret and certificate mgmt settings, captured during the walkthrough",
            "The In-scope inventory for the secret and certificate mgmt control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the secret and certificate mgmt control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's secret and certificate mgmt capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Secret and certificate mgmt\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how secret and certificate mgmt works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secret and certificate mgmt\"?",
          "options": [
            "The external audit firm, since it is the party examining the secret and certificate mgmt control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the secret and certificate mgmt data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secret and certificate mgmt\", which part stays with the human auditor?",
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
          "id": "res-11-q7",
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
          "id": "res-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secret and certificate mgmt\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the secret and certificate mgmt control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the secret and certificate mgmt control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-11-q9",
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
          "id": "res-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secret and certificate mgmt\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind secret and certificate mgmt, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-12",
    "order": 12,
    "title": "High-availability architecture",
    "subtitle": "Agentic technical & privacy audit of the high-availability architecture control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"High-availability architecture\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"High-availability architecture\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the high-availability architecture control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-12-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "High-availability architecture",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"High-availability architecture\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the high-availability architecture control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"High-availability architecture\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the high-availability architecture control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"High-availability architecture\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_high_availability_architecture_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_high_availability_architecture_mcp.py` to expose it to your agent — or `python 12_high_availability_architecture_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"High-availability architecture\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the high-availability architecture control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"High-availability architecture\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the high-availability architecture control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_high_availability_architecture_mcp.py",
          "url": "/audit-code/resiliency/12_high_availability_architecture_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"High-availability architecture\" (in-scope inventory for the high-availability architecture control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"High-availability architecture\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"High-availability architecture\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the high-availability architecture control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"High-availability architecture\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"High-availability architecture\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the high-availability architecture control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"High-availability architecture\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"High-availability architecture\" control must cover\n# fragment: highavailability_architecture_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "highavailability_architecture_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"High-availability architecture\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the high-availability architecture control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the high-availability architecture control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for high-availability architecture against comparable organisations in the sector",
            "Obtain evidence that the high-availability architecture control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"High-availability architecture\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"High-availability architecture\" control?",
          "options": [
            "A point-in-time screenshot of one system's high-availability architecture settings, captured during the walkthrough",
            "The In-scope inventory for the high-availability architecture control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the high-availability architecture control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's high-availability architecture capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"High-availability architecture\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how high-availability architecture works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"High-availability architecture\"?",
          "options": [
            "The external audit firm, since it is the party examining the high-availability architecture control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the high-availability architecture data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"High-availability architecture\", which part stays with the human auditor?",
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
          "id": "res-12-q7",
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
          "id": "res-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"High-availability architecture\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the high-availability architecture control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the high-availability architecture control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-12-q9",
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
          "id": "res-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"High-availability architecture\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind high-availability architecture, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-13",
    "order": 13,
    "title": "Chaos engineering",
    "subtitle": "Agentic technical & privacy audit of the chaos engineering control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 3,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Chaos engineering\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Chaos engineering\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the chaos engineering control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 3/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-13-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Chaos engineering",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Chaos engineering\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the chaos engineering control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Chaos engineering\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the chaos engineering control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Chaos engineering\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_chaos_engineering_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_chaos_engineering_mcp.py` to expose it to your agent — or `python 13_chaos_engineering_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Chaos engineering\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the chaos engineering control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Chaos engineering\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the chaos engineering control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_chaos_engineering_mcp.py",
          "url": "/audit-code/resiliency/13_chaos_engineering_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Chaos engineering\" (in-scope inventory for the chaos engineering control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Chaos engineering\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Chaos engineering\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the chaos engineering control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Chaos engineering\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"Chaos engineering\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the chaos engineering control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Chaos engineering\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Chaos engineering\" control must cover\n# fragment: chaos_engineering_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "chaos_engineering_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Chaos engineering\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the chaos engineering control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the chaos engineering control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for chaos engineering against comparable organisations in the sector",
            "Obtain evidence that the chaos engineering control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Chaos engineering\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Chaos engineering\" control?",
          "options": [
            "A point-in-time screenshot of one system's chaos engineering settings, captured during the walkthrough",
            "The In-scope inventory for the chaos engineering control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the chaos engineering control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's chaos engineering capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Chaos engineering\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how chaos engineering works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Chaos engineering\"?",
          "options": [
            "The external audit firm, since it is the party examining the chaos engineering control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the chaos engineering data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Chaos engineering\", which part stays with the human auditor?",
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
          "id": "res-13-q7",
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
          "id": "res-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Chaos engineering\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the chaos engineering control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the chaos engineering control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-13-q9",
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
          "id": "res-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Chaos engineering\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind chaos engineering, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-14",
    "order": 14,
    "title": "SLA and SLO monitoring",
    "subtitle": "Agentic technical & privacy audit of the sla and slo monitoring control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"SLA and SLO monitoring\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"SLA and SLO monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Backup + replication platform; DR orchestration / runbooks; Multi-AZ/region infrastructure) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the sla and slo monitoring control (from Backup + replication platform)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Backup + replication platform",
        "DR orchestration / runbooks",
        "Multi-AZ/region infrastructure",
        "BCP / BIA documentation"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "SRE / Platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-14-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "SLA and SLO monitoring",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"SLA and SLO monitoring\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the sla and slo monitoring control (from Backup + replication platform)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"SLA and SLO monitoring\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the sla and slo monitoring control (from Backup + replication platform), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"SLA and SLO monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_sla_and_slo_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup + replication platform and DR orchestration / runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 14_sla_and_slo_monitoring_mcp.py` to expose it to your agent — or `python 14_sla_and_slo_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup + replication platform · DR orchestration / runbooks",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"SLA and SLO monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the sla and slo monitoring control (from Backup + replication platform).",
        "The test: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"SLA and SLO monitoring\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Backup + replication platform, DR orchestration / runbooks, Multi-AZ/region infrastructure) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the sla and slo monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34 — Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "14_sla_and_slo_monitoring_mcp.py",
          "url": "/audit-code/resiliency/14_sla_and_slo_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"SLA and SLO monitoring\" (in-scope inventory for the sla and slo monitoring control (from backup + replication platform)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"SLA and SLO monitoring\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"SLA and SLO monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the sla and slo monitoring control (from Backup + replication platform) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup + replication platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup + replication platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup + replication platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"SLA and SLO monitoring\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Resiliency & Redundancy policy/standard and flag every item where the \"SLA and SLO monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — In-scope inventory for the sla and slo monitoring control (from Backup + replication platform))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"SLA and SLO monitoring\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"SLA and SLO monitoring\" control must cover\n# fragment: sla_slo_monitoring_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "sla_slo_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-14-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"SLA and SLO monitoring\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the sla and slo monitoring control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the sla and slo monitoring control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for sla and slo monitoring against comparable organisations in the sector",
            "Obtain evidence that the sla and slo monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"SLA and SLO monitoring\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"SLA and SLO monitoring\" control?",
          "options": [
            "A point-in-time screenshot of one system's sla and slo monitoring settings, captured during the walkthrough",
            "The In-scope inventory for the sla and slo monitoring control (from Backup + replication platform), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the sla and slo monitoring control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's sla and slo monitoring capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"SLA and SLO monitoring\"?",
          "options": [
            "From Backup + replication platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how sla and slo monitoring works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup + replication platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"SLA and SLO monitoring\"?",
          "options": [
            "The external audit firm, since it is the party examining the sla and slo monitoring control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the sla and slo monitoring data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"SLA and SLO monitoring\", which part stays with the human auditor?",
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
          "id": "res-14-q7",
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
          "id": "res-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"SLA and SLO monitoring\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the sla and slo monitoring control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the sla and slo monitoring control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-14-q9",
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
          "id": "res-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"SLA and SLO monitoring\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind sla and slo monitoring, so there is no overlap",
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
