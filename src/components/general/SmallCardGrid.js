import React from 'react'
import { withRouter } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'
import { RippleComponent, useClicked } from '../../hooks'
import { padding, shadow } from '../../style'
import SmallCard from './SmallCard'
import { H3 } from './text'
import { FlexColumnCenterContainer } from './containers'

const CardGrid = ({ history, header, url, content }) => {
  return (
    <Container>
      <Header onClick={ e => to({ history, url })}>{header}</Header>
      <Grid>
        {content.map((cardContent, index) => <SmallCard {...cardContent} key={index}/>)}
      </Grid>
    </Container>
  )
}

const Container = styled(FlexColumnCenterContainer)`
  padding-bottom: ${padding.medium};
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
`

const to = ({ history, url }) => {
  history.push(url)
}


export default withRouter(CardGrid)
