import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText, ImageGrid } from '../../general'
import { galleryCover, galleries } from '../../../images'

const Home = () => {
  return (
    <Container>
      <CoverImgCenterText h1={'Galerija Fotografija'} h2={'Za one kojima su fotke sasvim dovoljne...'} img={galleryCover}/>
      <ImageGrid text={'Galerija'} url={'/gallery'} content={galleries}/>
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Home
