import { colors } from "app/theme"
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const DeleteIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" width={35} height={35} {...props}>
    <Path
      stroke={colors.text}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 5h12M9 5v0a3.951 3.951 0 0 1 6 0v0M9 20h6a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v9a2 2 0 0 0 2 2Z"
    />
  </Svg>
)
