import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { stagesMeta } from "@kryptos/core/stages-meta";

export default function StageDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const stage = stagesMeta.find((st) => st.id === id);

  if (!stage) {
    return (
      <View style={s.center}>
        <Stack.Screen options={{ headerShown: true, title: "Not found", headerStyle: { backgroundColor: "#0d1117" }, headerTintColor: "#fff" }} />
        <Text style={s.muted}>Stage not found.</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: stage.title,
          headerStyle: { backgroundColor: "#0d1117" },
          headerTintColor: "#fff",
        }}
      />
      <ScrollView style={s.root} contentContainerStyle={{ padding: 20 }}>
        <Text style={s.emoji}>{stage.wonder.emoji}</Text>
        <Text style={s.title}>{stage.title}</Text>
        <Text style={s.loc}>{stage.wonder.name} · {stage.wonder.location} · {stage.wonder.era}</Text>

        <View style={s.badgeRow}>
          <View style={s.badge}><Text style={s.badgeText}>{stage.challengeType.toUpperCase()}</Text></View>
          <View style={s.badge}><Text style={s.badgeText}>{stage.xp} XP</Text></View>
        </View>

        <Text style={s.note}>
          The interactive {stage.challengeType === "ctf" ? "CTF + quiz" : "quiz"} for this stage lands in
          the next build. The backend (check-answer / check-flag / hint) is already wired and typed via
          @kryptos/api-client.
        </Text>
      </ScrollView>
    </>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0d1117" },
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0d1117" },
  muted: { color: "#5b6577" },
  emoji: { fontSize: 40 },
  title: { color: "#fff", fontSize: 24, fontWeight: "900", marginTop: 8 },
  loc: { color: "#5b6577", marginTop: 6 },
  badgeRow: { flexDirection: "row", gap: 8, marginTop: 16 },
  badge: {
    backgroundColor: "rgba(34,211,238,0.12)", borderColor: "rgba(34,211,238,0.3)", borderWidth: 1,
    borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4,
  },
  badgeText: { color: "#22d3ee", fontWeight: "700", fontSize: 12 },
  note: { color: "#9ca3af", marginTop: 24, lineHeight: 21 },
});
