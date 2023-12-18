import * as React from "react"
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { RightArrowIcon } from "../icons"

export interface AccessoryProps {
  style: StyleProp<any>
}

export interface ItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * An optional component to render on the right side of the input.
   * Example: `RightAccessory={(props) => <Icon icon="ladybug" containerStyle={props.style} color={props.editable ? colors.textDim : colors.text} />}`
   * Note: It is a good idea to memoize this.
   */
  RightAccessory?: React.ComponentType<AccessoryProps>
  /**
   * An optional component to render on the left side of the input.
   * Example: `LeftAccessory={(props) => <Icon icon="ladybug" containerStyle={props.style} color={props.editable ? colors.textDim : colors.text} />}`
   * Note: It is a good idea to memoize this.
   */
  LeftAccessory?: React.ComponentType<AccessoryProps>

  onPress?: () => void

  hideRightArrow?: boolean

  text?: string

  textStyle?: StyleProp<TextStyle>

  subText?: string

  children?: React.ReactNode
}

export const Item = observer(function Item({
  LeftAccessory,
  RightAccessory,
  children,
  style,
  text,
  subText,
  hideRightArrow = false,
  onPress,
  textStyle,
}: ItemProps) {
  const $styles = [$container, hideRightArrow && !RightAccessory && $containerWithoutArrow, style]
  const $textStyles = [$text, textStyle]

  const Wrapper = onPress ? Pressable : View

  return (
    <Wrapper style={$styles} onPress={onPress}>
      <View style={$leftActionContainer}>
        {!!LeftAccessory && <LeftAccessory style={$leftAccessoryStyle} />}
        <View>
          {text && <Text style={$textStyles}>{text}</Text>}
          {subText && (
            <Text preset="formHelper" style={$subText}>
              {subText}
            </Text>
          )}
        </View>
      </View>
      {children && children}
      <View style={$rightActionContainer}>
        {!!RightAccessory && <RightAccessory style={$rightAccessoryStyle} />}
        {!hideRightArrow && (
          <View>
            <RightArrowIcon />
          </View>
        )}
      </View>
    </Wrapper>
  )
})

const $container: ViewStyle = {
  justifyContent: "space-between",
  flexDirection: "row",
}

const $containerWithoutArrow: ViewStyle = {
  justifyContent: "center",
  flexDirection: "column",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 16,
  color: colors.text,
}

const $subText: TextStyle = {
  fontFamily: typography.secondary.light,
  color: colors.palette.neutral500,
  fontSize: 12,
  lineHeight: 15,
}

const $rightActionContainer: ViewStyle = {
  flexDirection: "row",
  paddingRight: spacing.md,
  alignItems: "center",
}

const $leftActionContainer: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
}

const $rightAccessoryStyle: ViewStyle = {
  marginEnd: spacing.xs,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}
const $leftAccessoryStyle: ViewStyle = {
  marginStart: spacing.xs,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}
