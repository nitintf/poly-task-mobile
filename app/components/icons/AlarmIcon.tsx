import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const AlarmIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 5.5 2-2m16 2-2-2m-7 5v4l2 2m6-2a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      {...props}
    />
  </Svg>
)
