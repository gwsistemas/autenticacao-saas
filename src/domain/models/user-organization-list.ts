export type UserOrganization = {
  id_organizacao: number
  nome_organizacao: string
  chave_organizacao: string
  ambiente_organizacao: {
    id_ambiente: number
    nome_ambiente: string
    versao_ambiente: string
    url_app_ambiente: string
    url_app_gweb_ambiente: string
  }
  responsavel_organizacao: number
  organizacao_ativa: boolean
  organizacao_img_logo: string
  dt_vencimento_organizacao: string
  tipo_acesso: string[]
}

export type UserOrganizationList = UserOrganization[]
