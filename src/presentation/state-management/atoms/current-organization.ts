import { UserOrganizationUserModel } from '@/domain/models'
import { atom } from 'recoil'

export const currentOrganizationState = atom({
  key: 'currentOrganizationState',
  default: {
    getCurrentOrganization: null as () => UserOrganizationUserModel,
    setCurrentOrganization: null as (
      organization: UserOrganizationUserModel
    ) => void
  }
})
