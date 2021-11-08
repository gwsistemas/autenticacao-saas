import { RemoteForgetPasword } from '@/data/usecases'
import { makeApiUrl } from '../factories/http/api-url-factory'
import { makeAxiosHttpClient } from '../factories/http/axios-http-client-factory'
import { ForgetPassword } from '@/domain/usecases'

export const makeForgetPassword = (): ForgetPassword => {
  return new RemoteForgetPasword(
    makeApiUrl('/usuario/enviar-recuperar-senha'),
    makeAxiosHttpClient()
  )
}
