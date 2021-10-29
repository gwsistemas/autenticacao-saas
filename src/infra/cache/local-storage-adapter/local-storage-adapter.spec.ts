import faker from 'faker'
import 'jest-localstorage-mock'

import { LocalStorageAdapter } from '@/infra/cache'

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  it('should call localstorage.setItem with correct values', async () => {
    const sut = makeSut()
    const key = faker.database.collation()
    const value = faker.random.objectElement<{}>()
    sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    )
  })
  it('should call localstorage.removeItem with correct key', async () => {
    const sut = makeSut()
    const key = faker.database.collation()
    sut.remove(key)
    expect(localStorage.removeItem).toHaveBeenCalledWith(key)
  })
  it('should call localstorage.getItem with correct values', async () => {
    const sut = makeSut()
    const key = faker.database.collation()
    const value = faker.random.objectElement<{}>()
    const getItemSpy = jest
      .spyOn(localStorage, 'getItem')
      .mockReturnValueOnce(JSON.stringify(value))
    const obj = sut.get(key)

    expect(obj).toEqual(obj)
    expect(getItemSpy).toHaveBeenCalledWith(key)
  })
})
