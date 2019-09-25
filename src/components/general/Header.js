import React, { useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router-dom'
import { RippleComponent, useScrolledDirection } from '../../hooks'
import * as G from '../general'
import { padding, shadow } from '../../style'

const Header = ({ history }) => {
  const menuRef = useRef()
  const [scrolled] = useScrolledDirection()
  return (
    <Container scrolled={scrolled}>
      <RippleComponent color={'#8B4608'} Component={MenuIcon} img={`${process.env.PUBLIC_URL}/img/menu-24px.svg`} componentRef={menuRef}/>
      <Title>Little Eagle & Mich</Title>
      <Logo onClick={ e => window.scrollTo({ top: 0, behavior: 'smooth' })}img={`${process.env.PUBLIC_URL}/img/logo-header-small.png`}/>
    </Container>
  )
}

        // <Title scrolled={scrolled}>Leagle & Mich</Title>
        //
        //
const Container = styled.div`
  width: 100%;
  background-color: #FFFFFFC8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: top .2s cubic-bezier(.4,0,.2,.1);
  position: fixed;
  padding: ${padding.small};
  top: 0;
  height: 6rem;
  ${props => props.scrolled && css`
    box-shadow: ${shadow.dp1};
    z-index: 4;
    top: -6rem;
  `}
`

// const LeftContainer = styled.div`
//   padding: ${padding.small};
//   display: flex;
//   flex-basis: auto;
//   flex-grow: 1;
//   flex-shrink: 1;
//   align-items: center;
//   min-width: 0;
//   ${props => props.scrolled && css`
//     padding-right: 0;
//   `}
// `

const Title = styled(G.H6)`
  font-family: 'Bubbler';
  letter-spacing: 0.025rem;
`

// opacity: 1;
// transition: opacity .2s cubic-bezier(.4,0,.2,1) 0.2s;
// ${props => props.scrolled && css`
//   opacity: 0;
//   display: none;
// `}

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

export default withRouter(Header)
