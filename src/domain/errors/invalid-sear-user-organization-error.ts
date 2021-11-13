export class InvalidSearchUserOrganizationError extends Error {
  constructor() {
    super(
      'Nenhuma organização foi encontrada, informe o cnpj correto para continuar.'
    )
    this.name = 'InvalidOrganizationError'
  }
}
