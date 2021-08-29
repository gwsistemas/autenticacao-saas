import React from 'react'
import { ThemeProvider as ProviderStyled } from 'styled-components'
import { defaultTheme, GlobalStyle } from '@/presentation/styles'

type Props = {
  children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <ProviderStyled theme={defaultTheme}>{children}</ProviderStyled>
    </>
  )
}

ThemeProvider.displayName = 'ThemeProvider'

export default ThemeProvider
