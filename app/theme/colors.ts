const palette = {
  main100: "#4489ea",
  main200: "#0049b0",
  main300: "#0049b0",
  main400: "#0049b0",
  main500: "#0049b0",

  ghost: "#0049b070",

  neutral100: "#FFFFFF",
  neutral200: "#b4b4b4",
  neutral300: "#818181",
  neutral400: "#9c9c9c",
  neutral500: "#767575",
  neutral550: "#535353",
  neutral600: "#4c4c4c",
  neutral650: "#2b2b2bff",
  neutral700: "#363637",
  neutral750: "#222222",
  neutral800: "#1C1C1E",
  neutral850: "#202022",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral200,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral300,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral800,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
}
