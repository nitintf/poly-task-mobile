import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, TopHeader } from "app/components"
import { spacing } from "app/theme"
import { AddIcon } from "app/components/icons"
import { AddSpace } from "app/components/BottomSheets/AddSpace"

interface SpacesScreenProps extends AppStackScreenProps<"Spaces"> {}

export const SpacesScreen: FC<SpacesScreenProps> = observer(function SpacesScreen({ navigation }) {
  const [createSpaceModalVisible, showCreateSpaceModal] = useState(false)

  return (
    <Screen contentContainerStyle={$screenContentContainer} style={$root} preset="auto">
      <TopHeader
        navigate={navigation.navigate}
        actions={[{ Icon: AddIcon, onPress: () => showCreateSpaceModal(true), name: "add-spaces" }]}
      />
      <Text text="Spaces" preset="heading" />
      {createSpaceModalVisible && <AddSpace onDissmis={() => showCreateSpaceModal(false)} />}
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
