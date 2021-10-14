import { DefaultTheme } from 'styled-components'
import { grey } from './colors'

export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      light: '#3273dc',
      main: '#00287c',
      contrastText: '#fff'
    },
    secondary: {
      main: '#3273dc',
      contrastText: '#fff'
    },
    error: {
      main: 'red'
    },
    grey
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif;",
    htmlFontSize: 16,
    fontSize: 14,
    fontWeight: 400,
    h1: {
      fontFamily: "'Open Sans', sans-serif;",
      fontSize: '2.5rem',
      fontWeight: 400,
      lineHeight: 1.2
    },
    body1: {
      fontFamily: "'Open Sans', sans-serif;",
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: 1.5
    }
  },
  shadows: [
    'none',
    '0 1px 2px rgb(10 10 10 / 10%)'
  ],
  text: {
    primary: '#363636',
    secondary: '#222',
    disabled: '#7a7a7a'
  },
  background: {
    default: '#fff'
  }
}
