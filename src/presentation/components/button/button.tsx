import React from 'react'

import { ButtonBase } from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({ title, ...rest }: ButtonProps) => (
  <ButtonBase data-testid="button" {...rest}>{title}</ButtonBase>
)

export default Button
