import React from 'react'

import { FormProps } from './types'
import { FormBase } from './styles'

const Form: React.FC<FormProps> = ({ children, ...rest }: FormProps) => (
  <FormBase data-testid="form" {...rest}>{children}</FormBase>
)

export default Form
