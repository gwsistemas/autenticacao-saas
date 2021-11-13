import faker from 'faker'

import { SearchUserOrganization } from '../usecases'

export const mockSearchUserOrganization = (): SearchUserOrganization.Model => ({
  id: faker.datatype.number(),
  msg: faker.lorem.lines(1),
  return: faker.lorem.lines(1)
})
