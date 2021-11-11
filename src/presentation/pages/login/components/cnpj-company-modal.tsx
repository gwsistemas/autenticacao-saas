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

const CNPJCompanyModal: React.FC<Props> = ({
  open,
  onClose,
  validation,
  forgetPassword,
  onSuccess
}: Props) => {
  const [state, setState] = useState({
    cnpj: '',
    cnpjError: '',
    mainError: '',
    isLoading: false
  })

  const handleValidation = (): void => {
    setState((prevState) => ({
      ...prevState,
      cnpjError: validation.validate('cnpj', prevState.cnpj)
    }))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event
    setState((prevState) => ({
      ...prevState,
      cnpj: target.value
    }))
    handleValidation()
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    setState((prevState) => ({ ...prevState, isLoading: true }))
    if (!state.cnpj) {
      handleValidation()
      return
    }
    try {
      const data = await forgetPassword.send({
        email: state.cnpj
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
        cnpj: '',
        cnpjError: '',
        mainError: '',
        isLoading: false
      })
    }
  }, [])

  return (
    <Modal
      width="100%"
      maxWidth="50rem"
      height="auto"
      isOpen={open}
      onClose={onClose}
    >
      <ModalContent>
        <Title>Informe o CNPJ da empresa</Title>
        <form onSubmit={handleSubmit}>
          <Card>
            <Input
              fullWidth
              label="CNPJ:"
              placeholder="Digite o CNPJ"
              onChange={handleChange}
              value={state.cnpj}
              helpText={state.cnpjError}
              error={!!state.cnpjError}
            />
            {!!state.mainError && <FormStatus>{state.mainError}</FormStatus>}
            <br />
            <ContentButton>
              <Button
                data-testid="submit"
                disabled={!!state.cnpjError || state.isLoading}
              >
                {!state.isLoading ? 'Buscar usuário' : 'Aguarde...'}
              </Button>
            </ContentButton>
          </Card>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default memo(CNPJCompanyModal)
