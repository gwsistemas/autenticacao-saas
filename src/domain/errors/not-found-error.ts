export class NotFoundError extends Error {
  constructor(private readonly msg?: string) {
    super(msg || 'Nenhum resultado foi encontrado.')
    this.name = 'NotFoundError'
  }
}
