import React from 'react'
import { LoadingBase, LoadingWrap } from './styles'
import { Props } from './types'

const Loading: React.FC<Props> = ({ full }) => {
  return (
    <LoadingWrap full={full}>
      <LoadingBase>
        <span></span>
        <span></span>
        <span></span>
      </LoadingBase>
    </LoadingWrap>
  )
}

export default Loading
