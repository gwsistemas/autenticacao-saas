import { UserListOrganizationUser } from '@/domain/usecases'
import { makeApiUrl } from '../http/api-url-factory'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/decorators/authorize-http-client-decorator-factory'
import { RemoteUserOrganizationListUser } from '@/data/usecases'

export const makeRemoteUserOrganizationListUserFactory =
  (): UserListOrganizationUser => {
    return new RemoteUserOrganizationListUser(
      makeApiUrl('/usuario/listar-organizacao-usuario'),
      makeAuthorizeHttpClientDecorator()
    )
  }
