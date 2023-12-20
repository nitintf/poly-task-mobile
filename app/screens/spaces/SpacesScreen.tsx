import React, { FC, useCallback, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { RefreshControl, ScrollView, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Group, Item, Screen, Text, TopHeader } from "app/components"
import { spacing } from "app/theme"
import { AddIcon } from "app/components/icons"
import { useStores } from "app/models"

interface SpacesScreenProps extends AppStackScreenProps<"Spaces"> {}

export const SpacesScreen: FC<SpacesScreenProps> = observer(function SpacesScreen({ navigation }) {
  const [isRefresh, setIsRefresh] = useState(false)
  const { spacesStore } = useStores()

  useEffect(() => {
    spacesStore.getAllSpaces()
  }, [])

  const onRefreshList = useCallback(async () => {
    setIsRefresh(true)
    spacesStore.getAllSpaces().then(() => {
      setIsRefresh(false)
    })
  }, [])

  return (
    <Screen contentContainerStyle={$screenContentContainer} style={$root} preset="fixed">
      <TopHeader
        navigate={navigation.navigate}
        actions={[
          { Icon: AddIcon, onPress: () => navigation.navigate("CreateSpace"), name: "add-spaces" },
        ]}
      />
      <ScrollView
        refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={onRefreshList} />}
      >
        <Text text="Spaces" preset="heading" />
        {
          <Group style={$spacesListStyle}>
            {spacesStore.spaces.map((space) => (
              <Item
                key={space.id}
                text={space.name}
                hideRightArrow
                LeftAccessory={() => <Text style={{ color: space.color }}>#</Text>}
              />
            ))}
          </Group>
        }
      </ScrollView>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxxl,
  paddingHorizontal: spacing.md,
  flex: 1,
}

const $spacesListStyle: ViewStyle = {
  marginTop: spacing.lg,
}
