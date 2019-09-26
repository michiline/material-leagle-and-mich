import React, { useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router-dom'
import { RippleComponent, useScrolledDirection } from '../../hooks'
import * as G from '../general'
import { padding, shadow } from '../../style'

const Header = ({ history }) => {
  const menuRef = useRef()
  const [scrollY, scrolled] = useScrolledDirection()
  const [toggled, setToggled] = useState(false)
  return (
    <>
      <Container toggled={toggled} scrollY={scrollY} scrolled={scrolled}>
        <RippleComponent color={'#8B4608'} Component={MenuIcon} img={`${process.env.PUBLIC_URL}/img/menu-24px.svg`} componentRef={menuRef} onClick={e => setToggled(!toggled)}/>
        <Title>Little Eagle & Mich</Title>
        <Logo onClick={ e => to({ history, url: '/', setToggled })}img={`${process.env.PUBLIC_URL}/img/logo-header-small.png`}/>
      </Container>
      <Background history={history} show={toggled} setToggled={setToggled}/>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all .2s cubic-bezier(.4,0,.2,.1);
  position: fixed;
  padding: ${padding.small};
  top: 0;
  height: 6rem;
  box-shadow: ${shadow.dp1};
  z-index: 5;
  ${props => props.scrollY > 0 && css`
    box-shadow: ${shadow.dp6};
  `}
  ${props => props.scrolled && !props.toggled && css`
    top: -6rem;
  `}
  ${props => props.toggled && css `
    background-color: #24272E;
    color: white;
  `}
`

const Title = styled(G.H6)`
  font-family: 'Bubbler';
  letter-spacing: 0.025rem;
`

const MenuIcon = styled(G.Icon)`
  border-radius: 50%;
  &:hover {
    background-color: #8B46081E;
  }
  &:focus {
    outline: none;
  }
  position: relative;
  overflow: hidden;
`

const Logo = styled(G.Logo)`
  &:focus {
    outline: none;
  }
  position: relative;
  overflow: hidden;
`

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
    opacity: 0.9;
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

const Link = styled.div`
  width: max-content;
  color: white;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  margin-top: 2.5rem;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px) !important;
  }
`

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   color: red;
// `

const Background = ({ history, show, setToggled }) =>
  <BackgroundContainer show={show}>
    <Center>
      <Link onClick={e => to({ history, url: '/', setToggled})}>Home</Link>
      <Link onClick={e => to({ history, url: '/blogs', setToggled})}>Travel Blogs</Link>
      <Link>Travel Gallery</Link>
      <Link>Ana's portfolio</Link>
      <Link>About us</Link>
    </Center>
  </BackgroundContainer>

const to = ({ history, url, setToggled}) => {
  history.push(url)
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setToggled(false)
}

export default withRouter(Header)
