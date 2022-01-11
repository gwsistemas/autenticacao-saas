import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { LoginSystem } from '@/domain/usecases'

export class RemoteLoginSystem implements LoginSystem {
  constructor(private readonly httpClient: HttpClient<LoginSystem.Model>) {}

  async auth(params: LoginSystem.Params): Promise<LoginSystem.Model> {
    const bodyFormData = new FormData()

    bodyFormData.append(
      'indexOrganizacao',
      params.organizacaoEscolhidaId.toString(10)
    )
    bodyFormData.append(
      'clienteFornecedorId',
      params.clienteFornecedorId.toString(10)
    )
    bodyFormData.append('tipoAcesso', params.tipoAcesso)
    bodyFormData.append('login', params.login)
    bodyFormData.append('senha', params.senha)

    if (params.isGweb) {
      bodyFormData.append('acao', 'logar')
    } else {
      bodyFormData.append('textmode', '1')
    }

    const httpResponse = await this.httpClient.request({
      url: params.linkSistema,
      body: params,
      method: 'post',
      withCredentials: true
    })

    console.log('status: ', httpResponse.statusCode)
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      default:
        throw new UnexpectedError()
    }
  }
}
