import React from 'react'
import { TypographyBase } from './styles'
import { Props } from './types'

const defaultVariantMapping = {
  h1: 'h1',
  body1: 'p'
}

const Typography: React.FC<Props> = ({ variant = 'body1', color = 'default', component, ...rest }: Props) => {
  const componentType = component || defaultVariantMapping[variant] || 'p'
  return (
    <TypographyBase as={componentType} variant={variant} color={color} {...rest} />
  )
}

Typography.displayName = 'Typography'

export default Typography
