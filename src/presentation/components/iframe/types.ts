import { HTMLAttributes } from 'react'

export interface IframeProps extends HTMLAttributes<HTMLObjectElement> {
  data: string
}
