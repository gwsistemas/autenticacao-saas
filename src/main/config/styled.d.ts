import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      common: {
        black: string
        white: string
      }
      primary: {
        light: string
        main: string
        contrastText: string
      }
      secondary: {
        main: string
        contrastText: string
      }
      error: {
        main: string
      }
      grey: {
        [prop in number | string]: string
      }
    }
    typography: {
      fontWeight: number
      fontSize: number | string
      htmlFontSize: number
      fontFamily: string
      h1: {
        fontWeight: number
        fontSize: number | string
        fontFamily: string
        lineHeight: number
      }
      body1: {
        fontWeight: number
        fontSize: number | string
        fontFamily: string
        lineHeight: number
      }
    }
    shadows: string[]
    text: {
      primary: string
      disabled: string
      secondary: string
    }
    background: {
      default: string
    }
  }
}
