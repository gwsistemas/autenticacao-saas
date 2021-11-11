import { HttpStatusCode } from '@/data/protocols/http'
import { HttpClientSpy } from '@/data/test'
import { InvalideCredentialsError, UnexpectedError } from '@/domain/errors'
import { mockAccountModel, mockAuthentication } from '@/domain/test'
import { RemoteAuthentication } from '@/data/usecases'
import faker from 'faker'
import { Authentication } from '@/domain/usecases'

interface SutTypes {
  sut: RemoteAuthentication
  httpClientSpy: HttpClientSpy<Authentication.Model>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<Authentication.Model>()
  const sut = new RemoteAuthentication(url, httpClientSpy)
  return { sut, httpClientSpy }
}

describe('RemoteAuthentication', () => {
  it('should call HttpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpClientSpy.url).toBe(url)
  })
  it('should call HttpClient with correct body', async () => {
    const { sut, httpClientSpy } = makeSut()
    const authenticationParams = mockAuthentication()
    await sut.auth(authenticationParams)
    expect(httpClientSpy.body).toEqual(authenticationParams)
  })
  it('should throw InvalidCredentialsError if HttpClient returns 401', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new InvalideCredentialsError())
  })
  it('should throw UnexpectedError if HttpClient returns 400', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
  it('should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
  it('should throw Unexpected if HttPostClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
  it('should return an AccountModel if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockAccountModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const account = await sut.auth(mockAuthentication())
    expect(account).toEqual(httpResult)
  })
})
