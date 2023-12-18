import { Instance, SnapshotIn, SnapshotOut, flow, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { supabase } from "app/services/supabase"

export const SpaceModel = types.model("Space").props({
  id: types.optional(types.identifier, ""),
  name: types.maybe(types.string),
  isFavorite: types.maybe(types.boolean),
  parentSpace: types.maybeNull(types.string),
  color: types.maybe(types.string),
})

/**
 * Model description here for TypeScript hints.
 */
export const SpacesModel = types
  .model("Spaces")
  .props({
    spaces: types.array(SpaceModel),
    newSpace: types.optional(SpaceModel, {
      name: "",
      color: "#ccc",
      isFavorite: false,
      parentSpace: null,
    }),
  })
  .actions(withSetPropAction)
  .views((self) => ({
    getSpaces(): Space[] {
      return [...self.spaces]
    },
  }))
  .actions((self) => ({
    addSpace(space: Space) {
      self.spaces.push(space)
      self.newSpace = {
        id: "",
        name: "",
        isFavorite: false,
        parentSpace: null,
        color: "#ccc",
      }
    },
    removeSpace(id: string) {
      const index = self.spaces.findIndex((s) => s.id === id)
      if (index !== -1) {
        self.spaces.splice(index, 1)
      }
    },
    updateSpace(id: string, updatedSpace: Space) {
      const index = self.spaces.findIndex((s) => s.id === id)
      if (index >= 0) {
        self.spaces[index] = updatedSpace
      }
    },
    // Action to update fields of the newSpace
    updateNewSpaceField(field: keyof Space, value: string | boolean) {
      self.newSpace = { ...self.newSpace, [field]: value }
    },
    toogleNewSpaceIsFavorite() {
      self.newSpace.isFavorite = !self.newSpace.isFavorite
    },
    resetNewSpace() {
      self.newSpace = {
        id: "",
        name: "",
        isFavorite: false,
        parentSpace: null,
        color: "#ccc",
      }
    },
    createNewSpace: flow(function* createNewSpace() {
      try {
        const space = self.newSpace
        const { data, error } = yield supabase
          .from("spaces")
          .insert({
            name: space.name,
            favorite: space.isFavorite,
            color: space.color,
          })
          .select()
        console.log("data, error :>> ", data, error)
      } catch (error) {
        console.log("error :>> ", error)
      }
    }),
  }))

export interface Space extends Instance<typeof SpaceModel> {}

export interface Spaces extends Instance<typeof SpacesModel> {}
export interface SpacesSnapshotOut extends SnapshotOut<typeof SpacesModel> {}
export interface SpacesSnapshotIn extends SnapshotIn<typeof SpacesModel> {}
