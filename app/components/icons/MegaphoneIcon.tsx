import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

export const MegaphoneIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G data-name="Layer 2">
      <Path fill="none" d="M0 0h48v48H0z" data-name="invisible box" />
      <G data-name="Q3 icons">
        <Path
          fill="#fff"
          d="M34 6h-.6l-30 8.8a2 2 0 0 0-1.4 2v9a2.2 2.2 0 0 0 1.4 2l30 8.8h.6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM19.1 34.2 8.4 31l1.3 8.4a2.9 2.9 0 0 0 2.9 2.6h4.5a2.8 2.8 0 0 0 2.1-1 3.4 3.4 0 0 0 .8-2.6ZM40 15.3a1.5 1.5 0 0 0 .9-.2l4-2a2 2 0 0 0-1.8-3.6l-4 2a2 2 0 0 0-.9 2.7 2.1 2.1 0 0 0 1.8 1.1ZM44.9 29.6l-4-2a2.1 2.1 0 0 0-2.7.8 2 2 0 0 0 .9 2.7l4 2a1.5 1.5 0 0 0 .9.2 2.1 2.1 0 0 0 1.8-1.1 1.9 1.9 0 0 0-.9-2.6ZM40 23.3h4a2 2 0 0 0 0-4h-4a2 2 0 0 0 0 4Z"
        />
      </G>
    </G>
  </Svg>
)
