import React from 'react'
import { Column, Iframe, Logo, Page } from '@/presentation/components'

const Home: React.FC = () => {
  return (
    <Page>
      <Column hideMobile data-testid="column-home">
        <Iframe data="https://gw-sas.s3.us-east-2.amazonaws.com/projeto-saas/templates/tela-login/anuncio-lado-esquerdo/infos-login.html" />
      </Column>
      <Column data-testid="column-login">
        <Logo url="/images/logo-gw-login-menor.png" alt="GW Logo" />
      </Column>
    </Page>
  )
}

export default Home
