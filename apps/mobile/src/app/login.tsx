import { useState } from "react";
import {
  ActivityIndicator, Image, KeyboardAvoidingView, Platform, Pressable,
  ScrollView, StyleSheet, Text, TextInput, View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "@/lib/auth";

type Field = "username" | "email" | "password";

export default function Login() {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [focused, setFocused] = useState<Field | null>(null);

  async function submit() {
    setError(null);
    setBusy(true);
    const res = mode === "signin"
      ? await signIn(email, password)
      : await signUp(username, email, password);
    setBusy(false);
    if (res.error) setError(res.error);
    // On success the auth gate redirects automatically.
  }

  const inputStyle = (f: Field) => [s.input, focused === f && s.inputFocused];

  return (
    <View style={s.root}>
      <LinearGradient
        colors={["#0a1622", "#0d1117", "#0a0e1a"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      {/* Ambient color washes — echoes the website's glow blobs */}
      <View style={[s.glow, s.glowCyan]} />
      <View style={[s.glow, s.glowViolet]} />

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView contentContainerStyle={s.scroll} keyboardShouldPersistTaps="handled">
          {/* Branding */}
          <View style={s.brandWrap}>
            <LinearGradient
              colors={["rgba(34,211,238,0.18)", "rgba(167,139,250,0.18)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={s.logoBadge}
            >
              <Image source={require("../../assets/images/logo-glow.png")} style={s.logoImg} resizeMode="contain" />
            </LinearGradient>
            <Text style={s.brand}>Kryptós <Text style={s.brandAccent}>CronOS</Text></Text>
            <Text style={s.greek}>(κρυπτός χρόνος)</Text>
            <Text style={s.tagline}>
              {mode === "signin" ? "Welcome back, agent." : "Join the mission."}
            </Text>
          </View>

          {/* Card */}
          <View style={s.card}>
            <View style={s.tabs}>
              {(["signin", "signup"] as const).map((m) => (
                <Pressable
                  key={m}
                  style={[s.tab, mode === m && s.tabActive]}
                  onPress={() => { setMode(m); setError(null); }}
                >
                  <Text style={[s.tabText, mode === m && s.tabTextActive]}>
                    {m === "signin" ? "Log in" : "Sign up"}
                  </Text>
                </Pressable>
              ))}
            </View>

            <View style={s.cardBody}>
              {mode === "signup" && (
                <View style={s.fieldWrap}>
                  <Text style={s.label}>Username</Text>
                  <TextInput
                    style={inputStyle("username")} placeholder="agent_name" placeholderTextColor="#4b5563"
                    autoCapitalize="none" value={username} onChangeText={setUsername}
                    onFocus={() => setFocused("username")} onBlur={() => setFocused(null)}
                  />
                </View>
              )}
              <View style={s.fieldWrap}>
                <Text style={s.label}>Email</Text>
                <TextInput
                  style={inputStyle("email")} placeholder="agent@example.com" placeholderTextColor="#4b5563"
                  autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail}
                  onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                />
              </View>
              <View style={s.fieldWrap}>
                <Text style={s.label}>Password</Text>
                <TextInput
                  style={inputStyle("password")} placeholder="••••••••" placeholderTextColor="#4b5563"
                  secureTextEntry value={password} onChangeText={setPassword}
                  onFocus={() => setFocused("password")} onBlur={() => setFocused(null)}
                />
              </View>

              {error && (
                <View style={s.errorBox}>
                  <Text style={s.errorText}>⚠ {error}</Text>
                </View>
              )}

              <Pressable onPress={submit} disabled={busy} style={{ marginTop: 4 }}>
                <LinearGradient
                  colors={busy ? ["#155e75", "#3730a3"] : ["#22d3ee", "#818cf8"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={s.button}
                >
                  {busy ? <ActivityIndicator color="#000" /> : (
                    <Text style={s.buttonText}>{mode === "signin" ? "Log in" : "Create account"}</Text>
                  )}
                </LinearGradient>
              </Pressable>

              <Pressable onPress={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); }}>
                <Text style={s.switch}>
                  {mode === "signin" ? "No account? " : "Have an account? "}
                  <Text style={s.switchAccent}>{mode === "signin" ? "Sign up" : "Log in"}</Text>
                </Text>
              </Pressable>
            </View>
          </View>

          <Text style={s.footer}>Progress synced to server · 38 epochs · 458 stages</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0a0e1a" },
  glow: { position: "absolute", borderRadius: 999 },
  glowCyan: { top: -80, left: -40, width: 320, height: 320, backgroundColor: "rgba(34,211,238,0.10)" },
  glowViolet: { bottom: -60, right: -50, width: 300, height: 300, backgroundColor: "rgba(167,139,250,0.10)" },
  scroll: { flexGrow: 1, justifyContent: "center", padding: 24 },

  brandWrap: { alignItems: "center", marginBottom: 26 },
  logoBadge: { width: 72, height: 72, borderRadius: 18, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "rgba(34,211,238,0.25)", marginBottom: 14 },
  logoImg: { width: 46, height: 46 },
  brand: { color: "#fff", fontSize: 28, fontWeight: "900", letterSpacing: -0.5 },
  brandAccent: { color: "#22d3ee" },
  greek: { color: "#5b6577", fontFamily: "monospace", fontSize: 12, marginTop: 4 },
  tagline: { color: "#9ca3af", marginTop: 8, fontSize: 14 },

  card: { borderRadius: 18, overflow: "hidden", backgroundColor: "rgba(17,24,33,0.72)", borderWidth: 1, borderColor: "rgba(255,255,255,0.08)" },
  tabs: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.08)" },
  tab: { flex: 1, paddingVertical: 15, alignItems: "center", borderBottomWidth: 2, borderBottomColor: "transparent" },
  tabActive: { borderBottomColor: "#22d3ee", backgroundColor: "rgba(34,211,238,0.07)" },
  tabText: { color: "#6b7280", fontWeight: "700", fontSize: 14 },
  tabTextActive: { color: "#22d3ee" },
  cardBody: { padding: 20, gap: 14 },

  fieldWrap: { gap: 7 },
  label: { color: "#6b7280", fontSize: 10, fontWeight: "700", letterSpacing: 1.5, textTransform: "uppercase" },
  input: {
    backgroundColor: "rgba(0,0,0,0.4)", borderColor: "rgba(255,255,255,0.1)", borderWidth: 1, borderRadius: 11,
    color: "#fff", paddingHorizontal: 15, paddingVertical: 13, fontSize: 15,
  },
  inputFocused: { borderColor: "#22d3ee", backgroundColor: "rgba(34,211,238,0.06)" },
  errorBox: { backgroundColor: "rgba(239,68,68,0.1)", borderColor: "rgba(239,68,68,0.25)", borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10 },
  errorText: { color: "#f87171", fontSize: 13 },
  button: { borderRadius: 12, paddingVertical: 15, alignItems: "center" },
  buttonText: { color: "#000", fontWeight: "900", fontSize: 15 },
  switch: { color: "#6b7280", textAlign: "center", marginTop: 6, fontSize: 13 },
  switchAccent: { color: "#22d3ee", fontWeight: "700" },
  footer: { color: "#4b5563", textAlign: "center", marginTop: 22, fontSize: 12 },
});
