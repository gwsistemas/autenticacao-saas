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

import { Icones, LinkButton, Title, Card, ContentButton } from './styles'

const Login: React.FC = () => {
  const [showRegisterModal, setRegisterModal] = useState(false)
  const [showRecoveryModal, setRecoveryModal] = useState(false)

  const handleRecoveryModal = () => setRecoveryModal(!showRecoveryModal)

  const handleRegisterModal = () => setRegisterModal(!showRegisterModal)

  return (
    <Page>
      <Column hideMobile data-testid="column-login">
        <Iframe
          height="525px"
          data="https://gw-sas.s3.us-east-2.amazonaws.com/projeto-saas/templates/tela-login/anuncio-lado-esquerdo/infos-login.html"
        />
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
              onClick={handleRecoveryModal}
            >
              Esqueceu a senha?
            </LinkButton>
          </Column>
          <Column>
            <LinkButton variant="text" onClick={handleRegisterModal}>
              Ainda não possui cadastro?
            </LinkButton>
          </Column>
        </Row>
        <Icones src="/images/icones-login-trans.png" />
      </Column>
      <Modal isOpen={showRecoveryModal} onClose={handleRecoveryModal}>
        <Title>Esqueceu a senha?</Title>
        <Card>
          <Input
            fullWidth
            helpText=""
            label="Informe seu email:"
            placeholder="Digite seu email"
          />
          <br />
          <ContentButton>
            <Button data-testid="submit">Recuperar conta</Button>
          </ContentButton>
        </Card>
      </Modal>
      <Modal size="xl" isOpen={showRegisterModal} onClose={handleRegisterModal}>
        <Iframe data="https://gw-sas.s3.us-east-2.amazonaws.com/portal/recurso/HOM/index.html?stage=HOM" />
      </Modal>
    </Page>
  )
}

export default Login
