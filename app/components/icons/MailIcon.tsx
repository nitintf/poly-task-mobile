import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const MailIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="-0.5 0 25 25" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.01 21.39h10a4 4 0 0 0 4-4v-10a4 4 0 0 0-4-4h-12a4 4 0 0 0-4 4v5M1.01 18.39h10M1.01 15.39h4"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.209 5.42c-5.61 10.64-12.81 10.63-18.42 0"
    />
  </Svg>
)
