import React from 'react'
import styled from 'styled-components'
import { Slideshow, About } from './components'
import { CardGrid, Gallery } from '../general'
import { blogsDescription } from '../../content'

const Home = () => {
  return (
    <Container>
      <Slideshow />
      <CardGrid header={'Najnoviji Putopisi'} url={'/blogs'} content={blogsDescription.slice(0, 6)}/>
      <Gallery header={'Galerija'} url={'/gallery'} imgUrl={'/home'} />
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
