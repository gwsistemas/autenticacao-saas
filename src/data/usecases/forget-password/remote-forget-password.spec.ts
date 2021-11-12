import faker from 'faker'
import { HttpClientSpy } from '@/data/test'
import { ForgetPassword } from '@/domain/usecases'
import { RemoteForgetPasword } from './remote-forget-password'

interface SutTypes {
  sut: RemoteForgetPasword
  httpPostClientSpy: HttpClientSpy<ForgetPassword.Model>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpClientSpy<ForgetPassword.Model>()
  const sut = new RemoteForgetPasword(url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

describe('RemoteForgetPassword', () => {
  it('should call HttpClient correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.send({ email: 'jeftar@gmail.com' })
    expect(httpPostClientSpy.url).toBe(url)
  })
})
