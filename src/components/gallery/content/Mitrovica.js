import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { mitrovicaCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Mitrovica = () => {
  return (
    <Container>
      <CoverImg img={mitrovicaCover}/>
      <Gallery header={'Mitrovica'} url={'/gallery/mitrovica'} imgUrl={'/mitrovica'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Mitrovica
