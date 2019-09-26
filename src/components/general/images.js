import styled, { css } from 'styled-components'
import { padding } from '../../style'

const IconBase = styled.button`
  background: url(${props => props.img.src}) center no-repeat;
  width: 48px;
  height: 48px;
  padding: ${padding.small};
  object-fit: cover;
  border: none;
  cursor: pointer;
`

export const ToggleIcon = styled(IconBase)`
  ${props => !props.toggled && css `
    background: url(${props.img.primary.src}) center no-repeat;
  `}
  ${props => props.toggled && css `
    background: url(${props.img.secondary.src}) center no-repeat;
  `}
`

export const Icon = styled(IconBase)`
  background: url(${props => props.img.src}) center no-repeat;
`

export const Logo = styled.button`
  background: url(${props => props.img.src}) center no-repeat;
  width: 48px;
  height: 48px;
  padding: ${padding.smallest};
  object-fit: cover;
  border: none;
  cursor: pointer;
`
  //
  // background: url(${props => props.img.src}) center no-repeat;
