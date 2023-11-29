import React from "react"
import { BottomSheet } from "./BottomSheet"
import ColorPicker, { Swatches } from "reanimated-color-picker"

interface Props {
  onDissmis: () => void
  setColor: (v: string) => void
  color: string
}

export const CustomColorPicker: React.FC<Props> = ({ onDissmis, setColor, color }) => {
  return (
    <BottomSheet onDissmis={onDissmis} snapPoints={["55%"]}>
      <ColorPicker style={{ width: "100%" }} value={color} onComplete={(c) => setColor(c.hex)}>
        <Swatches />
      </ColorPicker>
    </BottomSheet>
  )
}
