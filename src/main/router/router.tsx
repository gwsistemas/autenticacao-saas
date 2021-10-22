import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { makeHome } from '@/main/factories/pages/home/home-factory'
import { makeLogin } from '@/main/factories/pages/login/login-factory'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/login']} component={makeLogin} />
        <Route path="/home" component={makeHome} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
