import { colors, spacing, typography } from "app/theme"
import React, { useRef } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { TextField } from "../TextField"
import { BottomSheet } from "./BottomSheet"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useCreateTask } from "app/context/create-task"
import { Chip } from "react-native-ui-lib"
import { DateIcon } from "../icons/DateIcon"
import { FlagIcon } from "../icons/FalgIcon"
import { AlarmIcon } from "../icons/AlarmIcon"
import { format, isToday, isTomorrow } from "date-fns"
import { UpArrowIcon } from "../icons/UpArrow"
import { Text } from "../Text"
import { SpacesIcon } from "../icons"
import { useStores } from "app/models"

export const CreateTask: React.FC = () => {
  const { task, updateTask, hideCreateTaskModal, openDatePicker, openSpacePicker } = useCreateTask()
  const {
    spacesStore: { renderSpaceName },
  } = useStores()

  const bottomSheetRef = useRef<BottomSheetModal>(null)

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onDismiss={hideCreateTaskModal}
      snapPoints={["24%"]}
      showIndicator={false}
    >
      <View style={$inputsWrapper}>
        <TextField
          onChangeText={(tx) => updateTask("title", tx)}
          value={task.title}
          placeholder="Task Name"
          inputWrapperStyle={{
            backgroundColor: colors.transparent,
          }}
          autoFocus
          keyboardType="twitter"
          autoCorrect={false}
          autoComplete="off"
          spellCheck={false}
          onSubmitEditing={hideCreateTaskModal}
          style={$taskTitleinputStyle}
          isBottomSheetInput
        />
        <TextField
          onChangeText={(tx) => updateTask("description", tx)}
          value={task.description}
          placeholder="Description"
          inputWrapperStyle={{ backgroundColor: colors.transparent }}
          keyboardType="twitter"
          autoCorrect={false}
          autoComplete="off"
          spellCheck={false}
          onSubmitEditing={hideCreateTaskModal}
          containerStyle={{ marginTop: -spacing.sm }}
          isBottomSheetInput
        />
      </View>
      <View style={$chipsWrapper}>
        <Chip
          label={
            isToday(new Date(task.date))
              ? "Today"
              : isTomorrow(new Date(task.date))
              ? "Tomorrow"
              : format(new Date(task.date), "dd MMM yyyy")
          }
          onPress={openDatePicker}
          borderRadius={7}
          size={35}
          labelStyle={$chipLabelStyle}
          containerStyle={$chipContainerStyle}
          leftElement={
            <DateIcon fill={colors.text} width={13} style={{ marginLeft: spacing.sm }} />
          }
        />
        <Chip
          label={"Priority"}
          onPress={() => console.log("pressed")}
          borderRadius={7}
          size={30}
          labelStyle={$chipLabelStyle}
          containerStyle={$chipContainerStyle}
          leftElement={
            <FlagIcon stroke={colors.text} width={16} style={{ marginLeft: spacing.sm }} />
          }
        />
        <Chip
          label={"Reminder"}
          onPress={() => console.log("pressed")}
          borderRadius={7}
          size={30}
          labelStyle={$chipLabelStyle}
          containerStyle={$chipContainerStyle}
          leftElement={
            <AlarmIcon stroke={colors.text} width={17} style={{ marginLeft: spacing.sm }} />
          }
        />
      </View>
      <View style={$buttonContainer}>
        <TouchableOpacity style={$spaceContainer} onPress={openSpacePicker}>
          <SpacesIcon isFocused={false} width={20} />
          <Text preset="formHelper">
            {task.space ? renderSpaceName(Number(task.space)) : "Space"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={$buttonStyle}>
          <UpArrowIcon fill={colors.text} width={18} height={18} />
        </TouchableOpacity>
      </View>
    </BottomSheet>
  )
}

const $inputsWrapper: ViewStyle = {
  marginBottom: spacing.sm,
}

const $taskTitleinputStyle: TextStyle = {
  fontSize: 22,
}

const $chipsWrapper: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  marginLeft: spacing.sm,
  gap: spacing.sm,
}

const $chipLabelStyle: TextStyle = {
  color: colors.text,
  fontSize: 13,
  fontFamily: typography.primary.light,
}

const $chipContainerStyle: ViewStyle = {
  borderColor: colors.palette.neutral700,
  gap: 5,
}

const $buttonStyle: ViewStyle = {
  width: 35,
  height: 35,
  backgroundColor: colors.palette.main100,
  borderRadius: 100,
  alignItems: "center",
  justifyContent: "center",
}

const $buttonContainer: ViewStyle = {
  paddingHorizontal: spacing.sm,
  borderTopColor: colors.palette.neutral650,
  borderTopWidth: 0.5,
  marginTop: spacing.sm,
  paddingTop: spacing.xs,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
}

const $spaceContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm,
}
