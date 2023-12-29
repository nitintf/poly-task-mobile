import React, { useCallback, useMemo, useRef } from "react"
import { Space, useStores } from "app/models"
import { Alert, Text, TextStyle, ViewStyle } from "react-native"
import { colors, spacing, typography } from "app/theme"
import * as Haptics from "expo-haptics"
import { observer } from "mobx-react-lite"
import { deleteSpace } from "app/services/supabase/spaces"
import Animated, { FadeOutUp } from "react-native-reanimated"
import { delay } from "app/utils/delay"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { AppStackParamList } from "app/navigators"
import { Drawer, DrawerProps } from "react-native-ui-lib"

interface Props extends Space {
  applyTopRadius: boolean
}
export const SpaceListItem = observer(({ id, color, name, isFavorite, applyTopRadius }: Props) => {
  const {
    spacesStore,
    authenticationStore: { user },
  } = useStores()
  const navigation = useNavigation<NavigationProp<AppStackParamList>>()
  const swipeableRef = useRef(null)
  const containerStyles = [$container, applyTopRadius ? $topRadiusStyles : {}]

  const closeSwipeableAction = useCallback(() => {
    if (swipeableRef.current) {
      swipeableRef.current.closeDrawer()
    }
  }, [])

  const swipeFromLeftOpen = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    handleToggleFavorite()
  }

  const handleToggleFavorite = async () => {
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

  const handleEditSpace = () => {
    navigation.navigate("SpaceForm", {
      isUpdateForm: true,
      updatingSpaceData: {
        color,
        id,
        isFavorite,
        name,
        parentSpace: null,
      },
    })
  }

  const drawerState: DrawerProps = useMemo(() => {
    return {
      rightItems: [
        {
          icon: require("../../../../assets/images/icons/edit.png"),
          background: colors.palette.neutral550,
          onPress: handleEditSpace,
        },
        {
          icon: require("../../../../assets/images/icons/delete.png"),
          background: colors.palette.angry500,
          onPress: handleDeleteSpace,
        },
      ],
      leftItem: {
        icon: isFavorite
          ? require("../../../../assets/images/icons/heart-slash.png")
          : require("../../../../assets/images/icons/heart.png"),
        background: isFavorite ? colors.palette.neutral300 : colors.palette.main100,
        onPress: handleToggleFavorite,
        keepOpen: false,
      },
      itemsIconSize: 24,
      fullSwipeLeft: true,
      disableHaptic: true,
      onFullSwipeLeft: swipeFromLeftOpen,
    }
  }, [])

  return (
    <Drawer ref={swipeableRef} {...drawerState}>
      <Animated.View exiting={FadeOutUp} style={containerStyles}>
        <Text style={[$icon, { color }]}>#</Text>
        <Text style={$itemText}>{name}</Text>
      </Animated.View>
    </Drawer>
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
  fontSize: 16,
  color: colors.text,
}

const $topRadiusStyles: ViewStyle = {
  borderTopLeftRadius: spacing.sm,
  borderTopRightRadius: spacing.sm,
}

const $icon: TextStyle = {
  fontSize: 18,
}
