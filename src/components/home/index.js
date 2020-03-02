import React, { useState } from 'react'
import styled from 'styled-components'
import { Slideshow, About } from './components'
import { CardGrid, Gallery } from '../general'
import { getRandomImages, getCardsImages } from '../../images'

const Home = () => {
  const cardsImages = getCardsImages()
  let [images, setImages] = useState(getRandomImages({ length: 30 }))
  return (
    <Container>
      <Slideshow />
      <CardGrid header={'Najnoviji Putopisi'} url={'/blogs'} content={cardsImages.slice(0,4)} responsive={true}/>
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
