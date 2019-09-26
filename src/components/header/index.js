import React, { useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router-dom'
import { RippleComponent, useScrolledDirection } from '../../hooks'
import { Background } from './components'
import * as G from '../general'
import { padding, shadow } from '../../style'
import { menu, logoSmall } from '../../images'

const Header = ({ history }) => {
  const menuRef = useRef()
  const [scrollY, scrolled] = useScrolledDirection()
  const [toggled, setToggled] = useState(false)
  return (
    <>
      <Container toggled={toggled} scrollY={scrollY} scrolled={scrolled}>
        <RippleComponent toggled={toggled} color={'#8B4608'} Component={MenuIcon} img={menu} componentRef={menuRef} onClick={e => setToggled(!toggled)}/>
        <Title>Little Eagle & Mich</Title>
        <Logo onClick={ e => to({ history, url: '/', setToggled })}img={logoSmall}/>
      </Container>
      <Background show={toggled} setToggled={setToggled}/>
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

const MenuIcon = styled(G.ToggleIcon)`
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

const to = ({ history, url, setToggled}) => {
  history.push(url)
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setToggled(false)
}

export default withRouter(Header)
