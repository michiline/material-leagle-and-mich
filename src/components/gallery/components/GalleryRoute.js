import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText, ImageGrid, Gallery } from '../../general'
import { galleryImageBundle } from '../../../images'

const GalleryRoute = ({ match }) => {
  const { cover, images, text: { h1, h2, h3} } = galleryImageBundle(match.params.galleryName)
  return (
    <Container>
      <CoverImgCenterText h1={h1} h2={h2} img={cover}/>
      <Gallery text={h3} galleryName={match.params.galleryName} url={`/gallery/${match.params.galleryName}`} images={images}/>>
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default GalleryRoute
