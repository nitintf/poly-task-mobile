import { Divider, Screen, Text } from "app/components"
import { TickIcon } from "app/components/icons"
import { PushNotification, getDisplayTextForPushNotification, useStores } from "app/models"
import { AppStackScreenProps } from "app/navigators"
import { colors, spacing } from "app/theme"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Pressable, TextStyle, View, ViewStyle } from "react-native"

interface PushNotificationScreenProps extends AppStackScreenProps<"PushNotification"> {}

export const PushNotificationScreen: FC<PushNotificationScreenProps> = observer(
  function PushNotificationScreen() {
    const { settingsStore } = useStores()

    return (
      <Screen style={$root} preset="fixed" contentContainerStyle={$containerStyle}>
        <View style={$optionsContainer}>
          {Object.values(PushNotification).map((value, idx) => (
            <Pressable
              key={value}
              onPress={() => settingsStore.setPushNotification(value as any)}
              style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 } as TextStyle)}
              android_ripple={{ color: colors.palette.neutral600 }}
            >
              <View style={$option}>
                <Text key={value}>{getDisplayTextForPushNotification(value)}</Text>
                {value === settingsStore.pushNotification && <TickIcon />}
              </View>
              {idx < Object.values(PushNotification).length - 1 && (
                <Divider
                  style={{ backgroundColor: colors.palette.neutral600, marginVertical: spacing.sm }}
                />
              )}
            </Pressable>
          ))}
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral800,
}

const $containerStyle: ViewStyle = {
  paddingBottom: spacing.xxl,
}

const $optionsContainer: ViewStyle = {
  marginTop: spacing.lg,
  backgroundColor: colors.palette.neutral750,
  paddingHorizontal: spacing.lg,
  paddingVertical: spacing.lg,
}

const $option: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}
