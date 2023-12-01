import { colors, spacing } from "app/theme"
import React, { useCallback, useMemo, useRef, useState } from "react"
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  View,
  ViewStyle,
} from "react-native"
import { Button } from "../Button"
import { TextField } from "../TextField"
import { ColorIcon } from "../icons"
import { BottomSheet } from "./BottomSheet"
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
} from "react-native-reanimated"
import ColorPicker, { Swatches } from "reanimated-color-picker"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useKeyboard } from "app/hooks/useKeyboard"

interface Props {
  onDismiss: () => void
}

export const AddSpace: React.FC<Props> = ({ onDismiss }) => {
  const [spaceName, setSpaceName] = useState("")
  const [color, setColor] = useState("#000")

  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const buttonHeight = useSharedValue(100)
  const textOpacity = useSharedValue(1)

  const keyboard = useKeyboard()

  const onSubmit = useCallback(() => {
    // Do something on submit
    console.log({ spaceName, color })
  }, [spaceName, color])

  const slideDown = useCallback(() => {
    const windowHeight = Dimensions.get("window").height
    const totalSpacing = 2 * spacing.xxxl + 35 + keyboard.keyboardHeight
    const snapPointPercentage = (totalSpacing / windowHeight) * 100
    const snapPoint = `${snapPointPercentage}`

    bottomSheetRef.current?.snapToPosition(snapPoint)
    runAnimation(0, 0)
  }, [keyboard.keyboardHeight])

  const slideUp = useCallback(() => {
    const windowHeight = Dimensions.get("window").height
    const totalSpacing = 2 * spacing.xxl + 5 + keyboard.keyboardHeight
    const snapPointPercentage = (totalSpacing / windowHeight) * 100
    const snapPoint = `${snapPointPercentage}%`

    bottomSheetRef.current?.snapToPosition(snapPoint)
    runAnimation(100, 1)
  }, [keyboard.keyboardHeight])

  const runAnimation = (height: number, opacity: number) => {
    "worklet"
    buttonHeight.value = withTiming(height, { duration: 300, easing: Easing.inOut(Easing.ease) })
    textOpacity.value = withTiming(opacity, { duration: 300, easing: Easing.inOut(Easing.ease) })
  }

  const selectColor = (c: string) => {
    slideUp()
    setColor(c)
  }

  const bottomContainerStyle = useAnimatedStyle(() => ({
    height: buttonHeight.value,
    opacity: textOpacity.value,
  }))

  const colorPickerStyle = useAnimatedStyle(() => ({
    height: 100 - buttonHeight.value,
    opacity: 1 - textOpacity.value,
  }))

  const snapPointPercentage = ((2 * spacing.xxl + 5) / Dimensions.get("window").height) * 100
  const snapPoints = [`${snapPointPercentage}%`]

  const isSavingDisable = useMemo(
    () => spaceName.trim().length === 0 || color === "#000",
    [spaceName, color],
  )

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <BottomSheet
        ref={bottomSheetRef}
        onDismiss={onDismiss}
        snapPoints={snapPoints}
        showIndicator={false}
      >
        <Animated.View style={bottomContainerStyle}>
          <View>
            <TextField
              onChangeText={(tx) => setSpaceName(tx)}
              value={spaceName}
              placeholder="Enter Space name"
              inputWrapperStyle={{ backgroundColor: colors.transparent }}
              autoFocus
              keyboardType="twitter"
              autoCorrect={false}
              autoComplete="off"
              spellCheck={false}
              onSubmitEditing={onDismiss}
            />
          </View>
          <View style={$bottomContainer}>
            <Pressable onPress={slideDown}>
              <ColorIcon />
            </Pressable>
            <Button preset="link" onPress={onSubmit} disabled={isSavingDisable}>
              Save
            </Button>
          </View>
        </Animated.View>
        <Animated.View style={colorPickerStyle}>
          <ColorPicker style={$colorPicker} value={color} onComplete={(c) => selectColor(c.hex)}>
            <Swatches />
          </ColorPicker>
        </Animated.View>
      </BottomSheet>
    </KeyboardAvoidingView>
  )
}

const $bottomContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: -spacing.xs,
}

const $colorPicker: ViewStyle = {
  width: "100%",
  marginTop: spacing.md,
}
