import { colors } from "app/theme"
import * as React from "react"
import { StyleProp, ViewStyle, View } from "react-native"

export interface DividerProps {
  style?: StyleProp<ViewStyle>
}

export const Divider = (props: DividerProps) => {
  const { style } = props
  const $styles = [$container, style]

  return <View style={$styles} />
}

const $container: ViewStyle = {
  height: 1,
  flex: 1,
  backgroundColor: colors.palette.neutral650,
}
