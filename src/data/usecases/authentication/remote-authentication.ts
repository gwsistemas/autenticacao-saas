import { AuthenticationParamsMapper } from '@/data/mappers'
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { InvalideCredentialsError, UnexpectedError } from '@/domain/errors'
import { Authentication } from '@/domain/usecases'

export class RemoteAuthentication {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient) {}
  async auth (params: Authentication.Params): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: AuthenticationParamsMapper.authParams(params)
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unauthorized: throw new InvalideCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
