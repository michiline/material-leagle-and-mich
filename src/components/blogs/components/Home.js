import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText, CardGrid } from '../../general'
import { getCovers, getCardsImages } from '../../../images'
import { shadow, padding } from '../../../style'

const Home = () => {
  const coverImage = getCovers({ type: 'blogs', name: 'index' })
  const cardsImages = getCardsImages()
  return (
    <Container>
      <CoverImgCenterText h1={'Putopisi'} h2={'Za one koji žele znati više...'} img={coverImage}/>
      <CardGrid header={'Putopisi'} url={'/blogs'} content={cardsImages}/>
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

export default Home
