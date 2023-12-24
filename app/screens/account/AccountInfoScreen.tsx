import { Avatar } from "@ui-kitten/components"
import { Text, Toggle, Screen, Group, Item } from "app/components"
import {
  AppsIcon,
  InfoIcon,
  LockIcon,
  MailIcon,
  MegaphoneIcon,
  NotificationBellIcon,
  StarIcon,
} from "app/components/icons"
import { useStores } from "app/models"
import { AccountSettingScreenProps } from "app/navigators"
import { colors, spacing } from "app/theme"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

interface AccountInfoScreenProps extends AccountSettingScreenProps<"Account"> {}

export const AccountInfoScreen: FC<AccountInfoScreenProps> = observer(function AccountInfoScreen({
  navigation,
}) {
  const { settingsStore, authenticationStore, spacesStore } = useStores()

  const logout = () => {
    navigation.goBack()

    settingsStore.reset()
    spacesStore.reset()
    authenticationStore.logout()
  }

  return (
    <Screen preset="scroll" contentContainerStyle={$containerStyle}>
      <View style={$detailsContainer}>
        <Avatar source={{ uri: authenticationStore.user?.picture }} size="medium" />
        <View>
          <Text style={$accountText}>{authenticationStore.user.name}</Text>
          <Text style={[$emailText, $accountText]}>{authenticationStore.user.email}</Text>
        </View>
      </View>
      <Group heading="Settings">
        <Item
          LeftAccessory={NotificationBellIcon}
          text="Push Notification"
          RightAccessory={() => (
            <Text style={$actionHelperText}>{settingsStore.pushNotificationDisplayText}</Text>
          )}
          onPress={() => navigation.navigate("PushNotification")}
        />
        <Item
          subText="Quick unlock with Face ID or passcode"
          hideRightArrow
          LeftAccessory={LockIcon}
          text="Auto-lock after 2 mins"
          onPress={() => navigation.navigate("PushNotification")}
          RightAccessory={observer(() => (
            <Toggle
              variant="switch"
              value={settingsStore.autoLock}
              onValueChange={() => settingsStore.toggleAutoLock()}
            />
          ))}
        />
        <Item
          hideRightArrow
          LeftAccessory={MegaphoneIcon}
          text="Shake to send feedback"
          onPress={() => navigation.navigate("PushNotification")}
          RightAccessory={observer(() => (
            <Toggle
              value={settingsStore.shakeToSendFeedback}
              variant="switch"
              onValueChange={() => settingsStore.toggleShakeToSendFeedback()}
            />
          ))}
        />
      </Group>

      <Group heading="HELP AND FEEDBACK">
        <Item text="Send Feedback" LeftAccessory={MailIcon} />
        <Item text="Rate Us" LeftAccessory={StarIcon} />
        <Item text="More Poly Apps" LeftAccessory={AppsIcon} />
        <Item text="About" LeftAccessory={InfoIcon} />
      </Group>

      <Group>
        <Item text="Logout" textStyle={$logoutText} onPress={logout} hideRightArrow />
      </Group>

      <Text style={$versionText}>V 1.0.0</Text>
    </Screen>
  )
})

const $containerStyle: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingBottom: spacing.xxl,
}

const $logoutText: TextStyle = {
  color: colors.error,
}

const $actionHelperText: TextStyle = {
  fontSize: 14,
  color: colors.palette.neutral500,
  marginRight: spacing.sm,
}

const $detailsContainer: ViewStyle = {
  gap: spacing.xxs,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: spacing.lg,
}

const $emailText: TextStyle = {
  color: colors.palette.neutral500,
  fontSize: 14,
  lineHeight: 14,
}

const $versionText: TextStyle = {
  color: colors.palette.neutral500,
  fontSize: 14,
  textAlign: "center",
  marginBottom: spacing.md,
}

const $accountText: TextStyle = {
  textAlign: "center",
}
