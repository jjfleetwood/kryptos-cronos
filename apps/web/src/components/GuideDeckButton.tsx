"use client";

import { useEffect, useState } from "react";

/** Admin-only "Generate deck" action for a markdown field guide. Mirrors the
 *  /decks generator's access model — invisible to non-admins, 403-safe server-side. */
export default function GuideDeckButton({ guide, label = "Generate deck" }: { guide: string; label?: string }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setIsAdmin(!!d?.isAdmin))
      .catch(() => setIsAdmin(false));
  }, []);

  if (!isAdmin) return null;

  async function generate() {
    setBusy(true);
    setErr(null);
    try {
      const r = await fetch("/api/export/pptx", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ guide }),
      });
      if (!r.ok) {
        setErr(r.status === 403 ? "Admin access required." : `Failed (${r.status}).`);
        return;
      }
      const blob = await r.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${guide}-guide.pptx`;
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
    <div className="flex items-center gap-3">
      <button
        onClick={generate}
        disabled={busy}
        className="text-[11px] font-mono font-bold text-violet-200 hover:text-white transition-colors whitespace-nowrap border border-violet-400/40 bg-violet-500/10 hover:bg-violet-500/20 px-3 py-1.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {busy ? "Generating…" : `📊 ${label}`}
      </button>
      {err && <span className="text-[11px] text-red-400">{err}</span>}
    </div>
  );
}
