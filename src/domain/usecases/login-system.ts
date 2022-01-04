import { CommonReturn } from '../models'

export interface LoginSystem {
  auth: (params: LoginSystem.Params) => Promise<LoginSystem.Model>
}

export namespace LoginSystem {
  export type Params = {
    linkSistema: string
    isGweb: boolean
    login: string
    senha: string
    organizacaoEscolhidaId: number
    tipoAcesso: string
    clienteFornecedorId: number
  }
  export type Model = CommonReturn
}
