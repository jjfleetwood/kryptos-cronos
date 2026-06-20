#!/usr/bin/env python3
"""Read-only MCP server — Infrastructure as Code (IaC): "Change management and peer review" audit evidence.

THE TEST
Trace every infrastructure change in the period from running state back to a reviewed, approved pull request. PASS: each `terraform apply` / CloudFormation stack update maps to a merged PR that had at least one independent CODEOWNER approval before merge; the plan in the PR matches what was applied; direct console/CLI changes are blocked or exception-tracked; and the author can't self-approve their own prod change. Exceptions: applies with no corresponding PR ('clickops' or laptop applies), PRs self-approved or merged with no review, and a divergence between the reviewed plan and what actually ran.

ARTIFACT (what _gather() pulls)
    The pull-request history for the IaC repos — every infrastructure change as a PR with its reviewers and approval timestamps

REAL SOURCES / COMMANDS to wire in place of the fixtures (read-only):
    GitHub: gh api repos/{org}/{repo}/branches/main/protection  (required reviews, CODEOWNERS, no self-review)
    HCP Terraform: GET /api/v2/workspaces/{id}/runs  → each apply, its source PR (commit SHA) and the user who confirmed it
    Atlantis: the PR-comment apply trail (plan → approve → apply) per repo
    AWS:  CloudTrail lookup for ConsoleLogin + non-Terraform-principal mutating events on managed resources (out-of-band changes)

This server gathers the in-scope inventory and the observed control state, evaluates
each item against policy, and reports the exceptions with a PASS / EXCEPTIONS /
MATERIAL-GAP opinion. READ-ONLY: it lists and reports, never changes state — the hard
requirement for audit tooling.

  pip install "mcp[cli]"
  mcp run 01_change_management_and_peer_review_mcp.py                 # expose to an agent
  python 01_change_management_and_peer_review_mcp.py --selftest       # reproduce findings against fixtures, offline
"""
from __future__ import annotations
import json, sys
from dataclasses import dataclass, asdict

EXCEPTION_THRESHOLD = 3  # auditor-set policy: >3 exceptions => material gap

# ---- Offline fixtures (replace with read-only source API calls) ----------------
_FIXTURE_INVENTORY = [
    {"id": "item-001", "in_scope": True},
    {"id": "item-002", "in_scope": True},
    {"id": "item-003", "in_scope": True},
    {"id": "item-004", "in_scope": True},
]
_FIXTURE_STATE = {
    "item-001": True,
    "item-002": False,   # exception: control not applied
    "item-003": False,   # exception: drifted from baseline
    "item-004": True,
}

@dataclass
class Item:
    id: str
    in_scope: bool
    control_applied: bool
    @property
    def compliant(self) -> bool:
        return (not self.in_scope) or self.control_applied

def _gather() -> list[Item]:
    """Read-only: pull in-scope inventory + observed state from systems of record."""
    state = _FIXTURE_STATE
    return [Item(i["id"], bool(i.get("in_scope")), bool(state.get(i["id"], False)))
            for i in _FIXTURE_INVENTORY]

def _evaluate(items: list[Item]) -> list[dict]:
    return [{"id": i.id, "compliant": i.compliant} for i in items if i.in_scope]

# ---- MCP tools -----------------------------------------------------------------
def build_inventory() -> list[dict]:
    """List every in-scope item the "Change management and peer review" control must cover."""
    return [asdict(i) for i in _gather()]

def find_exceptions() -> list[str]:
    """Return in-scope items where the control is missing or not operating."""
    return [r["id"] for r in _evaluate(_gather()) if not r["compliant"]]

def coverage_report() -> dict:
    """The audit deliverable: totals, exceptions, and the opinion."""
    rows = _evaluate(_gather())
    exceptions = [r["id"] for r in rows if not r["compliant"]]
    opinion = ("PASS" if not exceptions
               else "EXCEPTIONS" if len(exceptions) <= EXCEPTION_THRESHOLD
               else "MATERIAL GAP")
    return {
        "domain": "Infrastructure as Code (IaC)",
        "control": "Change management and peer review",
        "in_scope": len(rows),
        "compliant": len(rows) - len(exceptions),
        "exceptions": exceptions,
        "opinion": opinion,
    }

# ---- MCP wiring (guarded so --selftest runs without the dependency) ------------
def _register():
    from mcp.server.fastmcp import FastMCP
    mcp = FastMCP("IAC Change management and peer review Audit (read-only)")
    mcp.tool()(build_inventory)
    mcp.tool()(find_exceptions)
    mcp.tool()(coverage_report)
    return mcp

if __name__ == "__main__":
    if "--selftest" in sys.argv:
        print(json.dumps(coverage_report(), indent=2))
    else:
        _register().run()
