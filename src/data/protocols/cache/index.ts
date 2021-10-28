export interface CacheStorage<T = string, S = any, R = any> {
  get: (key: T) => R
  set: (key: T, value: S) => void
}

export interface CacheClient<R> {
  get: (key: string) => R
  set: (key: string, value: any) => void
}

export interface SetStorage {
  set: (key: string, value: object) => void
}

export interface RemoveItemStorage {
  remove: (key: string) => void
}
export interface GetStorage {
  get: (key: string) => any
}
