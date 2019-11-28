import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText, FlexColumnCenterContainer, H3 } from '../general'
import { about } from '../../images'
import { padding } from '../../style'

const About = () => {
  const { cover, images } = about
  return (
    <Container>
      <CoverImgCenterText h1={'Tko smo mi?'} h2={'Psihologinja i ferovac u potrazi za avanturom'} img={cover}/>
      <Header> Mi o sebi</Header>
      <InnerContainer>
        {renderRows({ images })}
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 1250px) {
    padding-top: 9rem;
  }
`

const Header = styled.p`
  font-size: 4.8rem;
  letter-spacing: 0;
  line-height: 1.6;
  padding: ${padding.medium};
  width: max-content;
  font-family: 'Amatic SC';
  font-weight: 700;
  &:active {
    transform: translateY(2px);
  }
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: min-content;
  padding-bottom: ${padding.medium};
`

const renderRows = ({ images, index }) =>
  images.map((img, index) => {
    if (index % 2) {
      return (
        <Row>
          <Text>{img.text}</Text>
          <Img img={img} />
        </Row>
      )
    } else {
      return (
        <Row>
          <Img img={img} />
          <Text>{img.text}</Text>
        </Row>
      )
    }
  })


const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: min-content;
  width: 100%;
  max-width: 100rem;
  margin-top: ${padding.small};
  margin-bottom: ${padding.small};
`

const Text = styled(H3)`
  font-family: 'Amatic SC';
  width: max-content;
  height: max-content;
  width: 50%;
  text-align: center;
  margin: ${padding.small};
`

export const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  overflow: hidden;
  width: 50%;
  border-radius: 4px;
  margin: ${padding.small};
`







export default About
