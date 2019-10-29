import React from 'react'
import styled from 'styled-components'
import { Slideshow, About } from './components'
import { CardGrid, Gallery } from '../general'
import { galleryImageBundle, blogs } from '../../images'

const Home = () => {
  const { images } = galleryImageBundle('home')
  return (
    <Container>
      <Slideshow />
      <CardGrid header={'Najnoviji Putopisi'} url={'/blogs'} content={blogs}/>
      <Gallery text={'Galerija'} url={'/gallery'} galleryName={'home'} images={images} hide={true}/>
      <About />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 1250px) {
    padding-top: 9rem;
  }
`

export default Home
