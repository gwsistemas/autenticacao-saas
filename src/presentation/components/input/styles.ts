import styled, { css } from 'styled-components'
import { Props, InputBaseProps } from './types'

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: ${({ theme }): string => theme.colors.common.black};
`

export const HelpeText = styled.span`
  display: block;
  font-size: 13px;
  margin-top: 0.2rem;
  color: ${({ theme }): string => theme.colors.grey[600]};
`

export const InputBase = styled.input<Props>`
  height: 36px;
  font-size: 1rem;
  padding: 5px 9px;
  display: inline-block;
  border-radius: ${({ theme }): string => theme.borderRadius};
  box-shadow: inset ${({ theme }): string => theme.shadows[1]};
  border: 1px solid ${({ theme }): string => theme.colors.grey.A50};
  background-color: ${({ theme }): string => theme.colors.grey[50]};
  width: ${({ fullWidth }): string => (fullWidth && '100%') || 'auto'};

  &:disabled {
    border-color: transparent;
    color: ${({ theme }): string => theme.colors.grey[600]};
    box-shadow: none;
  }
`

export const InputWrapper = styled.div<InputBaseProps>`
  display: flex;
  min-height: 68px;
  margin-bottom: .75rem;
  flex-direction: column;
  align-items: flex-start;

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
