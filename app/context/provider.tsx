import React, { PropsWithChildren } from "react"
import { CreateTaskProvider } from "./create-task"

export default function AppProviders({ children }: PropsWithChildren) {
  return <CreateTaskProvider>{children}</CreateTaskProvider>
}
