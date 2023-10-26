import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

export enum PushNotification {
  None = "None",
  AllActivity = "AllActivity",
}

export function getDisplayTextForPushNotification(value: PushNotification | string): string {
  switch (value) {
    case PushNotification.None:
      return "None"
    case PushNotification.AllActivity:
      return "All Activity"
    default:
      return ""
  }
}

/**
 * Model to store app settings localy
 */
export const SettingsModel = types
  .model("Settings")
  .props({
    pushNotification: types.optional(
      types.enumeration("PushNotification", Object.keys(PushNotification)),
      PushNotification.AllActivity,
    ),
    autoLock: types.optional(types.boolean, true),
    shakeToSendFeedback: types.optional(types.boolean, false),
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    // Action to set pushNotification
    setPushNotification(value: PushNotification) {
      self.pushNotification = value
    },

    // Action to toggle autoLock
    toggleAutoLock() {
      self.autoLock = !self.autoLock
    },

    toggleShakeToSendFeedback() {
      self.shakeToSendFeedback = !self.shakeToSendFeedback
    },

    reset() {
      self.pushNotification = PushNotification.None
      self.autoLock = false
      self.shakeToSendFeedback = false
    },
  }))
  .views((self) => ({
    get pushNotificationDisplayText() {
      return getDisplayTextForPushNotification(self.pushNotification)
    },
  }))

export interface Settings extends Instance<typeof SettingsModel> {}
export interface SettingsSnapshotOut extends SnapshotOut<typeof SettingsModel> {}
export interface SettingsSnapshotIn extends SnapshotIn<typeof SettingsModel> {}
