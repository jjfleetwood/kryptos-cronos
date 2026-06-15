"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// ─────────────────────────────────────────────────────────────────────────────
// Studio · Prose — the novelized chapters only (Prologue → Epilogue), with no
// planning scaffolding. Served by /api/studio?prose=1, gated to Pro (and admins).
// Built for car/commute listening: a "Read aloud" button drives the browser's
// SpeechSynthesis. (On iOS Safari, screen-lock can pause web speech — fall back
// to the OS "Speak Screen": two-finger swipe down from the top of this page.)
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

// Strip Markdown to plain narration text for the speech engine: headings keep
// their words (they read as chapter dividers), emphasis/quote/link syntax is
// removed, and blank lines collapse.
function mdToSpeech(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")          // drop any fenced blocks
    .replace(/^#{1,6}\s+/gm, "")               // heading markers → bare text
    .replace(/^\s*>\s?/gm, "")                 // blockquote markers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")  // links → label
    .replace(/[*_`]/g, "")                      // emphasis/code marks
    .replace(/^\s*[-–—]\s*$/gm, " ")           // lone rule/dash lines
    .replace(/\n{2,}/g, "\n\n")
    .trim();
}

// Break text into ~short utterances at sentence boundaries. Small chunks dodge
// the Chrome long-utterance stall and let us chain reliably via onend.
function chunkText(text: string): string[] {
  const pieces = text.split(/\n+/).flatMap((para) => para.match(/[^.!?]+[.!?]*\s*/g) ?? [para]);
  const chunks: string[] = [];
  let buf = "";
  for (const p of pieces) {
    if ((buf + p).length > 240 && buf) {
      chunks.push(buf.trim());
      buf = "";
    }
    buf += p;
  }
  if (buf.trim()) chunks.push(buf.trim());
  return chunks.filter((c) => c.length > 0);
}

export default function StudioProsePage() {
  const [state, setState] = useState<State>("loading");
  const [md, setMd] = useState("");

  // Speech state
  const [speech, setSpeech] = useState<"idle" | "playing" | "paused">("idle");
  const [rate, setRate] = useState(1);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceUri, setVoiceUri] = useState<string>("");
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  // Pre-generated MP3 (ElevenLabs) — natural voice, plays screen-off over
  // Bluetooth. Present only after the audiobook has been generated.
  const [hasMp3, setHasMp3] = useState(false);

  const chunksRef = useRef<string[]>([]);
  const idxRef = useRef(0);
  const stoppedRef = useRef(false);
  const rateRef = useRef(1);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    rateRef.current = rate;
  }, [rate]);

  useEffect(() => {
    fetch("/api/studio?prose=1")
      .then((r) => {
        if (r.status === 401) { setState("signin"); return null; }
        if (r.status === 403) { setState("pro"); return null; }
        if (!r.ok) { setState("error"); return null; }
        return r.text();
      })
      .then((text) => {
        if (text == null) return;
        setMd(text);
        chunksRef.current = chunkText(mdToSpeech(text));
        setState("ready");
      })
      .catch(() => setState("error"));
    // Detect whether the natural-voice MP3 has been generated.
    fetch("/api/studio/audio", { method: "HEAD" }).then((r) => setHasMp3(r.ok)).catch(() => {});
  }, []);

  // Load voices (async on most browsers).
  useEffect(() => {
    if (!supported) return;
    const load = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length) {
        setVoices(v);
        if (!voiceRef.current) {
          const preferred = v.find((x) => /en[-_]US/i.test(x.lang)) ?? v.find((x) => /^en/i.test(x.lang)) ?? v[0];
          voiceRef.current = preferred;
          setVoiceUri(preferred?.voiceURI ?? "");
        }
      }
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      window.speechSynthesis.cancel();
    };
  }, [supported]);

  function speakFrom(i: number) {
    const synth = window.speechSynthesis;
    if (i >= chunksRef.current.length) { setSpeech("idle"); idxRef.current = 0; return; }
    idxRef.current = i;
    const u = new SpeechSynthesisUtterance(chunksRef.current[i]);
    if (voiceRef.current) u.voice = voiceRef.current;
    u.rate = rateRef.current;
    u.onend = () => { if (!stoppedRef.current) speakFrom(i + 1); };
    u.onerror = () => { if (!stoppedRef.current) speakFrom(i + 1); };
    synth.speak(u);
  }

  function play() {
    if (!supported) return;
    const synth = window.speechSynthesis;
    if (speech === "paused") { synth.resume(); setSpeech("playing"); return; }
    stoppedRef.current = false;
    synth.cancel();
    setSpeech("playing");
    speakFrom(idxRef.current);
  }
  function pause() {
    if (!supported) return;
    window.speechSynthesis.pause();
    setSpeech("paused");
  }
  function stop() {
    if (!supported) return;
    stoppedRef.current = true;
    window.speechSynthesis.cancel();
    idxRef.current = 0;
    setSpeech("idle");
  }
  function restart() {
    if (!supported) return;
    stoppedRef.current = false;
    window.speechSynthesis.cancel();
    idxRef.current = 0;
    setSpeech("playing");
    speakFrom(0);
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

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1410 55%, #0d0a08 100%)" }}>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <Link href="/studio" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">← Studio</Link>
          <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-[0.3em]">Prose · Pro</span>
        </div>

        {/* Read-aloud control bar */}
        {state === "ready" && (supported || hasMp3) && (
          <div className="sticky top-0 z-10 -mx-4 px-4 py-3 mb-8 backdrop-blur bg-[#0d0a08]/80 border-b border-amber-500/15">
            {supported && (
            <>
            <div className="flex flex-wrap items-center gap-2">
              {speech !== "playing" ? (
                <button onClick={play} className="px-4 py-2 rounded-lg font-bold text-sm text-black" style={{ background: "linear-gradient(90deg,#f59e0b,#fbbf24)" }}>
                  ▶ {speech === "paused" ? "Resume" : "Read aloud"}
                </button>
              ) : (
                <button onClick={pause} className="px-4 py-2 rounded-lg font-bold text-sm text-black bg-amber-300">⏸ Pause</button>
              )}
              <button onClick={stop} className="px-3 py-2 rounded-lg font-semibold text-sm text-gray-300 border border-white/15 hover:border-white/30">⏹ Stop</button>
              <button onClick={restart} className="px-3 py-2 rounded-lg font-semibold text-sm text-gray-300 border border-white/15 hover:border-white/30">↺ Start over</button>

              <label className="ml-auto flex items-center gap-2 text-xs text-gray-400">
                Speed
                <select value={rate} onChange={(e) => setRate(Number(e.target.value))} className="bg-black/40 border border-white/15 rounded px-2 py-1 text-gray-200">
                  {[0.8, 0.9, 1, 1.1, 1.25, 1.5].map((r) => <option key={r} value={r}>{r}×</option>)}
                </select>
              </label>
              {voices.length > 0 && (
                <label className="flex items-center gap-2 text-xs text-gray-400">
                  Voice
                  <select
                    value={voiceUri}
                    onChange={(e) => {
                      setVoiceUri(e.target.value);
                      voiceRef.current = voices.find((v) => v.voiceURI === e.target.value) ?? null;
                    }}
                    className="bg-black/40 border border-white/15 rounded px-2 py-1 text-gray-200 max-w-[160px]"
                  >
                    {voices.map((v) => <option key={v.voiceURI} value={v.voiceURI}>{v.name}</option>)}
                  </select>
                </label>
              )}
            </div>
            <p className="mt-2 text-[11px] text-gray-500 leading-snug">
              ~42k words (≈4.5 hrs). If web playback pauses when your phone locks, use your phone&apos;s OS &ldquo;Speak Screen&rdquo; on this page (iPhone: two-finger swipe down from the top) — it keeps reading screen-off over Bluetooth.
            </p>
            </>
            )}

            {hasMp3 && (
              <div className="mt-3 pt-3 border-t border-white/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">🎙 Narrated MP3</span>
                  <a href="/api/studio/audio" download="siempre-segundo.mp3" className="text-[11px] text-amber-400 hover:text-amber-300 underline">download</a>
                </div>
                <audio controls preload="none" src="/api/studio/audio" className="w-full h-9">
                  Your browser doesn&apos;t support audio playback.
                </audio>
                <p className="mt-1 text-[11px] text-gray-500">Natural voice — plays screen-off over Bluetooth, and scrubbing/resume work.</p>
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
