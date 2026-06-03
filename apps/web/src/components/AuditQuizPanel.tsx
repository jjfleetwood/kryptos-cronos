"use client";

import { useState } from "react";
import { awardQuizStage } from "@/lib/progress";
import { useLocale } from "@/contexts/LocaleContext";
import type { AuditQuizEntry, AuditQuizQuestion } from "@kryptos/core/types";

type Phase = "question" | "feedback" | "score";

function ProgressDots({ total, current, answers }: { total: number; current: number; answers: (boolean | null)[] }) {
  return (
    <div className="flex gap-1.5 justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i < current
              ? answers[i]
                ? "w-2 h-2 bg-emerald-400"
                : "w-2 h-2 bg-red-400"
              : i === current
              ? "w-3 h-3 bg-cyan-400 ring-2 ring-cyan-400/30"
              : "w-2 h-2 bg-white/15"
          }`}
        />
      ))}
    </div>
  );
}

function ScoreEmoji({ score, total }: { score: number; total: number }) {
  const pct = score / total;
  if (pct === 1) return <span className="text-5xl">🏆</span>;
  if (pct >= 0.8) return <span className="text-5xl">⭐</span>;
  if (pct >= 0.6) return <span className="text-5xl">📘</span>;
  return <span className="text-5xl">📖</span>;
}

export default function AuditQuizPanel({
  stageId,
  quiz,
  onDone,
}: {
  stageId: string;
  quiz: AuditQuizEntry;
  onDone: (quizPassed: boolean) => void;
}) {
  const { t } = useLocale();
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("question");
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(quiz.questions.length).fill(null));
  const [awarded, setAwarded] = useState(false);

  const q: AuditQuizQuestion = quiz.questions[idx];
  const score = answers.filter(Boolean).length;
  const total = quiz.questions.length;

  function handleSelect(optIdx: number) {
    if (phase !== "question") return;
    setSelected(optIdx);
    const correct = optIdx === q.correct;
    const next = [...answers];
    next[idx] = correct;
    setAnswers(next);
    setPhase("feedback");
  }

  function handleNext() {
    if (idx < total - 1) {
      setIdx(idx + 1);
      setSelected(null);
      setPhase("question");
    } else {
      setPhase("score");
      if (!awarded) {
        setAwarded(true);
        awardQuizStage(stageId).catch(() => {});
      }
    }
  }

  function scoreLabel() {
    const pct = score / total;
    if (pct === 1) return t("quiz.ctf.scorePerfect");
    if (pct >= 0.8) return t("quiz.ctf.scoreGood");
    return t("quiz.ctf.scoreOk");
  }

  // ── Score screen ──────────────────────────────────────────────────────────
  if (phase === "score") {
    return (
      <div className="mt-8 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6">
        <div className="text-center mb-6">
          <ScoreEmoji score={score} total={total} />
          <p className="text-white font-bold text-xl mt-3">
            {t("quiz.ctf.score").replace("{score}", String(score)).replace("{total}", String(total))}
          </p>
          <p className="text-gray-400 text-sm mt-1">{scoreLabel()}</p>
        </div>

        {/* Q-by-Q result grid */}
        <div className="grid grid-cols-5 gap-2 mb-6">
          {answers.map((correct, i) => (
            <div
              key={i}
              className={`rounded-lg py-2 text-center text-xs font-bold border ${
                correct
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}
            >
              Q{i + 1} {correct ? "✓" : "✗"}
            </div>
          ))}
        </div>

        <button
          onClick={() => onDone(score >= Math.ceil(total * 0.6))}
          className="w-full py-3 bg-purple-500 hover:bg-purple-400 text-white font-bold rounded-xl transition-colors"
        >
          {t("quiz.ctf.continue")}
        </button>
      </div>
    );
  }

  // ── Question screen ───────────────────────────────────────────────────────
  const optionLetters = ["A", "B", "C", "D"];

  return (
    <div className="mt-8 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-purple-400 font-bold text-xs uppercase tracking-widest">
            {t("quiz.audit.heading")}
          </p>
          <p className="text-gray-500 text-xs mt-0.5">
            {t("quiz.ctf.question").replace("{n}", String(idx + 1)).replace("{total}", String(total))}
          </p>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${
          q.type === "binary"
            ? "text-cyan-400 border-cyan-400/30 bg-cyan-400/5"
            : "text-purple-400 border-purple-400/30 bg-purple-400/5"
        }`}>
          {q.type === "binary" ? "True / False" : "4-Choice"}
        </span>
      </div>

      <ProgressDots total={total} current={idx} answers={answers} />

      {/* Question */}
      <p className="text-white font-semibold text-base leading-relaxed mt-5 mb-5">{q.q}</p>

      {/* Options */}
      <div className={`grid gap-2 ${q.type === "binary" ? "grid-cols-1" : "grid-cols-1"}`}>
        {q.options.map((opt, i) => {
          let style = "border-white/10 bg-white/3 text-gray-300 hover:border-purple-400/50 hover:bg-purple-400/5";
          if (phase === "feedback") {
            if (i === q.correct) style = "border-emerald-400/60 bg-emerald-400/10 text-emerald-300";
            else if (i === selected && selected !== q.correct) style = "border-red-400/60 bg-red-400/10 text-red-300";
            else style = "border-white/5 bg-white/2 text-gray-500 opacity-60";
          }
          return (
            <button
              key={i}
              disabled={phase === "feedback"}
              onClick={() => handleSelect(i)}
              className={`flex items-start gap-3 text-left px-4 py-3 rounded-xl border transition-all duration-150 ${style}`}
            >
              <span className="font-mono font-bold text-xs mt-0.5 flex-shrink-0 w-5">
                {optionLetters[i]}
              </span>
              <span className="text-sm leading-relaxed">{opt}</span>
              {phase === "feedback" && i === q.correct && (
                <span className="ml-auto text-emerald-400 flex-shrink-0">✓</span>
              )}
              {phase === "feedback" && i === selected && selected !== q.correct && (
                <span className="ml-auto text-red-400 flex-shrink-0">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback + Next */}
      {phase === "feedback" && (
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className={`text-sm font-semibold ${selected === q.correct ? "text-emerald-400" : "text-red-400"}`}>
            {selected === q.correct ? t("quiz.ctf.correct") : t("quiz.ctf.incorrect")}
          </p>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg text-sm transition-colors flex-shrink-0"
          >
            {idx < total - 1 ? t("quiz.ctf.next") : t("quiz.ctf.finish")}
          </button>
        </div>
      )}
    </div>
  );
}
