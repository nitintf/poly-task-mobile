import { SettingsModel } from "./Settings"

test("can be created", () => {
  const instance = SettingsModel.create({})

  expect(instance).toBeTruthy()
})
