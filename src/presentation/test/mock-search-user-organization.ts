import { SearchUserOrganization } from '@/domain/usecases'
import { mockSearchUserOrganization } from '@/domain/test'

export class SearchUserOrganizationSpy implements SearchUserOrganization {
  return = mockSearchUserOrganization()
  params: SearchUserOrganization.Params
  async search(
    params: SearchUserOrganization.Params
  ): Promise<SearchUserOrganization.Model> {
    this.params = params
    return this.return
  }
}
