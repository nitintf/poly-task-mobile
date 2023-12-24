import React, { useCallback, useRef } from "react"
import { Space, useStores } from "app/models"
import { Alert, Text, TextStyle, ViewStyle } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import { LeftSwipeActions } from "./LeftSwipeActions"
import { RightSwipeActions } from "./RightSwipeActions"
import { colors, spacing, typography } from "app/theme"
import * as Haptics from "expo-haptics"
import { observer } from "mobx-react-lite"
import { deleteSpace } from "app/services/supabase/spaces"
import Animated, { FadeOutUp } from "react-native-reanimated"
import { delay } from "app/utils/delay"

interface Props extends Space {
  applyTopRadius: boolean
}
export const SpaceListItem = observer(({ id, color, name, isFavorite, applyTopRadius }: Props) => {
  const {
    spacesStore,
    authenticationStore: { user },
  } = useStores()
  const swipeableRef = useRef<Swipeable>(null)
  const containerStyles = [$container, applyTopRadius ? $topRadiusStyles : {}]

  const closeSwipeableAction = useCallback(() => {
    if (swipeableRef.current) {
      swipeableRef.current.close()
    }
  }, [])

  const swipeFromRightOpen = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
  }

  const swipeFromLeftOpen = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    closeSwipeableAction()
    await delay(500)
    spacesStore.toggleFavorite(id)
  }

  const handleDeleteSpace = useCallback(async () => {
    closeSwipeableAction()
    const result = await new Promise((resolve) => {
      Alert.alert(
        "Delete Project",
        `Are you sure you want to delete "${name}"`,
        [
          {
            text: "Cancel",
            onPress: () => resolve(false),
            style: "cancel",
          },
          {
            text: "Delete",
            onPress: () => resolve(true),
            style: "destructive",
          },
        ],
        { cancelable: true },
      )
    })

    if (result) {
      await deleteSpace(id)
      spacesStore.getAllSpaces(user.id)
    }
  }, [])

  return (
    <Swipeable
      ref={swipeableRef}
      friction={2}
      leftThreshold={90}
      rightThreshold={41}
      renderLeftActions={(progress, dragX) => (
        <LeftSwipeActions isFavorite={isFavorite} progress={progress} dragX={dragX} />
      )}
      renderRightActions={(progress, dragX) => (
        <RightSwipeActions progress={progress} dragX={dragX} onClick={handleDeleteSpace} />
      )}
      onSwipeableOpen={(direction) => {
        if (direction === "left") {
          swipeFromLeftOpen()
        } else {
          swipeFromRightOpen()
        }
      }}
    >
      <Animated.View exiting={FadeOutUp} style={containerStyles}>
        <Text style={[$icon, { color }]}>#</Text>
        <Text style={$itemText}>{name}</Text>
      </Animated.View>
    </Swipeable>
  )
})

const $container: ViewStyle = {
  backgroundColor: colors.palette.neutral800,
  paddingHorizontal: spacing.md,
  padding: spacing.sm,
  flexDirection: "row",
  gap: spacing.md,
  alignItems: "center",
}

const $itemText: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 18,
  color: colors.text,
}

const $topRadiusStyles: ViewStyle = {
  borderTopLeftRadius: spacing.sm,
  borderTopRightRadius: spacing.sm,
}

const $icon: TextStyle = {
  fontSize: 20,
}
