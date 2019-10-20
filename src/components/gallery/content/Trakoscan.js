import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { trakoscanCover } from '../../../images'
import { galleryDescription } from '../../../content'

const Trakoscan = () => {
  return (
    <Container>
      <CoverImg img={trakoscanCover}/>
      <Gallery header={'Trakošćan'} url={'/gallery/trakoscan'} imgUrl={'/trakoscan'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Trakoscan
