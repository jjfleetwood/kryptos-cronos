"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// ─────────────────────────────────────────────────────────────────────────────
// Studio · Prose — the novelized chapters (Prologue → Epilogue), Pro-gated.
// Listening is the ElevenLabs-narrated audiobook only: a per-chapter player that
// auto-advances, plus a single combined-file download for offline play in any app.
// (The browser SpeechSynthesis "read aloud" was removed — robotic, and unreliable
// on a locked phone.)
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
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline transition-colors">
      {children}
    </a>
  ),
};

type State = "loading" | "ready" | "signin" | "pro" | "error";
type Chapter = { i: number; title: string; url: string };

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

// Vercel Blob serves a forced-download (Content-Disposition: attachment) response
// when the URL carries ?download=1 — needed because the `download` attribute is
// ignored for cross-origin URLs.
function dl(u: string): string {
  return u.includes("?") ? `${u}&download=1` : `${u}?download=1`;
}

export default function StudioProsePage() {
  const [state, setState] = useState<State>("loading");
  const [md, setMd] = useState("");

  // Narrated audiobook: per-chapter Blob MP3s (+ a single combined file).
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [curCh, setCurCh] = useState(0);
  const [m4bUrl, setM4bUrl] = useState("");
  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  // Admins get a "Copy share link" control populated from /api/studio/share.
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("s") ?? "";
    const q = s ? `&s=${encodeURIComponent(s)}` : "";

    fetch(`/api/studio?prose=1${q}`)
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

    // The chaptered audiobook (manifest of per-chapter Blob MP3s + combined file).
    fetch(`/api/studio/audio?manifest=1${q}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d?.chapters?.length) setChapters(d.chapters);
        if (d?.m4b?.url) setM4bUrl(d.m4b.url);
      })
      .catch(() => {});

    // Admins: fetch the shareable link to copy. (403 for everyone else.)
    fetch("/api/studio/share").then((r) => (r.ok ? r.json() : null)).then((d) => { if (d?.url) setShareUrl(d.url); }).catch(() => {});
  }, []);

  // After the first interaction, moving to a new chapter loads and plays it
  // (Next/Prev/select and end-of-chapter auto-advance).
  useEffect(() => {
    if (!startedRef.current) return;
    const a = audioElRef.current;
    if (a) { a.load(); a.play().catch(() => {}); }
  }, [curCh]);

  function goChapter(n: number) {
    if (n < 0 || n >= chapters.length) return;
    startedRef.current = true;
    setCurCh(n);
  }

  if (state === "signin") {
    return <Gate icon="🔑" title="Sign in to listen" body="Siempre Segundo — the novel — is available to Pro members. Sign in to continue." cta={{ href: "/login", label: "Sign in" }} />;
  }
  if (state === "pro") {
    return <Gate icon="⭐" title="A Pro feature" body="The Siempre Segundo novel is part of Kryptós CronOS Pro. Upgrade to read and listen." cta={{ href: "/upgrade", label: "Upgrade to Pro" }} />;
  }
  if (state === "error") {
    return <Gate icon="📕" title="Couldn't load it" body="The manuscript didn't load. Try refreshing." cta={{ href: "/studio/prose", label: "Retry" }} />;
  }

  const hasAudio = chapters.length > 0 || !!m4bUrl;

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1410 55%, #0d0a08 100%)" }}>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <Link href="/studio" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">← Studio</Link>
          <div className="flex items-center gap-3">
            {shareUrl && (
              <button
                onClick={() => { navigator.clipboard?.writeText(shareUrl); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
                className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 border border-amber-500/30 rounded px-2 py-1 transition-colors"
                title={shareUrl}
              >
                {copied ? "✓ Copied" : "🔗 Copy share link"}
              </button>
            )}
            <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-[0.3em]">Prose · Pro</span>
          </div>
        </div>

        {/* Audiobook control bar */}
        {state === "ready" && hasAudio && (
          <div className="sticky top-0 z-10 -mx-4 px-4 py-3 mb-8 backdrop-blur bg-[#0d0a08]/80 border-b border-amber-500/15">
            {chapters.length > 0 && (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">🎙 Narrated — chapter {curCh + 1} / {chapters.length}</span>
                  <a href={dl(chapters[curCh]?.url ?? "")} className="text-[11px] text-amber-400 hover:text-amber-300 underline">download this chapter</a>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <button onClick={() => goChapter(curCh - 1)} disabled={curCh === 0} className="px-2.5 py-1.5 rounded-lg text-sm font-semibold text-gray-300 border border-white/15 hover:border-white/30 disabled:opacity-30">‹ Prev</button>
                  <select
                    value={curCh}
                    onChange={(e) => goChapter(Number(e.target.value))}
                    className="flex-1 min-w-0 bg-black/40 border border-white/15 rounded px-2 py-1.5 text-sm text-gray-200"
                  >
                    {chapters.map((c, idx) => <option key={c.i} value={idx}>{idx + 1}. {c.title}</option>)}
                  </select>
                  <button onClick={() => goChapter(curCh + 1)} disabled={curCh >= chapters.length - 1} className="px-2.5 py-1.5 rounded-lg text-sm font-semibold text-gray-300 border border-white/15 hover:border-white/30 disabled:opacity-30">Next ›</button>
                </div>
                <audio
                  ref={audioElRef}
                  controls
                  preload="none"
                  src={chapters[curCh]?.url}
                  onEnded={() => goChapter(curCh + 1)}
                  className="w-full h-9"
                >
                  Your browser doesn&apos;t support audio playback.
                </audio>
                <p className="mt-1 text-[11px] text-gray-500">Natural voice, by chapter — auto-advances to the next, plays screen-off over Bluetooth, scrubbing/resume work.</p>
              </>
            )}

            {m4bUrl && (
              <div className={`${chapters.length > 0 ? "mt-3 pt-3 border-t border-white/10" : ""} flex flex-wrap items-center gap-3`}>
                <a
                  href={dl(m4bUrl)}
                  className="px-3 py-2 rounded-lg font-bold text-sm text-black"
                  style={{ background: "linear-gradient(90deg,#f59e0b,#fbbf24)" }}
                >
                  ⬇ Download the audiobook (.m4b)
                </a>
                <span className="text-[11px] text-gray-500">One file · all 139 chapters · open in Apple Books or any audiobook app — real chapter list &amp; auto-resume.</span>
              </div>
            )}
          </div>
        )}

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
