import { Instance, SnapshotIn, SnapshotOut, flow, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { getSpaces } from "app/services/supabase/spaces"

export const SpaceModel = types.model("Space").props({
  id: types.integer,
  name: types.maybe(types.string),
  isFavorite: types.maybe(types.boolean),
  parentSpace: types.maybeNull(types.string),
  color: types.maybe(types.string),
})

export const SpacesModel = types
  .model("Spaces")
  .props({
    spaces: types.array(SpaceModel),
    newSpace: types.optional(SpaceModel, {
      id: 0,
      name: "",
      color: "#ccc",
      isFavorite: false,
      parentSpace: null,
    }),
    isRefresh: types.optional(types.boolean, false),
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    addSpace(space: Space) {
      self.newSpace = {
        id: 0,
        name: "",
        isFavorite: false,
        parentSpace: null,
        color: "#ccc",
      }
      self.spaces.push(space)
    },
    removeSpace(id: number) {
      const index = self.spaces.findIndex((s) => s.id === id)
      if (index !== -1) {
        self.spaces.splice(index, 1)
      }
    },
    updateSpace(id: number, updatedSpace: Space) {
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
        id: 0,
        name: "",
        isFavorite: false,
        parentSpace: null,
        color: "#ccc",
      }
    },
    getNewSpace() {
      return self.newSpace
    },

    getAllSpaces: flow(function* () {
      const spaces = yield getSpaces()
      self.spaces = spaces
    }),
  }))

export interface Space extends Instance<typeof SpaceModel> {}

export interface Spaces extends Instance<typeof SpacesModel> {}
export interface SpacesSnapshotOut extends SnapshotOut<typeof SpacesModel> {}
export interface SpacesSnapshotIn extends SnapshotIn<typeof SpacesModel> {}
