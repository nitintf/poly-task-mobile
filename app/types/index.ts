export type Nullable<T> = T | null
export type Writeable<T> = { -readonly [P in keyof T]: T[P] }
export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> }
export type $Values<O extends object> = O[keyof O]
