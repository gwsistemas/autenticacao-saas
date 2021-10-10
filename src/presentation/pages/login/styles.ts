import { rgba } from 'polished'
import styled from 'styled-components'
import { Button } from '@/presentation/components'

export const Divider = styled.div`
  width: 2px;
  border: 0rem;
  height: 500px;
  background-image: linear-gradient(
    to top,
    ${({ theme }) => rgba(theme.colors.primary.main, 0.1)},
    ${({ theme }) => theme.colors.primary.main},
    ${({ theme }) => rgba(theme.colors.primary.main, 0.1)}
  );

  @media screen and (max-width: 968px) {
    display: none;
  }
`

export const LinkButton = styled(Button)`
  display: block;
  cursor: pointer;
  font-size: 1.6rem;
`

export const Icones = styled.img`
  width: auto;
  height: 28px;
  display: block;
  margin-top: 2rem;
  margin: 0rem auto;
`
