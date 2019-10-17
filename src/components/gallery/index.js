import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Home } from './components'
import { Tara, Krka, Soca } from './content'

const Gallery = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={Home} />
      <Route exact path={`${match.path}/tara`} component={Tara} />
      <Route exact path={`${match.path}/krka`} component={Krka} />
      <Route exact path={`${match.path}/soca`} component={Soca} />
    </Switch>
  )
}

export default Gallery
