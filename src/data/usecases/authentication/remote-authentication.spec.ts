import { HttpStatusCode } from '@/data/protocols/http'
import { HttpClientPostSpy } from '@/data/test'
import { InvalideCredentialsError } from '@/domain/errors/invalide-credentials-error'
import { mockAuthentication } from '@/domain/test'
import { RemoteAuthentication } from '.'
import faker from 'faker'

interface SutTypes {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpClientPostSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpClientPostSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })
  it('should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationParams = mockAuthentication()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
  it('should throw InvalidCredentialsErro if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new InvalideCredentialsError())
  })
})
