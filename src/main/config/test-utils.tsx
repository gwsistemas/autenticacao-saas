/* eslint-disable react/prop-types */
import React from 'react'
import {
  render,
  RenderOptions,
  RenderResult,
  cleanup
} from '@testing-library/react'

import { Providers } from '../providers'

const AllTheProviders: React.FC = ({ children }) => {
  return <Providers>{children}</Providers>
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export { customRender as render, cleanup, RenderResult }
