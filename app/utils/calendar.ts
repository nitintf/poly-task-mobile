import { colors } from "app/theme"
import { format } from "date-fns"
import { Theme } from "react-native-calendars/src/types"

export const getMarkedDates = (date: string) => {
  if (date === "") return {}

  return {
    [format(new Date(date), "yyyy-MM-dd")]: {
      selected: true,
      color: colors.palette.main100,
      textColor: colors.text,
    },
  }
}

export const getCalendarListTheme = (): Theme => {
  return {
    stylesheet: {},
    calendarBackground: colors.palette.neutral800,
    // @ts-ignore
    "stylesheet.day.basic": {
      today: {
        borderRadius: "100%",

        borderWidth: 0.8,
        borderColor: colors.palette.main100,
      },
      todayText: {
        color: colors.text,
      },
    },
    dayTextColor: colors.text,
    todayDotColor: colors.text,
    selectedDayBackgroundColor: colors.palette.main100,
    textDisabledColor: colors.palette.neutral600,
  }
}
