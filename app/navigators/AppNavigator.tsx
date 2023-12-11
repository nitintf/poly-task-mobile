import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import * as Screens from "app/screens"
import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { useStores } from "../models"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { AccountSettingNavigator } from "./AccountSettingsNavigator"
import { HomeNavigator } from "./HomeNavigator"
import { CreateSpaceNavigator } from "./CreateSpaceNavigator"

export type AppStackParamList = {
  Home: undefined
  SignIn: undefined
  Spaces: undefined
  Stats: undefined
  AccountSetting: undefined
  Browse: undefined
  CreateSpace: undefined
  Color: undefined
}

const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  return (
    <Stack.Navigator
      screenOptions={{ navigationBarColor: colors.background, headerShown: false }}
      initialRouteName={isAuthenticated ? "Home" : "SignIn"}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Home" component={HomeNavigator} />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="AccountSetting" component={AccountSettingNavigator} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="CreateSpace" component={CreateSpaceNavigator} />
          </Stack.Group>
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={Screens.LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
