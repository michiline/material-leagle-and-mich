import React from 'react'
import { withRouter } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'
import { RippleComponent, useClicked } from '../../hooks'
import { padding, shadow } from '../../style'
import Card from './Card'
import { H3 } from './text'
import { FlexColumnCenterContainer } from './containers'

const CardGrid = ({ history, header, url, content }) => {
  return (
    <Container>
      <Header onClick={ e => to({ history, url })}>{header}</Header>
      <Grid>
        {content.map((cardContent, index) => <Card {...cardContent} key={index} />)}
      </Grid>
    </Container>
  )
}
          // <RippleComponent Component={ShareIcon} img={{ src: `${process.env.PUBLIC_URL}/img/share-24px.svg`}} />
//

const Container = styled(FlexColumnCenterContainer)`
  padding-bottom: 0;
`

const Header = styled.p`
  font-size: 4.8rem;
  letter-spacing: 0;
  line-height: 1.6;
  padding: ${padding.medium};
  font-family: 'Amatic SC';
  font-weight: 700;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
`

const Grid = styled.div`
  padding-top: ${padding.small};
  display: grid;
  grid-template-columns: 100%
  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
`

const to = ({ history, url }) => {
  history.push(url)
}


export default withRouter(CardGrid)
