import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { getStage } from "@kryptos/core/stages";
import type { QuizQuestion, StageConfig } from "@kryptos/core/types";
import { api } from "@/lib/api";

const PER_ATTEMPT = 5;

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Fresh random subset each attempt, options shuffled — the correct option's
// position is never stable, and the server validates by text anyway.
function buildAttempt(stage: StageConfig): QuizQuestion[] {
  const bank = stage.quiz?.questions ?? [];
  return shuffle(bank).slice(0, PER_ATTEMPT).map((q) => ({ ...q, options: shuffle(q.options) }));
}

type Answer = { correct: boolean; explanation: string } | null;

export default function StageScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const stage = useMemo(() => getStage(id), [id]);
  const isHalfClear = stage?.challengeType === "ctf" && !!stage?.ctf;

  const [questions, setQuestions] = useState<QuizQuestion[]>(() => (stage ? buildAttempt(stage) : []));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answer, setAnswer] = useState<Answer>(null);
  const [checking, setChecking] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const header = (title: string) => (
    <Stack.Screen options={{ headerShown: true, title, headerStyle: { backgroundColor: "#0d1117" }, headerTintColor: "#fff" }} />
  );

  if (!stage) {
    return <View style={s.center}>{header("Not found")}<Text style={s.muted}>Stage not found.</Text></View>;
  }
  if (questions.length === 0) {
    return <View style={s.center}>{header(stage.title)}<Text style={s.muted}>No quiz available for this stage yet.</Text></View>;
  }

  const q = questions[current];

  function restart() {
    setQuestions(buildAttempt(stage!));
    setCurrent(0); setSelected(null); setAnswer(null); setScore(0); setDone(false);
  }

  async function handleSelect(idx: number) {
    if (answer || checking) return;
    setSelected(idx);
    setChecking(true);
    try {
      const isFinalQuestion = current + 1 >= questions.length;
      const res = await api.checkAnswer({
        stageId: stage!.id,
        questionId: q.id,
        selectedText: q.options[idx], // server validates by text; position is shuffled
        isFinalQuestion,
      });
      setAnswer({ correct: res.correct, explanation: res.explanation });
      if (res.correct) setScore((sc) => sc + 1);
    } catch {
      setAnswer({ correct: false, explanation: "Could not verify answer — check your connection and try again." });
    } finally {
      setChecking(false);
    }
  }

  function handleNext() {
    if (current + 1 >= questions.length) setDone(true);
    else { setCurrent((c) => c + 1); setSelected(null); setAnswer(null); }
  }

  if (done) {
    return (
      <ScrollView style={s.root} contentContainerStyle={s.doneWrap}>
        {header(stage.title)}
        <Text style={s.doneEmoji}>{isHalfClear ? "📝" : score === questions.length ? "🏆" : "📚"}</Text>
        <Text style={s.doneTitle}>{isHalfClear ? "Quiz Cleared!" : "Stage Complete!"}</Text>
        <Text style={s.doneSub}>You answered {score} of {questions.length} correctly.</Text>

        {isHalfClear ? (
          <View style={s.halfCard}>
            <Text style={s.halfTitle}>◗ Half cleared</Text>
            <Text style={s.muted}>Capture the flag in the CTF (web/tablet) to fully clear this stage and earn its 🪙.</Text>
          </View>
        ) : (
          <View style={s.xpCard}>
            <Text style={s.xpValue}>+{stage.xp} 🪙</Text>
            <Text style={s.muted}>{stage.badge.emoji} {stage.badge.name} unlocked</Text>
          </View>
        )}

        <Pressable style={s.secondaryBtn} onPress={restart}><Text style={s.secondaryText}>New Questions</Text></Pressable>
        <Pressable style={s.primaryBtn} onPress={() => router.replace("/(tabs)")}><Text style={s.primaryText}>Back to Stages →</Text></Pressable>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={s.root} contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      {header(stage.title)}

      <View style={s.progressRow}>
        <Text style={s.typeBadge}>{q.type}</Text>
        <Text style={s.counter}>{current + 1} / {questions.length}</Text>
      </View>
      <View style={s.bar}><View style={[s.barFill, { width: `${(current / questions.length) * 100}%` }]} /></View>

      {!!q.challenge && (
        <View style={s.scenario}><Text style={s.scenarioText}>{q.challenge}</Text></View>
      )}

      <Text style={s.question}>{q.text}</Text>

      <View style={{ gap: 10 }}>
        {q.options.map((option, idx) => {
          let style = s.option;
          if (answer) {
            if (idx === selected) style = answer.correct ? s.optionCorrect : s.optionWrong;
            else style = s.optionDim;
          } else if (idx === selected) style = s.optionSelected;
          return (
            <Pressable key={idx} style={style} onPress={() => handleSelect(idx)} disabled={!!answer || checking}>
              <Text style={s.optionLabel}>{String.fromCharCode(65 + idx)}. </Text>
              <Text style={s.optionText}>{option}</Text>
            </Pressable>
          );
        })}
      </View>

      {answer && (
        <View style={[s.explain, answer.correct ? s.explainOk : s.explainBad]}>
          <Text style={[s.explainHead, { color: answer.correct ? "#4ade80" : "#f87171" }]}>
            {answer.correct ? "✓ Correct!" : "✗ Incorrect."}
          </Text>
          <Text style={s.explainText}>{answer.explanation}</Text>
        </View>
      )}

      {answer && (
        <Pressable style={s.primaryBtn} onPress={handleNext}>
          <Text style={s.primaryText}>{current + 1 >= questions.length ? "See Results →" : "Next →"}</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0d1117" },
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0d1117", padding: 24 },
  muted: { color: "#9ca3af", textAlign: "center", lineHeight: 20 },
  progressRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
  typeBadge: {
    color: "#22d3ee", fontSize: 11, fontWeight: "700", borderColor: "rgba(34,211,238,0.3)", borderWidth: 1,
    backgroundColor: "rgba(34,211,238,0.1)", borderRadius: 999, paddingHorizontal: 10, paddingVertical: 3, overflow: "hidden",
  },
  counter: { color: "#22d3ee", fontFamily: "monospace", fontSize: 13 },
  bar: { backgroundColor: "rgba(255,255,255,0.06)", height: 5, borderRadius: 999, marginBottom: 16 },
  barFill: { backgroundColor: "#22d3ee", height: 5, borderRadius: 999 },
  scenario: {
    backgroundColor: "rgba(0,0,0,0.6)", borderColor: "rgba(255,255,255,0.1)", borderWidth: 1,
    borderRadius: 12, padding: 12, marginBottom: 14,
  },
  scenarioText: { color: "rgba(134,239,172,0.85)", fontFamily: "monospace", fontSize: 12, lineHeight: 18 },
  question: { color: "#fff", fontSize: 16, fontWeight: "600", lineHeight: 23, marginBottom: 16 },
  option: {
    flexDirection: "row", borderColor: "rgba(255,255,255,0.1)", borderWidth: 1, backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14,
  },
  optionSelected: {
    flexDirection: "row", borderColor: "#22d3ee", borderWidth: 1, backgroundColor: "rgba(34,211,238,0.1)",
    borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14,
  },
  optionCorrect: {
    flexDirection: "row", borderColor: "#22c55e", borderWidth: 1, backgroundColor: "rgba(34,197,94,0.12)",
    borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14,
  },
  optionWrong: {
    flexDirection: "row", borderColor: "#ef4444", borderWidth: 1, backgroundColor: "rgba(239,68,68,0.12)",
    borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14,
  },
  optionDim: {
    flexDirection: "row", borderColor: "rgba(255,255,255,0.05)", borderWidth: 1, backgroundColor: "rgba(255,255,255,0.02)",
    borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14,
  },
  optionLabel: { color: "#5b6577", fontFamily: "monospace", fontSize: 13 },
  optionText: { color: "#d1d5db", flex: 1, fontSize: 14, lineHeight: 20 },
  explain: { borderWidth: 1, borderRadius: 10, padding: 14, marginTop: 14 },
  explainOk: { borderColor: "rgba(34,197,94,0.3)", backgroundColor: "rgba(34,197,94,0.06)" },
  explainBad: { borderColor: "rgba(239,68,68,0.3)", backgroundColor: "rgba(239,68,68,0.06)" },
  explainHead: { fontWeight: "800", marginBottom: 4 },
  explainText: { color: "#cbd5e1", fontSize: 13, lineHeight: 19 },
  primaryBtn: { backgroundColor: "#22d3ee", borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 16 },
  primaryText: { color: "#000", fontWeight: "800", fontSize: 15 },
  secondaryBtn: { borderColor: "#39424f", borderWidth: 1, borderRadius: 12, paddingVertical: 14, alignItems: "center", marginTop: 12 },
  secondaryText: { color: "#cbd5e1", fontWeight: "700" },
  doneWrap: { padding: 24, alignItems: "center", justifyContent: "center", flexGrow: 1 },
  doneEmoji: { fontSize: 56 },
  doneTitle: { color: "#fff", fontSize: 26, fontWeight: "900", marginTop: 12 },
  doneSub: { color: "#9ca3af", marginTop: 6, marginBottom: 24 },
  halfCard: {
    alignSelf: "stretch", borderColor: "rgba(251,191,36,0.3)", borderWidth: 1, backgroundColor: "rgba(251,191,36,0.06)",
    borderRadius: 14, padding: 18, marginBottom: 8, alignItems: "center", gap: 6,
  },
  halfTitle: { color: "#fbbf24", fontWeight: "800", fontSize: 16 },
  xpCard: {
    alignSelf: "stretch", borderColor: "rgba(34,211,238,0.3)", borderWidth: 1, backgroundColor: "rgba(34,211,238,0.06)",
    borderRadius: 14, padding: 18, marginBottom: 8, alignItems: "center", gap: 6,
  },
  xpValue: { color: "#22d3ee", fontSize: 28, fontWeight: "900" },
});
