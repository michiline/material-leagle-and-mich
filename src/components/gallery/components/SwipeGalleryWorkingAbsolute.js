import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router-dom'
import { CoverImgCenterText, ImageGrid } from '../../general'
import { galleryCover, galleryImages } from '../../../images'
import { galleryDescription } from '../../../content'
import { slide } from '../../general'

const SwipeGalleryMy = ({ match }) => {
  const images = galleryImages[match.params.galleryName]
  const refs = [useRef(), useRef(), useRef()]
  let [activeId, previous, next, dimensions, previousImage, nextImage] = useDimensions({ refs, imagesLength: images.length })
  return (
    <Container>
      <Gallery>
        <PreviousImg previous={previous} dimension={dimensions[0]} img={images[(activeId - 1 + images.length) % images.length]} ref={refs[0]}/>
        <Img previous={previous} next={next} dimension={dimensions[1]} img={images[activeId]} ref={refs[1]}/>
        <NextImg next={next} dimension={dimensions[2]} img={images[(activeId + 1) % images.length]} ref={refs[2]}/>
      </Gallery>
      <button onClick={e => previousImage()}>Previous</button>
      <button onClick={e => nextImage()}>Next</button>
    </Container>
  )
}

const useDimensions = ({ refs, imagesLength }) => {
  let [previous, setPrevious] = useState(false)
  let [next, setNext] = useState(false)
  let [activeId, setActiveId] = useState(0)
  let [dimensions, setDimensions] = useState([...Array(refs.length)].map(() => {}))
  const previousImage = async () => {
    setPrevious(true)
    await sleep(500)
    setActiveId((activeId - 1 + imagesLength) % imagesLength)
    setPrevious(false)
  }
  const nextImage = async () => {
    setNext(true)
    await sleep(500)
    setActiveId((activeId + 1) % imagesLength)
    setNext(false)
  }
  useEffect(() => {
    const resizeListener = (e) => {
      window.location.reload()
      setImageDimensions()
    }
    const setImageDimensions = () => {
      const boundingRects = refs.map(ref => ref.current.getBoundingClientRect())
      let newDimensions = [...dimensions]
      newDimensions[0] = { animationStart: -(boundingRects[0].width), animationEnd: (window.innerWidth - boundingRects[0].width) / 2 }
      newDimensions[1] = {
        animationStart: (window.innerWidth - boundingRects[1].width) / 2,
        animationEndPrevious: window.innerWidth,
        animationEndNext: -boundingRects[1].width,
      }
      newDimensions[2] = { animationStart: window.innerWidth, animationEnd: (window.innerWidth - boundingRects[2].width) / 2 }
      setDimensions(newDimensions)
    }
    setImageDimensions()
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  }, [previous, next])
  return [activeId, previous, next, dimensions, previousImage, nextImage ]
}

const Container = styled.div`

`

const Gallery = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
`

const PreviousImg = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  width: auto;
  max-width: 95%;
  max-height: 90%;
  position: absolute;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
  left: -${window.innerWidth}px;
  ${props => props.previous && css`
    animation:  ${props => slide({ start: props.dimension.animationStart, end: props.dimension.animationEnd })} 0.5s ease-out;
  `}
`

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  width: auto;
  max-width: 95%;
  max-height: 90%;
  object-fit: cover;
  position: absolute;
  user-select: none;
  pointer-events: none;
  ${props => props.previous && css`
    animation:  ${props => slide({ start: props.dimension.animationStart, end: props.dimension.animationEndPrevious })} 0.5s ease-out;
  `}
  ${props => props.next && css`
    animation:  ${props => slide({ start: props.dimension.animationStart, end: props.dimension.animationEndNext })} 0.5s ease-out;
  `}
`

const NextImg = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  width: auto;
  max-width: 95%;
  max-height: 90%;
  object-fit: cover;
  position: absolute;
  user-select: none;
  pointer-events: none;
  left: ${window.innerWidth}px;
  ${props => props.next && css`
    animation:  ${props => slide({ start: props.dimension.animationStart, end: props.dimension.animationEnd })} 0.5s ease-out;
  `}
`

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default withRouter(SwipeGalleryMy)
