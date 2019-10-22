import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { parizCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Pariz = () => {
  return (
    <Container>
      <CoverImg img={parizCover}/>
      <Gallery header={'Pariz'} url={'/gallery/pariz'} imgUrl={'/pariz'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Pariz