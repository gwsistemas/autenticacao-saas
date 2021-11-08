import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/usecases/remote-authentication-factory'
import { makeLoginValidation } from '@/main/factories/pages/login/login-validation-factory'
import { makeForgetPassword } from '@/main/usecases/remote-forget-password-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      forgetPassword={makeForgetPassword()}
      validation={makeLoginValidation()}
      authentication={makeRemoteAuthentication()}
    />
  )
}
