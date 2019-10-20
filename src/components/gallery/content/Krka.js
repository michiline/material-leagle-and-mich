import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { krkaCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Krka = () => {
  return (
    <Container>
      <CoverImg img={krkaCover}/>
      <Gallery header={'Krka'} url={'/gallery/krka'} imgUrl={'/krka'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Krka
