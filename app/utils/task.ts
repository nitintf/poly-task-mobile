import { Task } from "app/models"

export const mapToTask = (object: any): Task => {
  return {
    id: object.id,
    title: object.title,
    description: object.description,
    date: object.date,
    space: object.space,
  }
}
