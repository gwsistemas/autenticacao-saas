import {
  UserOrganizationListUserModel,
  UserOrganizationUserModel
} from '@/domain/models'

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  organizationsData: UserOrganizationListUserModel
  textSearch?: string
  organizationType?: string
  onClickOrganization?: (userOrganization: UserOrganizationUserModel) => void
  loading: boolean
}
