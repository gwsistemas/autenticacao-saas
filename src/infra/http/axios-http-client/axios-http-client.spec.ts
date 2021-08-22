import axios from 'axios'
import { AxiosHttpClient } from './axios-http-client'
import { HttpPostParams } from '@/data/protocols/http'
import { mockAxios } from '@/infra/test'
import { mockPostRequest } from '@/data/test'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
  mockRequest: HttpPostParams<any>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  const mockRequest = mockPostRequest()
  return {
    sut,
    mockedAxios,
    mockRequest
  }
}

describe('AxiosHttpClient', () => {
  it('should call axios with correct url, body and verb', async () => {
    const { sut, mockedAxios, mockRequest } = makeSut()
    await sut.post(mockRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(mockRequest.url, mockRequest.body)
  })
  it('should return the correct statusCode and body', () => {
    const { sut, mockedAxios, mockRequest } = makeSut()
    const promis = sut.post(mockRequest)
    // mockedAxios.post.mock.results return [resolve, reject].value
    expect(promis).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
