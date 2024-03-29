import React, { useCallback, useMemo, useState } from "react"
import { BottomSheet } from "./BottomSheet"
import { CalendarList } from "react-native-calendars"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Text } from "../Text"
import { colors, spacing, typography } from "app/theme"
import { Divider } from "../Divider"
import { TomorrowIcon } from "../icons/TomorrowIcon"
import { NextWeekIcon } from "../icons/NextWeekIcon"
import { format, addDays, addWeeks, startOfWeek } from "date-fns"
import { Header } from "../Header"
import { Button } from "../Button"
import { useCreateTask } from "app/context/create-task"
import { getCalendarListTheme, getMarkedDates } from "app/utils/calendar"
import { TodayIcon } from "../icons"
import { CouchIcon } from "../icons/CouchIcon"

export const PickDateBottomSheet = () => {
  const { closeDatePicker, updateTask, task } = useCreateTask()
  const [calState, setCalState] = useState({
    selectedDate: task.date,
    markedDates: getMarkedDates(task.date),
  })

  const handleOnDone = useCallback(() => {
    updateTask("date", calState.selectedDate)
    closeDatePicker()
  }, [calState])

  const handleSelectedDateChange = (date: string) => {
    const formattedDate = new Date(date).toISOString()

    const markedDates = getMarkedDates(date)

    setCalState({
      selectedDate: formattedDate,
      markedDates,
    })
  }

  const theme = useMemo(() => getCalendarListTheme(), [])

  return (
    <BottomSheet onDismiss={closeDatePicker} snapPoints={["86%"]}>
      <Header
        title="Select Date"
        containerStyle={$headerContainer}
        style={$headerStyles}
        RightActionComponent={
          <Button onPress={handleOnDone} style={{ marginRight: spacing.sm }} preset="link">
            Done
          </Button>
        }
        LeftActionComponent={
          <Button onPress={closeDatePicker} style={{ marginLeft: spacing.sm }} preset="link">
            Cancel
          </Button>
        }
      />
      <CalendarList
        testID={"calendar-list"}
        markedDates={calState.markedDates}
        minDate={new Date().toISOString()}
        pastScrollRange={0}
        futureScrollRange={24}
        onDayPress={(date) => handleSelectedDateChange(date.dateString)}
        renderHeader={renderCustomHeader}
        theme={theme}
        ListHeaderComponent={ListHeader}
      />
    </BottomSheet>
  )
}

const ListHeader = () => {
  const { updateTask, closeDatePicker, task } = useCreateTask()

  const handleTomorrowPress = () => {
    const tomorrowDate = addDays(new Date(), 1)
    updateTask("date", tomorrowDate.toISOString())
    closeDatePicker()
  }

  const handleTodayPress = () => {
    const todayDate = new Date()
    updateTask("date", todayDate.toISOString())
    closeDatePicker()
  }

  const handleNextWeekPress = () => {
    const nextWeekMondayDate = addDays(addWeeks(startOfWeek(new Date()), 1), 1)
    updateTask("date", nextWeekMondayDate.toISOString())
    closeDatePicker()
  }

  const nextWeekendPress = () => {
    const nextWeekSaturdayDate = addDays(addWeeks(startOfWeek(new Date()), 1), 6)
    updateTask("date", nextWeekSaturdayDate.toISOString())
    closeDatePicker()
  }

  let todayElement = (
    <TouchableOpacity onPress={handleTodayPress} style={$headerRow}>
      <View style={$headerItem}>
        <TodayIcon isFocused={false} stroke={colors.palette.iosSwitchGreen} />
        <Text preset="formLabel">Today</Text>
      </View>
    </TouchableOpacity>
  )

  let tomorrowElement = (
    <TouchableOpacity onPress={handleTomorrowPress} style={$headerRow}>
      <View style={$headerItem}>
        <TomorrowIcon stroke={colors.palette.accent400} />
        <Text preset="formLabel">Tomorrow</Text>
      </View>
      <Text preset="formHelper" style={$helperText}>
        {format(addDays(new Date(), 1), "EEE")}
      </Text>
    </TouchableOpacity>
  )

  let nextWeekElement = (
    <TouchableOpacity onPress={handleNextWeekPress} style={$headerRow}>
      <View style={$headerItem}>
        <NextWeekIcon stroke={colors.palette.main900} />
        <Text preset="formLabel">Next Week</Text>
      </View>
      <Text preset="formHelper" style={$helperText}>
        Mon
      </Text>
    </TouchableOpacity>
  )

  let nextWeekendElement = (
    <TouchableOpacity onPress={nextWeekendPress} style={$headerRow}>
      <View style={$headerItem}>
        <CouchIcon fill={colors.palette.main900} height={26} />
        <Text preset="formLabel">Next Weekend</Text>
      </View>
      <Text preset="formHelper" style={$helperText}>
        Sat
      </Text>
    </TouchableOpacity>
  )

  const date = new Date(task.date)

  if (format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")) {
    todayElement = null
  } else if (format(date, "yyyy-MM-dd") === format(addDays(new Date(), 1), "yyyy-MM-dd")) {
    tomorrowElement = null
  } else if (
    format(date, "yyyy-MM-dd") ===
    format(addDays(addWeeks(startOfWeek(new Date()), 1), 1), "yyyy-MM-dd")
  ) {
    nextWeekElement = null
  } else if (
    format(date, "yyyy-MM-dd") ===
    format(addDays(addWeeks(startOfWeek(new Date()), 1), 6), "yyyy-MM-dd")
  ) {
    nextWeekendElement = null
  }

  return (
    <View style={{ marginTop: spacing.lg }}>
      {todayElement}
      {tomorrowElement}
      {nextWeekElement}
      {nextWeekendElement}
    </View>
  )
}

function renderCustomHeader(date: any) {
  const header = date.toString("MMMM yyyy")
  const [month, year] = header.split(" ")
  const textStyle: TextStyle = {
    fontFamily: typography.primary.bold,
    fontSize: 15,
    paddingTop: 10,
    color: colors.text,
    paddingRight: 5,
  }

  return (
    <View style={$header}>
      <View style={$headerTextWrapper}>
        <Text style={[$month, textStyle]}>{`${month}`}</Text>
        <Text style={[$year, textStyle]}>{year}</Text>
      </View>
      <Divider />
    </View>
  )
}

const $headerTextWrapper: ViewStyle = {
  flexDirection: "row",
  paddingBottom: spacing.sm,
}

const $header: ViewStyle = {
  marginBottom: 10,
  marginTop: 10,
  width: "100%",
}

const $month: ViewStyle = {
  marginLeft: 0,
}

const $year: ViewStyle = {
  marginRight: 5,
}

const $headerRow: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: spacing.lg,
  paddingHorizontal: spacing.md,
}

const $headerItem: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.md,
}

const $helperText: TextStyle = {
  fontSize: 15,
  color: colors.textDim,
}

const $headerContainer: ViewStyle = {
  paddingTop: 0,
  backgroundColor: colors.palette.neutral800,
  marginBottom: spacing.lg,
}

const $headerStyles: ViewStyle = {
  height: 20,
}
