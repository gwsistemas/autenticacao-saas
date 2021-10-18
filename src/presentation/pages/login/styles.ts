import styled from 'styled-components'
import { Button } from '@/presentation/components'

export const LinkButton = styled(Button)`
  display: block;
  cursor: pointer;
  font-size: 1.6rem;

  @media screen and (max-width: 968px) {
    font-size: 1.3rem;
  }
`

export const Icones = styled.img`
  width: auto;
  height: 28px;
  display: block;
  margin-top: 2rem;
  margin: 0rem auto;
`
