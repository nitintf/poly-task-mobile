import { GoogleIcon, PolyLogo, TakingNotesIcon } from "app/components/icons"
import { useStores } from "app/models"
import * as WebBrowser from "expo-web-browser"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"

interface LoginScreenProps extends AppStackScreenProps<"SignIn"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen() {
  const { authenticationStore } = useStores()

  useEffect(() => {
    WebBrowser.warmUpAsync()

    return () => {
      WebBrowser.coolDownAsync()
    }
  }, [])

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
      <Text preset="subheading" style={$subHeading}>
        Empower Your Productivity - Anytime, Anywhere!
      </Text>
      <Text style={$subHeadingText}>
        Sign In Below To Unlock Your Productivity Potential With Poly!
      </Text>
      <View style={$bottomContainer}>
        <Button
          testID="login-google-button"
          text="Continue with Google"
          onPress={authenticationStore.signInWithGoogle}
          LeftAccessory={GoogleIcon}
        />
        <Text style={$privacyPolicy}>By signing up, you agree to the Privacy Policy</Text>
      </View>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  flex: 1,
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
  flex: 1,
  justifyContent: "flex-end",
}

const $subHeading: TextStyle = {
  textAlign: "center",
  marginTop: -spacing.xxxl - 20,
}

const $subHeadingText: TextStyle = {
  textAlign: "center",
  marginVertical: spacing.md,
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
