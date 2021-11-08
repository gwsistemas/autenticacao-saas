import React from 'react'
import { Button, Input, Modal } from '@/presentation/components'
import { Card, ContentButton, Title } from '../styles'

type Props = {
  open: boolean
  onClose: () => void
}

const ForgetPasswordModal: React.FC<Props> = ({ open, onClose }: Props) => {
  return (
    <Modal width="30rem" height="auto" isOpen={open} onClose={onClose}>
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
  )
}

export default ForgetPasswordModal
