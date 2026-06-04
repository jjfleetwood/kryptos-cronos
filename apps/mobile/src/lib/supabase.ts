import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient, type SupportedStorage } from "@supabase/supabase-js";

// Public Supabase config — anon key is safe to ship in the client.
// Set in apps/mobile/.env (EXPO_PUBLIC_* is inlined at build time).
const url = process.env.EXPO_PUBLIC_SUPABASE_URL ?? "";
const anon = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "";

// On native and in the browser `window` exists and AsyncStorage works. During any
// server-side render pass (Expo web export evaluates routes in Node, where there is
// no `window`), AsyncStorage's web backend would throw. Fall back to a no-op store
// so the client can construct without persisting — the real session loads on the client.
const noopStorage: SupportedStorage = {
  getItem: async () => null,
  setItem: async () => {},
  removeItem: async () => {},
};
const storage: SupportedStorage =
  typeof window === "undefined" ? noopStorage : AsyncStorage;

export const supabase = createClient(url, anon, {
  auth: {
    storage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // no URL-based session on native
  },
});
