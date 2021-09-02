import React from 'react'

import { ButtonProps } from './types'
import { ButtonBase } from './styles'

const Button: React.FC<ButtonProps> = ({ title, ...rest }: ButtonProps) => (
  <ButtonBase data-testid="button" {...rest}>{title}</ButtonBase>
)

export default Button
