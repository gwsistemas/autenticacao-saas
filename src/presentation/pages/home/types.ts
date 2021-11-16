import { HtmlHTMLAttributes } from 'react'
import { UserListOrganizationUser } from '@/domain/usecases'

export interface FigureProps extends HtmlHTMLAttributes<HTMLElement> {
  active?: boolean
}

export type Props = {
  userListOrganizationUser: UserListOrganizationUser
}
