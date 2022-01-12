import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import {
  AccessDeniedError,
  BadGatewayError,
  NotFoundError,
  UnexpectedError
} from '@/domain/errors'
import { LoadSupplierCustomers } from '@/domain/usecases'

export class RemoteLoadSupplierCustomers implements LoadSupplierCustomers {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadSupplierCustomers.Model>
  ) {}

  async load(
    params: LoadSupplierCustomers.Params
  ): Promise<LoadSupplierCustomers.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      params,
      method: 'get'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body || []
      case HttpStatusCode.notFound:
        throw new NotFoundError(
          'Nenhuma organização foi encontrada, informe o ID correto para continuar.'
        )
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError()
      case HttpStatusCode.badGateway:
        throw new BadGatewayError()
      default:
        throw new UnexpectedError()
    }
  }
}
