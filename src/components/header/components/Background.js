import React from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router-dom'
import * as G from '../../general'

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
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

const Center = styled.div`
  display: flex;
  height: min-content;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  align-items: center;
  justify-content: center;
`

const Link = styled(G.H4)`
  font-family: 'Amatic SC';
  font-weight: 700;
  width: max-content;
  color: white;
  text-align: center;
  text-transform: uppercase;
  margin-top: 2rem;
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
      <Link onClick={e => to({ history, url: '/', setToggled})}>Home</Link>
      <Link onClick={e => to({ history, url: '/blogs', setToggled})}>Travel Blogs</Link>
      <Link onClick={e => to({ history, url: '/gallery', setToggled})}>Travel Gallery</Link>
      <Link>Ana's portfolio</Link>
      <Link>About us</Link>
    </Center>
  </BackgroundContainer>

const to = ({ history, url, setToggled}) => {
  history.push(url)
  // window.scrollTo({ top: 0, behavior: 'smooth' })
  setToggled(false)
}

export default withRouter(Background)
