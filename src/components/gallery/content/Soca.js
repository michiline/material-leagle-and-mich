import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { socaCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Soca = () => {
  return (
    <Container>
      <CoverImg img={socaCover}/>
      <Gallery header={'Soča'} url={'/gallery/soca'} imgUrl={'/gallery/home'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Soca
