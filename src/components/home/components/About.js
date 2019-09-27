import React, { useRef } from 'react'
import styled, { css } from 'styled-components'

import { useIntersection } from '../../../hooks'
import { ana, mislav } from '../../../images'
import { padding, shadow } from '../../../style'
import * as G from '../../general'

const About = () => {
  const refs = [useRef(null), useRef(null)]
  const [visible] = useIntersection({ elements: refs, threshold: 0.1 })
  return (
    <Container>
      <Header>About Us</Header>
      <RowContainer visible={visible[0]} ref={refs[0]} id={0}>
        <TextContainer>
          <Title>Mislav o Ani</Title>
          <Subtitle>"Voli sunce, fotografiju i sladoled."</Subtitle>
        </TextContainer>
        <Circle img={ana}/>
      </RowContainer>
      <RowContainer visible={visible[1]} ref={refs[1]} id={1}>
        <Circle img={mislav}/>
        <TextContainer>
          <Title>Ana o Mislavu</Title>
          <Subtitle>"Voli hlad, kodiranje i čips."</Subtitle>
        </TextContainer>
      </RowContainer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: ${padding.small};
`

  // background-image: linear-gradient(-45deg, #EEF0F3 0%, #F6F5F3 100%);

const Header = styled(G.H4)`
  padding: ${padding.medium};
`

const Title = styled(G.H6)`
  padding: ${padding.smallest};
`

const Subtitle = styled(G.Body2)`
  color: rgba(0, 0, 0, 0.54);
  padding: ${padding.smallest};
  font-style: oblique;
`
const RowContainer = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${props => props.visible && css`
    animation:  ${props => G.slideAppear({x1: 0, y1: 30, z1: 0, x2: 0, y2: 0, z2: 0})} 0.5s ease-in-out;
    animation-fill-mode: forwards;
  `}
  padding: ${padding.small};
`

const TextContainer = styled(G.flexColumnCenterContainer)`

`

const Circle = styled.div(({ img: { src } }) => `
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  background-position: center;
  background-size: cover;
  background-image: url(${src});
`)

export default About
