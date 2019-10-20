import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { zagrebCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Zagreb = () => {
  return (
    <Container>
      <CoverImg img={zagrebCover}/>
      <Gallery header={'Zagreb'} url={'/gallery/zagreb'} imgUrl={'/zagreb'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Zagreb
