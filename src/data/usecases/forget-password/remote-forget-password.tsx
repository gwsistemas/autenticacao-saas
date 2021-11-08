import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { ForgetPasswordError, UnexpectedError } from '@/domain/errors'
import { ForgetPassword } from '@/domain/usecases'

export class RemoteForgetPasword {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      ForgetPassword.Params,
      ForgetPassword.Model
    >
  ) {}

  async send(params: ForgetPassword.Params): Promise<ForgetPassword.Model> {
    const httpResponse = await this.httpPostClient.post({
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
