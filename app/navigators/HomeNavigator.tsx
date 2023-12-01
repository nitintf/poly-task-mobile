import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import * as Screens from "../screens"
import { colors, spacing } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { SpacesIcon, StatsIcon, TasksIcon } from "app/components/icons"
import { color } from "react-native-reanimated"

export type HomeTabParamList = {
  Tasks: undefined
  Spaces: undefined
  Stats: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<HomeTabParamList>()

export function HomeNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 55 }],
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Tasks"
        component={Screens.HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TasksIcon isFocused={focused} />,
        }}
      />
      <Tab.Screen
        name="Spaces"
        component={Screens.SpacesScreen}
        options={{
          tabBarIcon: ({ focused }) => <SpacesIcon isFocused={focused} />,
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Screens.StatsScreen}
        options={{
          tabBarIcon: ({ focused }) => <StatsIcon isFocused={focused} />,
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.palette.neutral850,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.sm,
}
