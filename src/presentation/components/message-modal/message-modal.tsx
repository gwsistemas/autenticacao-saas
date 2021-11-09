import React from 'react'
import {
  Modal,
  ModalContent,
  ModalActions,
  Button
} from '@/presentation/components'
import { Actions } from './styles'
import { Props } from './types'

const MessageModal: React.FC<Props> = ({
  open,
  children,
  onClose,
  onSuccess,
  ...rest
}: Props) => {
  return (
    <Modal {...rest} isOpen={open} onClose={onClose}>
      <ModalContent>{children}</ModalContent>
      <ModalActions>
        <Actions>
          <Button
            variant="outlined"
            isRounded={false}
            color="default"
            size="small"
            onClick={(): null => {
              if (onSuccess) {
                onSuccess()
                return
              }
              onClose()
            }}
          >
            OK
          </Button>
        </Actions>
      </ModalActions>
    </Modal>
  )
}

export default MessageModal
