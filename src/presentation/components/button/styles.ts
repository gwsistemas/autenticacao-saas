import styled from 'styled-components'

export const ButtonBase = styled.button`
  cursor: pointer;
  min-height: 47px;
  font-size: 2.1rem;
  border-radius: 2.3rem;
  padding: 0.6rem 2.3rem;
  color: ${({ theme }) => theme.colors.grey[0]};
  background-color: ${({ theme }) => theme.colors.smalt.A100};
`
