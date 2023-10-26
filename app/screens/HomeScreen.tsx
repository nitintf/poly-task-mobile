import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { colors, spacing } from "app/theme"
import { formatDate } from "app/utils/formatDate"
import { Avatar, ProgressBar } from "@ui-kitten/components"
import { FilterIcon, SearchIcon } from "app/components/icons"
import { useStores } from "app/models"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen({ navigation }) {
  const { authenticationStore } = useStores()

  return (
    <Screen contentContainerStyle={$screenContentContainer} style={$root} preset="auto">
      <View style={$topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("AccountSetting")}>
          <Avatar source={{ uri: authenticationStore.user?.picture }} size="small" />
        </TouchableOpacity>
        <View style={$iconContainer}>
          <FilterIcon />
          <SearchIcon />
        </View>
      </View>

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

const $topContainer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
}

const $iconContainer: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
}

const $progressText: TextStyle = {
  marginTop: spacing.lg,
  color: colors.border,
}

const $progressBar: ViewStyle = {
  marginVertical: spacing.sm,
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxxl,
  paddingHorizontal: spacing.md,
}
