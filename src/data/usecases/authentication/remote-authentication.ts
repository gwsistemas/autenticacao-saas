import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { InvalideCredentialsError } from '@/domain/errors/invalide-credentials-error'
import { Authentication } from '@/domain/usercases'

export class RemoteAuthentication {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient) {}
  async auth (params: Authentication.Params): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized: throw new InvalideCredentialsError()
    }
  }
}
