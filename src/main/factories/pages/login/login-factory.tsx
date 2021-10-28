import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/usecases/remote-authentication-factory'
import { makeLoginValidation } from '@/main/factories/pages/login/login-validation-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      validation={makeLoginValidation()}
      authentication={makeRemoteAuthentication()}
    />
  )
}
