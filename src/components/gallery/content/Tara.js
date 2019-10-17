import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { taraCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Tara = () => {
  return (
    <Container>
      <CoverImg img={taraCover}/>
      <Gallery header={'Tara'} url={'/gallery/tara'} imgUrl={'/gallery/home'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Tara
