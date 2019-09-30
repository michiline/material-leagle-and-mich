import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Home } from './components'

const Blogs = ({ match }) => {
  return (
    <Container>
      <Switch>
        <Route exact path={match.path} component={Home} />
      </Switch>
    </Container>
  )
}

const Container = styled.div`
  @media only screen and (max-width: 750px) {
    padding-top: 7rem;
  }
`

export default Blogs
