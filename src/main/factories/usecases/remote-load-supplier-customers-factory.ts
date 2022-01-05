import { RemoteLoadSupplierCustomers } from '@/data/usecases'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/decorators/authorize-http-client-decorator-factory'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'

export const makeRemoteLoadSupplierCustomers =
  (): RemoteLoadSupplierCustomers => {
    return new RemoteLoadSupplierCustomers(
      makeApiUrl('/usuario/carregar-clientes-fornecedores-usuario'),
      makeAuthorizeHttpClientDecorator()
    )
  }
