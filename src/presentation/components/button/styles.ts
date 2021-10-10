import styled from 'styled-components'
import { ButtonProps } from './types'

export const ButtonBase = styled.button<ButtonProps>`
  cursor: pointer;
  min-height: 47px;
  font-size: 2.1rem;
  border-radius: 2.3rem;
  padding: 0.6rem 2.3rem;
  color: ${({ theme, variant, active }) =>
    (variant === 'text' && theme.colors.primary.light) ||
    (active && `${theme.colors.primary.contrastText} !important`) ||
    (variant === 'contained' && theme.colors.primary.contrastText)};
  background-color: ${({ theme, variant, active }) =>
    (variant === 'text' && 'transparent') ||
    (active && `${theme.colors.primary.light} !important`) ||
    (variant === 'contained' && theme.colors.primary.main)};

  &:hover {
    color: ${({ theme, variant }) =>
      variant === 'text' && theme.colors.grey[900]};
  }

  &:disabled {
    opacity: 0.5;
    background-color: ${({ theme }) => theme.colors.grey[300]};
  }
`
