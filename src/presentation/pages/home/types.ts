import { HtmlHTMLAttributes } from 'react'

export interface FigureProps extends HtmlHTMLAttributes<HTMLElement> {
  active?: boolean
}

export interface LiProps extends HtmlHTMLAttributes<HTMLDataListElement> {
  active?: boolean
  disabled?: boolean
}
