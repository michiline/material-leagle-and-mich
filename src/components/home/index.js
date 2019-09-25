import React from 'react'
import styled from 'styled-components'
import { CardGrid } from './components'


const Home = () => {
  return (
    <Container>
      <CardGrid />
    </Container>
  )
}

const Container = styled.div`
  padding-top: 6rem;
`

export default Home
