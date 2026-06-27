"use client";

import { useState } from "react";
import Link from "next/link";
import BackLink from "@kryptos/ui/BackLink";
import QuizSuccessModal from "./QuizSuccessModal";
import type { ScenarioSpot, StageConfig } from "@kryptos/core/types";

type SafeSpot = Omit<ScenarioSpot, "correctIndex" | "explanation">;

type AnswerState = { correct: boolean; explanation: string } | null;

type FinalResult = {
  passed: boolean;
  bonusXp: number;
  recommendedNext: { id: string; title: string } | null;
} | null;

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Spots play IN ORDER (it's a hand sequence) but each spot's options are shuffled
// so the correct action can't be memorised by position.
function buildAttempt(stage: StageConfig): SafeSpot[] {
  const spots: SafeSpot[] = stage.scenario?.spots ?? [];
  return spots.map((spot) => ({ ...spot, options: shuffle(spot.options) }));
}

const RED_SUITS = ["♥", "♦"];

function PlayingCard({ card }: { card: string }) {
  const isRed = RED_SUITS.some((s) => card.includes(s));
  return (
    <span
      className={`inline-flex items-center justify-center min-w-[2.4rem] h-14 px-2 rounded-md border bg-white font-bold text-xl shadow-md ${
        isRed ? "text-red-600 border-red-200" : "text-gray-900 border-gray-300"
      }`}
    >
      {card}
    </span>
  );
}

function CardRow({ cards, label }: { cards?: string[]; label: string }) {
  if (!cards || cards.length === 0) return null;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="text-[10px] uppercase tracking-widest text-emerald-200/50 font-semibold">{label}</span>
      <div className="flex gap-1.5">
        {cards.map((c, i) => (
          <PlayingCard key={i} card={c} />
        ))}
      </div>
    </div>
  );
}

