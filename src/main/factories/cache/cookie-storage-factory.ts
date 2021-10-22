import { LocalCacheStorage } from '@/data/usecases/cache-storage/local-cache-storage'
import { CookieStorage } from '@/infra/cache/cookie-storage'

export const makeLocalCookieCacheStorage = (): LocalCacheStorage =>
  new LocalCacheStorage(new CookieStorage())
