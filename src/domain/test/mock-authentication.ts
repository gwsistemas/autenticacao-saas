import { Authentication } from '@/domain/usercases'
import faker from 'faker'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
