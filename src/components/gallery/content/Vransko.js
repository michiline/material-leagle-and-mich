import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { vranskoCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Vransko = () => {
  return (
    <Container>
      <CoverImg img={vranskoCover}/>
      <Gallery header={'Vransko jezero'} url={'/gallery/vransko'} imgUrl={'/vransko'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Vransko
