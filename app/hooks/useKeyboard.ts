import { useEffect, useState } from "react"
import { Keyboard, KeyboardEvent } from "react-native"

type KeyboardMetrics = {
  height: number
  screenX: number
  screenY: number
  width: number
}

type KeyboardCoordinates = {
  start: undefined | KeyboardMetrics
  end: KeyboardMetrics
}

type KeyboardState = {
  keyboardShown: boolean
  coordinates: KeyboardCoordinates
  keyboardHeight: number
}

/**
 * Hook that provides information about the state of the keyboard.
 * @returns {KeyboardState} The state of the keyboard.
 */
export function useKeyboard(): KeyboardState {
  const initialValue: KeyboardCoordinates = {
    start: undefined,
    end: {
      height: 0,
      screenX: 0,
      screenY: 0,
      width: 0,
    },
  }

  const [shown, setShown] = useState(false)
  const [coordinates, setCoordinates] = useState<KeyboardCoordinates>(initialValue)
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0)

  const handleKeyboardWillShow = (e: KeyboardEvent): void => {
    setCoordinates({ start: e.startCoordinates, end: e.endCoordinates })
  }

  const handleKeyboardDidShow = (e: KeyboardEvent): void => {
    setShown(true)
    setCoordinates({ start: e.startCoordinates, end: e.endCoordinates })
    setKeyboardHeight(e.endCoordinates.height)
  }

  const handleKeyboardWillHide = (e: KeyboardEvent): void => {
    setCoordinates({ start: e.startCoordinates, end: e.endCoordinates })
  }

  const handleKeyboardDidHide = (e: KeyboardEvent): void => {
    setShown(false)
    if (e) {
      setCoordinates({ start: e.startCoordinates, end: e.endCoordinates })
    } else {
      setCoordinates(initialValue)
      setKeyboardHeight(0)
    }
  }

  useEffect(() => {
    const subscriptions = [
      Keyboard.addListener("keyboardWillShow", handleKeyboardWillShow),
      Keyboard.addListener("keyboardDidShow", handleKeyboardDidShow),
      Keyboard.addListener("keyboardWillHide", handleKeyboardWillHide),
      Keyboard.addListener("keyboardDidHide", handleKeyboardDidHide),
    ]

    return () => {
      subscriptions.forEach((subscription) => subscription.remove())
    }
  }, [])

  return {
    keyboardShown: shown,
    coordinates,
    keyboardHeight,
  }
}
