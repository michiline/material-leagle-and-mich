import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { barcelonaCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Barcelona = () => {
  return (
    <Container>
      <CoverImg img={barcelonaCover}/>
      <Gallery header={'Barcelona'} url={'/gallery/barcelona'} imgUrl={'/barcelona'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Barcelona
