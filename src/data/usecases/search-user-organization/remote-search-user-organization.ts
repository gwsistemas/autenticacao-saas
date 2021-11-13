import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import {
  InvalidSearchUserOrganizationError,
  UnexpectedError
} from '@/domain/errors'
import { SearchUserOrganization } from '@/domain/usecases/search-user-organization'

export class RemoteSearchUserOrganization implements SearchUserOrganization {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<SearchUserOrganization.Model>
  ) {}

  async search(
    params: SearchUserOrganization.Params
  ): Promise<SearchUserOrganization.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      body: params,
      method: 'post'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.serverError:
        throw new InvalidSearchUserOrganizationError()
      default:
        throw new UnexpectedError()
    }
  }
}
