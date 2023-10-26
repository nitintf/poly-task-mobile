import { Divider, Text } from "app/components"
import { colors, spacing, typography } from "app/theme"
import React, { PropsWithChildren } from "react"
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { RightArrowIcon } from "../icons"

const $container: ViewStyle = {
  flexDirection: "row",
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

interface SettingSectionProps {
  title: string
}

export const SettingsSection: React.FC<SettingSectionProps & PropsWithChildren> = ({
  title,
  children,
}) => {
  return (
    <View>
      <Text preset="formLabel" style={$sectionTitle} accessibilityRole="header">
        {title}
      </Text>
      {children}
      <Divider />
    </View>
  )
}

const $sectionTitle: TextStyle = {
  fontSize: 14,
  textTransform: "uppercase",
  color: colors.palette.neutral500,
}

interface SettingItemProps extends PropsWithChildren {
  onPress?: () => void
}

export const SettingItem: React.FC<SettingItemProps> = ({ children, onPress }) => {
  if (onPress) {
    return (
      <Pressable style={$container} onPress={onPress}>
        {children}
      </Pressable>
    )
  }
  return <View style={$container}>{children}</View>
}

export const SettingIcon: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={$iconStyles}>{children}</View>
}

export interface SettingLabelProps extends PropsWithChildren {
  subLabel?: string
  styles?: StyleProp<TextStyle>
}

export const SettingLabel: React.FC<SettingLabelProps> = ({ children, subLabel, styles }) => {
  return (
    <View>
      <Text preset="formLabel" style={[$text, styles]}>
        {children}
      </Text>
      {subLabel && (
        <Text preset="formHelper" style={$textHelper}>
          {subLabel}
        </Text>
      )}
    </View>
  )
}

export const SettingAction: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={$rightActionsContainer}>{children || <RightArrowIcon />}</View>
}
