import { ProgressBar } from "@ui-kitten/components"
import { Screen, Text, TopHeader } from "app/components"
import { FilterIcon, SearchIcon } from "app/components/icons"
import { AppStackScreenProps } from "app/navigators"
import { colors, spacing } from "app/theme"
import { formatDate } from "app/utils/formatDate"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen({ navigation }) {
  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      style={$root}
      preset="auto"
      safeAreaEdges={["top"]}
    >
      <TopHeader
        navigate={navigation.navigate}
        actions={[
          { Icon: FilterIcon, onPress: () => {}, name: "Filter" },
          { Icon: SearchIcon, onPress: () => {}, name: "Search" },
        ]}
      />

      <View>
        <Text preset="formHelper" size="xs" style={$progressText}>
          Your Progress
        </Text>
        <Text preset="formLabel">Today, {formatDate(new Date().toISOString(), "MMM dd")}</Text>
        <ProgressBar progress={0.5} style={$progressBar} />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $progressText: TextStyle = {
  color: colors.border,
}

const $progressBar: ViewStyle = {
  marginVertical: spacing.sm,
}

const $screenContentContainer: ViewStyle = {
  paddingHorizontal: spacing.md,
}
