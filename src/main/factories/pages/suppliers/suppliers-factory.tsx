import React from 'react'
import { Suppliers } from '@/presentation/pages'
import {
  makeRemoteLoadSupplierCustomers,
  makeRemoteLoginSystem
} from '../../usecases'

export const makeSuppliers: React.FC = () => {
  return (
    <Suppliers
      loginSystem={makeRemoteLoginSystem()}
      loadSupplierCustomers={makeRemoteLoadSupplierCustomers()}
    />
  )
}
