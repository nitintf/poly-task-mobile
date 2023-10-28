import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const SpacesModel = types
  .model("Spaces")
  .props({
    id: types.identifier,
    name: types.maybe(types.string),
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Spaces extends Instance<typeof SpacesModel> {}
export interface SpacesSnapshotOut extends SnapshotOut<typeof SpacesModel> {}
export interface SpacesSnapshotIn extends SnapshotIn<typeof SpacesModel> {}
