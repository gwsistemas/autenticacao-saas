import styled, { css } from 'styled-components'

import { ButtonProps } from './types'

export const ButtonBase = styled.button<ButtonProps>`
  cursor: pointer;
  min-height: 47px;
  font-size: 2.1rem;
  padding: 0.6rem 2.3rem;
  border-radius: ${({ isRounded }) => (isRounded ? '2.3rem' : '0.4rem')};

  color: ${({ theme, variant, color }) =>
    (color === 'primary' && theme.colors.primary.contrastText) ||
    (color === 'secondary' && theme.colors.secondary.contrastText) ||
    (variant === 'text' && theme.colors.primary.light)};

  background-color: ${({ theme, variant, color }) =>
    ((variant === 'text' || variant === 'outlined') && 'transparent') ||
    (variant === 'contained' &&
      (color === 'primary'
        ? theme.colors.primary.main
        : theme.colors.secondary.main))};

  ${({ theme, color, variant }) =>
    variant === 'outlined' &&
    css`
      color: ${(color === 'primary' && theme.colors.primary.main) ||
      (color === 'secondary' && theme.colors.secondary.main)};
      border-width: 1px;
      border-style: solid;
      border-color: ${(color === 'primary' && theme.colors.primary.main) ||
      (color === 'secondary' && theme.colors.secondary.main)};
    `}

  &:hover {
    color: ${({ theme, variant }) =>
      variant === 'text' && theme.colors.grey[900]};
  }

  &:disabled {
    opacity: 0.5;
    background-color: ${({ theme }) => theme.colors.grey[300]};
  }
`
