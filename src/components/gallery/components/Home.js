import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText, ImageGrid } from '../../general'
import { getCovers, getGalleryBoxesImages } from '../../../images'

const Home = () => {
  const coverImage = getCovers({ type: 'gallery', name: 'index' })
  const boxesImages = getGalleryBoxesImages()
  return (
    <Container>
      <CoverImgCenterText h1={'Galerija Fotografija'} h2={'Za one kojima su fotke sasvim dovoljne...'} img={coverImage}/>
      <ImageGrid text={'Galerija'} url={'/gallery'} content={boxesImages}/>
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Home
