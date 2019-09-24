import React, { useRef, useState, useEffect } from 'react'
import _ from 'lodash'
import styled, { css, keyframes } from 'styled-components'
import { padding, shadow } from '../style'
import * as G from './general'

const Home = () => {
  return (
    <Grid>
      <Card>
        <Img img={{ src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`}}/>
        <PrimaryTitle>
          <Title>The Emerald River</Title>
          <Subtitle>Soča, Slovenia</Subtitle>
        </PrimaryTitle>
        <SupportingText>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Description>
        </SupportingText>
        <Actions>
          <ElementRipple Element={Button} value={'Read'} />
          <ShareIcon img={{ src: `${process.env.PUBLIC_URL}/img/share-24px.svg`}} />
        </Actions>
      </Card>
      <Card>
        <Img img={{ src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`}}/>
      </Card>
      <Card>
        <Img img={{ src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`}}/>
      </Card>
      <Card>
        <Img img={{ src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`}}/>
      </Card>
      <Card>
        <Img img={{ src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`}}/>
      </Card>
      <Card>
        <Img img={{ src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`}}/>
      </Card>

    </Grid>
  )
}

const Grid = styled.div`
  padding: ${padding.small};
  display: grid;
  grid-template-columns: repeat(auto-fit, 100%);
  grid-gap: 1rem;
  justify-content: start;
  align-items: center;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  box-shadow: ${shadow.dp1};
  border-radius: 4px;
`

// &:hover {
//   box-shadow: ${shadow.dp0} !important;
// }

const PrimaryTitle = styled.div`
  padding: ${padding.medium};
`

const Title = styled(G.H6)`

`

const Subtitle = styled(G.Subtitle2)`
  color: rgba(0, 0, 0, 0.54);
  font-weight: 500;
`

const SupportingText = styled.div`
  padding-left: ${padding.medium};
  padding-right: ${padding.medium};
`

const Description = styled(G.Body2)`
  color: rgba(0, 0, 0, 0.54);
`

const Tags = styled(G.Body2)`

`

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${padding.small};
`

const Button = styled(G.ButtonTransparent)`
  padding-left: ${padding.small};
  padding-right: ${padding.small};
  height: calc(3.4rem + ${padding.small});
  position: relative;
  overflow: hidden;
`

const ShareIcon = styled(G.Icon)`
  border-radius: 50%;
  &:hover {
    background-color: #F5F5F5;
  }
`

const ElementRipple = ({ Element, value }) => {
  const buttonRef = useRef()
  const [ripples, setRipples] = useState([])
  useEffect(() => {
    const showRipple = (e) => {
      if (buttonRef.current.contains(e.target)) {
        const width = buttonRef.current.offsetWidth
        const height = buttonRef.current.offsetHeight
        const pos = buttonRef.current.getBoundingClientRect()
        const x = e.pageX - pos.left - (width / 2)
        const y = e.pageY - pos.top - (height / 2) - window.scrollY
        if (ripples.length > 0) {
          const newRipples = [...ripples, { x, y, width, height}]
          setRipples(newRipples)
        }
        else {
          setRipples([{ x, y, width, height}])
        }
      }
    }
    const cleanUp = _.debounce(() => {
      if (ripples.length > 0) {
        const newRipples = ripples.shift()
        setRipples(newRipples)
      }
    }, 1000)
    window.addEventListener('mousedown', showRipple)
    window.addEventListener('mouseup', cleanUp)
    return () => {
      window.removeEventListener('mousedown', showRipple)
      window.removeEventListener('mouseup', cleanUp)
    }
  })
  return (
    <Element ref={buttonRef}>{value}
      {ripples.length > 0 && ripples.map((ripple, index) => <Ripple {...ripple} key={index}/>)}
    </Element>
  )
}



const ripple = keyframes`
  to {
    opacity: 0;
    transform: scale(2);
  }
`

const Ripple = styled.span`
  position: absolute;
  transform: scale(0);
  opacity: 0.75;
  background-color: #8B46087D;
  border-radius: 100%;
  animation: ${ripple} 400ms;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`



export default Home
