import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const FlagIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 21V3.9S5.875 3 8.5 3s4.375 1.8 7 1.8 3.5-.9 3.5-.9v10.8s-.875.9-3.5.9-4.375-1.8-7-1.8-3.5.9-3.5.9"
      {...props}
    />
  </Svg>
)
