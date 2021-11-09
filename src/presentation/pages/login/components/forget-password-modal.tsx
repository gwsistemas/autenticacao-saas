import React, { useState, memo, useEffect } from 'react'
import {
  Button,
  FormStatus,
  Input,
  Modal,
  ModalContent
} from '@/presentation/components'
import { Card, ContentButton, Title } from '../styles'
import { Validation } from '@/presentation/protocols/validation'
import { ForgetPassword } from '@/domain/usecases'

type Props = {
  open: boolean
  onClose: () => void
  validation: Validation
  forgetPassword: ForgetPassword
  onSuccess: (message: string) => void
}

const ForgetPasswordModal: React.FC<Props> = ({
  open,
  onClose,
  validation,
  forgetPassword,
  onSuccess
}: Props) => {
  const [state, setState] = useState({
    email: '',
    emailError: '',
    mainError: '',
    isLoading: false
  })

  const handleValidation = (): void => {
    setState((prevState) => ({
      ...prevState,
      emailError: validation.validate('email', prevState.email)
    }))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event
    setState((prevState) => ({
      ...prevState,
      email: target.value
    }))
    handleValidation()
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    setState((prevState) => ({ ...prevState, isLoading: true }))
    if (!state.email) {
      handleValidation()
      return
    }
    try {
      const data = await forgetPassword.send({
        email: state.email
      })
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        mainError: ''
      }))
      onSuccess(data.return)
    } catch (error) {
      console.log(error)
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        mainError: error.message
      }))
      onSuccess(error.message)
    }
  }

  useEffect(() => {
    return (): void => {
      setState({
        email: '',
        emailError: '',
        mainError: '',
        isLoading: false
      })
    }
  }, [])

  return (
    <Modal width="70rem" height="auto" isOpen={open} onClose={onClose}>
      <ModalContent>
        <Title>Esqueceu a senha?</Title>
        <form onSubmit={handleSubmit}>
          <Card>
            <Input
              fullWidth
              label="Informe seu email:"
              placeholder="Digite seu email"
              onChange={handleChange}
              value={state.email}
              helpText={state.emailError}
              error={!!state.emailError}
            />
            {!!state.mainError && <FormStatus>{state.mainError}</FormStatus>}
            <br />
            <ContentButton>
              <Button
                data-testid="submit"
                disabled={!!state.emailError || state.isLoading}
              >
                {!state.isLoading ? 'Recuperar conta' : 'Aguarde...'}
              </Button>
            </ContentButton>
          </Card>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default memo(ForgetPasswordModal)
