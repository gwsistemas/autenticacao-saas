import React from 'react'
import ReactDom from 'react-dom'
import { Router } from '@/main/router'
import { Providers } from '@/main/providers'
import { makeLogin } from './factories/pages/login/login-factory'

ReactDom.render(
  <Providers>
    <Router makeLogin={makeLogin} />
  </Providers>,
  document.getElementById('main')
)
