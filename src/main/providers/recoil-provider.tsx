import React from 'react'
import { RecoilRoot } from 'recoil'
import {
  setCurrentAccountAdapter,
  getCurrentAccountAdapter
} from '../adapters/current-account-adapter'
import { currentAccountState } from '@/presentation/components'

type Props = {
  children: React.ReactNode
}

const RecoilProvider: React.FC<Props> = ({ children }: Props) => {
  const state = {
    setCurrentAccount: setCurrentAccountAdapter,
    getCurrentAccount: getCurrentAccountAdapter
  }
  return (
    <RecoilRoot initializeState={({ set }) => set(currentAccountState, state)}>
      {children}
    </RecoilRoot>
  )
}
export default RecoilProvider
