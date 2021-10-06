import React from 'react'

import { Wrapper } from './styles'
import { PageProps } from './types'

const Page: React.FC<PageProps> = ({ children }: PageProps) => {
  return <Wrapper>{children}</Wrapper>
}

export default Page
