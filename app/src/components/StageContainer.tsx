"use client";

import { useState } from "react";
import StageInfo from "./StageInfo";
import CtfChallenge from "./CtfChallenge";
import QuizChallenge from "./QuizChallenge";
import type { StageConfig, CtfQuizEntry, AuditQuizEntry } from "@/data/types";
import type { StageTranslation } from "@/data/translations/types";
import { useLocale } from "@/contexts/LocaleContext";

type TranslatedQuestion = { q: string; options: [string, string] };

export default function StageContainer({ stage, isPro = false, translation = null, ctfQuiz, ctfQuizTranslation, auditQuiz }: {
  stage: StageConfig | null;
  isPro?: boolean;
  translation?: StageTranslation | null;
  ctfQuiz?: CtfQuizEntry;
  ctfQuizTranslation?: TranslatedQuestion[];
  auditQuiz?: AuditQuizEntry;
}) {
  const { t } = useLocale();
  const [phase, setPhase] = useState<"info" | "challenge">("info");
  const [mode, setMode] = useState<"quiz" | "ctf" | null>(null);

  if (!stage) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0d1117" }}>
        <p className="text-gray-500">{t("stage.notFound")}</p>
      </div>
    );
  }

  const backHref = `/stages/epoch/${stage.epochId}`;

  // A dual-mode stage offers both a CTF and a full quiz on the same topic.
  const hasQuiz = (stage.quiz?.questions?.length ?? 0) > 0;
  const isDual = stage.challengeType === "ctf" && !!stage.ctf && hasQuiz;

  if (phase === "info") {
    return <StageInfo stage={stage} onStart={() => setPhase("challenge")} translation={translation} backHref={backHref} />;
  }

  // Let the learner choose how to clear a dual-mode stage: the quiz (half) or the CTF (full).
  if (isDual && mode === null) {
    return <ModeChooser stage={stage} backHref={backHref} onPick={setMode} />;
  }

  if (stage.challengeType === "ctf" && stage.ctf && mode !== "quiz") {
    return <CtfChallenge stage={stage} backHref={backHref} isPro={isPro} ctfQuiz={ctfQuiz} ctfQuizTranslation={ctfQuizTranslation} auditQuiz={auditQuiz} />;
  }

  return <QuizChallenge stage={stage} backHref={backHref} />;
}

function ModeChooser({ stage, backHref, onPick }: {
  stage: StageConfig;
  backHref: string;
  onPick: (mode: "quiz" | "ctf") => void;
}) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}
    >
      <div className="max-w-2xl w-full">
        <a href={backHref} className="text-gray-500 hover:text-cyan-400 text-sm mb-6 inline-block transition-colors">← Back</a>
        <h1 className="text-white font-black text-2xl mb-1">{stage.title}</h1>
        <p className="text-gray-500 text-sm mb-8">Choose how you want to clear this stage.</p>

        <div className="grid sm:grid-cols-2 gap-4">
          <button
            onClick={() => onPick("ctf")}
            className="text-left rounded-2xl border-2 border-green-500/40 hover:border-green-400 bg-green-500/5 hover:bg-green-500/10 p-6 transition-all hover:-translate-y-0.5"
          >
            <div className="text-4xl mb-3">🚩</div>
            <h2 className="text-white font-bold text-lg mb-1">Run the CTF</h2>
            <p className="text-gray-400 text-sm mb-3">Work the terminal, capture the flag, and earn the full reward.</p>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-green-400 border border-green-500/30 bg-green-500/10 rounded-full px-2.5 py-1">
              ✓ Full clear · +{stage.xp} 🪙
            </span>
          </button>

          <button
            onClick={() => onPick("quiz")}
            className="text-left rounded-2xl border-2 border-amber-500/40 hover:border-amber-400 bg-amber-500/5 hover:bg-amber-500/10 p-6 transition-all hover:-translate-y-0.5"
          >
            <div className="text-4xl mb-3">📝</div>
            <h2 className="text-white font-bold text-lg mb-1">Take the Quiz</h2>
            <p className="text-gray-400 text-sm mb-3">5 questions, randomized every attempt. A quick way to test what you know.</p>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 border border-amber-500/30 bg-amber-500/10 rounded-full px-2.5 py-1">
              ◗ Half clear
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
