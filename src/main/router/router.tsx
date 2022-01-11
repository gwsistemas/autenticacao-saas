import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { makeLogin, makeHome, makeSuppliers } from '@/main/factories/pages'
import { PrivateRoute } from '@/main/proxies'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/login']} component={makeLogin} />
        <PrivateRoute exact path="/home" component={makeHome} />
        <Route path="/fornecedores/:organizationId" component={makeSuppliers} />
        <Route path="*">
          <h1>Página não encontrada</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
