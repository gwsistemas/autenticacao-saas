import styled, { css } from 'styled-components'
import { Props, InputBaseProps } from './types'

export const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  color: ${({ theme }): string => theme.colors.common.black};
`

export const HelpeText = styled.span`
  display: block;
  font-size: 1.3rem;
  margin-top: 0.2rem;
  color: ${({ theme }): string => theme.colors.grey[600]};
`

export const InputBase = styled.input<Props>`
  height: 36px;
  font-size: 1.6rem;
  display: inline-block;
  padding: 0.5rem 0.9rem;
  border-radius: ${({ theme }): string => theme.borderRadius};
  box-shadow: inset ${({ theme }): string => theme.shadows[1]};
  background-color: ${({ theme }): string => theme.colors.grey[50]};
  border: 0.1rem solid ${({ theme }): string => theme.colors.grey.A50};
  width: ${({ fullWidth }): string => (fullWidth && '100%') || 'auto'};

  &:disabled {
    box-shadow: none;
    border-color: transparent;
    color: ${({ theme }): string => theme.colors.grey[600]};
  }
`

export const InputWrapper = styled.div<InputBaseProps>`
  display: flex;
  margin-bottom: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  width: ${({ fullWidth }): string => (fullWidth && '100%') || 'auto'};

  ${({ error }) =>
    error &&
    css`
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
