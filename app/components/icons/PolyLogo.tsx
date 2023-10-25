import * as React from "react"
import Svg, { SvgProps, Path, Defs, LinearGradient, Stop } from "react-native-svg"
export const PolyLogo = (props: SvgProps) => (
  <Svg width={34} height={34} viewBox="0 0 34 34" fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M24.52 13.443c-.074.51-.41 1.204-.797 1.807a3.365 3.365 0 0 1-2.145 1.479l-3.898.815a2.998 2.998 0 0 0-1.62.936l-2.556 2.856c-.48.537-.816.409-.816-.311-.006.027-1.269 3.283 2.077 5.213 1.286.741 3.136.475 4.422-.267l6.812-3.929a10.31 10.31 0 0 0 4.944-6.833c.023-.114.042-.228.061-.342l-6.484-1.424Z"
    />
    <Path
      fill="url(#b)"
      d="M22.753 9.517c1.285.742 1.81 1.846 1.81 3.329 0 .201-.015.4-.044.596l2.745 1.179 3.74.245c.479-2.772-.46-5.624-2.142-7.892a15.948 15.948 0 0 0-4.854-4.317A16.105 16.105 0 0 0 19.103.803L17.235 3.22l-.59 2.775 6.107 3.522Z"
    />
    <Path
      fill="url(#c)"
      d="M.783 11.552a16.868 16.868 0 0 1 .552-1.428c1.178-2.69 3.448-4.483 6.24-5.398a10.34 10.34 0 0 1 8.385.874l.686.396L19.102.803C11.291-.757 3.307 3.833.793 11.522l-.01.03Z"
    />
    <Path
      fill="url(#d)"
      d="M18.92 25.971a4.159 4.159 0 0 1-4.65-.336l-2.26 1.554-1.95 3.15c2.164 1.8 4.972 2.378 7.78 2.056a15.963 15.963 0 0 0 6.168-2.04 16.089 16.089 0 0 0 4.06-3.318l-1.162-2.823-1.88-1.765-6.106 3.522Z"
    />
    <Path
      fill="url(#e)"
      d="M14.27 25.635a4.15 4.15 0 0 1-1.584-3.26V11.574c0-.604.178-.706.702-.405-.806-.464-2.668-2.06-4.968-.734-1.285.741-2.344 2.378-2.344 3.861v7.858c0 2.94 1.522 6.005 3.718 7.96.087.078.176.151.266.225l4.21-4.703Z"
    />
    <Path
      fill="url(#f)"
      d="M27.91 5.813c-.002-.001-.003 0-.002.002.303.34.63.737.964 1.19a10.302 10.302 0 0 1-3.16 15.048l-.687.396 3.042 4.588c5.259-5.978 5.272-15.18-.136-21.2l-.021-.024Z"
    />
    <Path
      fill="url(#g)"
      d="M6.344 14.296A4.15 4.15 0 0 1 8.96 10.44l-.217-2.734L7.219 4.58a10.312 10.312 0 0 0-5.904 5.569A15.924 15.924 0 0 0 0 16.506c0 1.835.303 3.568.846 5.171l3.028.406 2.47-.744v-7.044Z"
    />
    <Path
      fill="url(#h)"
      d="M8.96 10.44a4.158 4.158 0 0 1 3.616.26l.111.064 8.896 5.13c.624.36.567.715-.138.862l.513-.107a3.362 3.362 0 0 0 1.764-.99 4.09 4.09 0 0 0 1.109-2.812 4.15 4.15 0 0 0-2.078-3.595l-6.812-3.93a10.327 10.327 0 0 0-8.395-.86c-.11.036-.218.077-.327.117L8.96 10.44Z"
    />
    <Path
      fill="url(#i)"
      d="M19.322 32.153a16.876 16.876 0 0 1-1.514.236A10.318 10.318 0 0 1 6.343 22.132v-.791l-5.497.338C3.399 29.217 11.369 33.829 19.29 32.16l.031-.007Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={20.06}
        x2={23.208}
        y1={24.271}
        y2={13.307}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1724C9" />
        <Stop offset={1} stopColor="#1C64F2" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={27.309}
        x2={19.03}
        y1={10.9}
        y2={2.649}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1C64F2" />
        <Stop offset={1} stopColor="#0092FF" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={16.164}
        x2={3.674}
        y1={5.521}
        y2={6.31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0092FF" />
        <Stop offset={1} stopColor="#45B2FF" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={15.32}
        x2={26.537}
        y1={29.164}
        y2={26.137}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1C64F2" />
        <Stop offset={1} stopColor="#0092FF" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={7.268}
        x2={15.232}
        y1={16.183}
        y2={24.435}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1724C9" />
        <Stop offset={1} stopColor="#1C64F2" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={25.45}
        x2={31.006}
        y1={22.137}
        y2={10.935}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0092FF" />
        <Stop offset={1} stopColor="#45B2FF" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={5.364}
        x2={2.391}
        y1={9.632}
        y2={20.808}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1C64F2" />
        <Stop offset={1} stopColor="#0092FF" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={20.543}
        x2={9.678}
        y1={9.1}
        y2={11.805}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1724C9" />
        <Stop offset={1} stopColor="#1C64F2" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={6.407}
        x2={13.333}
        y1={21.858}
        y2={32.276}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0092FF" />
        <Stop offset={1} stopColor="#45B2FF" />
      </LinearGradient>
    </Defs>
  </Svg>
)
