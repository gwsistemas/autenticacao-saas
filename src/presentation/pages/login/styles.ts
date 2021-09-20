import { rgba } from 'polished'
import styled from 'styled-components'
import { Button } from '@/presentation/components'

export const Page = styled.div`
  display: flex;
  margin: 0.75rem;
  flex-wrap: wrap;
  min-height: 100vh;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 0rem 1.6rem;
`

export const IntroObject = styled.object`
  width: 100%;
  height: 525px;
`

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

export const Logo = styled.img`
  width: 260px;
  margin: 0px auto;
  margin-top: 1rem;
  margin-bottom: 1.6rem;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  justify-content: center;
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
