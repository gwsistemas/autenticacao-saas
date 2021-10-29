import { currentAccountState } from '@/presentation/state-management/atoms'
import React from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const PrivateRouter: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
  return getCurrentAccount()?.token ? (
    <Route {...props} />
  ) : (
    <Route {...props} component={() => <Redirect to="/" />} />
  )
}

export default PrivateRouter
