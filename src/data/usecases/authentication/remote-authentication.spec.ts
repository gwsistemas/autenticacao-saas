import { HttpClientPostSpy } from '@/data/test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

interface SutTypes {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpClientPostSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpClientPostSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
