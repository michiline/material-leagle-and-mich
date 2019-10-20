import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { dugiCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Dugi = () => {
  return (
    <Container>
      <CoverImg img={dugiCover}/>
      <Gallery header={'Dugi Otok'} url={'/gallery/dugi'} imgUrl={'/dugi'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Dugi
