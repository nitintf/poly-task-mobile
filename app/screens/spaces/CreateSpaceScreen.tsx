import React, { FC, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { CreateSpaceScreenProps as CreateSpaceNavigatorProps } from "app/navigators"
import { Button, Group, Header, Item, Screen, Text, TextField, Toggle } from "app/components"
import { colors, spacing } from "app/theme"
import { ColorIcon, HeartIcon, ListIcon } from "app/components/icons"
import { useStores } from "app/models"
import { useFocusEffect } from "@react-navigation/native"
import ColorPicker, { Preview } from "reanimated-color-picker"

interface CreateSpaceScreenProps extends CreateSpaceNavigatorProps<"CreateSpaceForm"> {}

export const CreateSpaceScreen: FC<CreateSpaceScreenProps> = observer(function CreateSpaceScreen({
  navigation,
}) {
  const { spacesStore } = useStores()

  const RightHeaderAction = useMemo(() => {
    const isDisabled = spacesStore.newSpace.name.trim().length === 0
    return (
      <Button preset="link" disabled={isDisabled}>
        Done
      </Button>
    )
  }, [spacesStore.newSpace.name])

  const onCancel = () => {
    navigation.goBack()
    spacesStore.resetNewSpace()
  }

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
        title="Create Space"
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
          <Item
            text="Parent space"
            LeftAccessory={() => <ListIcon stroke={colors.palette.neutral500} />}
            RightAccessory={() => <Text style={$rightAccessoryText}>No Parent</Text>}
          />
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

const $rightAccessoryText: TextStyle = {
  fontSize: 15,
  color: colors.textDim,
}

const $previewColorStyles: ViewStyle = {
  width: 25,
  height: 25,
  borderRadius: 10000,
}
