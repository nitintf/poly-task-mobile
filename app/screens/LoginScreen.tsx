import { AppleIcon, GoogleIcon, PolyLogo, TakingNotesIcon } from "app/components/icons"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"

interface LoginScreenProps extends AppStackScreenProps<"SignIn"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen({ navigation }) {
  function login() {
    navigation.navigate("Home")
  }

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <View style={$headerContainer}>
        <PolyLogo />
        <Text testID="login-heading" preset="heading">
          Poly
        </Text>
      </View>
      <TakingNotesIcon />
      <View style={$bottomContainer}>
        <Text preset="subheading" style={$subHeading}>
          SignIn below to Empower Your Productivity - Anytime, Anywhere!
        </Text>
        <Button
          testID="login-google-button"
          text="Continue with Google"
          style={$tapButton}
          onPress={login}
          LeftAccessory={GoogleIcon}
        />
        <Button
          testID="login-apple-button"
          text="Continue with Apple"
          style={$tapButton}
          onPress={login}
          preset="outlined"
          LeftAccessory={AppleIcon}
        />

        <Text style={$privacyPolicy}>By signing up, you agree to the Privacy Policy</Text>
      </View>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.lg,
  paddingHorizontal: spacing.lg,
}

const $headerContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: spacing.md,
}

const $bottomContainer: ViewStyle = {
  marginTop: -spacing.xxxl - 30,
}

const $subHeading: TextStyle = {
  textAlign: "center",
  marginBottom: spacing.sm,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.lg,
}

const $privacyPolicy: TextStyle = {
  textAlign: "center",
  marginTop: spacing.lg,
  lineHeight: 21,
  fontSize: 13,
  width: "60%",
  alignSelf: "center",
  color: colors.textDim,
}
