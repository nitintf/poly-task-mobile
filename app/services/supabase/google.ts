import { supabase } from "."

export const getGoogleOAuthUrl = async (): Promise<string | null> => {
  const result = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "polysupabase://google-auth",
    },
  })

  return result.data.url
}

export const extractParamsFromUrl = (url: string) => {
  const params = new URLSearchParams(url.split("#")[1])
  const data = {
    access_token: params.get("access_token"),
    expires_in: parseInt(params.get("expires_in") || "0"),
    refresh_token: params.get("refresh_token"),
    token_type: params.get("token_type"),
    provider_token: params.get("provider_token"),
  }

  return data
}
