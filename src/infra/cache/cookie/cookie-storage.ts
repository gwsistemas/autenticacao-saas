import { CacheClient } from '@/data/protocols/cache'

let { cookie } = document
export class CookieStorage implements CacheClient<string | null> {
  get(key: string): string {
    return cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`)?.pop() || null
  }

  set(key: string, value: string): void {
    const expires = new Date()
    expires.setFullYear(expires.getFullYear() + 5)

    const expiresUTC = `expires=${expires.toUTCString()}`
    const cookieValue = `${key}=${value}`
    const domain = `domain=${document.domain}`

    cookie = `${cookieValue}; SameSite=None; Secure; ${expiresUTC}; ${domain}; path=/`
  }
}
