import React from 'react'
import styled from 'styled-components'
import { useSlide } from '../../../hooks'
import { arrow, slideshow } from '../../../images'
import { shadow, padding } from '../../../style'
import * as G from '../../general'

const Slideshow = ({ slideshowRef }) => {
  const imagesCount = slideshow.length
  const [activeId, setActiveId] = useSlide(imagesCount)
  return (
    <Container>
      <PreviousArrow img={arrow.previous} onClick={e => setActiveId((activeId - 1 + imagesCount) % imagesCount)}/>
      <Text>
        <H1>Little Eagle & Mich</H1>
        <H2>Dobrodošli na našu putopisnu stranicu!</H2>
        <H3>(Mjesto gdje dijelimo iskustva s putovanja u obliku teksta, slike i koda)</H3>
        <IWrap>
          <I/>
        </IWrap>
      </Text>

      <Img img={slideshow[0]} activeId={activeId}/>
      <Img img={slideshow[1]} activeId={activeId}/>
      <Img img={slideshow[2]} activeId={activeId}/>
      <Img img={slideshow[3]} activeId={activeId}/>
      <Img img={slideshow[4]} activeId={activeId}/>
      <NextArrow img={arrow.next} onClick={e => setActiveId((activeId + 1) % imagesCount)} />
      <GreyContainer />
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
  align-items: center;
  box-shadow: ${shadow.dp1};
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
  color: white;
  min-width: max-content;
`

const H1 = styled(G.H1)`
  padding: ${padding.medium};
  font-weight: 700 !important;
  font-family: 'Mansalva';
`

const H2 = styled(G.H3)`
  color: white;
  font-family: 'Amatic SC';
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

export default Slideshow
