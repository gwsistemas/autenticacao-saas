import { rgba } from 'polished'
import styled, { css } from 'styled-components'

import { ColumnProps, IframeProps, ListItemProps } from './types'

export const Page = styled.div`
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

export const Column = styled.div<ColumnProps>`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-shrink: 1;
  padding: 1.2rem;
  flex-direction: column;

  ${({ hideMobile }) =>
    hideMobile &&
    css`
      @media screen and (max-width: 968px) {
        display: none;
      }
    `}
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  justify-content: center;
`

export const Iframe = styled.object<IframeProps>`
  width: 100%;
  height: ${({ height }) => height || '100%'};
`

export const Form = styled.form`
  padding: 0rem 7.5rem 2rem 7.5rem;

  #content-buttons {
    margin-top: 2.5rem;
    margin-bottom: 0rem;
  }

  @media screen and (max-width: 968px) {
    padding: 0rem;
  }
`

export const Image = styled.img`
  max-width: 200px;
  margin: 0px auto;
  margin-top: 1rem;
  margin-bottom: 1.6rem;
  object-fit: contain;
`

export const Divider = styled.div`
  width: 2px;
  border: 0rem;
  height: 500px;
  background-image: linear-gradient(
    to top,
    ${({ theme }) => rgba(theme.colors.primary.main, 0.1)},
    ${({ theme }) => theme.colors.primary.main},
    ${({ theme }) => rgba(theme.colors.primary.main, 0.1)}
  );

  @media screen and (max-width: 968px) {
    display: none;
  }
`

export const FormStatus = styled.div`
  display: block;
  font-size: 1.3rem;
  margin-top: 0.2rem;
  color: ${({ theme }): string => theme.colors.error.main};
`

export const ListItem = styled.div<ListItemProps>`
  width: 100%;
  height: 45px;
  display: flex;
  cursor: pointer;
  padding: 1.2rem;
  margin-bottom: 5px;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  transition-duration: 0.3s;
  justify-content: ${({ justifyContent }): string =>
    justifyContent || 'flex-start'};
  transition-property: transform;
  border: 1px solid ${({ theme }) => theme.colors.grey[400]};

  img {
    width: 75px;
    margin: 0px;
    height: 20px;
  }

  p {
    margin: 0px;
    font-size: 1.3rem;
  }

  i {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.grey[700]};
  }

  &:hover {
    transform: scale(1.1);

    i {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`
