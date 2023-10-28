import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, TopHeader } from "app/components"
import { spacing } from "app/theme"
import { AddIcon } from "app/components/icons"

interface SpacesScreenProps extends AppStackScreenProps<"Spaces"> {}

export const SpacesScreen: FC<SpacesScreenProps> = observer(function SpacesScreen({ navigation }) {
  return (
    <Screen contentContainerStyle={$screenContentContainer} style={$root} preset="auto">
      <TopHeader
        navigate={navigation.navigate}
        actions={[{ Icon: AddIcon, onPress: () => {}, name: "add-spaces" }]}
      />
      <Text text="Spaces" preset="heading" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxxl,
  paddingHorizontal: spacing.md,
}
