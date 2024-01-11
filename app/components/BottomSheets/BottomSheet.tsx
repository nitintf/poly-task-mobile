import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet"
import React, { PropsWithChildren, forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { Keyboard, StyleProp, View, ViewStyle } from "react-native"
import { colors, spacing } from "app/theme"

interface Props extends PropsWithChildren {
  onDismiss: () => void
  snapPoints?: Array<string>
  showIndicator?: boolean
  containerStyles?: StyleProp<ViewStyle>
}

export const BottomSheet = forwardRef<BottomSheetModal, Props>(
  (
    {
      onDismiss,
      snapPoints = ["30%"],
      children,
      showIndicator = true,
      containerStyles: $containerStylesOverride,
    },
    ref,
  ) => {
    const sheet = useRef<BottomSheetModal>(null)

    useImperativeHandle(ref, () => sheet.current)

    useEffect(() => {
      if (sheet.current) {
        sheet.current.present()
      }
    }, [])

    const handleDismiss = () => {
      if (sheet.current) {
        Keyboard.dismiss()
        sheet.current.close()
        onDismiss()
      }
    }

    const indicatorStyle: ViewStyle = showIndicator ? { display: "flex" } : { display: "none" }
    const containerStylesOverride: ViewStyle = !showIndicator ? { marginTop: -spacing.sm } : {}

    return (
      <BottomSheetModal
        ref={sheet}
        snapPoints={snapPoints}
        stackBehavior="replace"
        enablePanDownToClose={false}
        keyboardBehavior="interactive"
        onDismiss={handleDismiss}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            pressBehavior={"collapse"}
            disappearsOnIndex={-1}
            onPress={handleDismiss}
          />
        )}
        backgroundStyle={$root}
        handleIndicatorStyle={[$indicator, indicatorStyle]}
      >
        <View style={[$container, containerStylesOverride, $containerStylesOverride]}>
          {children}
        </View>
      </BottomSheetModal>
    )
  },
)

BottomSheet.displayName = "BottomSheet"

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral800,
}

const $container: ViewStyle = {
  paddingHorizontal: 0,
}

const $indicator: ViewStyle = {
  backgroundColor: colors.palette.neutral600,
}
