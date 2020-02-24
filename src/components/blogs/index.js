import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Home } from './components'
import { Kuba, Soca, Krka, Tara, Kamacnik, Motovun, Srilanka, SrilankaBeaches } from './content'

const Blogs = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={Home} />
      <Route exact path={`${match.path}/srilanka-beaches`} component={SrilankaBeaches} />
      <Route exact path={`${match.path}/srilanka`} component={Srilanka} />
      <Route exact path={`${match.path}/motovun`} component={Motovun} />
      <Route exact path={`${match.path}/kamacnik`} component={Kamacnik} />
      <Route exact path={`${match.path}/tara`} component={Tara} />
      <Route exact path={`${match.path}/krka`} component={Krka} />
      <Route exact path={`${match.path}/soca`} component={Soca} />
      <Route exact path={`${match.path}/kuba`} component={Kuba} />
    </Switch>
  )
}

export default Blogs
