import { colors } from "app/theme"
import * as React from "react"
import Svg, { Path, Text, TSpan, SvgProps, G } from "react-native-svg"
import { format } from "date-fns"

interface Props extends SvgProps {
  isFocused: boolean
}

export const TodayIcon = (props: Props) => {
  const currentDate = format(new Date(), "d")

  if (props.isFocused) {
    return (
      <Svg fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
        <G fill={colors.palette.main100}>
          <Path d="M22 14v-2c0-.839 0-1.585-.013-2.25H2.013C2 10.415 2 11.161 2 12v2c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14ZM7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z" />
        </G>
        <Text x="50%" y="80%" textAnchor="middle" fontSize="10" fill={colors.palette.neutral900}>
          <TSpan>{currentDate}</TSpan>
        </Text>
      </Svg>
    )
  }

  return (
    <Svg viewBox="0 0 24 24" width={24} height={24} {...props}>
      <G>
        <Path
          stroke={colors.palette.neutral500}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M22 14v-2c0-.839 0-1.585-.013-2.25H2.013C2 10.415 2 11.161 2 12v2c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14ZM7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z"
          {...props}
        />
      </G>
      <Text x="50%" y="80%" textAnchor="middle" fontSize="10" fill={colors.palette.neutral500}>
        <TSpan>{currentDate}</TSpan>
      </Text>
    </Svg>
  )
}
