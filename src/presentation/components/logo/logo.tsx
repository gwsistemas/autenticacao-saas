import React from 'react'

import { Image } from './styles'
import { LogoProps } from './types'

const Logo: React.FC<LogoProps> = ({ alt, url }: LogoProps) => (
  <Image src={url} alt={alt} />
)

export default Logo
