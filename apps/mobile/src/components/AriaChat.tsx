import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator, FlatList, KeyboardAvoidingView, Modal, Platform,
  Pressable, StyleSheet, Text, TextInput, View,
} from "react-native";
import type { StageConfig } from "@kryptos/core/types";
import { api } from "@/lib/api";

type Msg = { role: "user" | "aria"; text: string };

// ARIA — the Socratic AI tutor. Mirrors the web HintChatbot: sends the stage
// context to POST /api/hint (via api.getHint) and respects the server's
// adaptive cooldown (nextCooldownS). Never reveals answers.
export default function AriaChat({
  stage, visible, onClose,
}: { stage: StageConfig; visible: boolean; onClose: () => void }) {
  const ctf = stage.ctf;
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "aria",
      text: `ARIA online. Mission "${stage.title}" loaded.${stage.info?.tagline ? ` Core concept: "${stage.info.tagline}".` : ""} What are you stuck on? I'll guide — not give it away.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => { if (timer.current) clearInterval(timer.current); }, []);

  function startCooldown(sec: number) {
    if (sec <= 0) return;
    setCooldown(sec);
    timer.current = setInterval(() => {
      setCooldown((p) => {
        if (p <= 1) { if (timer.current) clearInterval(timer.current); return 0; }
        return p - 1;
      });
    }, 1000);
  }

  async function send() {
    const text = input.trim();
    if (!text || loading || cooldown > 0) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setLoading(true);
    try {
      const res = await api.getHint({
        message: text,
        stageId: stage.id,
        stageTitle: stage.title,
        scenario: ctf?.scenario ?? "",
        hint: ctf?.hint ?? "",
        chatbotContext: ctf?.chatbotContext ?? "",
        keyTakeaways: stage.info?.keyTakeaways ?? [],
        tagline: stage.info?.tagline ?? "",
      });
      setMessages((m) => [...m, { role: "aria", text: res.reply }]);
      startCooldown(res.nextCooldownS ?? 30);
    } catch {
      setMessages((m) => [...m, { role: "aria", text: "Connection lost — check your network and try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={s.backdrop}>
        <Pressable style={s.backdropTap} onPress={onClose} />
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={s.sheet}>
          <View style={s.header}>
            <View style={s.dot} />
            <Text style={s.headerTitle}>ARIA</Text>
            <Text style={s.headerSub}>AI Assistant</Text>
            <Pressable onPress={onClose} style={{ marginLeft: "auto" }} hitSlop={10}>
              <Text style={s.close}>✕</Text>
            </Pressable>
          </View>

          <FlatList
            data={messages}
            keyExtractor={(_, i) => String(i)}
            contentContainerStyle={{ padding: 14, gap: 10 }}
            renderItem={({ item }) => (
              <View style={[s.row, item.role === "user" ? s.right : s.left]}>
                <View style={[s.bubble, item.role === "user" ? s.userBubble : s.ariaBubble]}>
                  <Text style={item.role === "user" ? s.userText : s.ariaText}>{item.text}</Text>
                </View>
              </View>
            )}
            ListFooterComponent={loading ? <ActivityIndicator color="#4ade80" style={{ marginVertical: 10 }} /> : null}
          />

          <View style={s.inputBar}>
            {cooldown > 0 ? (
              <View style={s.cooldown}>
                <Text style={s.cooldownText}>Next hint in</Text>
                <Text style={s.cooldownNum}>{cooldown}s</Text>
              </View>
            ) : (
              <View style={s.inputRow}>
                <TextInput
                  style={s.input} value={input} onChangeText={setInput}
                  placeholder="Ask ARIA for a hint…" placeholderTextColor="#5b6577"
                  onSubmitEditing={send} returnKeyType="send"
                />
                <Pressable style={s.sendBtn} onPress={send} disabled={!input.trim() || loading}>
                  <Text style={s.sendText}>↵</Text>
                </Pressable>
              </View>
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const s = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
  backdropTap: { flex: 1 },
  sheet: { height: "75%", backgroundColor: "#0a0e16", borderTopLeftRadius: 18, borderTopRightRadius: 18, borderColor: "#222a37", borderWidth: 1, overflow: "hidden" },
  header: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 16, paddingVertical: 14, borderBottomColor: "#222a37", borderBottomWidth: 1 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#4ade80" },
  headerTitle: { color: "#fff", fontWeight: "800", fontSize: 15 },
  headerSub: { color: "#5b6577", fontSize: 12 },
  close: { color: "#9ca3af", fontSize: 18 },
  row: { flexDirection: "row" },
  left: { justifyContent: "flex-start" },
  right: { justifyContent: "flex-end" },
  bubble: { maxWidth: "85%", borderRadius: 14, paddingHorizontal: 12, paddingVertical: 9, borderWidth: 1 },
  ariaBubble: { backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" },
  userBubble: { backgroundColor: "rgba(34,211,238,0.15)", borderColor: "rgba(34,211,238,0.3)" },
  ariaText: { color: "#d1d5db", fontSize: 14, lineHeight: 20 },
  userText: { color: "#a5f3fc", fontSize: 14, lineHeight: 20 },
  inputBar: { padding: 12, borderTopColor: "#222a37", borderTopWidth: 1 },
  inputRow: { flexDirection: "row", gap: 8 },
  input: { flex: 1, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", borderWidth: 1, borderRadius: 12, color: "#fff", paddingHorizontal: 14, paddingVertical: 10, fontSize: 14 },
  sendBtn: { backgroundColor: "#22d3ee", borderRadius: 12, paddingHorizontal: 16, alignItems: "center", justifyContent: "center" },
  sendText: { color: "#000", fontWeight: "900", fontSize: 16 },
  cooldown: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)", borderWidth: 1, borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12 },
  cooldownText: { color: "#5b6577", fontSize: 13 },
  cooldownNum: { color: "#22d3ee", fontWeight: "800", fontSize: 15 },
});
