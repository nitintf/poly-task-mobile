import React from "react"
import { Pressable, View, ViewStyle } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { spacing } from "app/theme"
import { Avatar } from "@ui-kitten/components"
import { observer } from "mobx-react-lite"
import { useStores } from "app/models"

type Actions = {
  Icon: React.ComponentType
  onPress: () => void
  name: string
}

interface Props {
  navigate: (name: string) => void
  actions?: Array<Actions>
}

export const TopHeader: React.FC<Props> = observer(({ navigate, actions }) => {
  const { authenticationStore } = useStores()

  return (
    <View style={$topContainer}>
      <TouchableOpacity onPress={() => navigate("AccountSetting")}>
        <Avatar source={{ uri: authenticationStore.user?.picture }} size="small" />
      </TouchableOpacity>
      <View style={$iconContainer}>
        {actions?.map(({ name, Icon, onPress }) => {
          return (
            <Pressable key={name} onPress={onPress}>
              <Icon />
            </Pressable>
          )
        })}
      </View>
    </View>
  )
})

const $topContainer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: spacing.sm,
  backgroundColor: "transparent",
}

const $iconContainer: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
}
