import React from 'react'
import styled from 'styled-components'
import { CoverImg } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img } from '../components'
import { krkaCover, krka, star } from '../../../images'

const Krka = () => {
  return (
    <>
      <Container>
        <CoverImg img={krkaCover}/>
        <BlogContainer>
          <Header>NP Krka</Header>

        </BlogContainer>
      </Container>
    </>
  )
}

export default Krka
