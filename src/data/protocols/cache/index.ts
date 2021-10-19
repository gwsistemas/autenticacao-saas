export interface CacheStorage<T = string, S = any, R = any> {
  get: (key: T, data?: S) => R
}

export interface CacheClient<R> {
  get: (key: string, client?: any) => R
}
