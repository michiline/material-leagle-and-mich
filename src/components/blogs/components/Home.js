import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText, CardGrid } from '../../general'
import { blogsCover, blogs } from '../../../images'
import { shadow, padding } from '../../../style'

const Home = () => {
  return (
    <Container>
      <CoverImgCenterText h1={'Putopisi'} h2={'Za one koji žele znati više...'} img={blogsCover}/>
      <CardGrid header={'Putopisi'} url={'/blogs'} content={blogs}/>
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Home
