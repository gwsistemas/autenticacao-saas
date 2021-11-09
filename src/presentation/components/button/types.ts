import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isRounded?: boolean
  color?: 'primary' | 'secondary' | 'default'
  variant?: 'text' | 'contained' | 'outlined'
  size?: 'default' | 'small'
}
