import { RemoteSearchUserOrganization } from '@/data/usecases/search-user-organization/remote-search-user-organization'
import { SearchUserOrganization } from '@/domain/usecases'
import { makeApiUrl } from '../http/api-url-factory'
import { makeAxiosHttpClient } from '../http/axios-http-client-factory'

export const makeSearchUserOrganization = (): SearchUserOrganization => {
  return new RemoteSearchUserOrganization(
    makeApiUrl('/organizacao/buscar-usuario-organizacao'),
    makeAxiosHttpClient()
  )
}
