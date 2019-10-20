import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { nassfeldCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Nassfeld = () => {
  return (
    <Container>
      <CoverImg img={nassfeldCover}/>
      <Gallery header={'Nassfeld'} url={'/gallery/nassfeld'} imgUrl={'/nassfeld'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Nassfeld
