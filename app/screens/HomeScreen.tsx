import { BottomCreateTask, Screen, Text, TopHeader } from "app/components"
import { FilterIcon } from "app/components/icons"
import { useStores } from "app/models"
import { AppStackScreenProps } from "app/navigators"
import { colors, spacing } from "app/theme"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ScrollView, TextStyle, ViewStyle } from "react-native"
import { ProgressBar } from "react-native-ui-lib"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen({ navigation }) {
  const {
    tasksStore: { tasks },
  } = useStores()

  console.log("tasks :>> ", JSON.stringify(tasks, null, 2))
  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      style={$root}
      preset="fixed"
      safeAreaEdges={["top"]}
    >
      <TopHeader
        navigate={navigation.navigate}
        actions={[{ Icon: FilterIcon, onPress: () => {}, name: "Filter" }]}
      />

      <ScrollView>
        <Text preset="heading">Today</Text>
        <Text preset="formLabel" size="xs" style={$progressText}>
          Your Progress
        </Text>
        <ProgressBar progress={55} progressColor={colors.palette.main100} style={$progressBar} />
      </ScrollView>
      <BottomCreateTask />
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
  backgroundColor: colors.palette.neutral650,
  height: 4,
}

const $screenContentContainer: ViewStyle = {
  paddingHorizontal: spacing.md,
  flex: 1,
}
