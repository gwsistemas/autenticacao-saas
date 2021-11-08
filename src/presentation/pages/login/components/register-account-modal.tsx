import React from 'react'
import { Iframe, Modal } from '@/presentation/components'

type Props = {
  open: boolean
  onClose: () => void
}

const RegisterAccountModal: React.FC<Props> = ({ open, onClose }: Props) => {
  return (
    <Modal size="xl" width="90%" height="95%" isOpen={open} onClose={onClose}>
      <Iframe data="https://gw-sas.s3.us-east-2.amazonaws.com/portal/recurso/HOM/index.html?stage=HOM" />
    </Modal>
  )
}

export default RegisterAccountModal
