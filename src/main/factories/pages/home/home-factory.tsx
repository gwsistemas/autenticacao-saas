import React from 'react'
import { Home } from '@/presentation/pages'
import { makeRemoteUserOrganizationListUserFactory } from '@/main/factories/usecases'

export const makeHome: React.FC = () => {
  return (
    <Home
      userListOrganizationUser={makeRemoteUserOrganizationListUserFactory()}
    />
  )
}
