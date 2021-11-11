import React from 'react'

import { ModalProps } from './types'
import {
  Overlay,
  Image,
  ModalHeader,
  ModalWrapper,
  ModalContainer
} from './styles'

const Modal: React.FC<ModalProps> = ({
  width,
  height,
  maxWidth,
  onClose,
  children,
  size = 'sm',
  isOpen = false
}: ModalProps) => {
  if (!isOpen) return null

  return (
    <ModalWrapper>
      <Overlay onClick={onClose} />
      <ModalContainer width={width} height={height} maxWidth={maxWidth}>
        <ModalHeader size={size}>
          <Image src="/images/logo-gw-login-menor.png" alt="GW Image" />
        </ModalHeader>
        {children}
      </ModalContainer>
    </ModalWrapper>
  )
}

export default Modal
