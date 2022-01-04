import React from 'react'
import { Home } from '@/presentation/pages'
import {
  makeRemoteUserOrganizationListUserFactory,
  makeRemoteLoginSystem
} from '@/main/factories/usecases'

export const makeHome: React.FC = () => {
  return (
    <Home
      userListOrganizationUser={makeRemoteUserOrganizationListUserFactory()}
      loginSystem={makeRemoteLoginSystem()}
    />
  )
}
