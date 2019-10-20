import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { budimpestaCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Budimpesta = () => {
  return (
    <Container>
      <CoverImg img={budimpestaCover}/>
      <Gallery header={'Budimpešta'} url={'/gallery/budimpesta'} imgUrl={'/budimpesta'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Budimpesta
