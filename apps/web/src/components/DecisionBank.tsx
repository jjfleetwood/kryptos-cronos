"use client";

import { useState } from "react";
import Link from "next/link";
import BackLink from "@kryptos/ui/BackLink";
import type { ScenarioSpot } from "@kryptos/core/types";

// A spot in a bank carries its source stage id so the server can validate it
// against the right stage; correctIndex/explanation are stripped before reaching here.
export type BankSpot = Omit<ScenarioSpot, "correctIndex" | "explanation"> & { sourceStageId: string };

type AnswerState = { correct: boolean; explanation: string } | null;

// How many decisions a single drill presents, drawn at random from the full bank
// so every run is fresh — a true "tons of decisions" practice pool.
const DRILL_SIZE = 25;
const RED_SUITS = ["♥", "♦"];

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDrill(pool: BankSpot[]): BankSpot[] {
  return shuffle(pool)
    .slice(0, Math.min(DRILL_SIZE, pool.length))
    .map((spot) => ({ ...spot, options: shuffle(spot.options) }));
}

function PlayingCard({ card }: { card: string }) {
  const isRed = RED_SUITS.some((s) => card.includes(s));
  return (
    <span className={`inline-flex items-center justify-center min-w-[2.2rem] h-12 px-2 rounded-md border bg-white font-bold text-lg shadow ${isRed ? "text-red-600 border-red-200" : "text-gray-900 border-gray-300"}`}>
      {card}
    </span>
  );
}

function CardRow({ cards, label }: { cards?: string[]; label: string }) {
  if (!cards || cards.length === 0) return null;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="text-[10px] uppercase tracking-widest text-emerald-200/50 font-semibold">{label}</span>
      <div className="flex gap-1.5">{cards.map((c, i) => <PlayingCard key={i} card={c} />)}</div>
    </div>
  );
}

