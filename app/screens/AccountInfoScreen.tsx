import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Divider, Screen, SettingsItem, Text } from "app/components"
import { colors, spacing } from "app/theme"
import { useNavigation } from "@react-navigation/native"
import {
  AccountIcon,
  AppsIcon,
  InfoIcon,
  LockIcon,
  MailIcon,
  MegaphoneIcon,
  NotificationBellIcon,
  StarIcon,
} from "app/components/icons"

interface AccountInfoScreenProps extends AppStackScreenProps<"AccountInfo"> {}

export const AccountInfoScreen: FC<AccountInfoScreenProps> = observer(function AccountInfoScreen() {
  const navigation = useNavigation()

  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={$containerStyle}>
      <View style={$header}>
        <Text text="Account" preset="formLabel" />
        <Button preset="link" onPress={() => navigation.goBack()}>
          Done
        </Button>
      </View>
      <Text preset="formLabel" style={$sectionTitle}>
        Settings
      </Text>
      <SettingsItem
        label="Push Notifications"
        Icon={NotificationBellIcon}
        actionHelperText="None"
      />
      <SettingsItem
        label="Auto-lock after 2 mins"
        subLabel="Quick unlock with Face ID or passcode"
        Icon={LockIcon}
        isToogle
      />
      <SettingsItem label="Shake to send feedback" Icon={MegaphoneIcon} isToogle />
      <SettingsItem label="Manage account" Icon={AccountIcon} />
      <Divider />
      <Text preset="formLabel" style={$sectionTitle}>
        Help and Feedback
      </Text>
      <SettingsItem label="Send feedback" Icon={MailIcon} />
      <SettingsItem label="Rate us" Icon={StarIcon} />
      <SettingsItem label="More Poly apps" Icon={AppsIcon} />
      <SettingsItem label="About" Icon={InfoIcon} />
      <Divider />
      <SettingsItem label="Logout" style={$logoutIcon} labelStyle={$logoutText} />
      <Divider />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral800,
}

const $containerStyle: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.md,
}

const $header: ViewStyle = {
  width: "60%",
  marginLeft: "auto",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: spacing.md,
}

const $sectionTitle: TextStyle = {
  fontSize: 14,
  textTransform: "uppercase",
  color: colors.palette.neutral500,
}

const $logoutIcon: ViewStyle = {
  marginTop: 0,
}

const $logoutText: TextStyle = {
  color: colors.error,
}
