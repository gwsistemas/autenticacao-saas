import { RemoteAuthentication } from '@/data/usecases'
import { Authentication } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(
    makeApiUrl('/autenticacao/login'),
    makeAxiosHttpClient()
  )
}
