import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { InvalideCredentialsError, UnexpectedError } from '@/domain/errors'
import { Authentication } from '@/domain/usecases'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<Authentication.Model>
  ) {}

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalideCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
