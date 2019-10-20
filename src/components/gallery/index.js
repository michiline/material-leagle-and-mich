import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Home } from './components'
import { Soca, Krka, Tara, Brijuni, Dugi, Budimpesta, Barcelona, Krupa, Kuba, Fuzine, Lastovo, London, Mitrovica, Mljet, Nassfeld, Novi, Pariz, Plitvice, Tabor, Trakoscan, Vransko, Zagreb } from './content'

const Gallery = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={Home} />
      <Route exact path={`${match.path}/tara`} component={Tara} />
      <Route exact path={`${match.path}/krka`} component={Krka} />
      <Route exact path={`${match.path}/soca`} component={Soca} />
      <Route exact path={`${match.path}/brijuni`} component={Brijuni} />
      <Route exact path={`${match.path}/dugi`} component={Dugi} />
      <Route exact path={`${match.path}/budimpesta`} component={Budimpesta} />
      <Route exact path={`${match.path}/fuzine`} component={Fuzine} />
      <Route exact path={`${match.path}/barcelona`} component={Barcelona} />
      <Route exact path={`${match.path}/krupa`} component={Krupa} />
      <Route exact path={`${match.path}/kuba`} component={Kuba} />
      <Route exact path={`${match.path}/lastovo`} component={Lastovo} />
      <Route exact path={`${match.path}/london`} component={London} />
      <Route exact path={`${match.path}/mitrovica`} component={Mitrovica} />
      <Route exact path={`${match.path}/mljet`} component={Mljet} />
      <Route exact path={`${match.path}/nassfeld`} component={Nassfeld} />
      <Route exact path={`${match.path}/novi`} component={Novi} />
      <Route exact path={`${match.path}/pariz`} component={Pariz} />
      <Route exact path={`${match.path}/plitvice`} component={Plitvice} />
      <Route exact path={`${match.path}/tabor`} component={Tabor} />
      <Route exact path={`${match.path}/trakoscan`} component={Trakoscan} />
      <Route exact path={`${match.path}/vransko`} component={Vransko} />
      <Route exact path={`${match.path}/zagreb`} component={Zagreb} />
    </Switch>
  )
}

export default Gallery
