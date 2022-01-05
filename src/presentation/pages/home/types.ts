import { HtmlHTMLAttributes } from 'react'
import {
  UserListOrganizationUser,
  LoginSystem,
  LoadSupplierCustomers
} from '@/domain/usecases'

export interface FigureProps extends HtmlHTMLAttributes<HTMLElement> {
  active?: boolean
}

export type Props = {
  userListOrganizationUser: UserListOrganizationUser
  loginSystem: LoginSystem
  loadSupplierCustomers: LoadSupplierCustomers
}
