import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { CreateSpaceScreenProps } from "app/navigators"
import { Button, Header, Screen } from "app/components"
import ColorPicker, { Swatches } from "reanimated-color-picker"
import { colors, spacing } from "app/theme"
import { useStores } from "app/models"
import { GoBackIcon } from "app/components/icons"

interface ColorScreenProps extends CreateSpaceScreenProps<"ColorPicker"> {}

export const ColorScreen: FC<ColorScreenProps> = observer(function ColorScreen({ navigation }) {
  const { spacesStore } = useStores()

  const onCancel = () => {
    navigation.goBack()
  }

  const handleOnChange = (color: string) => {
    spacesStore.updateNewSpaceField("color", color)
    navigation.goBack()
  }

  return (
    <>
      <Header
        title="Color"
        containerStyle={$header}
        LeftActionComponent={
          <Button
            preset="link"
            onPress={onCancel}
            LeftAccessory={() => <GoBackIcon fill={colors.palette.main100} />}
          >
            New Space
          </Button>
        }
      />
      <Screen style={$root} preset="scroll">
        <ColorPicker
          style={$colorPicker}
          value={spacesStore.newSpace.color}
          onComplete={(c) => handleOnChange(c.hex)}
        >
          <Swatches />
        </ColorPicker>
      </Screen>
    </>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.md,
}

const $colorPicker: ViewStyle = {
  width: "100%",
  marginTop: spacing.md,
}

const $header: ViewStyle = {
  paddingTop: 0,
}
