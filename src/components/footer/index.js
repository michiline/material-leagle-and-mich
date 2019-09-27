import React, { useRef } from 'react'
import styled from 'styled-components'
import { padding, shadow } from '../../style'
import { RippleComponent } from '../../hooks'
import * as G from '../general'
import { facebook, instagram } from '../../images'

const Footer = () => {
  const facebookIconRef = useRef()
  const instagramIconRef = useRef()
  return (
    <Container>
      <IconContainer>
        <RippleComponent Component={FacebookIcon} img={facebook} color={'#FFFFFF'} componentRef={facebookIconRef}/>
        <RippleComponent Component={InstagramIcon} img={instagram} color={'#FFFFFF'} componentRef={instagramIconRef}/>
      </IconContainer>
      <Title>© 2019 Little Eagle & Mich </Title>
    </Container>
  )
}

const Container = styled(G.flexColumnCenterContainer)`
  background: #1F2126;
  padding: ${padding.small};
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${padding.smallest};
`

const Title = styled(G.Subtitle1)`
  padding: ${padding.smallest};
  color: white;
`

const FacebookIcon = styled(G.Icon)`
  border-radius: 50%;
  &:hover {
    background-color: #FFFFFF19;
  }
  &:focus {
    outline: none;
  }
  position: relative;
  overflow: hidden;
`

const InstagramIcon = styled(G.Icon)`
  border-radius: 50%;
  &:hover {
    background-color: #FFFFFF19;
  }
  &:focus {
    outline: none;
  }
  position: relative;
  overflow: hidden;
`


export default Footer
