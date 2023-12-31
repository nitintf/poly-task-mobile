import React, { FC, useEffect, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { CreateSpaceScreenProps as CreateSpaceNavigatorProps } from "app/navigators"
import { Button, Group, Header, Item, Screen, TextField, Toggle } from "app/components"
import { colors, spacing } from "app/theme"
import { ColorIcon, HeartIcon } from "app/components/icons"
import { useStores } from "app/models"
import { useFocusEffect } from "@react-navigation/native"
import ColorPicker, { Preview } from "reanimated-color-picker"
import { createSpace } from "app/services/supabase/spaces"

interface SpaceFormScreenProps extends CreateSpaceNavigatorProps<"SpaceFormScreen"> {}

export const SpaceFormScreen: FC<SpaceFormScreenProps> = observer(function ({ navigation, route }) {
  const { params } = route

  const {
    spacesStore,
    authenticationStore: { user },
  } = useStores()

  const onCreateSpace = async () => {
    const newSpace = { ...spacesStore.newSpace }

    spacesStore.addSpace(newSpace)
    navigation.goBack()

    const space = await createSpace(newSpace, user.id)

    if (!space) {
      spacesStore.removeSpace(newSpace.id)
    } else {
      spacesStore.getAllSpaces(user.id)
    }
  }

  const onUpdateSpace = () => {
    const newSpace = { ...spacesStore.newSpace }

    navigation.goBack()
    spacesStore.updateSpaceInSpaces(newSpace)
  }

  const RightHeaderAction = useMemo(() => {
    const isDisabled = spacesStore.newSpace.name.trim().length === 0
    const onPress = params.isUpdateForm ? onUpdateSpace : onCreateSpace
    return (
      <Button preset="link" disabled={isDisabled} onPress={onPress}>
        {params.isUpdateForm ? "Update" : "Done"}
      </Button>
    )
  }, [spacesStore.newSpace.name, params.isUpdateForm])

  const onCancel = () => {
    navigation.goBack()
    spacesStore.resetNewSpace()
  }

  useEffect(() => {
    if (params?.isUpdateForm && params?.updatingSpaceData) {
      spacesStore.setNewSpace(params?.updatingSpaceData)
    }
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener("beforeRemove", () => {
        spacesStore.resetNewSpace()
      })

      return unsubscribe
    }, []),
  )

  return (
    <>
      <Header
        title={params?.isUpdateForm ? "Update Space" : "Create Space"}
        containerStyle={$header}
        RightActionComponent={RightHeaderAction}
        LeftActionComponent={
          <Button preset="link" onPress={onCancel}>
            Cancel
          </Button>
        }
      />
      <Screen contentContainerStyle={$containerStyle} preset="scroll">
        <Group noBorderIndices={[0]}>
          <Item hideRightArrow>
            <TextField
              onChangeText={(text) => spacesStore.updateNewSpaceField("name", text)}
              value={spacesStore.newSpace.name}
              variant="underline"
              placeholder="Name your space"
              autoFocus
            />
          </Item>
          <Item
            onPress={() => navigation.navigate("ColorPicker")}
            LeftAccessory={() => <ColorIcon fill={colors.palette.neutral500} />}
            RightAccessory={observer(() => (
              <ColorPicker value={spacesStore.newSpace.color}>
                <Preview
                  colorFormat="hex"
                  style={{
                    backgroundColor: spacesStore.newSpace.color,
                    ...$previewColorStyles,
                  }}
                  hideText
                />
              </ColorPicker>
            ))}
            text="Color"
          />
        </Group>

        <Group>
          {/* TODO: add parent space or nested space feature */}
          {/* <Item
            text="Parent space"
            LeftAccessory={() => <ListIcon stroke={colors.palette.neutral500} />}
            RightAccessory={() => <Text style={$rightAccessoryText}>No Parent</Text>}
          /> */}
          <Item
            text="Favorite"
            LeftAccessory={() => <HeartIcon fill={colors.palette.neutral500} />}
            RightAccessory={observer(() => (
              <Toggle
                value={spacesStore.newSpace.isFavorite}
                variant="switch"
                onValueChange={() => spacesStore.toogleNewSpaceIsFavorite()}
              />
            ))}
            hideRightArrow
          />
        </Group>
      </Screen>
    </>
  )
})

const $header: ViewStyle = {
  paddingTop: 0,
}

const $containerStyle: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingBottom: spacing.xxl,
}

const $previewColorStyles: ViewStyle = {
  width: 25,
  height: 25,
  borderRadius: 10000,
}
