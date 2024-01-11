import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const UpArrowIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 3a1 1 0 0 1 .707.293l7 7a1 1 0 0 1-1.414 1.414L13 6.414V20a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 12 3Z"
      clipRule="evenodd"
      {...props}
    />
  </Svg>
)
