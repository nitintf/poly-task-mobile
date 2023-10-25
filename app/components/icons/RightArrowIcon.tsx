import { colors } from "app/theme"
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const RightArrowIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke={colors.palette.neutral700}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 7 5 5-5 5"
    />
  </Svg>
)
