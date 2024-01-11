import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { BottomCreateTask, Screen, Text, TopHeader } from "app/components"
import { spacing } from "app/theme"

interface StatsScreenProps extends AppStackScreenProps<"Stats"> {}

export const StatsScreen: FC<StatsScreenProps> = observer(function StatsScreen({ navigation }) {
  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      style={$root}
      preset="fixed"
      safeAreaEdges={["top"]}
    >
      <TopHeader navigate={navigation.navigate} />
      <Text text="Stats" preset="heading" />
      <BottomCreateTask />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $screenContentContainer: ViewStyle = {
  paddingHorizontal: spacing.md,
  flex: 1,
}
