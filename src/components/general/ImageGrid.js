import React from 'react'
import { withRouter } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'
import { H3 } from './text'
import { FlexColumnCenterContainer } from './containers'
import { padding, shadow } from '../../style'

const ImageGrid = ({ history, header, url, content }) => {
  return (
    <Container>
      <Header onClick={ e => to({ history, url })}>{header}</Header>
      <Grid>
        {content.map(({url, ...rest}, index) =>
          <ImgContainer onClick={e => to({ history, url })} key={index}>
            <OverlayGrey />
            <OverlayCentered>
              <OverlayRow>{rest.title}</OverlayRow>
            </OverlayCentered>
            <Img {...rest}/>
          </ImgContainer>
        )}
      </Grid>
    </Container>
  )
}

const Container = styled(FlexColumnCenterContainer)`

`

const Header = styled.p`
  font-size: 4.8rem;
  letter-spacing: 0;
  line-height: 1.6;
  padding: ${padding.medium};
  font-family: 'Amatic SC';
  font-weight: 700;
  &:active {
    transform: translateY(2px);
  }
  cursor: pointer;
`

const Grid = styled.div`
  padding: ${padding.small};
  display: grid;
  grid-template-columns: repeat(2, calc((100vw - 5*${padding.small}) / 2));
  grid-template-rows: repeat(4, calc((100vw - 5*${padding.small}) / 2));
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(3, calc((100vw - 6*${padding.small}) / 3));
    grid-template-rows: repeat(3, calc((100vw - 6*${padding.small}) / 3));
  }
  @media only screen and (min-width: 1000px) {
    grid-template-columns: repeat(4, calc((100vw - 7*${padding.small}) / 4));
    grid-template-rows: repeat(2, calc((100vw - 7*${padding.small}) / 4));
  }
  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(5, calc((100vw - 8*${padding.small}) / 5));
    grid-template-rows: repeat(2, calc((100vw - 8*${padding.small}) / 5));
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
  position: relative;
  border: ${shadow.dp1};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const OverlayGrey = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0.3;
  background-color: #24272E;
`

const OverlayRow = styled.p`
  font-size: 4.8rem;
  letter-spacing: 0;
  line-height: 1.6;
  padding: ${padding.medium};
  font-family: 'Amatic SC';
  font-weight: 700;
  color: white;
  z-index: 1;
  user-select: none;
`

const OverlayCentered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  text-align: center;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  &:active ${OverlayRow} {
    transform: translateY(2px);
  }
`

const to = ({ history, url }) => {
  history.push(url)
}


export default withRouter(ImageGrid)
