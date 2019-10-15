import styled, { css } from 'styled-components'
import { padding } from '../../style'

const IconBase = styled.button`
  background: url(${props => props.img.src}) center no-repeat;
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
  width: 48px;
  height: 48px;
`

export const BigIcon = styled(IconBase)`
  background: url(${props => props.img.src}) center no-repeat;
  width: 60px;
  height: 60px;
`

export const Logo = styled.button`
  background: url(${props => props.img.src}) center no-repeat;
  width: 75px;
  height: 66px;
  object-fit: cover;
  border: none;
  cursor: pointer;
`

export const CoverImg = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  object-fit: cover;
  width: 100%;
  transition: opacity 1.5s ease-in;
`
