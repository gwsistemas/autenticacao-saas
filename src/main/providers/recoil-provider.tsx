import React from 'react'
import { RecoilRoot } from 'recoil'
import {
  setCurrentAccountAdapter,
  getCurrentAccountAdapter,
  setCurrentOrganizationAdapter,
  getCurrentOrganizationAdapter
} from '../adapters'
import {
  currentAccountState,
  currentOrganizationState
} from '@/presentation/state-management/atoms'

type Props = {
  children: React.ReactNode
}

const RecoilProvider: React.FC<Props> = ({ children }: Props) => {
  const accountState = {
    setCurrentAccount: setCurrentAccountAdapter,
    getCurrentAccount: getCurrentAccountAdapter
  }

  const organizationState = {
    setCurrentOrganization: setCurrentOrganizationAdapter,
    getCurrentOrganization: getCurrentOrganizationAdapter
  }

  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(currentAccountState, accountState)
        set(currentOrganizationState, organizationState)
      }}
    >
      {children}
    </RecoilRoot>
  )
}
export default RecoilProvider
