import { HttpStatusCode } from '@/data/protocols/http'
import { HttpClientPostSpy } from '@/data/test'
import { InvalideCredentialsError, UnexpectedError } from '@/domain/errors'
import { mockAuthentication } from '@/domain/test'
import { RemoteAuthentication } from '@/data/usecases'
import { AuthenticationParamsMapper } from '@/data/mappers'
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
    const authParams = AuthenticationParamsMapper.authParams(authenticationParams)
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authParams)
  })
  it('should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new InvalideCredentialsError())
  })
  it('should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
