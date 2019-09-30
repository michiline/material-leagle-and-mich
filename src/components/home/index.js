import React from 'react'
import styled from 'styled-components'
import { Slideshow, Gallery, About } from './components'
import { CardGrid } from '../general'
import { blogsDescription } from '../../content'

const Home = () => {
  return (
    <Container>
      <Slideshow />
      <CardGrid header={'Travel Blogs'} url={'/blogs'} content={blogsDescription.slice(0, 6)}/>
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
