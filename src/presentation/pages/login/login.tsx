import React from 'react'
import { Button, Column, Logo, Form, Page, Input, Iframe } from '@/presentation/components'

import {
  Row,
  Icones,
  Divider,
  LinkButton
} from './styles'

const Login: React.FC = () => {
  return (
    <Page>
      <Column hideMobile data-testid="column-login">
        <Iframe data="https://gw-sas.s3.us-east-2.amazonaws.com/projeto-saas/templates/tela-login/anuncio-lado-esquerdo/infos-login.html" />
      </Column>
      <Divider />
      <Column data-testid="column-login">
        <Logo url="/images/logo-gw-login-menor.png" alt="GW Logo" />
        <Form data-testid="form-login">
          <Input fullWidth helpText="" label="E-mail" placeholder="Seu email" />
          <br />
          <Input
            fullWidth
            helpText=""
            label="Senha"
            placeholder="Digite sua senha"
          />
          <Row id="content-buttons">
            <Button data-testid="submit">Login</Button>
          </Row>
        </Form>
        <Row>
          <Column>
            <LinkButton variant="text">Esqueceu a senha?</LinkButton>
          </Column>
          <Column>
            <LinkButton variant="text">Ainda não possui cadastro?</LinkButton>
          </Column>
        </Row>
        <Icones src="/images/icones-login-trans.png" />
      </Column>
    </Page>
  )
}

export default Login
