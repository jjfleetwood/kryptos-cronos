import type { EpochConfig, StageConfig } from "../types";

export const iacEpoch: EpochConfig = {
  "id": "iac",
  "name": "Infrastructure as Code (IaC)",
  "subtitle": "Agentic technical & privacy audit — Infrastructure as Code (IaC)",
  "description": "Audit Infrastructure as Code (IaC) end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "📜",
  "color": "Cyan",
  "unlocked": true
};

export const iacStages: StageConfig[] = [
  {
    "epochId": "iac",
    "id": "iac-01",
    "order": 1,
    "title": "Change management and peer review",
    "subtitle": "Agentic technical & privacy audit of the change management and peer review control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Change management and peer review\" control for Infrastructure as Code (IaC) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Trace every infrastructure change in the period from running state back to a reviewed, approved pull request. PASS: each `terraform apply` / CloudFormation stack update maps to a merged PR that had at least one independent CODEOWNER approval before merge; the plan in the PR matches what was applied; direct console/CLI changes are blocked or exception-tracked; and the author can't self-approve their own prod change. Exceptions: applies with no corresponding PR ('clickops' or laptop applies), PRs self-approved or merged with no review, and a divergence between the reviewed plan and what actually ran.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Infrastructure as Code (IaC) systems of record (GitHub / GitLab / Bitbucket (the IaC repos + branch protection + CODEOWNERS); Terraform Cloud / HCP Terraform or Atlantis (run + apply log); AWS CloudTrail / Azure Activity Log (to catch out-of-band changes)) as tools — e.g. `(required reviews, CODEOWNERS, no self-review)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The pull-request history for the IaC repos — every infrastructure change as a PR with its reviewers and approval timestamps",
        "The branch-protection + CODEOWNERS export for the IaC repos (who must approve a change to prod modules/environments)",
        "The merge-vs-deploy log: which merged PR produced which `terraform apply` / stack update, and who triggered it",
        "The exception list of changes applied out-of-band (console clicks / `terraform apply` from a laptop, bypassing the PR flow)"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket (the IaC repos + branch protection + CODEOWNERS)",
        "Terraform Cloud / HCP Terraform or Atlantis (run + apply log)",
        "AWS CloudTrail / Azure Activity Log (to catch out-of-band changes)"
      ],
      "dataOwner": [
        "Platform / Cloud engineering — authors and merges IaC",
        "SRE / module owners — the CODEOWNER approvers",
        "Security engineering — reviews the SoD on prod environments"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Infrastructure as Code (IaC) controls."
      }
    },
    "badge": {
      "id": "iac-01-badge",
      "name": "Infrastructure as Code (IaC) Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Change management and peer review",
      "location": "Infrastructure as Code (IaC)",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Change management and peer review\" as a repeatable agentic workflow: pull the real evidence (The pull-request history for the IaC repos — every infrastructure change as a PR with its reviewers and approval timestamps) with read-only agents, run the test against policy, and issue a defensible opinion on the Infrastructure as Code (IaC) control.",
      "year": 2025,
      "overview": [
        "The \"Change management and peer review\" sub-process is one of the controls an auditor must verify for Infrastructure as Code (IaC). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the pull-request history for the IaC repos — every infrastructure change as a PR with its reviewers and approval timestamps, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket (the IaC repos + branch protection + CODEOWNERS), Terraform Cloud / HCP Terraform or Atlantis (run + apply log), AWS CloudTrail / Azure Activity Log (to catch out-of-band changes) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `(required reviews, CODEOWNERS, no self-review)` — read-only, against the systems of record.",
        "The test itself is specific. Trace every infrastructure change in the period from running state back to a reviewed, approved pull request. PASS: each `terraform apply` / CloudFormation stack update maps to a merged PR that had at least one independent CODEOWNER approval before merge; the plan in the PR matches what was applied; direct console/CLI changes are blocked or exception-tracked; and the author can't self-approve their own prod change. Exceptions: applies with no corresponding PR ('clickops' or laptop applies), PRs self-approved or merged with no review, and a divergence between the reviewed plan and what actually ran. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_change_management_and_peer_review_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket (the IaC repos + branch protection + CODEOWNERS) and Terraform Cloud / HCP Terraform or Atlantis (run + apply log) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_change_management_and_peer_review_mcp.py` to expose it to your agent — or `python 01_change_management_and_peer_review_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Infrastructure as Code (IaC) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket (the IaC repos + branch protection + CODEOWNERS) · Terraform Cloud / HCP Terraform or Atlantis (run + apply log)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Change management and peer review\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "GitHub: gh api repos/{org}/{repo}/branches/main/protection  (required reviews, CODEOWNERS, no self-review)\nHCP Terraform: GET /api/v2/workspaces/{id}/runs  → each apply, its source PR (commit SHA) and the user who confirmed it\nAtlantis: the PR-comment apply trail (plan → approve → apply) per repo\nAWS:  CloudTrail lookup for ConsoleLogin + non-Terraform-principal mutating events on managed resources (out-of-band changes)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The pull-request history for the IaC repos — every infrastructure change as a PR with its reviewers and approval timestamps.",
        "The test: Trace every infrastructure change in the period from running state back to a reviewed, approved pull request.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket (the IaC repos + branch protection + CODEOWNERS), Terraform Cloud / HCP Terraform or Atlantis (run + apply log), AWS CloudTrail / Azure Activity Log (to catch out-of-band changes)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A cluster of production security-group and IAM changes applied directly from an engineer's laptop with no PR, plus two PRs the author self-approved and merged — infrastructure changed prod with no independent review."
      ],
      "references": [
        {
          "title": "NIST SSDF SP 800-218 (PO/PS — reviewed change)",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "HashiCorp — Terraform run/apply controls",
          "url": "https://developer.hashicorp.com/terraform/cloud-docs/run/remote-operations"
        },
        {
          "title": "NIST SP 800-53 CM-3 Configuration Change Control",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_change_management_and_peer_review_mcp.py",
          "url": "/audit-code/iac/01_change_management_and_peer_review_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Infrastructure as Code (IaC) evidence for \"Change management and peer review\" (the pull-request history for the iac repos — every infrastructure change as a pr with its reviewers and approval timestamps), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Change management and peer review\" control for Infrastructure as Code (IaC) at AcmeCorp. THE TEST: Trace every infrastructure change in the period from running state back to a reviewed, approved pull request. PASS: each `terraform apply` / CloudFormation stack update maps to a merged PR that had at least one independent CODEOWNER approval before merge; the plan in the PR matches what was applied; direct console/CLI changes are blocked or exception-tracked; and the author can't self-approve their own prod change. Exceptions: applies with no corresponding PR ('clickops' or laptop applies), PRs self-approved or merged with no review, and a divergence between the reviewed plan and what actually ran. The evidence — The pull-request history for the IaC repos — every infrastructure change as a PR with its reviewers and approval timestamps — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket (the IaC repos + branch protection + CODEOWNERS) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket (the IaC repos + branch protection + CODEOWNERS) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket (the IaC repos + branch protection + CODEOWNERS); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Infrastructure as Code (IaC): \"Change management and peer review\" Audit Evidence\n\nThe test:\nTrace every infrastructure change in the period from running state back to a reviewed, approved pull request. PASS: each `terraform apply` / CloudFormation stack update maps to a merged PR that had at least one independent CODEOWNER approval before merge; the plan in the PR matches what was applied; direct console/CLI changes are blocked or exception-tracked; and the author can't self-approve their own prod change. Exceptions: applies with no corresponding PR ('clickops' or laptop applies), PRs self-approved or merged with no review, and a divergence between the reviewed plan and what actually ran.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items — The pull-request history for the IaC repos — every infrastructure change as a PR with its reviewers and approval timestamps)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Change management and peer review\",\n  \"domain\": \"Infrastructure as Code (IaC)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Change management and peer review\" control must cover\n# fragment: change_management_peer_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "change_management_peer_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Change management and peer review\" sub-process of Infrastructure as Code (IaC)?",
          "options": [
            "Deploy and operate the change management and peer review control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the change management and peer review control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for change management and peer review against comparable organisations in the sector",
            "Obtain evidence that the change management and peer review control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iac-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Change management and peer review\" matter to the broader Infrastructure as Code (IaC) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Infrastructure as Code (IaC)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Infrastructure as Code (IaC) estate",
            "It is a control other Infrastructure as Code (IaC) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Infrastructure as Code (IaC) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iac-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Change management and peer review\" control?",
          "options": [
            "A point-in-time screenshot of one system's change management and peer review settings, captured during the walkthrough",
            "The The pull-request history for the IaC repos — every infrastructure change as a PR with its reviewers and approval timestamps, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the change management and peer review control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's change management and peer review capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iac-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Change management and peer review\"?",
          "options": [
            "From GitHub / GitLab / Bitbucket (the IaC repos + branch protection + CODEOWNERS) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how change management and peer review works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GitHub / GitLab / Bitbucket (the IaC repos + branch protection + CODEOWNERS)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iac-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Change management and peer review\"?",
          "options": [
            "The external audit firm, since it is the party examining the change management and peer review control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the change management and peer review data is shared, so the accountability sits with no one in particular",
            "Platform / Cloud engineering — authors and merges IaC, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Platform / Cloud engineering — authors and merges IaC owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iac-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Change management and peer review\", which part stays with the human auditor?",
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
          "id": "iac-01-q7",
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
          "id": "iac-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Change management and peer review\", which of these is a realistic reportable finding?",
          "options": [
            "A cluster of production security-group and IAM changes applied directly from an engineer's laptop with no PR, plus two PRs the author self-approved and merged — infrastructure changed prod with no independent review.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A cluster of production security-group and IAM changes applied directly from an engineer's laptop with no PR, plus two PRs the author self-approved and merged — infrastructure changed prod with no independent review. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iac-01-q9",
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
          "id": "iac-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Change management and peer review\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind change management and peer review, so there is no overlap",
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
    "epochId": "iac",
    "id": "iac-02",
    "order": 2,
    "title": "Scanning and security testing",
    "subtitle": "Agentic technical & privacy audit of the scanning and security testing control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Scanning and security testing\" control for Infrastructure as Code (IaC) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Run the IaC security scanners across the in-scope IaC repos and compare to the pipeline gate. PASS: a misconfiguration scanner (Checkov/tfsec/Terrascan/KICS) runs on every IaC repo on each PR, fails the build on findings at/above the agreed severity, covers Terraform + CloudFormation + Kubernetes/Helm manifests, and every suppression has a documented, time-boxed justification. Exceptions: IaC repos with no scanner, the scan set to soft-fail/warn-only, scanners run only locally (not enforced in CI), and blanket `skip-check`/ignore rules hiding real HIGH/CRITICAL findings.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Infrastructure as Code (IaC) systems of record (Checkov / tfsec / Terrascan / KICS (the IaC SAST scanners); GitHub Actions / GitLab CI / Jenkins (the gate); DefectDojo / ASPM platform (findings aggregation)) as tools — e.g. `(and confirm CI uses `--soft-fail` is NOT set)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The IaC-scanner configuration in the pipeline (Checkov / tfsec / Terrascan / KICS) — which repos run it and the ruleset/severity threshold",
        "A current scan report (SARIF/JSON) across the IaC repos with each misconfiguration, its policy id, and severity",
        "Evidence the scan is a blocking gate, not advisory (the CI step's failure behaviour on a HIGH/CRITICAL finding)",
        "The suppression / baseline file (`.checkov.yaml` skips, `#tfsec:ignore`, `#checkov:skip`) with justifications"
      ],
      "system": [
        "Checkov / tfsec / Terrascan / KICS (the IaC SAST scanners)",
        "GitHub Actions / GitLab CI / Jenkins (the gate)",
        "DefectDojo / ASPM platform (findings aggregation)"
      ],
      "dataOwner": [
        "Security engineering / AppSec — owns the rulesets and gate",
        "Platform engineering — wires the scan into CI",
        "Module owners — remediate findings"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Infrastructure as Code (IaC) controls."
      }
    },
    "badge": {
      "id": "iac-02-badge",
      "name": "Infrastructure as Code (IaC) Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Scanning and security testing",
      "location": "Infrastructure as Code (IaC)",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Scanning and security testing\" as a repeatable agentic workflow: pull the real evidence (The IaC-scanner configuration in the pipeline (Checkov / tfsec / Terrascan / KICS) — which repos run it and the ruleset/severity threshold) with read-only agents, run the test against policy, and issue a defensible opinion on the Infrastructure as Code (IaC) control.",
      "year": 2025,
      "overview": [
        "The \"Scanning and security testing\" sub-process is one of the controls an auditor must verify for Infrastructure as Code (IaC). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the IaC-scanner configuration in the pipeline (Checkov / tfsec / Terrascan / KICS) — which repos run it and the ruleset/severity threshold, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Checkov / tfsec / Terrascan / KICS (the IaC SAST scanners), GitHub Actions / GitLab CI / Jenkins (the gate), DefectDojo / ASPM platform (findings aggregation) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `(and confirm CI uses `--soft-fail` is NOT set)` — read-only, against the systems of record.",
        "The test itself is specific. Run the IaC security scanners across the in-scope IaC repos and compare to the pipeline gate. PASS: a misconfiguration scanner (Checkov/tfsec/Terrascan/KICS) runs on every IaC repo on each PR, fails the build on findings at/above the agreed severity, covers Terraform + CloudFormation + Kubernetes/Helm manifests, and every suppression has a documented, time-boxed justification. Exceptions: IaC repos with no scanner, the scan set to soft-fail/warn-only, scanners run only locally (not enforced in CI), and blanket `skip-check`/ignore rules hiding real HIGH/CRITICAL findings. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_scanning_and_security_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Checkov / tfsec / Terrascan / KICS (the IaC SAST scanners) and GitHub Actions / GitLab CI / Jenkins (the gate) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_scanning_and_security_testing_mcp.py` to expose it to your agent — or `python 02_scanning_and_security_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Infrastructure as Code (IaC) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Checkov / tfsec / Terrascan / KICS (the IaC SAST scanners) · GitHub Actions / GitLab CI / Jenkins (the gate)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Scanning and security testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "checkov -d . --compact --output sarif   (and confirm CI uses `--soft-fail` is NOT set)\ntfsec . --minimum-severity HIGH --format sarif\nterrascan scan -i terraform -t aws   /   kics scan -p . --report-formats sarif\ngrep the repos for suppression markers: `#checkov:skip`, `#tfsec:ignore`, `.checkov.yaml` skip lists — and check each has a reason"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The IaC-scanner configuration in the pipeline (Checkov / tfsec / Terrascan / KICS) — which repos run it and the ruleset/severity threshold.",
        "The test: Run the IaC security scanners across the in-scope IaC repos and compare to the pipeline gate.",
        "Reconcile the systems of record (Checkov / tfsec / Terrascan / KICS (the IaC SAST scanners), GitHub Actions / GitLab CI / Jenkins (the gate), DefectDojo / ASPM platform (findings aggregation)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Checkov runs with `soft_fail: true` so it never blocks a merge; a current scan surfaces ~40 HIGH findings (unencrypted EBS, public S3, 0.0.0.0/0 ingress on 22/3389) that have been shipping for months, and a repo-wide skip silently disables the encryption rules."
      ],
      "references": [
        {
          "title": "OWASP DevSecOps Guideline — IaC scanning",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "Checkov documentation",
          "url": "https://www.checkov.io/"
        },
        {
          "title": "NIST SP 800-204D — pipeline security testing",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_scanning_and_security_testing_mcp.py",
          "url": "/audit-code/iac/02_scanning_and_security_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Infrastructure as Code (IaC) evidence for \"Scanning and security testing\" (the iac-scanner configuration in the pipeline (checkov / tfsec / terrascan / kics) — which repos run it and the ruleset/severity threshold), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Scanning and security testing\" control for Infrastructure as Code (IaC) at AcmeCorp. THE TEST: Run the IaC security scanners across the in-scope IaC repos and compare to the pipeline gate. PASS: a misconfiguration scanner (Checkov/tfsec/Terrascan/KICS) runs on every IaC repo on each PR, fails the build on findings at/above the agreed severity, covers Terraform + CloudFormation + Kubernetes/Helm manifests, and every suppression has a documented, time-boxed justification. Exceptions: IaC repos with no scanner, the scan set to soft-fail/warn-only, scanners run only locally (not enforced in CI), and blanket `skip-check`/ignore rules hiding real HIGH/CRITICAL findings. The evidence — The IaC-scanner configuration in the pipeline (Checkov / tfsec / Terrascan / KICS) — which repos run it and the ruleset/severity threshold — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Checkov / tfsec / Terrascan / KICS (the IaC SAST scanners) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Checkov / tfsec / Terrascan / KICS (the IaC SAST scanners) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Checkov / tfsec / Terrascan / KICS (the IaC SAST scanners); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Infrastructure as Code (IaC): \"Scanning and security testing\" Audit Evidence\n\nThe test:\nRun the IaC security scanners across the in-scope IaC repos and compare to the pipeline gate. PASS: a misconfiguration scanner (Checkov/tfsec/Terrascan/KICS) runs on every IaC repo on each PR, fails the build on findings at/above the agreed severity, covers Terraform + CloudFormation + Kubernetes/Helm manifests, and every suppression has a documented, time-boxed justification. Exceptions: IaC repos with no scanner, the scan set to soft-fail/warn-only, scanners run only locally (not enforced in CI), and blanket `skip-check`/ignore rules hiding real HIGH/CRITICAL findings.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items — The IaC-scanner configuration in the pipeline (Checkov / tfsec / Terrascan / KICS) — which repos run it and the ruleset/severity threshold)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Scanning and security testing\",\n  \"domain\": \"Infrastructure as Code (IaC)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Scanning and security testing\" control must cover\n# fragment: scanning_security_testing_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "scanning_security_testing_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Scanning and security testing\" sub-process of Infrastructure as Code (IaC)?",
          "options": [
            "Deploy and operate the scanning and security testing control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the scanning and security testing control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for scanning and security testing against comparable organisations in the sector",
            "Obtain evidence that the scanning and security testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iac-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Scanning and security testing\" matter to the broader Infrastructure as Code (IaC) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Infrastructure as Code (IaC)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Infrastructure as Code (IaC) estate",
            "It is a control other Infrastructure as Code (IaC) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Infrastructure as Code (IaC) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iac-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Scanning and security testing\" control?",
          "options": [
            "A point-in-time screenshot of one system's scanning and security testing settings, captured during the walkthrough",
            "The The IaC-scanner configuration in the pipeline (Checkov / tfsec / Terrascan / KICS) — which repos run it and the ruleset/severity threshold, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the scanning and security testing control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's scanning and security testing capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iac-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Scanning and security testing\"?",
          "options": [
            "From Checkov / tfsec / Terrascan / KICS (the IaC SAST scanners) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how scanning and security testing works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Checkov / tfsec / Terrascan / KICS (the IaC SAST scanners)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iac-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Scanning and security testing\"?",
          "options": [
            "The external audit firm, since it is the party examining the scanning and security testing control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the scanning and security testing data is shared, so the accountability sits with no one in particular",
            "Security engineering / AppSec — owns the rulesets and gate, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security engineering / AppSec — owns the rulesets and gate owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iac-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Scanning and security testing\", which part stays with the human auditor?",
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
          "id": "iac-02-q7",
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
          "id": "iac-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Scanning and security testing\", which of these is a realistic reportable finding?",
          "options": [
            "Checkov runs with `soft_fail: true` so it never blocks a merge; a current scan surfaces ~40 HIGH findings (unencrypted EBS, public S3, 0.0.0.0/0 ingress on 22/3389) that have been shipping for months, and a repo-wide skip silently disables the encryption rules.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Checkov runs with `soft_fail: true` so it never blocks a merge; a current scan surfaces ~40 HIGH findings (unencrypted EBS, public S3, 0.0.0.0/0 ingress on 22/3389) that have been shipping for months, and a repo-wide skip silently disables the encryption rules. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iac-02-q9",
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
          "id": "iac-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Scanning and security testing\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind scanning and security testing, so there is no overlap",
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
    "epochId": "iac",
    "id": "iac-03",
    "order": 3,
    "title": "Cloud resource misconfig via IaC",
    "subtitle": "Agentic technical & privacy audit of the cloud resource misconfig via iac control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cloud resource misconfig via IaC\" control for Infrastructure as Code (IaC) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Inspect the IaC for the specific cloud misconfigurations that create exposure, and confirm runtime posture agrees. PASS: storage is private + encrypted (no public S3/blob ACLs, KMS/CMK encryption on at rest), security groups/NSGs don't allow 0.0.0.0/0 to admin ports (22/3389/databases), IAM in code is least-privilege (no `\"Action\": \"*\"` / `\"Resource\": \"*\"`), and logging (flow logs, CloudTrail, bucket access logs) is enabled in the template — and the CSPM shows zero of these in runtime. Exceptions: any IaC resource defaulting a bucket public, an `0.0.0.0/0` ingress on a sensitive port, a wildcard IAM policy, or encryption/logging disabled — each named by resource address and file.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Infrastructure as Code (IaC) systems of record (Terraform / CloudFormation / Bicep / Pulumi (the templates); AWS Security Hub / Wiz / Prisma Cloud / Microsoft Defender for Cloud (runtime CSPM); Cloud provider config (S3 Block Public Access, EBS default encryption)) as tools — e.g. `→ jq the planned_values for public ACLs, 0.0.0.0/0, wildcard IAM`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The `terraform plan` JSON (`terraform show -json plan.out`) for in-scope changes — the resources and attributes about to be created",
        "A CSPM/posture export (Wiz / Prisma Cloud / AWS Security Hub / Defender for Cloud) of the resources these IaC repos manage",
        "The mapping of high-risk resource types to their secure-config requirements (public access, encryption, logging, network exposure)",
        "The set of resources flagged public/unencrypted/over-exposed in runtime that trace back to an IaC definition"
      ],
      "system": [
        "Terraform / CloudFormation / Bicep / Pulumi (the templates)",
        "AWS Security Hub / Wiz / Prisma Cloud / Microsoft Defender for Cloud (runtime CSPM)",
        "Cloud provider config (S3 Block Public Access, EBS default encryption)"
      ],
      "dataOwner": [
        "Cloud / Platform engineering — owns the resource definitions",
        "Cloud security — owns the CSPM and the secure-config baseline",
        "FinOps / app owners — own specific resources"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Infrastructure as Code (IaC) controls."
      }
    },
    "badge": {
      "id": "iac-03-badge",
      "name": "Infrastructure as Code (IaC) Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Cloud resource misconfig via IaC",
      "location": "Infrastructure as Code (IaC)",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cloud resource misconfig via IaC\" as a repeatable agentic workflow: pull the real evidence (The `terraform plan` JSON (`terraform show -json plan.out`) for in-scope changes — the resources and attributes about to be created) with read-only agents, run the test against policy, and issue a defensible opinion on the Infrastructure as Code (IaC) control.",
      "year": 2025,
      "overview": [
        "The \"Cloud resource misconfig via IaC\" sub-process is one of the controls an auditor must verify for Infrastructure as Code (IaC). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the `terraform plan` JSON (`terraform show -json plan.out`) for in-scope changes — the resources and attributes about to be created, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Terraform / CloudFormation / Bicep / Pulumi (the templates), AWS Security Hub / Wiz / Prisma Cloud / Microsoft Defender for Cloud (runtime CSPM), Cloud provider config (S3 Block Public Access, EBS default encryption) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `→ jq the planned_values for public ACLs, 0.0.0.0/0, wildcard IAM` — read-only, against the systems of record.",
        "The test itself is specific. Inspect the IaC for the specific cloud misconfigurations that create exposure, and confirm runtime posture agrees. PASS: storage is private + encrypted (no public S3/blob ACLs, KMS/CMK encryption on at rest), security groups/NSGs don't allow 0.0.0.0/0 to admin ports (22/3389/databases), IAM in code is least-privilege (no `\"Action\": \"*\"` / `\"Resource\": \"*\"`), and logging (flow logs, CloudTrail, bucket access logs) is enabled in the template — and the CSPM shows zero of these in runtime. Exceptions: any IaC resource defaulting a bucket public, an `0.0.0.0/0` ingress on a sensitive port, a wildcard IAM policy, or encryption/logging disabled — each named by resource address and file. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_cloud_resource_misconfig_via_iac_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Terraform / CloudFormation / Bicep / Pulumi (the templates) and AWS Security Hub / Wiz / Prisma Cloud / Microsoft Defender for Cloud (runtime CSPM) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_cloud_resource_misconfig_via_iac_mcp.py` to expose it to your agent — or `python 03_cloud_resource_misconfig_via_iac_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Infrastructure as Code (IaC) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Terraform / CloudFormation / Bicep / Pulumi (the templates) · AWS Security Hub / Wiz / Prisma Cloud / Microsoft Defender for Cloud (runtime CSPM)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cloud resource misconfig via IaC\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "terraform plan -out plan.out && terraform show -json plan.out  → jq the planned_values for public ACLs, 0.0.0.0/0, wildcard IAM\ncheckov / tfsec policy ids CKV_AWS_18/20/23/24 (logging, public bucket, open SG) against the plan\nAWS: aws securityhub get-findings --filters '{\"GeneratorId\":[{\"Value\":\"aws-foundational-security-best-practices\"}]}'\nWiz/Prisma query: 'publicly exposed resources' and 'unencrypted data stores' joined back to the owning Terraform module"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The `terraform plan` JSON (`terraform show -json plan.out`) for in-scope changes — the resources and attributes about to be created.",
        "The test: Inspect the IaC for the specific cloud misconfigurations that create exposure, and confirm runtime posture agrees.",
        "Reconcile the systems of record (Terraform / CloudFormation / Bicep / Pulumi (the templates), AWS Security Hub / Wiz / Prisma Cloud / Microsoft Defender for Cloud (runtime CSPM), Cloud provider config (S3 Block Public Access, EBS default encryption)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A reusable storage module defaults the bucket policy to allow public read and omits the encryption block, so every one of the ~30 buckets instantiated from it is public and unencrypted — the single-template-many-resources multiplication of one mistake (the Capital One / public-bucket class)."
      ],
      "references": [
        {
          "title": "CIS AWS Foundations Benchmark",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "AWS Foundational Security Best Practices",
          "url": "https://docs.aws.amazon.com/securityhub/latest/userguide/fsbp-standard.html"
        },
        {
          "title": "OWASP Cloud-Native Security",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_cloud_resource_misconfig_via_iac_mcp.py",
          "url": "/audit-code/iac/03_cloud_resource_misconfig_via_iac_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Infrastructure as Code (IaC) evidence for \"Cloud resource misconfig via IaC\" (the `terraform plan` json (`terraform show -json plan.out`) for in-scope changes — the resources and attributes about to be created), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cloud resource misconfig via IaC\" control for Infrastructure as Code (IaC) at AcmeCorp. THE TEST: Inspect the IaC for the specific cloud misconfigurations that create exposure, and confirm runtime posture agrees. PASS: storage is private + encrypted (no public S3/blob ACLs, KMS/CMK encryption on at rest), security groups/NSGs don't allow 0.0.0.0/0 to admin ports (22/3389/databases), IAM in code is least-privilege (no `\"Action\": \"*\"` / `\"Resource\": \"*\"`), and logging (flow logs, CloudTrail, bucket access logs) is enabled in the template — and the CSPM shows zero of these in runtime. Exceptions: any IaC resource defaulting a bucket public, an `0.0.0.0/0` ingress on a sensitive port, a wildcard IAM policy, or encryption/logging disabled — each named by resource address and file. The evidence — The `terraform plan` JSON (`terraform show -json plan.out`) for in-scope changes — the resources and attributes about to be created — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Terraform / CloudFormation / Bicep / Pulumi (the templates) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Terraform / CloudFormation / Bicep / Pulumi (the templates) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Terraform / CloudFormation / Bicep / Pulumi (the templates); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Infrastructure as Code (IaC): \"Cloud resource misconfig via IaC\" Audit Evidence\n\nThe test:\nInspect the IaC for the specific cloud misconfigurations that create exposure, and confirm runtime posture agrees. PASS: storage is private + encrypted (no public S3/blob ACLs, KMS/CMK encryption on at rest), security groups/NSGs don't allow 0.0.0.0/0 to admin ports (22/3389/databases), IAM in code is least-privilege (no `\"Action\": \"*\"` / `\"Resource\": \"*\"`), and logging (flow logs, CloudTrail, bucket access logs) is enabled in the template — and the CSPM shows zero of these in runtime. Exceptions: any IaC resource defaulting a bucket public, an `0.0.0.0/0` ingress on a sensitive port, a wildcard IAM policy, or encryption/logging disabled — each named by resource address and file.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items — The `terraform plan` JSON (`terraform show -json plan.out`) for in-scope changes — the resources and attributes about to be created)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cloud resource misconfig via IaC\",\n  \"domain\": \"Infrastructure as Code (IaC)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cloud resource misconfig via IaC\" control must cover\n# fragment: cloud_resource_misconfig_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "cloud_resource_misconfig_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cloud resource misconfig via IaC\" sub-process of Infrastructure as Code (IaC)?",
          "options": [
            "Deploy and operate the cloud resource misconfig via iac control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the cloud resource misconfig via iac control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for cloud resource misconfig via iac against comparable organisations in the sector",
            "Obtain evidence that the cloud resource misconfig via iac control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iac-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cloud resource misconfig via IaC\" matter to the broader Infrastructure as Code (IaC) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Infrastructure as Code (IaC)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Infrastructure as Code (IaC) estate",
            "It is a control other Infrastructure as Code (IaC) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Infrastructure as Code (IaC) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iac-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cloud resource misconfig via IaC\" control?",
          "options": [
            "A point-in-time screenshot of one system's cloud resource misconfig via iac settings, captured during the walkthrough",
            "The The `terraform plan` JSON (`terraform show -json plan.out`) for in-scope changes — the resources and attributes about to be created, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the cloud resource misconfig via iac control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's cloud resource misconfig via iac capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iac-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Cloud resource misconfig via IaC\"?",
          "options": [
            "From Terraform / CloudFormation / Bicep / Pulumi (the templates) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how cloud resource misconfig via iac works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Terraform / CloudFormation / Bicep / Pulumi (the templates)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iac-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cloud resource misconfig via IaC\"?",
          "options": [
            "The external audit firm, since it is the party examining the cloud resource misconfig via iac control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the cloud resource misconfig via iac data is shared, so the accountability sits with no one in particular",
            "Cloud / Platform engineering — owns the resource definitions, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cloud / Platform engineering — owns the resource definitions owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iac-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cloud resource misconfig via IaC\", which part stays with the human auditor?",
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
          "id": "iac-03-q7",
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
          "id": "iac-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cloud resource misconfig via IaC\", which of these is a realistic reportable finding?",
          "options": [
            "A reusable storage module defaults the bucket policy to allow public read and omits the encryption block, so every one of the ~30 buckets instantiated from it is public and unencrypted — the single-template-many-resources multiplication of one mistake (the Capital One / public-bucket class).",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A reusable storage module defaults the bucket policy to allow public read and omits the encryption block, so every one of the ~30 buckets instantiated from it is public and unencrypted — the single-template-many-resources multiplication of one mistake (the Capital One / public-bucket class). A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iac-03-q9",
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
          "id": "iac-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cloud resource misconfig via IaC\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind cloud resource misconfig via iac, so there is no overlap",
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
    "epochId": "iac",
    "id": "iac-04",
    "order": 4,
    "title": "Policy/compliance as code",
    "subtitle": "Agentic technical & privacy audit of the policy/compliance as code control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Policy/compliance as code\" control for Infrastructure as Code (IaC) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify compliance is enforced as code in the plan/apply path, not just checked after the fact. PASS: a policy engine (OPA/Conftest, Sentinel, or CloudFormation Guard) evaluates every plan before apply; controls that must never be violated (no public data store, encryption required, mandatory tags, approved regions) are HARD-mandatory (block); enforcement levels are deliberate and documented; and the policy set demonstrably blocked a real non-compliant change. Exceptions: policy set in advisory mode only (logs but never blocks), critical controls missing from the codified policy, override/bypass available to the requester, and compliance frameworks with no corresponding policy.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Infrastructure as Code (IaC) systems of record (Open Policy Agent / Conftest (Rego); HashiCorp Sentinel / HCP Terraform policy sets; AWS CloudFormation Guard / AWS Config conformance packs) as tools — e.g. `(Rego policies against the terraform plan JSON)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The policy-as-code bundle (OPA/Rego, Sentinel, or Conftest policies) and which workspaces/stacks it's bound to",
        "The policy-set enforcement levels in HCP Terraform / cloud (advisory vs soft-mandatory vs hard-mandatory)",
        "A recent run where a non-compliant plan was actually blocked by policy (the proof it enforces, not just reports)",
        "The mapping of compliance requirements (CIS, PCI, internal standards) to the codified policy rules — and the gaps"
      ],
      "system": [
        "Open Policy Agent / Conftest (Rego)",
        "HashiCorp Sentinel / HCP Terraform policy sets",
        "AWS CloudFormation Guard / AWS Config conformance packs",
        "Pulumi CrossGuard"
      ],
      "dataOwner": [
        "Security engineering / Governance — authors policy-as-code",
        "Platform engineering — binds policies to workspaces",
        "Compliance / GRC — maps requirements to policy"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Infrastructure as Code (IaC) controls."
      }
    },
    "badge": {
      "id": "iac-04-badge",
      "name": "Infrastructure as Code (IaC) Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Policy/compliance as code",
      "location": "Infrastructure as Code (IaC)",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Policy/compliance as code\" as a repeatable agentic workflow: pull the real evidence (The policy-as-code bundle (OPA/Rego, Sentinel, or Conftest policies) and which workspaces/stacks it's bound to) with read-only agents, run the test against policy, and issue a defensible opinion on the Infrastructure as Code (IaC) control.",
      "year": 2025,
      "overview": [
        "The \"Policy/compliance as code\" sub-process is one of the controls an auditor must verify for Infrastructure as Code (IaC). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the policy-as-code bundle (OPA/Rego, Sentinel, or Conftest policies) and which workspaces/stacks it's bound to, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Open Policy Agent / Conftest (Rego), HashiCorp Sentinel / HCP Terraform policy sets, AWS CloudFormation Guard / AWS Config conformance packs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `(Rego policies against the terraform plan JSON)` — read-only, against the systems of record.",
        "The test itself is specific. Verify compliance is enforced as code in the plan/apply path, not just checked after the fact. PASS: a policy engine (OPA/Conftest, Sentinel, or CloudFormation Guard) evaluates every plan before apply; controls that must never be violated (no public data store, encryption required, mandatory tags, approved regions) are HARD-mandatory (block); enforcement levels are deliberate and documented; and the policy set demonstrably blocked a real non-compliant change. Exceptions: policy set in advisory mode only (logs but never blocks), critical controls missing from the codified policy, override/bypass available to the requester, and compliance frameworks with no corresponding policy. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_policy_compliance_as_code_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Open Policy Agent / Conftest (Rego) and HashiCorp Sentinel / HCP Terraform policy sets (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_policy_compliance_as_code_mcp.py` to expose it to your agent — or `python 04_policy_compliance_as_code_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Infrastructure as Code (IaC) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Open Policy Agent / Conftest (Rego) · HashiCorp Sentinel / HCP Terraform policy sets",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Policy/compliance as code\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "conftest test plan.json -p policy/   (Rego policies against the terraform plan JSON)\nHCP Terraform: GET /api/v2/policy-sets and /runs/{id}/policy-checks  → enforcement level + pass/fail per run\ncfn-guard validate -r rules.guard -d template.json\nverify a deliberately non-compliant plan (public bucket) is HARD-blocked, not just flagged advisory"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The policy-as-code bundle (OPA/Rego, Sentinel, or Conftest policies) and which workspaces/stacks it's bound to.",
        "The test: Verify compliance is enforced as code in the plan/apply path, not just checked after the fact.",
        "Reconcile the systems of record (Open Policy Agent / Conftest (Rego), HashiCorp Sentinel / HCP Terraform policy sets, AWS CloudFormation Guard / AWS Config conformance packs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Every Sentinel/OPA policy is set to advisory enforcement, so a plan creating a public, unencrypted bucket logs a warning and applies anyway; key controls (approved-regions, no-wildcard-IAM) aren't codified at all, so 'policy as code' provides reporting but no actual guardrail."
      ],
      "references": [
        {
          "title": "HashiCorp — Policy Enforcement (Sentinel/OPA)",
          "url": "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement"
        },
        {
          "title": "Open Policy Agent",
          "url": "https://www.openpolicyagent.org/docs/latest/"
        },
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_policy_compliance_as_code_mcp.py",
          "url": "/audit-code/iac/04_policy_compliance_as_code_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Infrastructure as Code (IaC) evidence for \"Policy/compliance as code\" (the policy-as-code bundle (opa/rego, sentinel, or conftest policies) and which workspaces/stacks it's bound to), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Policy/compliance as code\" control for Infrastructure as Code (IaC) at AcmeCorp. THE TEST: Verify compliance is enforced as code in the plan/apply path, not just checked after the fact. PASS: a policy engine (OPA/Conftest, Sentinel, or CloudFormation Guard) evaluates every plan before apply; controls that must never be violated (no public data store, encryption required, mandatory tags, approved regions) are HARD-mandatory (block); enforcement levels are deliberate and documented; and the policy set demonstrably blocked a real non-compliant change. Exceptions: policy set in advisory mode only (logs but never blocks), critical controls missing from the codified policy, override/bypass available to the requester, and compliance frameworks with no corresponding policy. The evidence — The policy-as-code bundle (OPA/Rego, Sentinel, or Conftest policies) and which workspaces/stacks it's bound to — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Open Policy Agent / Conftest (Rego) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Open Policy Agent / Conftest (Rego) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Open Policy Agent / Conftest (Rego); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Infrastructure as Code (IaC): \"Policy/compliance as code\" Audit Evidence\n\nThe test:\nVerify compliance is enforced as code in the plan/apply path, not just checked after the fact. PASS: a policy engine (OPA/Conftest, Sentinel, or CloudFormation Guard) evaluates every plan before apply; controls that must never be violated (no public data store, encryption required, mandatory tags, approved regions) are HARD-mandatory (block); enforcement levels are deliberate and documented; and the policy set demonstrably blocked a real non-compliant change. Exceptions: policy set in advisory mode only (logs but never blocks), critical controls missing from the codified policy, override/bypass available to the requester, and compliance frameworks with no corresponding policy.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items — The policy-as-code bundle (OPA/Rego, Sentinel, or Conftest policies) and which workspaces/stacks it's bound to)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Policy/compliance as code\",\n  \"domain\": \"Infrastructure as Code (IaC)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Policy/compliance as code\" control must cover\n# fragment: policycompliance_as_code_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "policycompliance_as_code_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Policy/compliance as code\" sub-process of Infrastructure as Code (IaC)?",
          "options": [
            "Deploy and operate the policy/compliance as code control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the policy/compliance as code control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for policy/compliance as code against comparable organisations in the sector",
            "Obtain evidence that the policy/compliance as code control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iac-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Policy/compliance as code\" matter to the broader Infrastructure as Code (IaC) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Infrastructure as Code (IaC)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Infrastructure as Code (IaC) estate",
            "It is a control other Infrastructure as Code (IaC) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Infrastructure as Code (IaC) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iac-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Policy/compliance as code\" control?",
          "options": [
            "A point-in-time screenshot of one system's policy/compliance as code settings, captured during the walkthrough",
            "The The policy-as-code bundle (OPA/Rego, Sentinel, or Conftest policies) and which workspaces/stacks it's bound to, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the policy/compliance as code control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's policy/compliance as code capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iac-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Policy/compliance as code\"?",
          "options": [
            "From Open Policy Agent / Conftest (Rego) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how policy/compliance as code works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Open Policy Agent / Conftest (Rego)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iac-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Policy/compliance as code\"?",
          "options": [
            "The external audit firm, since it is the party examining the policy/compliance as code control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the policy/compliance as code data is shared, so the accountability sits with no one in particular",
            "Security engineering / Governance — authors policy-as-code, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security engineering / Governance — authors policy-as-code owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iac-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Policy/compliance as code\", which part stays with the human auditor?",
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
          "id": "iac-04-q7",
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
          "id": "iac-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Policy/compliance as code\", which of these is a realistic reportable finding?",
          "options": [
            "Every Sentinel/OPA policy is set to advisory enforcement, so a plan creating a public, unencrypted bucket logs a warning and applies anyway; key controls (approved-regions, no-wildcard-IAM) aren't codified at all, so 'policy as code' provides reporting but no actual guardrail.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Every Sentinel/OPA policy is set to advisory enforcement, so a plan creating a public, unencrypted bucket logs a warning and applies anyway; key controls (approved-regions, no-wildcard-IAM) aren't codified at all, so 'policy as code' provides reporting but no actual guardrail. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iac-04-q9",
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
          "id": "iac-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Policy/compliance as code\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind policy/compliance as code, so there is no overlap",
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
    "epochId": "iac",
    "id": "iac-05",
    "order": 5,
    "title": "Module and template governance",
    "subtitle": "Agentic technical & privacy audit of the module and template governance control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Module and template governance\" control for Infrastructure as Code (IaC) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify reusable modules and templates are governed, versioned, and trusted. PASS: callers consume modules from an approved private registry pinned to immutable, semver-tagged versions (not a moving branch or `latest`); module publishing is restricted to module owners and the module passes scanning/review before a version is cut; third-party/public modules are vetted (forked into the registry or pinned to a reviewed commit); and a known-good module change propagates through controlled version bumps, not silently. Exceptions: modules sourced from a floating `main`/`master` branch (any push changes prod), unrestricted publishing, public modules pulled directly from the internet with no review, and unpinned/`latest` references.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Infrastructure as Code (IaC) systems of record (HCP Terraform private module registry / Terraform Registry; Git module sources (GitHub/GitLab) + tags; Module CI (scan + test before publish)) as tools — e.g. `grep callers for `source =` + `version =` / git `?ref=` → flag any poi`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The private module registry inventory (HCP Terraform private registry / Terraform Registry / Git module sources) and their version constraints",
        "The module source/version pinning in callers (`source` + `version` / git ref) — pinned to an immutable version vs `latest`/floating branch",
        "The module-publishing workflow: who can publish a new module version, and whether published modules are scanned/reviewed/signed",
        "Provenance for third-party / public modules consumed (publisher trust, fork-and-vet evidence)"
      ],
      "system": [
        "HCP Terraform private module registry / Terraform Registry",
        "Git module sources (GitHub/GitLab) + tags",
        "Module CI (scan + test before publish)",
        "Pulumi/Bicep module/registry equivalents"
      ],
      "dataOwner": [
        "Platform engineering — owns the module library / golden modules",
        "Module owners — publish and version",
        "Security engineering — reviews module security"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Infrastructure as Code (IaC) controls."
      }
    },
    "badge": {
      "id": "iac-05-badge",
      "name": "Infrastructure as Code (IaC) Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Module and template governance",
      "location": "Infrastructure as Code (IaC)",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Module and template governance\" as a repeatable agentic workflow: pull the real evidence (The private module registry inventory (HCP Terraform private registry / Terraform Registry / Git module sources) and their version constraints) with read-only agents, run the test against policy, and issue a defensible opinion on the Infrastructure as Code (IaC) control.",
      "year": 2025,
      "overview": [
        "The \"Module and template governance\" sub-process is one of the controls an auditor must verify for Infrastructure as Code (IaC). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the private module registry inventory (HCP Terraform private registry / Terraform Registry / Git module sources) and their version constraints, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HCP Terraform private module registry / Terraform Registry, Git module sources (GitHub/GitLab) + tags, Module CI (scan + test before publish) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `grep callers for `source =` + `version =` / git `?ref=` → flag any pointing at a` — read-only, against the systems of record.",
        "The test itself is specific. Verify reusable modules and templates are governed, versioned, and trusted. PASS: callers consume modules from an approved private registry pinned to immutable, semver-tagged versions (not a moving branch or `latest`); module publishing is restricted to module owners and the module passes scanning/review before a version is cut; third-party/public modules are vetted (forked into the registry or pinned to a reviewed commit); and a known-good module change propagates through controlled version bumps, not silently. Exceptions: modules sourced from a floating `main`/`master` branch (any push changes prod), unrestricted publishing, public modules pulled directly from the internet with no review, and unpinned/`latest` references. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_module_and_template_governance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HCP Terraform private module registry / Terraform Registry and Git module sources (GitHub/GitLab) + tags (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_module_and_template_governance_mcp.py` to expose it to your agent — or `python 05_module_and_template_governance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Infrastructure as Code (IaC) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull HCP Terraform private module registry / Terraform Registry · Git module sources (GitHub/GitLab) + tags",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Module and template governance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "grep callers for `source =` + `version =` / git `?ref=` → flag any pointing at a branch (`?ref=main`) or with no version constraint\nHCP Terraform: GET /api/v2/organizations/{org}/registry-modules  → versions, publishers\nconfirm module repos run Checkov/tfsec + tests on PR before a tag is published\nfor public modules: confirm they're vendored into the private registry or pinned to a reviewed commit SHA, not `terraform-aws-modules/...` floating"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The private module registry inventory (HCP Terraform private registry / Terraform Registry / Git module sources) and their version constraints.",
        "The test: Verify reusable modules and templates are governed, versioned, and trusted.",
        "Reconcile the systems of record (HCP Terraform private module registry / Terraform Registry, Git module sources (GitHub/GitLab) + tags, Module CI (scan + test before publish)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The shared 'vpc' and 'eks' modules are referenced as `?ref=main`, so any merge to those module repos immediately changes every consuming environment with no version review; module publishing is open to all engineers and modules aren't scanned before a tag is cut."
      ],
      "references": [
        {
          "title": "HashiCorp — Module versioning & private registry",
          "url": "https://developer.hashicorp.com/terraform/language/modules/syntax"
        },
        {
          "title": "NIST SSDF SP 800-218 (PW.4 — reuse secure components)",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "CIS Software Supply Chain Security Guide",
          "url": "https://www.cisecurity.org/insights/white-papers/cis-software-supply-chain-security-guide"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_module_and_template_governance_mcp.py",
          "url": "/audit-code/iac/05_module_and_template_governance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Infrastructure as Code (IaC) evidence for \"Module and template governance\" (the private module registry inventory (hcp terraform private registry / terraform registry / git module sources) and their version constraints), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Module and template governance\" control for Infrastructure as Code (IaC) at AcmeCorp. THE TEST: Verify reusable modules and templates are governed, versioned, and trusted. PASS: callers consume modules from an approved private registry pinned to immutable, semver-tagged versions (not a moving branch or `latest`); module publishing is restricted to module owners and the module passes scanning/review before a version is cut; third-party/public modules are vetted (forked into the registry or pinned to a reviewed commit); and a known-good module change propagates through controlled version bumps, not silently. Exceptions: modules sourced from a floating `main`/`master` branch (any push changes prod), unrestricted publishing, public modules pulled directly from the internet with no review, and unpinned/`latest` references. The evidence — The private module registry inventory (HCP Terraform private registry / Terraform Registry / Git module sources) and their version constraints — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HCP Terraform private module registry / Terraform Registry APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HCP Terraform private module registry / Terraform Registry gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HCP Terraform private module registry / Terraform Registry; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Infrastructure as Code (IaC): \"Module and template governance\" Audit Evidence\n\nThe test:\nVerify reusable modules and templates are governed, versioned, and trusted. PASS: callers consume modules from an approved private registry pinned to immutable, semver-tagged versions (not a moving branch or `latest`); module publishing is restricted to module owners and the module passes scanning/review before a version is cut; third-party/public modules are vetted (forked into the registry or pinned to a reviewed commit); and a known-good module change propagates through controlled version bumps, not silently. Exceptions: modules sourced from a floating `main`/`master` branch (any push changes prod), unrestricted publishing, public modules pulled directly from the internet with no review, and unpinned/`latest` references.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items — The private module registry inventory (HCP Terraform private registry / Terraform Registry / Git module sources) and their version constraints)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Module and template governance\",\n  \"domain\": \"Infrastructure as Code (IaC)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Module and template governance\" control must cover\n# fragment: module_template_governance_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "module_template_governance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Module and template governance\" sub-process of Infrastructure as Code (IaC)?",
          "options": [
            "Deploy and operate the module and template governance control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the module and template governance control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for module and template governance against comparable organisations in the sector",
            "Obtain evidence that the module and template governance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iac-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Module and template governance\" matter to the broader Infrastructure as Code (IaC) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Infrastructure as Code (IaC)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Infrastructure as Code (IaC) estate",
            "It is a control other Infrastructure as Code (IaC) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Infrastructure as Code (IaC) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iac-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Module and template governance\" control?",
          "options": [
            "A point-in-time screenshot of one system's module and template governance settings, captured during the walkthrough",
            "The The private module registry inventory (HCP Terraform private registry / Terraform Registry / Git module sources) and their version constraints, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the module and template governance control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's module and template governance capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iac-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Module and template governance\"?",
          "options": [
            "From HCP Terraform private module registry / Terraform Registry and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how module and template governance works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. HCP Terraform private module registry / Terraform Registry) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iac-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Module and template governance\"?",
          "options": [
            "The external audit firm, since it is the party examining the module and template governance control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the module and template governance data is shared, so the accountability sits with no one in particular",
            "Platform engineering — owns the module library / golden modules, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Platform engineering — owns the module library / golden modules owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iac-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Module and template governance\", which part stays with the human auditor?",
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
          "id": "iac-05-q7",
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
          "id": "iac-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Module and template governance\", which of these is a realistic reportable finding?",
          "options": [
            "The shared 'vpc' and 'eks' modules are referenced as `?ref=main`, so any merge to those module repos immediately changes every consuming environment with no version review; module publishing is open to all engineers and modules aren't scanned before a tag is cut.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The shared 'vpc' and 'eks' modules are referenced as `?ref=main`, so any merge to those module repos immediately changes every consuming environment with no version review; module publishing is open to all engineers and modules aren't scanned before a tag is cut. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iac-05-q9",
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
          "id": "iac-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Module and template governance\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind module and template governance, so there is no overlap",
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
    "epochId": "iac",
    "id": "iac-06",
    "order": 6,
    "title": "Configuration drift detection",
    "subtitle": "Agentic technical & privacy audit of the configuration drift detection control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Configuration drift detection\" control for Infrastructure as Code (IaC) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Detect divergence between the declared IaC state and running infrastructure. PASS: a scheduled drift check (HCP Terraform health assessments, `terraform plan -detailed-exitcode`, or driftctl) runs across managed workspaces; a clean plan (exit 0 / no changes) is the steady state; any drift is alerted, investigated, and reconciled (re-applied or codified) within SLA; and out-of-band console changes are correlated to a change record. Exceptions: workspaces with no scheduled drift check, persistent unreconciled drift (runtime silently diverged from code), and unauthorized changes (drift with no corresponding change ticket) — e.g. a security group widened in the console that the code would revert.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Infrastructure as Code (IaC) systems of record (Terraform / HCP Terraform (state + health assessments / continuous validation); driftctl / CloudQuery (drift between code and cloud); AWS Config / Azure Policy (resource-change history)) as tools — e.g. `(exit 2 = drift) per workspace on a schedule`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "A current `terraform plan` against the live state for in-scope workspaces (a non-empty plan = drift between code and runtime)",
        "The drift-detection job output (Terraform Cloud health assessments / driftctl / `terraform plan -detailed-exitcode` on a schedule)",
        "AWS Config / Azure Policy compliance timelines showing out-of-band resource changes",
        "The reconciliation record: for each drift, whether it was re-applied to match code or code updated to match reality, and the change ticket"
      ],
      "system": [
        "Terraform / HCP Terraform (state + health assessments / continuous validation)",
        "driftctl / CloudQuery (drift between code and cloud)",
        "AWS Config / Azure Policy (resource-change history)"
      ],
      "dataOwner": [
        "Platform / SRE — owns state and drift remediation",
        "Cloud security — investigates security-relevant drift",
        "Change management — correlates authorized vs not"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Infrastructure as Code (IaC) controls."
      }
    },
    "badge": {
      "id": "iac-06-badge",
      "name": "Infrastructure as Code (IaC) Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Configuration drift detection",
      "location": "Infrastructure as Code (IaC)",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Configuration drift detection\" as a repeatable agentic workflow: pull the real evidence (A current `terraform plan` against the live state for in-scope workspaces (a non-empty plan = drift between code and runtime)) with read-only agents, run the test against policy, and issue a defensible opinion on the Infrastructure as Code (IaC) control.",
      "year": 2025,
      "overview": [
        "The \"Configuration drift detection\" sub-process is one of the controls an auditor must verify for Infrastructure as Code (IaC). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me a current `terraform plan` against the live state for in-scope workspaces (a non-empty plan = drift between code and runtime), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Terraform / HCP Terraform (state + health assessments / continuous validation), driftctl / CloudQuery (drift between code and cloud), AWS Config / Azure Policy (resource-change history) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `(exit 2 = drift) per workspace on a schedule` — read-only, against the systems of record.",
        "The test itself is specific. Detect divergence between the declared IaC state and running infrastructure. PASS: a scheduled drift check (HCP Terraform health assessments, `terraform plan -detailed-exitcode`, or driftctl) runs across managed workspaces; a clean plan (exit 0 / no changes) is the steady state; any drift is alerted, investigated, and reconciled (re-applied or codified) within SLA; and out-of-band console changes are correlated to a change record. Exceptions: workspaces with no scheduled drift check, persistent unreconciled drift (runtime silently diverged from code), and unauthorized changes (drift with no corresponding change ticket) — e.g. a security group widened in the console that the code would revert. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_configuration_drift_detection_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Terraform / HCP Terraform (state + health assessments / continuous validation) and driftctl / CloudQuery (drift between code and cloud) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_configuration_drift_detection_mcp.py` to expose it to your agent — or `python 06_configuration_drift_detection_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Infrastructure as Code (IaC) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Terraform / HCP Terraform (state + health assessments / continuous validation) · driftctl / CloudQuery (drift between code and cloud)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Configuration drift detection\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "terraform plan -detailed-exitcode   (exit 2 = drift) per workspace on a schedule\nHCP Terraform: enable + read 'health assessments' (drift detection) via GET /api/v2/workspaces/{id}/assessment-results\ndriftctl scan --from tfstate+s3://... --to aws+tf   (IaC state vs actual cloud)\nAWS: aws configservice get-resource-config-history  → who changed a managed resource out-of-band, when"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: A current `terraform plan` against the live state for in-scope workspaces (a non-empty plan = drift between code and runtime).",
        "The test: Detect divergence between the declared IaC state and running infrastructure.",
        "Reconcile the systems of record (Terraform / HCP Terraform (state + health assessments / continuous validation), driftctl / CloudQuery (drift between code and cloud), AWS Config / Azure Policy (resource-change history)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Drift detection isn't scheduled on any workspace; an ad-hoc `terraform plan` reveals dozens of resources changed in the console (a security group manually opened to 0.0.0.0/0, an RDS instance resized, IAM policies edited) that the code doesn't reflect and would silently revert on the next apply."
      ],
      "references": [
        {
          "title": "HashiCorp — Drift detection / health assessments",
          "url": "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/health"
        },
        {
          "title": "NIST SP 800-128 — Configuration Management",
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
          "name": "06_configuration_drift_detection_mcp.py",
          "url": "/audit-code/iac/06_configuration_drift_detection_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Infrastructure as Code (IaC) evidence for \"Configuration drift detection\" (a current `terraform plan` against the live state for in-scope workspaces (a non-empty plan = drift between code and runtime)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Configuration drift detection\" control for Infrastructure as Code (IaC) at AcmeCorp. THE TEST: Detect divergence between the declared IaC state and running infrastructure. PASS: a scheduled drift check (HCP Terraform health assessments, `terraform plan -detailed-exitcode`, or driftctl) runs across managed workspaces; a clean plan (exit 0 / no changes) is the steady state; any drift is alerted, investigated, and reconciled (re-applied or codified) within SLA; and out-of-band console changes are correlated to a change record. Exceptions: workspaces with no scheduled drift check, persistent unreconciled drift (runtime silently diverged from code), and unauthorized changes (drift with no corresponding change ticket) — e.g. a security group widened in the console that the code would revert. The evidence — A current `terraform plan` against the live state for in-scope workspaces (a non-empty plan = drift between code and runtime) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Terraform / HCP Terraform (state + health assessments / continuous validation) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Terraform / HCP Terraform (state + health assessments / continuous validation) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Terraform / HCP Terraform (state + health assessments / continuous validation); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Infrastructure as Code (IaC): \"Configuration drift detection\" Audit Evidence\n\nThe test:\nDetect divergence between the declared IaC state and running infrastructure. PASS: a scheduled drift check (HCP Terraform health assessments, `terraform plan -detailed-exitcode`, or driftctl) runs across managed workspaces; a clean plan (exit 0 / no changes) is the steady state; any drift is alerted, investigated, and reconciled (re-applied or codified) within SLA; and out-of-band console changes are correlated to a change record. Exceptions: workspaces with no scheduled drift check, persistent unreconciled drift (runtime silently diverged from code), and unauthorized changes (drift with no corresponding change ticket) — e.g. a security group widened in the console that the code would revert.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items — A current `terraform plan` against the live state for in-scope workspaces (a non-empty plan = drift between code and runtime))\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Configuration drift detection\",\n  \"domain\": \"Infrastructure as Code (IaC)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Configuration drift detection\" control must cover\n# fragment: configuration_drift_detection_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "configuration_drift_detection_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Configuration drift detection\" sub-process of Infrastructure as Code (IaC)?",
          "options": [
            "Deploy and operate the configuration drift detection control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the configuration drift detection control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for configuration drift detection against comparable organisations in the sector",
            "Obtain evidence that the configuration drift detection control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iac-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Configuration drift detection\" matter to the broader Infrastructure as Code (IaC) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Infrastructure as Code (IaC)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Infrastructure as Code (IaC) estate",
            "It is a control other Infrastructure as Code (IaC) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Infrastructure as Code (IaC) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iac-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Configuration drift detection\" control?",
          "options": [
            "A point-in-time screenshot of one system's configuration drift detection settings, captured during the walkthrough",
            "The A current `terraform plan` against the live state for in-scope workspaces (a non-empty plan = drift between code and runtime), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the configuration drift detection control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's configuration drift detection capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iac-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Configuration drift detection\"?",
          "options": [
            "From Terraform / HCP Terraform (state + health assessments / continuous validation) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how configuration drift detection works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Terraform / HCP Terraform (state + health assessments / continuous validation)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iac-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Configuration drift detection\"?",
          "options": [
            "The external audit firm, since it is the party examining the configuration drift detection control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the configuration drift detection data is shared, so the accountability sits with no one in particular",
            "Platform / SRE — owns state and drift remediation, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Platform / SRE — owns state and drift remediation owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iac-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Configuration drift detection\", which part stays with the human auditor?",
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
          "id": "iac-06-q7",
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
          "id": "iac-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Configuration drift detection\", which of these is a realistic reportable finding?",
          "options": [
            "Drift detection isn't scheduled on any workspace; an ad-hoc `terraform plan` reveals dozens of resources changed in the console (a security group manually opened to 0.0.0.0/0, an RDS instance resized, IAM policies edited) that the code doesn't reflect and would silently revert on the next apply.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Drift detection isn't scheduled on any workspace; an ad-hoc `terraform plan` reveals dozens of resources changed in the console (a security group manually opened to 0.0.0.0/0, an RDS instance resized, IAM policies edited) that the code doesn't reflect and would silently revert on the next apply. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iac-06-q9",
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
          "id": "iac-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Configuration drift detection\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind configuration drift detection, so there is no overlap",
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
    "epochId": "iac",
    "id": "iac-07",
    "order": 7,
    "title": "Secrets and credential handling",
    "subtitle": "Agentic technical & privacy audit of the secrets and credential handling control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secrets and credential handling\" control for Infrastructure as Code (IaC) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify no secrets live in IaC code, history, or state, and that apply-time auth is short-lived. PASS: no hardcoded credentials/keys/tokens in the IaC repos or git history; secrets are injected at apply time from a secrets manager (Vault, AWS/GCP/Azure secret-manager data sources) or passed as protected CI variables — never committed `tfvars`; remote state is encrypted at rest with tightly scoped read access (state stores resource secrets like DB passwords in plaintext); and the IaC runner authenticates to the cloud via OIDC/short-lived role, not a long-lived key. Exceptions: any secret found in code or history, state stored unencrypted or world-readable, `terraform.tfvars` with passwords committed, and a long-lived admin cloud key embedded in the pipeline.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Infrastructure as Code (IaC) systems of record (gitleaks / TruffleHog (repo + history scan); Terraform/Pulumi remote state (S3+KMS / HCP Terraform / azurerm backend); HashiCorp Vault / AWS Secrets Manager / Azure Key Vault (apply-time injection)) as tools — e.g. `(full history)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "A secret-scan of the IaC repos + their history (gitleaks / TruffleHog) for credentials, keys, and tokens committed in `.tf`/`.yaml`/`tfvars`",
        "The Terraform/Pulumi state-file storage config — where state lives, whether it's encrypted, and who can read it (state contains secrets in plaintext)",
        "Evidence that secrets are referenced from a vault at apply time (Vault provider / cloud secret-manager data sources) rather than hardcoded or in `terraform.tfvars`",
        "The IaC execution credential model — OIDC/short-lived role assumption for the runner vs a long-lived stored cloud key"
      ],
      "system": [
        "gitleaks / TruffleHog (repo + history scan)",
        "Terraform/Pulumi remote state (S3+KMS / HCP Terraform / azurerm backend)",
        "HashiCorp Vault / AWS Secrets Manager / Azure Key Vault (apply-time injection)",
        "CI OIDC federation"
      ],
      "dataOwner": [
        "Platform engineering — owns IaC and state backends",
        "Crypto / Secrets team — owns the vault integration",
        "Security engineering — owns secret-scanning"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Infrastructure as Code (IaC) controls."
      }
    },
    "badge": {
      "id": "iac-07-badge",
      "name": "Infrastructure as Code (IaC) Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Secrets and credential handling",
      "location": "Infrastructure as Code (IaC)",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secrets and credential handling\" as a repeatable agentic workflow: pull the real evidence (A secret-scan of the IaC repos + their history (gitleaks / TruffleHog) for credentials, keys, and tokens committed in `.tf`/`.yaml`/`tfvars`) with read-only agents, run the test against policy, and issue a defensible opinion on the Infrastructure as Code (IaC) control.",
      "year": 2025,
      "overview": [
        "The \"Secrets and credential handling\" sub-process is one of the controls an auditor must verify for Infrastructure as Code (IaC). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me a secret-scan of the IaC repos + their history (gitleaks / TruffleHog) for credentials, keys, and tokens committed in `.tf`/`.yaml`/`tfvars`, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here gitleaks / TruffleHog (repo + history scan), Terraform/Pulumi remote state (S3+KMS / HCP Terraform / azurerm backend), HashiCorp Vault / AWS Secrets Manager / Azure Key Vault (apply-time injection) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `(full history)` — read-only, against the systems of record.",
        "The test itself is specific. Verify no secrets live in IaC code, history, or state, and that apply-time auth is short-lived. PASS: no hardcoded credentials/keys/tokens in the IaC repos or git history; secrets are injected at apply time from a secrets manager (Vault, AWS/GCP/Azure secret-manager data sources) or passed as protected CI variables — never committed `tfvars`; remote state is encrypted at rest with tightly scoped read access (state stores resource secrets like DB passwords in plaintext); and the IaC runner authenticates to the cloud via OIDC/short-lived role, not a long-lived key. Exceptions: any secret found in code or history, state stored unencrypted or world-readable, `terraform.tfvars` with passwords committed, and a long-lived admin cloud key embedded in the pipeline. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_secrets_and_credential_handling_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from gitleaks / TruffleHog (repo + history scan) and Terraform/Pulumi remote state (S3+KMS / HCP Terraform / azurerm backend) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_secrets_and_credential_handling_mcp.py` to expose it to your agent — or `python 07_secrets_and_credential_handling_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Infrastructure as Code (IaC) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull gitleaks / TruffleHog (repo + history scan) · Terraform/Pulumi remote state (S3+KMS / HCP Terraform / azurerm backend)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secrets and credential handling\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "gitleaks detect --source . --log-opts='--all'   (full history)  /  trufflehog git file://. \nconfirm backend encryption: S3 backend has `encrypt = true` + a KMS key, and read access to the state bucket/HCP workspace is least-privilege\ngrep for hardcoded secrets in `*.tf` / `*.tfvars` and confirm secret values come from `data.vault_*` / `data.aws_secretsmanager_secret_version`\nCI: confirm cloud auth is OIDC (`aws-actions/configure-aws-credentials` with role-to-assume) not a stored AWS_SECRET_ACCESS_KEY"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: A secret-scan of the IaC repos + their history (gitleaks / TruffleHog) for credentials, keys, and tokens committed in `.tf`/`.yaml`/`tfvars`.",
        "The test: Verify no secrets live in IaC code, history, or state, and that apply-time auth is short-lived.",
        "Reconcile the systems of record (gitleaks / TruffleHog (repo + history scan), Terraform/Pulumi remote state (S3+KMS / HCP Terraform / azurerm backend), HashiCorp Vault / AWS Secrets Manager / Azure Key Vault (apply-time injection)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A database password and an API token are hardcoded in `terraform.tfvars` committed to history, the S3 state backend has `encrypt` unset and is readable by the whole org (so every secret in state is exposed), and the pipeline authenticates with a long-lived AWS admin access key stored as a CI secret."
      ],
      "references": [
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "HashiCorp — Sensitive data in state",
          "url": "https://developer.hashicorp.com/terraform/language/state/sensitive-data"
        },
        {
          "title": "GitHub — OIDC hardening for cloud deploys",
          "url": "https://docs.github.com/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_secrets_and_credential_handling_mcp.py",
          "url": "/audit-code/iac/07_secrets_and_credential_handling_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Infrastructure as Code (IaC) evidence for \"Secrets and credential handling\" (a secret-scan of the iac repos + their history (gitleaks / trufflehog) for credentials, keys, and tokens committed in `.tf`/`.yaml`/`tfvars`), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secrets and credential handling\" control for Infrastructure as Code (IaC) at AcmeCorp. THE TEST: Verify no secrets live in IaC code, history, or state, and that apply-time auth is short-lived. PASS: no hardcoded credentials/keys/tokens in the IaC repos or git history; secrets are injected at apply time from a secrets manager (Vault, AWS/GCP/Azure secret-manager data sources) or passed as protected CI variables — never committed `tfvars`; remote state is encrypted at rest with tightly scoped read access (state stores resource secrets like DB passwords in plaintext); and the IaC runner authenticates to the cloud via OIDC/short-lived role, not a long-lived key. Exceptions: any secret found in code or history, state stored unencrypted or world-readable, `terraform.tfvars` with passwords committed, and a long-lived admin cloud key embedded in the pipeline. The evidence — A secret-scan of the IaC repos + their history (gitleaks / TruffleHog) for credentials, keys, and tokens committed in `.tf`/`.yaml`/`tfvars` — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live gitleaks / TruffleHog (repo + history scan) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. gitleaks / TruffleHog (repo + history scan) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from gitleaks / TruffleHog (repo + history scan); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Infrastructure as Code (IaC): \"Secrets and credential handling\" Audit Evidence\n\nThe test:\nVerify no secrets live in IaC code, history, or state, and that apply-time auth is short-lived. PASS: no hardcoded credentials/keys/tokens in the IaC repos or git history; secrets are injected at apply time from a secrets manager (Vault, AWS/GCP/Azure secret-manager data sources) or passed as protected CI variables — never committed `tfvars`; remote state is encrypted at rest with tightly scoped read access (state stores resource secrets like DB passwords in plaintext); and the IaC runner authenticates to the cloud via OIDC/short-lived role, not a long-lived key. Exceptions: any secret found in code or history, state stored unencrypted or world-readable, `terraform.tfvars` with passwords committed, and a long-lived admin cloud key embedded in the pipeline.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items — A secret-scan of the IaC repos + their history (gitleaks / TruffleHog) for credentials, keys, and tokens committed in `.tf`/`.yaml`/`tfvars`)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secrets and credential handling\",\n  \"domain\": \"Infrastructure as Code (IaC)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secrets and credential handling\" control must cover\n# fragment: secrets_credential_handling_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "secrets_credential_handling_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secrets and credential handling\" sub-process of Infrastructure as Code (IaC)?",
          "options": [
            "Deploy and operate the secrets and credential handling control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the secrets and credential handling control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for secrets and credential handling against comparable organisations in the sector",
            "Obtain evidence that the secrets and credential handling control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iac-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secrets and credential handling\" matter to the broader Infrastructure as Code (IaC) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Infrastructure as Code (IaC)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Infrastructure as Code (IaC) estate",
            "It is a control other Infrastructure as Code (IaC) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Infrastructure as Code (IaC) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iac-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secrets and credential handling\" control?",
          "options": [
            "A point-in-time screenshot of one system's secrets and credential handling settings, captured during the walkthrough",
            "The A secret-scan of the IaC repos + their history (gitleaks / TruffleHog) for credentials, keys, and tokens committed in `.tf`/`.yaml`/`tfvars`, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the secrets and credential handling control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's secrets and credential handling capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iac-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Secrets and credential handling\"?",
          "options": [
            "From gitleaks / TruffleHog (repo + history scan) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how secrets and credential handling works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. gitleaks / TruffleHog (repo + history scan)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iac-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secrets and credential handling\"?",
          "options": [
            "The external audit firm, since it is the party examining the secrets and credential handling control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the secrets and credential handling data is shared, so the accountability sits with no one in particular",
            "Platform engineering — owns IaC and state backends, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Platform engineering — owns IaC and state backends owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iac-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secrets and credential handling\", which part stays with the human auditor?",
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
          "id": "iac-07-q7",
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
          "id": "iac-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secrets and credential handling\", which of these is a realistic reportable finding?",
          "options": [
            "A database password and an API token are hardcoded in `terraform.tfvars` committed to history, the S3 state backend has `encrypt` unset and is readable by the whole org (so every secret in state is exposed), and the pipeline authenticates with a long-lived AWS admin access key stored as a CI secret.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A database password and an API token are hardcoded in `terraform.tfvars` committed to history, the S3 state backend has `encrypt` unset and is readable by the whole org (so every secret in state is exposed), and the pipeline authenticates with a long-lived AWS admin access key stored as a CI secret. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iac-07-q9",
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
          "id": "iac-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secrets and credential handling\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind secrets and credential handling, so there is no overlap",
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
    "epochId": "iac",
    "id": "iac-08",
    "order": 8,
    "title": "Pipeline integration",
    "subtitle": "Agentic technical & privacy audit of the pipeline integration control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Pipeline integration\" control for Infrastructure as Code (IaC) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify IaC change is delivered only through a controlled pipeline. PASS: applies run only from the pipeline (no local apply to prod), in the order plan → IaC-scan → policy-as-code → human approval → apply; the apply consumes the saved, reviewed plan artifact (so what's approved is what runs); prod applies require an approver distinct from the author via environment protection; the runner assumes a least-privilege, short-lived role scoped to the workspace; and the pipeline definition itself is branch-protected. Exceptions: developers applying to prod from laptops, the apply re-planning instead of using the approved plan (review/apply divergence), no approval gate before prod apply, an over-privileged shared apply role, and an editable pipeline anyone can change.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Infrastructure as Code (IaC) systems of record (GitHub Actions / GitLab CI / Jenkins, or Atlantis / HCP Terraform / Spacelift / Env0 (the run engine); Cloud OIDC + scoped deploy role; Environment protection rules / required reviewers) as tools — e.g. `confirm the workflow uses `terraform plan -out=plan.out` then `terrafo`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The IaC pipeline definition (plan → policy → approval → apply) and the protected-environment / required-approval config for prod applies",
        "The runner identity + permissions used by the apply stage (the cloud role the pipeline assumes) and its scope",
        "Evidence the plan that was reviewed is the exact plan applied (saved plan artifact `plan.out` reused at apply, not a re-plan)",
        "Who can trigger an apply, edit the pipeline, and approve a prod run (the SoD across the pipeline stages)"
      ],
      "system": [
        "GitHub Actions / GitLab CI / Jenkins, or Atlantis / HCP Terraform / Spacelift / Env0 (the run engine)",
        "Cloud OIDC + scoped deploy role",
        "Environment protection rules / required reviewers"
      ],
      "dataOwner": [
        "Platform / DevOps — owns the IaC pipeline",
        "Release management — owns the approval gate",
        "Security engineering — owns the runner-identity scope and SoD"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Infrastructure as Code (IaC) controls."
      }
    },
    "badge": {
      "id": "iac-08-badge",
      "name": "Infrastructure as Code (IaC) Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Pipeline integration",
      "location": "Infrastructure as Code (IaC)",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Pipeline integration\" as a repeatable agentic workflow: pull the real evidence (The IaC pipeline definition (plan → policy → approval → apply) and the protected-environment / required-approval config for prod applies) with read-only agents, run the test against policy, and issue a defensible opinion on the Infrastructure as Code (IaC) control.",
      "year": 2025,
      "overview": [
        "The \"Pipeline integration\" sub-process is one of the controls an auditor must verify for Infrastructure as Code (IaC). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the IaC pipeline definition (plan → policy → approval → apply) and the protected-environment / required-approval config for prod applies, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub Actions / GitLab CI / Jenkins, or Atlantis / HCP Terraform / Spacelift / Env0 (the run engine), Cloud OIDC + scoped deploy role, Environment protection rules / required reviewers — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm the workflow uses `terraform plan -out=plan.out` then `terraform apply p` — read-only, against the systems of record.",
        "The test itself is specific. Verify IaC change is delivered only through a controlled pipeline. PASS: applies run only from the pipeline (no local apply to prod), in the order plan → IaC-scan → policy-as-code → human approval → apply; the apply consumes the saved, reviewed plan artifact (so what's approved is what runs); prod applies require an approver distinct from the author via environment protection; the runner assumes a least-privilege, short-lived role scoped to the workspace; and the pipeline definition itself is branch-protected. Exceptions: developers applying to prod from laptops, the apply re-planning instead of using the approved plan (review/apply divergence), no approval gate before prod apply, an over-privileged shared apply role, and an editable pipeline anyone can change. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_pipeline_integration_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub Actions / GitLab CI / Jenkins, or Atlantis / HCP Terraform / Spacelift / Env0 (the run engine) and Cloud OIDC + scoped deploy role (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_pipeline_integration_mcp.py` to expose it to your agent — or `python 08_pipeline_integration_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Infrastructure as Code (IaC) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub Actions / GitLab CI / Jenkins, or Atlantis / HCP Terraform / Spacelift / Env0 (the run engine) · Cloud OIDC + scoped deploy role",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Pipeline integration\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm the workflow uses `terraform plan -out=plan.out` then `terraform apply plan.out` (same artifact), not a bare `terraform apply` that re-plans\nGitHub: required reviewers on the `production` environment (gh api repos/{org}/{repo}/environments/production) — approver ≠ author\ninspect the apply-stage cloud role: scoped to the stack's resources + short-lived (OIDC), not AdministratorAccess\nconfirm `terraform apply` is blocked outside CI (state-lock + no human apply credentials) and the pipeline YAML is branch-protected"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The IaC pipeline definition (plan → policy → approval → apply) and the protected-environment / required-approval config for prod applies.",
        "The test: Verify IaC change is delivered only through a controlled pipeline.",
        "Reconcile the systems of record (GitHub Actions / GitLab CI / Jenkins, or Atlantis / HCP Terraform / Spacelift / Env0 (the run engine), Cloud OIDC + scoped deploy role, Environment protection rules / required reviewers) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The apply stage re-plans instead of applying the reviewed `plan.out` (so a dependency or data-source change can apply something different from what was approved), there's no required approver before the prod apply, and the runner assumes an AdministratorAccess role usable against the entire account."
      ],
      "references": [
        {
          "title": "NIST SP 800-204D — CI/CD security",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "HashiCorp — Remote operations & run workflow",
          "url": "https://developer.hashicorp.com/terraform/cloud-docs/run/remote-operations"
        },
        {
          "title": "OWASP Top 10 CI/CD Security Risks",
          "url": "https://owasp.org/www-project-top-10-ci-cd-security-risks/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_pipeline_integration_mcp.py",
          "url": "/audit-code/iac/08_pipeline_integration_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Infrastructure as Code (IaC) evidence for \"Pipeline integration\" (the iac pipeline definition (plan → policy → approval → apply) and the protected-environment / required-approval config for prod applies), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Pipeline integration\" control for Infrastructure as Code (IaC) at AcmeCorp. THE TEST: Verify IaC change is delivered only through a controlled pipeline. PASS: applies run only from the pipeline (no local apply to prod), in the order plan → IaC-scan → policy-as-code → human approval → apply; the apply consumes the saved, reviewed plan artifact (so what's approved is what runs); prod applies require an approver distinct from the author via environment protection; the runner assumes a least-privilege, short-lived role scoped to the workspace; and the pipeline definition itself is branch-protected. Exceptions: developers applying to prod from laptops, the apply re-planning instead of using the approved plan (review/apply divergence), no approval gate before prod apply, an over-privileged shared apply role, and an editable pipeline anyone can change. The evidence — The IaC pipeline definition (plan → policy → approval → apply) and the protected-environment / required-approval config for prod applies — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub Actions / GitLab CI / Jenkins, or Atlantis / HCP Terraform / Spacelift / Env0 (the run engine) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub Actions / GitLab CI / Jenkins, or Atlantis / HCP Terraform / Spacelift / Env0 (the run engine) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub Actions / GitLab CI / Jenkins, or Atlantis / HCP Terraform / Spacelift / Env0 (the run engine); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Infrastructure as Code (IaC): \"Pipeline integration\" Audit Evidence\n\nThe test:\nVerify IaC change is delivered only through a controlled pipeline. PASS: applies run only from the pipeline (no local apply to prod), in the order plan → IaC-scan → policy-as-code → human approval → apply; the apply consumes the saved, reviewed plan artifact (so what's approved is what runs); prod applies require an approver distinct from the author via environment protection; the runner assumes a least-privilege, short-lived role scoped to the workspace; and the pipeline definition itself is branch-protected. Exceptions: developers applying to prod from laptops, the apply re-planning instead of using the approved plan (review/apply divergence), no approval gate before prod apply, an over-privileged shared apply role, and an editable pipeline anyone can change.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items — The IaC pipeline definition (plan → policy → approval → apply) and the protected-environment / required-approval config for prod applies)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Pipeline integration\",\n  \"domain\": \"Infrastructure as Code (IaC)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Pipeline integration\" control must cover\n# fragment: pipeline_integration_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "pipeline_integration_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Pipeline integration\" sub-process of Infrastructure as Code (IaC)?",
          "options": [
            "Deploy and operate the pipeline integration control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the pipeline integration control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for pipeline integration against comparable organisations in the sector",
            "Obtain evidence that the pipeline integration control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iac-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Pipeline integration\" matter to the broader Infrastructure as Code (IaC) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Infrastructure as Code (IaC)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Infrastructure as Code (IaC) estate",
            "It is a control other Infrastructure as Code (IaC) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Infrastructure as Code (IaC) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iac-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Pipeline integration\" control?",
          "options": [
            "A point-in-time screenshot of one system's pipeline integration settings, captured during the walkthrough",
            "The The IaC pipeline definition (plan → policy → approval → apply) and the protected-environment / required-approval config for prod applies, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the pipeline integration control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's pipeline integration capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iac-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Pipeline integration\"?",
          "options": [
            "From GitHub Actions / GitLab CI / Jenkins, or Atlantis / HCP Terraform / Spacelift / Env0 (the run engine) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how pipeline integration works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GitHub Actions / GitLab CI / Jenkins, or Atlantis / HCP Terraform / Spacelift / Env0 (the run engine)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iac-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Pipeline integration\"?",
          "options": [
            "The external audit firm, since it is the party examining the pipeline integration control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the pipeline integration data is shared, so the accountability sits with no one in particular",
            "Platform / DevOps — owns the IaC pipeline, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Platform / DevOps — owns the IaC pipeline owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iac-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Pipeline integration\", which part stays with the human auditor?",
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
          "id": "iac-08-q7",
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
          "id": "iac-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Pipeline integration\", which of these is a realistic reportable finding?",
          "options": [
            "The apply stage re-plans instead of applying the reviewed `plan.out` (so a dependency or data-source change can apply something different from what was approved), there's no required approver before the prod apply, and the runner assumes an AdministratorAccess role usable against the entire account.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The apply stage re-plans instead of applying the reviewed `plan.out` (so a dependency or data-source change can apply something different from what was approved), there's no required approver before the prod apply, and the runner assumes an AdministratorAccess role usable against the entire account. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iac-08-q9",
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
          "id": "iac-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Pipeline integration\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind pipeline integration, so there is no overlap",
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
    "epochId": "iac",
    "id": "iac-09",
    "order": 9,
    "title": "GitOps security controls",
    "subtitle": "Agentic technical & privacy audit of the gitops security controls control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"GitOps security controls\" control for Infrastructure as Code (IaC) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the GitOps pull-based delivery model is secured end to end (git is the source of truth, the controller is the only thing that writes to the cluster). PASS: the GitOps repo is the single write path — direct `kubectl apply` to clusters is restricted; the manifest repo has branch protection + required review (and ideally signed/verified commits); the controller verifies commit signatures and only syncs trusted, pinned sources; self-heal/auto-sync reverts drift; the controller's cluster RBAC is least-privilege per target (no single agent with cluster-admin on every cluster); and the controller's own UI/API is authenticated + RBAC-scoped. Exceptions: unprotected manifest repo (any push reaches prod clusters), no commit verification, the controller holding cluster-admin across all clusters, self-heal disabled (so manual drift persists), and a publicly-exposed or weakly-authenticated Argo/Flux endpoint.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Infrastructure as Code (IaC) systems of record (Argo CD / Flux CD (the GitOps controller); Git manifest/config repos (GitHub/GitLab) + branch protection + signed commits; Kubernetes RBAC (the controller's per-cluster permissions)) as tools — e.g. `Argo CD: argocd app list + argocd app get → source repo/revision, auto`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The GitOps controller config (Argo CD / Flux) — the source repos it syncs, the target clusters, and the sync/self-heal/prune settings",
        "The repository trust + access model for the GitOps manifest repos (branch protection, signed commits, who can write desired state)",
        "The controller's in-cluster RBAC + the credentials it uses to reach target clusters (scope of what the agent can change)",
        "Drift/self-heal evidence: out-of-band cluster changes that Argo/Flux detected and reverted, and the sync audit history"
      ],
      "system": [
        "Argo CD / Flux CD (the GitOps controller)",
        "Git manifest/config repos (GitHub/GitLab) + branch protection + signed commits",
        "Kubernetes RBAC (the controller's per-cluster permissions)",
        "Sigstore / Kyverno (image + commit verification)"
      ],
      "dataOwner": [
        "Platform / SRE — owns the GitOps controller and clusters",
        "AppSec — owns the manifest-repo trust + signing",
        "Security engineering — reviews the controller's RBAC blast radius"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Infrastructure as Code (IaC) controls."
      }
    },
    "badge": {
      "id": "iac-09-badge",
      "name": "Infrastructure as Code (IaC) Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "GitOps security controls",
      "location": "Infrastructure as Code (IaC)",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"GitOps security controls\" as a repeatable agentic workflow: pull the real evidence (The GitOps controller config (Argo CD / Flux) — the source repos it syncs, the target clusters, and the sync/self-heal/prune settings) with read-only agents, run the test against policy, and issue a defensible opinion on the Infrastructure as Code (IaC) control.",
      "year": 2025,
      "overview": [
        "The \"GitOps security controls\" sub-process is one of the controls an auditor must verify for Infrastructure as Code (IaC). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the GitOps controller config (Argo CD / Flux) — the source repos it syncs, the target clusters, and the sync/self-heal/prune settings, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Argo CD / Flux CD (the GitOps controller), Git manifest/config repos (GitHub/GitLab) + branch protection + signed commits, Kubernetes RBAC (the controller's per-cluster permissions) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Argo CD: argocd app list + argocd app get → source repo/revision, auto-sync + se` — read-only, against the systems of record.",
        "The test itself is specific. Verify the GitOps pull-based delivery model is secured end to end (git is the source of truth, the controller is the only thing that writes to the cluster). PASS: the GitOps repo is the single write path — direct `kubectl apply` to clusters is restricted; the manifest repo has branch protection + required review (and ideally signed/verified commits); the controller verifies commit signatures and only syncs trusted, pinned sources; self-heal/auto-sync reverts drift; the controller's cluster RBAC is least-privilege per target (no single agent with cluster-admin on every cluster); and the controller's own UI/API is authenticated + RBAC-scoped. Exceptions: unprotected manifest repo (any push reaches prod clusters), no commit verification, the controller holding cluster-admin across all clusters, self-heal disabled (so manual drift persists), and a publicly-exposed or weakly-authenticated Argo/Flux endpoint. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_gitops_security_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Argo CD / Flux CD (the GitOps controller) and Git manifest/config repos (GitHub/GitLab) + branch protection + signed commits (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_gitops_security_controls_mcp.py` to expose it to your agent — or `python 09_gitops_security_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Infrastructure as Code (IaC) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Argo CD / Flux CD (the GitOps controller) · Git manifest/config repos (GitHub/GitLab) + branch protection + signed commits",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"GitOps security controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Argo CD: argocd app list + argocd app get → source repo/revision, auto-sync + self-heal + prune flags per app\nFlux: flux get sources git / flux get kustomizations → source pinning + sync status; confirm `verify` (commit signature) is set\nkubectl get clusterrolebinding -o wide  → the Argo/Flux service account's RBAC (is it cluster-admin everywhere?)\nconfirm the manifest repo has branch protection + required review, and direct kubectl write to prod clusters is blocked (the controller is the only writer)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The GitOps controller config (Argo CD / Flux) — the source repos it syncs, the target clusters, and the sync/self-heal/prune settings.",
        "The test: Verify the GitOps pull-based delivery model is secured end to end (git is the source of truth, the controller is the only thing that writes to the cluster).",
        "Reconcile the systems of record (Argo CD / Flux CD (the GitOps controller), Git manifest/config repos (GitHub/GitLab) + branch protection + signed commits, Kubernetes RBAC (the controller's per-cluster permissions)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Argo CD syncs from a manifest repo with no branch protection (any developer can push a manifest straight to the production cluster), commit verification is off, self-heal is disabled so manual drift persists, and the single Argo service account holds cluster-admin on every connected cluster — one repo write or one controller compromise owns the whole fleet."
      ],
      "references": [
        {
          "title": "Argo CD — Security",
          "url": "https://argo-cd.readthedocs.io/en/stable/operator-manual/security/"
        },
        {
          "title": "CNCF / OpenGitOps Principles",
          "url": "https://opengitops.dev/"
        },
        {
          "title": "NSA/CISA Kubernetes Hardening Guide",
          "url": "https://media.defense.gov/2022/Aug/29/2003066362/-1/-1/0/CTR_KUBERNETES_HARDENING_GUIDANCE_1.2_20220829.PDF"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_gitops_security_controls_mcp.py",
          "url": "/audit-code/iac/09_gitops_security_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Infrastructure as Code (IaC) evidence for \"GitOps security controls\" (the gitops controller config (argo cd / flux) — the source repos it syncs, the target clusters, and the sync/self-heal/prune settings), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"GitOps security controls\" control for Infrastructure as Code (IaC) at AcmeCorp. THE TEST: Verify the GitOps pull-based delivery model is secured end to end (git is the source of truth, the controller is the only thing that writes to the cluster). PASS: the GitOps repo is the single write path — direct `kubectl apply` to clusters is restricted; the manifest repo has branch protection + required review (and ideally signed/verified commits); the controller verifies commit signatures and only syncs trusted, pinned sources; self-heal/auto-sync reverts drift; the controller's cluster RBAC is least-privilege per target (no single agent with cluster-admin on every cluster); and the controller's own UI/API is authenticated + RBAC-scoped. Exceptions: unprotected manifest repo (any push reaches prod clusters), no commit verification, the controller holding cluster-admin across all clusters, self-heal disabled (so manual drift persists), and a publicly-exposed or weakly-authenticated Argo/Flux endpoint. The evidence — The GitOps controller config (Argo CD / Flux) — the source repos it syncs, the target clusters, and the sync/self-heal/prune settings — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Argo CD / Flux CD (the GitOps controller) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Argo CD / Flux CD (the GitOps controller) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Argo CD / Flux CD (the GitOps controller); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Infrastructure as Code (IaC): \"GitOps security controls\" Audit Evidence\n\nThe test:\nVerify the GitOps pull-based delivery model is secured end to end (git is the source of truth, the controller is the only thing that writes to the cluster). PASS: the GitOps repo is the single write path — direct `kubectl apply` to clusters is restricted; the manifest repo has branch protection + required review (and ideally signed/verified commits); the controller verifies commit signatures and only syncs trusted, pinned sources; self-heal/auto-sync reverts drift; the controller's cluster RBAC is least-privilege per target (no single agent with cluster-admin on every cluster); and the controller's own UI/API is authenticated + RBAC-scoped. Exceptions: unprotected manifest repo (any push reaches prod clusters), no commit verification, the controller holding cluster-admin across all clusters, self-heal disabled (so manual drift persists), and a publicly-exposed or weakly-authenticated Argo/Flux endpoint.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items — The GitOps controller config (Argo CD / Flux) — the source repos it syncs, the target clusters, and the sync/self-heal/prune settings)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"GitOps security controls\",\n  \"domain\": \"Infrastructure as Code (IaC)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"GitOps security controls\" control must cover\n# fragment: gitops_security_controls_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "gitops_security_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"GitOps security controls\" sub-process of Infrastructure as Code (IaC)?",
          "options": [
            "Deploy and operate the gitops security controls control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the gitops security controls control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for gitops security controls against comparable organisations in the sector",
            "Obtain evidence that the gitops security controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iac-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"GitOps security controls\" matter to the broader Infrastructure as Code (IaC) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Infrastructure as Code (IaC)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Infrastructure as Code (IaC) estate",
            "It is a control other Infrastructure as Code (IaC) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Infrastructure as Code (IaC) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iac-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"GitOps security controls\" control?",
          "options": [
            "A point-in-time screenshot of one system's gitops security controls settings, captured during the walkthrough",
            "The The GitOps controller config (Argo CD / Flux) — the source repos it syncs, the target clusters, and the sync/self-heal/prune settings, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the gitops security controls control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's gitops security controls capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iac-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"GitOps security controls\"?",
          "options": [
            "From Argo CD / Flux CD (the GitOps controller) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how gitops security controls works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Argo CD / Flux CD (the GitOps controller)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iac-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"GitOps security controls\"?",
          "options": [
            "The external audit firm, since it is the party examining the gitops security controls control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the gitops security controls data is shared, so the accountability sits with no one in particular",
            "Platform / SRE — owns the GitOps controller and clusters, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Platform / SRE — owns the GitOps controller and clusters owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iac-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"GitOps security controls\", which part stays with the human auditor?",
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
          "id": "iac-09-q7",
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
          "id": "iac-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"GitOps security controls\", which of these is a realistic reportable finding?",
          "options": [
            "Argo CD syncs from a manifest repo with no branch protection (any developer can push a manifest straight to the production cluster), commit verification is off, self-heal is disabled so manual drift persists, and the single Argo service account holds cluster-admin on every connected cluster — one repo write or one controller compromise owns the whole fleet.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Argo CD syncs from a manifest repo with no branch protection (any developer can push a manifest straight to the production cluster), commit verification is off, self-heal is disabled so manual drift persists, and the single Argo service account holds cluster-admin on every connected cluster — one repo write or one controller compromise owns the whole fleet. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iac-09-q9",
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
          "id": "iac-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"GitOps security controls\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind gitops security controls, so there is no overlap",
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
