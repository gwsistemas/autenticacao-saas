import React from 'react'
import { Home, Login } from '@/presentation/pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
