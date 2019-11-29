import React, { useState } from 'react'
import styled from 'styled-components'
import { Slideshow, About } from './components'
import { CardGrid, Gallery } from '../general'
import { imageBundleRatioHome, blogs } from '../../images'

const Home = () => {
  let [images, setImages] = useState(imageBundleRatioHome({ length: 30 }))
  return (
    <Container>
      <Slideshow />
      <CardGrid header={'Najnoviji Putopisi'} url={'/blogs'} content={blogs.slice(0, 4)}/>
      <Gallery text={'Nasumične fotke'} url={'/gallery'} galleryName={'home'} images={images} hide={true} setImages={setImages}/>
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
