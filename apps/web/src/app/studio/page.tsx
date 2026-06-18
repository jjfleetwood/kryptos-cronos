"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// Studio — landing for the "Siempre Segundo" set: the novel, the literary
// screenplay, and the lean sell draft. All three are served by /api/studio and
// gated to Pro users (and admins, or share-link holders); this page gate-checks
// once (?check=1) and links into each reader. Nothing leaves the server for
// free/anonymous visitors.
// ─────────────────────────────────────────────────────────────────────────────

type State = "loading" | "ready" | "signin" | "pro" | "error";

function Gate({ icon, title, body, cta }: { icon: string; title: string; body: string; cta: { href: string; label: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1410 50%, #0d0a08 100%)" }}>
      <div className="text-center max-w-sm">
        <div className="text-6xl mb-4">{icon}</div>
        <h2 className="text-2xl font-black text-white mb-2">{title}</h2>
        <p className="text-gray-400 text-sm mb-6">{body}</p>
        <Link href={cta.href} className="inline-block px-5 py-2.5 rounded-xl font-bold text-sm text-black" style={{ background: "linear-gradient(90deg,#f59e0b,#fbbf24)" }}>
          {cta.label}
        </Link>
      </div>
    </div>
  );
}

function Card({ href, icon, title, sub, blurb }: { href: string; icon: string; title: string; sub: string; blurb: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-amber-500/20 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-colors hover:border-amber-400/50 hover:from-amber-500/[0.08]"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-[11px] font-mono font-bold text-amber-400/70 uppercase tracking-[0.25em] mb-1">{sub}</div>
      <h3 className="text-xl font-black text-white group-hover:text-amber-200 transition-colors">{title}</h3>
      <p className="text-[13px] leading-6 text-gray-400 mt-2">{blurb}</p>
      <span className="inline-block mt-4 text-amber-400 text-sm font-semibold group-hover:translate-x-0.5 transition-transform">Open →</span>
    </Link>
  );
}

export default function StudioPage() {
  const [state, setState] = useState<State>("loading");
  const [q, setQ] = useState(""); // share-token query suffix, carried into each reader

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("s") ?? "";
    const suffix = s ? `?s=${encodeURIComponent(s)}` : "";
    setQ(suffix);

    fetch(`/api/studio?check=1${s ? `&s=${encodeURIComponent(s)}` : ""}`)
      .then((r) => {
        if (r.status === 401) { setState("signin"); return; }
        if (r.status === 403) { setState("pro"); return; }
        if (!r.ok) { setState("error"); return; }
        setState("ready");
      })
      .catch(() => setState("error"));
  }, []);

  if (state === "signin") {
    return <Gate icon="🔑" title="Sign in to read" body="The Studio — Siempre Segundo — is available to Pro members. Sign in to continue." cta={{ href: "/login", label: "Sign in" }} />;
  }
  if (state === "pro") {
    return <Gate icon="⭐" title="A Pro feature" body="Siempre Segundo — the novel and the screenplays — is part of Kryptós CronOS Pro. Upgrade to read the whole set." cta={{ href: "/upgrade", label: "Upgrade to Pro" }} />;
  }
  if (state === "error") {
    return <Gate icon="📕" title="Couldn't load it" body="The Studio didn't load. Try refreshing." cta={{ href: "/studio", label: "Retry" }} />;
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1410 55%, #0d0a08 100%)" }}>
      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-10">
          <Link href="/" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">← Home</Link>
          <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-[0.3em]">Studio · Pro</span>
        </div>

        <header className="mb-10">
          <h1 className="text-5xl font-black text-white tracking-tight">Siempre Segundo</h1>
          <p className="text-amber-200/90 italic mt-3 text-lg">&ldquo;Always second.&rdquo;</p>
          <p className="text-gray-400 text-[15px] leading-7 mt-4 max-w-2xl">
            A multigenerational California saga — loosely based on Frank Arellanes, the
            Santa Cruz ballplayer who reached the 1918 Red Sox. Read it as a novel, as the
            literary screenplay, or as the lean sell draft.
          </p>
        </header>

        {state === "loading" ? (
          <div className="grid gap-5 sm:grid-cols-3 animate-pulse">
            {[0, 1, 2].map((i) => <div key={i} className="h-56 rounded-2xl bg-white/5" />)}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-3">
            <Card href={`/studio/prose${q}`} icon="📖" sub="Novel" title="The Novel" blurb="139 chapters of full prose — plus the chaptered narrated audiobook with a one-file .m4b download." />
            <Card href={`/studio/screenplay${q}`} icon="🎬" sub="Screenplay" title="Literary Draft" blurb="The screenplay as a read — full action, voice intact, Cold Open through Coda." />
            <Card href={`/studio/screenplay-sell${q}`} icon="📄" sub="Sell Draft" title="Spec / Sell" blurb="Lean industry-standard spec — same beats, action stripped to the screen. For agents and contests." />
          </div>
        )}
      </div>
    </div>
  );
}
