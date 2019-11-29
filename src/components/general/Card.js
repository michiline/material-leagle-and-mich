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
  const [ripples, color] = useRipples({ componentRef: cardRef, color: '#8B4608'})
  return (
    <Container ref={cardRef} onClick={ e => to({ history, url })}>
      <Img img={img}/>
      <PrimaryTitle>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </PrimaryTitle>
      <Secondary>
        <SupportingText>{description}</SupportingText>
      </Secondary>
      {ripples.length > 0 && ripples.map((ripple, index) => <Ripple {...ripple} color={color} key={index}/>)}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  box-shadow: ${shadow.dp1};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${props => props.clicked && css`
    box-shadow: ${shadow.dp8};
  `}
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 100%;
  overflow: hidden;
`

const PrimaryTitle = styled.div`
  padding: ${padding.medium};
`

const Secondary = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;
  transition: max-height 0.4s ease-in-out;
`

const Title = styled(H6)`
  font-family: 'Montserrat';
`

const Subtitle = styled(Subtitle2)`
  color: rgba(0, 0, 0, 0.54);
  font-weight: 500;
  font-family: 'Montserrat';
`

const SupportingText = styled(Body2)`
  color: rgba(0, 0, 0, 0.54);
  font-family: 'Montserrat';
  text-align: justify;
  padding-left: ${padding.medium};
  padding-right: ${padding.medium};
  padding-bottom: ${padding.medium}
  height: min-content;
`

const Tags = styled(Body2)`

`

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${padding.small};
`

const Button = styled(ButtonTransparent)`
  padding-left: ${padding.small};
  padding-right: ${padding.small};
  height: calc(3.4rem + ${padding.small});
  position: relative;
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

const to = async ({ history, url }) => {
  await sleep(200)
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
  transform: scale(0);
  opacity: 0.75;
  background-color: ${props => `${props.color}7D`};
  border-radius: 100%;
  animation: ${ripple} 500ms;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

export default withRouter(Card)
