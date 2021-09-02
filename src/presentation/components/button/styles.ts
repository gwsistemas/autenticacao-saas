import styled from 'styled-components'

export const ButtonBase = styled.button`
  font-size: 21px;
  cursor: pointer;
  min-height: 47px;
  padding: 6px 23px;
  border-radius: 23px;
  color: ${({ theme }) => theme.colors.grey[0]};
  background-color: ${({ theme }) => theme.colors.smalt.A100};
`
