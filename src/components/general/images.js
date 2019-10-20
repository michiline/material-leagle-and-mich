import React from 'react'
import styled, { css } from 'styled-components'
import { padding, shadow } from '../../style'
import { H1, H3 } from './text'

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

export const CoverImgCenterText = ({ h1Text, h2Text, img}) =>
  <CoverImgContainer>
    <Text>
      <CH1>{h1Text}</CH1>
      <CH2>{h2Text}</CH2>
    </Text>
    <Img img={img} />
    <GreyContainer />
  </CoverImgContainer>


const CoverImgContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 100vh;
  max-width: 100%;
  overflow: hidden;
  display: grid;
  gird-template-columns: 1fr 100% 1fr;
  grid-template-rows: 1fr min-content 1fr;
  align-items: center;
  box-shadow: ${shadow.dp1};
`

const Text = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  z-index: 2;
  opacity: 1;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
`

const CH1 = styled(H1)`
  padding: ${padding.medium};
  font-weight: 700 !important;
  font-family: 'Mansalva';
  width: max-content;
`

const CH2 = styled(H3)`
  color: white;
  font-family: 'Amatic SC';
  width: max-content;
`

const GreyContainer = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 4;
  background-color: #24272E;
  opacity: 0.4;
  z-index: 1;
  height: 100%;
`

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  grid-column: 1 / 4;
  grid-row: 1 / 4;
  object-fit: cover;
  width: 100%;
`
