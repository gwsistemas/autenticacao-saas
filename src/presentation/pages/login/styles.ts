import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  margin: .75rem;
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
  background-image: linear-gradient(to top, rgba(0, 55, 156, 0.1), rgba(0, 55, 156, 1), rgba(0, 55, 156, 0.1));

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
