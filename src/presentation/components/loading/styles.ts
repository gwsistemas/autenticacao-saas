import styled, { keyframes, css } from 'styled-components'
import { Props } from './types'

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

const fullLoading = css`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingWrap = styled.div<Props>`
  ${({ full }) => full && fullLoading};
`

export const LoadingBase = styled.div`
  > span {
    display: inline-block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.primary.main};
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
