import { RemoteForgetPasword } from '@/data/usecases'
import { makeApiUrl } from '../http/api-url-factory'
import { makeAxiosHttpClient } from '../http/axios-http-client-factory'
import { ForgetPassword } from '@/domain/usecases'

export const makeForgetPassword = (): ForgetPassword => {
  return new RemoteForgetPasword(
    makeApiUrl('/usuario/enviar-recuperar-senha'),
    makeAxiosHttpClient()
  )
}
