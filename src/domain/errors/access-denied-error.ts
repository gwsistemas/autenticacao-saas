export class AccessDeniedError extends Error {
  constructor() {
    super('Acesso negado! Faça login novamente.')
    this.name = 'AccessDeniedError'
  }
}
