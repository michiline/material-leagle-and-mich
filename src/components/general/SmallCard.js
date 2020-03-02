import React, { useRef, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'
import { useRipples } from '../../hooks'
import { padding, shadow } from '../../style'
import { share } from '../../images'
import { H6, Subtitle2, Body2, ButtonTransparent } from './text'
import { Icon } from './images'

const Card = ({ history, img, title, subtitle, description, url }) => {
  const cardRef = useRef()
  const [ripples, color] = useRipples({ componentRef: cardRef, color: '#8B4608', history, url })
  return (
    <Container ref={cardRef}>
      <Img img={img}/>
        <Title>{title}</Title>
        <Actions>
          <Button>Pročitaj više</Button>
        </Actions>
      {ripples.length > 0 && ripples.map((ripple, index) => <Ripple {...ripple} color={color} key={index}/>)}
    </Container>
  )
}

// {ripples.length > 0 && ripples.map((ripple, index) => <Ripple {...ripple} color={color} key={index}/>)}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  box-shadow: ${shadow.dp1};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 100%;
  overflow: hidden;
  &:hover {
    box-shadow: ${shadow.dp8};
  }
`


const Title = styled.p`
  padding: ${padding.small};
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.025rem;
  @media only screen and (min-width: 800px) {
    font-size: 24px;
  }
  text-align: center;
  height: min-content;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${padding.small};
`

const Button = styled(ButtonTransparent)`
  height: 40px;
  padding: ${padding.small};
  overflow: hidden;
  font-family: 'Montserrat';
`

const ShareIcon = styled(Icon)`
  border-radius: 50%;
  &:hover {
    background-color: #F5F5F5;
  }
  &:focus {
    outline: none;
  }
  position: relative;
  overflow: hidden;
`
const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const to = async ({ history, url, e }) => {
  await sleep(250)
  history.push(url)
  // window.scrollTo({ top: 0, behavior: 'smooth' })
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const ripple = keyframes`
  to {
    opacity: 0.0;
    transform: scale(3);
  }
`

const Ripple = styled.span`
  position: absolute;
  transform: scale(0.7);
  opacity: 0.75;
  background-color: ${props => `${props.color}7D`};
  border-radius: 100%;
  animation: ${ripple} 600ms;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

export default withRouter(Card)
