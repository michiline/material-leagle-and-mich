import React from 'react'
import styled from 'styled-components'
import { Slideshow, About } from './components'
import { CardGrid, Gallery } from '../general'
import { blogsDescription } from '../../content'

const Home = () => {
  return (
    <Container>
      <Slideshow />
      <CardGrid header={'Travel Blogs'} url={'/blogs'} content={blogsDescription.slice(0, 6)}/>
      <Gallery header={'Travel Gallery'} url={'/gallery'} imgUrl={'/gallery/home'} />
      <About />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 7rem;
  }
`

export default Home
