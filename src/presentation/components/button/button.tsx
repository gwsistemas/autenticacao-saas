import React from 'react'

import { ButtonProps } from './types'
import { ButtonBase } from './styles'

const Button: React.FC<ButtonProps> = ({
  children,
  isRounded = true,
  color = 'primary',
  variant = 'contained',
  size = 'default',
  ...rest
}: ButtonProps) => (
  <ButtonBase
    data-testid="button"
    {...rest}
    size={size}
    color={color}
    variant={variant}
    isRounded={isRounded}
  >
    {children}
  </ButtonBase>
)

export default Button
