import { Space } from "app/models"
import { supabase } from "."
import { logError } from "app/utils/handleNetworkErrors"
import { mapToSpace } from "app/utils/space"
import AppNotification from "app/utils/notification"

export async function createSpace(space: Space, userId: string): Promise<Space | null> {
  try {
    const { data, error } = await supabase
      .from("spaces")
      .insert([
        {
          name: space.name,
          favorite: space.isFavorite,
          color: space.color,
          parent_space: space.parentSpace,
          user_id: userId,
        },
      ])
      .select()

    if (error) {
      logError(error)
      return null
    }

    AppNotification.show({
      title: "Space Created",
    })

    return mapToSpace(data[0])
  } catch (error) {
    logError(error)
    AppNotification.show({
      title: "Oops! Something went wrong while creating the space.",
    })
    return null
  }
}

export async function getSpaces(userId: string): Promise<Space[]> {
  try {
    const { data, error } = await supabase
      .from("spaces")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: true })
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

export async function deleteSpace(id: string | number): Promise<void> {
  try {
    const { error } = await supabase.from("spaces").delete().eq("id", id)

    if (error) {
      logError(error)
    }
  } catch (error) {
    logError(error)
  }
}

export async function toggleFavoriteSpace(
  id: string | number,
  value: boolean,
): Promise<Space | null> {
  try {
    const { data: updatedSpace, error } = await supabase
      .from("spaces")
      .update({ favorite: value })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      logError(error)
      return null
    }

    return mapToSpace(updatedSpace)
  } catch (error) {
    logError(error)
    return null
  }
}

export async function updateSpace(space: Space): Promise<Space | null> {
  try {
    const { data: updatedSpace, error } = await supabase
      .from("spaces")
      .update({
        name: space.name,
        favorite: space.isFavorite,
        color: space.color,
        parent_space: space.parentSpace,
      })
      .eq("id", space.id)
      .select()
      .single()

    if (error) {
      logError(error)
      return null
    }

    return mapToSpace(updatedSpace)
  } catch (error) {
    logError(error)
    return null
  }
}
