import { Authentication } from '@/domain/usecases'

interface AuthenticationParamsMapperReturn {
  email: string
  senha: string
}

export class AuthenticationParamsMapper {
  static authParams (params: Authentication.Params): AuthenticationParamsMapperReturn {
    return {
      email: params.email,
      senha: params.password
    }
  }
}
