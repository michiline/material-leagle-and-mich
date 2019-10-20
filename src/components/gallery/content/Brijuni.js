import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { brijuniCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Brijuni = () => {
  return (
    <Container>
      <CoverImg img={brijuniCover}/>
      <Gallery header={'Brijuni'} url={'/gallery/brijuni'} imgUrl={'/brijuni'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Brijuni
