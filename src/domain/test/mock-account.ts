import { Authentication } from '@/domain/usecases'
import faker from 'faker'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): Authentication.Model => {
  return {
    id: faker.datatype.number({
      min: 1,
      max: 50
    }),
    active: faker.datatype.boolean(),
    name: faker.datatype.string(),
    lastName: faker.internet.userName(),
    nickname: faker.internet.userName(),
    birthdate: faker.internet.userName(),
    email: faker.internet.userName(),
    password: faker.internet.userName(),
    token: faker.datatype.uuid(),
    guid: faker.datatype.uuid()
  }
}
