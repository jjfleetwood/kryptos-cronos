import { useState } from "react";
import {
  ActivityIndicator, KeyboardAvoidingView, Platform, Pressable,
  StyleSheet, Text, TextInput, View,
} from "react-native";
import { useAuth } from "@/lib/auth";

export default function Login() {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

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

  return (
    <KeyboardAvoidingView style={s.root} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Text style={s.brand}>Kryptós <Text style={s.brandAccent}>CronOS</Text></Text>
      <Text style={s.tagline}>{mode === "signin" ? "Welcome back, agent." : "Create your agent profile."}</Text>

      {mode === "signup" && (
        <TextInput
          style={s.input} placeholder="Username" placeholderTextColor="#5b6577"
          autoCapitalize="none" value={username} onChangeText={setUsername}
        />
      )}
      <TextInput
        style={s.input} placeholder="Email" placeholderTextColor="#5b6577"
        autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail}
      />
      <TextInput
        style={s.input} placeholder="Password" placeholderTextColor="#5b6577"
        secureTextEntry value={password} onChangeText={setPassword}
      />

      {error && <Text style={s.error}>{error}</Text>}

      <Pressable style={s.button} onPress={submit} disabled={busy}>
        {busy ? <ActivityIndicator color="#000" /> : <Text style={s.buttonText}>{mode === "signin" ? "Sign in" : "Create account"}</Text>}
      </Pressable>

      <Pressable onPress={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); }}>
        <Text style={s.switch}>
          {mode === "signin" ? "No account? Sign up" : "Have an account? Sign in"}
        </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0d1117", padding: 24, justifyContent: "center" },
  brand: { color: "#fff", fontSize: 30, fontWeight: "900", textAlign: "center" },
  brandAccent: { color: "#22d3ee" },
  tagline: { color: "#9ca3af", textAlign: "center", marginTop: 8, marginBottom: 28 },
  input: {
    backgroundColor: "#161b22", borderColor: "#222a37", borderWidth: 1, borderRadius: 12,
    color: "#fff", paddingHorizontal: 16, paddingVertical: 14, marginBottom: 12, fontSize: 16,
  },
  error: { color: "#f87171", marginBottom: 12, textAlign: "center" },
  button: {
    backgroundColor: "#22d3ee", borderRadius: 12, paddingVertical: 15, alignItems: "center", marginTop: 4,
  },
  buttonText: { color: "#000", fontWeight: "800", fontSize: 16 },
  switch: { color: "#6b7280", textAlign: "center", marginTop: 18 },
});
