import React, { useRef } from 'react'
import styled from 'styled-components'
import { padding, shadow } from '../../style'
import { RippleComponentLink } from '../../hooks'
import * as G from '../general'
import { facebook, instagram, github } from '../../images'

const Footer = () => {
  const facebookIconRef = useRef()
  const instagramIconRef = useRef()
  const githubIconRef = useRef()
  return (
    <Container>
      <IconContainer>
        <RippleComponentLink Component={FacebookIcon} img={facebook} color={'#FFFFFF'} componentRef={facebookIconRef} url={'https://www.facebook.com/littleeaglephoto'}/>
        <RippleComponentLink Component={InstagramIcon} img={instagram} color={'#FFFFFF'} componentRef={instagramIconRef} url={'https://www.instagram.com/littleeaglephoto'}/>
        <RippleComponentLink Component={GithubIcon} img={github} color={'#FFFFFF'} componentRef={githubIconRef} url={'https://github.com/equidistant/material-leagle-and-mich'}/>
      </IconContainer>
      <Title>© 2019 Little Eagle & Mich </Title>
    </Container>
  )
}

const Container = styled(G.FlexColumnCenterContainer)`
  background: #1F2126;
  padding: ${padding.small};
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${padding.small};
`

const Title = styled(G.Subtitle2)`
  padding: ${padding.small};
  color: white;
  font-family: 'Montserrat';
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
  margin-right: -3px;
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

const GithubIcon = styled(G.Icon)`
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
