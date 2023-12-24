import { colors } from "app/theme"
import { Easing, Notifier, NotifierComponents } from "react-native-notifier"
import { Animated } from "react-native"

interface NotificationProps {
  title: string
  description?: string
}

const getContainerStyleClassicWithOverSwipe = (translateY: Animated.Value) => ({
  opacity: translateY.interpolate({
    inputRange: [-200, 0],
    outputRange: [0, 1],
    extrapolate: "clamp",
  }),
  // Transform used to move Notification out of the screen when it is already transparent
  transform: [
    {
      translateY: translateY.interpolate({
        inputRange: [-1000, -200, 0],
        outputRange: [-1000, 0, 0],
        extrapolate: "clamp",
      }),
    },
    {
      scale: translateY.interpolate({
        inputRange: [-1000, -400, 0],
        outputRange: [0, 1, 1],
        extrapolate: "clamp",
      }),
    },
  ],
  // unset "top" property that was used in default styles
  top: undefined,
  // add bottom margin
  bottom: 50,
})

export default class AppNotification {
  public static show({ title, description }: NotificationProps) {
    Notifier.showNotification({
      animationDuration: 500,
      showEasing: Easing.in(Easing.ease),
      Component: NotifierComponents.Notification,
      title,
      description,
      containerStyle: getContainerStyleClassicWithOverSwipe,
      componentProps: {
        containerStyle: {
          backgroundColor: colors.palette.neutral750,
        },
        titleStyle: {
          color: colors.text,
        },
        descriptionStyle: {
          color: colors.textDim,
        },
      },
      showAnimationDuration: 150,
      hideAnimationDuration: 150,
    })
  }
}
