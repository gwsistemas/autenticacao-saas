import { HTMLAttributes } from 'react'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  size?: 'sm' | 'xl'
  onClose?: () => void
}
