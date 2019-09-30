import React, { useRef, useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { RippleComponent, useClicked } from '../../hooks'
import { padding, shadow } from '../../style'
import Card from './Card'
import { H3 } from './text'
import { flexColumnCenterContainer } from './containers'

const CardGrid = ({ content }) => {
  return (
    <Container>
      <Header>Travel Blogs</Header>
      <Grid>
        {content.map((cardContent, index) => <Card {...cardContent} key={index} />)}
      </Grid>
    </Container>
  )
}
          // <RippleComponent Component={ShareIcon} img={{ src: `${process.env.PUBLIC_URL}/img/share-24px.svg`}} />
//

const Container = styled(flexColumnCenterContainer)`

`

const Header = styled(H3)`
  padding: ${padding.medium};
  font-family: 'Amatic SC';
  font-weight: 700;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  @media only screen and (min-width: 750px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 2rem;
  }
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
`


export default CardGrid
