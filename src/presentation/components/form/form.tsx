import React from 'react'

import { FormBase } from './styles'
import { FormProps } from './types'

const Form: React.FC<FormProps> = ({ children, ...rest }: FormProps) => (
  <FormBase {...rest}>{children}</FormBase>
)

export default Form
