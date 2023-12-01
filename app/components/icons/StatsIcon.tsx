import { colors } from "app/theme"
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props extends SvgProps {
  isFocused: boolean
}

export const StatsIcon = (props: Props) => {
  if (props.isFocused) {
    return (
      <Svg width={20} height={20} viewBox="-3 0 32 32" {...props}>
        <Path
          fill={colors.palette.main100}
          fillRule="evenodd"
          d="M14 0h-2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm10 16h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V18a2 2 0 0 0-2-2ZM4 9H2a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2Z"
        />
      </Svg>
    )
  }

  return (
    <Svg width={20} height={20} viewBox="-3 0 32 32" {...props}>
      <Path
        fill={"transparent"}
        strokeWidth={2}
        stroke={colors.palette.neutral500}
        d="M14 0h-2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm10 16h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V18a2 2 0 0 0-2-2ZM4 9H2a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2Z"
      />
    </Svg>
  )
}
