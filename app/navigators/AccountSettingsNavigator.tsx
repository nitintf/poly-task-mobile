import React from "react"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import { ModalHeader } from "app/components/Header/ModalHeader"
import * as Screens from "app/screens"

export type AccountSettingScreenList = {
  Account: undefined
  PushNotification: undefined
}

export type AccountSettingScreenProps<T extends keyof AccountSettingScreenList> =
  NativeStackScreenProps<AccountSettingScreenList, T>

const AccountSetting = createNativeStackNavigator<AccountSettingScreenList>()

export const AccountSettingNavigator = () => (
  <AccountSetting.Navigator
    screenOptions={{
      headerShown: true,
      header: (props) => <ModalHeader {...props} mainRoute="Account" />,
    }}
    initialRouteName="Account"
  >
    <AccountSetting.Screen
      options={{ title: "Push notifications", headerTitle: "Push notifications" }}
      name="PushNotification"
      component={Screens.PushNotificationScreen}
    />
    <AccountSetting.Screen name="Account" component={Screens.AccountInfoScreen} />
  </AccountSetting.Navigator>
)
