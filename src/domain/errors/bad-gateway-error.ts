export class BadGatewayError extends Error {
  constructor() {
    super('Não foi possível acessar o servidor. Tente mais tarde.')
    this.name = 'BadGatewayError'
  }
}
