import styled, { css } from 'styled-components'
import { ColumnProps } from './types'

export const Wrapper = styled.div<ColumnProps>`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-shrink: 1;
  padding: 0.75rem;
  flex-direction: column;

  ${({ hideMobile }) => hideMobile && css`
    @media screen and (max-width: 968px) {
      display: none;
    }
  `}
`
