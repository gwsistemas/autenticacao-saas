import { CacheClient } from '@/data/protocols/cache'
import { LocalCacheStorage } from './local-cache-storage'

export class MockCookieCacheClient {
  cookies = 'token=any_token; domain=https://localhost'
}

class CookieCacheClientSpy implements CacheClient<string | null> {
  document = new MockCookieCacheClient()
  get(key: string, client?: any): string {
    return (
      this.document.cookies.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`)?.pop() ||
      null
    )
  }
}

interface SutTypes {
  sut: LocalCacheStorage
}

const makeSut = (): SutTypes => {
  const cookieCacheClientSpy = new CookieCacheClientSpy()
  const sut = new LocalCacheStorage(cookieCacheClientSpy)
  return { sut }
}

describe('LocalCacheStorage', () => {
  it('should [GET] method return empty if value does not exist', () => {
    const { sut } = makeSut()
    const error = sut.get('jwt')
    expect(error).toBeFalsy()
  })
  it('should [GET] method return value', () => {
    const { sut } = makeSut()
    const error = sut.get('token')
    expect(error).toBe('any_token')
  })
})
