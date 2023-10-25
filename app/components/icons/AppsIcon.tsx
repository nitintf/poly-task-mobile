import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const AppsIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 32 32" {...props}>
    <Path
      fill="#fff"
      d="M6 11h5V6H6v5zm7.5 15h5v-5h-5v5zM6 26h5v-5H6v5zm0-7.5h5v-5H6v5zm7.5 0h5v-5h-5v5zM21 6v5h5V6h-5zm-7.5 5h5V6h-5v5zm7.5 7.5h5v-5h-5v5zm0 7.5h5v-5h-5v5z"
    />
  </Svg>
)
