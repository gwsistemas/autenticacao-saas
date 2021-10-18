import React, { useState } from 'react'
import {
  Button,
  Column,
  Image,
  Form,
  Page,
  Input,
  Iframe,
  Row,
  Divider,
  Modal,
} from '@/presentation/components'

import { Icones, LinkButton } from './styles'

const Login: React.FC = () => {
  const [showModal, setToggleModal] = useState(false)

  const handleToggleModal = () => setToggleModal(!showModal)

  return (
    <Page>
      <Column hideMobile data-testid="column-login">
        <Iframe data="https://gw-sas.s3.us-east-2.amazonaws.com/projeto-saas/templates/tela-login/anuncio-lado-esquerdo/infos-login.html" />
      </Column>
      <Divider />
      <Column data-testid="column-login">
        <Image src="/images/logo-gw-login-menor.png" alt="GW Image" />
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
            <LinkButton
              variant="text"
              color="primary"
              onClick={handleToggleModal}
            >
              Esqueceu a senha?
            </LinkButton>
          </Column>
          <Column>
            <LinkButton variant="text">Ainda não possui cadastro?</LinkButton>
          </Column>
        </Row>
        <Icones src="/images/icones-login-trans.png" />
      </Column>
      <Modal isOpen={showModal} onClose={handleToggleModal} />
    </Page>
  )
}

export default Login
