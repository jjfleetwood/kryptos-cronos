import type { EpochConfig, StageConfig } from "../types";

export const repositoryMgmtEpoch: EpochConfig = {
  "id": "repository-mgmt",
  "name": "Repository Management",
  "subtitle": "Agentic technical & privacy audit — Repository Management",
  "description": "Audit Repository Management end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🗂️",
  "color": "Blue",
  "unlocked": true
};

export const repositoryMgmtStages: StageConfig[] = [
  {
    "epochId": "repository-mgmt",
    "id": "repo-01",
    "order": 1,
    "title": "Access control and authentication",
    "subtitle": "Agentic technical & privacy audit of the access control and authentication control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Access control and authentication\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Access control and authentication\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab / Bitbucket; Branch protection + CODEOWNERS; SCM audit log) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the access control and authentication control (from GitHub / GitLab / Bitbucket)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket",
        "Branch protection + CODEOWNERS",
        "SCM audit log",
        "Secret scanning service"
      ],
      "dataOwner": [
        "Engineering org owners",
        "Repo / org admins",
        "AppSec",
        "Developer platform team"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-01-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Access control and authentication",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Access control and authentication\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the access control and authentication control (from GitHub / GitLab / Bitbucket)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Access control and authentication\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the access control and authentication control (from GitHub / GitLab / Bitbucket), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Access control and authentication\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_access_control_and_authentication_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket and Branch protection + CODEOWNERS (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_access_control_and_authentication_mcp.py` to expose it to your agent — or `python 01_access_control_and_authentication_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket · Branch protection + CODEOWNERS",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Access control and authentication\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the access control and authentication control (from GitHub / GitLab / Bitbucket).",
        "The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Access control and authentication\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the access control and authentication control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP SCM Security Best Practices",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "GitHub — securing your organization",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure"
        },
        {
          "title": "NIST SSDF (SP 800-218) — PO/PS",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_access_control_and_authentication_mcp.py",
          "url": "/audit-code/repository-mgmt/01_access_control_and_authentication_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Access control and authentication\" (in-scope inventory for the access control and authentication control (from github / gitlab / bitbucket)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Access control and authentication\" control for Repository Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Access control and authentication\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the access control and authentication control (from GitHub / GitLab / Bitbucket) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Access control and authentication\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Access control and authentication\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — In-scope inventory for the access control and authentication control (from GitHub / GitLab / Bitbucket))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Access control and authentication\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Access control and authentication\" control must cover\n# fragment: access_control_authentication_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "access_control_authentication_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Access control and authentication\" sub-process of Repository Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the access control and authentication control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "repo-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Access control and authentication\" matter to the broader Repository Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "repo-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Access control and authentication\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the access control and authentication control (from GitHub / GitLab / Bitbucket) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "repo-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Access control and authentication\"?",
          "options": [
            "GitHub / GitLab / Bitbucket (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub / GitLab / Bitbucket) via read-only access."
        },
        {
          "id": "repo-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Access control and authentication\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering org owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "repo-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Access control and authentication\", which part stays with the human auditor?",
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
          "id": "repo-01-q7",
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
          "id": "repo-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Access control and authentication\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the access control and authentication control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the access control and authentication control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "repo-01-q9",
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
          "id": "repo-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Access control and authentication\" also serve privacy and regulatory goals?",
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
    "epochId": "repository-mgmt",
    "id": "repo-02",
    "order": 2,
    "title": "Branch management and protection",
    "subtitle": "Agentic technical & privacy audit of the branch management and protection control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Branch management and protection\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Branch management and protection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab / Bitbucket; Branch protection + CODEOWNERS; SCM audit log) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the branch management and protection control (from GitHub / GitLab / Bitbucket)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket",
        "Branch protection + CODEOWNERS",
        "SCM audit log",
        "Secret scanning service"
      ],
      "dataOwner": [
        "Engineering org owners",
        "Repo / org admins",
        "AppSec",
        "Developer platform team"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-02-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Branch management and protection",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Branch management and protection\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the branch management and protection control (from GitHub / GitLab / Bitbucket)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Branch management and protection\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the branch management and protection control (from GitHub / GitLab / Bitbucket), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Branch management and protection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_branch_management_and_protection_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket and Branch protection + CODEOWNERS (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_branch_management_and_protection_mcp.py` to expose it to your agent — or `python 02_branch_management_and_protection_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket · Branch protection + CODEOWNERS",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Branch management and protection\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the branch management and protection control (from GitHub / GitLab / Bitbucket).",
        "The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Branch management and protection\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the branch management and protection control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP SCM Security Best Practices",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "GitHub — securing your organization",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure"
        },
        {
          "title": "NIST SSDF (SP 800-218) — PO/PS",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_branch_management_and_protection_mcp.py",
          "url": "/audit-code/repository-mgmt/02_branch_management_and_protection_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Branch management and protection\" (in-scope inventory for the branch management and protection control (from github / gitlab / bitbucket)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Branch management and protection\" control for Repository Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Branch management and protection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the branch management and protection control (from GitHub / GitLab / Bitbucket) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Branch management and protection\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Branch management and protection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — In-scope inventory for the branch management and protection control (from GitHub / GitLab / Bitbucket))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Branch management and protection\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Branch management and protection\" control must cover\n# fragment: branch_management_protection_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "branch_management_protection_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Branch management and protection\" sub-process of Repository Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the branch management and protection control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "repo-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Branch management and protection\" matter to the broader Repository Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "repo-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Branch management and protection\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the branch management and protection control (from GitHub / GitLab / Bitbucket) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "repo-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Branch management and protection\"?",
          "options": [
            "GitHub / GitLab / Bitbucket (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub / GitLab / Bitbucket) via read-only access."
        },
        {
          "id": "repo-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Branch management and protection\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering org owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "repo-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Branch management and protection\", which part stays with the human auditor?",
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
          "id": "repo-02-q7",
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
          "id": "repo-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Branch management and protection\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the branch management and protection control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the branch management and protection control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "repo-02-q9",
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
          "id": "repo-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Branch management and protection\" also serve privacy and regulatory goals?",
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
    "epochId": "repository-mgmt",
    "id": "repo-03",
    "order": 3,
    "title": "Commit integrity and code review",
    "subtitle": "Agentic technical & privacy audit of the commit integrity and code review control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Commit integrity and code review\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Commit integrity and code review\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab / Bitbucket; Branch protection + CODEOWNERS; SCM audit log) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the commit integrity and code review control (from GitHub / GitLab / Bitbucket)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket",
        "Branch protection + CODEOWNERS",
        "SCM audit log",
        "Secret scanning service"
      ],
      "dataOwner": [
        "Engineering org owners",
        "Repo / org admins",
        "AppSec",
        "Developer platform team"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-03-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Commit integrity and code review",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Commit integrity and code review\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the commit integrity and code review control (from GitHub / GitLab / Bitbucket)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Commit integrity and code review\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the commit integrity and code review control (from GitHub / GitLab / Bitbucket), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Commit integrity and code review\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_commit_integrity_and_code_review_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket and Branch protection + CODEOWNERS (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_commit_integrity_and_code_review_mcp.py` to expose it to your agent — or `python 03_commit_integrity_and_code_review_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket · Branch protection + CODEOWNERS",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Commit integrity and code review\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the commit integrity and code review control (from GitHub / GitLab / Bitbucket).",
        "The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Commit integrity and code review\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the commit integrity and code review control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP SCM Security Best Practices",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "GitHub — securing your organization",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure"
        },
        {
          "title": "NIST SSDF (SP 800-218) — PO/PS",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_commit_integrity_and_code_review_mcp.py",
          "url": "/audit-code/repository-mgmt/03_commit_integrity_and_code_review_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Commit integrity and code review\" (in-scope inventory for the commit integrity and code review control (from github / gitlab / bitbucket)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Commit integrity and code review\" control for Repository Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Commit integrity and code review\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the commit integrity and code review control (from GitHub / GitLab / Bitbucket) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Commit integrity and code review\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Commit integrity and code review\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — In-scope inventory for the commit integrity and code review control (from GitHub / GitLab / Bitbucket))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Commit integrity and code review\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Commit integrity and code review\" control must cover\n# fragment: commit_integrity_code_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "commit_integrity_code_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Commit integrity and code review\" sub-process of Repository Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the commit integrity and code review control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "repo-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Commit integrity and code review\" matter to the broader Repository Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "repo-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Commit integrity and code review\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the commit integrity and code review control (from GitHub / GitLab / Bitbucket) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "repo-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Commit integrity and code review\"?",
          "options": [
            "GitHub / GitLab / Bitbucket (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub / GitLab / Bitbucket) via read-only access."
        },
        {
          "id": "repo-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Commit integrity and code review\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering org owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "repo-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Commit integrity and code review\", which part stays with the human auditor?",
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
          "id": "repo-03-q7",
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
          "id": "repo-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Commit integrity and code review\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the commit integrity and code review control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the commit integrity and code review control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "repo-03-q9",
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
          "id": "repo-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Commit integrity and code review\" also serve privacy and regulatory goals?",
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
    "epochId": "repository-mgmt",
    "id": "repo-04",
    "order": 4,
    "title": "Secrets and credential management",
    "subtitle": "Agentic technical & privacy audit of the secrets and credential management control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secrets and credential management\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Secrets and credential management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab / Bitbucket; Branch protection + CODEOWNERS; SCM audit log) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the secrets and credential management control (from GitHub / GitLab / Bitbucket)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket",
        "Branch protection + CODEOWNERS",
        "SCM audit log",
        "Secret scanning service"
      ],
      "dataOwner": [
        "Engineering org owners",
        "Repo / org admins",
        "AppSec",
        "Developer platform team"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-04-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Secrets and credential management",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secrets and credential management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the secrets and credential management control (from GitHub / GitLab / Bitbucket)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Secrets and credential management\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the secrets and credential management control (from GitHub / GitLab / Bitbucket), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Secrets and credential management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_secrets_and_credential_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket and Branch protection + CODEOWNERS (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_secrets_and_credential_management_mcp.py` to expose it to your agent — or `python 04_secrets_and_credential_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket · Branch protection + CODEOWNERS",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secrets and credential management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the secrets and credential management control (from GitHub / GitLab / Bitbucket).",
        "The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Secrets and credential management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the secrets and credential management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP SCM Security Best Practices",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "GitHub — securing your organization",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure"
        },
        {
          "title": "NIST SSDF (SP 800-218) — PO/PS",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_secrets_and_credential_management_mcp.py",
          "url": "/audit-code/repository-mgmt/04_secrets_and_credential_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Secrets and credential management\" (in-scope inventory for the secrets and credential management control (from github / gitlab / bitbucket)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secrets and credential management\" control for Repository Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Secrets and credential management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the secrets and credential management control (from GitHub / GitLab / Bitbucket) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Secrets and credential management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Secrets and credential management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — In-scope inventory for the secrets and credential management control (from GitHub / GitLab / Bitbucket))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secrets and credential management\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secrets and credential management\" control must cover\n# fragment: secrets_credential_management_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "secrets_credential_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secrets and credential management\" sub-process of Repository Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the secrets and credential management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "repo-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secrets and credential management\" matter to the broader Repository Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "repo-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secrets and credential management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the secrets and credential management control (from GitHub / GitLab / Bitbucket) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "repo-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Secrets and credential management\"?",
          "options": [
            "GitHub / GitLab / Bitbucket (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub / GitLab / Bitbucket) via read-only access."
        },
        {
          "id": "repo-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secrets and credential management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering org owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "repo-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secrets and credential management\", which part stays with the human auditor?",
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
          "id": "repo-04-q7",
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
          "id": "repo-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secrets and credential management\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the secrets and credential management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the secrets and credential management control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "repo-04-q9",
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
          "id": "repo-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secrets and credential management\" also serve privacy and regulatory goals?",
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
    "epochId": "repository-mgmt",
    "id": "repo-05",
    "order": 5,
    "title": "Repository configuration and hardening",
    "subtitle": "Agentic technical & privacy audit of the repository configuration and hardening control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Repository configuration and hardening\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Repository configuration and hardening\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab / Bitbucket; Branch protection + CODEOWNERS; SCM audit log) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the repository configuration and hardening control (from GitHub / GitLab / Bitbucket)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket",
        "Branch protection + CODEOWNERS",
        "SCM audit log",
        "Secret scanning service"
      ],
      "dataOwner": [
        "Engineering org owners",
        "Repo / org admins",
        "AppSec",
        "Developer platform team"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-05-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Repository configuration and hardening",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Repository configuration and hardening\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the repository configuration and hardening control (from GitHub / GitLab / Bitbucket)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Repository configuration and hardening\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the repository configuration and hardening control (from GitHub / GitLab / Bitbucket), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Repository configuration and hardening\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_repository_configuration_and_hardening_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket and Branch protection + CODEOWNERS (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_repository_configuration_and_hardening_mcp.py` to expose it to your agent — or `python 05_repository_configuration_and_hardening_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket · Branch protection + CODEOWNERS",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Repository configuration and hardening\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the repository configuration and hardening control (from GitHub / GitLab / Bitbucket).",
        "The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Repository configuration and hardening\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the repository configuration and hardening control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP SCM Security Best Practices",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "GitHub — securing your organization",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure"
        },
        {
          "title": "NIST SSDF (SP 800-218) — PO/PS",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_repository_configuration_and_hardening_mcp.py",
          "url": "/audit-code/repository-mgmt/05_repository_configuration_and_hardening_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Repository configuration and hardening\" (in-scope inventory for the repository configuration and hardening control (from github / gitlab / bitbucket)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Repository configuration and hardening\" control for Repository Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Repository configuration and hardening\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the repository configuration and hardening control (from GitHub / GitLab / Bitbucket) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Repository configuration and hardening\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Repository configuration and hardening\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — In-scope inventory for the repository configuration and hardening control (from GitHub / GitLab / Bitbucket))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Repository configuration and hardening\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Repository configuration and hardening\" control must cover\n# fragment: repository_configuration_hardening_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "repository_configuration_hardening_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Repository configuration and hardening\" sub-process of Repository Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the repository configuration and hardening control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "repo-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Repository configuration and hardening\" matter to the broader Repository Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "repo-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Repository configuration and hardening\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the repository configuration and hardening control (from GitHub / GitLab / Bitbucket) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "repo-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Repository configuration and hardening\"?",
          "options": [
            "GitHub / GitLab / Bitbucket (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub / GitLab / Bitbucket) via read-only access."
        },
        {
          "id": "repo-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Repository configuration and hardening\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering org owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "repo-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Repository configuration and hardening\", which part stays with the human auditor?",
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
          "id": "repo-05-q7",
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
          "id": "repo-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Repository configuration and hardening\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the repository configuration and hardening control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the repository configuration and hardening control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "repo-05-q9",
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
          "id": "repo-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Repository configuration and hardening\" also serve privacy and regulatory goals?",
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
    "epochId": "repository-mgmt",
    "id": "repo-06",
    "order": 6,
    "title": "Dependency and package management",
    "subtitle": "Agentic technical & privacy audit of the dependency and package management control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Dependency and package management\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Dependency and package management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab / Bitbucket; Branch protection + CODEOWNERS; SCM audit log) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the dependency and package management control (from GitHub / GitLab / Bitbucket)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket",
        "Branch protection + CODEOWNERS",
        "SCM audit log",
        "Secret scanning service"
      ],
      "dataOwner": [
        "Engineering org owners",
        "Repo / org admins",
        "AppSec",
        "Developer platform team"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-06-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Dependency and package management",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Dependency and package management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the dependency and package management control (from GitHub / GitLab / Bitbucket)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Dependency and package management\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the dependency and package management control (from GitHub / GitLab / Bitbucket), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Dependency and package management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_dependency_and_package_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket and Branch protection + CODEOWNERS (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_dependency_and_package_management_mcp.py` to expose it to your agent — or `python 06_dependency_and_package_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket · Branch protection + CODEOWNERS",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Dependency and package management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the dependency and package management control (from GitHub / GitLab / Bitbucket).",
        "The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Dependency and package management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the dependency and package management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP SCM Security Best Practices",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "GitHub — securing your organization",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure"
        },
        {
          "title": "NIST SSDF (SP 800-218) — PO/PS",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_dependency_and_package_management_mcp.py",
          "url": "/audit-code/repository-mgmt/06_dependency_and_package_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Dependency and package management\" (in-scope inventory for the dependency and package management control (from github / gitlab / bitbucket)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Dependency and package management\" control for Repository Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Dependency and package management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the dependency and package management control (from GitHub / GitLab / Bitbucket) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Dependency and package management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Dependency and package management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — In-scope inventory for the dependency and package management control (from GitHub / GitLab / Bitbucket))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Dependency and package management\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Dependency and package management\" control must cover\n# fragment: dependency_package_management_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "dependency_package_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Dependency and package management\" sub-process of Repository Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the dependency and package management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "repo-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Dependency and package management\" matter to the broader Repository Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "repo-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Dependency and package management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the dependency and package management control (from GitHub / GitLab / Bitbucket) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "repo-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Dependency and package management\"?",
          "options": [
            "GitHub / GitLab / Bitbucket (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub / GitLab / Bitbucket) via read-only access."
        },
        {
          "id": "repo-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Dependency and package management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering org owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "repo-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Dependency and package management\", which part stays with the human auditor?",
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
          "id": "repo-06-q7",
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
          "id": "repo-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Dependency and package management\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the dependency and package management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the dependency and package management control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "repo-06-q9",
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
          "id": "repo-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Dependency and package management\" also serve privacy and regulatory goals?",
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
    "epochId": "repository-mgmt",
    "id": "repo-07",
    "order": 7,
    "title": "Audit logging and monitoring",
    "subtitle": "Agentic technical & privacy audit of the audit logging and monitoring control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Audit logging and monitoring\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Audit logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab / Bitbucket; Branch protection + CODEOWNERS; SCM audit log) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the audit logging and monitoring control (from GitHub / GitLab / Bitbucket)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket",
        "Branch protection + CODEOWNERS",
        "SCM audit log",
        "Secret scanning service"
      ],
      "dataOwner": [
        "Engineering org owners",
        "Repo / org admins",
        "AppSec",
        "Developer platform team"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-07-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Audit logging and monitoring",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Audit logging and monitoring\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the audit logging and monitoring control (from GitHub / GitLab / Bitbucket)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Audit logging and monitoring\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the audit logging and monitoring control (from GitHub / GitLab / Bitbucket), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Audit logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_audit_logging_and_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket and Branch protection + CODEOWNERS (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_audit_logging_and_monitoring_mcp.py` to expose it to your agent — or `python 07_audit_logging_and_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket · Branch protection + CODEOWNERS",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Audit logging and monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the audit logging and monitoring control (from GitHub / GitLab / Bitbucket).",
        "The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Audit logging and monitoring\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the audit logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP SCM Security Best Practices",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "GitHub — securing your organization",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure"
        },
        {
          "title": "NIST SSDF (SP 800-218) — PO/PS",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_audit_logging_and_monitoring_mcp.py",
          "url": "/audit-code/repository-mgmt/07_audit_logging_and_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Audit logging and monitoring\" (in-scope inventory for the audit logging and monitoring control (from github / gitlab / bitbucket)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Audit logging and monitoring\" control for Repository Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Audit logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the audit logging and monitoring control (from GitHub / GitLab / Bitbucket) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Audit logging and monitoring\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Audit logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — In-scope inventory for the audit logging and monitoring control (from GitHub / GitLab / Bitbucket))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Audit logging and monitoring\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Audit logging and monitoring\" control must cover\n# fragment: audit_logging_monitoring_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "audit_logging_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Audit logging and monitoring\" sub-process of Repository Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the audit logging and monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "repo-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Audit logging and monitoring\" matter to the broader Repository Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "repo-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Audit logging and monitoring\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the audit logging and monitoring control (from GitHub / GitLab / Bitbucket) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "repo-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Audit logging and monitoring\"?",
          "options": [
            "GitHub / GitLab / Bitbucket (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub / GitLab / Bitbucket) via read-only access."
        },
        {
          "id": "repo-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Audit logging and monitoring\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering org owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "repo-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Audit logging and monitoring\", which part stays with the human auditor?",
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
          "id": "repo-07-q7",
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
          "id": "repo-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Audit logging and monitoring\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the audit logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the audit logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "repo-07-q9",
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
          "id": "repo-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Audit logging and monitoring\" also serve privacy and regulatory goals?",
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
    "epochId": "repository-mgmt",
    "id": "repo-08",
    "order": 8,
    "title": "Repository governance and lifecycle",
    "subtitle": "Agentic technical & privacy audit of the repository governance and lifecycle control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Repository governance and lifecycle\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Repository governance and lifecycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab / Bitbucket; Branch protection + CODEOWNERS; SCM audit log) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the repository governance and lifecycle control (from GitHub / GitLab / Bitbucket)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket",
        "Branch protection + CODEOWNERS",
        "SCM audit log",
        "Secret scanning service"
      ],
      "dataOwner": [
        "Engineering org owners",
        "Repo / org admins",
        "AppSec",
        "Developer platform team"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-08-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Repository governance and lifecycle",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Repository governance and lifecycle\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the repository governance and lifecycle control (from GitHub / GitLab / Bitbucket)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Repository governance and lifecycle\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the repository governance and lifecycle control (from GitHub / GitLab / Bitbucket), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Repository governance and lifecycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_repository_governance_and_lifecycle_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket and Branch protection + CODEOWNERS (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_repository_governance_and_lifecycle_mcp.py` to expose it to your agent — or `python 08_repository_governance_and_lifecycle_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket · Branch protection + CODEOWNERS",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Repository governance and lifecycle\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the repository governance and lifecycle control (from GitHub / GitLab / Bitbucket).",
        "The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Repository governance and lifecycle\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the repository governance and lifecycle control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP SCM Security Best Practices",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "GitHub — securing your organization",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure"
        },
        {
          "title": "NIST SSDF (SP 800-218) — PO/PS",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_repository_governance_and_lifecycle_mcp.py",
          "url": "/audit-code/repository-mgmt/08_repository_governance_and_lifecycle_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Repository governance and lifecycle\" (in-scope inventory for the repository governance and lifecycle control (from github / gitlab / bitbucket)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Repository governance and lifecycle\" control for Repository Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Repository governance and lifecycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the repository governance and lifecycle control (from GitHub / GitLab / Bitbucket) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Repository governance and lifecycle\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Repository governance and lifecycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — In-scope inventory for the repository governance and lifecycle control (from GitHub / GitLab / Bitbucket))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Repository governance and lifecycle\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Repository governance and lifecycle\" control must cover\n# fragment: repository_governance_lifecycle_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "repository_governance_lifecycle_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Repository governance and lifecycle\" sub-process of Repository Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the repository governance and lifecycle control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "repo-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Repository governance and lifecycle\" matter to the broader Repository Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "repo-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Repository governance and lifecycle\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the repository governance and lifecycle control (from GitHub / GitLab / Bitbucket) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "repo-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Repository governance and lifecycle\"?",
          "options": [
            "GitHub / GitLab / Bitbucket (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub / GitLab / Bitbucket) via read-only access."
        },
        {
          "id": "repo-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Repository governance and lifecycle\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering org owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "repo-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Repository governance and lifecycle\", which part stays with the human auditor?",
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
          "id": "repo-08-q7",
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
          "id": "repo-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Repository governance and lifecycle\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the repository governance and lifecycle control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the repository governance and lifecycle control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "repo-08-q9",
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
          "id": "repo-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Repository governance and lifecycle\" also serve privacy and regulatory goals?",
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
    "epochId": "repository-mgmt",
    "id": "repo-09",
    "order": 9,
    "title": "Backup and recovery",
    "subtitle": "Agentic technical & privacy audit of the backup and recovery control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Backup and recovery\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Backup and recovery\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab / Bitbucket; Branch protection + CODEOWNERS; SCM audit log) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the backup and recovery control (from GitHub / GitLab / Bitbucket)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket",
        "Branch protection + CODEOWNERS",
        "SCM audit log",
        "Secret scanning service"
      ],
      "dataOwner": [
        "Engineering org owners",
        "Repo / org admins",
        "AppSec",
        "Developer platform team"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-09-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Backup and recovery",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Backup and recovery\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the backup and recovery control (from GitHub / GitLab / Bitbucket)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Backup and recovery\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the backup and recovery control (from GitHub / GitLab / Bitbucket), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Backup and recovery\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_backup_and_recovery_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket and Branch protection + CODEOWNERS (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_backup_and_recovery_mcp.py` to expose it to your agent — or `python 09_backup_and_recovery_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket · Branch protection + CODEOWNERS",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Backup and recovery\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the backup and recovery control (from GitHub / GitLab / Bitbucket).",
        "The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Backup and recovery\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the backup and recovery control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP SCM Security Best Practices",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "GitHub — securing your organization",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure"
        },
        {
          "title": "NIST SSDF (SP 800-218) — PO/PS",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_backup_and_recovery_mcp.py",
          "url": "/audit-code/repository-mgmt/09_backup_and_recovery_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Backup and recovery\" (in-scope inventory for the backup and recovery control (from github / gitlab / bitbucket)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Backup and recovery\" control for Repository Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Backup and recovery\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the backup and recovery control (from GitHub / GitLab / Bitbucket) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Backup and recovery\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Backup and recovery\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — In-scope inventory for the backup and recovery control (from GitHub / GitLab / Bitbucket))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Backup and recovery\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Backup and recovery\" control must cover\n# fragment: backup_recovery_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "backup_recovery_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Backup and recovery\" sub-process of Repository Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the backup and recovery control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "repo-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Backup and recovery\" matter to the broader Repository Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "repo-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Backup and recovery\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the backup and recovery control (from GitHub / GitLab / Bitbucket) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "repo-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Backup and recovery\"?",
          "options": [
            "GitHub / GitLab / Bitbucket (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub / GitLab / Bitbucket) via read-only access."
        },
        {
          "id": "repo-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Backup and recovery\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering org owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "repo-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Backup and recovery\", which part stays with the human auditor?",
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
          "id": "repo-09-q7",
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
          "id": "repo-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Backup and recovery\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the backup and recovery control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the backup and recovery control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "repo-09-q9",
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
          "id": "repo-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Backup and recovery\" also serve privacy and regulatory goals?",
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
    "epochId": "repository-mgmt",
    "id": "repo-10",
    "order": 10,
    "title": "Platform and infrastructure security",
    "subtitle": "Agentic technical & privacy audit of the platform and infrastructure security control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Platform and infrastructure security\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Platform and infrastructure security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab / Bitbucket; Branch protection + CODEOWNERS; SCM audit log) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the platform and infrastructure security control (from GitHub / GitLab / Bitbucket)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket",
        "Branch protection + CODEOWNERS",
        "SCM audit log",
        "Secret scanning service"
      ],
      "dataOwner": [
        "Engineering org owners",
        "Repo / org admins",
        "AppSec",
        "Developer platform team"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-10-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Platform and infrastructure security",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Platform and infrastructure security\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the platform and infrastructure security control (from GitHub / GitLab / Bitbucket)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Platform and infrastructure security\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the platform and infrastructure security control (from GitHub / GitLab / Bitbucket), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Platform and infrastructure security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_platform_and_infrastructure_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket and Branch protection + CODEOWNERS (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_platform_and_infrastructure_security_mcp.py` to expose it to your agent — or `python 10_platform_and_infrastructure_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket · Branch protection + CODEOWNERS",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Platform and infrastructure security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the platform and infrastructure security control (from GitHub / GitLab / Bitbucket).",
        "The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Platform and infrastructure security\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the platform and infrastructure security control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP SCM Security Best Practices",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "GitHub — securing your organization",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure"
        },
        {
          "title": "NIST SSDF (SP 800-218) — PO/PS",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_platform_and_infrastructure_security_mcp.py",
          "url": "/audit-code/repository-mgmt/10_platform_and_infrastructure_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Platform and infrastructure security\" (in-scope inventory for the platform and infrastructure security control (from github / gitlab / bitbucket)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Platform and infrastructure security\" control for Repository Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Platform and infrastructure security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the platform and infrastructure security control (from GitHub / GitLab / Bitbucket) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Platform and infrastructure security\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Platform and infrastructure security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — In-scope inventory for the platform and infrastructure security control (from GitHub / GitLab / Bitbucket))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Platform and infrastructure security\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Platform and infrastructure security\" control must cover\n# fragment: platform_infrastructure_security_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "platform_infrastructure_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Platform and infrastructure security\" sub-process of Repository Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the platform and infrastructure security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "repo-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Platform and infrastructure security\" matter to the broader Repository Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "repo-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Platform and infrastructure security\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the platform and infrastructure security control (from GitHub / GitLab / Bitbucket) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "repo-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Platform and infrastructure security\"?",
          "options": [
            "GitHub / GitLab / Bitbucket (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub / GitLab / Bitbucket) via read-only access."
        },
        {
          "id": "repo-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Platform and infrastructure security\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering org owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "repo-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Platform and infrastructure security\", which part stays with the human auditor?",
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
          "id": "repo-10-q7",
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
          "id": "repo-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Platform and infrastructure security\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the platform and infrastructure security control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the platform and infrastructure security control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "repo-10-q9",
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
          "id": "repo-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Platform and infrastructure security\" also serve privacy and regulatory goals?",
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
    "epochId": "repository-mgmt",
    "id": "repo-11",
    "order": 11,
    "title": "Third-party and open source contribution",
    "subtitle": "Agentic technical & privacy audit of the third-party and open source contribution control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Third-party and open source contribution\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Third-party and open source contribution\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab / Bitbucket; Branch protection + CODEOWNERS; SCM audit log) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the third-party and open source contribution control (from GitHub / GitLab / Bitbucket)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket",
        "Branch protection + CODEOWNERS",
        "SCM audit log",
        "Secret scanning service"
      ],
      "dataOwner": [
        "Engineering org owners",
        "Repo / org admins",
        "AppSec",
        "Developer platform team"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-11-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Third-party and open source contribution",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Third-party and open source contribution\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the third-party and open source contribution control (from GitHub / GitLab / Bitbucket)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Third-party and open source contribution\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the third-party and open source contribution control (from GitHub / GitLab / Bitbucket), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Third-party and open source contribution\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_third_party_and_open_source_contribution_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket and Branch protection + CODEOWNERS (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_third_party_and_open_source_contribution_mcp.py` to expose it to your agent — or `python 11_third_party_and_open_source_contribution_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket · Branch protection + CODEOWNERS",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Third-party and open source contribution\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the third-party and open source contribution control (from GitHub / GitLab / Bitbucket).",
        "The test: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Third-party and open source contribution\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket, Branch protection + CODEOWNERS, SCM audit log) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the third-party and open source contribution control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP SCM Security Best Practices",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "GitHub — securing your organization",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure"
        },
        {
          "title": "NIST SSDF (SP 800-218) — PO/PS",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_third_party_and_open_source_contribution_mcp.py",
          "url": "/audit-code/repository-mgmt/11_third_party_and_open_source_contribution_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Third-party and open source contribution\" (in-scope inventory for the third-party and open source contribution control (from github / gitlab / bitbucket)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Third-party and open source contribution\" control for Repository Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Third-party and open source contribution\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the third-party and open source contribution control (from GitHub / GitLab / Bitbucket) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Third-party and open source contribution\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Repository Management policy/standard and flag every item where the \"Third-party and open source contribution\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — In-scope inventory for the third-party and open source contribution control (from GitHub / GitLab / Bitbucket))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Third-party and open source contribution\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Third-party and open source contribution\" control must cover\n# fragment: thirdparty_open_source_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "thirdparty_open_source_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Third-party and open source contribution\" sub-process of Repository Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the third-party and open source contribution control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "repo-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Third-party and open source contribution\" matter to the broader Repository Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "repo-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Third-party and open source contribution\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the third-party and open source contribution control (from GitHub / GitLab / Bitbucket) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "repo-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Third-party and open source contribution\"?",
          "options": [
            "GitHub / GitLab / Bitbucket (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub / GitLab / Bitbucket) via read-only access."
        },
        {
          "id": "repo-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Third-party and open source contribution\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering org owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "repo-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Third-party and open source contribution\", which part stays with the human auditor?",
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
          "id": "repo-11-q7",
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
          "id": "repo-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Third-party and open source contribution\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the third-party and open source contribution control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the third-party and open source contribution control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "repo-11-q9",
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
          "id": "repo-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Third-party and open source contribution\" also serve privacy and regulatory goals?",
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
