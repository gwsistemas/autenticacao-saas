import { UserOrganizationUserModel } from '@/domain/models'
import { makeLocalStorageAdapter } from '../factories/cache'

export const setCurrentOrganizationAdapter = (
  organization: UserOrganizationUserModel
): void => {
  makeLocalStorageAdapter().set('organization', organization)
}

export const getCurrentOrganizationAdapter = (): object | null => {
  return makeLocalStorageAdapter().get('organization')
}
