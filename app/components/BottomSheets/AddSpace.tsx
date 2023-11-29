import { colors, spacing } from "app/theme"
import React, { useCallback, useState } from "react"
import { Pressable, View, ViewStyle } from "react-native"
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
// import ColorPicker, { Swatches } from "reanimated-color-picker"
import { Text } from "../Text"

interface Props {
  onDismiss: () => void
}

export const AddSpace: React.FC<Props> = ({ onDismiss }) => {
  const [spaceName, setSpaceName] = useState("")
  const [color, setColor] = useState("")
  const onSubmit = useCallback(() => {
    console.log("spaceName :", spaceName, color)
  }, [spaceName, color])

  const buttonHeight = useSharedValue(100)
  const textOpacity = useSharedValue(1)

  const slideDown = () => {
    runAnimation(0, 0)
  }

  const slideUp = () => {
    runAnimation(100, 1)
  }

  const runAnimation = (height: number, opacity: number) => {
    // "worklet"
    buttonHeight.value = withTiming(height, { duration: 300, easing: Easing.inOut(Easing.ease) })
    textOpacity.value = withTiming(opacity, { duration: 300, easing: Easing.inOut(Easing.ease) })
  }

  const selectColor = (c: string) => {
    slideUp()
    setColor(c)
  }

  const bottomContainerStyle = useAnimatedStyle(() => {
    return {
      height: buttonHeight.value,
      opacity: textOpacity.value,
    }
  }, [])

  const colorPickerStyle = useAnimatedStyle(() => {
    return {
      height: 100 - buttonHeight.value,
      opacity: 1 - textOpacity.value,
    }
  }, [])

  const handleSpaceNameChange = (value: string) => {
    setSpaceName(value)
  }

  return (
    <>
      <BottomSheet onDismiss={onDismiss} snapPoints={["12.5%"]} showIndicator={false}>
        <View>
          <TextField
            onChangeText={handleSpaceNameChange}
            value={spaceName}
            placeholder="Enter Space name"
            inputWrapperStyle={{ backgroundColor: colors.transparent }}
            autoFocus
          />
        </View>
        <Animated.View style={[bottomContainerStyle, $bottomContainer]}>
          <Pressable onPress={slideDown}>
            <ColorIcon />
          </Pressable>
          <Button preset="link" onPress={onSubmit}>
            Save
          </Button>
        </Animated.View>
        <Animated.View style={colorPickerStyle}>
          <Pressable onPress={() => selectColor("")}>
            <Text>Nitin</Text>
          </Pressable>
          {/* <ColorPicker style={$colorPicker} value={color} onComplete={(c) => selectColor(c.hex)}>
            <Swatches />
          </ColorPicker> */}
        </Animated.View>
      </BottomSheet>
    </>
  )
}

const $bottomContainer: ViewStyle = {
  width: "100%",
  paddingLeft: spacing.sm,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}

const $colorPicker: ViewStyle = {
  width: "100%",
}
