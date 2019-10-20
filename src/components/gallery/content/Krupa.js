import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { krupaCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Krupa = () => {
  return (
    <Container>
      <CoverImg img={krupaCover}/>
      <Gallery header={'Krupa'} url={'/gallery/krupa'} imgUrl={'/krupa'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Krupa
