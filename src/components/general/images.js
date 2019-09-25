import styled from 'styled-components'
import { padding } from '../../style'

export const Icon = styled.button`
  background: url(${props => props.img}) center no-repeat;
  width: 48px;
  height: 48px;
  padding: ${padding.small};
  object-fit: cover;
  border: none;
  cursor: pointer;
`

export const Logo = styled.button`
  background: url(${props => props.img}) center no-repeat;
  width: 48px;
  height: 48px;
  padding: ${padding.smallest};
  object-fit: cover;
  border: none;
  cursor: pointer;
`
