import { colors } from "app/theme"
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props extends SvgProps {
  isFocused: boolean
}

export const SpacesIcon = (props: Props) =>
  props.isFocused ? (
    <Svg width={36} height={36} viewBox="0 0 24 24" {...props}>
      <Path
        fill={colors.palette.main100}
        fillRule="evenodd"
        d="M3 8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 5 5.08 5 6.2 5h3.475c.489 0 .733 0 .963.055.204.05.4.13.579.24.201.123.374.296.72.642l.126.126c.346.346.519.519.72.642.18.11.375.19.579.24.23.055.474.055.963.055H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 8.52 21 9.08 21 10.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 19 18.92 19 17.8 19H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.48 3 16.92 3 15.8V8.2Z"
      />
    </Svg>
  ) : (
    <Svg width={36} height={36} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={colors.palette.neutral550}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M3 8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 5 5.08 5 6.2 5h3.475c.489 0 .733 0 .963.055.204.05.4.13.579.24.201.123.374.296.72.642l.126.126c.346.346.519.519.72.642.18.11.375.19.579.24.23.055.474.055.963.055H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 8.52 21 9.08 21 10.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 19 18.92 19 17.8 19H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.48 3 16.92 3 15.8V8.2Z"
      />
    </Svg>
  )
