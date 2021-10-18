import React from 'react'

import { ModalProps } from './types'
import { Container, Header, Overlay, Image, Wrapper, Content } from './styles'

const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  size = 'sm',
  isOpen = false,
}: ModalProps) => {
  if (!isOpen) return null

  return (
    <Wrapper>
      <Overlay onClick={onClose} />
      <Container size={size}>
        <Header size={size}>
          <Image src="/images/logo-gw-login-menor.png" alt="GW Image" />
        </Header>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  )
}

export default Modal
