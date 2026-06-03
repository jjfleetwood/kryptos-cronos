import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { stagesMeta, epochs } from "@kryptos/core/stages-meta";
import { api } from "@/lib/api";

export default function Stages() {
  const router = useRouter();
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    api.getProgress()
      .then((p) => { if (p) setCompleted(new Set(p.completedStages)); })
      .catch(() => {});
  }, []);

  return (
    <ScrollView style={s.root} contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      {epochs.map((epoch) => {
        const stages = stagesMeta
          .filter((st) => st.epochId === epoch.id)
          .sort((a, b) => a.order - b.order);
        if (stages.length === 0) return null;
        const done = stages.filter((st) => completed.has(st.id)).length;
        return (
          <View key={epoch.id} style={s.epoch}>
            <Text style={s.epochTitle}>{epoch.emoji} {epoch.name}</Text>
            <Text style={s.epochMeta}>{done}/{stages.length} complete</Text>
            {stages.map((st) => (
              <Pressable key={st.id} style={s.stage} onPress={() => router.push(`/stage/${st.id}`)}>
                <Text style={s.check}>{completed.has(st.id) ? "✅" : "▢"}</Text>
                <Text style={s.stageTitle} numberOfLines={1}>{st.title}</Text>
                <Text style={s.xp}>{st.xp} XP</Text>
              </Pressable>
            ))}
          </View>
        );
      })}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0d1117" },
  epoch: { marginBottom: 24 },
  epochTitle: { color: "#fff", fontSize: 18, fontWeight: "800" },
  epochMeta: { color: "#5b6577", fontSize: 12, marginTop: 2, marginBottom: 10 },
  stage: {
    flexDirection: "row", alignItems: "center", gap: 10,
    backgroundColor: "#161b22", borderColor: "#222a37", borderWidth: 1,
    borderRadius: 10, paddingHorizontal: 12, paddingVertical: 12, marginBottom: 8,
  },
  check: { fontSize: 14 },
  stageTitle: { color: "#d1d5db", flex: 1, fontSize: 14 },
  xp: { color: "#22d3ee", fontSize: 12, fontWeight: "700" },
});
