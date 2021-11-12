import faker from 'faker'
import { HttpRequest } from '../protocols/http'

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  body: faker.random.objectElement(),
  method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
  headers: faker.random.objectElement()
})
