import { CSSProperties, HTMLAttributes } from 'react'

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  hideMobile?: boolean
}

export interface IframeProps extends HTMLAttributes<HTMLObjectElement> {
  data: string
  height?: string
}

export interface ListItemProps {
  justifyContent?: CSSProperties['justifyContent']
}
