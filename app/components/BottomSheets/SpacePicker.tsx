import { NavigationProp, useNavigation } from "@react-navigation/native"
import { useCreateTask } from "app/context/create-task"
import { Space, useStores } from "app/models"
import { AppStackParamList } from "app/navigators"
import { colors, spacing } from "app/theme"
import { observer } from "mobx-react-lite"
import React from "react"
import { TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Button } from "../Button"
import { Header } from "../Header"
import { Text } from "../Text"
import { AddIcon } from "../icons"
import { BottomSheet } from "./BottomSheet"

export const SpacePickerBottomSheet = observer(() => {
  const { closeSpacePicker, updateTask } = useCreateTask()
  const {
    spacesStore: { spaces },
  } = useStores()
  const navigation = useNavigation<NavigationProp<AppStackParamList>>()

  const updateTaskSpace = (space: number) => {
    updateTask("space", space.toString())
    closeSpacePicker()
  }

  const _renderItem = ({ item }: { item: Space }) => {
    return (
      <TouchableOpacity onPress={() => updateTaskSpace(item.id)} style={$spaceItem}>
        <Text style={[$icon, { color: item.color }]}>#</Text>
        <Text preset="formLabel">{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <BottomSheet onDismiss={closeSpacePicker} snapPoints={["80%"]}>
      <Header
        title="Select Space"
        containerStyle={$headerContainer}
        style={$headerStyles}
        LeftActionComponent={
          <Button onPress={closeSpacePicker} style={{ marginLeft: spacing.sm }} preset="link">
            Cancel
          </Button>
        }
        RightActionComponent={
          <TouchableOpacity
            style={$rightIcon}
            onPress={() => navigation.navigate("SpaceForm", { isUpdateForm: false })}
          >
            <AddIcon />
          </TouchableOpacity>
        }
      />
      <ScrollView contentContainerStyle={$scrollView}>
        {spaces.map((item) => {
          return <React.Fragment key={item.id}>{_renderItem({ item })}</React.Fragment>
        })}
      </ScrollView>
    </BottomSheet>
  )
})

const $headerContainer: ViewStyle = {
  paddingTop: 0,
  backgroundColor: colors.palette.neutral800,
  marginBottom: spacing.lg,
}

const $headerStyles: ViewStyle = {
  height: 30,
}

const $spaceItem: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  flexDirection: "row",
  gap: spacing.md,
  alignItems: "center",
  borderBottomWidth: 0.4,
  borderBottomColor: colors.palette.neutral600,
}

const $icon: TextStyle = {
  fontSize: 18,
}

const $rightIcon: ViewStyle = {
  paddingRight: spacing.md,
}

const $scrollView: ViewStyle = {
  height: "100%",
}
