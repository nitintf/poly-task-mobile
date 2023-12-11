import React from "react"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import * as Screens from "app/screens"

export type CreateSpaceScreenList = {
  CreateSpaceForm: undefined
  ColorPicker: undefined
}

export type CreateSpaceScreenProps<T extends keyof CreateSpaceScreenList> = NativeStackScreenProps<
  CreateSpaceScreenList,
  T
>

const CreateSpace = createNativeStackNavigator<CreateSpaceScreenList>()

export const CreateSpaceNavigator = () => (
  <CreateSpace.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="CreateSpaceForm"
  >
    <CreateSpace.Screen name="CreateSpaceForm" component={Screens.CreateSpaceScreen} />
    <CreateSpace.Screen name="ColorPicker" component={Screens.ColorScreen} />
  </CreateSpace.Navigator>
)
