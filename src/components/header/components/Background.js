import React from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router-dom'
import * as G from '../../general'
import { shadow, padding } from '../../../style'

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0; right: 0; left: 0; bottom: 0;
  width: 0;
  height: 100vh;
  background-color: #24272E;
  z-index: 3;
  transition: all 0.3s linear;
  opacity: 0;
  visibility: hidden;
  ${props => props.show && css`
    opacity: 0.97;
    width: 100%;
    visibility: visible !important;
  `}
`

    // box-shadow: ${shadow.dp8};

const Center = styled.div`
  display: flex;
  height: min-content;
  flex-direction: column;
  position: absolute;
  top: calc(50% + 1rem);
  left: 50%;
  transform: translate(-50%,-50%);
  align-items: center;
  justify-content: center;
`

const Link = styled.p`
  font-size: calc(1.5rem + 3vh);
  letter-spacing: 0;
  line-height: 1.2;
  padding: ${padding.smallest};
  font-family: 'Amatic SC';
  font-weight: 700;
  width: max-content;
  color: white;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px) !important;
  }
`

const Background = ({ history, show, setToggled }) =>
  <BackgroundContainer show={show}>
    <Center>
      <Link onClick={e => to({ history, url: '/', setToggled})}>Početna</Link>
      <Link onClick={e => to({ history, url: '/blogs', setToggled})}>Putopisi</Link>
      <Link onClick={e => to({ history, url: '/gallery', setToggled})}>Galerija</Link>
      <Link>Anin portfolio</Link>
      <Link onClick={e => to({ history, url: '/about', setToggled})}>O Nama</Link>
    </Center>
  </BackgroundContainer>

const to = ({ history, url, setToggled}) => {
  history.push(url)
  // window.scrollTo({ top: 0, behavior: 'smooth' })
  setToggled(false)
}

export default withRouter(Background)
