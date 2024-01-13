import { serializeNullable } from "./common"

export const serializeSpace = (obj: any) => ({
  id: serializeNullable(obj.id),
  name: serializeNullable(obj.name),
  isFavorite: serializeNullable(obj.favorite),
  color: serializeNullable(obj.color),
  parentSpace: serializeNullable(obj.parnet_space),
})
