import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { taborCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Tabor = () => {
  return (
    <Container>
      <CoverImg img={taborCover}/>
      <Gallery header={'Veliki Tabor'} url={'/gallery/tabor'} imgUrl={'/tabor'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Tabor
