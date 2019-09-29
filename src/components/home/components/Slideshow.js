import React from 'react'
import styled from 'styled-components'
import { useSlide } from '../../../hooks'
import { arrow, slideshow } from '../../../images'
import { shadow } from '../../../style'

const Slideshow = ({ slideshowRef }) => {
  const imagesCount = 5
  const [activeId, setActiveId] = useSlide(imagesCount)
  return (
    <Container>
      <PreviousArrow img={arrow.previous} onClick={e => setActiveId((activeId - 1 + imagesCount) % imagesCount)}/>
      <Img img={slideshow[0]} activeId={activeId}/>
      <Img img={slideshow[1]} activeId={activeId}/>
      <Img img={slideshow[2]} activeId={activeId}/>
      <Img img={slideshow[3]} activeId={activeId}/>
      <Img img={slideshow[4]} activeId={activeId}/>
      <NextArrow img={arrow.next} onClick={e => setActiveId((activeId + 1) % imagesCount)} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;
  max-height: 100vh;
  max-width: 100%;
  overflow: hidden;
  display: grid;
  gird-template-columns: 1fr 100% 1fr;
  grid-template-rows: 1fr min-content 1fr;
  box-shadow: ${shadow.dp1};
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

export default Slideshow
