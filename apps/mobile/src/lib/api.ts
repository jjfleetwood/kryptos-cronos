import { createApiClient } from "@kryptos/api-client";
import { supabase } from "./supabase";

// Production API by default; override with EXPO_PUBLIC_API_BASE for local dev.
const baseUrl = process.env.EXPO_PUBLIC_API_BASE ?? "https://www.kryptoscronos.com";

// Cross-origin → bearer-token auth (the backend's getAuthedUsername accepts it).
export const api = createApiClient({
  baseUrl,
  getToken: async () => {
    const { data } = await supabase.auth.getSession();
    return data.session?.access_token ?? null;
  },
});
