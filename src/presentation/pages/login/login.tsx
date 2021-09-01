import React from 'react'
import { Column, Form, Input } from '@/presentation/components'

import { Page, Logo, IntroObject, Divider } from './styles'

const Login: React.FC = () => {
  return (
    <Page>
      <Column hideMobile>
        <IntroObject data="https://gw-sas.s3.us-east-2.amazonaws.com/projeto-saas/templates/tela-login/anuncio-lado-esquerdo/infos-login.html" />
      </Column>
      <Divider />
      <Column>
        <Logo src="/images/logo-gw-login-menor.png" alt="GW Logo" />
        <Form>
          <Input
            fullWidth
            helpText=""
            label="E-mail"
            placeholder="Seu email"
          />
          <br />
          <Input
            fullWidth
            helpText=""
            label="Senha"
            placeholder="Digite sua senha"
          />
        </Form>
      </Column>
    </Page>
  )
}

export default Login
