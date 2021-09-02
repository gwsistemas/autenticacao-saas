import React from 'react'

import { FormBase } from './styles'
import { FormProps } from './types'

const Form: React.FC<FormProps> = ({ children, ...rest }: FormProps) => (
  <FormBase data-testid="form" {...rest}>{children}</FormBase>
)

export default Form
