import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getStage } from "@kryptos/core/stages";
import CtfTerminal from "@/components/CtfTerminal";

export default function StageCtfScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const stage = useMemo(() => getStage(id), [id]);

  const close = () => (router.canGoBack() ? router.back() : router.replace(`/stage/${id}`));

  if (!stage?.ctf) {
    return (
      <View style={s.center}>
        <Stack.Screen options={{ headerShown: true, title: "CTF", headerStyle: { backgroundColor: "#0d1117" }, headerTintColor: "#fff" }} />
        <Text style={s.muted}>No CTF available for this stage.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <CtfTerminal stage={stage} onClose={close} />
    </View>
  );
}

const s = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0d1117", padding: 24 },
  muted: { color: "#9ca3af", textAlign: "center" },
});
