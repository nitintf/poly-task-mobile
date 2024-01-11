import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { BottomCreateTask, Screen, Text, TopHeader } from "app/components"
import { spacing } from "app/theme"

interface BrowseScreenProps extends AppStackScreenProps<"Browse"> {}

export const BrowseScreen: FC<BrowseScreenProps> = observer(function StatsScreen({ navigation }) {
  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      style={$root}
      preset="fixed"
      safeAreaEdges={["top"]}
    >
      <TopHeader navigate={navigation.navigate} />
      <Text text="Browse" preset="heading" />
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
