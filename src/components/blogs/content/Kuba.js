import React from 'react'
import styled from 'styled-components'
import { CoverImg } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img } from '../components'
import { kubaCover, kuba, star } from '../../../images'

const Kuba = () => {
  return (
    <>
      <Container>
        <CoverImg img={kubaCover}/>
        <BlogContainer>
          <Header>Viva La Revolución</Header>

        </BlogContainer>
      </Container>
    </>
  )
}

export default Kuba
