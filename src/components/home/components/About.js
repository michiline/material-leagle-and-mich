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
      <ContentContainer>
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
      </ContentContainer>
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

const Header = styled(G.H3)`
  padding: ${padding.medium};
  font-family: 'Amatic SC';
  font-weight: 700;
`

const Title = styled(G.H6)`
  padding: ${padding.smallest};
  font-family: 'Montserrat';
`

const Subtitle = styled(G.Body2)`
  color: rgba(0, 0, 0, 0.54);
  padding: ${padding.smallest};
  text-align: center;
  font-family: 'Montserrat';
`

const ContentContainer = styled.div`
  padding-bottom: ${padding.medium};
`

const RowContainer = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: calc(5rem + 5vw);
  height: calc(5rem + 5vw);
  background-position: center;
  background-size: cover;
  background-image: url(${src});
`)

export default About
