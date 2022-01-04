import styled, { css } from 'styled-components'
import { LiProps } from './types'

export const PaginationBase = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const PaginationList = styled.ul`
  margin: 0px;
  display: flex;
  list-style: none;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  li:nth-child(2) > p {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors.grey[300]};
  }
`

export const PaginationButton = styled.li<LiProps>`
  width: 36px;
  height: 36px;
  display: flex;
  cursor: pointer;
  margin-left: 1rem;
  font-size: 1.3rem;
  align-items: center;
  border-radius: 0.4rem;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grey[900]};
  border: 1px solid ${({ theme }) => theme.colors.grey.A50};
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.colors.grey[300]};
    `}

  ${({ active, theme }) =>
    active &&
    css`
      color: ${theme.colors.secondary.contrastText};
      background-color: ${theme.colors.secondary.main};
    `}
`
