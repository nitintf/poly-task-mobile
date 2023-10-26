import "react-native-url-polyfill/auto"
import { createClient } from "@supabase/supabase-js"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Config from "app/config"

export const supabase = createClient(Config.supabaseUrl, Config.supabaseKey, {
  auth: {
    detectSessionInUrl: false,
    storage: AsyncStorage,
  },
})
