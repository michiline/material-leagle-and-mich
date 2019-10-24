import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router-dom'
import { CoverImgCenterText, ImageGrid } from '../../general'
import { galleryCover, galleryImages } from '../../../images'
import { galleryDescription } from '../../../content'
import { slide } from '../../general'

const SwipeGalleryMy = ({ match }) => {
  const images = galleryImages[match.params.galleryName]
  let refs = []
  let [activeId, previous, next, dimensions, previousImage, nextImage] = useDimensions({ refs })
  return (
    <Container>
      <Gallery>
        {renderImages({ images, dimensions, refs })}
      </Gallery>
    </Container>
  )
}

const renderImages = ({ images, dimensions, refs}) => images.map((image, index) => <Img img={image} dimension={dimensions[index]} key={index} ref={ref => refs.push(ref)}/>)

const useDimensions = ({ refs }) => {
  let [previous, setPrevious] = useState(false)
  let [next, setNext] = useState(false)
  let [activeId, setActiveId] = useState(0)
  let [dimensions, setDimensions] = useState([...Array(refs.length)].map(() => {}))
  const previousImage = async () => {

  }
  const nextImage = async () => {

  }
  useEffect(() => {
    const resizeListener = (e) => {
      window.location.reload()
      setImageDimensions()
    }
    const setImageDimensions = () => {
      // console.log(refs)
      const newDimensions = refs.map(ref => {
        console.log(ref.getBoundingClientRect())
        return {
          margin: (window.innerWidth - ref.width) / 2
        }
      })
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
  width: 20000px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  overflow: hidden;
`

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  max-width: 95%;
  max-height: 90%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
  ${props => props.dimension && css`
    margin-left: ${props => props.dimension.margin};
    margin-right: ${props => props.dimension.margin};
  `}
`
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default withRouter(SwipeGalleryMy)
