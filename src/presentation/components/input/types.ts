import { InputHTMLAttributes } from 'react'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  helpText?: string
  label?: string
  htmlFor?: string
  fullWidth?: boolean
  error?: boolean
}

export type InputBaseProps = Props
