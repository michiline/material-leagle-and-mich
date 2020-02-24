import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useSlide } from '../../../hooks'
import { arrow, getSlideshowImages } from '../../../images'
import { shadow, padding } from '../../../style'
import * as G from '../../general'

const Slideshow = () => {
  const images = getSlideshowImages()
  const [activeId, setActiveId] = useSlide(images.length)
  return (
    <Container>
      <Text>
        <H1>Little Eagle & Mich</H1>
        <H2>Dobrodošli na našu putopisnu stranicu!</H2>
      </Text>
      {renderImages({ images, activeId})}
      <GreyContainer />
      <ScrollDown />
    </Container>
  )
}

      // <PreviousArrow img={arrow.previous} onClick={e => setActiveId((activeId - 1 + imagesCount) % imagesCount)}/>
      // <NextArrow img={arrow.next} onClick={e => setActiveId((activeId + 1) % imagesCount)} />
const Container = styled.div`
  width: 100%;
  height: auto;
  max-height: 100vh;
  max-width: 100%;
  overflow: hidden;
  display: grid;
  gird-template-columns: 1fr 100% 1fr;
  grid-template-rows: 1fr min-content 1fr;
  align-items: center;
  box-shadow: ${shadow.dp1};
  position: relative;
`

const GreyContainer = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 4;
  background-color: #24272E;
  opacity: 0.4;
  z-index: 1;
  height: 100%;
`

const Text = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  z-index: 2;
  opacity: 1;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  text-align: center;
`

const H1 = styled(G.H1)`
  font-weight: 700 !important;
  font-family: 'Caveat Brush';
  width: max-content;
`

const H2 = styled(G.H2)`
  color: white;
  font-family: 'Amatic SC';
  width: max-content;
  margin-top: ${padding.medium};
`

const H3 = styled(G.H4)`
  color: white;
  font-family: 'Amatic SC';
`

const Arrow = styled.div`
  height: calc(3rem + 3vw);
  width: calc(3rem + 3vw);
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.img.src});
  opacity: 0.3;
  z-index: 2;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:active {
    transform: translateY(2px);
  }
`

const PreviousArrow = styled(Arrow)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  justify-self: start;
`

const NextArrow = styled(Arrow)`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  justify-self: end;
`

const I = styled.i`
  margin-top: ${padding.small};
  border: solid white;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 12px;
  transform: rotate(45deg);
`

const IWrap = styled.div`
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: ${G.bounce};
  animation-timing-function: ease;
`

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  grid-column: 1 / 4;
  grid-row: 1 / 4;
  object-fit: cover;
  width: 100%;
  transition: opacity 1.5s ease-in;
  opacity: ${props => props.activeId === props.img.id ? 1 : 0};
`

const bounce = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-1vw, 1vw);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
`

const ScrollDown = styled.span`
  position: absolute;
  bottom: 3vw;
  left: calc(50% - 7.5px - 1vw);
  width: calc(15px + 2vw);
  height: calc(15px + 2vw);
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(-45deg);
  animation: ${bounce} 2s infinite;
  box-sizing: border-box;
  opacity: 1;
  z-index: 2;
`

const renderImages = ({ images, activeId }) => images.map(
  (image, index) => {
    return <Img img={image} activeId={activeId} key={index}/>
  }
)

export default Slideshow
