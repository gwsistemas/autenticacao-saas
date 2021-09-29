import React from 'react'

import { Wrapper } from './styles'
import { ColumnProps } from './types'

const Column: React.FC<ColumnProps> = ({
  children,
  ...rest
}: ColumnProps) => (
  <Wrapper data-testid="column" {...rest}>{children}</Wrapper>
)

export default Column
