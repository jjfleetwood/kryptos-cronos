#!/usr/bin/env python3
"""Read-only MCP server — System Implementation — AI (Artificial Intelligence): "Regulatory and legal compliance for AI" audit evidence.

THE TEST
Verify the AI system meets its regulatory + legal obligations. PASS: applicable regulation is mapped (EU AI Act tier obligations, GDPR Art. 22, sector law), conformity evidence exists for high-risk AI (risk mgmt, logging, technical docs, registration, disclosure), lawful basis + IP/licensing for data/model is established with data-subject rights handled, and legal signs off. Exceptions: no regulatory mapping, high-risk AI deployed with no conformity evidence/registration, missing automated-decision disclosure or appeal, unlawful data/IP use, and no legal sign-off.

ARTIFACT (what _gather() pulls)
    The regulatory mapping for this AI system (EU AI Act obligations for its risk tier, GDPR automated-decision/Art. 22, sector rules — e.g. ECOA/FCRA for credit, HIPAA for health)

REAL SOURCES / COMMANDS to wire in place of the fixtures (read-only):
    regulatory mapping: EU AI Act tier obligations + GDPR Art. 22 + sector law (ECOA/FCRA/HIPAA)
    conformity evidence (high-risk: risk mgmt, logging, technical docs, registration, disclosure)
    lawful basis + IP/licensing for data/model + data-subject rights handling
    legal sign-off that the deployed system meets obligations

This server gathers the in-scope inventory and the observed control state, evaluates
each item against policy, and reports the exceptions with a PASS / EXCEPTIONS /
MATERIAL-GAP opinion. READ-ONLY: it lists and reports, never changes state — the hard
requirement for audit tooling.

  pip install "mcp[cli]"
  mcp run 09_regulatory_and_legal_compliance_for_ai_mcp.py                 # expose to an agent
  python 09_regulatory_and_legal_compliance_for_ai_mcp.py --selftest       # reproduce findings against fixtures, offline
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
    """List every in-scope item the "Regulatory and legal compliance for AI" control must cover."""
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
        "domain": "System Implementation — AI (Artificial Intelligence)",
        "control": "Regulatory and legal compliance for AI",
        "in_scope": len(rows),
        "compliant": len(rows) - len(exceptions),
        "exceptions": exceptions,
        "opinion": opinion,
    }

# ---- MCP wiring (guarded so --selftest runs without the dependency) ------------
def _register():
    from mcp.server.fastmcp import FastMCP
    mcp = FastMCP("SIA Regulatory and legal compliance for AI Audit (read-only)")
    mcp.tool()(build_inventory)
    mcp.tool()(find_exceptions)
    mcp.tool()(coverage_report)
    return mcp

if __name__ == "__main__":
    if "--selftest" in sys.argv:
        print(json.dumps(coverage_report(), indent=2))
    else:
        _register().run()
