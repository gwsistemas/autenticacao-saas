import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { makeHome } from '@/main/factories/pages/home/home-factory'
import { makeLogin } from '@/main/factories/pages/login/login-factory'
import { PrivateRoute } from '@/main/proxies'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/login']} component={makeLogin} />
        <PrivateRoute path="/home" component={makeHome} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
