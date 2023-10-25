import { Text, Toggle } from "app/components"
import { colors, spacing, typography } from "app/theme"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { SvgProps } from "react-native-svg"
import { RightArrowIcon } from "../icons"

export interface SettingsItemProps {
  style?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  label: string
  subLabel?: string
  onPress?: () => void
  disabled?: boolean
  isToogle?: boolean
  actionHelperText?: string
  Icon?: (props: SvgProps) => JSX.Element
}

export const SettingsItem = observer(function SettingsItem(props: SettingsItemProps) {
  const {
    style,
    label,
    subLabel,
    Icon,
    labelStyle,
    isToogle,
    actionHelperText,
    disabled,
    onPress,
  } = props
  const $styles = [$container, style]

  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View style={$styles}>
        {Icon && <Icon style={$iconStyles} />}
        <View>
          <Text style={[$text, labelStyle]} preset="formLabel">
            {label}
          </Text>
          {subLabel && (
            <Text preset="formHelper" style={$textHelper}>
              {subLabel}
            </Text>
          )}
        </View>
        <View
          style={$rightActionsContainer}
          pointerEvents="none"
          accessibilityElementsHidden={true}
          importantForAccessibility={"no-hide-descendants"}
        >
          {isToogle ? (
            <>
              <Toggle variant="switch" />
            </>
          ) : (
            <>
              {actionHelperText && <Text style={$actionHelperText}>{actionHelperText}</Text>}
              <RightArrowIcon />
            </>
          )}
        </View>
      </View>
    </Pressable>
  )
})

const $container: ViewStyle = {
  flexDirection: "row",
  // justifyContent: "space-evenly",
  alignItems: "center",
  marginTop: spacing.lg,
}

const $iconStyles: ViewStyle = {
  marginRight: spacing.lg,
}

const $text: TextStyle = {
  fontFamily: typography.secondary.normal,
  color: colors.palette.neutral200,
}

const $textHelper: TextStyle = {
  fontFamily: typography.secondary.light,
  color: colors.palette.neutral500,
  fontSize: 12,
  lineHeight: 15,
}

const $rightActionsContainer: ViewStyle = {
  marginLeft: "auto",
  flexDirection: "row",
}

const $actionHelperText: TextStyle = {
  fontSize: 14,
  color: colors.palette.neutral500,
  marginRight: spacing.sm,
}
