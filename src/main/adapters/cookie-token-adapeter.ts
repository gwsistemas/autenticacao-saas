import { makeLocalCookieCacheStorage } from '../factories/cache/cookie-storage-factory'

export const getCurrentTokenAdapter = (): string | null => {
  return makeLocalCookieCacheStorage().get('client_token')
}
