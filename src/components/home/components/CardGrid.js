import React, { useRef, useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { RippleComponent, useClicked } from '../../../hooks'
import { padding, shadow } from '../../../style'
import * as G from '../../general'
import Card from './Card'


const Home = () => {
  const content = [
    {
      img: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`,
      title: 'The Emerald River',
      subtitle: 'Soča, Slovenia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      img: `${process.env.REACT_APP_SERVER}/images/slideshow/2.jpg`,
      title: 'The Emerald River',
      subtitle: 'Soča, Slovenia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      img: `${process.env.REACT_APP_SERVER}/images/slideshow/3.jpg`,
      title: 'The Emerald River',
      subtitle: 'Soča, Slovenia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      img: `${process.env.REACT_APP_SERVER}/images/slideshow/4.jpg`,
      title: 'The Emerald River',
      subtitle: 'Soča, Slovenia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]
  return (
    <Grid>
      {content.map((cardContent, index) => <Card {...cardContent} key={index} />)}
    </Grid>
  )
}
          // <RippleComponent Component={ShareIcon} img={{ src: `${process.env.PUBLIC_URL}/img/share-24px.svg`}} />
//

const Grid = styled.div`
  padding: ${padding.small};
  display: grid;
  grid-template-columns: repeat(auto-fit, 100%);
  grid-gap: 1rem;
  justify-content: start;
`


export default Home
