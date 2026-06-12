import type { EpochConfig, StageConfig } from "../types";

export const dataPrivacyEpoch: EpochConfig = {
  "id": "data-privacy",
  "name": "Data Protection & Privacy",
  "subtitle": "Agentic technical & privacy audit — Data Protection & Privacy",
  "description": "Audit Data Protection & Privacy end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🔏",
  "color": "Teal",
  "unlocked": true
};

export const dataPrivacyStages: StageConfig[] = [
  {
    "epochId": "data-privacy",
    "id": "dpp-01",
    "order": 1,
    "title": "Data classification and handling",
    "subtitle": "Agentic technical & privacy audit of the data classification and handling control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data classification and handling\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data is classified and handled per its sensitivity. PASS: a classification scheme exists and is applied (labels/tags) across structured and unstructured stores; a discovery scan finds no high-sensitivity data in unclassified or unmanaged locations; and handling rules (encryption, access, external sharing, retention) are enforced per class. Exceptions: large volumes of unlabelled data, PII/PHI/PCI discovered in unmanaged file shares or dev/test, and sensitive data shared externally against its class rule.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (Microsoft Purview Information Protection / Google DLP / BigID / Varonis (classification); Data-discovery scanners; File shares, SharePoint/OneDrive, databases, data lakes) as tools — e.g. `Microsoft Purview: sensitivity-label coverage report + auto-labelling `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The data-classification policy + scheme (e.g. Public / Internal / Confidential / Restricted)",
        "The classification coverage report — share of repositories/stores/documents labelled vs unlabelled",
        "Sensitive-data discovery scan results — where PII/PHI/PCI actually lives, including unmanaged shares and dev/test",
        "The handling-rule mapping per class (encryption, access, external sharing, retention)"
      ],
      "system": [
        "Microsoft Purview Information Protection / Google DLP / BigID / Varonis (classification)",
        "Data-discovery scanners",
        "File shares, SharePoint/OneDrive, databases, data lakes"
      ],
      "dataOwner": [
        "Data Protection Officer / Privacy — owns the scheme",
        "Data owners / stewards — classify their data",
        "Security — enforces the handling rules"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-01-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Data classification and handling",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data classification and handling\" as a repeatable agentic workflow: pull the real evidence (The data-classification policy + scheme (e.g. Public / Internal / Confidential / Restricted)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Data classification and handling\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the data-classification policy + scheme (e.g. Public / Internal / Confidential / Restricted), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Microsoft Purview Information Protection / Google DLP / BigID / Varonis (classification), Data-discovery scanners, File shares, SharePoint/OneDrive, databases, data lakes — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Microsoft Purview: sensitivity-label coverage report + auto-labelling scan resul` — read-only, against the systems of record.",
        "The test itself is specific. Verify data is classified and handled per its sensitivity. PASS: a classification scheme exists and is applied (labels/tags) across structured and unstructured stores; a discovery scan finds no high-sensitivity data in unclassified or unmanaged locations; and handling rules (encryption, access, external sharing, retention) are enforced per class. Exceptions: large volumes of unlabelled data, PII/PHI/PCI discovered in unmanaged file shares or dev/test, and sensitive data shared externally against its class rule. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_data_classification_and_handling_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Microsoft Purview Information Protection / Google DLP / BigID / Varonis (classification) and Data-discovery scanners (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_data_classification_and_handling_mcp.py` to expose it to your agent — or `python 01_data_classification_and_handling_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Microsoft Purview Information Protection / Google DLP / BigID / Varonis (classification) · Data-discovery scanners",
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
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data classification and handling\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Microsoft Purview: sensitivity-label coverage report + auto-labelling scan results\nBigID / Varonis sensitive-data discovery across file shares + databases\nscan dev/test and unmanaged shares for PII/PHI/PCI patterns (SSNs, PANs, MRNs)\nmap each class to its handling rules and confirm enforcement (e.g. external-share block on Restricted)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The data-classification policy + scheme (e.g. Public / Internal / Confidential / Restricted).",
        "The test: Verify data is classified and handled per its sensitivity.",
        "Reconcile the systems of record (Microsoft Purview Information Protection / Google DLP / BigID / Varonis (classification), Data-discovery scanners, File shares, SharePoint/OneDrive, databases, data lakes) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. About 60% of SharePoint sites and most file shares are unlabelled; discovery finds unencrypted spreadsheets of customer SSNs in an open 'Public' share and PHI copied into a developer test database."
      ],
      "references": [
        {
          "title": "NIST SP 800-60 Information Categorisation",
          "url": "https://csrc.nist.gov/pubs/sp/800/60/v1/r1/final"
        },
        {
          "title": "GDPR Art. 5 / 32",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27001 A.5.12",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_data_classification_and_handling_mcp.py",
          "url": "/audit-code/data-privacy/01_data_classification_and_handling_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Data classification and handling\" (the data-classification policy + scheme (e.g. public / internal / confidential / restricted)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data classification and handling\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Verify data is classified and handled per its sensitivity. PASS: a classification scheme exists and is applied (labels/tags) across structured and unstructured stores; a discovery scan finds no high-sensitivity data in unclassified or unmanaged locations; and handling rules (encryption, access, external sharing, retention) are enforced per class. Exceptions: large volumes of unlabelled data, PII/PHI/PCI discovered in unmanaged file shares or dev/test, and sensitive data shared externally against its class rule. The evidence — The data-classification policy + scheme (e.g. Public / Internal / Confidential / Restricted) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Microsoft Purview Information Protection / Google DLP / BigID / Varonis (classification) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Microsoft Purview Information Protection / Google DLP / BigID / Varonis (classification) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Microsoft Purview Information Protection / Google DLP / BigID / Varonis (classification); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Data classification and handling\" Audit Evidence\n\nThe test:\nVerify data is classified and handled per its sensitivity. PASS: a classification scheme exists and is applied (labels/tags) across structured and unstructured stores; a discovery scan finds no high-sensitivity data in unclassified or unmanaged locations; and handling rules (encryption, access, external sharing, retention) are enforced per class. Exceptions: large volumes of unlabelled data, PII/PHI/PCI discovered in unmanaged file shares or dev/test, and sensitive data shared externally against its class rule.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — The data-classification policy + scheme (e.g. Public / Internal / Confidential / Restricted))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data classification and handling\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data classification and handling\" control must cover\n# fragment: data_classification_handling_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "data_classification_handling_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data classification and handling\" sub-process of Data Protection & Privacy?",
          "options": [
            "Deploy and operate the data classification and handling control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data classification and handling control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data classification and handling against comparable organisations in the sector",
            "Obtain evidence that the data classification and handling control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dpp-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data classification and handling\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Protection & Privacy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Protection & Privacy estate",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Protection & Privacy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dpp-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data classification and handling\" control?",
          "options": [
            "A point-in-time screenshot of one system's data classification and handling settings, captured during the walkthrough",
            "The The data-classification policy + scheme (e.g. Public / Internal / Confidential / Restricted), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data classification and handling control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data classification and handling capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dpp-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data classification and handling\"?",
          "options": [
            "From Microsoft Purview Information Protection / Google DLP / BigID / Varonis (classification) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data classification and handling works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Microsoft Purview Information Protection / Google DLP / BigID / Varonis (classification)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dpp-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data classification and handling\"?",
          "options": [
            "The external audit firm, since it is the party examining the data classification and handling control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data classification and handling data is shared, so the accountability sits with no one in particular",
            "Data Protection Officer / Privacy — owns the scheme, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data Protection Officer / Privacy — owns the scheme owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dpp-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data classification and handling\", which part stays with the human auditor?",
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
          "id": "dpp-01-q7",
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
          "id": "dpp-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data classification and handling\", which of these is a realistic reportable finding?",
          "options": [
            "About 60% of SharePoint sites and most file shares are unlabelled; discovery finds unencrypted spreadsheets of customer SSNs in an open 'Public' share and PHI copied into a developer test database.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. About 60% of SharePoint sites and most file shares are unlabelled; discovery finds unencrypted spreadsheets of customer SSNs in an open 'Public' share and PHI copied into a developer test database. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dpp-01-q9",
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
          "id": "dpp-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data classification and handling\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data classification and handling, so there is no overlap",
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
    "epochId": "data-privacy",
    "id": "dpp-02",
    "order": 2,
    "title": "Encryption in transit/at rest/in use",
    "subtitle": "Agentic technical & privacy audit of the encryption in transit/at rest/in use control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Encryption in transit/at rest/in use\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify sensitive data is encrypted in transit, at rest, and (where required) in use, with managed keys. PASS: data-in-transit uses TLS 1.2+ with strong ciphers (no TLS 1.0/1.1, no weak suites); data-at-rest is encrypted on every store holding sensitive data (DB TDE, volume/object encryption, encrypted backups) with KMS/HSM-managed, rotated keys; and field-level / confidential-compute encryption is used where the data class demands it. Exceptions: cleartext internal links carrying sensitive data, unencrypted databases/volumes/backups, weak TLS, and keys that are provider-default or never rotated.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (KMS/HSM — AWS KMS / Azure Key Vault / HashiCorp Vault; Databases (TDE), storage (volume/object encryption), load balancers (TLS termination); TLS scanners — SSL Labs / testssl.sh / nmap) as tools — e.g. `testssl.sh / nmap --script ssl-enum-ciphers across internal AND extern`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The encryption inventory — which stores/links use what (algorithm, key source, TLS version)",
        "TLS configuration of internal and external endpoints (versions, cipher suites, certificate validity)",
        "At-rest encryption status of databases, volumes, object stores, and backups",
        "Key-management evidence — KMS/HSM, customer-managed vs provider-default keys, rotation"
      ],
      "system": [
        "KMS/HSM — AWS KMS / Azure Key Vault / HashiCorp Vault",
        "Databases (TDE), storage (volume/object encryption), load balancers (TLS termination)",
        "TLS scanners — SSL Labs / testssl.sh / nmap"
      ],
      "dataOwner": [
        "Cryptography/PKI + platform security — own encryption + keys",
        "Application & data owners — own their stores",
        "Cloud platform"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-02-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Encryption in transit/at rest/in use",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Encryption in transit/at rest/in use\" as a repeatable agentic workflow: pull the real evidence (The encryption inventory — which stores/links use what (algorithm, key source, TLS version)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Encryption in transit/at rest/in use\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the encryption inventory — which stores/links use what (algorithm, key source, TLS version), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here KMS/HSM — AWS KMS / Azure Key Vault / HashiCorp Vault, Databases (TDE), storage (volume/object encryption), load balancers (TLS termination), TLS scanners — SSL Labs / testssl.sh / nmap — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `testssl.sh / nmap --script ssl-enum-ciphers across internal AND external endpoin` — read-only, against the systems of record.",
        "The test itself is specific. Verify sensitive data is encrypted in transit, at rest, and (where required) in use, with managed keys. PASS: data-in-transit uses TLS 1.2+ with strong ciphers (no TLS 1.0/1.1, no weak suites); data-at-rest is encrypted on every store holding sensitive data (DB TDE, volume/object encryption, encrypted backups) with KMS/HSM-managed, rotated keys; and field-level / confidential-compute encryption is used where the data class demands it. Exceptions: cleartext internal links carrying sensitive data, unencrypted databases/volumes/backups, weak TLS, and keys that are provider-default or never rotated. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_encryption_in_transit_at_rest_in_use_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from KMS/HSM — AWS KMS / Azure Key Vault / HashiCorp Vault and Databases (TDE), storage (volume/object encryption), load balancers (TLS termination) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_encryption_in_transit_at_rest_in_use_mcp.py` to expose it to your agent — or `python 02_encryption_in_transit_at_rest_in_use_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull KMS/HSM — AWS KMS / Azure Key Vault / HashiCorp Vault · Databases (TDE), storage (volume/object encryption), load balancers (TLS termination)",
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
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Encryption in transit/at rest/in use\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "testssl.sh / nmap --script ssl-enum-ciphers across internal AND external endpoints\ncloud: list unencrypted volumes/buckets/DBs (aws ec2 describe-volumes 'Encrypted==false', S3 default-encryption, RDS StorageEncrypted)\nconfirm DB TDE / column-level encryption on tables holding sensitive data\nKMS: rotation enabled + customer-managed vs provider-default keys for sensitive data"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The encryption inventory — which stores/links use what (algorithm, key source, TLS version).",
        "The test: Verify sensitive data is encrypted in transit, at rest, and (where required) in use, with managed keys.",
        "Reconcile the systems of record (KMS/HSM — AWS KMS / Azure Key Vault / HashiCorp Vault, Databases (TDE), storage (volume/object encryption), load balancers (TLS termination), TLS scanners — SSL Labs / testssl.sh / nmap) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Internal microservice traffic carrying PII runs over plaintext HTTP, two production databases have TDE off, several customer-data S3 buckets use no encryption, and the keys in use have rotation disabled."
      ],
      "references": [
        {
          "title": "NIST SP 800-57 Key Management",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "NIST SP 800-52 TLS Guidelines",
          "url": "https://csrc.nist.gov/pubs/sp/800/52/r2/final"
        },
        {
          "title": "PCI DSS Req. 3 / 4",
          "url": "https://www.pcisecuritystandards.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_encryption_in_transit_at_rest_in_use_mcp.py",
          "url": "/audit-code/data-privacy/02_encryption_in_transit_at_rest_in_use_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Encryption in transit/at rest/in use\" (the encryption inventory — which stores/links use what (algorithm, key source, tls version)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Encryption in transit/at rest/in use\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Verify sensitive data is encrypted in transit, at rest, and (where required) in use, with managed keys. PASS: data-in-transit uses TLS 1.2+ with strong ciphers (no TLS 1.0/1.1, no weak suites); data-at-rest is encrypted on every store holding sensitive data (DB TDE, volume/object encryption, encrypted backups) with KMS/HSM-managed, rotated keys; and field-level / confidential-compute encryption is used where the data class demands it. Exceptions: cleartext internal links carrying sensitive data, unencrypted databases/volumes/backups, weak TLS, and keys that are provider-default or never rotated. The evidence — The encryption inventory — which stores/links use what (algorithm, key source, TLS version) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live KMS/HSM — AWS KMS / Azure Key Vault / HashiCorp Vault APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. KMS/HSM — AWS KMS / Azure Key Vault / HashiCorp Vault gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from KMS/HSM — AWS KMS / Azure Key Vault / HashiCorp Vault; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Encryption in transit/at rest/in use\" Audit Evidence\n\nThe test:\nVerify sensitive data is encrypted in transit, at rest, and (where required) in use, with managed keys. PASS: data-in-transit uses TLS 1.2+ with strong ciphers (no TLS 1.0/1.1, no weak suites); data-at-rest is encrypted on every store holding sensitive data (DB TDE, volume/object encryption, encrypted backups) with KMS/HSM-managed, rotated keys; and field-level / confidential-compute encryption is used where the data class demands it. Exceptions: cleartext internal links carrying sensitive data, unencrypted databases/volumes/backups, weak TLS, and keys that are provider-default or never rotated.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — The encryption inventory — which stores/links use what (algorithm, key source, TLS version))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Encryption in transit/at rest/in use\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Encryption in transit/at rest/in use\" control must cover\n# fragment: encryption_transitat_restin_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "encryption_transitat_restin_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Encryption in transit/at rest/in use\" sub-process of Data Protection & Privacy?",
          "options": [
            "Deploy and operate the encryption in transit/at rest/in use control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the encryption in transit/at rest/in use control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for encryption in transit/at rest/in use against comparable organisations in the sector",
            "Obtain evidence that the encryption in transit/at rest/in use control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dpp-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Encryption in transit/at rest/in use\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Protection & Privacy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Protection & Privacy estate",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Protection & Privacy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dpp-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Encryption in transit/at rest/in use\" control?",
          "options": [
            "A point-in-time screenshot of one system's encryption in transit/at rest/in use settings, captured during the walkthrough",
            "The The encryption inventory — which stores/links use what (algorithm, key source, TLS version), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the encryption in transit/at rest/in use control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's encryption in transit/at rest/in use capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dpp-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Encryption in transit/at rest/in use\"?",
          "options": [
            "From KMS/HSM — AWS KMS / Azure Key Vault / HashiCorp Vault and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how encryption in transit/at rest/in use works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. KMS/HSM — AWS KMS / Azure Key Vault / HashiCorp Vault) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dpp-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Encryption in transit/at rest/in use\"?",
          "options": [
            "The external audit firm, since it is the party examining the encryption in transit/at rest/in use control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the encryption in transit/at rest/in use data is shared, so the accountability sits with no one in particular",
            "Cryptography/PKI + platform security — own encryption + keys, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography/PKI + platform security — own encryption + keys owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dpp-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Encryption in transit/at rest/in use\", which part stays with the human auditor?",
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
          "id": "dpp-02-q7",
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
          "id": "dpp-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Encryption in transit/at rest/in use\", which of these is a realistic reportable finding?",
          "options": [
            "Internal microservice traffic carrying PII runs over plaintext HTTP, two production databases have TDE off, several customer-data S3 buckets use no encryption, and the keys in use have rotation disabled.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Internal microservice traffic carrying PII runs over plaintext HTTP, two production databases have TDE off, several customer-data S3 buckets use no encryption, and the keys in use have rotation disabled. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dpp-02-q9",
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
          "id": "dpp-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Encryption in transit/at rest/in use\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind encryption in transit/at rest/in use, so there is no overlap",
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
    "epochId": "data-privacy",
    "id": "dpp-03",
    "order": 3,
    "title": "Data retention and disposal",
    "subtitle": "Agentic technical & privacy audit of the data retention and disposal control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data retention and disposal\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data is kept only as long as needed and disposed of securely. PASS: a retention schedule exists per data type and is enforced automatically (storage lifecycle/TTL, DB purge jobs); data past retention is deleted; media/data disposal is secure (crypto-erase / NIST 800-88) with records; and legal holds override deletion correctly. Exceptions: data retained indefinitely with no schedule, retention rules defined but not enforced (data still present years past expiry), insecure disposal, and PII kept beyond its lawful basis.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (Storage lifecycle — S3 Lifecycle / Azure Blob lifecycle; DB purge jobs; Records-management tooling — Microsoft Purview Data Lifecycle Management; Media-sanitisation / asset-disposal process) as tools — e.g. `confirm S3 Lifecycle / Blob lifecycle rules + DB retention jobs exist `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The data-retention schedule by data type (legal/regulatory minimums and maximums)",
        "Evidence that retention/expiry is enforced — storage lifecycle/TTL rules, automated purge jobs",
        "Disposal/destruction records — certificates of destruction, crypto-erase logs (NIST 800-88)",
        "An over-retention scan — data still held past its retention period"
      ],
      "system": [
        "Storage lifecycle — S3 Lifecycle / Azure Blob lifecycle; DB purge jobs",
        "Records-management tooling — Microsoft Purview Data Lifecycle Management",
        "Media-sanitisation / asset-disposal process"
      ],
      "dataOwner": [
        "Records management / Legal — own the schedule",
        "Data owners — enforce on their stores",
        "Privacy — owns PII minimisation"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-03-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Data retention and disposal",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data retention and disposal\" as a repeatable agentic workflow: pull the real evidence (The data-retention schedule by data type (legal/regulatory minimums and maximums)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Data retention and disposal\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the data-retention schedule by data type (legal/regulatory minimums and maximums), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Storage lifecycle — S3 Lifecycle / Azure Blob lifecycle; DB purge jobs, Records-management tooling — Microsoft Purview Data Lifecycle Management, Media-sanitisation / asset-disposal process — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm S3 Lifecycle / Blob lifecycle rules + DB retention jobs exist and actual` — read-only, against the systems of record.",
        "The test itself is specific. Verify data is kept only as long as needed and disposed of securely. PASS: a retention schedule exists per data type and is enforced automatically (storage lifecycle/TTL, DB purge jobs); data past retention is deleted; media/data disposal is secure (crypto-erase / NIST 800-88) with records; and legal holds override deletion correctly. Exceptions: data retained indefinitely with no schedule, retention rules defined but not enforced (data still present years past expiry), insecure disposal, and PII kept beyond its lawful basis. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_data_retention_and_disposal_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Storage lifecycle — S3 Lifecycle / Azure Blob lifecycle; DB purge jobs and Records-management tooling — Microsoft Purview Data Lifecycle Management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_data_retention_and_disposal_mcp.py` to expose it to your agent — or `python 03_data_retention_and_disposal_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Storage lifecycle — S3 Lifecycle / Azure Blob lifecycle; DB purge jobs · Records-management tooling — Microsoft Purview Data Lifecycle Management",
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
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data retention and disposal\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm S3 Lifecycle / Blob lifecycle rules + DB retention jobs exist and actually run\nscan for objects/records older than their retention period (last-modified vs schedule)\nPurview Data Lifecycle Management retention-label coverage report\ndisposal: certificates of destruction + crypto-erase logs per NIST 800-88"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The data-retention schedule by data type (legal/regulatory minimums and maximums).",
        "The test: Verify data is kept only as long as needed and disposed of securely.",
        "Reconcile the systems of record (Storage lifecycle — S3 Lifecycle / Azure Blob lifecycle; DB purge jobs, Records-management tooling — Microsoft Purview Data Lifecycle Management, Media-sanitisation / asset-disposal process) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. PII from closed customer accounts is retained indefinitely — a schedule exists on paper but no lifecycle rule enforces it, so eight years of expired data sits in production, expanding breach and GDPR exposure."
      ],
      "references": [
        {
          "title": "NIST SP 800-88 Media Sanitisation",
          "url": "https://csrc.nist.gov/pubs/sp/800/88/r1/final"
        },
        {
          "title": "GDPR Art. 5(1)(e) Storage Limitation",
          "url": "https://gdpr-info.eu/art-5-gdpr/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_data_retention_and_disposal_mcp.py",
          "url": "/audit-code/data-privacy/03_data_retention_and_disposal_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Data retention and disposal\" (the data-retention schedule by data type (legal/regulatory minimums and maximums)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data retention and disposal\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Verify data is kept only as long as needed and disposed of securely. PASS: a retention schedule exists per data type and is enforced automatically (storage lifecycle/TTL, DB purge jobs); data past retention is deleted; media/data disposal is secure (crypto-erase / NIST 800-88) with records; and legal holds override deletion correctly. Exceptions: data retained indefinitely with no schedule, retention rules defined but not enforced (data still present years past expiry), insecure disposal, and PII kept beyond its lawful basis. The evidence — The data-retention schedule by data type (legal/regulatory minimums and maximums) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Storage lifecycle — S3 Lifecycle / Azure Blob lifecycle; DB purge jobs APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Storage lifecycle — S3 Lifecycle / Azure Blob lifecycle; DB purge jobs gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Storage lifecycle — S3 Lifecycle / Azure Blob lifecycle; DB purge jobs; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Data retention and disposal\" Audit Evidence\n\nThe test:\nVerify data is kept only as long as needed and disposed of securely. PASS: a retention schedule exists per data type and is enforced automatically (storage lifecycle/TTL, DB purge jobs); data past retention is deleted; media/data disposal is secure (crypto-erase / NIST 800-88) with records; and legal holds override deletion correctly. Exceptions: data retained indefinitely with no schedule, retention rules defined but not enforced (data still present years past expiry), insecure disposal, and PII kept beyond its lawful basis.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — The data-retention schedule by data type (legal/regulatory minimums and maximums))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data retention and disposal\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data retention and disposal\" control must cover\n# fragment: data_retention_disposal_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "data_retention_disposal_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data retention and disposal\" sub-process of Data Protection & Privacy?",
          "options": [
            "Deploy and operate the data retention and disposal control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data retention and disposal control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data retention and disposal against comparable organisations in the sector",
            "Obtain evidence that the data retention and disposal control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dpp-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data retention and disposal\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Protection & Privacy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Protection & Privacy estate",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Protection & Privacy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dpp-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data retention and disposal\" control?",
          "options": [
            "A point-in-time screenshot of one system's data retention and disposal settings, captured during the walkthrough",
            "The The data-retention schedule by data type (legal/regulatory minimums and maximums), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data retention and disposal control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data retention and disposal capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dpp-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data retention and disposal\"?",
          "options": [
            "From Storage lifecycle — S3 Lifecycle / Azure Blob lifecycle; DB purge jobs and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data retention and disposal works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Storage lifecycle — S3 Lifecycle / Azure Blob lifecycle; DB purge jobs) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dpp-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data retention and disposal\"?",
          "options": [
            "The external audit firm, since it is the party examining the data retention and disposal control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data retention and disposal data is shared, so the accountability sits with no one in particular",
            "Records management / Legal — own the schedule, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Records management / Legal — own the schedule owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dpp-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data retention and disposal\", which part stays with the human auditor?",
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
          "id": "dpp-03-q7",
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
          "id": "dpp-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data retention and disposal\", which of these is a realistic reportable finding?",
          "options": [
            "PII from closed customer accounts is retained indefinitely — a schedule exists on paper but no lifecycle rule enforces it, so eight years of expired data sits in production, expanding breach and GDPR exposure.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. PII from closed customer accounts is retained indefinitely — a schedule exists on paper but no lifecycle rule enforces it, so eight years of expired data sits in production, expanding breach and GDPR exposure. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dpp-03-q9",
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
          "id": "dpp-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data retention and disposal\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data retention and disposal, so there is no overlap",
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
    "epochId": "data-privacy",
    "id": "dpp-04",
    "order": 4,
    "title": "Backup governance and restore testing",
    "subtitle": "Agentic technical & privacy audit of the backup governance and restore testing control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Backup governance and restore testing\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify backups exist, work, and would survive an attack. PASS: every in-scope system is backed up to its RPO; backups succeed (failures alerted and fixed); restores are tested on a schedule and meet RTO with verified integrity; and backups are immutable/air-gapped, encrypted, and access-restricted so a compromised production admin can't delete them. Exceptions: systems with no backup, silent backup failures, backups never test-restored, and backups reachable/deletable with the same credentials that run production (no ransomware resilience).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (Backup platform — Veeam / Commvault / Rubrik / AWS Backup; Immutable storage — S3 Object Lock / immutable vault; The systems being backed up + the CMDB) as tools — e.g. `backup platform: success/failure report per system vs the CMDB (covera`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The backup inventory + schedule per system (what's backed up, frequency, RPO)",
        "Backup success/failure logs across the period",
        "Restore-test evidence — actual test restores, RTO achieved, integrity verified",
        "Backup immutability/air-gap + encryption + access-control configuration (ransomware resilience)"
      ],
      "system": [
        "Backup platform — Veeam / Commvault / Rubrik / AWS Backup",
        "Immutable storage — S3 Object Lock / immutable vault",
        "The systems being backed up + the CMDB"
      ],
      "dataOwner": [
        "Backup / Infrastructure operations — own backups",
        "Business continuity — owns RPO/RTO",
        "Security — owns immutability"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-04-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Backup governance and restore testing",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Backup governance and restore testing\" as a repeatable agentic workflow: pull the real evidence (The backup inventory + schedule per system (what's backed up, frequency, RPO)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Backup governance and restore testing\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the backup inventory + schedule per system (what's backed up, frequency, RPO), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Backup platform — Veeam / Commvault / Rubrik / AWS Backup, Immutable storage — S3 Object Lock / immutable vault, The systems being backed up + the CMDB — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `backup platform: success/failure report per system vs the CMDB (coverage + gaps)` — read-only, against the systems of record.",
        "The test itself is specific. Verify backups exist, work, and would survive an attack. PASS: every in-scope system is backed up to its RPO; backups succeed (failures alerted and fixed); restores are tested on a schedule and meet RTO with verified integrity; and backups are immutable/air-gapped, encrypted, and access-restricted so a compromised production admin can't delete them. Exceptions: systems with no backup, silent backup failures, backups never test-restored, and backups reachable/deletable with the same credentials that run production (no ransomware resilience). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_backup_governance_and_restore_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Backup platform — Veeam / Commvault / Rubrik / AWS Backup and Immutable storage — S3 Object Lock / immutable vault (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_backup_governance_and_restore_testing_mcp.py` to expose it to your agent — or `python 04_backup_governance_and_restore_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Backup platform — Veeam / Commvault / Rubrik / AWS Backup · Immutable storage — S3 Object Lock / immutable vault",
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
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Backup governance and restore testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "backup platform: success/failure report per system vs the CMDB (coverage + gaps)\npull restore-test records: date, system, RTO achieved, integrity check result\nconfirm object-lock/immutability + separate credentials / MFA-delete on the backup store\nverify backups are encrypted and NOT reachable from the production domain"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The backup inventory + schedule per system (what's backed up, frequency, RPO).",
        "The test: Verify backups exist, work, and would survive an attack.",
        "Reconcile the systems of record (Backup platform — Veeam / Commvault / Rubrik / AWS Backup, Immutable storage — S3 Object Lock / immutable vault, The systems being backed up + the CMDB) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A third of production systems show silent backup failures for months, no restore has been tested this year, and backups sit on a share writable by the production domain-admin account — so one ransomware actor encrypts production and the backups together."
      ],
      "references": [
        {
          "title": "NIST SP 800-34 Contingency Planning",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "CISA #StopRansomware (3-2-1 + immutable)",
          "url": "https://www.cisa.gov/stopransomware"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_backup_governance_and_restore_testing_mcp.py",
          "url": "/audit-code/data-privacy/04_backup_governance_and_restore_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Backup governance and restore testing\" (the backup inventory + schedule per system (what's backed up, frequency, rpo)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Backup governance and restore testing\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Verify backups exist, work, and would survive an attack. PASS: every in-scope system is backed up to its RPO; backups succeed (failures alerted and fixed); restores are tested on a schedule and meet RTO with verified integrity; and backups are immutable/air-gapped, encrypted, and access-restricted so a compromised production admin can't delete them. Exceptions: systems with no backup, silent backup failures, backups never test-restored, and backups reachable/deletable with the same credentials that run production (no ransomware resilience). The evidence — The backup inventory + schedule per system (what's backed up, frequency, RPO) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Backup platform — Veeam / Commvault / Rubrik / AWS Backup APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Backup platform — Veeam / Commvault / Rubrik / AWS Backup gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Backup platform — Veeam / Commvault / Rubrik / AWS Backup; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Backup governance and restore testing\" Audit Evidence\n\nThe test:\nVerify backups exist, work, and would survive an attack. PASS: every in-scope system is backed up to its RPO; backups succeed (failures alerted and fixed); restores are tested on a schedule and meet RTO with verified integrity; and backups are immutable/air-gapped, encrypted, and access-restricted so a compromised production admin can't delete them. Exceptions: systems with no backup, silent backup failures, backups never test-restored, and backups reachable/deletable with the same credentials that run production (no ransomware resilience).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — The backup inventory + schedule per system (what's backed up, frequency, RPO))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Backup governance and restore testing\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Backup governance and restore testing\" control must cover\n# fragment: backup_governance_restore_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "backup_governance_restore_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Backup governance and restore testing\" sub-process of Data Protection & Privacy?",
          "options": [
            "Deploy and operate the backup governance and restore testing control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the backup governance and restore testing control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for backup governance and restore testing against comparable organisations in the sector",
            "Obtain evidence that the backup governance and restore testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dpp-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Backup governance and restore testing\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Protection & Privacy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Protection & Privacy estate",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Protection & Privacy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dpp-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Backup governance and restore testing\" control?",
          "options": [
            "A point-in-time screenshot of one system's backup governance and restore testing settings, captured during the walkthrough",
            "The The backup inventory + schedule per system (what's backed up, frequency, RPO), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the backup governance and restore testing control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's backup governance and restore testing capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dpp-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Backup governance and restore testing\"?",
          "options": [
            "From Backup platform — Veeam / Commvault / Rubrik / AWS Backup and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how backup governance and restore testing works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Backup platform — Veeam / Commvault / Rubrik / AWS Backup) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dpp-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Backup governance and restore testing\"?",
          "options": [
            "The external audit firm, since it is the party examining the backup governance and restore testing control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the backup governance and restore testing data is shared, so the accountability sits with no one in particular",
            "Backup / Infrastructure operations — own backups, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Backup / Infrastructure operations — own backups owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dpp-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Backup governance and restore testing\", which part stays with the human auditor?",
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
          "id": "dpp-04-q7",
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
          "id": "dpp-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Backup governance and restore testing\", which of these is a realistic reportable finding?",
          "options": [
            "A third of production systems show silent backup failures for months, no restore has been tested this year, and backups sit on a share writable by the production domain-admin account — so one ransomware actor encrypts production and the backups together.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A third of production systems show silent backup failures for months, no restore has been tested this year, and backups sit on a share writable by the production domain-admin account — so one ransomware actor encrypts production and the backups together. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dpp-04-q9",
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
          "id": "dpp-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Backup governance and restore testing\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind backup governance and restore testing, so there is no overlap",
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
    "epochId": "data-privacy",
    "id": "dpp-05",
    "order": 5,
    "title": "Data loss prevention",
    "subtitle": "Agentic technical & privacy audit of the data loss prevention control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data loss prevention\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify DLP detects and controls sensitive-data egress across channels. PASS: DLP covers the key sensitive types (PII/PHI/PCI/IP) across email, web/upload, endpoint (USB/print), and cloud (CASB); coverage is near-complete; incidents are triaged and trending down; high-risk channels are blocked or restricted; and policy override requires justification. Exceptions: major channels with no DLP (personal webmail, USB, unmanaged SaaS), large coverage gaps, incidents logged but never triaged, and trivial one-click override of blocks.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (DLP — Microsoft Purview DLP / Forcepoint / Symantec; CASB for cloud; Email security gateway, web proxy / SWG, endpoint DLP agent; SIEM (incident triage)) as tools — e.g. `DLP console: policy inventory per channel + enrolled-endpoint coverage`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The DLP policy set — sensitive data types detected, on which channels (email, web, endpoint, cloud)",
        "DLP coverage — endpoints/users/channels enrolled vs total",
        "DLP incident logs — detections, blocks, overrides — and their disposition",
        "The egress channels NOT covered by DLP (personal cloud, USB, unmanaged SaaS)"
      ],
      "system": [
        "DLP — Microsoft Purview DLP / Forcepoint / Symantec; CASB for cloud",
        "Email security gateway, web proxy / SWG, endpoint DLP agent",
        "SIEM (incident triage)"
      ],
      "dataOwner": [
        "Data protection / security operations — own DLP",
        "Privacy — defines the sensitive types",
        "HR / Legal — handle insider cases"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-05-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Data loss prevention",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data loss prevention\" as a repeatable agentic workflow: pull the real evidence (The DLP policy set — sensitive data types detected, on which channels (email, web, endpoint, cloud)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Data loss prevention\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the DLP policy set — sensitive data types detected, on which channels (email, web, endpoint, cloud), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DLP — Microsoft Purview DLP / Forcepoint / Symantec; CASB for cloud, Email security gateway, web proxy / SWG, endpoint DLP agent, SIEM (incident triage) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `DLP console: policy inventory per channel + enrolled-endpoint coverage vs CMDB` — read-only, against the systems of record.",
        "The test itself is specific. Verify DLP detects and controls sensitive-data egress across channels. PASS: DLP covers the key sensitive types (PII/PHI/PCI/IP) across email, web/upload, endpoint (USB/print), and cloud (CASB); coverage is near-complete; incidents are triaged and trending down; high-risk channels are blocked or restricted; and policy override requires justification. Exceptions: major channels with no DLP (personal webmail, USB, unmanaged SaaS), large coverage gaps, incidents logged but never triaged, and trivial one-click override of blocks. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_data_loss_prevention_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DLP — Microsoft Purview DLP / Forcepoint / Symantec; CASB for cloud and Email security gateway, web proxy / SWG, endpoint DLP agent (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_data_loss_prevention_mcp.py` to expose it to your agent — or `python 05_data_loss_prevention_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DLP — Microsoft Purview DLP / Forcepoint / Symantec; CASB for cloud · Email security gateway, web proxy / SWG, endpoint DLP agent",
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
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data loss prevention\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "DLP console: policy inventory per channel + enrolled-endpoint coverage vs CMDB\nincident export: detections / blocks / overrides + disposition + trend over time\ntest the exfil paths yourself — USB copy, personal webmail upload, unmanaged cloud sync — and see what's caught\nCASB: sanctioned vs shadow SaaS data movement"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The DLP policy set — sensitive data types detected, on which channels (email, web, endpoint, cloud).",
        "The test: Verify DLP detects and controls sensitive-data egress across channels.",
        "Reconcile the systems of record (DLP — Microsoft Purview DLP / Forcepoint / Symantec; CASB for cloud, Email security gateway, web proxy / SWG, endpoint DLP agent, SIEM (incident triage)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. DLP runs on email only; endpoint USB and personal cloud sync are uncovered, so a test file of customer records copies to USB and uploads to personal Google Drive undetected — and the email DLP alerts route to a queue no one reviews."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 SC-7 / SI-4",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Microsoft Purview DLP",
          "url": "https://learn.microsoft.com/purview/dlp-learn-about-dlp"
        },
        {
          "title": "CIS Control 3 Data Protection",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_data_loss_prevention_mcp.py",
          "url": "/audit-code/data-privacy/05_data_loss_prevention_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Data loss prevention\" (the dlp policy set — sensitive data types detected, on which channels (email, web, endpoint, cloud)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data loss prevention\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Verify DLP detects and controls sensitive-data egress across channels. PASS: DLP covers the key sensitive types (PII/PHI/PCI/IP) across email, web/upload, endpoint (USB/print), and cloud (CASB); coverage is near-complete; incidents are triaged and trending down; high-risk channels are blocked or restricted; and policy override requires justification. Exceptions: major channels with no DLP (personal webmail, USB, unmanaged SaaS), large coverage gaps, incidents logged but never triaged, and trivial one-click override of blocks. The evidence — The DLP policy set — sensitive data types detected, on which channels (email, web, endpoint, cloud) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DLP — Microsoft Purview DLP / Forcepoint / Symantec; CASB for cloud APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DLP — Microsoft Purview DLP / Forcepoint / Symantec; CASB for cloud gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DLP — Microsoft Purview DLP / Forcepoint / Symantec; CASB for cloud; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Data loss prevention\" Audit Evidence\n\nThe test:\nVerify DLP detects and controls sensitive-data egress across channels. PASS: DLP covers the key sensitive types (PII/PHI/PCI/IP) across email, web/upload, endpoint (USB/print), and cloud (CASB); coverage is near-complete; incidents are triaged and trending down; high-risk channels are blocked or restricted; and policy override requires justification. Exceptions: major channels with no DLP (personal webmail, USB, unmanaged SaaS), large coverage gaps, incidents logged but never triaged, and trivial one-click override of blocks.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — The DLP policy set — sensitive data types detected, on which channels (email, web, endpoint, cloud))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data loss prevention\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data loss prevention\" control must cover\n# fragment: data_loss_prevention_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "data_loss_prevention_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data loss prevention\" sub-process of Data Protection & Privacy?",
          "options": [
            "Deploy and operate the data loss prevention control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data loss prevention control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data loss prevention against comparable organisations in the sector",
            "Obtain evidence that the data loss prevention control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dpp-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data loss prevention\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Protection & Privacy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Protection & Privacy estate",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Protection & Privacy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dpp-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data loss prevention\" control?",
          "options": [
            "A point-in-time screenshot of one system's data loss prevention settings, captured during the walkthrough",
            "The The DLP policy set — sensitive data types detected, on which channels (email, web, endpoint, cloud), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data loss prevention control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data loss prevention capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dpp-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data loss prevention\"?",
          "options": [
            "From DLP — Microsoft Purview DLP / Forcepoint / Symantec; CASB for cloud and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data loss prevention works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. DLP — Microsoft Purview DLP / Forcepoint / Symantec; CASB for cloud) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dpp-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data loss prevention\"?",
          "options": [
            "The external audit firm, since it is the party examining the data loss prevention control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data loss prevention data is shared, so the accountability sits with no one in particular",
            "Data protection / security operations — own DLP, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data protection / security operations — own DLP owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dpp-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data loss prevention\", which part stays with the human auditor?",
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
          "id": "dpp-05-q7",
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
          "id": "dpp-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data loss prevention\", which of these is a realistic reportable finding?",
          "options": [
            "DLP runs on email only; endpoint USB and personal cloud sync are uncovered, so a test file of customer records copies to USB and uploads to personal Google Drive undetected — and the email DLP alerts route to a queue no one reviews.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. DLP runs on email only; endpoint USB and personal cloud sync are uncovered, so a test file of customer records copies to USB and uploads to personal Google Drive undetected — and the email DLP alerts route to a queue no one reviews. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dpp-05-q9",
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
          "id": "dpp-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data loss prevention\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data loss prevention, so there is no overlap",
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
    "epochId": "data-privacy",
    "id": "dpp-06",
    "order": 6,
    "title": "Alert handling",
    "subtitle": "Agentic technical & privacy audit of the alert handling control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Alert handling\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data-security alerts are actually worked, not just generated. PASS: alerts route to a named queue/owner with a triage SLA; true positives are escalated to incident response; the false-positive rate is managed by tuning (not ignored); playbooks exist for exfiltration/insider cases; and the aged-alert backlog is small. Exceptions: alerts firing into an unmonitored mailbox, no triage SLA, a large backlog of un-triaged alerts, no tuning (alert fatigue), and no playbook for confirmed data exfiltration.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (SIEM / SOAR — Sentinel / Splunk + Cortex XSOAR; DLP / CASB / classification alert sources; Case management / ITSM) as tools — e.g. `SIEM/SOAR: data-alert volume, time-to-triage, disposition mix, aged-ba`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The data-security alert inventory (DLP, classification, access-anomaly, exfil) and where each routes",
        "Alert-triage records — time-to-triage, disposition (true/false positive, escalated), MTTR",
        "The runbooks/playbooks for data-exfiltration and insider alerts",
        "The backlog of un-triaged / aged data alerts"
      ],
      "system": [
        "SIEM / SOAR — Sentinel / Splunk + Cortex XSOAR",
        "DLP / CASB / classification alert sources",
        "Case management / ITSM"
      ],
      "dataOwner": [
        "Security operations / SOC — triage",
        "Data protection — owns the policies generating alerts",
        "Insider-risk / HR-Legal — for people cases"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-06-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Alert handling",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Alert handling\" as a repeatable agentic workflow: pull the real evidence (The data-security alert inventory (DLP, classification, access-anomaly, exfil) and where each routes) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Alert handling\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the data-security alert inventory (DLP, classification, access-anomaly, exfil) and where each routes, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SIEM / SOAR — Sentinel / Splunk + Cortex XSOAR, DLP / CASB / classification alert sources, Case management / ITSM — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `SIEM/SOAR: data-alert volume, time-to-triage, disposition mix, aged-backlog metr` — read-only, against the systems of record.",
        "The test itself is specific. Verify data-security alerts are actually worked, not just generated. PASS: alerts route to a named queue/owner with a triage SLA; true positives are escalated to incident response; the false-positive rate is managed by tuning (not ignored); playbooks exist for exfiltration/insider cases; and the aged-alert backlog is small. Exceptions: alerts firing into an unmonitored mailbox, no triage SLA, a large backlog of un-triaged alerts, no tuning (alert fatigue), and no playbook for confirmed data exfiltration. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_alert_handling_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SIEM / SOAR — Sentinel / Splunk + Cortex XSOAR and DLP / CASB / classification alert sources (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_alert_handling_mcp.py` to expose it to your agent — or `python 06_alert_handling_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SIEM / SOAR — Sentinel / Splunk + Cortex XSOAR · DLP / CASB / classification alert sources",
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
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Alert handling\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "SIEM/SOAR: data-alert volume, time-to-triage, disposition mix, aged-backlog metrics\nconfirm each alert source routes to a monitored queue with an owner + SLA\nreview the exfil/insider playbook and a sample of recent cases for adherence\nfalse-positive rate + tuning history (the alert-fatigue signal)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The data-security alert inventory (DLP, classification, access-anomaly, exfil) and where each routes.",
        "The test: Verify data-security alerts are actually worked, not just generated.",
        "Reconcile the systems of record (SIEM / SOAR — Sentinel / Splunk + Cortex XSOAR, DLP / CASB / classification alert sources, Case management / ITSM) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. DLP and access-anomaly alerts route to a shared mailbox no one owns; ~4,000 alerts sit un-triaged, and a confirmed large download by a departing employee was buried in the noise and never escalated."
      ],
      "references": [
        {
          "title": "NIST SP 800-61 Incident Handling",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "MITRE ATT&CK — Exfiltration",
          "url": "https://attack.mitre.org/tactics/TA0010/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_alert_handling_mcp.py",
          "url": "/audit-code/data-privacy/06_alert_handling_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Alert handling\" (the data-security alert inventory (dlp, classification, access-anomaly, exfil) and where each routes), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Alert handling\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Verify data-security alerts are actually worked, not just generated. PASS: alerts route to a named queue/owner with a triage SLA; true positives are escalated to incident response; the false-positive rate is managed by tuning (not ignored); playbooks exist for exfiltration/insider cases; and the aged-alert backlog is small. Exceptions: alerts firing into an unmonitored mailbox, no triage SLA, a large backlog of un-triaged alerts, no tuning (alert fatigue), and no playbook for confirmed data exfiltration. The evidence — The data-security alert inventory (DLP, classification, access-anomaly, exfil) and where each routes — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SIEM / SOAR — Sentinel / Splunk + Cortex XSOAR APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SIEM / SOAR — Sentinel / Splunk + Cortex XSOAR gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SIEM / SOAR — Sentinel / Splunk + Cortex XSOAR; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Alert handling\" Audit Evidence\n\nThe test:\nVerify data-security alerts are actually worked, not just generated. PASS: alerts route to a named queue/owner with a triage SLA; true positives are escalated to incident response; the false-positive rate is managed by tuning (not ignored); playbooks exist for exfiltration/insider cases; and the aged-alert backlog is small. Exceptions: alerts firing into an unmonitored mailbox, no triage SLA, a large backlog of un-triaged alerts, no tuning (alert fatigue), and no playbook for confirmed data exfiltration.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — The data-security alert inventory (DLP, classification, access-anomaly, exfil) and where each routes)\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Alert handling\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Alert handling\" control must cover\n# fragment: alert_handling_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "alert_handling_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Alert handling\" sub-process of Data Protection & Privacy?",
          "options": [
            "Deploy and operate the alert handling control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the alert handling control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for alert handling against comparable organisations in the sector",
            "Obtain evidence that the alert handling control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dpp-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Alert handling\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Protection & Privacy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Protection & Privacy estate",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Protection & Privacy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dpp-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Alert handling\" control?",
          "options": [
            "A point-in-time screenshot of one system's alert handling settings, captured during the walkthrough",
            "The The data-security alert inventory (DLP, classification, access-anomaly, exfil) and where each routes, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the alert handling control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's alert handling capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dpp-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Alert handling\"?",
          "options": [
            "From SIEM / SOAR — Sentinel / Splunk + Cortex XSOAR and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how alert handling works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SIEM / SOAR — Sentinel / Splunk + Cortex XSOAR) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dpp-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Alert handling\"?",
          "options": [
            "The external audit firm, since it is the party examining the alert handling control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the alert handling data is shared, so the accountability sits with no one in particular",
            "Security operations / SOC — triage, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / SOC — triage owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dpp-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Alert handling\", which part stays with the human auditor?",
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
          "id": "dpp-06-q7",
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
          "id": "dpp-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Alert handling\", which of these is a realistic reportable finding?",
          "options": [
            "DLP and access-anomaly alerts route to a shared mailbox no one owns; ~4,000 alerts sit un-triaged, and a confirmed large download by a departing employee was buried in the noise and never escalated.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. DLP and access-anomaly alerts route to a shared mailbox no one owns; ~4,000 alerts sit un-triaged, and a confirmed large download by a departing employee was buried in the noise and never escalated. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dpp-06-q9",
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
          "id": "dpp-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Alert handling\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind alert handling, so there is no overlap",
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
    "epochId": "data-privacy",
    "id": "dpp-07",
    "order": 7,
    "title": "Privacy compliance and sovereignty",
    "subtitle": "Agentic technical & privacy audit of the privacy compliance and sovereignty control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Privacy compliance and sovereignty\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify processing of personal data is lawful and data stays where it must. PASS: a RoPA exists with a lawful basis per processing activity; data residency matches regulatory/contractual requirements (e.g. EU data stays in the EU); cross-border transfers have a valid mechanism; DSARs and consent are honoured within statutory timelines; and DPIAs exist for high-risk processing. Exceptions: processing with no lawful basis, regulated data stored/processed in a prohibited region, international transfers with no valid mechanism, missed DSAR deadlines, and high-risk processing with no DPIA.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (Privacy management — OneTrust / TrustArc (RoPA, DSAR, consent); Cloud region/residency config + data catalogue; Contracts / DPAs with processors) as tools — e.g. `OneTrust: RoPA completeness + lawful-basis per activity + DSAR-SLA rep`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The Record of Processing Activities (RoPA) — what personal data is processed, why, the lawful basis, and recipients",
        "The data-residency / sovereignty mapping — where each data category is stored/processed vs where it must stay",
        "Cross-border transfer mechanisms (SCCs, adequacy, EU-US DPF) for each export",
        "DSAR + consent + DPIA records"
      ],
      "system": [
        "Privacy management — OneTrust / TrustArc (RoPA, DSAR, consent)",
        "Cloud region/residency config + data catalogue",
        "Contracts / DPAs with processors"
      ],
      "dataOwner": [
        "Data Protection Officer / Privacy — owns compliance",
        "Legal — owns the transfer mechanisms",
        "Cloud platform / data owners — control residency"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-07-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Privacy compliance and sovereignty",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Privacy compliance and sovereignty\" as a repeatable agentic workflow: pull the real evidence (The Record of Processing Activities (RoPA) — what personal data is processed, why, the lawful basis, and recipients) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Privacy compliance and sovereignty\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the Record of Processing Activities (RoPA) — what personal data is processed, why, the lawful basis, and recipients, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Privacy management — OneTrust / TrustArc (RoPA, DSAR, consent), Cloud region/residency config + data catalogue, Contracts / DPAs with processors — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `OneTrust: RoPA completeness + lawful-basis per activity + DSAR-SLA report` — read-only, against the systems of record.",
        "The test itself is specific. Verify processing of personal data is lawful and data stays where it must. PASS: a RoPA exists with a lawful basis per processing activity; data residency matches regulatory/contractual requirements (e.g. EU data stays in the EU); cross-border transfers have a valid mechanism; DSARs and consent are honoured within statutory timelines; and DPIAs exist for high-risk processing. Exceptions: processing with no lawful basis, regulated data stored/processed in a prohibited region, international transfers with no valid mechanism, missed DSAR deadlines, and high-risk processing with no DPIA. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_privacy_compliance_and_sovereignty_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Privacy management — OneTrust / TrustArc (RoPA, DSAR, consent) and Cloud region/residency config + data catalogue (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_privacy_compliance_and_sovereignty_mcp.py` to expose it to your agent — or `python 07_privacy_compliance_and_sovereignty_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Privacy management — OneTrust / TrustArc (RoPA, DSAR, consent) · Cloud region/residency config + data catalogue",
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
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Privacy compliance and sovereignty\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "OneTrust: RoPA completeness + lawful-basis per activity + DSAR-SLA report\ncloud: confirm resource regions for PII workloads (e.g. data resident in eu-* only)\nmap each cross-border data flow to its SCC / adequacy / DPF mechanism\nDPIA register for high-risk processing (profiling, large-scale special-category data)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The Record of Processing Activities (RoPA) — what personal data is processed, why, the lawful basis, and recipients.",
        "The test: Verify processing of personal data is lawful and data stays where it must.",
        "Reconcile the systems of record (Privacy management — OneTrust / TrustArc (RoPA, DSAR, consent), Cloud region/residency config + data catalogue, Contracts / DPAs with processors) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. EU customer data is replicated to a US analytics region with no valid transfer mechanism, the RoPA is two years stale, and ~30% of DSARs missed the 30-day GDPR deadline."
      ],
      "references": [
        {
          "title": "GDPR",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27701 Privacy Information Management",
          "url": "https://www.iso.org/standard/71670.html"
        },
        {
          "title": "EU Standard Contractual Clauses",
          "url": "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_privacy_compliance_and_sovereignty_mcp.py",
          "url": "/audit-code/data-privacy/07_privacy_compliance_and_sovereignty_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Privacy compliance and sovereignty\" (the record of processing activities (ropa) — what personal data is processed, why, the lawful basis, and recipients), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Privacy compliance and sovereignty\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Verify processing of personal data is lawful and data stays where it must. PASS: a RoPA exists with a lawful basis per processing activity; data residency matches regulatory/contractual requirements (e.g. EU data stays in the EU); cross-border transfers have a valid mechanism; DSARs and consent are honoured within statutory timelines; and DPIAs exist for high-risk processing. Exceptions: processing with no lawful basis, regulated data stored/processed in a prohibited region, international transfers with no valid mechanism, missed DSAR deadlines, and high-risk processing with no DPIA. The evidence — The Record of Processing Activities (RoPA) — what personal data is processed, why, the lawful basis, and recipients — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Privacy management — OneTrust / TrustArc (RoPA, DSAR, consent) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Privacy management — OneTrust / TrustArc (RoPA, DSAR, consent) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Privacy management — OneTrust / TrustArc (RoPA, DSAR, consent); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Privacy compliance and sovereignty\" Audit Evidence\n\nThe test:\nVerify processing of personal data is lawful and data stays where it must. PASS: a RoPA exists with a lawful basis per processing activity; data residency matches regulatory/contractual requirements (e.g. EU data stays in the EU); cross-border transfers have a valid mechanism; DSARs and consent are honoured within statutory timelines; and DPIAs exist for high-risk processing. Exceptions: processing with no lawful basis, regulated data stored/processed in a prohibited region, international transfers with no valid mechanism, missed DSAR deadlines, and high-risk processing with no DPIA.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — The Record of Processing Activities (RoPA) — what personal data is processed, why, the lawful basis, and recipients)\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Privacy compliance and sovereignty\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Privacy compliance and sovereignty\" control must cover\n# fragment: privacy_compliance_sovereignty_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "privacy_compliance_sovereignty_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Privacy compliance and sovereignty\" sub-process of Data Protection & Privacy?",
          "options": [
            "Deploy and operate the privacy compliance and sovereignty control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the privacy compliance and sovereignty control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for privacy compliance and sovereignty against comparable organisations in the sector",
            "Obtain evidence that the privacy compliance and sovereignty control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dpp-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Privacy compliance and sovereignty\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Protection & Privacy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Protection & Privacy estate",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Protection & Privacy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dpp-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Privacy compliance and sovereignty\" control?",
          "options": [
            "A point-in-time screenshot of one system's privacy compliance and sovereignty settings, captured during the walkthrough",
            "The The Record of Processing Activities (RoPA) — what personal data is processed, why, the lawful basis, and recipients, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the privacy compliance and sovereignty control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's privacy compliance and sovereignty capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dpp-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Privacy compliance and sovereignty\"?",
          "options": [
            "From Privacy management — OneTrust / TrustArc (RoPA, DSAR, consent) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how privacy compliance and sovereignty works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Privacy management — OneTrust / TrustArc (RoPA, DSAR, consent)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dpp-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Privacy compliance and sovereignty\"?",
          "options": [
            "The external audit firm, since it is the party examining the privacy compliance and sovereignty control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the privacy compliance and sovereignty data is shared, so the accountability sits with no one in particular",
            "Data Protection Officer / Privacy — owns compliance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data Protection Officer / Privacy — owns compliance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dpp-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Privacy compliance and sovereignty\", which part stays with the human auditor?",
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
          "id": "dpp-07-q7",
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
          "id": "dpp-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Privacy compliance and sovereignty\", which of these is a realistic reportable finding?",
          "options": [
            "EU customer data is replicated to a US analytics region with no valid transfer mechanism, the RoPA is two years stale, and ~30% of DSARs missed the 30-day GDPR deadline.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. EU customer data is replicated to a US analytics region with no valid transfer mechanism, the RoPA is two years stale, and ~30% of DSARs missed the 30-day GDPR deadline. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dpp-07-q9",
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
          "id": "dpp-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Privacy compliance and sovereignty\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind privacy compliance and sovereignty, so there is no overlap",
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
    "epochId": "data-privacy",
    "id": "dpp-08",
    "order": 8,
    "title": "Data inventorying, lineage, provenance",
    "subtitle": "Agentic technical & privacy audit of the data inventorying, lineage, provenance control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data inventorying, lineage, provenance\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the organisation knows what data it has, where it came from, and where it flows. PASS: a data catalogue covers the in-scope estate with owner + classification + location; lineage is mapped for regulatory/critical datasets (so the impact of a change or breach is traceable); provenance is recorded for data used in regulatory reporting or AI training; and shadow/undocumented stores are minimal. Exceptions: large uncatalogued/shadow data, no lineage for regulated datasets (a breach's blast radius or a bad figure can't be traced to source), and missing provenance for reported or AI-training data.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (Data catalogue — Collibra / Alation / Microsoft Purview / DataHub; Lineage tooling (catalogue-native, or via dbt / Spark); The data lakes / warehouses / databases being catalogued) as tools — e.g. `catalogue coverage report: catalogued datasets vs discovered stores (t`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The enterprise data inventory/catalogue — datasets with owner, classification, and location",
        "Data-lineage maps for key datasets — source → transformations → consumers/reports",
        "Provenance records for critical/regulatory data (where it originated, how it was derived)",
        "Coverage: catalogued / lineage-mapped datasets vs total, including shadow data stores"
      ],
      "system": [
        "Data catalogue — Collibra / Alation / Microsoft Purview / DataHub",
        "Lineage tooling (catalogue-native, or via dbt / Spark)",
        "The data lakes / warehouses / databases being catalogued"
      ],
      "dataOwner": [
        "Data governance / Chief Data Office — owns the catalogue",
        "Data stewards — maintain entries",
        "Data engineering — emits lineage"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-08-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Data inventorying, lineage, provenance",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data inventorying, lineage, provenance\" as a repeatable agentic workflow: pull the real evidence (The enterprise data inventory/catalogue — datasets with owner, classification, and location) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Data inventorying, lineage, provenance\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the enterprise data inventory/catalogue — datasets with owner, classification, and location, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Data catalogue — Collibra / Alation / Microsoft Purview / DataHub, Lineage tooling (catalogue-native, or via dbt / Spark), The data lakes / warehouses / databases being catalogued — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `catalogue coverage report: catalogued datasets vs discovered stores (the shadow-` — read-only, against the systems of record.",
        "The test itself is specific. Verify the organisation knows what data it has, where it came from, and where it flows. PASS: a data catalogue covers the in-scope estate with owner + classification + location; lineage is mapped for regulatory/critical datasets (so the impact of a change or breach is traceable); provenance is recorded for data used in regulatory reporting or AI training; and shadow/undocumented stores are minimal. Exceptions: large uncatalogued/shadow data, no lineage for regulated datasets (a breach's blast radius or a bad figure can't be traced to source), and missing provenance for reported or AI-training data. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_data_inventorying_lineage_provenance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Data catalogue — Collibra / Alation / Microsoft Purview / DataHub and Lineage tooling (catalogue-native, or via dbt / Spark) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_data_inventorying_lineage_provenance_mcp.py` to expose it to your agent — or `python 08_data_inventorying_lineage_provenance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Data catalogue — Collibra / Alation / Microsoft Purview / DataHub · Lineage tooling (catalogue-native, or via dbt / Spark)",
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
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data inventorying, lineage, provenance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "catalogue coverage report: catalogued datasets vs discovered stores (the shadow-data gap)\ntrace lineage for a regulatory dataset end-to-end: source → ETL → report\nPurview / Collibra scan to discover uncatalogued sources\nprovenance check on AI-training and regulatory-reporting datasets"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The enterprise data inventory/catalogue — datasets with owner, classification, and location.",
        "The test: Verify the organisation knows what data it has, where it came from, and where it flows.",
        "Reconcile the systems of record (Data catalogue — Collibra / Alation / Microsoft Purview / DataHub, Lineage tooling (catalogue-native, or via dbt / Spark), The data lakes / warehouses / databases being catalogued) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The catalogue covers the warehouse but misses dozens of shadow databases and extracts; a key regulatory report has no lineage, so when a figure was wrong no one could trace it to source — and the same gap means a breach's blast radius can't be scoped."
      ],
      "references": [
        {
          "title": "DAMA-DMBOK Data Management",
          "url": "https://www.dama.org/"
        },
        {
          "title": "NIST SP 800-53 — Data Governance (PM/PT)",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_data_inventorying_lineage_provenance_mcp.py",
          "url": "/audit-code/data-privacy/08_data_inventorying_lineage_provenance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Data inventorying, lineage, provenance\" (the enterprise data inventory/catalogue — datasets with owner, classification, and location), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data inventorying, lineage, provenance\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Verify the organisation knows what data it has, where it came from, and where it flows. PASS: a data catalogue covers the in-scope estate with owner + classification + location; lineage is mapped for regulatory/critical datasets (so the impact of a change or breach is traceable); provenance is recorded for data used in regulatory reporting or AI training; and shadow/undocumented stores are minimal. Exceptions: large uncatalogued/shadow data, no lineage for regulated datasets (a breach's blast radius or a bad figure can't be traced to source), and missing provenance for reported or AI-training data. The evidence — The enterprise data inventory/catalogue — datasets with owner, classification, and location — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Data catalogue — Collibra / Alation / Microsoft Purview / DataHub APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Data catalogue — Collibra / Alation / Microsoft Purview / DataHub gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Data catalogue — Collibra / Alation / Microsoft Purview / DataHub; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Data inventorying, lineage, provenance\" Audit Evidence\n\nThe test:\nVerify the organisation knows what data it has, where it came from, and where it flows. PASS: a data catalogue covers the in-scope estate with owner + classification + location; lineage is mapped for regulatory/critical datasets (so the impact of a change or breach is traceable); provenance is recorded for data used in regulatory reporting or AI training; and shadow/undocumented stores are minimal. Exceptions: large uncatalogued/shadow data, no lineage for regulated datasets (a breach's blast radius or a bad figure can't be traced to source), and missing provenance for reported or AI-training data.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — The enterprise data inventory/catalogue — datasets with owner, classification, and location)\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data inventorying, lineage, provenance\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data inventorying, lineage, provenance\" control must cover\n# fragment: data_inventorying_lineage_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "data_inventorying_lineage_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data inventorying, lineage, provenance\" sub-process of Data Protection & Privacy?",
          "options": [
            "Deploy and operate the data inventorying, lineage, provenance control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data inventorying, lineage, provenance control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data inventorying, lineage, provenance against comparable organisations in the sector",
            "Obtain evidence that the data inventorying, lineage, provenance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dpp-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data inventorying, lineage, provenance\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Protection & Privacy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Protection & Privacy estate",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Protection & Privacy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dpp-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data inventorying, lineage, provenance\" control?",
          "options": [
            "A point-in-time screenshot of one system's data inventorying, lineage, provenance settings, captured during the walkthrough",
            "The The enterprise data inventory/catalogue — datasets with owner, classification, and location, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data inventorying, lineage, provenance control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data inventorying, lineage, provenance capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dpp-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data inventorying, lineage, provenance\"?",
          "options": [
            "From Data catalogue — Collibra / Alation / Microsoft Purview / DataHub and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data inventorying, lineage, provenance works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Data catalogue — Collibra / Alation / Microsoft Purview / DataHub) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dpp-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data inventorying, lineage, provenance\"?",
          "options": [
            "The external audit firm, since it is the party examining the data inventorying, lineage, provenance control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data inventorying, lineage, provenance data is shared, so the accountability sits with no one in particular",
            "Data governance / Chief Data Office — owns the catalogue, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data governance / Chief Data Office — owns the catalogue owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dpp-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data inventorying, lineage, provenance\", which part stays with the human auditor?",
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
          "id": "dpp-08-q7",
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
          "id": "dpp-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data inventorying, lineage, provenance\", which of these is a realistic reportable finding?",
          "options": [
            "The catalogue covers the warehouse but misses dozens of shadow databases and extracts; a key regulatory report has no lineage, so when a figure was wrong no one could trace it to source — and the same gap means a breach's blast radius can't be scoped.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The catalogue covers the warehouse but misses dozens of shadow databases and extracts; a key regulatory report has no lineage, so when a figure was wrong no one could trace it to source — and the same gap means a breach's blast radius can't be scoped. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dpp-08-q9",
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
          "id": "dpp-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data inventorying, lineage, provenance\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data inventorying, lineage, provenance, so there is no overlap",
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
    "epochId": "data-privacy",
    "id": "dpp-09",
    "order": 9,
    "title": "Data monitoring",
    "subtitle": "Agentic technical & privacy audit of the data monitoring control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data monitoring\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify access to sensitive data is monitored and anomalies are detected. PASS: database activity monitoring logs access to sensitive stores (who ran what query against which sensitive table, when); privileged/DBA access to data is logged and independently reviewed; anomaly detection flags abnormal access (bulk reads, off-hours, first-time principal → sensitive data); and coverage spans the sensitive estate. Exceptions: sensitive databases with no activity monitoring, DBA access to PII unlogged or self-reviewed, no anomaly detection (a mass export looks normal), and monitoring gaps on cloud data stores.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (DAM — Imperva / IBM Guardium / native (SQL Audit, RDS/Redshift logging); SIEM / UEBA for anomaly detection; The sensitive databases / warehouses / object stores) as tools — e.g. `Guardium/Imperva or native DB audit: which sensitive stores are monito`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Database/data-store activity-monitoring (DAM) configuration — what access/queries are logged on sensitive stores",
        "Access-anomaly detection on data (unusual volume, off-hours, new principal → sensitive table)",
        "Coverage: sensitive data stores under monitoring vs total",
        "Privileged/DBA access-to-data logging + independent review evidence"
      ],
      "system": [
        "DAM — Imperva / IBM Guardium / native (SQL Audit, RDS/Redshift logging)",
        "SIEM / UEBA for anomaly detection",
        "The sensitive databases / warehouses / object stores"
      ],
      "dataOwner": [
        "Security operations / data security — own monitoring",
        "DBAs — emit logs (but don't self-audit)",
        "Data owners"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-09-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Data monitoring",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data monitoring\" as a repeatable agentic workflow: pull the real evidence (Database/data-store activity-monitoring (DAM) configuration — what access/queries are logged on sensitive stores) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Data monitoring\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me database/data-store activity-monitoring (DAM) configuration — what access/queries are logged on sensitive stores, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DAM — Imperva / IBM Guardium / native (SQL Audit, RDS/Redshift logging), SIEM / UEBA for anomaly detection, The sensitive databases / warehouses / object stores — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Guardium/Imperva or native DB audit: which sensitive stores are monitored vs tot` — read-only, against the systems of record.",
        "The test itself is specific. Verify access to sensitive data is monitored and anomalies are detected. PASS: database activity monitoring logs access to sensitive stores (who ran what query against which sensitive table, when); privileged/DBA access to data is logged and independently reviewed; anomaly detection flags abnormal access (bulk reads, off-hours, first-time principal → sensitive data); and coverage spans the sensitive estate. Exceptions: sensitive databases with no activity monitoring, DBA access to PII unlogged or self-reviewed, no anomaly detection (a mass export looks normal), and monitoring gaps on cloud data stores. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_data_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DAM — Imperva / IBM Guardium / native (SQL Audit, RDS/Redshift logging) and SIEM / UEBA for anomaly detection (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_data_monitoring_mcp.py` to expose it to your agent — or `python 09_data_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DAM — Imperva / IBM Guardium / native (SQL Audit, RDS/Redshift logging) · SIEM / UEBA for anomaly detection",
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
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Guardium/Imperva or native DB audit: which sensitive stores are monitored vs total\nUEBA anomaly rules: bulk reads, off-hours access, first-time access to a sensitive table\nreview DBA/privileged access-to-data logs — captured AND independently reviewed?\ncloud: S3 access logging / CloudTrail data events enabled on sensitive buckets"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Database/data-store activity-monitoring (DAM) configuration — what access/queries are logged on sensitive stores.",
        "The test: Verify access to sensitive data is monitored and anomalies are detected.",
        "Reconcile the systems of record (DAM — Imperva / IBM Guardium / native (SQL Audit, RDS/Redshift logging), SIEM / UEBA for anomaly detection, The sensitive databases / warehouses / object stores) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Production databases holding PII have no activity monitoring, DBAs query customer data freely with no log or review, and S3 data-event logging is off — so a bulk export of the customer table would leave no trace."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 AU / AC families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "PCI DSS Req. 10",
          "url": "https://www.pcisecuritystandards.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_data_monitoring_mcp.py",
          "url": "/audit-code/data-privacy/09_data_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Data monitoring\" (database/data-store activity-monitoring (dam) configuration — what access/queries are logged on sensitive stores), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data monitoring\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Verify access to sensitive data is monitored and anomalies are detected. PASS: database activity monitoring logs access to sensitive stores (who ran what query against which sensitive table, when); privileged/DBA access to data is logged and independently reviewed; anomaly detection flags abnormal access (bulk reads, off-hours, first-time principal → sensitive data); and coverage spans the sensitive estate. Exceptions: sensitive databases with no activity monitoring, DBA access to PII unlogged or self-reviewed, no anomaly detection (a mass export looks normal), and monitoring gaps on cloud data stores. The evidence — Database/data-store activity-monitoring (DAM) configuration — what access/queries are logged on sensitive stores — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DAM — Imperva / IBM Guardium / native (SQL Audit, RDS/Redshift logging) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DAM — Imperva / IBM Guardium / native (SQL Audit, RDS/Redshift logging) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DAM — Imperva / IBM Guardium / native (SQL Audit, RDS/Redshift logging); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Data monitoring\" Audit Evidence\n\nThe test:\nVerify access to sensitive data is monitored and anomalies are detected. PASS: database activity monitoring logs access to sensitive stores (who ran what query against which sensitive table, when); privileged/DBA access to data is logged and independently reviewed; anomaly detection flags abnormal access (bulk reads, off-hours, first-time principal → sensitive data); and coverage spans the sensitive estate. Exceptions: sensitive databases with no activity monitoring, DBA access to PII unlogged or self-reviewed, no anomaly detection (a mass export looks normal), and monitoring gaps on cloud data stores.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — Database/data-store activity-monitoring (DAM) configuration — what access/queries are logged on sensitive stores)\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data monitoring\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data monitoring\" control must cover\n# fragment: data_monitoring_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "data_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data monitoring\" sub-process of Data Protection & Privacy?",
          "options": [
            "Deploy and operate the data monitoring control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data monitoring control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data monitoring against comparable organisations in the sector",
            "Obtain evidence that the data monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dpp-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data monitoring\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Protection & Privacy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Protection & Privacy estate",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Protection & Privacy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dpp-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data monitoring\" control?",
          "options": [
            "A point-in-time screenshot of one system's data monitoring settings, captured during the walkthrough",
            "The Database/data-store activity-monitoring (DAM) configuration — what access/queries are logged on sensitive stores, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data monitoring control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data monitoring capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dpp-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data monitoring\"?",
          "options": [
            "From DAM — Imperva / IBM Guardium / native (SQL Audit, RDS/Redshift logging) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data monitoring works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. DAM — Imperva / IBM Guardium / native (SQL Audit, RDS/Redshift logging)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dpp-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data monitoring\"?",
          "options": [
            "The external audit firm, since it is the party examining the data monitoring control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data monitoring data is shared, so the accountability sits with no one in particular",
            "Security operations / data security — own monitoring, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / data security — own monitoring owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dpp-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data monitoring\", which part stays with the human auditor?",
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
          "id": "dpp-09-q7",
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
          "id": "dpp-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data monitoring\", which of these is a realistic reportable finding?",
          "options": [
            "Production databases holding PII have no activity monitoring, DBAs query customer data freely with no log or review, and S3 data-event logging is off — so a bulk export of the customer table would leave no trace.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Production databases holding PII have no activity monitoring, DBAs query customer data freely with no log or review, and S3 data-event logging is off — so a bulk export of the customer table would leave no trace. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dpp-09-q9",
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
          "id": "dpp-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data monitoring\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data monitoring, so there is no overlap",
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
    "epochId": "data-privacy",
    "id": "dpp-10",
    "order": 10,
    "title": "Quantum-ready data protection",
    "subtitle": "Agentic technical & privacy audit of the quantum-ready data protection control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Quantum-ready data protection\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess whether long-lived sensitive data is protected against future quantum decryption. PASS: long-secret data is identified with its required confidentiality lifetime; the crypto protecting it is inventoried; HNDL exposure is scored (data that must stay secret beyond ~2030 and traverses interceptable channels or sits in capturable stores); and a PQC migration plan (NIST FIPS 203/204, hybrid) with crypto-agility exists. Exceptions: long-retention sensitive data protected only by classical RSA/ECC, no HNDL assessment, data-protection crypto that can't be swapped without re-architecture, and no migration timeline.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (Data inventory + retention schedule; Crypto inventory / CBOM (Venafi/Keyfactor) for data-at-rest + in-transit; KMS/HSM) as tools — e.g. `join the retention schedule to data sensitivity → list data needing se`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of long-lived sensitive data and the confidentiality lifetime each requires",
        "The cryptography protecting that data at rest + in transit (algorithm, key size) — the data-centric CBOM",
        "The harvest-now-decrypt-later (HNDL) exposure assessment",
        "The migration plan to post-quantum cryptography + crypto-agility for data-protection crypto"
      ],
      "system": [
        "Data inventory + retention schedule",
        "Crypto inventory / CBOM (Venafi/Keyfactor) for data-at-rest + in-transit",
        "KMS/HSM",
        "PQC migration tooling"
      ],
      "dataOwner": [
        "Cryptography/PKI + Privacy — own data-protection crypto",
        "Enterprise architecture — owns crypto-agility",
        "Data owners — know the retention/secrecy lifetime"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-10-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Quantum-ready data protection",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Quantum-ready data protection\" as a repeatable agentic workflow: pull the real evidence (The inventory of long-lived sensitive data and the confidentiality lifetime each requires) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Quantum-ready data protection\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of long-lived sensitive data and the confidentiality lifetime each requires, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Data inventory + retention schedule, Crypto inventory / CBOM (Venafi/Keyfactor) for data-at-rest + in-transit, KMS/HSM — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `join the retention schedule to data sensitivity → list data needing secrecy beyo` — read-only, against the systems of record.",
        "The test itself is specific. Assess whether long-lived sensitive data is protected against future quantum decryption. PASS: long-secret data is identified with its required confidentiality lifetime; the crypto protecting it is inventoried; HNDL exposure is scored (data that must stay secret beyond ~2030 and traverses interceptable channels or sits in capturable stores); and a PQC migration plan (NIST FIPS 203/204, hybrid) with crypto-agility exists. Exceptions: long-retention sensitive data protected only by classical RSA/ECC, no HNDL assessment, data-protection crypto that can't be swapped without re-architecture, and no migration timeline. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_quantum_ready_data_protection_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Data inventory + retention schedule and Crypto inventory / CBOM (Venafi/Keyfactor) for data-at-rest + in-transit (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_quantum_ready_data_protection_mcp.py` to expose it to your agent — or `python 10_quantum_ready_data_protection_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Data inventory + retention schedule · Crypto inventory / CBOM (Venafi/Keyfactor) for data-at-rest + in-transit",
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
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Quantum-ready data protection\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "join the retention schedule to data sensitivity → list data needing secrecy beyond ~2030\nbuild a CBOM for data-at-rest (DB/volume/object encryption) + in-transit algorithms\nscore HNDL: long-secret data on interceptable links or in capturable stores\nplan: map current algorithms to NIST PQC (ML-KEM / ML-DSA) + hybrid, with crypto-agility"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of long-lived sensitive data and the confidentiality lifetime each requires.",
        "The test: Assess whether long-lived sensitive data is protected against future quantum decryption.",
        "Reconcile the systems of record (Data inventory + retention schedule, Crypto inventory / CBOM (Venafi/Keyfactor) for data-at-rest + in-transit, KMS/HSM) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Decades-retention health and financial records are protected only by classical RSA/ECC and traverse links an adversary could record today; there is no HNDL assessment and no PQC migration plan, so this data is already at risk."
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 (PQC)",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "NIST SP 1800-38 PQC Migration",
          "url": "https://www.nccoe.nist.gov/crypto-agility-considerations-migrating-post-quantum-cryptographic-algorithms"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_quantum_ready_data_protection_mcp.py",
          "url": "/audit-code/data-privacy/10_quantum_ready_data_protection_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Quantum-ready data protection\" (the inventory of long-lived sensitive data and the confidentiality lifetime each requires), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Quantum-ready data protection\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Assess whether long-lived sensitive data is protected against future quantum decryption. PASS: long-secret data is identified with its required confidentiality lifetime; the crypto protecting it is inventoried; HNDL exposure is scored (data that must stay secret beyond ~2030 and traverses interceptable channels or sits in capturable stores); and a PQC migration plan (NIST FIPS 203/204, hybrid) with crypto-agility exists. Exceptions: long-retention sensitive data protected only by classical RSA/ECC, no HNDL assessment, data-protection crypto that can't be swapped without re-architecture, and no migration timeline. The evidence — The inventory of long-lived sensitive data and the confidentiality lifetime each requires — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Data inventory + retention schedule APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Data inventory + retention schedule gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Data inventory + retention schedule; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Quantum-ready data protection\" Audit Evidence\n\nThe test:\nAssess whether long-lived sensitive data is protected against future quantum decryption. PASS: long-secret data is identified with its required confidentiality lifetime; the crypto protecting it is inventoried; HNDL exposure is scored (data that must stay secret beyond ~2030 and traverses interceptable channels or sits in capturable stores); and a PQC migration plan (NIST FIPS 203/204, hybrid) with crypto-agility exists. Exceptions: long-retention sensitive data protected only by classical RSA/ECC, no HNDL assessment, data-protection crypto that can't be swapped without re-architecture, and no migration timeline.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — The inventory of long-lived sensitive data and the confidentiality lifetime each requires)\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Quantum-ready data protection\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Quantum-ready data protection\" control must cover\n# fragment: quantumready_data_protection_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "quantumready_data_protection_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Quantum-ready data protection\" sub-process of Data Protection & Privacy?",
          "options": [
            "Deploy and operate the quantum-ready data protection control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the quantum-ready data protection control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for quantum-ready data protection against comparable organisations in the sector",
            "Obtain evidence that the quantum-ready data protection control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dpp-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Quantum-ready data protection\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Protection & Privacy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Protection & Privacy estate",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Protection & Privacy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dpp-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Quantum-ready data protection\" control?",
          "options": [
            "A point-in-time screenshot of one system's quantum-ready data protection settings, captured during the walkthrough",
            "The The inventory of long-lived sensitive data and the confidentiality lifetime each requires, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the quantum-ready data protection control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's quantum-ready data protection capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dpp-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Quantum-ready data protection\"?",
          "options": [
            "From Data inventory + retention schedule and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how quantum-ready data protection works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Data inventory + retention schedule) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dpp-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Quantum-ready data protection\"?",
          "options": [
            "The external audit firm, since it is the party examining the quantum-ready data protection control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the quantum-ready data protection data is shared, so the accountability sits with no one in particular",
            "Cryptography/PKI + Privacy — own data-protection crypto, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography/PKI + Privacy — own data-protection crypto owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dpp-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Quantum-ready data protection\", which part stays with the human auditor?",
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
          "id": "dpp-10-q7",
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
          "id": "dpp-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Quantum-ready data protection\", which of these is a realistic reportable finding?",
          "options": [
            "Decades-retention health and financial records are protected only by classical RSA/ECC and traverse links an adversary could record today; there is no HNDL assessment and no PQC migration plan, so this data is already at risk.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Decades-retention health and financial records are protected only by classical RSA/ECC and traverse links an adversary could record today; there is no HNDL assessment and no PQC migration plan, so this data is already at risk. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dpp-10-q9",
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
          "id": "dpp-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Quantum-ready data protection\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind quantum-ready data protection, so there is no overlap",
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
