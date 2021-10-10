import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin: 0.75rem;
  flex-wrap: wrap;
  min-height: 100vh;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 0rem 1.6rem;

  @media screen and (max-width: 968px) {
    margin: 0px;
  }
`
