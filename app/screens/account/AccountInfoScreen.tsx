import { Avatar } from "@ui-kitten/components"
import {
  SettingAction,
  SettingIcon,
  SettingItem,
  SettingLabel,
  SettingsSection,
} from "app/components/settings"
import { Text, Toggle, Divider, Screen } from "app/components"
import {
  AppsIcon,
  InfoIcon,
  LockIcon,
  MailIcon,
  MegaphoneIcon,
  NotificationBellIcon,
  RightArrowIcon,
  StarIcon,
} from "app/components/icons"
import { useStores } from "app/models"
import { AppStackScreenProps } from "app/navigators"
import { colors, spacing } from "app/theme"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

interface AccountInfoScreenProps extends AppStackScreenProps<"Account"> {}

export const AccountInfoScreen: FC<AccountInfoScreenProps> = observer(function AccountInfoScreen({
  navigation,
}) {
  const { settingsStore, authenticationStore } = useStores()

  const logout = () => {
    navigation.goBack()

    settingsStore.reset()
    authenticationStore.logout()
  }

  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={$containerStyle}>
      <View style={$detailsContainer}>
        <Avatar source={{ uri: authenticationStore.user?.picture }} size="large" />
        <View>
          <Text>{authenticationStore.user.name}</Text>
          <Text style={$emailText}>{authenticationStore.user.email}</Text>
        </View>
      </View>
      <Divider />
      <SettingsSection title="Settings">
        <>
          <SettingItem onPress={() => navigation.navigate("PushNotification")}>
            <SettingIcon>
              <NotificationBellIcon />
            </SettingIcon>
            <SettingLabel>Push Noitification</SettingLabel>
            <SettingAction>
              <>
                <Text style={$actionHelperText}>{settingsStore.pushNotificationDisplayText}</Text>
                <RightArrowIcon />
              </>
            </SettingAction>
          </SettingItem>
          <SettingItem>
            <SettingIcon>
              <LockIcon />
            </SettingIcon>
            <SettingLabel subLabel="Quick unlock with Face ID or passcode">
              Auto-lock after 2 mins
            </SettingLabel>
            <SettingAction>
              <Toggle
                variant="switch"
                value={settingsStore.autoLock}
                onValueChange={() => settingsStore.toggleAutoLock()}
              />
            </SettingAction>
          </SettingItem>
          <SettingItem>
            <SettingIcon>
              <MegaphoneIcon />
            </SettingIcon>
            <SettingLabel>Shake to send feedback</SettingLabel>
            <SettingAction>
              <Toggle
                value={settingsStore.shakeToSendFeedback}
                variant="switch"
                onValueChange={() => settingsStore.toggleShakeToSendFeedback()}
              />
            </SettingAction>
          </SettingItem>
        </>
      </SettingsSection>
      <SettingsSection title="Help and Feedback">
        <>
          <SettingItem>
            <SettingIcon>
              <MailIcon />
            </SettingIcon>
            <SettingLabel>Send Feedback</SettingLabel>
            <SettingAction />
          </SettingItem>
          <SettingItem>
            <SettingIcon>
              <StarIcon />
            </SettingIcon>
            <SettingLabel>Rate Us</SettingLabel>
            <SettingAction />
          </SettingItem>

          <SettingItem>
            <SettingIcon>
              <AppsIcon />
            </SettingIcon>
            <SettingLabel>More Poly apps</SettingLabel>
            <SettingAction />
          </SettingItem>

          <SettingItem>
            <SettingIcon>
              <InfoIcon />
            </SettingIcon>
            <SettingLabel>About</SettingLabel>
            <SettingAction />
          </SettingItem>
        </>
      </SettingsSection>
      <SettingItem onPress={logout}>
        <SettingLabel styles={$logoutText}>Logout</SettingLabel>
      </SettingItem>
      <Divider />
      <Text style={$versionText}>V 1.0.0</Text>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral800,
}

const $containerStyle: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingBottom: spacing.xxl,
}

const $logoutText: TextStyle = {
  color: colors.error,
  marginTop: -spacing.md - 10,
}

const $actionHelperText: TextStyle = {
  fontSize: 14,
  color: colors.palette.neutral500,
  marginRight: spacing.sm,
}

const $detailsContainer: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
  marginVertical: spacing.md,
  alignItems: "center",
}

const $emailText: TextStyle = {
  color: colors.palette.neutral500,
  fontSize: 14,
}

const $versionText: TextStyle = {
  color: colors.palette.neutral500,
  fontSize: 14,
  textAlign: "center",
  marginBottom: spacing.md,
}
