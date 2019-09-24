import React, { useRef, useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { RippleComponent } from '../hooks'
import { padding, shadow } from '../style'
import * as G from './general'

const Home = () => {
  const [expand, setExpand] = useState([...Array(5)].map(() => false))
  return (
    <Grid>
      <Card onClick={e => expandOnClick({ expand, setExpand, index: 0})}>
        <Img img={{ src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`}}/>
        <PrimaryTitle>
          <Title>The Emerald River</Title>
          <Subtitle>Soča, Slovenia</Subtitle>
        </PrimaryTitle>
        { expand[0] && (
          <>
          <SupportingText>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Description>
          </SupportingText>
          <Actions>
            <RippleComponent Component={Button} value={'Read'} />
            <RippleComponent Component={ShareIcon} img={{ src: `${process.env.PUBLIC_URL}/img/share-24px.svg`}} />
          </Actions>
          </>
        )}
      </Card>
      <Card>
        <Img img={{ src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`}}/>
      </Card>
      <Card>
        <Img img={{ src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`}}/>
      </Card>
      <Card>
        <Img img={{ src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`}}/>
      </Card>
      <Card>
        <Img img={{ src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`}}/>
      </Card>
      <Card>
        <Img img={{ src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg`}}/>
      </Card>

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
  align-items: center;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  box-shadow: ${shadow.dp1};
  border-radius: 4px;
`

// &:hover {
//   box-shadow: ${shadow.dp0} !important;
// }

const PrimaryTitle = styled.div`
  padding: ${padding.medium};
`

const Title = styled(G.H6)`

`

const Subtitle = styled(G.Subtitle2)`
  color: rgba(0, 0, 0, 0.54);
  font-weight: 500;
`

const SupportingText = styled.div`
  padding-left: ${padding.medium};
  padding-right: ${padding.medium};
`

const Description = styled(G.Body2)`
  color: rgba(0, 0, 0, 0.54);
`

const Tags = styled(G.Body2)`

`

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${padding.small};
`

const Button = styled(G.ButtonTransparent)`
  padding-left: ${padding.small};
  padding-right: ${padding.small};
  height: calc(3.4rem + ${padding.small});
  position: relative;
  overflow: hidden;
`

const ShareIcon = styled(G.Icon)`
  border-radius: 50%;
  &:hover {
    background-color: #F5F5F5;
  }
  &:focus {
    outline: none;
  }
  position: relative;
  overflow: hidden;
`
const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const expandOnClick = ({ index, expand, setExpand}) => {
  let newExpand = [...expand]
  newExpand[index] = !expand[index]
  setExpand(newExpand)
}


export default Home
