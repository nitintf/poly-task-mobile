import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const DateIcon = (props: SvgProps) => (
  <Svg viewBox="-0.5 0 15 15" width={24} height={24} {...props}>
    <Path
      fillRule="evenodd"
      d="M0 2.007C0 1.45.45 1 1.007 1h11.986C13.55 1 14 1.45 14 2.007v11.986C14 14.55 13.55 15 12.993 15H1.007C.45 15 0 14.55 0 13.993V2.007ZM1 5h12v9H1V5ZM3 .5c0-.276.214-.5.505-.5h.99C4.774 0 5 .232 5 .5V1H3V.5Zm6 0c0-.276.214-.5.505-.5h.99c.279 0 .505.232.505.5V1H9V.5Z"
    />
  </Svg>
)
