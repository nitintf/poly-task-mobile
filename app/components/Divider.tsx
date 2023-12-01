import { colors, spacing } from "app/theme"
import * as React from "react"
import { StyleProp, ViewStyle } from "react-native"
import { Divider as DividerRN } from "@ui-kitten/components"

export interface DividerProps {
  style?: StyleProp<ViewStyle>
}

export const Divider = (props: DividerProps) => {
  const { style } = props
  const $styles = [$container, style]

  return <DividerRN style={$styles} />
}

const $container: ViewStyle = {
  height: 0.5,
  width: "100%",
  backgroundColor: colors.palette.neutral500,
  marginVertical: spacing.md,
}
