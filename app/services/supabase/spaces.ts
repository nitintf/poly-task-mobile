import { Space } from "app/models"
import { supabase } from "."
import { logError } from "app/utils/handleNetworkErrors"
import { Notifier, NotifierComponents } from "react-native-notifier"
import { mapToSpace } from "app/utils/space"

export async function createSpace(space: Space): Promise<Space | null> {
  try {
    const { data, error } = await supabase
      .from("spaces")
      .insert([
        {
          name: space.name,
          favorite: space.isFavorite,
          color: space.color,
          parent_space: space.parentSpace,
        },
      ])
      .select()

    if (error) {
      logError(error)
      return null
    }

    Notifier.showNotification({
      title: "Space Created",
      Component: NotifierComponents.Notification,
      componentProps: {},
    })

    return mapToSpace(data[0])
  } catch (error) {
    logError(error)
    Notifier.showNotification({
      title: "Oops! Something went wrong while creating the space.",
      Component: NotifierComponents.Notification,
    })
    return null
  }
}

export async function getSpaces(): Promise<Space[]> {
  try {
    const { data, error } = await supabase.from("spaces").select("*")
    if (error) {
      logError(error)
      return []
    }

    const spaces = data.map(mapToSpace)
    return spaces
  } catch (error) {
    logError(error)
    return []
  }
}
