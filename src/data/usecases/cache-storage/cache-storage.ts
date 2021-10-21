import { CacheClient, CacheStorage } from '@/data/protocols/cache'

export class LocalCacheStorage implements CacheStorage {
  constructor(private readonly cacheClient: CacheClient<any>) {}

  get(key: string): string | null {
    return this.cacheClient.get(key)
  }

  set(key: string, value: string): void {
    this.cacheClient.set(key, value)
  }
}
