import { CookieStorage } from './cookie-storage'

describe('CookieStorage', () => {
  it('should return empty value if cookie does not exist', () => {
    const sut = new CookieStorage()
    const error = sut.get('token')
    expect(error).toBeFalsy()
  })
  it('should set a new cookie value', () => {
    const sut = new CookieStorage()
    sut.set('token', 'any_jeff_token')
    const token = sut.get('token')
    expect(token).toBe('any_jeff_token')
  })
})
