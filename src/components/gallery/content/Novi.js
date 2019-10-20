import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { noviCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Novi = () => {
  return (
    <Container>
      <CoverImg img={noviCover}/>
      <Gallery header={'Novi Vinodolski'} url={'/gallery/novi'} imgUrl={'/novi'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Novi
