import { CookieCacheClientSpy } from '@/data/test/mock-cache'
import { LocalCacheStorage } from './cache-storage'

interface SutTypes {
  sut: LocalCacheStorage
  cookieCacheClientSpy: CookieCacheClientSpy
}

const makeSut = (): SutTypes => {
  const cookieCacheClientSpy = new CookieCacheClientSpy()
  const sut = new LocalCacheStorage(cookieCacheClientSpy)
  return { sut, cookieCacheClientSpy }
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
  it('should [SET] method ', () => {
    const { sut, cookieCacheClientSpy } = makeSut()
    sut.set('jwt', 'another_any_token')
    const result = cookieCacheClientSpy.get('jwt')
    expect('another_any_token').toBe(result)
  })
})
