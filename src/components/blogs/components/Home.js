import React from 'react'
import styled from 'styled-components'
import { CardGrid, CoverImg } from '../../general'
import { blogsDescription } from '../../../content'
import { blogsCover } from '../../../images'

const Home = () => {
  return (
    <Container>
      <CoverImg img={blogsCover}/>
      <CardGrid header={'Travel Blogs'} url={'/blogs'} content={blogsDescription.slice(0, 6)}/>
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 750px) {
    padding-top: 7rem;
  }
`

export default Home
