export type Variant = 'h1' | 'body1'
export type Color = 'primaryText' | 'secondaryText' | 'default'

export interface Props {
  variant?: Variant
  component?: string | undefined
  color?: Color
  as?: any
}
