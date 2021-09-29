import React from 'react'
import { render, RenderOptions, RenderResult, cleanup } from '@testing-library/react'

import { Providers } from '../providers'

type Props = {
  children: React.ReactNode
}

const AllTheProviders: React.FC<Props> = ({ children }: Props) => {
  return (
    <Providers>
      {children}
    </Providers>
  )
}

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

export { customRender as render, cleanup, RenderResult }
