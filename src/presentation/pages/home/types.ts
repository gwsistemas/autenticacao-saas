import { HtmlHTMLAttributes } from 'react'
import { UserListOrganizationUser, LoginSystem } from '@/domain/usecases'

export interface FigureProps extends HtmlHTMLAttributes<HTMLElement> {
  active?: boolean
}

export type Props = {
  userListOrganizationUser: UserListOrganizationUser
  loginSystem: LoginSystem
}

export type AcessesTypes = {
  plural: {
    [x: string]: string
  }
  single: {
    [x: string]: string
  }
}
