import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isRounded?: boolean
  color?: 'primary' | 'secondary'
  variant?: 'text' | 'contained' | 'outlined'
}
