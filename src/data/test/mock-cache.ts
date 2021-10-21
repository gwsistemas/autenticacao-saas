import { CacheClient } from '@/data/protocols/cache'

export const mockCookieCacheClient = {
  cookies: 'token=any_token; domain=https://localhost'
}

export class CookieCacheClientSpy implements CacheClient<string | null> {
  document = mockCookieCacheClient
  get(key: string, client?: any): string {
    return (
      this.document.cookies.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`)?.pop() ||
      null
    )
  }

  set(key: string, value: string): void {
    this.document.cookies = `${key}=${value};`
  }
}
