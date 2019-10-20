import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { fuzineCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Fuzine = () => {
  return (
    <Container>
      <CoverImg img={fuzineCover}/>
      <Gallery header={'Fužine'} url={'/gallery/fuzine'} imgUrl={'/fuzine'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Fuzine
