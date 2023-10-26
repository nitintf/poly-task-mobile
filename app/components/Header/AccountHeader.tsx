import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import { colors, spacing } from "app/theme"
import React from "react"
import { ViewStyle } from "react-native"
import { Button } from "../Button"
import { Header } from "./Header"
import { RightArrowIcon } from "../icons"

export const AccountHeader: React.FC<NativeStackHeaderProps> = (props) => {
  return (
    <Header
      containerStyle={$container}
      title={props.options.title || props.route.name}
      LeftActionComponent={
        props.route.name === "Account" ? null : (
          <Button
            preset="link"
            onPress={() => props.navigation.goBack()}
            LeftAccessory={() => (
              <RightArrowIcon
                style={$backButton}
                stroke={colors.palette.main100}
                width={30}
                height={30}
              />
            )}
          ></Button>
        )
      }
      RightActionComponent={
        props.route.name === "Account" ? (
          <Button
            onPress={() => props.navigation.goBack()}
            style={{ marginRight: spacing.sm }}
            preset="link"
          >
            Done
          </Button>
        ) : null
      }
    />
  )
}

const $container: ViewStyle = {
  paddingTop: 0,
}

const $backButton: ViewStyle = {
  transform: [{ rotate: "180deg" }],
}
