import { colors, spacing } from "app/theme"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { TouchableOpacity, ViewStyle } from "react-native"
import { AddIcon } from "./icons"
import { useCreateTask } from "app/context/create-task"
import { CreateTask } from "./BottomSheets/CreateTask"
import * as Haptics from "expo-haptics"
import { PickDateBottomSheet } from "./BottomSheets/PickDate"

export const BottomCreateTask = observer(function BottomCreateTask() {
  const { showCreateTaskModal, isTaskModalOpen, isDatePickerVisible } = useCreateTask()

  const handleOnPress = React.useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    showCreateTaskModal()
  }, [])

  return (
    <>
      <TouchableOpacity style={$container} onPress={handleOnPress}>
        {<AddIcon fill={colors.text} width={40} height={40} />}
      </TouchableOpacity>
      {isTaskModalOpen && <CreateTask />}
      {isDatePickerVisible && <PickDateBottomSheet />}
    </>
  )
})

const $container: ViewStyle = {
  position: "absolute",
  borderRadius: 10000,
  bottom: 105,
  right: spacing.md,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.palette.main100,
  borderWidth: 0,
  width: 60,
  height: 60,
}
