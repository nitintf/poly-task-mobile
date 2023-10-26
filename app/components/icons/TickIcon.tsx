import { colors } from "app/theme"
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const TickIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 -0.5 25 25" {...props}>
    <Path
      stroke={colors.palette.main100}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.5 12.5 4.667 4.5L19.5 8"
    />
  </Svg>
)
