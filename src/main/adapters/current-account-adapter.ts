import { AccountModel } from '@/domain/models'
import { makeLocalStorageAdapter } from '../factories/cache'

export const setCurrentAccountAdapter = (account: AccountModel): void => {
  makeLocalStorageAdapter().set('account', account)
}

export const getCurrentAccountAdapter = (): object | null => {
  return makeLocalStorageAdapter().get('account')
}

export const removeCurrentAccountAdapter = (): void => {
  makeLocalStorageAdapter().remove('account')
}
