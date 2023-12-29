import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const NoDateIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5.75 5.75 12.5 12.5M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
      {...props}
    />
  </Svg>
)
