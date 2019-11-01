import React, { useState, createRef } from 'react'
import { withRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { CoverImgCenterText, ImageGrid, Gallery } from '../../general'
import { galleryImageBundle } from '../../../images'
import SwipeGallery from './SwipeGallery'

const GalleryRoute = ({ match, hide, setHide }) => {
  const { cover, images, text: { h1, h2, h3}, ratios } = galleryImageBundle(match.params.galleryName)
  const [show, id, showSwipe, hideSwipe, setLocalStorageId] = useSwipeGallery({ setHide, showInitial: localStorage.getItem('show') === 'true' })
  return (
    <Container show={show}>
      <CoverImgCenterText h1={h1} h2={h2} img={cover}/>
      { !show && <Gallery text={h3} galleryName={match.params.galleryName} url={`/gallery/${match.params.galleryName}`} images={images} showSwipe={showSwipe} />}
      { show && <SwipeGallery images={images} ratios={ratios} id={id} hideSwipe={hideSwipe}  id={id} setId={setLocalStorageId}/>}
    </Container>
  )
}

const useSwipeGallery = ({ showInitial, setHide }) => {
  const [show, setShow] = useState(showInitial)
  const [id, setId] = useState(parseInt(localStorage.getItem('id')))
  const setLocalStorageId = ({ id }) => {
    if (typeof id === 'string') {
      setId(parseInt(id))
      localStorage.setItem('id', id)
    } else {
      setId(id)
      localStorage.setItem('id', id)
    }
  }
  const showSwipe = ({ id }) => {
    setShow(true)
    localStorage.setItem('show', true)
    setLocalStorageId({ id })
    window.scrollTo({ top: 0, behaviour: 'smooth' })
    setHide(true)
    localStorage.setItem('hide', true)
  }
  const hideSwipe = () => {
    localStorage.setItem('show', false)
    localStorage.setItem('hide', false)
    setHide(false)
    setShow(false)
  }
  return [show, id, showSwipe, hideSwipe, setLocalStorageId]
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
  ${props => props.show && css`
    height: 100vh;
    overflow: hidden;
  `}
`

export default withRouter(GalleryRoute)
