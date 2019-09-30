import React, { useRef, useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { RippleComponent, useClicked } from '../../hooks'
import { padding, shadow } from '../../style'
import { share } from '../../images'
import { H6, Subtitle2, Body2, ButtonTransparent } from './text'
import { Icon } from './images'

const Card = ({ img, title, subtitle, description }) => {
  const cardRef = useRef()
  const readButtonRef = useRef()
  const shareIconRef = useRef()
  const [clicked] = useClicked({ yesRef: cardRef, noRefs: [readButtonRef, shareIconRef] })
  return (
    <Container ref={cardRef} clicked={clicked}>
      <Img img={img}/>
      <PrimaryTitle>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </PrimaryTitle>
      <Secondary collapse={!clicked}>
        <SupportingText>
          <Description>{description}</Description>
        </SupportingText>
        <Actions>
          <RippleComponent Component={Button} value={'Read More'} color={'#8B4608'} componentRef={readButtonRef}/>
          <RippleComponent Component={ShareIcon} img={share} color={'#8B4608'} componentRef={shareIconRef}/>
        </Actions>
      </Secondary>
    </Container>
  )
}

const Container = styled.div`
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
  user-select: none;
`

const PrimaryTitle = styled.div`
  padding: ${padding.medium};
`

const Secondary = styled.div`
  height: auto;
  max-height: 600px;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  @media only screen and (max-width: 750px) {
    ${props => props.collapse && css`
      max-height: 0;
    `}
  }
`

const Title = styled(H6)`
  font-family: 'Quattrocento Sans';
`

const Subtitle = styled(Subtitle2)`
  color: rgba(0, 0, 0, 0.54);
  font-weight: 500;
  font-family: 'Quattrocento Sans';
`

const SupportingText = styled.div`
  padding-left: ${padding.medium};
  padding-right: ${padding.medium};
`

const Description = styled(Body2)`
  color: rgba(0, 0, 0, 0.54);
  font-family: 'Quattrocento Sans';
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
  font-family: 'Quattrocento Sans';
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

export default Card
