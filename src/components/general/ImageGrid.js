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
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
`

const ImgContainer = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const Image = (props) =>
  <ImgContainer>
    <Img img={props.img}/>
  </ImgContainer>

const to = ({ history, url }) => {
  history.push(url)
}


export default withRouter(ImageGrid)
