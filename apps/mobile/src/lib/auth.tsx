import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "./supabase";
import { api } from "./api";
import { registerForPush, unregisterPush } from "./notifications";
import { identifyPurchases, logOutPurchases } from "./purchases";

function usernameOf(session: Session | null): string | null {
  const u = session?.user?.user_metadata?.username;
  return typeof u === "string" ? u : null;
}

type AuthState = {
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signUp: (username: string, email: string, password: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
};

const AuthCtx = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
      if (data.session) {
        registerForPush();
        const uname = usernameOf(data.session);
        if (uname) identifyPurchases(uname);
      }
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) return { error: error.message };
    // Ensure a Redis user record exists (mobile bypasses /api/auth/register).
    await api.bootstrap().catch(() => {});
    registerForPush();
    const uname = usernameOf(data.session);
    if (uname) identifyPurchases(uname);
    return {};
  }

  async function signUp(username: string, email: string, password: string) {
    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { data: { username: username.toLowerCase().trim() } },
    });
    if (error) return { error: error.message };
    // If the project returns a session immediately (email confirmation off),
    // provision the Redis record now; otherwise it happens on first signIn.
    await api.bootstrap().catch(() => {});
    registerForPush();
    identifyPurchases(username.toLowerCase().trim());
    return {};
  }

  async function signOut() {
    await unregisterPush(); // clear the token server-side while the session is still valid
    await logOutPurchases();
    await supabase.auth.signOut();
  }

  return (
    <AuthCtx.Provider value={{ session, loading, signIn, signUp, signOut }}>
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
