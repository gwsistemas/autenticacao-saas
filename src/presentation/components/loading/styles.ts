import styled, { keyframes } from 'styled-components'

const point1 = keyframes`
  to {
    transform: translateY(-10px);
  }
  from {
    transform: translateY(0px);
  }
`
const point2 = keyframes`
  to {
    transform: translateY(-10px);
  }
  from {
    transform: translateY(0px);
  }
`
const point3 = keyframes`
  to {
    transform: translateY(-10px);
  }
  from {
    transform: translateY(0px);
  }
`

export const LoadingBase = styled.div`
  > span {
    display: inline-block;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    background-color: #444;
    margin-right: 0.6rem;
    &:last-child {
      margin-right: 0;
    }

    &:nth-child(1) {
      animation: ${point1} 0.5s 0.2s alternate infinite;
    }

    &:nth-child(2) {
      animation: ${point2} 0.5s 0.6s alternate infinite;
    }

    &:nth-child(3) {
      animation: ${point3} 0.5s 0.8s alternate infinite;
    }
  }
`
