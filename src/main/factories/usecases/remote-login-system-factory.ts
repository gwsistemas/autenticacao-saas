import { RemoteLoginSystem } from '@/data/usecases'
import { makeAxiosHttpClient } from '../http/axios-http-client-factory'

export const makeRemoteLoginSystem = (): RemoteLoginSystem => {
  return new RemoteLoginSystem(makeAxiosHttpClient())
}
