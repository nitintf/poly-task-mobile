import { Group, Item, Screen } from "app/components"
import { TickIcon } from "app/components/icons"
import { PushNotification, getDisplayTextForPushNotification, useStores } from "app/models"
import { AccountSettingScreenProps } from "app/navigators"
import { spacing } from "app/theme"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle } from "react-native"

interface PushNotificationScreenProps extends AccountSettingScreenProps<"PushNotification"> {}

export const PushNotificationScreen: FC<PushNotificationScreenProps> = observer(
  function PushNotificationScreen() {
    const { settingsStore } = useStores()

    return (
      <Screen style={$root} preset="fixed" contentContainerStyle={$containerStyle}>
        <View style={$optionsContainer}>
          <Group>
            {Object.values(PushNotification).map((value, idx) => (
              <Item
                key={idx}
                onPress={() => settingsStore.setPushNotification(value as any)}
                text={getDisplayTextForPushNotification(value)}
                hideRightArrow
                RightAccessory={value === settingsStore.pushNotification ? TickIcon : null}
              />
            ))}
          </Group>
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $containerStyle: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingBottom: spacing.xxl,
}

const $optionsContainer: ViewStyle = {
  marginTop: spacing.sm,
}
