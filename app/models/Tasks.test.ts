import { TasksModel } from "./Tasks"

test("can be created", () => {
  const instance = TasksModel.create({})

  expect(instance).toBeTruthy()
})
