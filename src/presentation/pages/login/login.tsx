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
  Divider,
  FormStatus,
  MessageModal
} from '@/presentation/components'

import { Icones, LinkButton } from './styles'
import { Validation } from '@/presentation/protocols/validation'
import {
  Authentication,
  ForgetPassword,
  SearchUserOrganization
} from '@/domain/usecases'
import { currentAccountState } from '@/presentation/state-management/atoms'
import ForgetPasswordModal from './components/forget-password-modal'
import RegisterAccountModal from './components/register-account-modal'
import CNPJCompanyModal from './components/cnpj-company-modal'

type Props = {
  validation: Validation
  authentication: Authentication
  forgetPassword: ForgetPassword
  searchUserOrganization: SearchUserOrganization
}

const Login: React.FC<Props> = ({
  validation,
  authentication,
  forgetPassword,
  searchUserOrganization
}: Props) => {
  const [openRegisterAccount, setOpenRegisterAccount] = useState(false)
  const [openForgetPassword, setOpenForgetPassword] = useState(false)
  const [openCNPJ, setOpenCNPJ] = useState(false)
  const [messageModal, setMessageModal] = useState({
    open: false,
    message: ''
  })
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })
  const { setCurrentAccount } = useRecoilValue(currentAccountState)

  const handleOpenForgetPasswordToggle = (): void =>
    setOpenForgetPassword(!openForgetPassword)

  const handleRegisterAccountToggle = (): void =>
    setOpenRegisterAccount(!openRegisterAccount)

  const handleOpenCNPJToogle = (): void => setOpenCNPJ(!openCNPJ)

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

  const handleOpenMessageModalToggle = (message: string = ''): void => {
    setMessageModal((prevState) => ({
      open: !prevState.open,
      message
    }))
  }

  const handleForgetPasswordSuccess = (message: string): void => {
    handleOpenForgetPasswordToggle()
    handleOpenMessageModalToggle(message)
  }

  const handleCNPJReturnMessage = (message: string): void => {
    handleOpenCNPJToogle()
    handleOpenMessageModalToggle(message)
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

      setCurrentAccount({ ...account, senha: state.password })
      setState({ ...state, isLoading: false, mainError: '' })

      if (account.ativo) {
        history.push('/home')
      } else {
        handleOpenMessageModalToggle(
          `Informar ao usuário que a conta esta pendente de ativação e que um novo e-mail foi enviado para que seja ativada.`
        )
      }
    } catch (error) {
      if (error.name === 'InvalideCredentialsError') {
        handleOpenCNPJToogle()
      }
      setState({ ...state, isLoading: false })
    }
  }

  return (
    <Page>
      <Column hideMobile>
        <Iframe
          height="525px"
          data="https://gw-sas.s3.us-east-2.amazonaws.com/projeto-saas/templates/tela-login/anuncio-lado-esquerdo/infos-login.html"
        />
      </Column>
      <Divider />
      <Column data-testid="column-login">
        <Image src="/images/logo-gw-login-menor.png" alt="GW Image" />
        <Form data-testid="form-login" onSubmit={handleSubmit}>
          <div>
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
          </div>
          {!!state.mainError && <FormStatus>{state.mainError}</FormStatus>}
          <Row id="content-buttons">
            <Button
              type="submit"
              disabled={
                !!state.emailError || !!state.passwordError || state.isLoading
              }
              data-testid="submit"
            >
              {!state.isLoading ? 'Login' : 'Aguarde...'}
            </Button>
          </Row>
        </Form>
        <Row>
          <Column>
            <LinkButton
              variant="text"
              color="primary"
              onClick={handleOpenForgetPasswordToggle}
            >
              Esqueceu a senha?
            </LinkButton>
          </Column>
          <Column>
            <LinkButton variant="text" onClick={handleRegisterAccountToggle}>
              Ainda não possui cadastro?
            </LinkButton>
          </Column>
        </Row>
        <Icones src="/images/icones-login-trans.png" />
      </Column>
      {openForgetPassword && (
        <ForgetPasswordModal
          validation={validation}
          forgetPassword={forgetPassword}
          open={openForgetPassword}
          onClose={handleOpenForgetPasswordToggle}
          onSuccess={handleForgetPasswordSuccess}
        />
      )}
      {openCNPJ && (
        <CNPJCompanyModal
          validation={validation}
          searchUserOrganization={searchUserOrganization}
          open={openCNPJ}
          onClose={handleOpenCNPJToogle}
          onSuccess={handleCNPJReturnMessage}
          user={{
            login_usuario: state.email,
            senha_usuario: state.password
          }}
        />
      )}
      <RegisterAccountModal
        open={openRegisterAccount}
        onClose={handleRegisterAccountToggle}
      />
      {messageModal.open && (
        <MessageModal
          open={messageModal.open}
          onClose={handleOpenMessageModalToggle}
          width="100%"
          maxWidth="50rem"
        >
          <p>{messageModal.message}</p>
        </MessageModal>
      )}
    </Page>
  )
}

export default Login
