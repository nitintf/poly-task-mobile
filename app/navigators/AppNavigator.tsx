import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import * as Screens from "app/screens"
import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { Space, useStores } from "app/models"
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
  SpaceForm: { isUpdateForm: boolean; updatingSpaceData?: Space }
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
      screenOptions={{
        navigationBarColor: colors.background,
        headerShown: false,
      }}
      initialRouteName={isAuthenticated ? "Home" : "SignIn"}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Home" component={HomeNavigator} />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="AccountSetting" component={AccountSettingNavigator} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="SpaceForm"
              component={CreateSpaceNavigator}
              initialParams={{ isUpdateForm: false, updatingSpaceData: null }}
            />
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
