import React from "react"
import { Image } from "react-native"

export const PolyLogo = () => {
  return (
    <Image
      source={require("../../../assets/images/app-icon-all.png")}
      resizeMode="contain"
      style={$imageStyle}
      testID="poly-logo"
      accessibilityLabel="Poly Logo"
      accessibilityHint="Poly Logo"
      accessibilityRole="image"
      accessibilityState={{}}
      accessible={true}
      nativeID="poly-logo"
      blurRadius={0}
      resizeMethod="auto"
    />
  )
}

const $imageStyle = {
  height: 30,
  width: 30,
}
