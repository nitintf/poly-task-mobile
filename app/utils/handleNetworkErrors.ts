function logError(error: Error | any, customMessage?: string) {
  if (__DEV__) {
    // Log to console and Reactotron in development
    const message = error.message || "Unknown"
    console.error(customMessage, error)
    console.log(message)
    console.tron.log(error)
  } else {
    // In production, utilize crash reporting service of choice below:
  }
}

export { logError }
