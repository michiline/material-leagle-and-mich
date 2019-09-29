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
  const [scrollY, scrolled] = useScrolledDirection({ boundary: 15 })
  const [toggled, setToggled] = useState(false)
  return (
    <>
      <Container toggled={toggled} scrollY={scrollY} scrolled={scrolled}>
        <Logo onClick={ e => to({ setToggled })} img={logoSmall}/>
        <Title onClick={ e => to({ history, url: '/', setToggled })}>Little Eagle & Mich</Title>
        <RippleComponent toggled={toggled} color={'#8B4608'} Component={MenuIcon} img={menu} componentRef={menuRef} onClick={e => setToggled(!toggled)}/>
      </Container>
      <Background show={toggled} setToggled={setToggled}/>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  transition: all .2s cubic-bezier(.4,0,.2,.1);
  position: fixed;
  padding: ${padding.small};
  top: 0;
  height: 7rem;
  box-shadow: ${shadow.dp1};
  z-index: 5;
  ${props => props.scrollY > 0 && css`
    box-shadow: ${shadow.dp6};
  `}
  ${props => props.scrolled && !props.toggled && css`
    top: -7rem;
  `}
  ${props => props.toggled && css `
    background-color: #24272E;
    color: white;
  `}
`

const Title = styled(G.H4)`
  justify-self: center;
  min-width: max-content;
  font-family: 'Amatic SC';
  text-align: center;
  &:active {
    transform: translateY(2px);
  }
  cursor: pointer;
  user-select: none;
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
  align-self: center;
  justify-self: end;
  width: 48px;
  height: 48px;
  &:active {
    transform: translateY(2px);
  }
`

const Logo = styled(G.Logo)`
  &:focus {
    outline: none;
  }
  position: relative;
  overflow: hidden;
  align-self: center;
  &:active {
    transform: translateY(2px);
  }
`

const to = ({ history, url, setToggled}) => {
  if (history) {
    history.push(url)
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setToggled(false)
}

export default withRouter(Header)
