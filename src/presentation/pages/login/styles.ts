import styled from 'styled-components'

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
    ${({ theme }) => theme.colors.smalt[10]},
    ${({ theme }) => theme.colors.smalt[100]},
    ${({ theme }) => theme.colors.smalt[10]}
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

export const Link = styled.a`
  display: block;
  cursor: pointer;
  text-align: center;
  color: ${({ theme }) => theme.colors.smalt.A10};

  &:hover {
    color: ${({ theme }) => theme.colors.grey[900]};
  }
`

export const Icones = styled.img`
  width: auto;
  height: 28px;
  display: block;
  margin-top: 2rem;
  margin: 0rem auto;
`
