import styled, { css } from 'styled-components'
import { ColumnProps } from './types'

export const Wrapper = styled.div<ColumnProps>`
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 1;
  display: block;
  padding: .75rem;
  min-height: 500px;
  align-items: center;

  ${({ hideMobile }) => hideMobile && css`
    @media screen and (max-width: 968px) {
      display: none;
    }
  `}
`
