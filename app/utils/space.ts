import { Space } from "app/models"

export const mapToSpace = (object: any): Space => {
  return {
    id: object.id,
    name: object.name,
    isFavorite: object.favorite,
    color: object.color,
    parentSpace: object.parnet_space,
  }
}
