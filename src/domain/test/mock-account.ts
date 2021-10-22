import { Authentication } from '@/domain/usecases'
import faker from 'faker'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  senha: faker.internet.password()
})

export const mockAccountModel = (): Authentication.Model => {
  return {
    id: faker.datatype.number({
      min: 1,
      max: 50
    }),
    ativo: faker.datatype.boolean(),
    nome: faker.datatype.string(),
    sobre_nome: faker.internet.userName(),
    apelido: faker.internet.userName(),
    data_nascimento: faker.internet.userName(),
    email: faker.internet.userName(),
    senha: faker.internet.userName(),
    token: faker.datatype.uuid(),
    guid: faker.datatype.uuid()
  }
}
