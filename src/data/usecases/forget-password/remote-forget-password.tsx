import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { ForgetPasswordError, UnexpectedError } from '@/domain/errors'
import { ForgetPassword } from '@/domain/usecases'

export class RemoteForgetPasword implements ForgetPassword {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ForgetPassword.Model>
  ) {}

  async send(params: ForgetPassword.Params): Promise<ForgetPassword.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.serverError:
        throw new ForgetPasswordError()
      default:
        throw new UnexpectedError()
    }
  }
}
