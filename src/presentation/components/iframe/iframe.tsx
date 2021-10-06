import React from 'react'

import { IframeProps } from './types'
import { IframeElement } from './styles'

const Iframe: React.FC<IframeProps> = ({ data }: IframeProps) => {
  return <IframeElement data={data} />
}

export default Iframe
