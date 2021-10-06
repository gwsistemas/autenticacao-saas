import { HtmlHTMLAttributes } from 'react'

export interface LogoProps extends HtmlHTMLAttributes<HTMLImageElement> {
  url: string
  alt: string
}