export default function ScenarioChallenge({ stage, backHref = "/stages" }: { stage: StageConfig; backHref?: string }) {
  const [spots, setSpots] = useState<SafeSpot[]>(() => buildAttempt(stage));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answer, setAnswer] = useState<AnswerState>(null);
  const [checking, setChecking] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [finalResult, setFinalResult] = useState<FinalResult>(null);

  const spot = spots[current];
  const intro = stage.scenario?.intro;

  function restart() {
    setSpots(buildAttempt(stage));
    setCurrent(0);
    setSelected(null);
    setAnswer(null);
    setScore(0);
    setDone(false);
    setFinalResult(null);
  }

  async function handleSelect(idx: number) {
    if (answer || checking || !spot) return;
    setSelected(idx);
    setChecking(true);
    try {
      const isFinalSpot = current + 1 >= spots.length;
      const isFirstSpot = current === 0;
      const res = await fetch("/api/check-scenario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stageId: stage.id,
          spotId: spot.id,
          selectedText: spot.options[idx],
          isFirstSpot,
          isFinalSpot,
        }),
      });
      const data = await res.json();
      setAnswer({ correct: data.correct, explanation: data.explanation });
      if (data.correct) setScore((s) => s + 1);
      if (isFinalSpot) {
        setFinalResult({
          passed: data.passed === true,
          bonusXp: typeof data.bonusXp === "number" ? data.bonusXp : 0,
          recommendedNext: data.recommendedNext ?? null,
        });
      }
    } catch {
      setAnswer({ correct: false, explanation: "Could not verify — please try again." });
    } finally {
      setChecking(false);
    }
  }

  function handleNext() {
    if (current + 1 >= spots.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswer(null);
    }
  }

  if (!spot && !done) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0d1117" }}>
        <p className="text-gray-500">No scenario found for this stage.</p>
      </div>
    );
  }

  if (done) {
    if (finalResult?.passed) {
      return (
        <QuizSuccessModal
          stage={stage}
          score={score}
          total={spots.length}
          coins={stage.xp}
          bonusCoins={finalResult.bonusXp}
          recommendedNext={finalResult.recommendedNext}
          onReplay={restart}
          backHref={backHref}
        />
      );
    }
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}
      >
        <div className="max-w-lg w-full text-center">
          <div className="text-6xl mb-6">🃏</div>
          <h2 className="text-3xl font-bold text-white mb-2">Tough table!</h2>
          <p className="text-gray-400 mb-8">
            You played {score} of {spots.length} spots correctly — you need at least 70% to take down the stage. Re-deal and run it back.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={restart}
              className="px-6 py-3 border border-gray-600 hover:border-rose-500 text-gray-300 hover:text-rose-400 rounded-lg font-semibold transition-colors"
            >
              Re-deal
            </button>
            <Link
              href={backHref}
              className="px-6 py-3 bg-rose-500 hover:bg-rose-400 text-black font-bold rounded-lg transition-colors"
            >
              Stage Map →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}
    >
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="mb-6">
          <BackLink className="text-gray-500 hover:text-rose-400 text-sm mb-4 inline-block transition-colors" />
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white font-bold text-xl">{stage.title}</h1>
              <p className="text-gray-500 text-sm">Play the hand · {stage.subtitle}</p>
            </div>
            <div className="text-right">
              <div className="text-rose-400 font-mono text-sm">{current + 1} / {spots.length}</div>
              <div className="text-gray-600 text-xs">🃏 decision trainer</div>
            </div>
          </div>
          <div className="mt-4 bg-white/5 rounded-full h-1.5">
            <div
              className="bg-rose-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${(current / spots.length) * 100}%` }}
            />
          </div>
        </div>

        {intro && current === 0 && (
          <div className="bg-rose-500/5 border border-rose-500/20 rounded-xl p-4 mb-4 text-sm text-rose-200/80 leading-relaxed">
            {intro}
          </div>
        )}

        {/* The felt */}
        <div
          className="rounded-2xl border border-emerald-700/40 p-5 mb-4 shadow-inner"
          style={{ background: "radial-gradient(ellipse at center, #0b6b4f 0%, #064235 70%, #052b23 100%)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs px-3 py-1 rounded-full border border-emerald-300/30 bg-emerald-900/40 text-emerald-200 font-semibold">
              {spot.label}
            </span>
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

        {/* Situation + prompt */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-4">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{spot.situation}</p>
          <p className="text-white text-base font-semibold mb-5 leading-relaxed">{spot.prompt}</p>
          <div className="flex flex-col gap-3">
            {spot.options.map((option, idx) => {
              let style = "border-white/10 bg-white/3 text-gray-300 hover:border-rose-500/50 cursor-pointer";
              if (answer) {
                if (answer.correct && idx === selected) {
                  style = "border-green-500 bg-green-500/10 text-green-400 cursor-default";
                } else if (!answer.correct && idx === selected) {
                  style = "border-red-500 bg-red-500/10 text-red-400 cursor-default";
                } else {
                  style = "border-white/5 bg-white/2 text-gray-600 cursor-default";
                }
              } else if (checking && idx === selected) {
                style = "border-rose-500/50 bg-rose-500/5 text-rose-400/60 cursor-default";
              } else if (idx === selected) {
                style = "border-rose-500 bg-rose-500/10 text-rose-400 cursor-pointer";
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={!!answer || checking}
                  className={`text-left px-5 py-4 border rounded-lg transition-colors ${style}`}
                >
                  <span className="font-mono text-xs mr-3 opacity-50">{String.fromCharCode(65 + idx)}.</span>
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {answer && (
          <div
            className={`border rounded-lg p-4 mb-4 text-sm leading-relaxed ${
              answer.correct
                ? "border-green-500/30 bg-green-500/5 text-green-300"
                : "border-red-500/30 bg-red-500/5 text-red-300"
            }`}
          >
            <span className="font-semibold mr-2">{answer.correct ? "✓ Nice play!" : "✗ Not the best line."}</span>
            {answer.explanation}
          </div>
        )}

        {answer && (
          <button
            onClick={handleNext}
            className="w-full py-4 bg-rose-500 hover:bg-rose-400 text-black font-bold rounded-lg transition-colors"
          >
            {current + 1 >= spots.length ? "See Results →" : "Next Spot →"}
          </button>
        )}
      </div>
    </div>
  );
}
