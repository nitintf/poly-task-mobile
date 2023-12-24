import { DeleteIcon } from "app/components/icons"
import { colors } from "app/theme"
import React from "react"
import { Animated, Dimensions, TouchableOpacity, ViewStyle } from "react-native"

const { width } = Dimensions.get("screen")

interface Props {
  progress: any
  dragX: any
  onClick: () => void
}

export const RightSwipeActions: React.FC<Props> = ({ dragX, onClick }) => {
  const scale = dragX.interpolate({
    inputRange: [-90, 30],
    outputRange: [1, 0],
    extrapolate: "clamp",
  })

  return (
    <TouchableOpacity onPress={onClick} style={$container}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <DeleteIcon />
      </Animated.View>
    </TouchableOpacity>
  )
}

const $container: ViewStyle = {
  backgroundColor: colors.palette.primary600,
  justifyContent: "center",
  alignItems: "center",
  width: width / 5,
}
