import { Instance, SnapshotIn, SnapshotOut, flow, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { getSpaces, toggleFavoriteSpace, updateSpace } from "app/services/supabase/spaces"

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
    updateSpaceInSpaces: flow(function* (updatedSpace: Space) {
      const index = self.spaces.findIndex((s) => s.id === updatedSpace.id)
      const oldSpace = self.spaces[index]
      if (index >= 0) {
        self.spaces[index] = updatedSpace
      }

      const newUpdatedSpace = yield updateSpace(updatedSpace)

      if (!newUpdatedSpace) {
        self.spaces[index] = oldSpace
      }
    }),
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

    toggleFavorite: flow(function* (id: number) {
      const index = self.spaces.findIndex((s) => s.id === id)
      const space = self.spaces[index]
      const originalIsFav = space.isFavorite

      self.spaces[index] = { ...space, isFavorite: !originalIsFav }

      const updatedSpace = yield toggleFavoriteSpace(id, !originalIsFav)

      if (!updatedSpace) {
        self.spaces[index] = { ...space, isFavorite: originalIsFav }
      }
    }),

    getAllSpaces: flow(function* (userId: string) {
      const spaces = yield getSpaces(userId)
      self.spaces = spaces
    }),

    reset() {
      self.spaces.clear()
      self.newSpace = {
        id: 0,
        name: "",
        isFavorite: false,
        parentSpace: null,
        color: "#ccc",
      }
      self.isRefresh = false
    },

    setNewSpace(space: Space) {
      self.newSpace = space
    },
  }))

export interface Space extends Instance<typeof SpaceModel> {}

export interface Spaces extends Instance<typeof SpacesModel> {}
export interface SpacesSnapshotOut extends SnapshotOut<typeof SpacesModel> {}
export interface SpacesSnapshotIn extends SnapshotIn<typeof SpacesModel> {}
