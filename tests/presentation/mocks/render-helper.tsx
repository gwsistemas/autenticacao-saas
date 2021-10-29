import React from 'react'
import { Router } from 'react-router-dom'
import { MemoryHistory } from 'history'
import { MutableSnapshot, RecoilRoot, RecoilState } from 'recoil'
import { render } from '@testing-library/react'

import { mockAccountModel } from '@/tests/domain/mocks'
import { AccountModel } from '@/domain/models'
import { currentAccountState } from '@/presentation/state-management/atoms'
import ThemeProvider from '@/main/providers/theme-provider'

type Params = {
  Page: React.FC
  history: MemoryHistory
  account?: AccountModel
  states?: Array<{ atom: RecoilState<any>; value: any }>
}

type Result = {
  setCurrentAccountMock: (account: AccountModel) => void
}

export const renderWithHistory = ({
  Page,
  history,
  account = mockAccountModel(),
  states = []
}: Params): Result => {
  const setCurrentAccountMock = jest.fn()
  const mockedState = {
    setCurrentAccount: setCurrentAccountMock,
    getCurrentAccount: () => account
  }
  const initializeState = ({ set }: MutableSnapshot): void => {
    ;[...states, { atom: currentAccountState, value: mockedState }].forEach(
      (state) => set(state.atom, state.value)
    )
  }
  render(
    <RecoilRoot initializeState={initializeState}>
      <ThemeProvider>
        <Router history={history}>
          <Page />
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  )
  return {
    setCurrentAccountMock
  }
}
