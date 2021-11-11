import { CommonReturn } from '../models'

export interface SearchUserOrganization {
  search: (
    params: SearchUserOrganization.Params
  ) => Promise<SearchUserOrganization.Model>
}

export namespace SearchUserOrganization {
  export type Params = {
    cnpj_organizacao: string
    login_usuario: string
    senha_usuario: string
  }
  export type Model = CommonReturn
}
