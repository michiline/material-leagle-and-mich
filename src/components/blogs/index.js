import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Home } from './components'
import { Soca, Krka } from './content'

const Blogs = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={Home} />
      <Route exact path={`${match.path}/soca`} component={Soca} />
      <Route exact path={`${match.path}/krka`} component={Krka} />
    </Switch>
  )
}

export default Blogs
