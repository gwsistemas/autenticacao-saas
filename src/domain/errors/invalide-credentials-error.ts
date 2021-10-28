export class InvalideCredentialsError extends Error {
  constructor() {
    super('Credencias inváldias')
    this.name = 'InvalideCredentialsError'
  }
}
