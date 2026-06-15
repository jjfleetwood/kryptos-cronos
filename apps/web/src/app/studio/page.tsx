"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// ─────────────────────────────────────────────────────────────────────────────
// Studio — home for the "Siempre Segundo" screenplay + novel. The manuscript is
// served by /api/studio, gated to Pro users (and admins): the prose never leaves
// the server for free/anonymous visitors. This page renders what that returns.
// ─────────────────────────────────────────────────────────────────────────────

const components: Components = {
  h1: ({ children }) => <h1 className="text-4xl font-black text-white mt-2 mb-3 tracking-tight">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl font-black text-amber-300 mt-12 mb-4 border-b border-amber-500/20 pb-2">{children}</h2>,
  h3: ({ children }) => <h3 className="text-sm font-bold text-amber-400/90 uppercase tracking-[0.15em] mt-8 mb-3">{children}</h3>,
  p: ({ children }) => <p className="text-[15px] leading-7 text-gray-300 mb-4">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-6 space-y-2 marker:text-amber-500/60 text-[15px] leading-7 text-gray-300 mb-5">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2 text-[15px] leading-7 text-gray-300 mb-5">{children}</ol>,
  li: ({ children }) => <li className="leading-7">{children}</li>,
  strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
  em: ({ children }) => <em className="text-amber-100/90 italic">{children}</em>,
  hr: () => <hr className="border-white/10 my-10" />,
  blockquote: ({ children }) => (
    <blockquote className="my-6 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-600/15 to-transparent p-5 [&>p]:mb-0 [&>p]:text-amber-100">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-gray-300 bg-black/40 border border-white/10 rounded-xl p-5 overflow-x-auto mb-5">
      {children}
    </pre>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.startsWith("language-") || String(children).includes("\n");
    return isBlock ? (
      <code className="text-gray-300 font-mono text-[13px]">{children}</code>
    ) : (
      <code className="bg-white/10 text-amber-200 px-1.5 py-0.5 rounded text-[13px] font-mono">{children}</code>
    );
  },
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline transition-colors">
      {children}
    </a>
  ),
};

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

export default function StudioPage() {
  const [state, setState] = useState<State>("loading");
  const [md, setMd] = useState("");

  useEffect(() => {
    fetch("/api/studio")
      .then((r) => {
        if (r.status === 401) { setState("signin"); return null; }
        if (r.status === 403) { setState("pro"); return null; }
        if (!r.ok) { setState("error"); return null; }
        return r.text();
      })
      .then((text) => {
        if (text == null) return;
        setMd(text);
        setState("ready");
      })
      .catch(() => setState("error"));
  }, []);

  if (state === "signin") {
    return <Gate icon="🔑" title="Sign in to read" body="The Studio manuscript — Siempre Segundo — is available to Pro members. Sign in to continue." cta={{ href: "/login", label: "Sign in" }} />;
  }
  if (state === "pro") {
    return <Gate icon="⭐" title="A Pro feature" body="Siempre Segundo — the screenplay and the novel — is part of Kryptós CronOS Pro. Upgrade to read the whole manuscript." cta={{ href: "/upgrade", label: "Upgrade to Pro" }} />;
  }
  if (state === "error") {
    return <Gate icon="📕" title="Couldn't load it" body="The manuscript didn't load. Try refreshing." cta={{ href: "/studio", label: "Retry" }} />;
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1410 55%, #0d0a08 100%)" }}>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">← Home</Link>
          <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-[0.3em]">Studio · Pro</span>
        </div>

        {state === "loading" ? (
          <div className="space-y-3 animate-pulse pt-8">
            <div className="h-10 bg-white/5 rounded w-2/3" />
            <div className="h-4 bg-white/5 rounded w-full" />
            <div className="h-4 bg-white/5 rounded w-5/6" />
            <div className="h-4 bg-white/5 rounded w-3/4" />
          </div>
        ) : (
          <article className="min-w-0">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
              {md}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </div>
  );
}
