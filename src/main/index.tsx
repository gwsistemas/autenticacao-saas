import React from 'react'
import ReactDom from 'react-dom'
import { Router } from '@/main/router'
import { Providers } from '@/main/providers'

ReactDom.render(
  <Providers>
    <Router />
  </Providers>
  , document.getElementById('main'))
