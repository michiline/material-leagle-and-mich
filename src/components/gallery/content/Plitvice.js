import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { plitviceCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Plitvice = () => {
  return (
    <Container>
      <CoverImg img={plitviceCover}/>
      <Gallery header={'Plitvička jezera'} url={'/gallery/plitvice'} imgUrl={'/plitvice'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Plitvice
