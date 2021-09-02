import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  margin: 0.75rem;
  flex-wrap: wrap;
  padding: 0px 16px;
  min-height: 100vh;
  position: relative;
  flex-direction: row;
  align-items: center;
`

export const IntroObject = styled.object`
  width: 100%;
  height: 525px;
`

export const Divider = styled.div`
  width: 2px;
  border: 0px;
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
  margin-top: 10px;
  margin-bottom: 16px;
`

export const Row = styled.div`
  display: flex;
  margin-bottom: 12px;
  align-items: center;
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
  margin: 0px auto;
  margin-top: 20px;
`
