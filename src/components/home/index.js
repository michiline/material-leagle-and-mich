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
  padding-top: 6rem;
`

export default Home
