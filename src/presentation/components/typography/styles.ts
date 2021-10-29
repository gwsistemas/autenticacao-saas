import styled, { css } from 'styled-components'
import { Props } from './types'

const variantMapping = {
  h1: css`
    font-size: ${({ theme }): any =>
      (!isNaN(+theme.typography.h1.fontSize) &&
        `${theme.typography.h1.fontSize}px`) ||
      String(theme.typography.h1.fontSize)};
    font-weight: ${({ theme }): number => theme.typography.h1.fontWeight};
    line-height: ${({ theme }): number => theme.typography.h1.lineHeight};
  `,
  body: css`
    font-size: ${({ theme }): any =>
      (!isNaN(+theme.typography.body1.fontSize) &&
        `${theme.typography.body1.fontSize}px`) ||
      String(theme.typography.body1.fontSize)};
    font-weight: ${({ theme }): number => theme.typography.body1.fontWeight};
    line-height: ${({ theme }): number => theme.typography.body1.lineHeight};
  `
}

const typographyDefault = css`
  font-size: ${({ theme }): any =>
    (!isNaN(+theme.typography.fontSize) && `${theme.typography.fontSize}px`) ||
    String(theme.typography.fontSize)};
  font-weight: ${({ theme }): number => theme.typography.fontWeight};
  line-height: 1.3;
`

const typographyDefaultColors = {
  default: css`
    ${({ theme }): string => theme.colors.common.black};
  `,
  primaryText: css`
    ${({ theme }): string => theme.colors.primary.main};
  `,
  secondaryText: css`
    ${({ theme }): string => theme.colors.grey.A200};
  `
}

export const TypographyBase = styled.div<Props>`
  ${({ variant }): any => variantMapping[variant] || typographyDefault};
  color: ${({ color, theme }): any =>
    typographyDefaultColors[color] || theme.colors.common.black};
`
