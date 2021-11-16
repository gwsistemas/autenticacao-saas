import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { InvalideCredentialsError, UnexpectedError } from '@/domain/errors'
import { UserListOrganizationUser } from '@/domain/usecases'

export class RemoteUserOrganizationListUser
  implements UserListOrganizationUser
{
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async search(
    params: UserListOrganizationUser.Params
  ): Promise<UserListOrganizationUser.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params
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
