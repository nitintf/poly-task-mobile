import { Instance, SnapshotIn, SnapshotOut, flow, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { createTask } from "app/services/supabase/tasks"
import { serializeTask } from "app/utils/serializers/serialize-task"

export const TaskModel = types.model("Task").props({
  id: types.integer,
  title: types.maybe(types.string),
  description: types.maybe(types.string),
  date: types.maybe(types.string),
  space: types.maybe(types.string),
})

export const TasksModel = types
  .model("Tasks")
  .props({
    tasks: types.array(TaskModel),
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    addTask: flow(function* (newTask: Task, userId: string) {
      self.tasks.push(serializeTask(newTask))

      const addedTask = yield createTask(newTask, userId)

      if (!addedTask) {
        self.tasks.pop()
      }
    }),
    updateTask(updatedTask: Task) {
      const taskIndex = self.tasks.findIndex((task) => task.id === updatedTask.id)
      if (taskIndex !== -1) {
        self.tasks.splice(taskIndex, 1, updatedTask)
      }
    },
    deleteTask(taskId: number) {
      const taskIndex = self.tasks.findIndex((task) => task.id === taskId)
      if (taskIndex !== -1) {
        self.tasks.splice(taskIndex, 1)
      }
    },
    getAllTasks() {
      return self.tasks
    },
    reset() {
      self.tasks.clear()
    },
  }))

export interface Task extends Instance<typeof TaskModel> {}

export interface Tasks extends Instance<typeof TasksModel> {}
export interface TasksSnapshotOut extends SnapshotOut<typeof TasksModel> {}
export interface TasksSnapshotIn extends SnapshotIn<typeof TasksModel> {}
