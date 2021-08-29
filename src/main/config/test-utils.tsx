import React from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
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

export * from '@testing-library/react'
export { customRender as render }
