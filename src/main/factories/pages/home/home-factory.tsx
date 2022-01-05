import React from 'react'
import { Home } from '@/presentation/pages'
import {
  makeRemoteUserOrganizationListUserFactory,
  makeRemoteLoginSystem,
  makeRemoteLoadSupplierCustomers
} from '@/main/factories/usecases'

export const makeHome: React.FC = () => {
  return (
    <Home
      userListOrganizationUser={makeRemoteUserOrganizationListUserFactory()}
      loginSystem={makeRemoteLoginSystem()}
      loadSupplierCustomers={makeRemoteLoadSupplierCustomers()}
    />
  )
}
