import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { getStage } from "@kryptos/core/stages";
import StageBriefing from "@/components/StageBriefing";

const SECURITY = ["cybersecurity", "ai", "owasp"];

export default function StageBriefingScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const stage = useMemo(() => getStage(id), [id]);

  const back = () => (router.canGoBack() ? router.back() : router.replace("/(tabs)"));

  if (!stage) {
    return (
      <View style={s.center}>
        <Stack.Screen options={{ headerShown: true, title: "Not found", headerStyle: { backgroundColor: "#0d1117" }, headerTintColor: "#fff" }} />
        <Text style={s.muted}>Stage not found.</Text>
      </View>
    );
  }

  // CTF terminal is offered only on security stages that ship a CTF.
  const hasCtf = !!stage.ctf && SECURITY.includes(stage.category);

  return (
    <ScrollView style={s.root}>
      <Stack.Screen options={{ headerShown: false }} />
      <StageBriefing
        stage={stage}
        onBack={back}
        onQuiz={() => router.push(`/stage/${stage.id}/quiz`)}
        onCtf={hasCtf ? () => router.push(`/stage/${stage.id}/ctf`) : undefined}
      />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0d1117" },
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0d1117", padding: 24 },
  muted: { color: "#9ca3af", textAlign: "center" },
});
