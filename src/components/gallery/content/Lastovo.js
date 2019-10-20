import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { lastovoCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Lastovo = () => {
  return (
    <Container>
      <CoverImg img={lastovoCover}/>
      <Gallery header={'Lastovo'} url={'/gallery/lastovo'} imgUrl={'/lastovo'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Lastovo
