import { HtmlHTMLAttributes } from 'react'
import { LoginSystem, LoadSupplierCustomers } from '@/domain/usecases'

export interface FigureProps extends HtmlHTMLAttributes<HTMLElement> {
  active?: boolean
}

export type Props = {
  loginSystem: LoginSystem
  loadSupplierCustomers: LoadSupplierCustomers
}
