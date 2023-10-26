import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AppStackParamList } from "./AppNavigator"
import { AccountHeader } from "app/components/Header/AccountHeader"
import * as Screens from "app/screens"

const AccountSetting = createNativeStackNavigator<AppStackParamList>()

export const AccountSettingNavigator = () => (
  <AccountSetting.Navigator
    screenOptions={{
      headerShown: true,
      header: (props) => <AccountHeader {...props} />,
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
