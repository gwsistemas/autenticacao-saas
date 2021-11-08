import React, { useState, memo } from 'react'
import { Button, FormStatus, Input, Modal } from '@/presentation/components'
import { Card, ContentButton, Title } from '../styles'
import { Validation } from '@/presentation/protocols/validation'
import { ForgetPassword } from '@/domain/usecases'

type Props = {
  open: boolean
  onClose: () => void
  validation: Validation
  forgetPassword: ForgetPassword
}

const ForgetPasswordModal: React.FC<Props> = ({
  open,
  onClose,
  validation,
  forgetPassword
}: Props) => {
  const [state, setState] = useState({
    email: '',
    emailError: '',
    mainError: '',
    isLoading: false
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event
    setState((prevState) => ({
      ...prevState,
      email: target.value,
      emailError: validation.validate('email', target.value)
    }))
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    setState((prevState) => ({ ...prevState, isLoading: true }))
    try {
      const data = await forgetPassword.send({
        email: state.email
      })
      console.log(data)
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        mainError: ''
      }))
    } catch (error) {
      console.log(error)
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        mainError: error.message
      }))
    }
  }

  return (
    <Modal width="50rem" height="auto" isOpen={open} onClose={onClose}>
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
    </Modal>
  )
}

export default memo(ForgetPasswordModal)
