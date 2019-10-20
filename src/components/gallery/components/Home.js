import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText, ImageGrid } from '../../general'
import { galleryCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Home = () => {
  return (
    <Container>
      <CoverImgCenterText h1Text={'Galerija Fotografija'} h2Text={'(Za one kojima su fotke sasvim dovoljne)'} img={galleryCover}/>
      <ImageGrid header={'Galerija'} url={'/gallery'} content={galleryDescription}/>
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Home
