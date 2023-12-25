import { colors } from "app/theme"
import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
export const EditIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <G stroke={colors.text} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <Path d="m21.28 6.4-9.54 9.54c-.95.95-3.77 1.39-4.4.76-.63-.63-.2-3.45.75-4.4l9.55-9.55a2.58 2.58 0 1 1 3.64 3.65v0Z" />
      <Path d="M11 4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h11c2.21 0 3-1.8 3-4v-5" />
    </G>
  </Svg>
)
