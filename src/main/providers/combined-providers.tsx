/* eslint-disable react/display-name */
import React, { ComponentProps, FC } from 'react'
import ThemeProvider from './theme-provider'
import RecoilProvider from './recoil-provider'

const providers = [RecoilProvider, ThemeProvider]

const combineComponents = (...components: FC[]): FC => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: ComponentProps<FC>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        )
      }
    },
    ({ children }) => <>{children}</>
  )
}

export const Providers = combineComponents(...providers)

Providers.displayName = 'MultipleProviders'
