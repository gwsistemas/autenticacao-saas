import React from 'react'
import { PaginationBase, PaginationList, PaginationButton } from './styles'
import { Props } from './types'

const Pagination: React.FC<Props> = ({
  itemPerPage,
  totalData,
  currentPage,
  onPaginate,
  onNextPaginate,
  onPrevPaginate
}: Props) => {
  const pageNumbers = []
  const totalPage = Math.ceil(totalData / itemPerPage)

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <PaginationBase>
      <PaginationButton onClick={onPrevPaginate} disabled={currentPage === 1}>
        {'<'}
      </PaginationButton>
      <PaginationList>
        {pageNumbers.map((num) => (
          <PaginationButton
            key={num}
            active={currentPage === num}
            onClick={() => onPaginate(num)}
          >
            {num}
          </PaginationButton>
        ))}
      </PaginationList>
      <PaginationButton
        onClick={onNextPaginate}
        disabled={currentPage === totalPage}
      >
        {'>'}
      </PaginationButton>
    </PaginationBase>
  )
}

export default Pagination
