import React from 'react'
import styled from 'styled-components'
import { Slideshow, CardGrid, Gallery, About } from './components'

const Home = () => {
  return (
    <Container>
      <Slideshow />
      <CardGrid />
      <Gallery />
      <About />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 750px) {
    padding-top: 7rem;
  }
`

export default Home
