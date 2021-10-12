import React from 'react'

import { ButtonProps } from './types'
import { ButtonBase } from './styles'

const Button: React.FC<ButtonProps> = ({
  children,
  isRounded = true,
  color = 'primary',
  variant = 'contained',
  ...rest
}: ButtonProps) => (
  <ButtonBase
    data-testid="button"
    {...rest}
    color={color}
    variant={variant}
    isRounded={isRounded}
  >
    {children}
  </ButtonBase>
)

export default Button
