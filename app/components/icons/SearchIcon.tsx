import { colors } from "app/theme"
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const SearchIcon = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" viewBox="0 -0.5 25 25" {...props}>
    <Path
      stroke={colors.palette.main100}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.305 15.714A6.313 6.313 0 0 1 5.618 12.5a6.383 6.383 0 0 1 .351-3.625 6.253 6.253 0 0 1 2.27-2.817 6.071 6.071 0 0 1 6.848 0 6.252 6.252 0 0 1 2.27 2.817 6.382 6.382 0 0 1 .351 3.625 6.312 6.312 0 0 1-1.687 3.214 6.085 6.085 0 0 1-8.716 0v0Z"
      clipRule="evenodd"
    />
    <Path
      fill={colors.palette.main100}
      d="M11.67 7.203a.75.75 0 0 0 .158 1.492l-.158-1.492Zm1.852 2.49a.75.75 0 1 0 1.38-.586l-1.38.585Zm3.12 5.394a.75.75 0 1 0-1.06 1.061l1.06-1.061Zm2.328 4.444a.75.75 0 1 0 1.06-1.062l-1.06 1.061ZM11.828 8.694a1.65 1.65 0 0 1 1.694.997l1.38-.585a3.15 3.15 0 0 0-3.232-1.904l.158 1.492Zm3.754 7.453 3.388 3.383 1.06-1.062-3.388-3.382-1.06 1.061Z"
    />
  </Svg>
)
