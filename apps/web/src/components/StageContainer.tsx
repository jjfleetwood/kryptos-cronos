"use client";

import { useState } from "react";
import StageInfo from "@kryptos/ui/StageInfo";
import CtfChallenge from "./CtfChallenge";
import QuizChallenge from "./QuizChallenge";
import ScenarioChallenge from "./ScenarioChallenge";
import type { StageConfig, CtfQuizEntry, AuditQuizEntry } from "@kryptos/core/types";
import type { StageTranslation } from "@kryptos/core/translations/types";
import { useLocale } from "@/contexts/LocaleContext";

type TranslatedQuestion = { q: string; options: [string, string] };

export default function StageContainer({ stage, isPro = false, translation = null, ctfQuiz, ctfQuizTranslation, auditQuiz, backHref: backHrefProp, hideCover = false }: {
  stage: StageConfig | null;
  isPro?: boolean;
  translation?: StageTranslation | null;
  ctfQuiz?: CtfQuizEntry;
  ctfQuizTranslation?: TranslatedQuestion[];
  auditQuiz?: AuditQuizEntry;
  backHref?: string;
  hideCover?: boolean;
}) {
  const { t } = useLocale();
  const [phase, setPhase] = useState<"info" | "challenge">("info");
  const [mode, setMode] = useState<"quiz" | "ctf" | "scenario" | null>(null);

  if (!stage) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0d1117" }}>
        <p className="text-gray-500">{t("stage.notFound")}</p>
      </div>
    );
  }

  const backHref = backHrefProp ?? `/stages/epoch/${stage.epochId}`;

  // A dual-mode stage offers both a CTF and a full quiz on the same topic.
  const hasQuiz = (stage.quiz?.questions?.length ?? 0) > 0;
  const isDual = stage.challengeType === "ctf" && !!stage.ctf && hasQuiz;
  // A scenario ("play the hand") stage offers a Decision Trainer as a full-clear
  // path alongside its quiz — both award the stage.
  const hasScenario = (stage.scenario?.spots?.length ?? 0) > 0;

  if (phase === "info") {
    // For a dual-mode stage the learner picks the quiz (half) or CTF (full) right in
    // the "ready for the challenge" box; that choice arrives here as `chosen`.
    return (
      <StageInfo
        stage={stage}
        isDual={isDual}
        hasScenario={hasScenario}
        onStart={(chosen) => {
          if (chosen) setMode(chosen);
          setPhase("challenge");
        }}
        translation={translation}
        backHref={backHref}
        hideCover={hideCover}
      />
    );
  }

  if (mode === "scenario" && hasScenario) {
    return <ScenarioChallenge stage={stage} backHref={backHref} />;
  }

  if (stage.challengeType === "ctf" && stage.ctf && mode !== "quiz") {
    return <CtfChallenge stage={stage} backHref={backHref} isPro={isPro} ctfQuiz={ctfQuiz} ctfQuizTranslation={ctfQuizTranslation} auditQuiz={auditQuiz} />;
  }

  return <QuizChallenge stage={stage} backHref={backHref} />;
}
