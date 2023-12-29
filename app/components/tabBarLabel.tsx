import React from "react"
import { Text } from "./Text"
import { TextStyle } from "react-native"
import { colors } from "app/theme"

interface TabBarLabelProps {
  children: React.ReactNode
  focused: boolean
}

export const TabBarLabel: React.FC<TabBarLabelProps> = ({ children, focused }) => {
  const color = focused ? colors.palette.main100 : colors.palette.neutral500

  return (
    <Text preset="formHelper" style={[$commonStyles, { color }]}>
      {children}
    </Text>
  )
}

const $commonStyles: TextStyle = {
  fontSize: 12,
}
