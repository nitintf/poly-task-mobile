import { serializeNullable } from "./common"

export const serializeTask = (obj: any) => ({
  id: serializeNullable(obj.id),
  title: serializeNullable(obj.title),
  description: serializeNullable(obj.description),
  date: serializeNullable(obj.date),
  space: serializeNullable(obj.space),
})
