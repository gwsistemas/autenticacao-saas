import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import {
  Button,
  Column,
  Image,
  Form,
  Page,
  Input,
  Iframe,
  Row,
  Divider
} from '@/presentation/components'

import { Icones, LinkButton } from './styles'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/usecases'
import { currentAccountState } from '@/presentation/state-management/atoms'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })
  const { setCurrentAccount } = useRecoilValue(currentAccountState)

  const history = useHistory()

  const handleValidation = (): void => {
    setState((prevState) => ({
      ...prevState,
      emailError: validation.validate('email', prevState.email),
      passwordError: validation.validate('password', prevState.password)
    }))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value }
    } = event
    setState((prevState) => ({ ...prevState, [name]: value }))
    handleValidation()
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    if (!state.email || !state.password) {
      handleValidation()
      return
    }

    if (state.isLoading) {
      return
    }

    try {
      setState({ ...state, isLoading: true })
      const account = await authentication.auth({
        email: state.email,
        senha: state.password
      })
      setCurrentAccount(account)
      setState({ ...state, isLoading: false })
      history.push('/home')
    } catch (error) {
      setState({ ...state, isLoading: false, mainError: error.message })
    }
  }

  return (
    <Page>
      <Column hideMobile data-testid="column-login">
        <Iframe data="https://gw-sas.s3.us-east-2.amazonaws.com/projeto-saas/templates/tela-login/anuncio-lado-esquerdo/infos-login.html" />
      </Column>
      <Divider />
      <Column data-testid="column-login">
        <Image src="/images/logo-gw-login-menor.png" alt="GW Image" />
        <Form data-testid="form-login" onSubmit={handleSubmit}>
          <Input
            fullWidth
            placeholder="Seu email"
            label="E-mail"
            name="email"
            id="email"
            onChange={handleChange}
            value={state.email}
            error={!!state.emailError}
            helpText={state.emailError}
          />
          <br />
          <Input
            fullWidth
            placeholder="Digite sua senha"
            type="password"
            label="Senha"
            name="password"
            id="password"
            onChange={handleChange}
            value={state.password}
            error={!!state.passwordError}
            helpText={state.passwordError}
          />
          <Row id="content-buttons">
            <Button
              type="submit"
              disabled={
                !!state.emailError || !!state.passwordError || state.isLoading
              }
              data-testid="submit"
            >
              {!state.isLoading ? 'Login' : 'Aguarde'}
            </Button>
          </Row>
        </Form>
        <Row>
          <Column>
            <LinkButton variant="text" color="primary">
              Esqueceu a senha?
            </LinkButton>
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
