export interface ConfigBaseProps {
  persistNavigation: "always" | "dev" | "prod" | "never"
  catchErrors: "always" | "dev" | "prod" | "never"
  exitRoutes: string[]
  supabaseKey: string
  supabaseUrl: string
}

export type PersistNavigationConfig = ConfigBaseProps["persistNavigation"]

const BaseConfig: ConfigBaseProps = {
  persistNavigation: "dev",
  catchErrors: "always",
  exitRoutes: ["Welcome"],
  supabaseKey: process.env.SUPABASE_KEY,
  supabaseUrl: process.env.SUPABASE_URL,
}

export default BaseConfig
