import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { kubaCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Kuba = () => {
  return (
    <Container>
      <CoverImg img={kubaCover}/>
      <Gallery header={'Kuba'} url={'/gallery/kuba'} imgUrl={'/kuba'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Kuba
