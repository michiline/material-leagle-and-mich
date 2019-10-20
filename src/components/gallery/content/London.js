import React from 'react'
import styled from 'styled-components'
import { CoverImg, Gallery } from '../../general'
import { londonCover } from '../../../images'
import { galleryDescription } from '../../../content'

const London = () => {
  return (
    <Container>
      <CoverImg img={londonCover}/>
      <Gallery header={'London'} url={'/gallery/london'} imgUrl={'/london'} />
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default London
