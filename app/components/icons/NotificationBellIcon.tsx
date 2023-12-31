import { colors } from "app/theme"
import * as React from "react"
import Svg, { SvgProps, G, Path, Circle } from "react-native-svg"

export const NotificationBellIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <G fill={colors.palette.main500}>
      <Path
        fillRule="evenodd"
        d="M14.802 19.831a.76.76 0 0 1 .742 1.122 3.132 3.132 0 0 1-.841.966c-.353.272-.763.481-1.203.621-.44.14-.907.212-1.376.212-.469 0-.936-.071-1.376-.212-.44-.14-.85-.349-1.202-.62a3.131 3.131 0 0 1-.841-.967.76.76 0 0 1 .741-1.122c.193.02 1.697.167 2.678.167.981 0 2.486-.148 2.678-.167ZM15.742 1.987a8.643 8.643 0 0 0-7.213.1C6.277 3.166 4.853 5.375 4.853 7.793v1.274A6.606 6.606 0 0 1 4 12.308l-.227.403c-1.397 2.483.13 5.554 3.018 6.067a30.5 30.5 0 0 0 10.665 0l.16-.028c2.85-.506 4.438-3.46 3.219-5.987l-.266-.55a6.76 6.76 0 0 1-.675-2.94v-.322a3.25 3.25 0 1 1-2.439-5.956 6.836 6.836 0 0 0-1.507-.916l-.205-.092Z"
        clipRule="evenodd"
      />
      <Circle fill={"green"} cx={18.248} cy={6.148} r={2.5} />
    </G>
  </Svg>
)
