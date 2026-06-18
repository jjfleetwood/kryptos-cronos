"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// ─────────────────────────────────────────────────────────────────────────────
// Studio · Screenplay — renders a "Siempre Segundo" screenplay (literary or sell)
// served by /api/studio?doc=…, Pro-gated. A right-hand act/scene index jumps to
// any act heading or INT./EXT. scene. Scenes live inside ``` fences in the source;
// we split each fence on its sluglines so every scene gets its own anchor.
// ─────────────────────────────────────────────────────────────────────────────

type State = "loading" | "ready" | "signin" | "pro" | "error";
type TocItem = { id: string; label: string; level: "act" | "scene" };

type Block =
  | { kind: "heading"; level: number; id: string; text: string }
  | { kind: "md"; text: string }
  | { kind: "scene"; id: string; slug: string; body: string }
  | { kind: "screen"; body: string }; // fenced screenplay text with no slugline (FADE IN, TITLE…)

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const SLUG_RE = /^(INT|EXT|INT\/EXT|EXT\/INT|I\/E)[.\/]/;

// A readable scene label for the index: drop the INT./EXT. prefix and the trailing
// time-of-day segment, leaving the location.
function sceneLabel(slug: string): string {
  let s = slug.replace(SLUG_RE, "").trim();
  const parts = s.split(/\s+--\s+/);
  if (parts.length > 1) {
    const last = parts[parts.length - 1];
    if (/\b(DAY|NIGHT|DAWN|DUSK|MORNING|EVENING|AFTERNOON|CONTINUOUS|LATER|MOMENTS|SAME|PRESENT|NIGHTFALL|SUNSET|SUNRISE|MAGIC HOUR)\b/i.test(last) || /\(/.test(last)) {
      parts.pop();
    }
    s = parts.join(" — ");
  }
  return s || slug;
}

// Parse the screenplay markdown into an ordered block list + the act/scene index.
function parse(md: string): { blocks: Block[]; toc: TocItem[] } {
  const lines = md.split("\n");
  const blocks: Block[] = [];
  const toc: TocItem[] = [];
  let mdBuf: string[] = [];
  let sceneN = 0;

  const flushMd = () => {
    if (mdBuf.join("").trim()) blocks.push({ kind: "md", text: mdBuf.join("\n") });
    mdBuf = [];
  };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (/^```/.test(line)) {
      flushMd();
      i++;
      const fence: string[] = [];
      while (i < lines.length && !/^```/.test(lines[i])) { fence.push(lines[i]); i++; }
      i++; // skip closing fence

      // Split the fence into scenes at slug lines; text before the first slug is
      // free screenplay text (FADE IN, a stray TITLE card, etc.).
      let cur: { slug: string; body: string[] } | null = null;
      let pre: string[] = [];
      const flushScene = () => {
        if (cur) {
          const id = `sc-${++sceneN}`;
          blocks.push({ kind: "scene", id, slug: cur.slug, body: cur.body.join("\n") });
          toc.push({ id, label: sceneLabel(cur.slug), level: "scene" });
          cur = null;
        }
      };
      const flushPre = () => {
        if (pre.join("").trim()) blocks.push({ kind: "screen", body: pre.join("\n") });
        pre = [];
      };
      for (const ln of fence) {
        if (SLUG_RE.test(ln.trim())) {
          if (cur) flushScene();
          else flushPre();
          cur = { slug: ln.trim(), body: [] };
        } else if (cur) {
          cur.body.push(ln);
        } else {
          pre.push(ln);
        }
      }
      flushScene();
      flushPre();
      continue;
    }

    const h = /^(#{1,6})\s+(.*\S)\s*$/.exec(line);
    if (h) {
      flushMd();
      const level = h[1].length;
      const text = h[2].replace(/[*_`]/g, "").trim();
      const id = slugify(text);
      blocks.push({ kind: "heading", level, id, text });
      if (level <= 3) toc.push({ id, label: text, level: "act" });
      i++;
      continue;
    }

    mdBuf.push(line);
    i++;
  }
  flushMd();
  return { blocks, toc };
}

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

const mdComponents: Components = {
  h1: ({ children }) => <h1 className="text-4xl font-black text-white mt-2 mb-3 tracking-tight">{children}</h1>,
  p: ({ children }) => <p className="text-[15px] leading-7 text-gray-400 italic mb-4">{children}</p>,
  em: ({ children }) => <em className="text-amber-100/90 italic">{children}</em>,
  strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
  hr: () => <hr className="border-white/10 my-8" />,
};

export default function StudioScreenplay({ doc, kind }: { doc: "screenplay" | "screenplay-sell"; kind: "literary" | "sell" }) {
  const [state, setState] = useState<State>("loading");
  const [md, setMd] = useState("");

  const { blocks, toc } = useMemo(() => parse(md), [md]);

  const title = kind === "literary" ? "Screenplay" : "Screenplay · Sell Draft";
  const subtitle = kind === "literary" ? "The literary draft — the read." : "Lean industry-standard spec — agents, contests, coverage.";

  useEffect(() => {
    fetch(`/api/studio?doc=${doc}`)
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
  }, [doc]);

  if (state === "signin") {
    return <Gate icon="🔑" title="Sign in to read" body="Siempre Segundo — the screenplay — is available to Pro members. Sign in to continue." cta={{ href: "/login", label: "Sign in" }} />;
  }
  if (state === "pro") {
    return <Gate icon="⭐" title="A Pro feature" body="The Siempre Segundo screenplay is part of Kryptós CronOS Pro. Upgrade to read the whole draft." cta={{ href: "/upgrade", label: "Upgrade to Pro" }} />;
  }
  if (state === "error") {
    return <Gate icon="📕" title="Couldn't load it" body="The screenplay didn't load. Try refreshing." cta={{ href: "/studio", label: "Back to Studio" }} />;
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1410 55%, #0d0a08 100%)" }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <Link href="/studio" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">← Studio</Link>
          <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-[0.3em]">Screenplay</span>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-black text-white tracking-tight">Siempre Segundo</h1>
          <p className="text-amber-300/90 text-sm font-semibold mt-1">{title}</p>
          <p className="text-gray-500 text-[13px] mt-0.5">{subtitle}</p>
        </div>

        <div className="lg:flex lg:gap-10">
          <div className="min-w-0 max-w-3xl mx-auto lg:mx-0 lg:flex-1">
            {/* Mobile act/scene index */}
            {state === "ready" && toc.length > 0 && (
              <details className="lg:hidden mb-6 rounded-xl border border-amber-500/20 bg-black/30">
                <summary className="cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden flex items-center justify-between px-4 py-3 text-[12px] font-bold uppercase tracking-[0.2em] text-amber-400/90">
                  Scenes
                  <span className="text-amber-500/60">▾</span>
                </summary>
                <ul className="max-h-80 overflow-y-auto px-4 pb-4 space-y-0.5 text-[13px] leading-snug">
                  {toc.map((t, i) => (
                    <li key={`m-${i}-${t.id}`}>
                      <a
                        href={`#${t.id}`}
                        onClick={(e) => e.currentTarget.closest("details")?.removeAttribute("open")}
                        className={t.level === "act"
                          ? "block mt-3 mb-1 text-amber-300 font-bold uppercase tracking-wide text-[11px]"
                          : "block py-1 pl-3 text-gray-400 active:text-amber-300 border-l border-white/10 truncate"}
                      >
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
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
                {blocks.map((b, i) => {
                  if (b.kind === "heading") {
                    if (b.level <= 2) {
                      return <h2 key={i} id={b.id} className="scroll-mt-20 text-2xl font-black text-amber-300 mt-14 mb-5 border-b border-amber-500/20 pb-2">{b.text}</h2>;
                    }
                    return <h3 key={i} id={b.id} className="scroll-mt-20 text-sm font-bold text-amber-400/90 uppercase tracking-[0.15em] mt-8 mb-3">{b.text}</h3>;
                  }
                  if (b.kind === "md") {
                    return (
                      <div key={i} className="mb-2">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>{b.text}</ReactMarkdown>
                      </div>
                    );
                  }
                  if (b.kind === "scene") {
                    return (
                      <section key={i} id={b.id} className="scroll-mt-20 mt-8">
                        <h4 className="font-mono text-[13px] font-bold tracking-wide text-amber-200 mb-2 uppercase">{b.slug}</h4>
                        <pre className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-gray-300">{b.body}</pre>
                      </section>
                    );
                  }
                  // free screenplay text (FADE IN, TITLE cards, transitions)
                  return <pre key={i} className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-gray-400 mt-6">{b.body}</pre>;
                })}
              </article>
            )}
          </div>

          {/* Right-hand act/scene index */}
          {state === "ready" && toc.length > 0 && (
            <aside className="hidden lg:block w-64 shrink-0">
              <nav className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto pr-1">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400/80 mb-3">Scenes</div>
                <ul className="space-y-0.5 text-[13px] leading-snug pb-8">
                  {toc.map((t, i) => (
                    <li key={`${i}-${t.id}`}>
                      <a
                        href={`#${t.id}`}
                        className={t.level === "act"
                          ? "block mt-4 mb-1 text-amber-300 font-bold uppercase tracking-wide text-[11px]"
                          : "block py-0.5 pl-3 text-gray-400 hover:text-amber-300 border-l border-white/10 hover:border-amber-500/40 transition-colors truncate"}
                        title={t.label}
                      >
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
