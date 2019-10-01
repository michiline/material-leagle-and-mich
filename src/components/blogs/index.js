import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Home } from './components'
import { Soca, Krka, Kuba } from './content'

const Blogs = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={Home} />
      <Route exact path={`${match.path}/soca`} component={Soca} />
      <Route exact path={`${match.path}/krka`} component={Krka} />
      <Route exact path={`${match.path}/kuba`} component={Kuba} />
    </Switch>
  )
}

export default Blogs
