import { rgba } from 'polished'
import styled from 'styled-components'

import { ModalProps } from './types'

const Fixed = styled.div`
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: fixed;
`

export const Overlay = styled(Fixed)`
  background-color: ${({ theme }) => rgba(theme.colors.common.black, 0.6)};
`

export const ModalWrapper = styled(Fixed)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div<ModalProps>`
  z-index: 9999;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 0.4rem;
  flex-direction: column;
  justify-content: flex-start;
  width: ${({ width }) => width || '30rem'};
  max-width: ${({ maxWidth }) => maxWidth || '30rem'};
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ theme }) => theme.colors.common.white};
`

export const ModalHeader = styled.div<ModalProps>`
  width: 100%;
  height: 67px;
  display: flex;
  padding: 1rem;
  /* box-shadow: 0px 1px 3px 0px rgb(0 31 232 / 20%); */
  border-bottom: 1px solid ${({ theme }): string => theme.colors.grey['100']};
  align-items: ${({ size }) => (size === 'sm' ? 'center' : 'flex-start')};
  justify-content: ${({ size }) => (size === 'sm' ? 'center' : 'flex-start')};
`

export const Image = styled.img`
  width: 130px;
`

export const ModalContent = styled.div`
  flex: 1;
  width: 100%;
  padding: 1.5rem;
`
export const ModalActions = styled.div`
  flex: 1;
  width: 100%;
  padding: 1.5rem;
  border-top: 1px solid ${({ theme }): string => theme.colors.grey['100']};
`
