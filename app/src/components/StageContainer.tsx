"use client";

import { useState } from "react";
import { getStage } from "@/data/stages";
import StageInfo from "./StageInfo";
import CtfChallenge from "./CtfChallenge";
import QuizChallenge from "./QuizChallenge";

export default function StageContainer({ stageId }: { stageId: string }) {
  const stage = getStage(stageId);
  const [phase, setPhase] = useState<"info" | "challenge">("info");

  if (!stage) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0d1117" }}>
        <p className="text-gray-500">Stage not found: {stageId}</p>
      </div>
    );
  }

  if (phase === "info") {
    return <StageInfo stage={stage} onStart={() => setPhase("challenge")} />;
  }

  if (stage.challengeType === "ctf" && stage.ctf) {
    return <CtfChallenge stage={stage} />;
  }

  // Quiz stages pass the stageId so QuizChallenge can call awardStage correctly
  return <QuizChallenge />;
}
