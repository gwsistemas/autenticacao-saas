import { HTMLAttributes } from 'react'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  width?: string
  maxWidth?: string
  height?: string
  isOpen?: boolean
  size?: 'sm' | 'xl'
  onClose?: () => void
  onSuccess?: () => void
}
