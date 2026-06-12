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
      "objective": "Prove the \"Network segmentation and trust zones\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Validate that the defined trust zones are actually enforced, not just drawn. PASS: each in-scope zone boundary is enforced deny-by-default; observed east-west flows match the documented allow-list; and sensitive zones (PCI CDE, OT, the management plane) are isolated. Exceptions: zones reachable any-to-any, a 'segmented' boundary held open by a permit-ip-any rule, and flows in the logs that no rule should allow (shadow connectivity).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (NGFW — Palo Alto / Fortinet / Cisco (zone enforcement); Microsegmentation — Illumio / VMware NSX / cloud security groups; NetFlow/IPFIX or NDR (observed flows)) as tools — e.g. `export the firewall rulebase + interface-to-zone mapping (Panorama / F`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The network segmentation diagram plus the authoritative VLAN/subnet-to-trust-zone mapping",
        "The firewall/ACL rules that enforce each inter-zone boundary (user→server, app→database, corporate↔OT, CDE↔non-CDE)",
        "East-west traffic-flow logs (NetFlow/IPFIX) showing what actually crosses zone boundaries",
        "The list of flat or over-permissive segments — any-to-any reachability"
      ],
      "system": [
        "NGFW — Palo Alto / Fortinet / Cisco (zone enforcement)",
        "Microsegmentation — Illumio / VMware NSX / cloud security groups",
        "NetFlow/IPFIX or NDR (observed flows)",
        "Network/CMDB zone documentation"
      ],
      "dataOwner": [
        "Network engineering — owns the topology",
        "Network security — owns the zone policy",
        "Application & data owners — declare which zone their assets belong to"
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
      "tagline": "Auditing \"Network segmentation and trust zones\" as a repeatable agentic workflow: pull the real evidence (The network segmentation diagram plus the authoritative VLAN/subnet-to-trust-zone mapping) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"Network segmentation and trust zones\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the network segmentation diagram plus the authoritative VLAN/subnet-to-trust-zone mapping, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here NGFW — Palo Alto / Fortinet / Cisco (zone enforcement), Microsegmentation — Illumio / VMware NSX / cloud security groups, NetFlow/IPFIX or NDR (observed flows) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `export the firewall rulebase + interface-to-zone mapping (Panorama / FortiManage` — read-only, against the systems of record.",
        "The test itself is specific. Validate that the defined trust zones are actually enforced, not just drawn. PASS: each in-scope zone boundary is enforced deny-by-default; observed east-west flows match the documented allow-list; and sensitive zones (PCI CDE, OT, the management plane) are isolated. Exceptions: zones reachable any-to-any, a 'segmented' boundary held open by a permit-ip-any rule, and flows in the logs that no rule should allow (shadow connectivity). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_network_segmentation_and_trust_zones_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from NGFW — Palo Alto / Fortinet / Cisco (zone enforcement) and Microsegmentation — Illumio / VMware NSX / cloud security groups (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull NGFW — Palo Alto / Fortinet / Cisco (zone enforcement) · Microsegmentation — Illumio / VMware NSX / cloud security groups",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "export the firewall rulebase + interface-to-zone mapping (Panorama / FortiManager)\ncompare the documented zone matrix against the actual inter-zone permit rules\nNetFlow analysis: list cross-zone flows that are NOT in the allow-list\nIllumio/NSX policy export + traffic explorer to see real east-west connectivity"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The network segmentation diagram plus the authoritative VLAN/subnet-to-trust-zone mapping.",
        "The test: Validate that the defined trust zones are actually enforced, not just drawn.",
        "Reconcile the systems of record (NGFW — Palo Alto / Fortinet / Cisco (zone enforcement), Microsegmentation — Illumio / VMware NSX / cloud security groups, NetFlow/IPFIX or NDR (observed flows)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The 'segmented' database VLAN is reachable from the entire user VLAN via a legacy permit-any rule, and NetFlow shows workstations talking straight to the database — the segmentation exists only on the diagram."
      ],
      "references": [
        {
          "title": "NIST SP 800-207 Zero Trust Architecture",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
        },
        {
          "title": "PCI DSS — Network Segmentation Guidance",
          "url": "https://www.pcisecuritystandards.org/"
        },
        {
          "title": "CIS Control 12 Network Infrastructure",
          "url": "https://www.cisecurity.org/controls"
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
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"Network segmentation and trust zones\" (the network segmentation diagram plus the authoritative vlan/subnet-to-trust-zone mapping), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Network segmentation and trust zones\" control for Network Security at AcmeCorp. THE TEST: Validate that the defined trust zones are actually enforced, not just drawn. PASS: each in-scope zone boundary is enforced deny-by-default; observed east-west flows match the documented allow-list; and sensitive zones (PCI CDE, OT, the management plane) are isolated. Exceptions: zones reachable any-to-any, a 'segmented' boundary held open by a permit-ip-any rule, and flows in the logs that no rule should allow (shadow connectivity). The evidence — The network segmentation diagram plus the authoritative VLAN/subnet-to-trust-zone mapping — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live NGFW — Palo Alto / Fortinet / Cisco (zone enforcement) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. NGFW — Palo Alto / Fortinet / Cisco (zone enforcement) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from NGFW — Palo Alto / Fortinet / Cisco (zone enforcement); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"Network segmentation and trust zones\" Audit Evidence\n\nThe test:\nValidate that the defined trust zones are actually enforced, not just drawn. PASS: each in-scope zone boundary is enforced deny-by-default; observed east-west flows match the documented allow-list; and sensitive zones (PCI CDE, OT, the management plane) are isolated. Exceptions: zones reachable any-to-any, a 'segmented' boundary held open by a permit-ip-any rule, and flows in the logs that no rule should allow (shadow connectivity).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — The network segmentation diagram plus the authoritative VLAN/subnet-to-trust-zone mapping)\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The network segmentation diagram plus the authoritative VLAN/subnet-to-trust-zone mapping reconciled against policy, plus the resulting findings working paper",
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
            "NGFW — Palo Alto / Fortinet / Cisco (zone enforcement) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., NGFW — Palo Alto / Fortinet / Cisco (zone enforcement)) via read-only access."
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
            "Network engineering — owns the topology (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network engineering — owns the topology owns the control data; the auditor independently verifies it."
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
            "The 'segmented' database VLAN is reachable from the entire user VLAN via a legacy permit-any rule, and NetFlow shows workstations talking straight to the database — the segmentation exists only on the diagram.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The 'segmented' database VLAN is reachable from the entire user VLAN via a legacy permit-any rule, and NetFlow shows workstations talking straight to the database — the segmentation exists only on the diagram."
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
      "objective": "Prove the \"Firewall rule governance\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Review the firewall rule base for governance. PASS: every rule has a documented business justification, an owner, and an approval ticket; rules are recertified on cadence; there are no any-any or overly-broad permits; unused (zero-hit) and shadowed/redundant rules are removed; and logging is on for denies and sensitive permits. Exceptions: rules with no owner or justification, permit any-any, zero-hit rules left in place for years, and rules with no approval trail.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (Firewall management — Panorama / FortiManager / Cisco FMC; Firewall analyzer — Tufin / AlgoSec / FireMon; Change management (rule ↔ ticket)) as tools — e.g. `export the rulebase with hit-counts + last-hit (e.g. PAN-OS `show rule`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The full firewall rule base export — source, destination, service, action, hit-count, age, owner, last-modified",
        "The change tickets that justify each rule (every rule → an approved change)",
        "The rule-recertification records (periodic review that the business need still exists)",
        "Shadowed / expired / overly-permissive rule analysis (any-any, zero-hit, redundant)"
      ],
      "system": [
        "Firewall management — Panorama / FortiManager / Cisco FMC",
        "Firewall analyzer — Tufin / AlgoSec / FireMon",
        "Change management (rule ↔ ticket)"
      ],
      "dataOwner": [
        "Network security / firewall team — owns the rulebase",
        "Application owners — justify their rules",
        "Change management"
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
      "tagline": "Auditing \"Firewall rule governance\" as a repeatable agentic workflow: pull the real evidence (The full firewall rule base export — source, destination, service, action, hit-count, age, owner, last-modified) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"Firewall rule governance\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the full firewall rule base export — source, destination, service, action, hit-count, age, owner, last-modified, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Firewall management — Panorama / FortiManager / Cisco FMC, Firewall analyzer — Tufin / AlgoSec / FireMon, Change management (rule ↔ ticket) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `export the rulebase with hit-counts + last-hit (e.g. PAN-OS `show rule-hit-count` — read-only, against the systems of record.",
        "The test itself is specific. Review the firewall rule base for governance. PASS: every rule has a documented business justification, an owner, and an approval ticket; rules are recertified on cadence; there are no any-any or overly-broad permits; unused (zero-hit) and shadowed/redundant rules are removed; and logging is on for denies and sensitive permits. Exceptions: rules with no owner or justification, permit any-any, zero-hit rules left in place for years, and rules with no approval trail. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_firewall_rule_governance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Firewall management — Panorama / FortiManager / Cisco FMC and Firewall analyzer — Tufin / AlgoSec / FireMon (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Firewall management — Panorama / FortiManager / Cisco FMC · Firewall analyzer — Tufin / AlgoSec / FireMon",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "export the rulebase with hit-counts + last-hit (e.g. PAN-OS `show rule-hit-count`)\nTufin/AlgoSec rule-cleanup + risk report (any-any, shadowed, unused, redundant)\njoin each rule to its change-ticket id (the recertification/approval evidence)\nflag any permit to a sensitive zone that has logging disabled"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The full firewall rule base export — source, destination, service, action, hit-count, age, owner, last-modified.",
        "The test: Review the firewall rule base for governance.",
        "Reconcile the systems of record (Firewall management — Panorama / FortiManager / Cisco FMC, Firewall analyzer — Tufin / AlgoSec / FireMon, Change management (rule ↔ ticket)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Hundreds of zero-hit rules accreted over a decade, dozens of permit any-any rules with no owner, and rules whose 'temporary, 2019' justification never expired."
      ],
      "references": [
        {
          "title": "NIST SP 800-41 Firewall Policy",
          "url": "https://csrc.nist.gov/pubs/sp/800/41/r1/final"
        },
        {
          "title": "PCI DSS Requirement 1",
          "url": "https://www.pcisecuritystandards.org/"
        },
        {
          "title": "CIS Control 13 Network Monitoring & Defense",
          "url": "https://www.cisecurity.org/controls"
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
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"Firewall rule governance\" (the full firewall rule base export — source, destination, service, action, hit-count, age, owner, last-modified), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Firewall rule governance\" control for Network Security at AcmeCorp. THE TEST: Review the firewall rule base for governance. PASS: every rule has a documented business justification, an owner, and an approval ticket; rules are recertified on cadence; there are no any-any or overly-broad permits; unused (zero-hit) and shadowed/redundant rules are removed; and logging is on for denies and sensitive permits. Exceptions: rules with no owner or justification, permit any-any, zero-hit rules left in place for years, and rules with no approval trail. The evidence — The full firewall rule base export — source, destination, service, action, hit-count, age, owner, last-modified — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Firewall management — Panorama / FortiManager / Cisco FMC APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Firewall management — Panorama / FortiManager / Cisco FMC gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Firewall management — Panorama / FortiManager / Cisco FMC; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"Firewall rule governance\" Audit Evidence\n\nThe test:\nReview the firewall rule base for governance. PASS: every rule has a documented business justification, an owner, and an approval ticket; rules are recertified on cadence; there are no any-any or overly-broad permits; unused (zero-hit) and shadowed/redundant rules are removed; and logging is on for denies and sensitive permits. Exceptions: rules with no owner or justification, permit any-any, zero-hit rules left in place for years, and rules with no approval trail.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — The full firewall rule base export — source, destination, service, action, hit-count, age, owner, last-modified)\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The full firewall rule base export — source, destination, service, action, hit-count, age, owner, last-modified reconciled against policy, plus the resulting findings working paper",
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
            "Firewall management — Panorama / FortiManager / Cisco FMC (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Firewall management — Panorama / FortiManager / Cisco FMC) via read-only access."
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
            "Network security / firewall team — owns the rulebase (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network security / firewall team — owns the rulebase owns the control data; the auditor independently verifies it."
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
            "Hundreds of zero-hit rules accreted over a decade, dozens of permit any-any rules with no owner, and rules whose 'temporary, 2019' justification never expired.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Hundreds of zero-hit rules accreted over a decade, dozens of permit any-any rules with no owner, and rules whose 'temporary, 2019' justification never expired."
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
      "objective": "Prove the \"Remote access (VPN, ZTNA)\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess every remote-access path into the network. PASS: all require phishing-resistant MFA and a posture-checked device; access is least-privilege (ZTNA per-application, or tightly-scoped VPN, not flat-subnet); split/full-tunnel is deliberate; sessions time out and are logged; legacy/unused gateways are decommissioned. Exceptions: a VPN without MFA, a VPN that drops users onto a flat internal subnet, no device-posture check, and forgotten internet-facing remote-access gateways.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (VPN gateways — Cisco AnyConnect / Palo Alto GlobalProtect / Fortinet; ZTNA — Zscaler Private Access / Cloudflare Access / Netskope; IdP/MFA + MDM posture — Entra/Okta + Intune/Jamf) as tools — e.g. `enumerate remote-access gateways (external scan + config) and the auth`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The remote-access inventory — every VPN gateway and ZTNA application, and who is entitled to each",
        "MFA + device-posture enforcement evidence for remote sessions",
        "The access scope each method grants (full-tunnel / flat subnet vs ZTNA per-application)",
        "Session logs + idle/absolute timeout config + the split-tunnel policy"
      ],
      "system": [
        "VPN gateways — Cisco AnyConnect / Palo Alto GlobalProtect / Fortinet",
        "ZTNA — Zscaler Private Access / Cloudflare Access / Netskope",
        "IdP/MFA + MDM posture — Entra/Okta + Intune/Jamf"
      ],
      "dataOwner": [
        "Network security — owns VPN/ZTNA",
        "IAM — owns MFA",
        "Endpoint — owns device posture"
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
      "tagline": "Auditing \"Remote access (VPN, ZTNA)\" as a repeatable agentic workflow: pull the real evidence (The remote-access inventory — every VPN gateway and ZTNA application, and who is entitled to each) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"Remote access (VPN, ZTNA)\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the remote-access inventory — every VPN gateway and ZTNA application, and who is entitled to each, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here VPN gateways — Cisco AnyConnect / Palo Alto GlobalProtect / Fortinet, ZTNA — Zscaler Private Access / Cloudflare Access / Netskope, IdP/MFA + MDM posture — Entra/Okta + Intune/Jamf — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `enumerate remote-access gateways (external scan + config) and the auth method ea` — read-only, against the systems of record.",
        "The test itself is specific. Assess every remote-access path into the network. PASS: all require phishing-resistant MFA and a posture-checked device; access is least-privilege (ZTNA per-application, or tightly-scoped VPN, not flat-subnet); split/full-tunnel is deliberate; sessions time out and are logged; legacy/unused gateways are decommissioned. Exceptions: a VPN without MFA, a VPN that drops users onto a flat internal subnet, no device-posture check, and forgotten internet-facing remote-access gateways. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_remote_access_vpn_ztna_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from VPN gateways — Cisco AnyConnect / Palo Alto GlobalProtect / Fortinet and ZTNA — Zscaler Private Access / Cloudflare Access / Netskope (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull VPN gateways — Cisco AnyConnect / Palo Alto GlobalProtect / Fortinet · ZTNA — Zscaler Private Access / Cloudflare Access / Netskope",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "enumerate remote-access gateways (external scan + config) and the auth method each uses\nconfirm MFA + Conditional Access / device posture on every VPN and ZTNA portal\nreview the access scope: ZTNA per-app policy vs the routes a VPN actually pushes\nShodan/Censys external scan for exposed remote-access portals you forgot existed"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The remote-access inventory — every VPN gateway and ZTNA application, and who is entitled to each.",
        "The test: Assess every remote-access path into the network.",
        "Reconcile the systems of record (VPN gateways — Cisco AnyConnect / Palo Alto GlobalProtect / Fortinet, ZTNA — Zscaler Private Access / Cloudflare Access / Netskope, IdP/MFA + MDM posture — Entra/Okta + Intune/Jamf) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A legacy SSL-VPN appliance, still internet-facing and unpatched, accepts username + password only (no MFA) and routes onto a flat /16 internal network — the textbook ransomware entry point."
      ],
      "references": [
        {
          "title": "NIST SP 800-207 Zero Trust Architecture",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
        },
        {
          "title": "CISA — Securing Remote Access / VPN",
          "url": "https://www.cisa.gov/"
        },
        {
          "title": "NIST SP 800-46 Telework Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
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
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"Remote access (VPN, ZTNA)\" (the remote-access inventory — every vpn gateway and ztna application, and who is entitled to each), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Remote access (VPN, ZTNA)\" control for Network Security at AcmeCorp. THE TEST: Assess every remote-access path into the network. PASS: all require phishing-resistant MFA and a posture-checked device; access is least-privilege (ZTNA per-application, or tightly-scoped VPN, not flat-subnet); split/full-tunnel is deliberate; sessions time out and are logged; legacy/unused gateways are decommissioned. Exceptions: a VPN without MFA, a VPN that drops users onto a flat internal subnet, no device-posture check, and forgotten internet-facing remote-access gateways. The evidence — The remote-access inventory — every VPN gateway and ZTNA application, and who is entitled to each — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live VPN gateways — Cisco AnyConnect / Palo Alto GlobalProtect / Fortinet APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. VPN gateways — Cisco AnyConnect / Palo Alto GlobalProtect / Fortinet gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from VPN gateways — Cisco AnyConnect / Palo Alto GlobalProtect / Fortinet; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"Remote access (VPN, ZTNA)\" Audit Evidence\n\nThe test:\nAssess every remote-access path into the network. PASS: all require phishing-resistant MFA and a posture-checked device; access is least-privilege (ZTNA per-application, or tightly-scoped VPN, not flat-subnet); split/full-tunnel is deliberate; sessions time out and are logged; legacy/unused gateways are decommissioned. Exceptions: a VPN without MFA, a VPN that drops users onto a flat internal subnet, no device-posture check, and forgotten internet-facing remote-access gateways.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — The remote-access inventory — every VPN gateway and ZTNA application, and who is entitled to each)\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The remote-access inventory — every VPN gateway and ZTNA application, and who is entitled to each reconciled against policy, plus the resulting findings working paper",
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
            "VPN gateways — Cisco AnyConnect / Palo Alto GlobalProtect / Fortinet (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., VPN gateways — Cisco AnyConnect / Palo Alto GlobalProtect / Fortinet) via read-only access."
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
            "Network security — owns VPN/ZTNA (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network security — owns VPN/ZTNA owns the control data; the auditor independently verifies it."
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
            "A legacy SSL-VPN appliance, still internet-facing and unpatched, accepts username + password only (no MFA) and routes onto a flat /16 internal network — the textbook ransomware entry point.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A legacy SSL-VPN appliance, still internet-facing and unpatched, accepts username + password only (no MFA) and routes onto a flat /16 internal network — the textbook ransomware entry point."
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
      "objective": "Prove the \"Logging and monitoring\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify network telemetry is collected, complete, and actioned. PASS: all in-scope network devices forward logs to the SIEM; firewalls log denies and sensitive permits; DNS and proxy logs are collected; NetFlow/NDR covers north-south and key east-west; detections exist for beaconing/exfiltration/lateral movement; and retention meets policy. Exceptions: devices not forwarding (visibility gaps), deny logging off, no DNS logging, NDR blind to east-west, and retention below policy.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (SIEM — Splunk / Microsoft Sentinel; NDR — Darktrace / Vectra / Corelight (Zeek); Firewall / VPN / DNS / proxy log sources) as tools — e.g. `SIEM: which network devices reported in the last 24h vs the network CM`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The list of network log sources sending to the SIEM (firewall, VPN, DNS, proxy, NetFlow, NDR) vs the device inventory",
        "The firewall deny + sensitive-permit logging configuration",
        "DNS query logging plus the detections built on it (DGA/tunneling/sinkhole)",
        "NDR/flow coverage of north-south AND east-west, with the retention setting"
      ],
      "system": [
        "SIEM — Splunk / Microsoft Sentinel",
        "NDR — Darktrace / Vectra / Corelight (Zeek)",
        "Firewall / VPN / DNS / proxy log sources",
        "NetFlow/IPFIX collectors"
      ],
      "dataOwner": [
        "Security operations / detection engineering",
        "Network engineering — emits the logs",
        "SOC"
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
      "tagline": "Auditing \"Logging and monitoring\" as a repeatable agentic workflow: pull the real evidence (The list of network log sources sending to the SIEM (firewall, VPN, DNS, proxy, NetFlow, NDR) vs the device inventory) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"Logging and monitoring\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the list of network log sources sending to the SIEM (firewall, VPN, DNS, proxy, NetFlow, NDR) vs the device inventory, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SIEM — Splunk / Microsoft Sentinel, NDR — Darktrace / Vectra / Corelight (Zeek), Firewall / VPN / DNS / proxy log sources — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `SIEM: which network devices reported in the last 24h vs the network CMDB` — read-only, against the systems of record.",
        "The test itself is specific. Verify network telemetry is collected, complete, and actioned. PASS: all in-scope network devices forward logs to the SIEM; firewalls log denies and sensitive permits; DNS and proxy logs are collected; NetFlow/NDR covers north-south and key east-west; detections exist for beaconing/exfiltration/lateral movement; and retention meets policy. Exceptions: devices not forwarding (visibility gaps), deny logging off, no DNS logging, NDR blind to east-west, and retention below policy. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_logging_and_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SIEM — Splunk / Microsoft Sentinel and NDR — Darktrace / Vectra / Corelight (Zeek) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull SIEM — Splunk / Microsoft Sentinel · NDR — Darktrace / Vectra / Corelight (Zeek)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "SIEM: which network devices reported in the last 24h vs the network CMDB\nconfirm firewalls 'log at session end' on deny and sensitive-permit rules\nDNS: query logging enabled + detections (NXDOMAIN spikes, known-bad domains, tunneling)\nmap NDR sensor placement: which segments are actually monitored vs dark"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The list of network log sources sending to the SIEM (firewall, VPN, DNS, proxy, NetFlow, NDR) vs the device inventory.",
        "The test: Verify network telemetry is collected, complete, and actioned.",
        "Reconcile the systems of record (SIEM — Splunk / Microsoft Sentinel, NDR — Darktrace / Vectra / Corelight (Zeek), Firewall / VPN / DNS / proxy log sources) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Perimeter firewall deny-logging is off, internal DNS isn't logged at all, and the NDR only sees north-south traffic — so lateral movement across the data-center east-west fabric is completely invisible."
      ],
      "references": [
        {
          "title": "NIST SP 800-92 Log Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
        },
        {
          "title": "MITRE ATT&CK — Command & Control / Exfiltration",
          "url": "https://attack.mitre.org/"
        },
        {
          "title": "CIS Control 13",
          "url": "https://www.cisecurity.org/controls"
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
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"Logging and monitoring\" (the list of network log sources sending to the siem (firewall, vpn, dns, proxy, netflow, ndr) vs the device inventory), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Logging and monitoring\" control for Network Security at AcmeCorp. THE TEST: Verify network telemetry is collected, complete, and actioned. PASS: all in-scope network devices forward logs to the SIEM; firewalls log denies and sensitive permits; DNS and proxy logs are collected; NetFlow/NDR covers north-south and key east-west; detections exist for beaconing/exfiltration/lateral movement; and retention meets policy. Exceptions: devices not forwarding (visibility gaps), deny logging off, no DNS logging, NDR blind to east-west, and retention below policy. The evidence — The list of network log sources sending to the SIEM (firewall, VPN, DNS, proxy, NetFlow, NDR) vs the device inventory — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SIEM — Splunk / Microsoft Sentinel APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SIEM — Splunk / Microsoft Sentinel gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SIEM — Splunk / Microsoft Sentinel; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"Logging and monitoring\" Audit Evidence\n\nThe test:\nVerify network telemetry is collected, complete, and actioned. PASS: all in-scope network devices forward logs to the SIEM; firewalls log denies and sensitive permits; DNS and proxy logs are collected; NetFlow/NDR covers north-south and key east-west; detections exist for beaconing/exfiltration/lateral movement; and retention meets policy. Exceptions: devices not forwarding (visibility gaps), deny logging off, no DNS logging, NDR blind to east-west, and retention below policy.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — The list of network log sources sending to the SIEM (firewall, VPN, DNS, proxy, NetFlow, NDR) vs the device inventory)\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The list of network log sources sending to the SIEM (firewall, VPN, DNS, proxy, NetFlow, NDR) vs the device inventory reconciled against policy, plus the resulting findings working paper",
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
            "SIEM — Splunk / Microsoft Sentinel (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SIEM — Splunk / Microsoft Sentinel) via read-only access."
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
            "Security operations / detection engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / detection engineering owns the control data; the auditor independently verifies it."
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
            "Perimeter firewall deny-logging is off, internal DNS isn't logged at all, and the NDR only sees north-south traffic — so lateral movement across the data-center east-west fabric is completely invisible.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Perimeter firewall deny-logging is off, internal DNS isn't logged at all, and the NDR only sees north-south traffic — so lateral movement across the data-center east-west fabric is completely invisible."
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
      "objective": "Prove the \"Secure network architecture\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Review the network architecture against secure-design principles. PASS: defense-in-depth tiers (DMZ → app → data) with no direct internet-to-internal paths; egress is proxied/filtered (no arbitrary outbound); the management plane is out-of-band and isolated from production/user traffic; the external attack surface is inventoried and minimized; and single points of failure are addressed. Exceptions: internal services directly internet-exposed, unrestricted outbound egress, management interfaces on the user/production network, and an unknown external attack surface.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (Network design docs / enterprise-architecture repository; External attack-surface management — Censys / Shodan / Microsoft Defender EASM; Firewalls, forward proxies, load balancers) as tools — e.g. `external attack-surface scan (Shodan/Censys/Defender EASM) across the `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The current-state network architecture diagram + data-flow diagrams for crown-jewel systems",
        "The DMZ/tiering design (no direct internet→internal, proxied/filtered egress, isolated management plane)",
        "The external attack-surface inventory — every internet-facing service",
        "Resilience + out-of-band management-network isolation evidence"
      ],
      "system": [
        "Network design docs / enterprise-architecture repository",
        "External attack-surface management — Censys / Shodan / Microsoft Defender EASM",
        "Firewalls, forward proxies, load balancers"
      ],
      "dataOwner": [
        "Network architecture / engineering",
        "Security architecture",
        "Cloud platform (for cloud network design)"
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
      "tagline": "Auditing \"Secure network architecture\" as a repeatable agentic workflow: pull the real evidence (The current-state network architecture diagram + data-flow diagrams for crown-jewel systems) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"Secure network architecture\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the current-state network architecture diagram + data-flow diagrams for crown-jewel systems, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Network design docs / enterprise-architecture repository, External attack-surface management — Censys / Shodan / Microsoft Defender EASM, Firewalls, forward proxies, load balancers — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `external attack-surface scan (Shodan/Censys/Defender EASM) across the org's IP r` — read-only, against the systems of record.",
        "The test itself is specific. Review the network architecture against secure-design principles. PASS: defense-in-depth tiers (DMZ → app → data) with no direct internet-to-internal paths; egress is proxied/filtered (no arbitrary outbound); the management plane is out-of-band and isolated from production/user traffic; the external attack surface is inventoried and minimized; and single points of failure are addressed. Exceptions: internal services directly internet-exposed, unrestricted outbound egress, management interfaces on the user/production network, and an unknown external attack surface. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_secure_network_architecture_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Network design docs / enterprise-architecture repository and External attack-surface management — Censys / Shodan / Microsoft Defender EASM (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Network design docs / enterprise-architecture repository · External attack-surface management — Censys / Shodan / Microsoft Defender EASM",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "external attack-surface scan (Shodan/Censys/Defender EASM) across the org's IP ranges + domains\nreview the egress policy: is outbound default-deny via a proxy allow-list?\nconfirm out-of-band management isolation (separate VRF/VLAN, not reachable from users)\ntrace data flows for crown-jewel systems and compare to the documented design"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The current-state network architecture diagram + data-flow diagrams for crown-jewel systems.",
        "The test: Review the network architecture against secure-design principles.",
        "Reconcile the systems of record (Network design docs / enterprise-architecture repository, External attack-surface management — Censys / Shodan / Microsoft Defender EASM, Firewalls, forward proxies, load balancers) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. An internet-exposed RDP service and a server management interface (iLO/IPMI) reachable from the user VLAN, plus wide-open outbound egress that would let any compromised host beacon out unimpeded."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 SC-7 Boundary Protection",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "CISA — Secure Network Architecture",
          "url": "https://www.cisa.gov/"
        },
        {
          "title": "CIS Control 12",
          "url": "https://www.cisecurity.org/controls"
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
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"Secure network architecture\" (the current-state network architecture diagram + data-flow diagrams for crown-jewel systems), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secure network architecture\" control for Network Security at AcmeCorp. THE TEST: Review the network architecture against secure-design principles. PASS: defense-in-depth tiers (DMZ → app → data) with no direct internet-to-internal paths; egress is proxied/filtered (no arbitrary outbound); the management plane is out-of-band and isolated from production/user traffic; the external attack surface is inventoried and minimized; and single points of failure are addressed. Exceptions: internal services directly internet-exposed, unrestricted outbound egress, management interfaces on the user/production network, and an unknown external attack surface. The evidence — The current-state network architecture diagram + data-flow diagrams for crown-jewel systems — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Network design docs / enterprise-architecture repository APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Network design docs / enterprise-architecture repository gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Network design docs / enterprise-architecture repository; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"Secure network architecture\" Audit Evidence\n\nThe test:\nReview the network architecture against secure-design principles. PASS: defense-in-depth tiers (DMZ → app → data) with no direct internet-to-internal paths; egress is proxied/filtered (no arbitrary outbound); the management plane is out-of-band and isolated from production/user traffic; the external attack surface is inventoried and minimized; and single points of failure are addressed. Exceptions: internal services directly internet-exposed, unrestricted outbound egress, management interfaces on the user/production network, and an unknown external attack surface.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — The current-state network architecture diagram + data-flow diagrams for crown-jewel systems)\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The current-state network architecture diagram + data-flow diagrams for crown-jewel systems reconciled against policy, plus the resulting findings working paper",
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
            "Network design docs / enterprise-architecture repository (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Network design docs / enterprise-architecture repository) via read-only access."
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
            "Network architecture / engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network architecture / engineering owns the control data; the auditor independently verifies it."
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
            "An internet-exposed RDP service and a server management interface (iLO/IPMI) reachable from the user VLAN, plus wide-open outbound egress that would let any compromised host beacon out unimpeded.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. An internet-exposed RDP service and a server management interface (iLO/IPMI) reachable from the user VLAN, plus wide-open outbound egress that would let any compromised host beacon out unimpeded."
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
      "objective": "Prove the \"Device config mgmt and backups\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess network-device configuration governance. PASS: every device's config is backed up automatically and version-controlled; configs are diffed against a hardened baseline (TACACS+/AAA, SSHv2 only, SNMPv3, NTP, logging, no telnet/http); drift is detected; firmware is supported and patched; and changes go through change control. Exceptions: devices with no config backup, telnet/SNMPv1/HTTP enabled, default or shared credentials, end-of-life firmware with known CVEs, and out-of-band config changes.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (NCCM — SolarWinds NCM / Oxidized / RANCID / Cisco DNA Center; TACACS+/RADIUS (device AAA); Config-backup store / git) as tools — e.g. `Oxidized/RANCID/NCM: confirm every device has a recent successful conf`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Each network device's running-config plus the approved hardened baseline to diff against",
        "Config-backup evidence — every device backed up on schedule and proven restorable",
        "Config-drift/compliance reports (AAA/TACACS+, SSHv2-only, SNMPv3, NTP, logging, no unused services)",
        "Firmware/OS version + end-of-life status per device"
      ],
      "system": [
        "NCCM — SolarWinds NCM / Oxidized / RANCID / Cisco DNA Center",
        "TACACS+/RADIUS (device AAA)",
        "Config-backup store / git",
        "Device inventory (firmware + EOL)"
      ],
      "dataOwner": [
        "Network engineering — owns device config",
        "Network security — owns the hardening baseline",
        "Change management"
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
      "tagline": "Auditing \"Device config mgmt and backups\" as a repeatable agentic workflow: pull the real evidence (Each network device's running-config plus the approved hardened baseline to diff against) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"Device config mgmt and backups\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me each network device's running-config plus the approved hardened baseline to diff against, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here NCCM — SolarWinds NCM / Oxidized / RANCID / Cisco DNA Center, TACACS+/RADIUS (device AAA), Config-backup store / git — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Oxidized/RANCID/NCM: confirm every device has a recent successful config backup` — read-only, against the systems of record.",
        "The test itself is specific. Assess network-device configuration governance. PASS: every device's config is backed up automatically and version-controlled; configs are diffed against a hardened baseline (TACACS+/AAA, SSHv2 only, SNMPv3, NTP, logging, no telnet/http); drift is detected; firmware is supported and patched; and changes go through change control. Exceptions: devices with no config backup, telnet/SNMPv1/HTTP enabled, default or shared credentials, end-of-life firmware with known CVEs, and out-of-band config changes. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_device_config_mgmt_and_backups_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from NCCM — SolarWinds NCM / Oxidized / RANCID / Cisco DNA Center and TACACS+/RADIUS (device AAA) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull NCCM — SolarWinds NCM / Oxidized / RANCID / Cisco DNA Center · TACACS+/RADIUS (device AAA)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Oxidized/RANCID/NCM: confirm every device has a recent successful config backup\ndiff running-config vs the hardened baseline (CIS Cisco/Juniper Benchmark)\ngrep configs for `telnet`, `snmp-server community public|private`, `no aaa`, `ip http server`\nmap device OS versions to vendor EOL dates + PSIRT advisories"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Each network device's running-config plus the approved hardened baseline to diff against.",
        "The test: Assess network-device configuration governance.",
        "Reconcile the systems of record (NCCM — SolarWinds NCM / Oxidized / RANCID / Cisco DNA Center, TACACS+/RADIUS (device AAA), Config-backup store / git) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A dozen access switches still run telnet with a shared 'cisco' enable password, several core devices are past end-of-life with known CVEs, and three devices have no config backup at all — no recovery if they fail."
      ],
      "references": [
        {
          "title": "NIST SP 800-128 Configuration Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "CIS Cisco / Juniper Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "CISA — Network Device Hardening",
          "url": "https://www.cisa.gov/"
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
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"Device config mgmt and backups\" (each network device's running-config plus the approved hardened baseline to diff against), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Device config mgmt and backups\" control for Network Security at AcmeCorp. THE TEST: Assess network-device configuration governance. PASS: every device's config is backed up automatically and version-controlled; configs are diffed against a hardened baseline (TACACS+/AAA, SSHv2 only, SNMPv3, NTP, logging, no telnet/http); drift is detected; firmware is supported and patched; and changes go through change control. Exceptions: devices with no config backup, telnet/SNMPv1/HTTP enabled, default or shared credentials, end-of-life firmware with known CVEs, and out-of-band config changes. The evidence — Each network device's running-config plus the approved hardened baseline to diff against — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live NCCM — SolarWinds NCM / Oxidized / RANCID / Cisco DNA Center APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. NCCM — SolarWinds NCM / Oxidized / RANCID / Cisco DNA Center gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from NCCM — SolarWinds NCM / Oxidized / RANCID / Cisco DNA Center; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"Device config mgmt and backups\" Audit Evidence\n\nThe test:\nAssess network-device configuration governance. PASS: every device's config is backed up automatically and version-controlled; configs are diffed against a hardened baseline (TACACS+/AAA, SSHv2 only, SNMPv3, NTP, logging, no telnet/http); drift is detected; firmware is supported and patched; and changes go through change control. Exceptions: devices with no config backup, telnet/SNMPv1/HTTP enabled, default or shared credentials, end-of-life firmware with known CVEs, and out-of-band config changes.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — Each network device's running-config plus the approved hardened baseline to diff against)\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The Each network device's running-config plus the approved hardened baseline to diff against reconciled against policy, plus the resulting findings working paper",
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
            "NCCM — SolarWinds NCM / Oxidized / RANCID / Cisco DNA Center (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., NCCM — SolarWinds NCM / Oxidized / RANCID / Cisco DNA Center) via read-only access."
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
            "Network engineering — owns device config (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network engineering — owns device config owns the control data; the auditor independently verifies it."
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
            "A dozen access switches still run telnet with a shared 'cisco' enable password, several core devices are past end-of-life with known CVEs, and three devices have no config backup at all — no recovery if they fail.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A dozen access switches still run telnet with a shared 'cisco' enable password, several core devices are past end-of-life with known CVEs, and three devices have no config backup at all — no recovery if they fail."
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
      "objective": "Prove the \"AIOps / AI-driven networking\" control for Network Security is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Govern AI/ML in network operations. PASS: every AIOps/intent-based system is inventoried with its authority bounded (what it may change automatically vs what needs approval); automated remediation has blast-radius limits and tested rollback; AI-initiated changes are logged, attributable, and reviewable; and the model/data feeding decisions is governed (no poisoning, no sensitive telemetry leaking to an ungoverned vendor model). Exceptions: AIOps with unbounded auto-remediation authority, AI changes with no logging or rollback, anomaly models trained on unvetted data, and config/telemetry streamed to ungoverned external AI.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Network Security systems of record (AIOps / AI networking — Cisco AI Network Analytics (DNA) / Juniper Mist AI / Arista CloudVision; Intent-based networking controllers; The change/automation pipeline) as tools — e.g. `inventory AIOps/IBN systems and the scope of changes each can auto-app`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of AI/ML-driven networking systems (AIOps anomaly detection, intent-based networking, auto-remediation) and the actions each can take",
        "The guardrails on automated changes — human-approval gates, blast-radius limits, tested rollback",
        "Model + training-data governance for the AIOps platform",
        "Audit logs of AI-initiated network changes and their outcomes"
      ],
      "system": [
        "AIOps / AI networking — Cisco AI Network Analytics (DNA) / Juniper Mist AI / Arista CloudVision",
        "Intent-based networking controllers",
        "The change/automation pipeline",
        "Model + data governance tooling"
      ],
      "dataOwner": [
        "Network engineering / NetOps — owns the AIOps platform",
        "Network security — owns the guardrails",
        "AI governance — owns model/data risk"
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
      "tagline": "Auditing \"AIOps / AI-driven networking\" as a repeatable agentic workflow: pull the real evidence (The inventory of AI/ML-driven networking systems (AIOps anomaly detection, intent-based networking, auto-remediation) and the actions each can take) with read-only agents, run the test against policy, and issue a defensible opinion on the Network Security control.",
      "year": 2025,
      "overview": [
        "The \"AIOps / AI-driven networking\" sub-process is one of the controls an auditor must verify for Network Security. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of AI/ML-driven networking systems (AIOps anomaly detection, intent-based networking, auto-remediation) and the actions each can take, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AIOps / AI networking — Cisco AI Network Analytics (DNA) / Juniper Mist AI / Arista CloudVision, Intent-based networking controllers, The change/automation pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `inventory AIOps/IBN systems and the scope of changes each can auto-apply` — read-only, against the systems of record.",
        "The test itself is specific. Govern AI/ML in network operations. PASS: every AIOps/intent-based system is inventoried with its authority bounded (what it may change automatically vs what needs approval); automated remediation has blast-radius limits and tested rollback; AI-initiated changes are logged, attributable, and reviewable; and the model/data feeding decisions is governed (no poisoning, no sensitive telemetry leaking to an ungoverned vendor model). Exceptions: AIOps with unbounded auto-remediation authority, AI changes with no logging or rollback, anomaly models trained on unvetted data, and config/telemetry streamed to ungoverned external AI. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_aiops_ai_driven_networking_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AIOps / AI networking — Cisco AI Network Analytics (DNA) / Juniper Mist AI / Arista CloudVision and Intent-based networking controllers (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull AIOps / AI networking — Cisco AI Network Analytics (DNA) / Juniper Mist AI / Arista CloudVision · Intent-based networking controllers",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "inventory AIOps/IBN systems and the scope of changes each can auto-apply\nreview auto-remediation policy: approval gate, maximum blast radius, rollback test evidence\npull the audit log of AI-initiated changes (what changed, why, outcome, who reviewed)\nconfirm telemetry/config sent to vendor AI is governed (DLP + contractual data handling)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of AI/ML-driven networking systems (AIOps anomaly detection, intent-based networking, auto-remediation) and the actions each can take.",
        "The test: Govern AI/ML in network operations.",
        "Reconcile the systems of record (AIOps / AI networking — Cisco AI Network Analytics (DNA) / Juniper Mist AI / Arista CloudVision, Intent-based networking controllers, The change/automation pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. An AIOps platform can auto-apply ACL and routing changes fleet-wide with no human gate and no tested rollback — a single false-positive anomaly could black-hole production — while device telemetry streams to a vendor cloud with no data-handling review."
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "NIST SP 800-53 CM-3 / SI-4",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
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
          "description": "Runnable read-only MCP server: gathers the Network Security evidence for \"AIOps / AI-driven networking\" (the inventory of ai/ml-driven networking systems (aiops anomaly detection, intent-based networking, auto-remediation) and the actions each can take), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AIOps / AI-driven networking\" control for Network Security at AcmeCorp. THE TEST: Govern AI/ML in network operations. PASS: every AIOps/intent-based system is inventoried with its authority bounded (what it may change automatically vs what needs approval); automated remediation has blast-radius limits and tested rollback; AI-initiated changes are logged, attributable, and reviewable; and the model/data feeding decisions is governed (no poisoning, no sensitive telemetry leaking to an ungoverned vendor model). Exceptions: AIOps with unbounded auto-remediation authority, AI changes with no logging or rollback, anomaly models trained on unvetted data, and config/telemetry streamed to ungoverned external AI. The evidence — The inventory of AI/ML-driven networking systems (AIOps anomaly detection, intent-based networking, auto-remediation) and the actions each can take — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AIOps / AI networking — Cisco AI Network Analytics (DNA) / Juniper Mist AI / Arista CloudVision APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AIOps / AI networking — Cisco AI Network Analytics (DNA) / Juniper Mist AI / Arista CloudVision gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AIOps / AI networking — Cisco AI Network Analytics (DNA) / Juniper Mist AI / Arista CloudVision; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Network Security: \"AIOps / AI-driven networking\" Audit Evidence\n\nThe test:\nGovern AI/ML in network operations. PASS: every AIOps/intent-based system is inventoried with its authority bounded (what it may change automatically vs what needs approval); automated remediation has blast-radius limits and tested rollback; AI-initiated changes are logged, attributable, and reviewable; and the model/data feeding decisions is governed (no poisoning, no sensitive telemetry leaking to an ungoverned vendor model). Exceptions: AIOps with unbounded auto-remediation authority, AI changes with no logging or rollback, anomaly models trained on unvetted data, and config/telemetry streamed to ungoverned external AI.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- network-security_inventory.json   (in-scope items — The inventory of AI/ML-driven networking systems (AIOps anomaly detection, intent-based networking, auto-remediation) and the actions each can take)\n- network-security_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The inventory of AI/ML-driven networking systems (AIOps anomaly detection, intent-based networking, auto-remediation) and the actions each can take reconciled against policy, plus the resulting findings working paper",
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
            "AIOps / AI networking — Cisco AI Network Analytics (DNA) / Juniper Mist AI / Arista CloudVision (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AIOps / AI networking — Cisco AI Network Analytics (DNA) / Juniper Mist AI / Arista CloudVision) via read-only access."
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
            "Network engineering / NetOps — owns the AIOps platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network engineering / NetOps — owns the AIOps platform owns the control data; the auditor independently verifies it."
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
            "An AIOps platform can auto-apply ACL and routing changes fleet-wide with no human gate and no tested rollback — a single false-positive anomaly could black-hole production — while device telemetry streams to a vendor cloud with no data-handling review.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. An AIOps platform can auto-apply ACL and routing changes fleet-wide with no human gate and no tested rollback — a single false-positive anomaly could black-hole production — while device telemetry streams to a vendor cloud with no data-handling review."
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
