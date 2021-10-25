import styled from 'styled-components'
import { Button } from '@/presentation/components'

export const LinkButton = styled(Button)`
  display: block;
  cursor: pointer;
  font-size: 1.6rem;

  @media screen and (max-width: 968px) {
    padding: 0.6rem;
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

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.main};
  font-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;
`

export const Card = styled.div`
  padding: 1.6rem;
  border-radius: 0.6rem;
  box-shadow: 0px 2px 3px rgb(10 10 10 / 10%),
    0px 0px 0px 1px rgb(10 10 10 / 10%);
`

export const ContentButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  button {
    font-size: 1.7rem;
  }
`
