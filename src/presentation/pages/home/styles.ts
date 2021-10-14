import styled, { css } from 'styled-components'

import { FigureProps, LiProps } from './types'

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey[700]};
`

export const Figure = styled.figure<FigureProps>`
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition-duration: 0.3s;
  transition-property: transform;

  i {
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.grey[900]};

    ${({ active }) =>
      active &&
      css`
        color: ${({ theme }) => theme.colors.primary.main};
      `}
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const Figcaption = styled.figcaption`
  color: ${({ theme }) => theme.colors.grey[400]};
`

export const Search = styled.div`
  width: 50%;
  display: flex;
  margin: 0 auto;
  position: relative;
  align-items: center;
  justify-content: center;

  input {
    border-radius: 20px;
    padding-left: 4.5rem;

    &::placeholder {
      text-align: center;
    }
  }
`

export const SearchIcon = styled.div`
  left: 0px;
  width: 36px;
  height: 36px;
  display: flex;
  position: absolute;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.common.white};
  background-color: ${({ theme }) => theme.colors.primary.main};
`

export const OrgList = styled.div`
  padding: 0px 7rem;

  @media screen and (max-width: 968px) {
    padding: 0px;
  }
`

export const OrgItem = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  cursor: pointer;
  padding: 1.2rem;
  margin-bottom: 5px;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  transition-duration: 0.3s;
  justify-content: space-between;
  transition-property: transform;
  border: 1px solid ${({ theme }) => theme.colors.grey[400]};

  img {
    width: 75px;
    margin: 0px;
    height: 20px;
  }

  p {
    margin: 0px;
    font-size: 1.3rem;
  }

  i {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.grey[700]};
  }

  &:hover {
    transform: scale(1.1);

    i {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`

export const Pagination = styled.div`
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

  &:nth-child(2) {
    border: none;
    cursor: default;
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors.grey[300]};
  }
`
