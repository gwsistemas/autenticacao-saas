import styled, { css } from 'styled-components'

import { FigureProps } from './types'

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
