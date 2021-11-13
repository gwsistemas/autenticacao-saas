import React from 'react'
import { Login } from '@/presentation/pages'
import { makeLoginValidation } from '@/main/factories/pages/login/login-validation-factory'
import {
  makeRemoteAuthentication,
  makeForgetPassword,
  makeSearchUserOrganization
} from '@/main/factories/usecases'

export const makeLogin: React.FC = () => {
  return (
    <Login
      forgetPassword={makeForgetPassword()}
      validation={makeLoginValidation()}
      authentication={makeRemoteAuthentication()}
      searchUserOrganization={makeSearchUserOrganization()}
    />
  )
}
