import { colors, spacing, typography } from "app/theme"
import React, { useRef } from "react"
import { KeyboardAvoidingView, TextStyle, View, ViewStyle } from "react-native"
import { TextField } from "../TextField"
import { BottomSheet } from "./BottomSheet"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useCreateTask } from "app/context/create-task"
import { Chip } from "react-native-ui-lib"
import { DateIcon } from "../icons/DateIcon"
import { FlagIcon } from "../icons/FalgIcon"
import { AlarmIcon } from "../icons/AlarmIcon"
import { format } from "date-fns"
import { Divider } from "../Divider"

export const CreateTask: React.FC = () => {
  const { task, updateTask, hideCreateTaskModal, openDatePicker } = useCreateTask()

  const bottomSheetRef = useRef<BottomSheetModal>(null)

  return (
    <KeyboardAvoidingView behavior={"height"} keyboardVerticalOffset={500}>
      <BottomSheet
        ref={bottomSheetRef}
        onDismiss={hideCreateTaskModal}
        snapPoints={["52%"]}
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
          />
        </View>
        <View style={$chipsWrapper}>
          <Chip
            label={task.date !== "" ? format(new Date(task.date), "dd MMM yyyy") : "Today"}
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
      </BottomSheet>
    </KeyboardAvoidingView>
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
