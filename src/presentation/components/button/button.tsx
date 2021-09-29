import React from 'react'

import { ButtonProps } from './types'
import { ButtonBase } from './styles'

const Button: React.FC<ButtonProps> = ({ children, variant = 'contained', ...rest }: ButtonProps) => (
  <ButtonBase data-testid="button" {...rest} variant={variant}>{children}</ButtonBase>
)

export default Button
