import React from 'react'
import styled from 'styled-components'
import * as G from '../../general'
import { blogsDescription } from '../../../content'
import { blogsCover } from '../../../images'
import { shadow, padding } from '../../../style'

const Home = () => {
  return (
    <Container>
      <G.CoverImgCenterText h1Text={'Putopisi'} h2Text={'(Za one koji žele znati više...)'} img={blogsCover}/>
      <G.CardGrid header={'Putopisi'} url={'/blogs'} content={blogsDescription}/>
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
`

const CoverImgContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 100vh;
  max-width: 100%;
  overflow: hidden;
  display: grid;
  gird-template-columns: 1fr 100% 1fr;
  grid-template-rows: 1fr min-content 1fr;
  align-items: center;
  box-shadow: ${shadow.dp1};
`

const Text = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  z-index: 2;
  opacity: 1;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
`

const H1 = styled(G.H1)`
  padding: ${padding.medium};
  font-weight: 700 !important;
  font-family: 'Mansalva';
  width: max-content;
`

const H2 = styled(G.H3)`
  color: white;
  font-family: 'Amatic SC';
  width: max-content;
`

const GreyContainer = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 4;
  background-color: #24272E;
  opacity: 0.4;
  z-index: 1;
  height: 100%;
`

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  grid-column: 1 / 4;
  grid-row: 1 / 4;
  object-fit: cover;
  width: 100%;
`

export default Home
