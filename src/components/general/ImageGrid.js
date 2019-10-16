import React from 'react'
import { withRouter } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'
import { H3 } from './text'
import { FlexColumnCenterContainer } from './containers'
import { padding } from '../../style'

const ImageGrid = ({ history, header, url, content }) => {
  return (
    <Container>
      <Header onClick={ e => to({ history, url })}>{header}</Header>
      <Grid>
        {content.map((image, index) => <Image {...image} key={index} />)}
      </Grid>
    </Container>
  )
}

const Container = styled(FlexColumnCenterContainer)`

`

const Header = styled(H3)`
  padding: ${padding.medium};
  font-family: 'Amatic SC';
  font-weight: 700;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
`

const Grid = styled.div`
  padding: ${padding.small};
  display: grid;
  grid-template-columns: repeat(2, calc((100vw - 5*${padding.small}) / 2));
  grid-template-rows: repeat(4, calc((100vw - 5*${padding.small}) / 2));
  @media only screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, calc((100vw - 6*${padding.small}) / 3));
    grid-template-rows: repeat(3, calc((100vw - 6*${padding.small}) / 3));
  }
  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(4, calc((100vw - 7*${padding.small}) / 4));
    grid-template-rows: repeat(2, calc((100vw - 7*${padding.small}) / 4));
  }
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: min-content;
`

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  width: 100%;
  height: 100%;
  object-fit: cover;

`

const Image = (props) =>
  <ImgContainer>
    <Img img={props.img}/>
  </ImgContainer>

const to = ({ history, url }) => {
  history.push(url)
}


export default withRouter(ImageGrid)
