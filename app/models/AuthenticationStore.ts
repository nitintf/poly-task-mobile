import { extractParamsFromUrl, getGoogleOAuthUrl } from "app/services/supabase/google"
import { Instance, SnapshotOut, flow, types } from "mobx-state-tree"
import * as WebBrowser from "expo-web-browser"
import { supabase } from "app/services/supabase"
import { runInAction } from "mobx"
import { logError } from "app/utils/handleNetworkErrors"

interface User {
  email: string
  name: string
  picture: string
  id: string
}

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),
    refreshToken: types.maybe(types.string),
    user: types.maybe(types.frozen<User>()),
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    },
  }))
  .actions((store) => ({
    signInWithGoogle: flow(function* signInWithGoogle() {
      try {
        const googleurl = yield getGoogleOAuthUrl()
        const result = yield WebBrowser.openAuthSessionAsync(
          googleurl,
          "polysupabase://google-auth?",
          {
            showInRecents: true,
          },
        )

        if (result.type === "success") {
          const params = extractParamsFromUrl(result.url)
          const { data, error } = yield supabase.auth.setSession({
            access_token: params.access_token,
            refresh_token: params.refresh_token,
          })
          if (data) {
            runInAction(() => {
              store.authToken = params.access_token
              store.refreshToken = params.refresh_token
              store.user = { ...(data.user.user_metadata as User), id: data.user.id }
            })
          } else {
            logError(error, "Error during authentication")
          }
        } else {
          logError("Authentication failed")
        }
      } catch (error) {
        logError(error, "Error in signInWithGoogle")
      }
    }),
    logout: flow(function* logout() {
      try {
        yield supabase.auth.signOut()
        runInAction(() => {
          store.authToken = undefined
          store.refreshToken = undefined
          store.user = undefined
        })
      } catch (error) {
        logError(error, "Error in logout")
      }
    }),
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}
