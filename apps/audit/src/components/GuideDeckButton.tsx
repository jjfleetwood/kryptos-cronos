"use client";

import { useState } from "react";

// "Generate deck" for the field guide. The whole app is owner-only (edge gate),
// so no per-button auth check is needed.
export default function GuideDeckButton() {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function generate() {
    setBusy(true);
    setErr(null);
    try {
      const r = await fetch("/api/guide-deck", { method: "POST" });
      if (!r.ok) {
        setErr(`Failed (${r.status}).`);
        return;
      }
      const blob = await r.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "agent-risk-audit-guide.pptx";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setErr("Failed — try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <button
        onClick={generate}
        disabled={busy}
        style={{
          fontSize: 12,
          fontWeight: 700,
          fontFamily: "ui-monospace, monospace",
          color: "#ddd6fe",
          border: "1px solid rgba(167,139,250,0.4)",
          background: "rgba(124,58,237,0.12)",
          padding: "8px 14px",
          borderRadius: 10,
          cursor: busy ? "default" : "pointer",
          opacity: busy ? 0.5 : 1,
        }}
      >
        {busy ? "Generating…" : "📊 Generate deck"}
      </button>
      {err && <span style={{ fontSize: 12, color: "#f87171" }}>{err}</span>}
    </div>
  );
}
