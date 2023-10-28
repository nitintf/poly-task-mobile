import { colors } from "app/theme"
import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

interface Props extends SvgProps {
  isFocused: boolean
}

export const TasksIcon = (props: Props) => {
  if (props.isFocused) {
    return (
      <Svg width={28} height={28} fill="none" viewBox="0 0 24 24" {...props}>
        <Path
          fill={colors.palette.main100}
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38C2 19.83 4.17 22 7.81 22h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM9.97 14.9l-2.25 2.25c-.15.15-.34.22-.53.22s-.39-.07-.53-.22l-.75-.75c-.3-.29-.3-.77 0-1.06.29-.29.76-.29 1.06 0l.22.22 1.72-1.72c.29-.29.76-.29 1.06 0 .29.29.29.77 0 1.06Zm0-7-2.25 2.25c-.15.15-.34.22-.53.22s-.39-.07-.53-.22l-.75-.75c-.3-.29-.3-.77 0-1.06.29-.29.76-.29 1.06 0l.22.22 1.72-1.72c.29-.29.76-.29 1.06 0 .29.29.29.77 0 1.06Zm7.59 8.72h-5.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25a.749.749 0 1 1 0 1.5Zm0-7h-5.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25a.749.749 0 1 1 0 1.5Z"
        />
      </Svg>
    )
  }

  return (
    <Svg width={28} height={28} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={colors.palette.neutral700}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.37 8.88h5.25M6.38 8.88l.75.75 2.25-2.25M12.37 15.88h5.25M6.38 15.88l.75.75 2.25-2.25"
      />
      <Path
        stroke={colors.palette.neutral700}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      />
    </Svg>
  )
}
