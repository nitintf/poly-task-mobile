import { Space } from "app/models"
import { supabase } from "."

export function* createSpace(space: Space) {
  try {
    const { data, error } = yield supabase
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
    console.log("data, error :>> ", data, error)
  } catch (error) {}
}
