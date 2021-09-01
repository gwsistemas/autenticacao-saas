import React from 'react'

import { Props } from './types'
import { InputWrapper, Label, InputBase, HelpeText } from './styles'

const Input: React.FC<Props> = ({
  id,
  name,
  error,
  label,
  htmlFor,
  helpText,
  fullWidth,
  ...rest
}: Props) => {
  return (
    <InputWrapper error={error}>
      <Label htmlFor={htmlFor || id}>{label}</Label>
      <InputBase {...rest} id={id} name={name} data-testid="input" fullWidth={fullWidth} />
      {helpText && <HelpeText data-testid="help-text">{helpText}</HelpeText>}
    </InputWrapper>
  )
}

export default Input
