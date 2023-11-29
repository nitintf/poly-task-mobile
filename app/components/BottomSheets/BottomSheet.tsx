import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet"
import React, { PropsWithChildren, useEffect, useRef } from "react"
import { Keyboard, View, ViewStyle } from "react-native"
import { colors, spacing } from "app/theme"

interface Props extends PropsWithChildren {
  onDismiss: () => void
  snapPoints?: Array<string>
  showIndicator?: boolean
}

export const BottomSheet: React.FC<Props> = ({
  onDismiss,
  snapPoints = ["30%"],
  children,
  showIndicator = true,
}) => {
  const sheet = useRef<BottomSheetModal>(null)

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
  const containerStylesOverride: ViewStyle = !showIndicator ? { marginTop: -spacing.md } : {}

  return (
    <BottomSheetModal
      ref={sheet}
      snapPoints={snapPoints}
      stackBehavior="replace"
      enableDismissOnClose
      keyboardBehavior="interactive"
      onDismiss={handleDismiss}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          onPress={Keyboard.dismiss}
        />
      )}
      backgroundStyle={$root}
      handleIndicatorStyle={[$indicator, indicatorStyle]}
    >
      <View style={[$container, containerStylesOverride]}>{children}</View>
    </BottomSheetModal>
  )
}

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral800,
}

const $container: ViewStyle = {
  paddingHorizontal: spacing.xs,
}

const $indicator: ViewStyle = {
  backgroundColor: colors.palette.neutral600,
}