export default function DecisionBank({ pool, title, subtitle, backHref = "/stages" }: {
  pool: BankSpot[];
  title: string;
  subtitle?: string;
  backHref?: string;
}) {
  const [drill, setDrill] = useState<BankSpot[]>(() => buildDrill(pool));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answer, setAnswer] = useState<AnswerState>(null);
  const [checking, setChecking] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const spot = drill[current];
  const spotHasCards = !!spot && (((spot.hand?.length ?? 0) > 0) || ((spot.board?.length ?? 0) > 0));

  function restart() {
    setDrill(buildDrill(pool));
    setCurrent(0);
    setSelected(null);
    setAnswer(null);
    setScore(0);
    setDone(false);
  }

  async function handleSelect(idx: number) {
    if (answer || checking || !spot) return;
    setSelected(idx);
    setChecking(true);
    try {
      const res = await fetch("/api/check-scenario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stageId: spot.sourceStageId, spotId: spot.id, selectedText: spot.options[idx], practice: true }),
      });
      const data = await res.json();
      setAnswer({ correct: data.correct, explanation: data.explanation });
      if (data.correct) setScore((s) => s + 1);
    } catch {
      setAnswer({ correct: false, explanation: "Could not verify — please try again." });
    } finally {
      setChecking(false);
    }
  }

  function handleNext() {
    if (current + 1 >= drill.length) setDone(true);
    else { setCurrent((c) => c + 1); setSelected(null); setAnswer(null); }
  }

  if (pool.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0d1117" }}>
        <p className="text-gray-500">No decisions found for this bank.</p>
      </div>
    );
  }

  if (done) {
    const pct = Math.round((score / drill.length) * 100);
    const great = pct >= 80;
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}>
        <div className="max-w-lg w-full text-center">
          <div className="text-6xl mb-6">{great ? "🎯" : "📊"}</div>
          <h2 className="text-3xl font-bold text-white mb-2">{score} / {drill.length} ({pct}%)</h2>
          <p className="text-gray-400 mb-8">
            {great ? "Sharp reads. " : ""}You drilled {drill.length} decisions from {title}. This is practice — nothing's graded, so run it again for a fresh set from the bank ({pool.length} total).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={restart} className="px-6 py-3 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 rounded-lg font-semibold transition-colors">
              New Drill
            </button>
            <Link href={backHref} className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-colors">
              Done →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}>
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="mb-6">
          <BackLink className="text-gray-500 hover:text-cyan-400 text-sm mb-4 inline-block transition-colors" />
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white font-bold text-xl">{title}</h1>
              <p className="text-gray-500 text-sm">{subtitle ?? "Decision Bank — drill"}</p>
            </div>
            <div className="text-right">
              <div className="text-cyan-400 font-mono text-sm">{current + 1} / {drill.length}</div>
              <div className="text-gray-600 text-xs">🎯 {score} correct</div>
            </div>
          </div>
          <div className="mt-4 bg-white/5 rounded-full h-1.5">
            <div className="bg-cyan-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${(current / drill.length) * 100}%` }} />
          </div>
        </div>

        {/* Card games get a felt; other tracks a clean label bar */}
        {spotHasCards ? (
          <div className="rounded-2xl border border-emerald-700/40 p-5 mb-4 shadow-inner" style={{ background: "radial-gradient(ellipse at center, #0b6b4f 0%, #064235 70%, #052b23 100%)" }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs px-3 py-1 rounded-full border border-emerald-300/30 bg-emerald-900/40 text-emerald-200 font-semibold">{spot.label}</span>
              <div className="flex gap-3 text-emerald-100/90 text-xs font-mono">
                {spot.pot && <span>POT <b className="text-emerald-300">{spot.pot}</b></span>}
                {spot.toCall && <span>TO CALL <b className="text-amber-300">{spot.toCall}</b></span>}
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-2">
              <CardRow cards={spot.board} label="Board" />
              <CardRow cards={spot.hand} label="Your hand" />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-semibold">{spot.label}</span>
          </div>
        )}

        {/* Situation + prompt */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-4">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{spot.situation}</p>
          <p className="text-white text-base font-semibold mb-5 leading-relaxed">{spot.prompt}</p>
          <div className="flex flex-col gap-3">
            {spot.options.map((option, idx) => {
              let style = "border-white/10 bg-white/3 text-gray-300 hover:border-cyan-500/50 cursor-pointer";
              if (answer) {
                if (answer.correct && idx === selected) style = "border-green-500 bg-green-500/10 text-green-400 cursor-default";
                else if (!answer.correct && idx === selected) style = "border-red-500 bg-red-500/10 text-red-400 cursor-default";
                else style = "border-white/5 bg-white/2 text-gray-600 cursor-default";
              } else if (checking && idx === selected) style = "border-cyan-500/50 bg-cyan-500/5 text-cyan-400/60 cursor-default";
              else if (idx === selected) style = "border-cyan-500 bg-cyan-500/10 text-cyan-400 cursor-pointer";
              return (
                <button key={idx} onClick={() => handleSelect(idx)} disabled={!!answer || checking} className={`text-left px-5 py-4 border rounded-lg transition-colors ${style}`}>
                  <span className="font-mono text-xs mr-3 opacity-50">{String.fromCharCode(65 + idx)}.</span>
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {answer && (
          <div className={`border rounded-lg p-4 mb-4 text-sm leading-relaxed ${answer.correct ? "border-green-500/30 bg-green-500/5 text-green-300" : "border-red-500/30 bg-red-500/5 text-red-300"}`}>
            <span className="font-semibold mr-2">{answer.correct ? "✓ Correct" : "✗ Not quite"}</span>
            {answer.explanation}
          </div>
        )}

        {answer && (
          <button onClick={handleNext} className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-colors">
            {current + 1 >= drill.length ? "See Results →" : "Next Decision →"}
          </button>
        )}
      </div>
    </div>
  );
}
