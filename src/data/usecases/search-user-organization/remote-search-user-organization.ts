import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { SearchUserOrganization } from '@/domain/usecases/search-user-organization'

export class RemoteSearchUserOrganization implements SearchUserOrganization {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      SearchUserOrganization.Params,
      SearchUserOrganization.Model
    >
  ) {}

  async search(
    params: SearchUserOrganization.Params
  ): Promise<SearchUserOrganization.Model> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.serverError:
        throw new Error('aqui')
      default:
        throw new UnexpectedError()
    }
  }
}
