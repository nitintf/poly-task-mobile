import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import React, { useRef } from "react"
import { TextField } from "../TextField"

export const AddSpace: React.FC = () => {
  const sheet = useRef<BottomSheetModal>(null)
  const { bottom } = useSafeAreaInsets()

  function showModal() {
    sheet.current?.present()
  }

  function dismissModal() {
    sheet.current?.dismiss()
  }

  return (
    <BottomSheetModal
      ref={sheet}
      snapPoints={["50%"]}
      stackBehavior="replace"
      enableDismissOnClose
      backdropComponent={(props) => (
        <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
      )}
    >
      <TextField />
    </BottomSheetModal>
  )
}
