import { DeleteIcon, EditIcon } from "app/components/icons"
import { colors } from "app/theme"
import React from "react"
import { Animated, Dimensions, TouchableOpacity, View, ViewStyle } from "react-native"

const { width } = Dimensions.get("screen")

interface Props {
  progress: any
  dragX: any
  onClickDelete: () => void
  onClickEdit: () => void
}

export const RightSwipeActions: React.FC<Props> = ({ dragX, onClickDelete, onClickEdit }) => {
  const scaleDelete = dragX.interpolate({
    inputRange: [-90, 50],
    outputRange: [1, 0],
    extrapolate: "clamp",
  })

  const scaleEdit = dragX.interpolate({
    inputRange: [-140, 30],
    outputRange: [1, 0],
    extrapolate: "clamp",
  })

  return (
    <View style={$wrapper}>
      <TouchableOpacity style={[$container, $greyBg]} onPress={onClickEdit}>
        <Animated.View style={{ transform: [{ scale: scaleEdit }] }}>
          <EditIcon />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity style={[$container, $dangerBg]} onPress={onClickDelete}>
        <Animated.View style={{ transform: [{ scale: scaleDelete }] }}>
          <DeleteIcon />
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}

const $container: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  width: width / 6,
}

const $dangerBg: ViewStyle = {
  backgroundColor: colors.palette.primary600,
}
const $greyBg: ViewStyle = {
  backgroundColor: colors.palette.neutral550,
}

const $wrapper: ViewStyle = {
  flexDirection: "row",
}
