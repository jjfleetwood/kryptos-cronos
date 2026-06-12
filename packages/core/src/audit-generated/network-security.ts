import type { EpochConfig, StageConfig } from "../types";

export const networkSecurityEpoch: EpochConfig = {
  "id": "network-security",
  "name": "Network Security",
  "subtitle": "Agentic technical & privacy audit — Network Security",
  "description": "Audit Network Security end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🌐",
  "color": "Blue",
  "unlocked": true
};

export const networkSecurityStages: StageConfig[] = [
  {
    "epochId": "network-security",
    "id": "net-01",
    "order": 1,
    "title": "Network segmentation and trust zones",
    "subtitle": "Agentic technical & privacy audit of the network segmentation and trust zones control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Network segmentation and trust zones\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Network segmentation and trust zones\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (Next-gen firewalls (Palo Alto/Fortinet); Network segmentation / microsegmentation; ZTNA / VPN gateways) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the network segmentation and trust zones control (from Next-gen firewalls (Palo Alto/Fortinet))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Next-gen firewalls (Palo Alto/Fortinet)",
        "Network segmentation / microsegmentation",
        "ZTNA / VPN gateways",
        "NDR + flow logs"
      ],
      "dataOwner": [
        "Network engineering",
        "Network security",
        "Security operations",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Network Security controls."
      }
    },
    "badge": {
      "id": "net-01-badge",
      "name": "Network Security Auditor",
      "emoji": "🌐"
    },
    "wonder": {
      "name": "Network segmentation and trust zones",
      "location": "Network Security",
      "era": "Present Day",
      "emoji": "🌐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Network segmentation and trust zones\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the network segmentation and trust zones control (from Next-gen firewalls (Palo Alto/Fortinet))) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"Network segmentation and trust zones\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the network segmentation and trust zones control (from Next-gen firewalls (Palo Alto/Fortinet)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Network segmentation and trust zones\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_network_segmentation_and_trust_zones_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Next-gen firewalls (Palo Alto/Fortinet) and Network segmentation / microsegmentation (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_network_segmentation_and_trust_zones_mcp.py` to expose it to your agent — or `python 01_network_segmentation_and_trust_zones_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Flat network, fast spread",
        "when": "2013",
        "where": "Retail enterprise network",
        "impact": "Weak segmentation let an intrusion that began in a low-value zone reach payment systems.",
        "body": [
          "Target's breach started through an HVAC vendor and spread because the network wasn't segmented to keep that foothold away from card systems.",
          "Auditors verify segmentation/trust zones, firewall-rule governance, secure remote access, and that logging and architecture would contain — not amplify — an intrusion."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Network Security scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Next-gen firewalls (Palo Alto/Fortinet) · Network segmentation / microsegmentation",
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
          "year": 2013,
          "event": "Target: vendor foothold reaches POS via flat network",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Zero-trust segmentation mandated in US EO 14028"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Network segmentation and trust zones\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the network segmentation and trust zones control (from Next-gen firewalls (Palo Alto/Fortinet)).",
        "The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Network segmentation and trust zones\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the network segmentation and trust zones control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-207 — Zero Trust Architecture",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
        },
        {
          "title": "CIS Control 12 — Network Infrastructure",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-41 — Firewall policy",
          "url": "https://csrc.nist.gov/pubs/sp/800/41/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_network_segmentation_and_trust_zones_mcp.py",
          "url": "/audit-code/network-security/01_network_segmentation_and_trust_zones_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"Network segmentation and trust zones\" (in-scope inventory for the network segmentation and trust zones control (from next-gen firewalls (palo alto/fortinet))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Network segmentation and trust zones\" control for Network Security at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Network segmentation and trust zones\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the network segmentation and trust zones control (from Next-gen firewalls (Palo Alto/Fortinet)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Next-gen firewalls (Palo Alto/Fortinet) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Next-gen firewalls (Palo Alto/Fortinet) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Next-gen firewalls (Palo Alto/Fortinet); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"Network segmentation and trust zones\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Network segmentation and trust zones\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — In-scope inventory for the network segmentation and trust zones control (from Next-gen firewalls (Palo Alto/Fortinet)))\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Network segmentation and trust zones\",\n  \"domain\": \"Network Security\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{net_",
        "/evidence/network-security_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Network engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Network segmentation and trust zones\" control must cover\n# fragment: network_segmentation_trust_",
        "/evidence/network-security_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "network-security_inventory.json",
            "isDir": false
          },
          {
            "name": "network-security_state.json",
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
          "value": "FLAG{net_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/network-security_inventory.json",
          "value": "network_segmentation_trust_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/network-security_state.json",
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
          "id": "net-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Network segmentation and trust zones\" sub-process of Network Security?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the network segmentation and trust zones control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "net-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Network segmentation and trust zones\" matter to the broader Network Security posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Network Security controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "net-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Network segmentation and trust zones\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the network segmentation and trust zones control (from Next-gen firewalls (Palo Alto/Fortinet)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "net-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Network segmentation and trust zones\"?",
          "options": [
            "Next-gen firewalls (Palo Alto/Fortinet) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Next-gen firewalls (Palo Alto/Fortinet)) via read-only access."
        },
        {
          "id": "net-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Network segmentation and trust zones\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Network engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "net-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Network segmentation and trust zones\", which part stays with the human auditor?",
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
          "id": "net-01-q7",
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
          "id": "net-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Network segmentation and trust zones\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the network segmentation and trust zones control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the network segmentation and trust zones control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "net-01-q9",
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
          "id": "net-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Network segmentation and trust zones\" also serve privacy and regulatory goals?",
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
    "epochId": "network-security",
    "id": "net-02",
    "order": 2,
    "title": "Firewall rule governance",
    "subtitle": "Agentic technical & privacy audit of the firewall rule governance control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Firewall rule governance\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Firewall rule governance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (Next-gen firewalls (Palo Alto/Fortinet); Network segmentation / microsegmentation; ZTNA / VPN gateways) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the firewall rule governance control (from Next-gen firewalls (Palo Alto/Fortinet))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Next-gen firewalls (Palo Alto/Fortinet)",
        "Network segmentation / microsegmentation",
        "ZTNA / VPN gateways",
        "NDR + flow logs"
      ],
      "dataOwner": [
        "Network engineering",
        "Network security",
        "Security operations",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Network Security controls."
      }
    },
    "badge": {
      "id": "net-02-badge",
      "name": "Network Security Auditor",
      "emoji": "🌐"
    },
    "wonder": {
      "name": "Firewall rule governance",
      "location": "Network Security",
      "era": "Present Day",
      "emoji": "🌐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Firewall rule governance\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the firewall rule governance control (from Next-gen firewalls (Palo Alto/Fortinet))) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"Firewall rule governance\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the firewall rule governance control (from Next-gen firewalls (Palo Alto/Fortinet)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Firewall rule governance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_firewall_rule_governance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Next-gen firewalls (Palo Alto/Fortinet) and Network segmentation / microsegmentation (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_firewall_rule_governance_mcp.py` to expose it to your agent — or `python 02_firewall_rule_governance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Flat network, fast spread",
        "when": "2013",
        "where": "Retail enterprise network",
        "impact": "Weak segmentation let an intrusion that began in a low-value zone reach payment systems.",
        "body": [
          "Target's breach started through an HVAC vendor and spread because the network wasn't segmented to keep that foothold away from card systems.",
          "Auditors verify segmentation/trust zones, firewall-rule governance, secure remote access, and that logging and architecture would contain — not amplify — an intrusion."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Network Security scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Next-gen firewalls (Palo Alto/Fortinet) · Network segmentation / microsegmentation",
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
          "year": 2013,
          "event": "Target: vendor foothold reaches POS via flat network",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Zero-trust segmentation mandated in US EO 14028"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Firewall rule governance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the firewall rule governance control (from Next-gen firewalls (Palo Alto/Fortinet)).",
        "The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Firewall rule governance\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the firewall rule governance control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-207 — Zero Trust Architecture",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
        },
        {
          "title": "CIS Control 12 — Network Infrastructure",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-41 — Firewall policy",
          "url": "https://csrc.nist.gov/pubs/sp/800/41/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_firewall_rule_governance_mcp.py",
          "url": "/audit-code/network-security/02_firewall_rule_governance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"Firewall rule governance\" (in-scope inventory for the firewall rule governance control (from next-gen firewalls (palo alto/fortinet))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Firewall rule governance\" control for Network Security at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Firewall rule governance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the firewall rule governance control (from Next-gen firewalls (Palo Alto/Fortinet)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Next-gen firewalls (Palo Alto/Fortinet) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Next-gen firewalls (Palo Alto/Fortinet) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Next-gen firewalls (Palo Alto/Fortinet); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"Firewall rule governance\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Firewall rule governance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — In-scope inventory for the firewall rule governance control (from Next-gen firewalls (Palo Alto/Fortinet)))\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Firewall rule governance\",\n  \"domain\": \"Network Security\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{net_",
        "/evidence/network-security_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Network engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Firewall rule governance\" control must cover\n# fragment: firewall_rule_governance_",
        "/evidence/network-security_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "network-security_inventory.json",
            "isDir": false
          },
          {
            "name": "network-security_state.json",
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
          "value": "FLAG{net_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/network-security_inventory.json",
          "value": "firewall_rule_governance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/network-security_state.json",
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
          "id": "net-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Firewall rule governance\" sub-process of Network Security?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the firewall rule governance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "net-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Firewall rule governance\" matter to the broader Network Security posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Network Security controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "net-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Firewall rule governance\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the firewall rule governance control (from Next-gen firewalls (Palo Alto/Fortinet)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "net-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Firewall rule governance\"?",
          "options": [
            "Next-gen firewalls (Palo Alto/Fortinet) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Next-gen firewalls (Palo Alto/Fortinet)) via read-only access."
        },
        {
          "id": "net-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Firewall rule governance\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Network engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "net-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Firewall rule governance\", which part stays with the human auditor?",
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
          "id": "net-02-q7",
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
          "id": "net-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Firewall rule governance\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the firewall rule governance control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the firewall rule governance control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "net-02-q9",
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
          "id": "net-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Firewall rule governance\" also serve privacy and regulatory goals?",
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
    "epochId": "network-security",
    "id": "net-03",
    "order": 3,
    "title": "Remote access (VPN, ZTNA)",
    "subtitle": "Agentic technical & privacy audit of the remote access (vpn, ztna) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Remote access (VPN, ZTNA)\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Remote access (VPN, ZTNA)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (Next-gen firewalls (Palo Alto/Fortinet); Network segmentation / microsegmentation; ZTNA / VPN gateways) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the remote access (vpn, ztna) control (from Next-gen firewalls (Palo Alto/Fortinet))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Next-gen firewalls (Palo Alto/Fortinet)",
        "Network segmentation / microsegmentation",
        "ZTNA / VPN gateways",
        "NDR + flow logs"
      ],
      "dataOwner": [
        "Network engineering",
        "Network security",
        "Security operations",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Network Security controls."
      }
    },
    "badge": {
      "id": "net-03-badge",
      "name": "Network Security Auditor",
      "emoji": "🌐"
    },
    "wonder": {
      "name": "Remote access (VPN, ZTNA)",
      "location": "Network Security",
      "era": "Present Day",
      "emoji": "🌐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Remote access (VPN, ZTNA)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the remote access (vpn, ztna) control (from Next-gen firewalls (Palo Alto/Fortinet))) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"Remote access (VPN, ZTNA)\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the remote access (vpn, ztna) control (from Next-gen firewalls (Palo Alto/Fortinet)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Remote access (VPN, ZTNA)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_remote_access_vpn_ztna_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Next-gen firewalls (Palo Alto/Fortinet) and Network segmentation / microsegmentation (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_remote_access_vpn_ztna_mcp.py` to expose it to your agent — or `python 03_remote_access_vpn_ztna_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Flat network, fast spread",
        "when": "2013",
        "where": "Retail enterprise network",
        "impact": "Weak segmentation let an intrusion that began in a low-value zone reach payment systems.",
        "body": [
          "Target's breach started through an HVAC vendor and spread because the network wasn't segmented to keep that foothold away from card systems.",
          "Auditors verify segmentation/trust zones, firewall-rule governance, secure remote access, and that logging and architecture would contain — not amplify — an intrusion."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Network Security scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Next-gen firewalls (Palo Alto/Fortinet) · Network segmentation / microsegmentation",
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
          "year": 2013,
          "event": "Target: vendor foothold reaches POS via flat network",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Zero-trust segmentation mandated in US EO 14028"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Remote access (VPN, ZTNA)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the remote access (vpn, ztna) control (from Next-gen firewalls (Palo Alto/Fortinet)).",
        "The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Remote access (VPN, ZTNA)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the remote access (vpn, ztna) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-207 — Zero Trust Architecture",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
        },
        {
          "title": "CIS Control 12 — Network Infrastructure",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-41 — Firewall policy",
          "url": "https://csrc.nist.gov/pubs/sp/800/41/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_remote_access_vpn_ztna_mcp.py",
          "url": "/audit-code/network-security/03_remote_access_vpn_ztna_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"Remote access (VPN, ZTNA)\" (in-scope inventory for the remote access (vpn, ztna) control (from next-gen firewalls (palo alto/fortinet))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Remote access (VPN, ZTNA)\" control for Network Security at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Remote access (VPN, ZTNA)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the remote access (vpn, ztna) control (from Next-gen firewalls (Palo Alto/Fortinet)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Next-gen firewalls (Palo Alto/Fortinet) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Next-gen firewalls (Palo Alto/Fortinet) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Next-gen firewalls (Palo Alto/Fortinet); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"Remote access (VPN, ZTNA)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Remote access (VPN, ZTNA)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — In-scope inventory for the remote access (vpn, ztna) control (from Next-gen firewalls (Palo Alto/Fortinet)))\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Remote access (VPN, ZTNA)\",\n  \"domain\": \"Network Security\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{net_",
        "/evidence/network-security_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Network engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Remote access (VPN, ZTNA)\" control must cover\n# fragment: remote_access_vpn_",
        "/evidence/network-security_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "network-security_inventory.json",
            "isDir": false
          },
          {
            "name": "network-security_state.json",
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
          "value": "FLAG{net_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/network-security_inventory.json",
          "value": "remote_access_vpn_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/network-security_state.json",
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
          "id": "net-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Remote access (VPN, ZTNA)\" sub-process of Network Security?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the remote access (vpn, ztna) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "net-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Remote access (VPN, ZTNA)\" matter to the broader Network Security posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Network Security controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "net-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Remote access (VPN, ZTNA)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the remote access (vpn, ztna) control (from Next-gen firewalls (Palo Alto/Fortinet)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "net-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Remote access (VPN, ZTNA)\"?",
          "options": [
            "Next-gen firewalls (Palo Alto/Fortinet) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Next-gen firewalls (Palo Alto/Fortinet)) via read-only access."
        },
        {
          "id": "net-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Remote access (VPN, ZTNA)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Network engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "net-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Remote access (VPN, ZTNA)\", which part stays with the human auditor?",
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
          "id": "net-03-q7",
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
          "id": "net-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Remote access (VPN, ZTNA)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the remote access (vpn, ztna) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the remote access (vpn, ztna) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "net-03-q9",
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
          "id": "net-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Remote access (VPN, ZTNA)\" also serve privacy and regulatory goals?",
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
    "epochId": "network-security",
    "id": "net-04",
    "order": 4,
    "title": "Logging and monitoring",
    "subtitle": "Agentic technical & privacy audit of the logging and monitoring control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Logging and monitoring\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (Next-gen firewalls (Palo Alto/Fortinet); Network segmentation / microsegmentation; ZTNA / VPN gateways) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the logging and monitoring control (from Next-gen firewalls (Palo Alto/Fortinet))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Next-gen firewalls (Palo Alto/Fortinet)",
        "Network segmentation / microsegmentation",
        "ZTNA / VPN gateways",
        "NDR + flow logs"
      ],
      "dataOwner": [
        "Network engineering",
        "Network security",
        "Security operations",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Network Security controls."
      }
    },
    "badge": {
      "id": "net-04-badge",
      "name": "Network Security Auditor",
      "emoji": "🌐"
    },
    "wonder": {
      "name": "Logging and monitoring",
      "location": "Network Security",
      "era": "Present Day",
      "emoji": "🌐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Logging and monitoring\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the logging and monitoring control (from Next-gen firewalls (Palo Alto/Fortinet))) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"Logging and monitoring\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the logging and monitoring control (from Next-gen firewalls (Palo Alto/Fortinet)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_logging_and_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Next-gen firewalls (Palo Alto/Fortinet) and Network segmentation / microsegmentation (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_logging_and_monitoring_mcp.py` to expose it to your agent — or `python 04_logging_and_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Flat network, fast spread",
        "when": "2013",
        "where": "Retail enterprise network",
        "impact": "Weak segmentation let an intrusion that began in a low-value zone reach payment systems.",
        "body": [
          "Target's breach started through an HVAC vendor and spread because the network wasn't segmented to keep that foothold away from card systems.",
          "Auditors verify segmentation/trust zones, firewall-rule governance, secure remote access, and that logging and architecture would contain — not amplify — an intrusion."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Network Security scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Next-gen firewalls (Palo Alto/Fortinet) · Network segmentation / microsegmentation",
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
          "year": 2013,
          "event": "Target: vendor foothold reaches POS via flat network",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Zero-trust segmentation mandated in US EO 14028"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Logging and monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the logging and monitoring control (from Next-gen firewalls (Palo Alto/Fortinet)).",
        "The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Logging and monitoring\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-207 — Zero Trust Architecture",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
        },
        {
          "title": "CIS Control 12 — Network Infrastructure",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-41 — Firewall policy",
          "url": "https://csrc.nist.gov/pubs/sp/800/41/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_logging_and_monitoring_mcp.py",
          "url": "/audit-code/network-security/04_logging_and_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"Logging and monitoring\" (in-scope inventory for the logging and monitoring control (from next-gen firewalls (palo alto/fortinet))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Logging and monitoring\" control for Network Security at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the logging and monitoring control (from Next-gen firewalls (Palo Alto/Fortinet)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Next-gen firewalls (Palo Alto/Fortinet) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Next-gen firewalls (Palo Alto/Fortinet) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Next-gen firewalls (Palo Alto/Fortinet); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"Logging and monitoring\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — In-scope inventory for the logging and monitoring control (from Next-gen firewalls (Palo Alto/Fortinet)))\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Logging and monitoring\",\n  \"domain\": \"Network Security\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{net_",
        "/evidence/network-security_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Network engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Logging and monitoring\" control must cover\n# fragment: logging_monitoring_",
        "/evidence/network-security_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "network-security_inventory.json",
            "isDir": false
          },
          {
            "name": "network-security_state.json",
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
          "value": "FLAG{net_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/network-security_inventory.json",
          "value": "logging_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/network-security_state.json",
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
          "id": "net-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Logging and monitoring\" sub-process of Network Security?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the logging and monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "net-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Logging and monitoring\" matter to the broader Network Security posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Network Security controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "net-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Logging and monitoring\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the logging and monitoring control (from Next-gen firewalls (Palo Alto/Fortinet)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "net-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Logging and monitoring\"?",
          "options": [
            "Next-gen firewalls (Palo Alto/Fortinet) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Next-gen firewalls (Palo Alto/Fortinet)) via read-only access."
        },
        {
          "id": "net-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Logging and monitoring\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Network engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "net-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Logging and monitoring\", which part stays with the human auditor?",
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
          "id": "net-04-q7",
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
          "id": "net-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Logging and monitoring\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "net-04-q9",
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
          "id": "net-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Logging and monitoring\" also serve privacy and regulatory goals?",
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
    "epochId": "network-security",
    "id": "net-05",
    "order": 5,
    "title": "Secure network architecture",
    "subtitle": "Agentic technical & privacy audit of the secure network architecture control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 4,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secure network architecture\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Secure network architecture\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (Next-gen firewalls (Palo Alto/Fortinet); Network segmentation / microsegmentation; ZTNA / VPN gateways) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the secure network architecture control (from Next-gen firewalls (Palo Alto/Fortinet))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Next-gen firewalls (Palo Alto/Fortinet)",
        "Network segmentation / microsegmentation",
        "ZTNA / VPN gateways",
        "NDR + flow logs"
      ],
      "dataOwner": [
        "Network engineering",
        "Network security",
        "Security operations",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 4/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Network Security controls."
      }
    },
    "badge": {
      "id": "net-05-badge",
      "name": "Network Security Auditor",
      "emoji": "🌐"
    },
    "wonder": {
      "name": "Secure network architecture",
      "location": "Network Security",
      "era": "Present Day",
      "emoji": "🌐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secure network architecture\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the secure network architecture control (from Next-gen firewalls (Palo Alto/Fortinet))) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"Secure network architecture\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the secure network architecture control (from Next-gen firewalls (Palo Alto/Fortinet)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Secure network architecture\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_secure_network_architecture_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Next-gen firewalls (Palo Alto/Fortinet) and Network segmentation / microsegmentation (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_secure_network_architecture_mcp.py` to expose it to your agent — or `python 05_secure_network_architecture_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Flat network, fast spread",
        "when": "2013",
        "where": "Retail enterprise network",
        "impact": "Weak segmentation let an intrusion that began in a low-value zone reach payment systems.",
        "body": [
          "Target's breach started through an HVAC vendor and spread because the network wasn't segmented to keep that foothold away from card systems.",
          "Auditors verify segmentation/trust zones, firewall-rule governance, secure remote access, and that logging and architecture would contain — not amplify — an intrusion."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Network Security scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Next-gen firewalls (Palo Alto/Fortinet) · Network segmentation / microsegmentation",
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
          "year": 2013,
          "event": "Target: vendor foothold reaches POS via flat network",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Zero-trust segmentation mandated in US EO 14028"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secure network architecture\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the secure network architecture control (from Next-gen firewalls (Palo Alto/Fortinet)).",
        "The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Secure network architecture\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the secure network architecture control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-207 — Zero Trust Architecture",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
        },
        {
          "title": "CIS Control 12 — Network Infrastructure",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-41 — Firewall policy",
          "url": "https://csrc.nist.gov/pubs/sp/800/41/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_secure_network_architecture_mcp.py",
          "url": "/audit-code/network-security/05_secure_network_architecture_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"Secure network architecture\" (in-scope inventory for the secure network architecture control (from next-gen firewalls (palo alto/fortinet))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secure network architecture\" control for Network Security at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Secure network architecture\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the secure network architecture control (from Next-gen firewalls (Palo Alto/Fortinet)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Next-gen firewalls (Palo Alto/Fortinet) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Next-gen firewalls (Palo Alto/Fortinet) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Next-gen firewalls (Palo Alto/Fortinet); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"Secure network architecture\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Secure network architecture\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — In-scope inventory for the secure network architecture control (from Next-gen firewalls (Palo Alto/Fortinet)))\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secure network architecture\",\n  \"domain\": \"Network Security\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{net_",
        "/evidence/network-security_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Network engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secure network architecture\" control must cover\n# fragment: secure_network_architecture_",
        "/evidence/network-security_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "network-security_inventory.json",
            "isDir": false
          },
          {
            "name": "network-security_state.json",
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
          "value": "FLAG{net_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/network-security_inventory.json",
          "value": "secure_network_architecture_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/network-security_state.json",
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
          "id": "net-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secure network architecture\" sub-process of Network Security?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the secure network architecture control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "net-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secure network architecture\" matter to the broader Network Security posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Network Security controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "net-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secure network architecture\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the secure network architecture control (from Next-gen firewalls (Palo Alto/Fortinet)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "net-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Secure network architecture\"?",
          "options": [
            "Next-gen firewalls (Palo Alto/Fortinet) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Next-gen firewalls (Palo Alto/Fortinet)) via read-only access."
        },
        {
          "id": "net-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secure network architecture\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Network engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "net-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secure network architecture\", which part stays with the human auditor?",
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
          "id": "net-05-q7",
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
          "id": "net-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secure network architecture\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the secure network architecture control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the secure network architecture control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "net-05-q9",
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
          "id": "net-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secure network architecture\" also serve privacy and regulatory goals?",
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
    "epochId": "network-security",
    "id": "net-06",
    "order": 6,
    "title": "Device config mgmt and backups",
    "subtitle": "Agentic technical & privacy audit of the device config mgmt and backups control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Device config mgmt and backups\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Device config mgmt and backups\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (Next-gen firewalls (Palo Alto/Fortinet); Network segmentation / microsegmentation; ZTNA / VPN gateways) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the device config mgmt and backups control (from Next-gen firewalls (Palo Alto/Fortinet))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Next-gen firewalls (Palo Alto/Fortinet)",
        "Network segmentation / microsegmentation",
        "ZTNA / VPN gateways",
        "NDR + flow logs"
      ],
      "dataOwner": [
        "Network engineering",
        "Network security",
        "Security operations",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Network Security controls."
      }
    },
    "badge": {
      "id": "net-06-badge",
      "name": "Network Security Auditor",
      "emoji": "🌐"
    },
    "wonder": {
      "name": "Device config mgmt and backups",
      "location": "Network Security",
      "era": "Present Day",
      "emoji": "🌐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Device config mgmt and backups\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the device config mgmt and backups control (from Next-gen firewalls (Palo Alto/Fortinet))) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"Device config mgmt and backups\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the device config mgmt and backups control (from Next-gen firewalls (Palo Alto/Fortinet)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Device config mgmt and backups\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_device_config_mgmt_and_backups_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Next-gen firewalls (Palo Alto/Fortinet) and Network segmentation / microsegmentation (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_device_config_mgmt_and_backups_mcp.py` to expose it to your agent — or `python 06_device_config_mgmt_and_backups_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Flat network, fast spread",
        "when": "2013",
        "where": "Retail enterprise network",
        "impact": "Weak segmentation let an intrusion that began in a low-value zone reach payment systems.",
        "body": [
          "Target's breach started through an HVAC vendor and spread because the network wasn't segmented to keep that foothold away from card systems.",
          "Auditors verify segmentation/trust zones, firewall-rule governance, secure remote access, and that logging and architecture would contain — not amplify — an intrusion."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Network Security scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Next-gen firewalls (Palo Alto/Fortinet) · Network segmentation / microsegmentation",
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
          "year": 2013,
          "event": "Target: vendor foothold reaches POS via flat network",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Zero-trust segmentation mandated in US EO 14028"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Device config mgmt and backups\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the device config mgmt and backups control (from Next-gen firewalls (Palo Alto/Fortinet)).",
        "The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Device config mgmt and backups\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the device config mgmt and backups control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-207 — Zero Trust Architecture",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
        },
        {
          "title": "CIS Control 12 — Network Infrastructure",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-41 — Firewall policy",
          "url": "https://csrc.nist.gov/pubs/sp/800/41/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_device_config_mgmt_and_backups_mcp.py",
          "url": "/audit-code/network-security/06_device_config_mgmt_and_backups_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"Device config mgmt and backups\" (in-scope inventory for the device config mgmt and backups control (from next-gen firewalls (palo alto/fortinet))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Device config mgmt and backups\" control for Network Security at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Device config mgmt and backups\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the device config mgmt and backups control (from Next-gen firewalls (Palo Alto/Fortinet)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Next-gen firewalls (Palo Alto/Fortinet) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Next-gen firewalls (Palo Alto/Fortinet) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Next-gen firewalls (Palo Alto/Fortinet); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"Device config mgmt and backups\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"Device config mgmt and backups\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — In-scope inventory for the device config mgmt and backups control (from Next-gen firewalls (Palo Alto/Fortinet)))\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Device config mgmt and backups\",\n  \"domain\": \"Network Security\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{net_",
        "/evidence/network-security_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Network engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Device config mgmt and backups\" control must cover\n# fragment: device_config_mgmt_",
        "/evidence/network-security_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "network-security_inventory.json",
            "isDir": false
          },
          {
            "name": "network-security_state.json",
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
          "value": "FLAG{net_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/network-security_inventory.json",
          "value": "device_config_mgmt_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/network-security_state.json",
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
          "id": "net-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Device config mgmt and backups\" sub-process of Network Security?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the device config mgmt and backups control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "net-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Device config mgmt and backups\" matter to the broader Network Security posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Network Security controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "net-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Device config mgmt and backups\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the device config mgmt and backups control (from Next-gen firewalls (Palo Alto/Fortinet)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "net-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Device config mgmt and backups\"?",
          "options": [
            "Next-gen firewalls (Palo Alto/Fortinet) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Next-gen firewalls (Palo Alto/Fortinet)) via read-only access."
        },
        {
          "id": "net-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Device config mgmt and backups\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Network engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "net-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Device config mgmt and backups\", which part stays with the human auditor?",
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
          "id": "net-06-q7",
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
          "id": "net-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Device config mgmt and backups\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the device config mgmt and backups control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the device config mgmt and backups control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "net-06-q9",
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
          "id": "net-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Device config mgmt and backups\" also serve privacy and regulatory goals?",
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
    "epochId": "network-security",
    "id": "net-07",
    "order": 7,
    "title": "AIOps / AI-driven networking",
    "subtitle": "Agentic technical & privacy audit of the aiops / ai-driven networking control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AIOps / AI-driven networking\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"AIOps / AI-driven networking\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (Next-gen firewalls (Palo Alto/Fortinet); Network segmentation / microsegmentation; ZTNA / VPN gateways) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the aiops / ai-driven networking control (from Next-gen firewalls (Palo Alto/Fortinet))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Next-gen firewalls (Palo Alto/Fortinet)",
        "Network segmentation / microsegmentation",
        "ZTNA / VPN gateways",
        "NDR + flow logs"
      ],
      "dataOwner": [
        "Network engineering",
        "Network security",
        "Security operations",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Network Security controls."
      }
    },
    "badge": {
      "id": "net-07-badge",
      "name": "Network Security Auditor",
      "emoji": "🌐"
    },
    "wonder": {
      "name": "AIOps / AI-driven networking",
      "location": "Network Security",
      "era": "Present Day",
      "emoji": "🌐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AIOps / AI-driven networking\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the aiops / ai-driven networking control (from Next-gen firewalls (Palo Alto/Fortinet))) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"AIOps / AI-driven networking\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the aiops / ai-driven networking control (from Next-gen firewalls (Palo Alto/Fortinet)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"AIOps / AI-driven networking\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_aiops_ai_driven_networking_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Next-gen firewalls (Palo Alto/Fortinet) and Network segmentation / microsegmentation (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_aiops_ai_driven_networking_mcp.py` to expose it to your agent — or `python 07_aiops_ai_driven_networking_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Flat network, fast spread",
        "when": "2013",
        "where": "Retail enterprise network",
        "impact": "Weak segmentation let an intrusion that began in a low-value zone reach payment systems.",
        "body": [
          "Target's breach started through an HVAC vendor and spread because the network wasn't segmented to keep that foothold away from card systems.",
          "Auditors verify segmentation/trust zones, firewall-rule governance, secure remote access, and that logging and architecture would contain — not amplify — an intrusion."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Network Security scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Next-gen firewalls (Palo Alto/Fortinet) · Network segmentation / microsegmentation",
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
          "year": 2013,
          "event": "Target: vendor foothold reaches POS via flat network",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Zero-trust segmentation mandated in US EO 14028"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AIOps / AI-driven networking\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the aiops / ai-driven networking control (from Next-gen firewalls (Palo Alto/Fortinet)).",
        "The test: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"AIOps / AI-driven networking\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Next-gen firewalls (Palo Alto/Fortinet), Network segmentation / microsegmentation, ZTNA / VPN gateways) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the aiops / ai-driven networking control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-207 — Zero Trust Architecture",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
        },
        {
          "title": "CIS Control 12 — Network Infrastructure",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-41 — Firewall policy",
          "url": "https://csrc.nist.gov/pubs/sp/800/41/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_aiops_ai_driven_networking_mcp.py",
          "url": "/audit-code/network-security/07_aiops_ai_driven_networking_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"AIOps / AI-driven networking\" (in-scope inventory for the aiops / ai-driven networking control (from next-gen firewalls (palo alto/fortinet))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AIOps / AI-driven networking\" control for Network Security at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"AIOps / AI-driven networking\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the aiops / ai-driven networking control (from Next-gen firewalls (Palo Alto/Fortinet)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Next-gen firewalls (Palo Alto/Fortinet) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Next-gen firewalls (Palo Alto/Fortinet) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Next-gen firewalls (Palo Alto/Fortinet); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"AIOps / AI-driven networking\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Network Security policy/standard and flag every item where the \"AIOps / AI-driven networking\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — In-scope inventory for the aiops / ai-driven networking control (from Next-gen firewalls (Palo Alto/Fortinet)))\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AIOps / AI-driven networking\",\n  \"domain\": \"Network Security\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{net_",
        "/evidence/network-security_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Network engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AIOps / AI-driven networking\" control must cover\n# fragment: aiops_aidriven_networking_",
        "/evidence/network-security_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "network-security_inventory.json",
            "isDir": false
          },
          {
            "name": "network-security_state.json",
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
          "value": "FLAG{net_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/network-security_inventory.json",
          "value": "aiops_aidriven_networking_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/network-security_state.json",
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
          "id": "net-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AIOps / AI-driven networking\" sub-process of Network Security?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the aiops / ai-driven networking control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "net-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AIOps / AI-driven networking\" matter to the broader Network Security posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Network Security controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "net-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AIOps / AI-driven networking\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the aiops / ai-driven networking control (from Next-gen firewalls (Palo Alto/Fortinet)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "net-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"AIOps / AI-driven networking\"?",
          "options": [
            "Next-gen firewalls (Palo Alto/Fortinet) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Next-gen firewalls (Palo Alto/Fortinet)) via read-only access."
        },
        {
          "id": "net-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AIOps / AI-driven networking\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Network engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "net-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AIOps / AI-driven networking\", which part stays with the human auditor?",
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
          "id": "net-07-q7",
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
          "id": "net-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AIOps / AI-driven networking\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the aiops / ai-driven networking control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the aiops / ai-driven networking control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "net-07-q9",
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
          "id": "net-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AIOps / AI-driven networking\" also serve privacy and regulatory goals?",
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
