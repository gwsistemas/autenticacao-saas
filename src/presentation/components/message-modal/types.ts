import { ModalProps } from '../modal/types'

export interface Props extends ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}
