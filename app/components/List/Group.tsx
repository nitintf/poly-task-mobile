import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "app/theme"
import { Text } from "../Text"

export interface GroupProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Heading for the group section.
   */
  heading?: string

  /**
   * An optional style override for heading.
   */
  headingStyle?: StyleProp<TextStyle>

  /**
   * Indices of children that should not have a border.
   */
  noBorderIndices?: number[]

  children: React.ReactNode
}

export const Group = observer(function Group(props: GroupProps) {
  const { style, heading, headingStyle } = props
  const $styles = [$container, style]
  const $headingStyles = [$heading, headingStyle]

  // Convert children into an array and add a border to each child except the last one
  const childrenWithBorder = React.Children.toArray(props.children).map((child, index, array) => {
    const isLastChild = index === array.length - 1
    const shouldHaveBorder = !isLastChild && !props.noBorderIndices?.includes(index)
    const childStyle = shouldHaveBorder ? $childWithBorder : $childWithoutBorder

    return (
      <View key={index} style={childStyle}>
        {child}
      </View>
    )
  })

  return (
    <View>
      {heading && <Text style={$headingStyles}>{heading}</Text>}
      <View style={$styles}>{childrenWithBorder}</View>
    </View>
  )
})

const $container: ViewStyle = {
  backgroundColor: colors.palette.neutral800,
  paddingHorizontal: spacing.lg - 5,
  padding: spacing.sm,
  paddingRight: 0,
  borderRadius: spacing.sm,
  marginBottom: spacing.xl,
  gap: spacing.sm,
}

const $childWithBorder: ViewStyle = {
  borderBottomWidth: 0.4,
  borderBottomColor: colors.palette.neutral700,
  paddingBottom: spacing.sm,
}

const $heading: TextStyle = {
  color: colors.palette.neutral500,
  fontSize: 12,
  textTransform: "uppercase",
  marginBottom: spacing.xxxs,
  paddingLeft: spacing.sm,
}

const $childWithoutBorder: ViewStyle = {}
