import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AuthenticationStoreModel } from "./AuthenticationStore"
import { SettingsModel } from "./Settings"
import { SpacesModel } from "./Spaces"
import { TasksModel } from "./Tasks"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  authenticationStore: types.optional(AuthenticationStoreModel, {}),
  settingsStore: types.optional(SettingsModel, {}),
  spacesStore: types.optional(SpacesModel, {}),
  tasksStore: types.optional(TasksModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
