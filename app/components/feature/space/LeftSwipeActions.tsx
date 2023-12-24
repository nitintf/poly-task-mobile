import { HeartIcon } from "app/components/icons"
import { colors, spacing } from "app/theme"
import React from "react"
import { Animated, View, ViewStyle } from "react-native"

interface Props {
  progress: any
  dragX: any
  isFavorite: boolean
}

export const LeftSwipeActions: React.FC<Props> = ({ isFavorite, dragX }) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  })

  const $styles = isFavorite
    ? { backgroundColor: colors.palette.neutral500 }
    : { backgroundColor: colors.palette.secondary500 }

  return (
    <View style={[$container, $styles]}>
      <Animated.View style={{ transform: [{ translateX: scale }] }}>
        <HeartIcon fill={colors.text} isFav={isFavorite} />
      </Animated.View>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  paddingLeft: spacing.md,
}
