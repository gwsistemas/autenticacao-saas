import React from 'react'

import { Wrapper } from './styles'
import { RowProps } from './types'

const Row: React.FC<RowProps> = ({
  children,
  ...rest
}: RowProps) => (
  <Wrapper data-testid="column" {...rest}>{children}</Wrapper>
)

export default Row
