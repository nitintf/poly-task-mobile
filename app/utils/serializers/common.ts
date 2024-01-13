import { Nullable } from "app/types"

export function serializeNullable<T>(value: Nullable<T>) {
  return value != null ? value : undefined
}

export function serializeNullableDate<T>(value: Nullable<T>) {
  return value != null ? +value : undefined
}

export function serializeDate<T>(value: T) {
  return +value
}
