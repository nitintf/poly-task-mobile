import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const TasksModel = types
  .model("Tasks")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Tasks extends Instance<typeof TasksModel> {}
export interface TasksSnapshotOut extends SnapshotOut<typeof TasksModel> {}
export interface TasksSnapshotIn extends SnapshotIn<typeof TasksModel> {}
