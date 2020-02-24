import React, { useState, useEffect, createRef } from 'react'
import { withRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { CoverImgCenterText, ImageGrid, Gallery } from '../../general'
import { getGalleryImages } from '../../../images'
import SwipeGallery from './SwipeGallery'

const GalleryRoute = ({ match, location, hide, setHide }) => {
  const { cover, images, text: { h1, h2, h3}, ratios } = getGalleryImages(match.params.galleryName)
  let [show, setShow] = useState(false)
  let [imageId, setImageId] = useState(0)
  return (
    <Container>
      <CoverImgCenterText h1={h1} h2={h2} img={cover}/>
      <Gallery text={h3} galleryName={match.params.galleryName} url={`/gallery/${match.params.galleryName}`} images={images} setShow={setShow} setImageId={setImageId}/>
      { show && <SwipeGallery images={images} ratios={ratios} show={show} setShow={setShow} imageId={imageId}/>}
    </Container>
  )
}

const useWindowHeight = function () {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  useEffect(() => {
    const resizeListener = (e) => {
      setWindowHeight(e.target.innerHeight)
    }
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  })
  return [windowHeight, setWindowHeight]
}

const getId = (searchString) => {
  const split = searchString.substring(1).split('=')
  if (split.length !== 1) {
    return parseInt(split[1])
  } else {
    return 0
  }
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default withRouter(GalleryRoute)
