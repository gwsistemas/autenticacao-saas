import React from 'react'
import { Home } from '@/presentation/pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/login']} component={makeLogin} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
