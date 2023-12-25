import React from "react"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import * as Screens from "app/screens"
import { Space } from "app/models"

export type CreateSpaceScreenList = {
  SpaceFormScreen: { isUpdateForm: boolean; updatingSpaceData?: Space }
  ColorPicker: undefined
}

export type CreateSpaceScreenProps<T extends keyof CreateSpaceScreenList> = NativeStackScreenProps<
  CreateSpaceScreenList,
  T
>

const CreateSpace = createNativeStackNavigator<CreateSpaceScreenList>()

export const CreateSpaceNavigator = ({ route }) => (
  <CreateSpace.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="SpaceFormScreen"
  >
    <CreateSpace.Screen
      name="SpaceFormScreen"
      component={Screens.SpaceFormScreen}
      initialParams={route.params}
    />
    <CreateSpace.Screen name="ColorPicker" component={Screens.ColorScreen} />
  </CreateSpace.Navigator>
)
