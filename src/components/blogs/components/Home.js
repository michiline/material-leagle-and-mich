import React from 'react'
import styled from 'styled-components'
import { CardGrid, CoverImg } from '../../general'
import { blogsDescription } from '../../../content'
import { blogsCover } from '../../../images'

const Home = () => {
  return (
    <Container>
      <CoverImg img={blogsCover}/>
      <CardGrid header={'Putopisi'} url={'/blogs'} content={blogsDescription}/>
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Home
