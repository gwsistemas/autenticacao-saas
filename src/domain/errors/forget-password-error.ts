export class ForgetPasswordError extends Error {
  constructor() {
    super('E-mail não existe, informe o e-mail correto para continuar.')
    this.name = 'ForgetPasswordError'
  }
}
