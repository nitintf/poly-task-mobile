import { Divider, Screen, Text, TopHeader } from "app/components"
import { SpaceListItem } from "app/components/feature/space/ListItem"
import { AddIcon } from "app/components/icons"
import { Space, useStores } from "app/models"
import { AppStackScreenProps } from "app/navigators"
import { spacing } from "app/theme"
import { observer } from "mobx-react-lite"
import React, { FC, useCallback, useEffect, useState } from "react"
import { RefreshControl, TextStyle, View, ViewStyle } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { FlashList } from "@shopify/flash-list"
import { NoListIcon } from "app/components/icons/NoListIcon"

interface SpacesScreenProps extends AppStackScreenProps<"Spaces"> {}

export const SpacesScreen: FC<SpacesScreenProps> = observer(function SpacesScreen({ navigation }) {
  const [isRefresh, setIsRefresh] = useState(false)
  const {
    spacesStore,
    authenticationStore: { user },
  } = useStores()

  useEffect(() => {
    spacesStore.getAllSpaces(user.id)
  }, [])

  const onRefreshList = useCallback(async () => {
    setIsRefresh(true)
    spacesStore.getAllSpaces(user.id).then(() => {
      setIsRefresh(false)
    })
  }, [])

  const _renderItem = ({ item }: { item: Space }) => {
    return <SpaceListItem {...item} applyTopRadius={false} />
  }

  const _renderComponent = () => {
    return (
      <>
        <Text text="Spaces" preset="heading" style={$topHeaderStyles} />
        {spacesStore.spaces.length === 0 ? (
          <View style={$noListContainer}>
            <NoListIcon />
            <Text preset="subheading" style={$textCenter}>
              Welcome to your workspace
            </Text>
            <Text preset="formHelper" style={$textCenter}>
              Create Spaces to manage and organize your tasks.
            </Text>
          </View>
        ) : (
          <View>
            {/* <Text text="Spaces" preset="heading" style={$topHeaderStyles} /> */}
            {spacesStore.spaces.filter((space) => space.isFavorite).length > 0 && (
              <>
                <Text style={$listHeader} preset="formLabel">
                  Favorites
                </Text>
                <FlatList<Space>
                  data={spacesStore.spaces.filter((space) => space.isFavorite)}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={_renderItem}
                  ItemSeparatorComponent={() => <Divider />}
                  contentContainerStyle={$listStyle}
                  scrollEnabled={false}
                />
              </>
            )}
            <Text
              style={[
                $listHeader,
                spacesStore.spaces.filter((space) => space.isFavorite).length > 0
                  ? $spacesText
                  : {},
              ]}
              preset="formLabel"
            >
              Your Spaces
            </Text>
            <FlatList<Space>
              data={spacesStore.spaces}
              keyExtractor={(item) => item.id.toString()}
              renderItem={_renderItem}
              ItemSeparatorComponent={() => <Divider />}
              contentContainerStyle={$listStyle}
              scrollEnabled={false}
            />
          </View>
        )}
      </>
    )
  }

  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      style={$root}
      preset="fixed"
      safeAreaEdges={["top"]}
    >
      <TopHeader
        navigate={navigation.navigate}
        actions={[
          {
            Icon: AddIcon,
            onPress: () => navigation.navigate("SpaceForm", { isUpdateForm: false }),
            name: "add-spaces",
          },
        ]}
      />
      <FlashList
        data={[]}
        renderItem={() => <></>}
        estimatedItemSize={200}
        ListHeaderComponent={_renderComponent}
        refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={onRefreshList} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />

      {/* TODO: spaces don't get updated inside flash or flat list if we dont do this, need to fix this */}
      {spacesStore.spaces.map((space) => {
        return <React.Fragment key={space.id}></React.Fragment>
      })}
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

const $listStyle: ViewStyle = {
  borderRadius: spacing.md,
  overflow: "hidden",
}

const $topHeaderStyles: ViewStyle = {
  marginBottom: spacing.md,
}

const $textCenter: TextStyle = {
  textAlign: "center",
}

const $noListContainer: ViewStyle = {
  marginTop: spacing.lg,
}

const $listHeader: TextStyle = {
  paddingLeft: spacing.md,
  marginBottom: spacing.sm,
}

const $spacesText: TextStyle = {
  marginTop: spacing.xl,
}
