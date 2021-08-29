import styled, { css } from 'styled-components'
import { Props, InputBaseProps } from './types'

export const Label = styled.label`
  color: ${({ theme }): string => theme.colors.common.black};
  font-size: 1.6rem;
`

export const HelpeText = styled.span`
  display: block;
  margin-top: 0.2rem;
  color: ${({ theme }): string => theme.colors.grey[600]};
  font-size: 1.3rem;
`

export const InputBase = styled.input<Props>`
  display: block;
  box-shadow: inset ${({ theme }): string => theme.shadows[1]};
  font-size: inherit;
  background-color: ${({ theme }): string => theme.colors.grey[50]};
  border-radius: ${({ theme }): string => theme.borderRadius};
  width: ${({ fullWidth }): string => (fullWidth && '100%') || 'auto'};
  min-width: 160px;
  height: 36px;
  border: 1px solid ${({ theme }): string => theme.colors.grey.A50};
  &:disabled {
    border-color: transparent;
    color: ${({ theme }): string => theme.colors.grey[600]};
    box-shadow: none;
  }
`

export const InputWrapper = styled.div<InputBaseProps>`
  font-size: 1.4rem;
  ${({ error }) => error && css`
    ${InputBase} {
      border-color: ${({ theme }): string => theme.colors.error.main};
    }
    ${HelpeText}, ${Label}, ${InputBase} {
      color: ${({ theme }): string => theme.colors.error.main};
    }
  `} 
  ${Label}, ${HelpeText} {
    margin-bottom: 0.8rem;
  }
`
