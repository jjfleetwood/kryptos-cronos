#!/usr/bin/env python3
"""Read-only MCP server — Cloud Platform & SaaS (Software-as-a-Service): "Cloud IAM and privileged roles" audit evidence.

THE TEST
Assess cloud identity and privilege. PASS: human access is federated via SSO (few/no long-lived IAM users or access keys); privileged roles are least-privilege and just-in-time (e.g. Entra PIM), not standing; root/break-glass is MFA-protected, sealed, and alerts on use; access keys are rotated and unused permissions removed. Exceptions: long-lived IAM users with access keys, standing Administrator/Owner, wildcard `*:*` policies, root with no MFA or in routine use, and access keys unused or un-rotated for ages.

ARTIFACT (what _gather() pulls)
    The cloud IAM principal inventory (users, roles, service principals) + their effective permissions

REAL SOURCES / COMMANDS to wire in place of the fixtures (read-only):
    aws iam list-users + list-access-keys (key age, last-used); flag long-lived keys
    find policies granting Action:'*' on Resource:'*' (wildcard admin)
    IAM Access Analyzer 'unused access' findings + Access Advisor last-accessed services
    Entra PIM: standing vs eligible role assignments; confirm root/global-admin MFA + usage

This server gathers the in-scope inventory and the observed control state, evaluates
each item against policy, and reports the exceptions with a PASS / EXCEPTIONS /
MATERIAL-GAP opinion. READ-ONLY: it lists and reports, never changes state — the hard
requirement for audit tooling.

  pip install "mcp[cli]"
  mcp run 02_cloud_iam_and_privileged_roles_mcp.py                 # expose to an agent
  python 02_cloud_iam_and_privileged_roles_mcp.py --selftest       # reproduce findings against fixtures, offline
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
    """List every in-scope item the "Cloud IAM and privileged roles" control must cover."""
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
        "domain": "Cloud Platform & SaaS (Software-as-a-Service)",
        "control": "Cloud IAM and privileged roles",
        "in_scope": len(rows),
        "compliant": len(rows) - len(exceptions),
        "exceptions": exceptions,
        "opinion": opinion,
    }

# ---- MCP wiring (guarded so --selftest runs without the dependency) ------------
def _register():
    from mcp.server.fastmcp import FastMCP
    mcp = FastMCP("CLD Cloud IAM and privileged roles Audit (read-only)")
    mcp.tool()(build_inventory)
    mcp.tool()(find_exceptions)
    mcp.tool()(coverage_report)
    return mcp

if __name__ == "__main__":
    if "--selftest" in sys.argv:
        print(json.dumps(coverage_report(), indent=2))
    else:
        _register().run()
