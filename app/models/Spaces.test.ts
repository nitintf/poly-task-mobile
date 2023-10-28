import { SpacesModel } from "./Spaces"

test("can be created", () => {
  const instance = SpacesModel.create({})

  expect(instance).toBeTruthy()
})
