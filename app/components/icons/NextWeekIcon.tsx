import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
export const NextWeekIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" width={24} height={24} {...props}>
    <G stroke="#535358" strokeLinejoin="round" strokeWidth={2} {...props}>
      <Path strokeLinecap="round" d="m15 17 3 3-3 3" />
      <Path d="M5 8a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z" />
      <Path strokeLinecap="round" d="M5 12h22m-6-4V4M11 8V4" />
    </G>
  </Svg>
)
