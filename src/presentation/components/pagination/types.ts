import { HtmlHTMLAttributes } from 'react'

export interface Props {
  itemPerPage: number
  totalData: number
  currentPage: number
  onPaginate: (item: number) => void
  onNextPaginate?: () => void
  onPrevPaginate?: () => void
}

export interface LiProps extends HtmlHTMLAttributes<HTMLDataListElement> {
  active?: boolean
  disabled?: boolean
}
