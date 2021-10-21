import { CacheClient } from '@/data/protocols/cache'

export class LocalCookieStorage implements CacheClient<string | null> {
  cookie = document.cookie
  get(key: string): string {
    return this.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`)?.pop() || null
  }

  set(key: string, value: string): void {
    const expires = new Date()
    expires.setFullYear(expires.getFullYear() + 5)

    const expiresUTC = `expires=${expires.toUTCString()}`
    const cookieValue = `${key}=${value}`
    const domain = `domain=${document.location.host}`

    this.cookie = `${cookieValue}; ${domain}; ${expiresUTC}; path=/`
  }
}
describe('LocalCookieStorage', () => {
  it('should return empty value if cookie does not exist', () => {
    const sut = new LocalCookieStorage()
    const error = sut.get('token')
    expect(error).toBeFalsy()
  })
  it('should set a new cookie value', () => {
    const sut = new LocalCookieStorage()
    sut.set('token', 'any_jeff_token')
    const token = sut.get('token')
    expect(token).toBe('any_jeff_token')
  })
})
