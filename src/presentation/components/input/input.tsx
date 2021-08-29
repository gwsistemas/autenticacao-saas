import React from 'react'
import { InputWrapper, Label, InputBase, HelpeText } from './styles'
import { Props } from './types'

const Input: React.FC<Props> = ({
  helpText,
  label,
  htmlFor,
  id,
  name,
  error,
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
