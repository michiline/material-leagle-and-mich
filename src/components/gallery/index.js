import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Home } from './components'

const Gallery = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={Home} />
    </Switch>
  )
}

export default Gallery
